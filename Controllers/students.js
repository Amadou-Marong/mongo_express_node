// Querying all students data from the database
const getStudents = async (req, res) => {
    try {
        const students = await studentdata.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 

// Querying a specific student data from the database

const getSpecStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const student = await Student.findOne({ roll: roll });
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// Upadating a student data in the database

const updateStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        const updatedStudent = await Student.findOneAndUpdate({ roll: roll }, req.body, { new: true});
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}

// Deleting a student data from the database

