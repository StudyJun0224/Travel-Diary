const express = require('express');
const router = express.Router();

// 테스트용 라우트
router.get('/test', (req, res) => {
  res.send('✅ Diary route is working!');
});

module.exports = router;
