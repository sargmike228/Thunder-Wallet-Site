const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешаем отдавать статические файлы (msi, ico, css и т.д.) из текущей папки
app.use(express.static(__dirname));

// Отдаем главный сайт при запросе на "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(`🚀 Сервер Thunder Wallet успешно запущен!`);
    console.log(`🌐 Откройте в браузере: http://localhost:${PORT}`);
    console.log(`===================================================`);
});