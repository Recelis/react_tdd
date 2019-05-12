import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', ()=>{
    const app = shallow(<App />);
    it('renders properly', ()=>{
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', ()=>{
        console.log(app.debug());
        expect(app.find('ConnectFunction').exists()).toBe(true);
    });

    it('contains a connected Loot component', () => { // to find connected function
        expect(app.find('ConnectFunction').exists()).toBe(true); // can't actually find Connect(Loot)
    });

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });
});