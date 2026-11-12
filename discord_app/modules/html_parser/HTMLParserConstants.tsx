// === Module 10282: HTMLParserConstants ===

// Module 10282 (HTMLParserConstants)
import size from "module_2" /* 2 */;

const tmp2 = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
const regExp = new RegExp(tmp2.source, "g");
const tmp4 = /[\n\r\u001c-\u001e\u0085\u2029]/;
const regExp1 = new RegExp("(" + tmp4.source + ")");
const regExp2 = new RegExp("" + /[\u0000-\u001f\u007f]/.source + "|" + tmp4.source);
const rawResult = String.raw(HermesBuiltin.getTemplateObject(false, "https?:\\/\\/[^\\s<]+[^<.,:;\"'\\]\\s]", "https?://[^s<]+[^<.,:;\"']s]"));
const regExp3 = new RegExp("^(" + rawResult + ")", "i");
const regExp4 = new RegExp(rawResult, "gi");
const obj = { LINE: 1, PARAGRAPH: 2 };
const obj2 = { b: { style: "bold" }, strong: { style: "bold" }, i: { style: "italic" }, em: { style: "italic" }, u: { style: "underline" }, h1: { heading: "h1", breaks: obj.PARAGRAPH }, h2: { heading: "h2", breaks: obj.PARAGRAPH }, h3: { heading: "h3", breaks: obj.PARAGRAPH }, h4: { heading: "h4", breaks: obj.PARAGRAPH }, p: { breaks: obj.PARAGRAPH }, blockquote: { breaks: obj.PARAGRAPH }, hr: { breaks: obj.PARAGRAPH }, div: { breaks: obj.LINE }, br: { lineBreak: true }, ul: { breaks: obj.LINE, list: "unordered" }, ol: { breaks: obj.LINE, list: "ordered" }, li: { breaks: obj.LINE, item: true }, a: { link: true }, span: {}, small: {}, sup: {}, script: { hidden: true }, style: { hidden: true } };
const set = new Set(["subject", "body"]);
const map = new Map(Object.entries({ b: { style: "bold" }, strong: { style: "bold" }, i: { style: "italic" }, em: { style: "italic" }, u: { style: "underline" }, h1: { heading: "h1", breaks: obj.PARAGRAPH }, h2: { heading: "h2", breaks: obj.PARAGRAPH }, h3: { heading: "h3", breaks: obj.PARAGRAPH }, h4: { heading: "h4", breaks: obj.PARAGRAPH }, p: { breaks: obj.PARAGRAPH }, blockquote: { breaks: obj.PARAGRAPH }, hr: { breaks: obj.PARAGRAPH }, div: { breaks: obj.LINE }, br: { lineBreak: true }, ul: { breaks: obj.LINE, list: "unordered" }, ol: { breaks: obj.LINE, list: "ordered" }, li: { breaks: obj.LINE, item: true }, a: { link: true }, span: {}, small: {}, sup: {}, script: { hidden: true }, style: { hidden: true } }));
const set1 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
const result = size.fileFinishedImporting("modules/html_parser/HTMLParserConstants.tsx");

export const DEFAULT_MAX_HTML_LENGTH = 10000;
export const BIDI_CONTROL_CHARACTERS = tmp2;
export const BIDI_CONTROL_CHARACTERS_GLOBAL = regExp;
export const BIDI_PARAGRAPH_SEPARATOR = tmp4;
export const BIDI_PARAGRAPH_SEPARATORS = regExp1;
export const URL_TEXT_BOUNDARY = regExp2;
export const URL_LABEL_IGNORABLE_CHARACTERS = /(?:[\xAD\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u115F\u1160\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u3164\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFEFF\uFFA0\uFFF0-\uFFF8]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFC-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD0\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00\uDF01\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E\uDCA0-\uDCA3]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|[\uDB40-\uDB43][\uDC00-\uDFFF])/g;
export const ALLOWED_MAILTO_HEADERS = set;
export const HTTP_URL_SCHEME = /https?:\/\//i;
export const BROKEN_URL_SCHEME_IN_LABEL = /\b(https?)(?::[/\\]+|[/\\]{2,})/gi;
export const URL_MATCH = regExp3;
export const URL_IN_LABEL = regExp4;
export const EMAIL_IN_LABEL = /(?:^|[^a-z0-9.!#$%&'*+\/=?^_`{|}~-])([a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;
export const HTML_WHITESPACE_CODES = { SPACE: 32, TAB: 9, LINE_FEED: 10, FORM_FEED: 12, CARRIAGE_RETURN: 13 };
export const BLOCK_BREAKS = obj;
export const TAG_BEHAVIORS = map;
export const PLAIN_STYLE = { bold: false, italic: false, underline: false };
export const BULLET = "\u2022 ";
export const HIGH_SURROGATE = /[\uD800-\uDBFF]/;
export const TAG_NAME = /^[a-z][a-z0-9:-]*$/;
export const BARE_UNKNOWN_TAG = /^<[a-z][a-z0-9:-]*\s*(?:\/+\s*)?>$/i;
export const SLASH_SEPARATED_UNKNOWN_TAG = /^<[a-z][a-z0-9:-]*(?:\s+[a-z0-9:+-]+)*(?:\s*\/+\s*[a-z0-9:+-]+(?:\s+[a-z0-9:+-]+)*)+\s*>$/i;
export const SLASH_PREFIXED_MARKER = /^<\/{2,}[\s/a-z0-9:+-]*>$/i;
export const VOID_HTML_TAGS = set1;
export const KNOWN_UNSUPPORTED_HTML_TAGS = new Set(["abbr", "address", "article", "aside", "audio", "bdi", "bdo", "body", "button", "canvas", "caption", "cite", "code", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h5", "h6", "head", "header", "hgroup", "html", "iframe", "ins", "kbd", "label", "legend", "main", "map", "mark", "math", "menu", "meter", "nav", "noscript", "object", "optgroup", "option", "output", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "sub", "summary", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "var", "video"]);