// Get a reference to the database service
var database = firebase.database();

const DB_PATH = "/todos/";
const DEFAULT_TODO = "default/";

function watchData(path, onData) {
    var dataRef = firebase.database().ref(path);
    dataRef.on('value', (snapshot) => {
        const data = snapshot.val();
        onData(data);
    });
}

function setData(path, data) {
firebase.database().ref(path).set(data);
}