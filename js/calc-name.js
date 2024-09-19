function parseinputs() {

		// получаем значения, убираем пробелы, превращаем в заглавные
		var texteng = document.getElementById('texteng').value.trim().toUpperCase();
		var textrus = document.getElementById('textrus').value.trim().toUpperCase();
		var textukr = document.getElementById('textukr').value.trim().toUpperCase();

		var arrayeng = texteng.split('');
		var arrayrus = textrus.split('');
		var arrayukr = textukr.split('');

		let pimg = [];
		pimg[0]  = '//dobrolab.github.io/tarocalc/img/card.jpg';
		pimg[1]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35384cc126000e54a4d1';
		pimg[2]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef353567ba49000f1f6e93';
		pimg[3]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35339bde45000f8315b4';
		pimg[4]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35324cc126000e54a4b3';
		pimg[5]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35304cc126000e54a49b';
		pimg[6]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352f9bde45000f831589';
		pimg[7]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352e67ba49000f1f6e41';
		pimg[8]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef3526025940000f7fe5c5';
		pimg[9]  =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352b9bde45000f831565';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35284cc126000e54a44f';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352c4cc126000e54a47b';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef3523629557000fcf3063';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352267ba49000f1f6e17';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352067ba49000f1f6dfb';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef351e629557000fcf3031';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef351d629557000fcf3017';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35194cc126000e54a3e7';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35174cc126000e54a3bf';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef351667ba49000f1f6d7d';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef3514025940000f7fe511';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35124cc126000e54a38f';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35109bde45000f831471';


	// ENG
		// цикл находим соответствия
		var resulteng = [];
		for (var ieng = 0; ieng < (arrayeng.length); ieng++) {
			resulteng[ieng] = 0;
			if (arrayeng[ieng] == "A") { resulteng[ieng] = 22; }
			if (arrayeng[ieng] == "B") { resulteng[ieng] = 1; }
			if (arrayeng[ieng] == "C") { resulteng[ieng] = 2; }
			if (arrayeng[ieng] == "D") { resulteng[ieng] = 3; }
			if (arrayeng[ieng] == "E") { resulteng[ieng] = 4; }
			if (arrayeng[ieng] == "F") { resulteng[ieng] = 5; }
			if (arrayeng[ieng] == "G") { resulteng[ieng] = 6; }
			if (arrayeng[ieng] == "H") { resulteng[ieng] = 7; }
			if (arrayeng[ieng] == "I") { resulteng[ieng] = 8; }
			if (arrayeng[ieng] == "J") { resulteng[ieng] = 9; }
			if (arrayeng[ieng] == "K") { resulteng[ieng] = 10; }
			if (arrayeng[ieng] == "L") { resulteng[ieng] = 11; }
			if (arrayeng[ieng] == "M") { resulteng[ieng] = 12; }
			if (arrayeng[ieng] == "N") { resulteng[ieng] = 13; }
			if (arrayeng[ieng] == "O") { resulteng[ieng] = 14; }
			if (arrayeng[ieng] == "U") { resulteng[ieng] = 14; }
			if (arrayeng[ieng] == "Q") { resulteng[ieng] = 14; }
			if (arrayeng[ieng] == "P") { resulteng[ieng] = 15; }
			if (arrayeng[ieng] == "R") { resulteng[ieng] = 16; }
			if (arrayeng[ieng] == "S") { resulteng[ieng] = 17; }
			if (arrayeng[ieng] == "T") { resulteng[ieng] = 18; }
			if (arrayeng[ieng] == "V") { resulteng[ieng] = 19; }
			if (arrayeng[ieng] == "W") { resulteng[ieng] = 19; }
			if (arrayeng[ieng] == "X") { resulteng[ieng] = 20; }
			if (arrayeng[ieng] == "Y") { resulteng[ieng] = 20; }
			if (arrayeng[ieng] == "Z") { resulteng[ieng] = 21; }
		};

		// проходимся циклом по результатам
		resultengRoman = [];
		resultengHTML = [];
		for (var jeng = 0; jeng < (resulteng.length); jeng++) {
			if (arrayeng[jeng] == ' ') {arrayeng[jeng] = '&nbsp;'};
			resultengRoman[jeng] = convertToRoman(resulteng[jeng]);
			resultengHTML[jeng] = '<div class="tcard" id="r01"><div class="ordernumber">'+(jeng+1)+'</div><div class="romulus" id="rr01">'+arrayeng[jeng]+'</div><div><img id="ri01" src="'+pimg[resulteng[jeng]]+'" class="cimg"></div><div class="rstring" id="rs01">'+resultengRoman[jeng]+'</div></div>';
		};

		// Преобразуем массив в строку
		//const result_eng_text = resulteng.join(' ');
		const result_eng_text = resultengRoman.join('— ');
		const result_eng_html = resultengHTML.join(' ');

		// Находим элемент с id="result1" и записываем в него строку
		//document.getElementById('result1').innerHTML = arrayAsString;
		document.getElementById('result_eng').textContent = result_eng_text;
		document.getElementById('result_eng').innerHTML = result_eng_html;

	// RUS
		// цикл находим соответствия
		var resultrus = [];
		for (var irus = 0; irus < (arrayrus.length); irus++) {
			resultrus[irus] = 0;
			if (arrayrus[irus] == "А") { resultrus[irus] = 22; }
			if (arrayrus[irus] == "Б") { resultrus[irus] = 1; }
			if (arrayrus[irus] == "В") { resultrus[irus] = 2; }
			if (arrayrus[irus] == "Г") { resultrus[irus] = 3; }
			if (arrayrus[irus] == "Ч") { resultrus[irus] = 4; }
			if (arrayrus[irus] == "Д") { resultrus[irus] = 5; }
			if (arrayrus[irus] == "Е") { resultrus[irus] = 6; }
			if (arrayrus[irus] == "Ё") { resultrus[irus] = 7; }
			if (arrayrus[irus] == "Э") { resultrus[irus] = 8; }
			if (arrayrus[irus] == "Ж") { resultrus[irus] = 9; }
			if (arrayrus[irus] == "З") { resultrus[irus] = 10; }
			if (arrayrus[irus] == "И") { resultrus[irus] = 11; }
			if (arrayrus[irus] == "Й") { resultrus[irus] = 12; }
			if (arrayrus[irus] == "К") { resultrus[irus] = 13; }
			if (arrayrus[irus] == "Л") { resultrus[irus] = 14; }
			if (arrayrus[irus] == "М") { resultrus[irus] = 14; }
			if (arrayrus[irus] == "Н") { resultrus[irus] = 14; }
			if (arrayrus[irus] == "О") { resultrus[irus] = 15; }
			if (arrayrus[irus] == "П") { resultrus[irus] = 16; }
			if (arrayrus[irus] == "Р") { resultrus[irus] = 17; }
			if (arrayrus[irus] == "С") { resultrus[irus] = 18; }
			if (arrayrus[irus] == "Ц") { resultrus[irus] = 19; }
			if (arrayrus[irus] == "Т") { resultrus[irus] = 19; }
			if (arrayrus[irus] == "У") { resultrus[irus] = 20; }
			if (arrayrus[irus] == "Ф") { resultrus[irus] = 20; }
			if (arrayrus[irus] == "Х") { resultrus[irus] = 21; }
			if (arrayrus[irus] == "Ш") { resultrus[irus] = 17; }
			if (arrayrus[irus] == "Щ") { resultrus[irus] = 18; }
			if (arrayrus[irus] == "Ъ") { resultrus[irus] = 19; }
			if (arrayrus[irus] == "Ы") { resultrus[irus] = 19; }
			if (arrayrus[irus] == "Ь") { resultrus[irus] = 20; }
			if (arrayrus[irus] == "Ю") { resultrus[irus] = 20; }
			if (arrayrus[irus] == "Я") { resultrus[irus] = 21; }
		};

		// проходимся циклом по результатам
		resultrusRoman = [];
		resultrusHTML = [];
		for (var jrus = 0; jrus < (resultrus.length); jrus++) {
			if (arrayrus[jrus] == ' ') {arrayrus[jrus] = '&nbsp;'};
			resultrusRoman[jrus] = convertToRoman(resultrus[jrus]);
			resultrusHTML[jrus] = '<div class="tcard" id="r01"><div class="ordernumber">'+(jrus+1)+'</div><div class="romulus" id="rr01">'+arrayrus[jrus]+'</div><div><img id="ri01" src="'+pimg[resultrus[jrus]]+'" class="cimg"></div><div class="rstring" id="rs01">'+resultrusRoman[jrus]+'</div></div>';
		};

		// Преобразуем массив в строку
		const result_rus_text = resultrusRoman.join(' ');
		const result_rus_html = resultrusHTML.join(' ');

		// Находим элемент с id="result1" и записываем в него строку
		//document.getElementById('result1').innerHTML = arrayAsString;
		document.getElementById('result_rus').textContent = result_rus_text;
		document.getElementById('result_rus').innerHTML = result_rus_html;


	// UKR
		// цикл находим соответствия
		var resultukr = [];
		for (var iukr = 0; iukr < (arrayukr.length); iukr++) {
			resultukr[iukr] = 0;
			if (arrayukr[iukr] == "А") { resultukr[iukr] = 22; }
			if (arrayukr[iukr] == "Б") { resultukr[iukr] = 1; }
			if (arrayukr[iukr] == "В") { resultukr[iukr] = 2; }
			if (arrayukr[iukr] == "Г") { resultukr[iukr] = 3; }
			if (arrayukr[iukr] == "Ґ") { resultukr[iukr] = 3; }
			if (arrayukr[iukr] == "Ч") { resultukr[iukr] = 3; }
			if (arrayukr[iukr] == "Д") { resultukr[iukr] = 4; }
			if (arrayukr[iukr] == "Е") { resultukr[iukr] = 5; }
			if (arrayukr[iukr] == "Є") { resultukr[iukr] = 5; }
			if (arrayukr[iukr] == "Ж") { resultukr[iukr] = 6; }
			if (arrayukr[iukr] == "З") { resultukr[iukr] = 6; }
			if (arrayukr[iukr] == "И") { resultukr[iukr] = 7; }
			if (arrayukr[iukr] == "І") { resultukr[iukr] = 7; }
			if (arrayukr[iukr] == "Ї") { resultukr[iukr] = 7; }
			if (arrayukr[iukr] == "Й") { resultukr[iukr] = 7; }
			if (arrayukr[iukr] == "К") { resultukr[iukr] = 8; }
			if (arrayukr[iukr] == "Л") { resultukr[iukr] = 9; }
			if (arrayukr[iukr] == "М") { resultukr[iukr] = 10; }
			if (arrayukr[iukr] == "Н") { resultukr[iukr] = 11; }
			if (arrayukr[iukr] == "О") { resultukr[iukr] = 12; }
			if (arrayukr[iukr] == "П") { resultukr[iukr] = 13; }
			if (arrayukr[iukr] == "Р") { resultukr[iukr] = 14; }
			if (arrayukr[iukr] == "С") { resultukr[iukr] = 15; }
			if (arrayukr[iukr] == "Ц") { resultukr[iukr] = 15; }
			if (arrayukr[iukr] == "Т") { resultukr[iukr] = 16; }
			if (arrayukr[iukr] == "У") { resultukr[iukr] = 17; }
			if (arrayukr[iukr] == "Ф") { resultukr[iukr] = 18; }
			if (arrayukr[iukr] == "Х") { resultukr[iukr] = 18; }
			if (arrayukr[iukr] == "Ш") { resultukr[iukr] = 19; }
			if (arrayukr[iukr] == "Щ") { resultukr[iukr] = 19; }
			if (arrayukr[iukr] == "Ь") { resultukr[iukr] = 20; }
			if (arrayukr[iukr] == "Ю") { resultukr[iukr] = 21; }
			if (arrayukr[iukr] == "Я") { resultukr[iukr] = 21; }
		};

		// проходимся циклом по результатам
		resultukrRoman = [];
		resultukrHTML = [];
		for (var jukr = 0; jukr < (resultukr.length); jukr++) {
			if (arrayukr[jukr] == ' ') {arrayukr[jukr] = '&nbsp;'};
			resultukrRoman[jukr] = convertToRoman(resultukr[jukr]);
			resultukrHTML[jukr] = '<div class="tcard" id="r01"><div class="ordernumber">'+(jukr+1)+'</div><div class="romulus" id="rr01">'+arrayukr[jukr]+'</div><div><img id="ri01" src="'+pimg[resultukr[jukr]]+'" class="cimg"></div><div class="rstring" id="rs01">'+resultukrRoman[jukr]+'</div></div>';
		};

		// Преобразуем массив в строку
		const result_ukr_text = resultukrRoman.join(' ');
		const result_ukr_html = resultukrHTML.join(' ');

		// Находим элемент с id="result1" и записываем в него строку
		//document.getElementById('result1').innerHTML = arrayAsString;
		document.getElementById('result_ukr').textContent = result_ukr_text;
		document.getElementById('result_ukr').innerHTML = result_ukr_html;


// =========================

		// Получаем значение даты рождения
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;

		// =========== SUN
		result = [];

		// [1] [2] Получаем значения
		result[1] = parseInt(birthdate);
		while ( result[1] > 22 ) { result[1] = result[1] - 22 };
		result[2] = parseInt(birthmonth);
		while ( result[2] > 22 ) { result[2] = result[2] - 22 };

		// [3]
		var yearsum = 0;
		for (var i = 0; i < birthyear.length; i++) {
			yearsum += parseInt(birthyear[i]);
		}
		result[3] = yearsum;
		while ( result[3] > 22 ) { result[3] = result[3] - 22 };

		// [4]
		result[4] = result[1] + result[2]
		if ( result[4] == 0 ) { result[4] = 22 };
		while ( result[4] > 22 ) { result[4] = result[4] - 22 };

		// [5]
		result[5] = result[2] + result[3]
		if ( result[5] > 22 ) { result[5] = result[5] - 22 };
		if ( result[5] == 0 ) { result[5] = 22 };
		while ( result[5] > 22 ) { result[5] = result[5] - 22 };

		// [6]
		result[6] = result[4] + result[5]
		if ( result[6] == 0 ) { result[6] = 22 };
		while ( result[6] > 22 ) { result[6] = result[6] - 22 };

		// [7]
		result[7] = result[1] + result[5]
		if ( result[7] == 0 ) { result[7] = 22 };
		while ( result[7] > 22 ) { result[7] = result[7] - 22 };

		// [8]
		result[8] = result[2] + result[6]
		if ( result[8] == 0 ) { result[8] = 22 };
		while ( result[8] > 22 ) { result[8] = result[8] - 22 };

		// [9]
		result[9] = result[7] + result[8]
		if ( result[9] == 0 ) { result[9] = 22 };
		while ( result[9] > 22 ) { result[9] = result[9] - 22 };

		// [10]
		result[10] = result[1] + result[4] + result[6]
		if ( result[10] == 0 ) { result[10] = 22 };
		while ( result[10] > 22 ) { result[10] = result[10] - 22 };

		// [11]
		result[11] = result[3] + result[5] + result[6]
		if ( result[11] == 0 ) { result[11] = 22 };
		while ( result[11] > 22 ) { result[11] = result[11] - 22 };

		// [12]
		result[12] = result[1] + result[2] + result[3] + result[4] + result[5] + result[6]
		if ( result[12] == 0 ) { result[12] = 22 };
		while ( result[12] > 22 ) { result[12] = result[12] - 22 };

		// [13]
		result[13] = result[1] - result[2]
		if ( result[13] < 0 ) { result[13] = result[13] - result[13] - result[13] };
		if ( result[13] == 0 ) { result[13] = 22 };
		while ( result[13] > 22 ) { result[13] = result[13] - 22 };

		// [14]
		result[14] = result[2] - result[3]
		if ( result[14] < 0 ) { result[14] = result[14] - result[14] - result[14] };
		if ( result[14] == 0 ) { result[14] = 22 };
		while ( result[14] > 22 ) { result[14] = result[14] - 22 };

		// [15]
		result[15] = result[13] - result[14]
		if ( result[15] < 0 ) { result[15] = result[15] - result[15] - result[15] };
		if ( result[15] == 0 ) { result[15] = 22 };
		while ( result[15] > 22 ) { result[15] = result[15] - 22 };

		// Преобразуем массив в строку
		const result_intersect = result.join(' ');


		// Находим совпадения

		const duplicatedeng = [...new Set(resulteng)].filter(item => result.includes(item));
		const duplicatedrus = [...new Set(resultrus)].filter(item => result.includes(item));
		const duplicatedukr = [...new Set(resultukr)].filter(item => result.includes(item));

		document.getElementById('intersection_eng').textContent = duplicatedeng.length;
		document.getElementById('intersection_rus').textContent = duplicatedrus.length;
		document.getElementById('intersection_ukr').textContent = duplicatedukr.length;



}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}


function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}


