import getters from '@/store/getters'
import initialState from '@/store/state'

describe('Getters', () => {
    let state;

    beforeEach(() => {
        let speaker = {
            username: 'xavism',
            name: 'Xavi Sánchez',
            image: 'http://myUrl.com'
        }
        state = {
            ...initialState,
            speakers: [speaker]
        }
    })

    it('gets Speakers', () => {

        let speakers = getters.speakers(state)

        expect(speakers.length).toBe(1)
    })
})