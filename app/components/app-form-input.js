import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  isInput: computed(function(form_input){

    return form_input.type !== 'textarea'
  })
})
