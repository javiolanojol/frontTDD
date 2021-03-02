import { shallowMount } from '@vue/test-utils'
import Speaker from '@/components/Speaker'

describe('Speaker', () => {
    let props
    let speaker = {
        username: '@myname',
        name: 'My Name',
        image:'https://myimage.com'
    }
    beforeEach(() => {
        props = {
            speaker
        }
    })

    const build = () => {
        const wrapper = shallowMount(Speaker, {

            propsData: props
        })

        return {
            wrapper
        }
    }

    it('renders the component', () => {

        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the right', () => {

        const { wrapper } = build()

        expect(wrapper.text()).toContain(speaker.username)
        expect(wrapper.find('img').attributes('src')).toBe(speaker.image)
    })
})
