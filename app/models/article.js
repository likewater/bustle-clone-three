  import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  imageURL: DS.attr(),
  author: DS.attr(),
  featured: DS.attr(),
  article_id: DS.attr()
});
