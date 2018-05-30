/*

var users = [
    {name: 'Jill'},
    { name: 'Alex' },
    { name: 'Bill' }
];

users.find(function(user) {
    return user.name === 'Alex';
});

*/

function findWhere(array, critera) {
    var array1 = Object.keys(criteria);
    return array.find(function(item) {
        return item[array1] == criteria[array1];
    });
}
