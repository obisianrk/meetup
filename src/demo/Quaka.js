const users = {
    name: 'jack',
    values: {
        email: 'jack@gmail.com',
        password: 'jack111'
    }
}

const newObject = (value) => {
    return {
        name: value.name,
        ...value.values
    }
}

console.log(newObject(users))