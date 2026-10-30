// === Module 18711: EnglishAnalyzer ===

// Module 18711 (EnglishAnalyzer)
import _modDef12 from "module_12" /* 12 */;
import snowballStemmer from "snowballStemmer" /* 18712 */;
import Search from "Search" /* 18714 */;
import size from "module_2" /* 2 */;

function stripPossessive(item10009) {
  return item10009.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function lowercase(str) {
  return str.toLowerCase();
}
function isStopWord(arg0) {
  return set.has(arg0);
}
function isBlank(arg0) {
  return 0 === arg0.length;
}
function shouldHighlight(item10009, set, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(item10009));
  if (isBlank(tmp)) {
    return false;
  } else if (isStopWord(tmp)) {
    return false;
  } else {
    const snowballStemResult = snowballStemmer.snowballStem(tmp);
    if (flag) {
      const values = set.values();
      for (const item10025 of values) {
        if (snowballStemResult.includes(item10025)) {
          obj3.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    } else {
      return set.has(snowballStemResult);
    }
  }
}
function highlightAST(content, c0, c1) {
  closure_0 = _require;
  closure_1 = importDefault;
  if (Array.isArray(content)) {
    const item = content.forEach((item) => {
      highlightAST(item, closure_0, closure_1);
      return item;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((item) => {
      highlightAST(item, closure_0, closure_1);
      return item;
    });
  } else {
    if (typeof content.content === "string") {
      if ("codeBlock" !== content.type) {
        const obj = { words: _require, supportPartialMatches: importDefault };
        const arr = splitHighlights(content.content, obj);
        if (null != arr) {
          const mapped = arr.map((content) => {
            let type = "text";
            if (content.highlight) {
              type = "highlight";
            }
            return { type, content: content.text };
          });
          if ("text" === content.type) {
            content.content = mapped;
          } else {
            const obj2 = { type: "text", content: mapped };
            const items1 = [obj2];
            content.content = items1;
          }
        }
      }
    }
    if (null != content.content) {
      highlightAST(content.content, _require, importDefault);
    }
  }
  return content;
}
function createHighlightMatcher(str) {
  if (flag === undefined) {
    flag = false;
  }
  let tmp3 = str.length >= Search.SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
  if (tmp3) {
    tmp3 = str.length <= Search.SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  }
  const obj = { words: null, supportPartialMatches: null };
  const mapped = _modDef12(str.split(/\W+/)).map(stripPossessive);
  const tmp4Result = _modDef12(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = mapped1.reject(isStopWord).map(snowballStemmer.snowballStem);
  obj.words = new Set(mapped1.reject(isStopWord).map(snowballStemmer.snowballStem).value());
  if (tmp3) {
    tmp3 = flag;
  }
  obj.supportPartialMatches = tmp3;
  return obj;
}
function splitHighlights(content, words) {
  words = words.words;
  if (0 === words.size) {
    return null;
  } else {
    const items = [];
    let str = "";
    const parts = content.split(/(\W+)/g);
    for (const item10009 of parts) {
      if (shouldHighlight(item10009, words, tmp)) {
        if (``.length > 0) {
          let obj = { text: null, highlight: false };
          obj.text = str;
          let arr = items.push(obj);
        }
        let obj2 = { text: item10009, highlight: true };
        let arr4 = items.push(obj2);
        str = "";
      } else {
        str = `${tmp3}`;
      }
      continue;
    }
    let tmp11 = null;
    if (0 !== items.length) {
      tmp11 = items;
      if (str.length > 0) {
        const obj3 = { text: str, highlight: false };
        items.push(obj3);
        tmp11 = items;
      }
    }
    return tmp11;
  }
}
const set = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);
const result = size.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export function analyze(str) {
  const mapped = _modDef12(str.split(/\W+/)).map(stripPossessive);
  const tmpResult = _modDef12(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  return mapped1.reject(isStopWord).map(snowballStemmer.snowballStem).value();
}
export { shouldHighlight };
export { highlightAST };
export { createHighlightMatcher };
export { splitHighlights };
export function createASTHighlighter(arg0) {
  if (flag === undefined) {
    flag = false;
  }
  c0 = undefined;
  c1 = undefined;
  ({ words: c0, supportPartialMatches: c1 } = createHighlightMatcher(arg0, flag));
  return (content) => {
    highlightAST(content, c0, c1);
    return content;
  };
}