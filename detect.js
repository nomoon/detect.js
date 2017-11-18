(function(ns) {

    // Scheme data. This is split into separate objects below.
    // Sorted by code point.
    var SCHEMES = [
        ['Bengali', 0x0980],
        ['Devanagari', 0x0900],
        ['Gujarati', 0x0a80],
        ['Gurmukhi', 0x0a00],
        ['Kannada', 0x0c80],
        ['Malayalam', 0x0d00],
        ['Oriya', 0x0b00],
        ['Tamil', 0x0b80],
        ['Telugu', 0x0c00],
        ['HK', null],
        ['IAST', null],
        ['ITRANS', null],
        ['Kolkata', null],
        ['SLP1', null],
        ['Velthuis', null],
    ],

    // Schemes sorted by Unicode code point. Ignore schemes with none defined.
    BLOCKS = SCHEMES
        .filter(function(x) { return x[1]; })  // keep non-null
        .sort(function(x, y) { return y[1] - x[1]; });  // sort by code point

    // Match on any Brahmic character between Devanagari and Malayalam
    var RE_BRAHMIC_CHARACTER = /[\u0900-\u0d7f]/

    // Match on special Roman characters
    RE_IAST_OR_KOLKATA_ONLY = RegExp(['[āīūṛṝḷḹēōṃḥṅñṭḍṇśṣḻĀĪŪṚṜḶḸĒŌṂḤṄÑṬḌṆŚṢḺ]|',
                                      '[aiueoAIUEO]\u0304|[rlRL]\u0323\u0304?|',
                                      '[mhtdMHTD]\u0323|[nN][\u0307\u0303\u0323]|',
                                      '[sS][\u0301\u0323]|[lL]\u0331'].join('')),

    // Match on chars shared by ITRANS and Velthuis
    RE_ITRANS_OR_VELTHUIS_ONLY = /aa|ii|uu|~n/,

    // Match on ITRANS-only
    RE_ITRANS_ONLY = /ee|oo|\^[iI]|RR[iI]|L[iI]|~N|N\^|Ch|chh|JN|sh|Sh|\.a/,

    // Match on Kolkata-specific Roman characters
    RE_KOLKATA_ONLY = /[ēōĒŌ]|[eoEO]\u0304/,

    // Match on SLP1-only characters and bigrams
    RE_SLP1_ONLY = RegExp(['[fFxXEOCYwWqQPB]|kz|N[kg]|tT|dD|S[cn]|',
                           '[aAiIuUfFxXeEoO]R|',
                           'G[yr]|(\\W|^)G'].join('')),

    // Match on Velthuis-only characters
    RE_VELTHUIS_ONLY = /\.[mhnrlntds]|"n|~s/;

    var Scheme = ns.Scheme = {};
    for (var i = 0; i < SCHEMES.length; i++) {
        var value = SCHEMES[i][0];
        Scheme[value] = value;
    }

    ns.detect = function(text) {
        // Brahmic schemes are all within a specific range of code points.
        var brahmic_match = RE_BRAHMIC_CHARACTER.exec(text);
        if (brahmic_match) {
            var code = brahmic_match[0].charCodeAt(0)
            for (var j = 0; j < BLOCKS.length; j++) {
                var block = BLOCKS[j];
                if (code >= block[1]) {
                    return block[0];
                }
            }
        }

        // Romanizations
        if (RE_IAST_OR_KOLKATA_ONLY.test(text)) {
            if (RE_KOLKATA_ONLY.test(text)) {
                return Scheme.Kolkata;
            }
            return Scheme.IAST;
        }

        if (RE_ITRANS_ONLY.test(text)) {
            return Scheme.ITRANS;
        }

        if (RE_SLP1_ONLY.test(text)) {
            return Scheme.SLP1;
        }

        if (RE_VELTHUIS_ONLY.test(text)) {
            return Scheme.Velthuis;
        }

        if (RE_ITRANS_OR_VELTHUIS_ONLY.test(text)) {
            return Scheme.ITRANS;
        }

        return Scheme.HK;
    };
}(typeof exports === 'undefined' ? (this['ns'] = this['ns'] || {}) : exports));
