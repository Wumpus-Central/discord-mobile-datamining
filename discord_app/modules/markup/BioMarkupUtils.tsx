// discord_app/modules/markup/BioMarkupUtils.tsx
import privDefault from "../../../_runtime/01405_priv.js";
import tDefault from "../../../_runtime/04092_t.js";
import MarkupTextDefault from "MarkupReactRules.native.tsx";
import parseLinkDefault from "MarkupRules.tsx";
import importDefaultResult from "combineMarkupRules.tsx";
import importAllResult from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import importDefaultResult1 from "MarkupUtils.tsx";
import importDefaultResult3 from "../../../_runtime/00012_apply.js";

const items = [parseLinkDefault.PROFILE_BIO_RULES, MarkupTextDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true })];
const importDefaultResultResult = importDefaultResult(items);
let closure_3 = new privDefault({ max: 2000 });
let tmp4 = new privDefault({ max: 2000 });
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
let closure_4 = importDefaultResult1.astParserFor(importDefaultResultResult);
const importAllResult1 = importAllResult;
const importDefaultResult2 = importDefaultResult;
const items1 = [
  importDefaultResult3.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
  {
    emoji: {
      react() {
        return null;
      }
    }
  }
];
const reactParserForResult1 = importAllResult1.reactParserFor(importDefaultResult2(items1));
let result = require("obj132").fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = reactParserForResult;
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  let value = store.get(arg0);
  if (null == value) {
    const tmp3 = callback(arg0, true);
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
      const tmp4 = callback(description, true);
      const result = store.set(description, tmp4);
      value = tmp4;
    }
    const obj2 = tDefault;
    return obj2.reactFor(tDefault.ruleOutput(closure_2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult1;