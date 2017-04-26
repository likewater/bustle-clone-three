import Ember from 'ember';

export default Ember.Component.extend({
addNewArticle: false,
  actions: {
    showArticleForm() {
      this.set('addNewArticle', true);
    },
    saveArticle1() {
      console.log("save article runs")
      var params = {
        title: this.get('title') ? this.get('title'): "",
        body: this.get('body') ? this.get('body'): "",
        date: this.get('date') ? this.get('date'): "",
        imageURL: this.get('imageURL') ? this.get('imageURL'): "",
        author: this.get('author')? this.get('author'): "",
        featured: this.get('featured') ? this.get('featured'): "",
        };

      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
