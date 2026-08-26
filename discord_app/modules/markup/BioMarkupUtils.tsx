// === Module 9750: parseBioReact ===

// Module 9750 (parseBioReact)
import privDefault from "priv" /* 1405 */;
import tDefault from "t" /* 4160 */;
import MarkupTextDefault from "MarkupText" /* 4435 */;
import parseLinkDefault from "parseLink" /* 4902 */;
import MarkupText from "MarkupText" /* 4435 */;
import importDefaultResult from "combineMarkupRules" /* 4901 */;
import importAllResult from "reactParserFor" /* 8314 */;
import importDefaultResult1 from "get defaultRules" /* 4434 */;
import importDefaultResult3 from "apply" /* 12 */;

const items = [parseLinkDefault.PROFILE_BIO_RULES, MarkupTextDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
items[2] = MarkupText.createFetchingGameMentionRule();
const importDefaultResultResult = importDefaultResult(items);
let closure_3 = new privDefault({ max: 2000 });
let closure_4 = { allowGameMentions: true };
let tmp4 = new privDefault({ max: 2000 });
let closure_5 = importAllResult.reactParserFor(importDefaultResultResult);
let closure_6 = importDefaultResult1.astParserFor(importDefaultResultResult);
const importAllResult1 = importAllResult;
const importDefaultResult2 = importDefaultResult;
const items1 = [importDefaultResult3.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), ];
MarkupText = {
  react() {
    return null;
  }
};
items1[1] = { emoji: MarkupText };
const reactParserForResult = importAllResult1.reactParserFor(importDefaultResult2(items1));
let result = require("set").fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(arg0, arg1, arg2) {
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return callback(arg0, arg1, {}, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  let value = store.get(arg0);
  if (null == value) {
    const tmp3 = callback2(arg0, true);
    const result = store.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    let value = store.get(description);
    if (null == value) {
      const tmp4 = callback2(description, true);
      const result = obj.set(description, tmp4);
      value = tmp4;
    }
    obj = store;
    const obj2 = tDefault;
    return obj2.reactFor(tDefault.ruleOutput(closure_2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult;