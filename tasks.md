## mongoose
Answer below questions in answer.js
  - do not mutate previous schema
  - create a new schema for each question

1. create a user schema with following fields and type
  1.name -> string
  2.email -> string
  3.age -> number

2. update user schema to make email lowercase and default age to be 0.

3. Update user schema 
  - contains password field with minimum 5 characters
  - add createdAt field of type date and default it to current date.

4. Add address Schema with fields
  1. village -> String
  2. city -> String
  3. state -> String
  4. pin -> number
  5. user -> ObjectId of User from user schema

5. Update address schema to contain required validators for state and city field.

6. Add favourites in user schema of type array of strings.

7. Add timestamps to user and address schema.

8. create models on user and address respectively.

9. Insert into database some users through user model.
  - create an express application(not express-generator) named sample in root
  - create a user schema
  - create user model based on schema
  - connect to mongodb database using mongoose.connect()
  - insert user into database using Model.create() OR model.save() function
  - check into your local mongo database for inserted data 

10. query a single document(user) using mongoose
  - use Model.find({_id: 'some-id'})
  - use Model.findOne({_id: 'some-id'})
  - use Model.findById(id)

Mention the difference between them in comments, if any ?

11. Update a user 
  - use Model.update
  - use Model.updateOne
  - use Model.findByIdAndUpdate(id)

12. delete a user using Model.findByIdAndDelete()