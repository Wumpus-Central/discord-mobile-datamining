// discord_app/lib/search/EnglishAnalyzer.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import snowballStemmer from "snowballStemmer.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
function shouldHighlight(item, set, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(item));
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
function highlightAST(content, set, flag) {
  closure_0 = set;
  closure_1 = flag;
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
        const items1 = [];
        content = "";
        const parts = content.content.split(/(\W+)/g);
        const item2 = parts.forEach((content) => {
          let arr = content;
          if (shouldHighlight(content, closure_0, closure_1)) {
            if (arr.length > 0) {
              let obj = { type: "text", content };
              arr = items1.push(obj);
            }
            obj = { type: "highlight", content };
            arr = items1.push(obj);
            content = "";
          } else {
            content = arr + content;
          }
        });
        if (items1.length > 0) {
          if (content.length > 0) {
            let obj = { type: "text", content };
            items1.push(obj);
          }
          if ("text" === content.type) {
            content.content = items1;
          } else {
            obj = { type: "text", content: items1 };
            const items2 = [obj];
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
  const mapped = _modDef12(str.split(/\W+/)).map(stripPossessive);
  const tmpResult = _modDef12(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  return mapped1.reject(isStopWord).map(snowballStemmer.snowballStem).value();
};
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(str) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let set;
  let tmp3 = str.length >= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
  if (tmp3) {
    tmp3 = str.length <= tmp(tmp2[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  }
  importDefault = tmp3;
  const tmp4 = require("../../../_runtime/metro/00012__.js");
  const mapped = require("../../../_runtime/metro/00012__.js")(str.split(/\W+/)).map(stripPossessive);
  const tmp4Result = require("../../../_runtime/metro/00012__.js")(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  set = new Set(mapped1.reject(isStopWord).map(flag(set[1]).snowballStem).value());
  return (content) => {
    let tmp3 = closure_1;
    if (closure_1) {
      tmp3 = flag;
    }
    highlightAST(content, set, tmp3);
    return content;
  };
};
