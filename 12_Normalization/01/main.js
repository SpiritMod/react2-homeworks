/**
 * TASK 1
 * Нормализуйте users
*/

const users = [{
    name: 'Ivan Ivanov',
    login: 'ivashka',
    groups: [{
        id: 1,
        name: 'Frontend',
    }],
}, {
    name: 'Nataly Petrova',
    login: 'kisska777',
    groups: [{
        id: 2,
        name: '40KG',
    }, {
        id: 4,
        name: 'Nail art',
    }],
}, {
    name: 'Dan Tomofeev',
    login: 'timoxa',
    groups: [{
        id: 1,
        name: 'Frontend',
    }, {
        id: 2,
        name: '40KG',
    }, {
        id: 4,
        name: 'Nail art',
    }],
}];

/**
 * TASK 2
 * Нормализуйте articles
*/

const articles = [{
    id: 1,
    title: 'Some Article',
    author: {
        id: 1,
        name: 'Dan',
    },
    meta: {
        likes: [{
            id: 3,
            name: 'Ian',
        }, {
            id: 4,
            name: 'Pete',
        }],
        reposts: [{
            id: 3,
            name: 'Ian',
        }, {
            id: 1,
            name: 'Dan',
        }],
    },
}, {
    id: 2,
    title: 'Other Article',
    author: {
        id: 1,
        name: 'Dan',
    },
    meta: {
        likes: [{
            id: 2,
            name: 'Mary',
        }],
    },
}, {
    id: 3,
    title: 'Yet Another Article',
    author: {
        id: 2,
        name: 'Mary',
    },
    meta: {
        likes: [{
            id: 3,
            name: 'Ian',
        }, {
            id: 1,
            name: 'Dan',
        }],
        reposts: [{
            id: 1,
            name: 'Dan',
        }],
    },
}];

/**
 * TASK 3
 * Нормализуйте books
*/

const books = [{
    id: 1,
    name: 'Some Book',
    description: 'Suspendisse faucibus nunc et',
    author: {
        id: 1,
        name: 'Ian Rudovski',
    },
    reviews: [{
        id: 4,
        text: 'Sed in libero ut nibh placerat accumsan. Pellentesque dapibus hendrerit tortor. Sed lectus.',
        author: {
            id: 4,
            name: 'Pete',
        },
    }, {
        id: 7,
        text: 'Proin faucibus arcu quis ante. Fusce pharetra convallis urna.',
        author: {
            id: 11,
            name: 'Adam',
        },
    }],
    favorites: [{
        id: 3,
        name: 'Ian',
    }, {
        id: 4,
        name: 'Pete',
    }],
    lists: [{
        id: 3,
        name: 'Best books in 2012',
    }, {
        id: 2,
        name: 'Best fiction of all time',
    }],
    genres: [{
        id: 12,
        name: 'romance',
    }, {
        id: 32,
        name: 'fiction',
    }],
}, {
    id: 7,
    name: 'Another Book',
    description: 'Phasellus consectetuer vestibulum elit',
    author: {
        id: 1,
        name: 'Tatiana Daniloff',
    },
    reviews: [],
    favorites: [{
        id: 34,
        name: 'Hanna',
    }],
    lists: [{
        id: 21,
        name: 'Worst books of all time',
    }],
    genres: [{
        id: 12,
        name: 'romance',
    }, {
        id: 45,
        name: 'detective',
    }],
}, {
    id: 9,
    name: 'Yet another Book',
    description: 'In ac felis',
    author: {
        id: 1,
        name: 'Ian Rudovski',
    },
    reviews: [{
        id: 41,
        text: 'Donec posuere vulputate arcu. Etiam vitae tortor.',
        author: {
            id: 1,
            name: 'Dan',
        },
    }, {
        id: 72,
        text: 'Pellentesque posuere. Morbi nec metus.',
        author: {
            id: 4,
            name: 'Pete',
        },
    }],
    favorites: [{
        id: 3,
        name: 'Ian',
    }, {
        id: 4,
        name: 'Pete',
    }, {
        id: 1,
        name: 'Dan',
    }, {
        id: 34,
        name: 'Hanna',
    }],
    lists: [{
        id: 8,
        name: 'Best books of all time',
    }, {
        id: 11,
        name: '2013 Awards',
    }, {
        id: 2,
        name: 'Best fiction of all time',
    }],
    genres: [{
        id: 12,
        name: 'romance',
    }],
}];
