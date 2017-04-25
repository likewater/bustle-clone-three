import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('article');
},
actions: {
  update(article, params) {
        Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        article.set(key,params[key]);
      }
    });
    article.save();
    this.transitionTo('index');
  }
}
});
