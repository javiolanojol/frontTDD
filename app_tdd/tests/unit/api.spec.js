import flushPromises from 'flush-promises'
import nock from 'nock'
import api from '@/api'
import speakerFixture from './fixtures/speaker'

describe('Api', () => {
    it('search the speaker', async () => {

        const expectedSpeaker = 'xavism'

        const request = nock('https://api.github.com')
            .get(`/users/${expectedSpeaker}`)
            .reply(200, speakerFixture)


        const result = await api.searchSpeaker(expectedSpeaker)
        await flushPromises()


        expect(result).toEqual(speakerFixture)
        expect(request.isDone()).toBe(true)
    })
})