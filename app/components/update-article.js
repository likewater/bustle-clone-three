import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        imageURL: this.get('imageURL'),
        author: this.get('author'),
        featured: this.get('featured')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
