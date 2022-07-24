function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Marcele' , 'Admin');
usuarios.set('Barros' , 'Admin');
usuarios.set('Pedro' , 'Admin');
usuarios.set('Fernanda' , 'User');
usuarios.set('Jose' , 'Admin');

console.log (getAdmins(usuarios));