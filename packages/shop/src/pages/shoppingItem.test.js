import React from 'react'
import { shallow } from 'enzyme'
import ShoppingItem from './shoppingItem'

describe('Layout component', () => {
    const mockProps = {
        pathContext: {
            data: {
                title: "mock title",
                content: "mock content",
                href: "google.com",
            },
        },
    }

    it('should render', () => {
        const wrapper = shallow(<ShoppingItem {...mockProps} />)

        expect(wrapper)
    })
})