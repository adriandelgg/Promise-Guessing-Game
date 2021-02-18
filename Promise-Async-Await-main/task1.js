// Task 1: Translate the story into code.
const onMyBirthday = isKayoSick => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (!isKayoSick) {
                resolve(1);
            } else {
                reject(0);
            }
        }, 2000);
    });
};

const ifTheresCake = icing => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (typeof icing === 'string') {
                resolve(icing);
            } else {
                reject("That's not an icing flavor!");
            }
        }, 1000);
    });
};

onMyBirthday(false)
    .then(onFulfilled => {
        console.log(`I have ${onFulfilled} cakes, and I am happy!`);
        return 'strawberry';
    })
    .then(firstResolveValue => {
        console.log(`The icing on the cake will be ${firstResolveValue}!`);
    })
    .catch(e => {
        console.log('There is no cake & I am sad.');
    })
    .finally(() => {
        console.log('Either way, let\'s party!');
    });