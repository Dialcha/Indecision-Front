import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })

    test('h2 debe de tener el valor por defecto', () => { 
        expect( wrapper.find('h2').exists()).toBeTruthy()
        const h2value = wrapper.find('h2').text()
        expect(h2value).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 en el p', () => {
        const pTag = wrapper.find('[data-testid="counter"]').text()
        expect(pTag).toBe('100')
    })

    test('debe de incrementar en 1 el valor del contador', async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        
        
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const pTag = wrapper.find('[data-testid="counter"]').text()
        
        expect(pTag).toBe('101')
    })

    test('debe de establecer el valor por defecto', () => {
        const start = wrapper.props('start')
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(Number(value)).toBe(start)
    })

    test('Debe de mostrar la prop title', () => {
        const title = 'Hola Mundo!!!!!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title,
            }
        })
        expect(wrapper.find('h2').text()).toBe(title)
    })
})