import { placeholderUrl } from 'myapp/helpers/placeholder-url';
import { module, test } from 'qunit';

module('Unit | Helper | placeholder url');

// Replace this with your real tests.
test('it works', function(assert) {
  // {{placeholder-url 42}}
  assert.equal(placeholderUrl([], {}), "http://placekitten.com/100/100" , 'no parameters');

  // {{placeholder-url w=300 h=400}}
  assert.equal(placeholderUrl([], {w: 300, h: 400}), "http://placekitten.com/300/400" , 'w & h provided');
});
