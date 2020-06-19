<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Motor Service</title>
</head>
<body>
	<header class="header-main">
		<div class="header-flex">
			<div class="flex-center">
				<?php require "blocks/tl.php"; ?>

				<div class="offer-and-form">
					<div class="container grid">
						<div class="offer">
							<h1 class="h1">
								Автосервис в Минске<br>
								рядом с метро
							</h1>

							<h2 class="h2">
								Качественно, честно и с душой!
							</h2>

							<div class="triggers">
								<div class="trigger-main">
									<img src="img/wrench.svg" alt="" class="img-trigger">
									<p>Мастера более 10 лет опыт в сервисном центре</p>
								</div>

								<div class="trigger-main">
									<img src="img/repairing-car.svg" alt="" class="img-trigger">
									<p>5 боксов в нашем автосервисе</p>
								</div>

								<div class="trigger-main">
									<img src="img/truck.svg" alt="" class="img-trigger">
									<p>Высокие ворота для грузового транспорта</p>
								</div>
							</div>
						</div>
						<div class="form">
							<form action="check.php" method="post">
								<h2 class="h2">
									Заполните заявку и мы Вам перезвоним!
								</h2>

								<label for="name">
									Введите имя
								</label>
								<input id="name" type="text" name="name" style="margin-bottom: 25px;">

								<label for="telephone">
									Введите номер телефона
								</label>
								<input id="telephone" type="tel" name="telephone" style="margin-bottom: 35px;">

								<button class="button animation" type="submit">
									<span>
										рассчитать стоимость
									</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>


	<section class="section-map">
		<div class="map-code">
			<div id="map"></div>
		</div>
		<div class="section-flex">
			<div class="flex-center">
				<div class="container">
					<div class="contact-card">
						<div class="card-body text-center">
							<h3 class="h3">Контакты</h3>

							<a href="tel:+37529 132-00-72">
								<p class="p-con-tel">+37529 132-00-72</p>
							</a>

							<p class="p-con-address">
								Автосервис на Гурского, 16а рядом
								со ст. метро Михалово<br>
							</p>

							<p class="p-con-time">
								работаем с 8:00 до 20:00
							</p>

							<a href="" class="button-up">
								<span>
									<img src="img/button-map-marker.svg" alt="">проложить маршрут до сто
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<link rel="stylesheet" href="css/style.min.css">
	<script src="https://api-maps.yandex.ru/2.1/?apikey=225d92d3-dba7-48bd-a9c6-6d264e23a2e4&lang=ru_RU" type="text/javascript">
	</script>
	<script type="text/javascript">
		// Функция ymaps.ready() будет вызвана, когда
		// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
		ymaps.ready(init);
		function init(){ 
			// Создание карты.    
			var myMap = new ymaps.Map("map", {
				// Координаты центра карты.
				// Порядок по умолчанию: «широта, долгота».
				// Чтобы не определять координаты центра карты вручную,
				// воспользуйтесь инструментом Определение координат.
				center: [53.890054, 27.478746],
				controls: [],
				// Уровень масштабирования. Допустимые значения:
				// от 0 (весь мир) до 19.
				zoom: 17
			});
			myMap.behaviors.disable('scrollZoom');
			
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'г. Минск, ул. Городецкая, 71, район Уручье.',
				balloonContent: 'г. Минск, ул. Городецкая, 71, район Уручье.'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				})
				myMap.geoObjects
				.add(myPlacemark)
			}
			var markers = [
			['EuroService. ул. Городецкая, 71, район Уручье', 53.890054, 27.478746]
			];
	</script>
</body>
</html>