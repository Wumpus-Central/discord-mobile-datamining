// discord_app/lib/search/EnglishAnalyzer.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import snowballStemmer from "snowballStemmer.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

function stripPossessive(item) {
  return item.replace(/('|\u2019|\uFF07)(s|S)$/, "");
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
function shouldHighlight(item, set) {
  const tmp = lowercase(stripPossessive(item));
  if (isBlank(tmp)) {
    return false;
  } else if (isStopWord(tmp)) {
    return false;
  } else {
    const obj = snowballStemmer;
    const snowballStemResult = obj.snowballStem(tmp);
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
function highlightAST(content, set, flag) {
  let closure_0 = set;
  let closure_1 = flag;
  if (Array.isArray(content)) {
    const item = content.forEach((item) => {
      highlightAST(item, set, flag);
      return item;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((item) => {
      highlightAST(item, set, flag);
      return item;
    });
  } else {
    if (typeof content.content === "string") {
      if ("codeBlock" !== content.type) {
        const items1 = [];
        content = "";
        const str3 = content.content;
        const parts = str3.split(/(\W+)/g);
        const item2 = parts.forEach((content) => {
          if (shouldHighlight(content, set, flag)) {
            if (content.length > 0) {
              const obj = { type: "text", content };
              items1.push(obj);
            }
            const obj2 = { type: "highlight", content };
            items1.push(obj2);
            content = "";
          } else {
            content = arr + content;
          }
        });
        if (items1.length > 0) {
          if (content.length > 0) {
            let obj = { type: "text", content };
            const arr = items1.push(obj);
          }
          if ("text" === content.type) {
            content.content = items1;
          } else {
            let obj2 = { type: "text", content: items1 };
            const items2 = [obj2];
            content.content = items2;
          }
        }
      }
    }
    if (null != content.content) {
      highlightAST(content.content, set, flag);
    }
  }
  return content;
}
let set = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "if",
  "in",
  "into",
  "is",
  "it",
  "no",
  "not",
  "of",
  "on",
  "or",
  "such",
  "that",
  "the",
  "their",
  "then",
  "there",
  "these",
  "they",
  "this",
  "to",
  "was",
  "will",
  "with",
]);
const result = size.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export const analyze = function analyze(str) {
  const tmp = _modDef12;
  const tmpResult = tmp(str.split(/\W+/));
  const mapped = tmpResult.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = rejectResult1.map(snowballStemmer.snowballStem);
  return iter.value();
};
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(str) {
  let closure_1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  set = undefined;
  let tmp3 =
    str.length >= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH &&
    str.length <= tmp(tmp2[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  importDefault = tmp3;
  const tmp4 = require("../../../_runtime/metro/00012__.js");
  const tmp4Result = tmp4(str.split(/\W+/));
  const mapped = tmp4Result.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = rejectResult1.map(flag(set[1]).snowballStem);
  set = new Set(iter.value());
  return (content) => {
    const tmp3 = closure_1 && flag;
    highlightAST(content, set, tmp3);
    return content;
  };
};
