import express from 'express';
import { PORT } from './config/env.js';
import { authRouter } from './routes/auth.route.js';

const app = express();

console.log(PORT);

app.use(express.json());
// app.use(greet);

app.get('/home', (req, res) => {
    res.send('how are you doing?');
})

app.use('/auth', authRouter);




app.listen(3000, () => {
    console.log('Server is running on url http://localhost:3000');
});







// app.get('/students',greet, (req, res) =>{
//     res.json(students);
// })



// app.get('/student/:id', (req, res) => {
//     const { id } = req.params
//     const student = students.find((student) => student.id === parseInt(id));

//     if(!student){
//         return res.status(404).json({error: 'Student not found'});
//     }

//     return res.json(student);
// })

// app.post('/student', (req, res) => {

//     console.log(req.body)
//     const { name, age } = req.body;
//     let id = students.length + 1;

//     const newStudent = {
//         id,
//         name,
//         age
//     }

//     students.push(newStudent);

//     let newStudents = students

//     let studentString = JSON.stringify(newStudents);
//     fs.writeFileSync('./data.js', `export let students = ${studentString}`);

//     return res.json(newStudents);
// })

// app.put('/student/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, age } = req.body;

//     const student = students.find((student) => student.id === parseInt(id));

//     if(!student){
//         return res.status(404).json({error: 'Student not found'});
//     }

//     student.name = name;
//     student.age = age;

//     let newStudents = students

//     let studentString = JSON.stringify(newStudents);
//     fs.writeFileSync('./data.js', `export let students = ${studentString}`);

//     return res.json(newStudents);
// })
