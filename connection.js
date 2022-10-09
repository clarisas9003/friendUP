
    
      
    
     
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
  
  

  

      function login(event){
        event.preventDefault();
        //sign in to DB
     /*  const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
            alert('Welcome Back!')
            debugger;
        }
      // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Wrong, try again', error.message)
        debugger;
        alert(error.message)
        debugger;
        });*/
        console.log('you log in')
        
      }

      function logout(){
        /*const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });*/
        console.log('hello, you log out')

      }

      