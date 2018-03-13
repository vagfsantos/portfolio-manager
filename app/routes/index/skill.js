import Route from '@ember/routing/route';

export default Route.extend({

  model() {

    return this.store.findAll('skill')
  },

  actions: {

    addNewFieldset(model){

      this.store.findRecord('skill', model.get('id'))
        .then( skill => {
          skill.get('form_fields')
            .pushObject({
              name: 'text',
              inputs: [{
                content:'',
                name: 'New skill',
                type: 'text'
              }, {
                content:'',
                name: 'New skill',
                type: 'text'
              }]
            })
        })

    },

    save(model) {

      model.save()
    }
  }
});
