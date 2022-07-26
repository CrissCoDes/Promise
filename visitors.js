const visit = {   
        name:  'me',
        available: 'no',
}

const Go = (resolve, reject) => {
    if (visit.available === 'yes'){
        resolve(`${visit.name} May Go Visit His Friends`)
    }else if (visit.available === 'no') {
        reject('Friends not home')
 }
}

const Visit = () => {
    return new Promise(Go);
}

const visitFriends = Visit();

console.log(visitFriends);

