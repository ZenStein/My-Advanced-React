const { forwardTo } = require('prisma-binding')

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db')
    // async items(parent, arguments, context, info) {
    //     const items = await context.db.query.items()
    //     return items
    // }
};

module.exports = Query;
