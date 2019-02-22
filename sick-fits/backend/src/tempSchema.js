function tempSchema () {
    return {
        type: `
type Dog {
    name: String!
}
type User {
    id: ID! @unique,
    name: String!
    email: String!
}

type Mutation {
   createDog(name: String!): Dog
}

type Query {
    dogs: [Dog]!
}
type Item {
    id: String!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Int!
    #createdAt: DateTime!
    #updatedAt: DateTime!
    #user: User!
}
`
    }
}

module.exports = tempSchema