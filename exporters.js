var exporters = [
    {
        lat: 49.251949, lng: 28.4496282,
        title: 'ТОВ "СП "Мед Поділля"',
        address: '21010, м. Вінниця, вул. Салтикова-Щедріна, 131'
    },
    {
        lat: 51.2009398, lng: 24.7080005,
        title: 'ТзОВ "Дарліс"',
        address: 'м. Ковель вул. Гагаріна, 44'
    },
    {
        lat: 47.9170765, lng: 33.3038512,
        title: 'ТОВ "Меганом-АП"',
        address: '50025, м. Кривий Ріг, вул. Окружна,12, Центрально-Міський район.'
    },
    {
        lat: 47.916639, lng: 33.4134595,
        title: 'ПП Стародубець М.М',
        address: '50099 м. Кривий Ріг вул. Вечірньокутська,5 Довгинцівського р-ну.'
    },
    {
        lat: 47.9608537, lng: 33.7649094,
        title: 'ТОВ "Альваріум Україна"',
        address: '53830, Апостолівський  р-н, с. Камянка, вул. К. Маркса, 6/1 А'
    },
    {
        lat: 48.3863874, lng: 35.0348441,
        title: 'ТОВ "АСТРУМ-М"',
        address: '52071, Дніпропетров-ський р-н, с. Дослідне, вул. Наукова, буд.1'
    },
    {
        lat: 48.1983677, lng: 22.6213454,
        title: 'ТзОВ "ГОЛДЕН НЕКТАР УКРАЇНА"',
        address: '90202, м. Берегово, вул. Б. Хмельницького, 112 А'
    },
    {
        lat: 48.1983677, lng: 22.6213454,
        title: 'ТОВ "ГНУ ЕКСПОРТ"',
        address: '90202, м. Берегове, вул. Б. Хмельницького, в. 112/А'
    },     
    {
        lat: 46.7641137, lng: 35.7668776,
        title: 'ТОВ "Міла мед"',
        address: '71153, Бердянський р-н, с. Дмитрівка, вул. Леніна, 1-А'
    },
    {
        lat: 50.6871366, lng: 31.14772,
        title: 'ТОВ "Сан Бі Україна"',
        address: 'Броварський р-н., с. Мокрець, вул. Нова, 1'
    },
    {
        lat: 50.5152752, lng: 30.9056294,
        title: 'ТОВ "Мед України"',
        address: 'Броварський р-н, с. Красилівка, вул. Басова, 32'
    },
    {
        lat: 49.8720567, lng: 30.946543,
        title: 'ТОВ "Українське товариство меду"',
        address: 'Кагарлицький р-н, с. Кадомка, вул. Олексієнка, 19'
    },
    {
        lat: 50.1024847, lng: 30.7852737,
        title: 'ФГ "Апіс Україна"',
        address: 'Обухівський р-н, с. Халеп\'я, вул. Лісова, 76'
    },
    {
        lat: 50.6178896, lng: 30.4345674,
        title: 'ТОВ "Український центр переробки меду"',
        address: 'Вишгородський р-н, с. Нові Петрівці, пров. Першого Травня, 30'
    },
    {
        lat: 50.5583389, lng: 30.2039828,
        title: 'ТОВ “Мед-Трейд 1”',
        address: 'Києво-Святошинський р-н, м. Буча, вул. Чкалова, 1'
    },
    {
        lat: 50.4627965, lng: 30.4886547,
        title: 'ТОВ НВП “Біотек”',
        address: '08010, Київська обл., Макарівський р-н, ст. Буян, вул.. Вокзальна, 2'
    },
    {
        lat: 48.4918599, lng: 32.2085197,
        title: 'ТОВ "Медовий експрес"',
        address: 'м. Кіровоград, вул. Героїв Сталінграду, 26-а'
    },
    {
        lat: 48.5469762, lng: 32.0105166,
        title: 'ПП  "Кошлатий Я.А."',
        address: 'Кіровоградський район, с. Грузьке вул. Сабліна, 62'
    },
    {
        lat: 48.5469762, lng: 32.0105166,
        title: 'Приватна фірма "Роман"',
        address: 'Кіровоградський район, с. Грузьке вул.. Сабліна, 73'
    },
    {
        lat: 48.510543, lng: 32.1765633,
        title: 'ТОВ "АТС – Україна"',
        address: 'м. Кіровоград, вул. Мурманська, 37'
    },
    {
        lat: 48.6675563, lng: 33.1336375,
        title: 'ПП "Альфа-Фенікс"',
        address: 'м. Олександрія, пров. Кропивницького, 2'
    },
    {
        lat: 48.6692493, lng: 33.1333641,
        title: 'ТОВ "НГК-ТРЕЙД"',
        address: 'м. Олександрія, вул. Паризької комуни, 82'
    },
    {
        lat: 48.6745037, lng: 31.9752135,
        title: 'ТОВ "Стімул Плюс Д"',
        address: 'Кіровоградський р-н, с. Могутнє, вул. Кірова, 152-3'
    },
    {
        lat: 48.6745037, lng: 31.9752135,
        title: 'ФОП “Демченко Є. Ю.”',
        address: 'Кіровоградський р-н, с. Могутнє, вул.. Кірова, 152-3'
    },
    {
        lat: 49.8386512, lng: 23.7193657,
        title: 'ТзОВ "Український мед"',
        address: 'Городоцький р-н, с. Повітно, вул. Польова, 3а'
    },
    {
        lat: 50.0433686, lng: 23.9911923,
        title: 'ТзОВ "УкрАвіаЗаказ"',
        address: 'Жовківський р-н, c. Сопошин, вул. Львівська, 14 в'
    },
    {
        lat: 49.813665, lng: 23.8561141,
        title: 'ПП "КельтВест"',
        address: '81111,  Львівська обл.,  Пустомитівський р-н, с. Конопниця, вул.. Городоцька, 8а'
    },
    {
        lat: 49.8726865, lng: 23.9268374,
        title: 'ТОВ “Бітрейд Вест”',
        address: 'м. Львів, вул. Шевченка, 335'
    },
    {
        lat: 50.3926878, lng: 30.758678,
        title: 'ТОВ "Асканія-ПАК"',
        address: '02121, Харківське шосе, 23 км., буд.4'
    },
    {
        lat: 46.94914, lng: 31.9891303,
        title: 'ТОВ "Агро Іст Трейд"',
        address: '24001, м. Миколаїв, площа Заводська, 1В/1'
    },
    {
        lat: 47.5389467, lng: 30.7353279,
        title: 'Ф/г "Коба"',
        address: 'смт. Миколаївка, вул. Щорса, 18а'
    },
    {
        lat: 47.5389467, lng: 30.7353279,
        title: 'ФОП Дегтяренко П.Г.',
        address: 'смт. Миколаївка, вул. Щорса, 18а'
    },
    {
        lat: 47.7300634, lng: 29.9558542,
        title: 'ТОВ "Джеса"',
        address: 'м. Ананьїв, вул.. Незалежності, 100'
    },
    {
        lat: 46.3308967, lng: 30.6287786,
        title: 'ТОВ "МЕД-ОК"',
        address: 'Комінтерівський  р-н, с. Олександрівка, вул. Цвіточна, 83'
    },
    {
        lat: 45.4307406, lng: 29.2819601,
        title: 'СП ТОВ "Ташко"',
        address: '68302,  Кілійський р-н,  м. Кілія,  вул. Кубишкіна, 1'
    },
    {
        lat: 49.7706859, lng: 35.1783508,
        title: 'ФОП Гудзенко В.І.',
        address: 'Чутівський район, с.Верхні Рівні'
    },
    {
        lat: 49.0669608, lng: 33.4407799,
        title: 'ТОВ "РК.ФУД"',
        address: '39630. м. Кременчук, вул. Ярмаркова.11'
    },
    {
        lat: 49.6380362, lng: 34.8894534,
        title: 'ФОП Гончар В.В.',
        address: '38850, Чутівський р-н, с. Василівка, вул.. Радгоспна, 17'
    },
    {
        lat: 50.6451477, lng: 26.294172,
        title: 'ПП Косовська Л.В.',
        address: 'Рівненський  р-н., с. Бармаки, вул.. Мирна, 16'
    },
    {
        lat: 50.5871114, lng: 26.6617082,
        title: 'ТОВ "Медовий край"',
        address: '35400, смт Гоща, вул. Застав\'я, 58'
    },
    {
        lat: 50.6462643, lng: 26.2666887,
        title: 'ПП Бочковський М.А.',
        address: '33016, м. Рівне, вул. Будівельників, 1'
    },
    {
        lat: 52.1838752, lng: 34.0186049,
        title: 'ПП "Ханні"',
        address: 'м. Середина-Буда, вул. Індустріальна, 1'
    },
    {
        lat: 49.939132, lng: 36.2980427,
        title: 'ТОВ "Гера"',
        address: '61051, м. Харків, вул. Ньютона, 111'
    },
    {
        lat: 49.9629313, lng: 36.0884325,
        title: 'АПФ “Мелиса-93”',
        address: '62416, Харківський р-н, смт Пісочин, вул. Технологічна, 1-А'
    },
    {
        lat: 50.014223, lng: 36.1874968,
        title: 'ТОВ “Дриллекс”',
        address: '61098, м. Харків, вул. Пащенківська, 56'
    },
    {
        lat: 46.6156957, lng: 32.7182905,
        title: 'ТОВ "ГК Содружество"',
        address: '75100 м. Цюрупинськ вул. Стаханова, 50'
    },
    {
        lat: 46.6625975, lng: 32.6075366,
        title: 'ТОВ "Медова Корпорація Кельманн"',
        address: 'просп. Адмірала Сенявіна, 23,  м. Херсон'
    },
    {
        lat: 46.6344078, lng: 32.5558346,
        title: 'ТОВ “Голд Хані”',
        address: 'м. Херсон, вул. Домобудівельна, 14'
    },
    {
        lat: 50.1098851, lng: 26.8240506,
        title: 'ТОВ "Бартнік"',
        address: '30300, Хмельницька обл., Ізяславський р-н, м. Ізяслав, вул. Свободи, 4 А'
    },
    {
        lat: 49.456756, lng: 27.0045913,
        title: 'ФОП "Савицький Ю.В."',
        address: '24000, м. Хмельницький, вул. П. Мирного, 32'
    },
    {
        lat: 48.6373426, lng: 26.4393294,
        title: 'ТОВ “Денчер’с мед”',
        address: '32344, Хмельницька обл., Кам’янець-Подільський р-н, с. Нагоряни, вул. Тручка, 1'
    },
    {
        lat: 50.1189497, lng: 26.8038399,
        title: 'ТзОВ "ЮКРЕЙНІАН БІ"',
        address: 'вул. Військова, буд. 13/2, Хмельницька обл., м. Ізяслав, 30300'
    },   
    {
        lat: 49.4150678, lng: 31.2775309,
        title: 'ТОВ "Спецмонтаж – 8"',
        address: '19400,  м. Корсунь-Шевченківський, вул. 1 Травня, 140'
    },   
    {
        lat: 49.2449387, lng: 32.2429826,
        title: 'ТОВ “БІХАЙВ”',
        address: '19646, Черкаська обл., Черкаський р-н, с. Чорнявка, вул. Гагаріна, 81'
    },   
    {
        lat: 47.789384, lng: 35.2261928,
        title: 'ТОВ “Натуральний мед”',
        address: '69063, Запорізька область, м. Запоріжжя, вул. Східна, б. 5а'
    },   
    {
        lat: 47.5582128, lng: 35.7863409,
        title: 'ТОВ “АСТРЕЙ”',
        address: '70500, Запорізька обл., м. Оріхів, вул. Привокзальна, 46'
    },   
    {
        lat: 48.5344887, lng: 35.0638802,
        title: 'ТОВ “ТІ ЕНД ДЖІ ЮТЕК”',
        address: '52005, Дніпропетровська обл., Дніпровський р-н, смт. Ювілейне, вул. Нижньодніпровська, буд. 1 '
    },   
    {
        lat: 48.6372202, lng: 35.4121781,
        title: 'ТОВ “Компанія “Садовоє кольцо”',
        address: '51280, Дніпропетровська обл., Новомосковський р-н, с. Знаменівка, вул. Українська, 257'
    },   
    {
        lat: 48.5867862, lng: 34.7960919,
        title: 'ТОВ “БСБІ”',
        address: '52012, Дніпропетровська обл., Дніпровський р-н, с. Партизанське, вул. Заводська, 25-Ю'
    },   
    {
        lat: 50.0433686, lng: 23.9911923,
        title: 'ТзОВ “Ренома”',
        address: '80310, Львівська обл., Жовківський р-н, с. Сопошин, вул. Львівська, 14в'
    },   
    {
        lat: 50.5583389, lng: 30.2039828,
        title: 'ТОВ “ВАРА-ГРУП”',
        address: 'Київська обл., Києво-Святошинський р-н, м. Буча, вул. Чкалова, 1'
    },   
    {
        lat: 50.389419, lng: 30.3513263,
        title: 'ТОВ "БІОТЕК ГРУП"',
        address: 'вул. Київська, 6-Г, м. Вишневе, К-Св\'ятошинський район, Київська область'
    },   
    {
        lat: 48.6745037, lng: 31.9620814,
        title: 'ФОП “Демченко Є.Ю.”',
        address: '27612, Кіровоградська обл., Кіровоградський р-н, с. Могутнє, вул. Кірова, 152-3'
    }      
]