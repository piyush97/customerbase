const{
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
}= require('graphql');
//Hardcoded data
const customers=[{
  id:'1',
  name:'Piyush Mehta',
  email:'me@piyushmehta.com',
  age:20
},
{
  id: '2',
  name: 'Hello Mehta',
  email: 'me@hellomehta.com',
  age: 21
}, {
  id: '3',
  name: 'John Mehta',
  email: 'me@Johnmehta.com',
  age: 22
}];
const CustomerType = new GraphQLObjectType({
  name:'Customer',
  fields:()=>({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age:{GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {
         type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i];
          }
        }
      }
    }
  }
  
});

module.exports=new GraphQLSchema({
query:RootQuery
});