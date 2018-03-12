import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('about')
  },

  actions: {

    save(model) {

      model.save()
        .then((a)=>{
          console.log(a)
        })
    },

    cancel(model) {

      this.transitionTo('/')
    }
  }
});
