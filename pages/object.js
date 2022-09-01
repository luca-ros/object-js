import styles from '../styles/Home.module.css'


function Object() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Object Js (LITERALS)</h1>
                <div className={styles.card}>
                <h2>Object:</h2>
                <h3></h3>
                <p style={{textIndent:"-5%"}}><code>let nameObj = {`{`} <br/>
                name: "Lillo",<br/>
                age: 45,<br/>
                email: "cotico@leno.it",<br/>
                location: "Sardegna",<br/>
                <span style={{display:"block", color:"green"}}>//  key: [ Values Array]</span>
    blogs: ["Come cucinare lo spezzatino", "lapa vincitrice del concorso"],<br/>
    logBlogs() {}<br/>
        <span style={{display:"block", color:"green"}}>//  Method to Access All Values of blogs Array</span> 
        <span style={{display:"block", color:"green"}}>// (this) refers to user obj</span>
        {`console.log(this.blogs);}`}
        // Method to Access Sigle Values of Array
        console.log("Single post array:");
        {`this.blogs.forEach(blog => {}
            console.log(blog)
        })
    `},
                </code></p>
                </div>
            </div>
        </div>
    )
}
// *Object literals

// *Variable
let user = {
    //  *Properties: 
    //  *key: "value",
    name: "Lillo",
    age: 45,
    email: "cotico@leno.it",
    location: "Sardegna",
    //  *key: [ Values Array]
    blogs: ["Come cucinare lo spezzatino", "lapa vincitrice del concorso"],
    logBlogs() {
        //  *Method to Access All Values of blogs Array  
        // *(this) refers to user NameObj
        console.log(this.blogs);
        // *Method to Access Sigle Values of Array
        console.log("Single post array:");
        this.blogs.forEach(blog => {
            console.log(blog)
        })
    },
    //  *key: [ Values Object]
    posts: [
        {
            id: 1,
            title: "NoiEsse",
            likes: 12
        },
        {
            id: 2,

            title: "Jovenko",
            likes: 23
        },
        {
            id: 3,
            title: "Turi in tha hose",
            likes: 420
        }
    ],
    //  *key:  value Become a Methods   
    //  *name's Methods: Methods    
    login: function () {
        console.log("user is logged in");
    },
    logPosts() {
        //  *Method to Access All Values of posts Object  
        // *(this) refers to user obj
        console.log(this.posts);
        // *Method to Access Sigle Values of Object
        console.log("Single post Object:");
        this.posts.forEach(post => {
            console.log(post.title, post.likes);
        })
    },
    //  *Regular Function (short Hang Version) exact same thing of login: function(){};  
    logout() {
        console.log("user logged out");
    }

};
// *Regular Function isn't Define inside an Object a METHOD IS!

// *In order to use "this" inside a method to refer to the actual Object (that the method is on) we NEED to use regular Function and NOT an Arrow Function!

// *Print Methods:
// user.login();
// user.logout();

// *Print Method blogs Array:
// user.logBlogs();
// console.log(this);

// *Print Methot post Object of title and like:
user.logPosts();

// *Print All Obj :
console.log(user);
// *Print user Name :
console.log(user.name);
// *Overwrite Values (Dot notation):
// *Used most of the time
user.age = 5;
console.log(user.age);
// *Overwrite Values (Square Bracket notation): 
// *Usefull to pass a variable in the Key property  
user["name"] = "Lilla";
console.log(user["name"]);

// *Show Type of :
console.log(typeof user)





export default Object