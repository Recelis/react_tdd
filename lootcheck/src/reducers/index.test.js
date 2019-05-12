import rootReducer from './index';

describe('rootReducer', () => { // for combining the reducers
    it('initializes the default state', () => {
        expect(rootReducer({}, {})).toEqual({balance:0, bitcoin: {}});
    });
});