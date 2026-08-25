// === Module 16611: RegExpResult1 ===

// Module 16611 (RegExpResult1)
const RegExpResult = RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i");
const RegExpResult1 = RegExp("^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b", "i");
arg5.expBCP47Syntax = RegExpResult;
arg5.expVariantDupes = RegExpResult1;
arg5.expSingletonDupes = RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b", "i");
arg5.expExtSequences = RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+", "ig");