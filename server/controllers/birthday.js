const Birthday = require('../db/models/birthday');

exports.getBirthdays = (req, res) =>{
  Birthday.find()
  .then( birthday => {
  res.status(200).json(birthday)
  })
  .catch((err) => res.status(500).json('Error: ' + err ))
}

exports.createBirthday =  (req, res) => {
  //Another way:
  // try{
  //   const birthday = new Birthday(req.body);
  //   const response = await birthday.save();
  //   res.json(response)
  // } catch(e){
  //   console.log(e)
  // }
  const birthday = new Birthday(req.body)
  birthday.save()
  .then( indbirthday => {
    res.status(201).json(indbirthday)
  })
  .catch((err) => res.status(500).json('Error: ' + err ));
}

exports.birthdayById = async (req, res) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    res.json(birthday)
  } catch (error) {
    console.log(error)
  }
}

exports.updateBirthday = (req, res) =>{
  // Another way
  // try {
  //   const birthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //     runValidators: true
  //   });
  //   await birthday.save();
  //   res.json(birthday);
  // } catch (error) {
  //   console.log(error)
  // }
  const birthday = new Birthday(req.body);
  Birthday.findByIdAndUpdate(req.params.id, 
    {
      username: birthday.username,
      cohort_number: birthday.cohort_number,
      month: birthday.month,
      date: birthday.date
  },
  function (err) {
    if (err){
      res.status(500).json('Error: ' + err );
    } else {
      res.status(201).json(birthday);
    }
  });
}

exports.deleteBirthday = async (req, res) =>{
  // Another way
  // try {
  //   await Birthday.findByIdAndDelete(req.params.id)
  //   res.json('birthday delete')
  // } catch (error) {
  //   console.log(error)
  // }


  Birthday.findByIdAndDelete(req.params.id)
  .then((birthday) =>{
    if(!birthday){
      return res.status(404).json('Error: birthday not found')
    }
    // returns a 204 with the document in question
    res.status(204).json({message: 'Birthday deleted'})
  })
  .catch((err) => res.status(505).json('Error: ' + err ));
}