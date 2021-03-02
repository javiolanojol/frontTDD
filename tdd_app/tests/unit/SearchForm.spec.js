import { mount, createLocalVue } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm'
import Vuex from 'vuex'
import Buefy from 'buefy'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

describe('SearchForm', () => {
    let store, actions

    beforeEach(() => {

        actions = {
            FETCH_SPEAKER: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    const build = () => {
        const wrapper = mount(SearchForm, {
            store,
            localVue
        })

        return {
            wrapper,
            input: () => wrapper.find('input'),
            button: () => wrapper.find('button')
        }
    }

    it('renders the component', () => {

        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the right', () => {

        const { input, button } = build()

        expect(input().exists()).toBe(true)
        expect(button().exists()).toBe(true)
    })

    it('binds the input data', () => {

        const { wrapper, input } = build()

        wrapper.setData({
            inputData: 'Speaker'
        })

        expect(input().element.value).toBe('Speaker')
    })

    it('dispatches FETCH_SPEAKER when clicking the button with the correct parameters', () => {
        const { wrapper, button } = build()
        wrapper.setData({
            inputData: 'Speaker'
        })
        button().trigger('click')
        expect(actions.FETCH_SPEAKER).toHaveBeenCalled()
        expect(actions.FETCH_SPEAKER.mock.calls[0][1]).toEqual("Speaker")
    })
})
