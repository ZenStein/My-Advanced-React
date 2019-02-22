const Mutation = {
    async createItem(parent, arguments, context, info){
        //TODO: check if logged in
        const item = await context.db.mutation.createItem({ data : { ...arguments }}, info)
        return item
    }
};

module.exports = Mutation;
