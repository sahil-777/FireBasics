// Your web app's Firebase configuration
// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBr8njIO9TN4-z0l_rd9dmPKsY8Bvkvgao",
        authDomain: "firebasics-practice.firebaseapp.com",
        projectId: "firebasics-practice",
        storageBucket: "firebasics-practice.appspot.com",
        messagingSenderId: "20616689125",
        appId: "1:20616689125:web:a55c53ea731d99b40deb0c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.database();

    function signUp(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed Up");
    }



    function signIn(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

    }


    function signOut(){

        auth.signOut();
        alert("Signed Out");

    }



    auth.onAuthStateChanged(function(user){

        if(user){

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

        }else{

        alert("No Active User");
        //no user is signed in
        }
    });

    function Hii(){
        alert('Hii');
    }
