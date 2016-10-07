import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-w-caption', 'Integration | Component | image w caption', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{image-w-caption}}`);
  assert.equal(this.$('img').attr('src'), 'http://placehold.it/300x150?text=No+Image', 'Default image');

  this.render(hbs`{{image-w-caption src="hello"}}`);
  assert.equal(this.$('img').attr('src'), 'hello', 'Image provided as an argument');

});
