import firebase from '../config/firebase';


const db = firebase.database()

const auth = firebase.auth()


const login = (email, password) => {
    return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(email, password).then((e) => {
            const uid = e.user.uid
            db.ref('accounts').once('value').then((e) => {
                let users = e.val()
                for (var key in users) {
                    for (var key2 in users[key]) {
                        if (key2 === uid) {
                            resolve(users[key][key2])
                        }
                    }
                }
            })
        }).catch(e => {
            reject({ messege: e })
        })
    })
}
const signUp = (obj, password) => {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(obj.email, password).then((e) => {
            obj.uid = e.user.uid
            db.ref('accounts/users/' + obj.uid).set(obj).then((e) => {
                resolve(true);
            })
        }).catch(e => {
            reject(e)
        })
    })
}

export {
    login,
    signUp,
}