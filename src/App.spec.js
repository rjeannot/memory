import React from 'react'
import { shallow } from 'enzyme';
import { expect } from 'chai'

import App from './App'
import GuessCount from './GuessCount'

describe('<App />', () => {

  it('contains a zero-guess counter', () => {
    const wrapper = shallow(<App />)
  
    expect(wrapper).to.contain(<GuessCount guesses={0} />)
  })

  it('has 36 cards', () => {
    const wrapper = shallow(<App />)
  
    expect(wrapper.find('Card')).to.have.length(36);
  })

})
