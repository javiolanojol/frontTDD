import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import SpeakersView from '@/views/SpeakersView'

describe('App', () => {

    const build = () => {
        const wrapper = shallowMount(App)

        return {
            wrapper,
            SpeakersView: () => wrapper.find(SpeakersView)
        }
    }

    it('renders the component', () => {

        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the right', () => {

        const { SpeakersView } = build()

        expect(SpeakersView().exists()).toBe(true)
    })
})