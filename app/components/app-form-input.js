import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  inputNameForProperty: computed(function(){

    return this.get('inputName').toLowerCase()
  }),


  inputNameForUI: computed(function(){

    return this.get('inputName').toUpperCase()
  })
})
