import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import speakerFixture from './fixtures/speaker'


jest.mock('@/api');

describe('Store actions', () => {
    let commit;

    beforeEach(() => {
        commit = jest.fn()
    });

    it('fetches speaker', async () => {

        const expectedSpeaker = 'xavism';


        await actions.FETCH_SPEAKER({ commit }, expectedSpeaker )
        await flushPromises()

        expect(api.searchSpeaker).toHaveBeenCalledWith(expectedSpeaker)
        expect(commit).toHaveBeenCalledWith('SET_SPEAKER', speakerFixture)
    })
})