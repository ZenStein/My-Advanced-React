

const Mutation = {
    async createItem(parent, arguments, context, info) {
        //TODO: check if logged in
        const item = await context.db.mutation.createItem({ data: { ...arguments } }, info)
        return item
    },


    updateItem(parent, arguments, context, info) {
        // first take a copy of the updates
        const updates = { ...arguments }
        // remove the id from the updates
        delete updates.id
        // run the update method
        return context.db.mutation.updateItem({
            data: updates,
            where: {
                id: arguments.id
            },
            info
        })
    }
};

module.exports = Mutation;
