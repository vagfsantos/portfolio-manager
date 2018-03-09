import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').findAll('post')
  },

  actions: {
    newPost() {

      var newPost = this.store.createRecord('post', {
        title: 'EmberFire is flaming hot!',
        body: 'You can store and sync data in realtime without a backend.'
      });
      newPost.save()
    }
  }
});
