import Ember from 'ember';

export default Ember.Controller.extend({
  addIngredient(parentRecipe, formValues) {
    // Setup our base ingredient
    const ingredient = this.store.createRecord(`ingredient`, formValues);
    // Setup the relation to our recipe
    ingredient.set(`recipe`, parentRecipe);
    // ingredient.recipe = parentRecipe;
    // Wait for save
    return ingredient.save().then(() => {
      this.transitionToRoute(`dashboard.recipes.detail.index`);
    });
  },
});
