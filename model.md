Modelling data 
  - decide app is read heavy or write heavy
  - decide whether a collection is required or not
  - Embedding vs references
  - proper indexing(it affects write operation)
  - arrays as first class citizens

#### Embedding and Referencing

Embedded documents are where sub-document are present in same collection as parent
instead of creatng a new collection for subdocuments. This feature is called 
denormalization. 

In referencing, we create new collection for sub-document and reference 
it to parent document. These are also known as normalized collection.


#### Project

Design a model for a blog system where a user can log in and create blogs and create comment on each of those blogs.

Associate them in a way that each of the schemas should have references to other schema related to them in some ways.

  - It may require 3 different models for storing Users, Articles and Comments.
  - each user should contains reference to articles he/she has created
  - each article should have reference to its author/creator from user Schema
  - each comment should have reference to the article for which comment has been made and also a reference to its creator.
  - each article should also have refernces to all the comments made on them. 

create a project folder in the root and design the schemas and models required for the project. 

  - also create a project.md and explain how you approached the model creation ?
  - also mention other possible ways to design the blog model ? 