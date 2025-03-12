const mongoose = require("mongoose");
const Author = require("./models/Author");

mongoose.connect("mongodb+srv://wesamajarma411:Wesam@cluster0.nqcjz.mongodb.net/BookLibrary?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("Connected to MongoDB"));

async function seedDatabase() {
    let authors = [];
    for (let i = 1; i <= 100000; i++) {
        authors.push({ name: `Author ${i}`, bio: `Bio of Author ${i}` });
    }
    await Author.insertMany(authors);
    console.log("Inserted 100,000 authors!");
    mongoose.connection.close();
}

seedDatabase();
