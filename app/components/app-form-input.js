import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  inputName: computed(function(){

    return this.get('form_data.name').toLowerCase()
  }),

  inputNameForUI: computed(function(){

    return this.get('form_data.name').toUpperCase()
  }),

  placeholderName: computed(function(){

    return `Enter the ${this.get('form_data.name')} value...`
  }),

  isInput: computed(function(){

    return this.get('form_data.type') !== 'textarea'
  })
})
