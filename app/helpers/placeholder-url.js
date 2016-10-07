import Ember from 'ember';

export function placeholderUrl(params, hash) {
  let opts = hash || {};
  return `http://placekitten.com/${opts.w || 100}/${opts.h || 100}`;
}

export default Ember.Helper.helper(placeholderUrl);
