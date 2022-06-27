import {User} from '../modules/User.js';

let user = new User('1', 'Ion', 'ion@ion.com', 22);
user.doarme(7);
console.log(user);
user.name = 'dan';
user.email = 'dan@dan.com';
console.log(user);
