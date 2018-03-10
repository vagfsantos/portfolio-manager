import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('about')
  },

  actions: {

    save() {

      console.log(this.get('store').findAll('about'))
      return

      this.store.createRecord('about', {
        data: {
          name: this.model.page_data
        }
      }).save()
    }
  }
});
