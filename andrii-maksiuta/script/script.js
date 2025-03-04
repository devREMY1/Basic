// Form Sender Telegram
const botToken = '6743780935:AAEUPfmmeIFk0zB7HHIrPX6DLinGkgV-RH0';
const chatId = '-1002036038684';
const uri_api = `https://api.telegram.org/bot${botToken}/sendMessage`;
const success = document.getElementById('success');
const clear = document.getElementById('clear');
const clear_text = document.getElementById('clear_text');

document.getElementById('tg').addEventListener('submit', function (e) {
	e.preventDefault();

	// Сообщение об ошибке если какое то из полей пустое
	if (!this.name.value || !this.email.value) {
		clear.style.display = 'block';
		setTimeout(() => {
			clear.style.display = 'none';
		}, 5000);
		return;
	} else if (!this.text.value) {
		clear_text.style.display = 'block';
		setTimeout(() => {
			clear_text.style.display = 'none';
		}, 5000);
		return;
	}

	// Сообщение Телеграм
	let message = ``;
	message += `<b>Ім'я:</b> ${this.name.value}\n`;
	message += `<b>Пошта:</b> ${this.email.value}\n`;
	message += `<b>Повідомлення:</b> ${this.text.value}\n`;

	axios
		.post(uri_api, {
			chat_id: chatId,
			parse_mode: 'html',
			text: message,
		})

		// Обновление формы и вывод сообщения после удачной отправки
		.then(res => {
			this.name.value = '';
			this.email.value = '';
			this.text.value = '';
			success.style.display = 'block';
			setTimeout(() => {
				success.style.display = 'none';
			}, 5000);
		})
		// Console Error
		.catch(err => {
			console.warn(err);
		})
		.finally(() => {
			console.log('Конец');
		});
});

// Функция для отображения сообщения и скрытия предыдущего активного сообщения
function showMessage(messageElement) {
	if (activeMessage) {
		activeMessage.style.display = 'none';
	}
	messageElement.style.display = 'block';
	activeMessage = messageElement;
	setTimeout(() => {
		messageElement.style.display = 'none';
		activeMessage = null;
	}, 5000);
}

// Увеличение Плеера Ютуб при нажатии
const videos = document.querySelectorAll('.main__video');
videos.forEach(video => {
	const img = video.querySelector('img');
	img.addEventListener('click', () => {
		img.style.display = 'none';
		video.style.width = '100%';
		video.style.height = '500px';
		const iframe = video.querySelector('iframe');
		iframe.contentWindow.postMessage(
			'{"event":"command","func":"playVideo","args":""}',
			'*'
		);
	});
});
