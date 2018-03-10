import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  page_data: DS.attr({
    defaultValue() {
      return {
        name: ''
      };
    }
  })
});
