import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  let app = shallow(<App />);

    it('renders correctly', () => {
      expect(app).toMatchSnapshot();
    });

  describe('passes props', () => {

    it('passes handleDataSubmitted to the Form component', () => {
      expect(app.find('Form').prop('handleDataSubmitted')).toBe(app.instance().handleDataSubmitted);
    });

  });

  describe('Initializes state', () => {

    it('initializes dataSubmitted state as false ', () => {
      expect(app.state('dataSubmitted')).toEqual(false);
    });
  });

  describe('Updating state successfully', () => {

    it('updates the state of dataSubmitted to true', () => {
      app.instance().handleDataSubmitted();
      expect(app.state('dataSubmitted')).toEqual(true);
    });
  });

  describe('Renders depending on decider function', () => {

    beforeEach(() => {
      app.setState({ dataSubmitted: false });
    });

    it('renders SecondPage when dataSubmitted equals true', () => {
      app.instance().handleDataSubmitted();
      expect(app.instance().decider()).toEqual('SecondPage');
    });

    it('renders Form when dataSubmitted equals false', () => {
      expect(app.instance().decider()).toEqual('Form');
    });

  });
});