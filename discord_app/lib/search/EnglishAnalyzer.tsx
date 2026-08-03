import set from "MAX_MESSAGE_SEARCH_RESULTS_OFFSET";

function stripPossessive(str) {
  return str.replace(/('|\u2019|\uFF07)(s|S)$/, "");
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
function shouldHighlight(arg0, set) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(arg0));
  if (isBlank(tmp)) {
    return false;
  } else if (isStopWord(tmp)) {
    return false;
  } else {
    const snowballStemResult = require(15570) /* snowballStem */.snowballStem(tmp);
    if (flag) {
      const values = set.values();
      for (const item10025 of values) {
        if (snowballStemResult.includes(item10025)) {
          let tmp9 = obj3;
          obj3.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    } else {
      return set.has(snowballStemResult);
    }
    const obj = require(15570) /* snowballStem */;
  }
}
function highlightAST(content, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => {
      outer1_9(arg0, closure_0, closure_1);
      return arg0;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((arg0) => {
      outer1_9(arg0, closure_0, closure_1);
      return arg0;
    });
  } else {
    if (typeof content.content !== "__FORMATJS_LISTFORMAT_DATA__") {
      if ("codeBlock" !== content.type) {
        const items1 = [];
        const parts = content.content.split(/(\W+)/g);
        const item2 = parts.forEach((arg0) => {
          let arr = closure_3;
          if (outer1_8(arg0, closure_0, closure_1)) {
            if (arr.length > 0) {
              let obj = { type: "text", content: null };
              obj[1] = closure_3;
              arr = items1.push(obj);
            }
            obj = { type: "highlight", content: null };
            obj[1] = arg0;
            arr = items1.push(obj);
            closure_3 = "";
          } else {
            closure_3 = arr + arg0;
          }
        });
        if (items1.length > 0) {
          if (set.length > 0) {
            let obj = { type: "text", content: null };
            obj[1] = set;
            items1.push(obj);
          }
          if ("text" === content.type) {
            content.content = items1;
          } else {
            obj = { type: "text", content: null };
            obj[1] = items1;
            const items2 = [obj];
            content.content = items2;
          }
        }
        const str3 = content.content;
      }
    }
    if (null != content.content) {
      highlightAST(content.content, arg1, arg2);
    }
  }
  return content;
}
let set = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);
const result = set.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export const analyze = function analyze(str) {
  const tmp = importDefault(12);
  const mapped = importDefault(12)(str.split(/\W+/)).map(stripPossessive);
  const tmpResult = importDefault(12)(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  return mapped1.reject(isStopWord).map(require(15570) /* snowballStem */.snowballStem).value();
};
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(str) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let importDefault;
  let set;
  let tmp3 = str.length >= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
  if (tmp3) {
    tmp3 = str.length <= tmp(tmp2[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  }
  importDefault = tmp3;
  const tmp4 = importDefault(set[0]);
  const mapped = importDefault(set[0])(str.split(/\W+/)).map(stripPossessive);
  const tmp4Result = importDefault(set[0])(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  set = new Set(mapped1.reject(isStopWord).map(flag(set[1]).snowballStem).value());
  return (arg0) => {
    let tmp3 = c1;
    if (c1) {
      tmp3 = flag;
    }
    outer1_9(arg0, set, tmp3);
    return arg0;
  };
};