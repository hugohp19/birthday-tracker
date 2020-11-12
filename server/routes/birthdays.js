const router = require('express').Router(),
  Birthday = require('../db/models/birthday'),
  {getBirthdays, createBirthday, birthdayById, updateBirthday, deleteBirthday} = require('../controllers/birthday')

router.get('/birthdays', getBirthdays);

router.post('/birthdays', createBirthday);

router.get('/birthdays/:id', birthdayById);

router.put('/birthdays/:id', updateBirthday);


router.delete('/birthdays/:id', deleteBirthday);

module.exports = router;