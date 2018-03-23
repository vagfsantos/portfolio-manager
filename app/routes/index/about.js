import Route from '@ember/routing/route';

export default Route.extend({

  model() {

    return this.store.findAll('about')
  },

  getPageTitle() {

    console.log(this.get('store').forEach)

  }
});
