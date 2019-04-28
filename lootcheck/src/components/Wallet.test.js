import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('wallet', () => {
    const props = { balance: 20 };
    const wallet = shallow(<Wallet {...props} />);

    it ('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', ()=> {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });
});