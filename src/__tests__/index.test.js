import React from 'react';
import JSONTable from '../index';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('JSONTable Component', () => {

    it('renders correctly', () => {
        const source = {
            foo: 'bar',
            name: 'Jonh',
            lastName: 'Doe',
            tags: ['great', 'json', 'table'],
            job: {
              name: 'Company',
              address: 'Here',
              country: {
                name: 'DX',
                abbr: 'dDF'
              },
              employees: [
                {
                  name: 'Jose',
                  age: '12'
                },
                {
                  name: 'Paula',
                  age: '12'
                }
              ]
            }
        };
        const tree = renderer
            .create(<JSONTable source={source} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

