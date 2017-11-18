S = ns.Scheme;


function add(testcases, scheme, items) {
    for (var i = 0; i < items.length; i++) {
        testcases.push([items[i], scheme]);
    }
}


BASIC = [];
add(BASIC, S.Bengali, ['অ', '৺']);
add(BASIC, S.Devanagari, ['ऄ', 'ॿ']);
add(BASIC, S.Gujarati, ['અ', '૱']);
add(BASIC, S.Gurmukhi, ['ਅ', 'ੴ']);
add(BASIC, S.Kannada, ['ಅ', '೯']);
add(BASIC, S.Malayalam, ['അ', 'ൿ']);
add(BASIC, S.Oriya, ['ଅ', 'ୱ']);
add(BASIC, S.Tamil, ['அ', '௺']);
add(BASIC, S.Telugu, ['అ', '౿']);
add(BASIC, S.HK, [
    '',
    'rAga',
    'nadI',
    'vadhU',
    'kRta',
    'pitRRn',
    'klRpta',
    'lRR',
    'tejasvI',
    'gomayaH',
    'haMsa',
    'naraH',
    'aGka',
    'aGga',
    'prAGnayana',
    'vAGmaya',
    'aJjana',
    'kuTumba',
    'kaThora',
    'Damaru',
    'soDhA',
    'aruNa',
    'zveta',
    'SaS',
    'pANDava',
    'zRNoti',
    'jJAna',
    'gacchati',
    'SaNmAsa',
    'pariNata',
    'aruNa',
    'reNu',
    'koNa',
    'karaNa',
    'akSa',
    'antazcarati',
    'prazna',
    'azvatthAman',
    'yuddha',
]);
add(BASIC, S.IAST, [
    'rāga', 'ra\u0304ga', 'RĀGA', 'RA\u0304GA',
    'nadī', 'nadi\u0304', 'NADĪ', 'NADI\u0304',
    'vadhū', 'vadhu\u0304', 'VADHŪ', 'VADHU\u0304',
    'kṛta', 'kr\u0323ta', 'KṚTA', 'KR\u0323TA',
    'pitṝn', 'pitr\u0323\u0304n', 'PITṜN', 'PITR\u0323\u0304N',
    'kḷpta', 'kl\u0323pta', 'KḶPTA', 'KL\u0323PTA',
    'ḹ', 'l\u0323\u0304', 'Ḹ', 'L\u0323\u0304',
    'tejasvī', 'tejasvi\u0304', 'TEJASVĪ', 'TEJASVI\u0304',
    'gomayaḥ', 'gomayah\u0323', 'GOMAYAḤ', 'GOMAYAH\u0323',
    'haṃsa', 'ham\u0323sa', 'HAṂSA', 'HAM\u0323SA',
    'naraḥ', 'narah\u0323', 'NARAḤ', 'NARAH\u0323',
    'aṅga', 'an\u0307ga', 'AṄGA', 'AN\u0307GA',
    'añjana', 'an\u0303jana', 'AÑJANA', 'AN\u0303JANA',
    'kuṭumba', 'kut\u0323umba', 'KUṬUMBA', 'KUT\u0323UMBA',
    'kaṭhora', 'kat\u0323hora', 'KAṬHORA', 'KAT\u0323HORA',
    'ḍamaru', 'd\u0323amaru', 'ḌAMARU', 'D\u0323AMARU',
    'soḍhā', 'sod\u0323ha\u0304', 'SOḌHĀ', 'SOD\u0323HA\u0304',
    'aruṇa', 'arun\u0323a', 'ARUṆA', 'ARUN\u0323A',
    'śveta', 's\u0301veta', 'ŚVETA', 'S\u0301VETA',
    'ṣaṣ', 's\u0323as\u0323', 'ṢAṢ', 'S\u0323AS\u0323',
    'ḻa', 'l\u0331a', 'ḺA', 'L\u0331A',
    'pāṇḍava', 'pa\u0304n\u0323d\u0323ava', 'PĀṆḌAVA', 'PA\u0304N\u0323D\u0323AVA',
    'śṛṇoti', 's\u0301r\u0323n\u0323oti', 'ŚṚṆOTI', 'S\u0301R\u0323N\u0323OTI',
    'jñāna', 'jn\u0303a\u0304na', 'JÑĀNA', 'JN\u0303A\u0304NA',
]);
add(BASIC, S.ITRANS, [
    'raaga',
    'nadii',
    'nadee',
    'vadhuu',
    'vadhoo',
    'kRRita',
    'kR^ita',
    'pitRRIn',
    'pitR^In',
    'kLLipta',
    'kL^ipta',
    'LLI',
    'L^I',
    'a~Nga',
    'aN^ga',
    'ChAyA',
    'chhAyA',
    'a~njana',
    'aJNjana',
    'shveta',
    'ShaSh',
    'shhashh',
    '.akarot',
    'shRRiNoti',
    'j~nAna',
    'gachChati',
    'gachchhati',
]);
add(BASIC, S.Kolkata, [
    'tējas', 'te\u0304jas', 'TĒJAS', 'TE\u0304JAS',
    'sōma', 'so\u0304ma', 'SŌMA', 'SO\u0304MA',
]);
add(BASIC, S.SLP1, [
    'kfta',
    'pitFn',
    'kxpta',
    'XkAra',
    'kEvalya',
    'kOsalya',
    'Gasmara',
    'GAsa',
    'Guka',
    'GUr',
    'Gfta',
    'Goza',
    'GOra',
    'arGya',
    'GrA',
    'aNka',
    'aNga',
    'CAyA',
    'aYjana',
    'jYAna',
    'kuwumba',
    'kaWora',
    'qamaru',
    'soQA',
    'pARqava',
    'Pala',
    'Bara',
    'gacCati',
    'zaRmAsa',
    'pariRata',
    'aruRa',
    'SfRoti',
    'reRu',
    'koRa',
    'ArDadrORika',
    'akza',
    'antaScarati',
    'praSna',
    'aSvatTAman',
    'yudDa',
]);
add(BASIC, S.Velthuis, [
    'k.rta',
    'pit.rrn',
    'k.lipta',
    '.ll',
    'sa.myoga',
    'gomaya.h',
    'a"nga',
    'ku.tumba',
    'ka.thora',
    '.damaru',
    'so.dhaa',
    'aru.na',
    '~sveta',
    '.sa.s',
]);


module('Basic');
test('basicTests', function() {
    for (var i = 0; i < BASIC.length; i++) {
        var datum = BASIC[i],
            text = datum[0],
            scheme = datum[1],
            test_name = text + ' (' + scheme + ')';
        equal(ns.detect(text), scheme, test_name);
    }
});


module('Noisy');
test('noisyTests', function() {
    var noise = ' \t\n 1234567890 !@#$%^&*(),.<>\'\"-_[]{}\\|;:`~ ΣД あア';
    for (var i = 0; i < BASIC.length; i++) {
        var datum = BASIC[i],
            text = datum[0],
            scheme = datum[1],
            test_name = text + ' (' + scheme + ')';
        text = noise + text + noise;
        equal(ns.detect(text), scheme, test_name);
    }
});
