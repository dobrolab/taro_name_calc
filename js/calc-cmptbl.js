function calculateSum() {

		// Получаем значение даты рождения
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;

		let pimg = [];
		pimg[0] = '';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35384cc126000e54a4d1';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef353567ba49000f1f6e93';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35339bde45000f8315b4';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35324cc126000e54a4b3';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef35304cc126000e54a49b';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352f9bde45000f831589';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352e67ba49000f1f6e41';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef3526025940000f7fe5c5';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/65ef352b9bde45000f831565';
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


		// =========== CHOOSEN

		// [1] [2] Получаем значения
		result01 = parseInt(birthdate);
		while ( result01 > 22 ) { result01 = result01 - 22 };
		result02 = parseInt(birthmonth);
		while ( result02 > 22 ) { result02 = result02 - 22 };

		// [3]
		var yearsum = 0;
		for (var i = 0; i < birthyear.length; i++) {
			yearsum += parseInt(birthyear[i]);
		}
		result03 = yearsum;
		while ( result03 > 22 ) { result03 = result03 - 22 };

		// [4]
		result04 = result01 + result02
		if ( result04 == 0 ) { result04 = 22 };
		while ( result04 > 22 ) { result04 = result04 - 22 };

		// [5]
		result05 = result02 + result03
		if ( result05 > 22 ) { result05 = result05 - 22 };
		if ( result05 == 0 ) { result05 = 22 };
		while ( result05 > 22 ) { result05 = result05 - 22 };

		// [6]
		result06 = result04 + result05
		if ( result06 == 0 ) { result06 = 22 };
		while ( result06 > 22 ) { result06 = result06 - 22 };

		// [7]
		result07 = result01 + result05
		if ( result07 == 0 ) { result07 = 22 };
		while ( result07 > 22 ) { result07 = result07 - 22 };

		// [8]
		result08 = result02 + result06
		if ( result08 == 0 ) { result08 = 22 };
		while ( result08 > 22 ) { result08 = result08 - 22 };

		// [9]
		result09 = result07 + result08
		if ( result09 == 0 ) { result09 = 22 };
		while ( result09 > 22 ) { result09 = result09 - 22 };

		// [10]
		result10 = result01 + result04 + result06
		if ( result10 == 0 ) { result10 = 22 };
		while ( result10 > 22 ) { result10 = result10 - 22 };

		// [11]
		result11 = result03 + result05 + result06
		if ( result11 == 0 ) { result11 = 22 };
		while ( result11 > 22 ) { result11 = result11 - 22 };

		// [12]
		result12 = result01 + result02 + result03 + result04 + result05 + result06
		if ( result12 == 0 ) { result12 = 22 };
		while ( result12 > 22 ) { result12 = result12 - 22 };


		// ========== KARMA

		// [13]
		result13 = result01 - result02
		if ( result13 < 0 ) { result13 = result13 - result13 - result13 };
		if ( result13 == 0 ) { result13 = 22 };
		while ( result13 > 22 ) { result13 = result13 - 22 };

		// [14]
		result14 = result02 - result03
		if ( result14 < 0 ) { result14 = result14 - result14 - result14 };
		if ( result14 == 0 ) { result14 = 22 };
		while ( result14 > 22 ) { result14 = result14 - 22 };

		// [15]
		result15 = result13 - result14
		if ( result15 < 0 ) { result15 = result15 - result15 - result15 };
		if ( result15 == 0 ) { result15 = 22 };
		while ( result15 > 22 ) { result15 = result15 - 22 };

		// [16]
		result16 = ( result13 + result14 + result15 ) - result07
		if ( result16 < 0 ) { result16 = result16 - result16 - result16 };
		if ( result16 == 0 ) { result16 = 22 };
		while ( result16 > 22 ) { result16 = result16 - 22 };

		// [17]
		result17 = result13 + result14 + result15
		if ( result17 == 0 ) { result17 = 22 };
		while ( result17 > 22 ) { result17 = result17 - 22 };

		// [18]
		result18 = result01 + result03 + result04 + result05
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		if ( result18 == 0 ) { result18 = 22 };
		while ( result18 > 22 ) { result18 = result18 - 22 };

		// [19]
		result19 = result15 + result06
		if ( result19 < 0 ) { result19 = result19 - result19 - result19 };
		if ( result19 == 0 ) { result19 = 22 };
		while ( result19 > 22 ) { result19 = result19 - 22 };

		// [20]
		result20 = result15 + result08
		if ( result20 < 0 ) { result20 = result20 - result20 - result20 };
		if ( result20 == 0 ) { result20 = 22 };
		while ( result20 > 22 ) { result20 = result20 - 22 };

		// [21]
		result21 = result01 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result21 > 22 ) { result21 = result21 - 22 };

		// [22]
		result22 = result02 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result22 > 22 ) { result22 = result22 - 22 };

		// [23]
		result23 = result05 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result23 > 22 ) { result23 = result23 - 22 };

		// [24]
		result24 = result06 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result24 > 22 ) { result24 = result24 - 22 };

		// Выводим результат на экран
		document.getElementById('rr01').textContent = convertToRoman(result01);
			document.getElementById('rs01').textContent = convertToSub(result01);
			document.getElementById('ri01').src = pimg[result01];
		document.getElementById('rr02').textContent = convertToRoman(result02);
			document.getElementById('rs02').textContent = convertToSub(result02);
			document.getElementById('ri02').src = pimg[result02];
		document.getElementById('rr03').textContent = convertToRoman(result03);
			document.getElementById('rs03').textContent = convertToSub(result03);
			document.getElementById('ri03').src = pimg[result03];
		document.getElementById('rr04').textContent = convertToRoman(result04);
			document.getElementById('rs04').textContent = convertToSub(result04);
			document.getElementById('ri04').src = pimg[result04];
		document.getElementById('rr05').textContent = convertToRoman(result05);
			document.getElementById('rs05').textContent = convertToSub(result05);
			document.getElementById('ri05').src = pimg[result05];
		document.getElementById('rr06').textContent = convertToRoman(result06);
			document.getElementById('rs06').textContent = convertToSub(result06);
			document.getElementById('ri06').src = pimg[result06];
		document.getElementById('rr07').textContent = convertToRoman(result07);
			document.getElementById('rs07').textContent = convertToSub(result07);
			document.getElementById('ri07').src = pimg[result07];
		document.getElementById('rr08').textContent = convertToRoman(result08);
			document.getElementById('rs08').textContent = convertToSub(result08);
			document.getElementById('ri08').src = pimg[result08];
		document.getElementById('rr09').textContent = convertToRoman(result09);
			document.getElementById('rs09').textContent = convertToSub(result09);
			document.getElementById('ri09').src = pimg[result09];
		document.getElementById('rr10').textContent = convertToRoman(result10);
			document.getElementById('rs10').textContent = convertToSub(result10);
			document.getElementById('ri10').src = pimg[result10];
		document.getElementById('rr11').textContent = convertToRoman(result11);
			document.getElementById('rs11').textContent = convertToSub(result11);
			document.getElementById('ri11').src = pimg[result11];
		document.getElementById('rr12').textContent = convertToRoman(result12);
			document.getElementById('rs12').textContent = convertToSub(result12);
			document.getElementById('ri12').src = pimg[result12];
		document.getElementById('rr13').textContent = convertToRoman(result13);
			document.getElementById('rs13').textContent = convertToSub(result13);
			document.getElementById('ri13').src = pimg[result13];
		document.getElementById('rr14').textContent = convertToRoman(result14);
			document.getElementById('rs14').textContent = convertToSub(result14);
			document.getElementById('ri14').src = pimg[result14];
		document.getElementById('rr15').textContent = convertToRoman(result15);
			document.getElementById('rs15').textContent = convertToSub(result15);
			document.getElementById('ri15').src = pimg[result15];



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

