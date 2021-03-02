import { shallowMount,createLocalVue } from '@vue/test-utils'
import SpeakersView from '@/views/SpeakersView'
import SearchForm from '@/components/SearchForm'
import SpeakersList from '@/components/SpeakersList'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

let speaker = {
    name:'My name'
}

describe('SpeakersView', () => {

    let store, getters

    beforeEach(() => {

        getters = {
            speakers: () => [speaker, speaker]
        }
        store = new Vuex.Store({
            getters
        })
    })

    const build = () =>{
        const wrapper = shallowMount(SpeakersView,{
            store,
            localVue
        })

        return{
            wrapper,
            SpeakersList: () => wrapper.find(SpeakersList),
            SearchForm: () => wrapper.find(SearchForm)
        }

    }

    it('it should render components', () => {

        const {wrapper} = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('it should render the right components', () => {

        const{SpeakersList,SearchForm} = build();

        expect(SpeakersList().exists()).toBe(true)
        expect(SearchForm().exists()).toBe(true)
    })

    it('should pass speakers to the SpeakersList', () =>{

        const{SpeakersList} = build();

        expect(SpeakersList().vm.speakers).toEqual([speaker,speaker])
        expect(SpeakersList().vm.speakers).toBe(store.getters.speakers)

    })
})