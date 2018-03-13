import { helper } from '@ember/component/helper';

export function isInput(params/*, hash*/) {

  return params[0] !== 'textarea';
}

export default helper(isInput);
