// discord_app/modules/markup/BioMarkupUtils.tsx
import importDefaultResult from "combineMarkupRules";
import importAllResult from "reactParserFor";
import importDefaultResult1 from "get defaultRules";
import importAllResult1 from "reactParserFor";
import importDefaultResult2 from "combineMarkupRules";
import importDefaultResult3 from "apply";
import { t } from "../../../_runtime/03983_t.js";

const items = [require("parseLink").PROFILE_BIO_RULES, require("MarkupText")({ enableBuildOverrides: false, mustConfirmExternalLink: true })];
const importDefaultResultResult = require("combineMarkupRules")(items);
let c3 = new require("priv")({ max: 2000 });
let tmp4 = new require("priv")({ max: 2000 });
const reactParserForResult = require("reactParserFor").reactParserFor(importDefaultResultResult);
let closure_4 = require("get defaultRules").astParserFor(importDefaultResultResult);
const items1 = [
  require("apply").omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
  {
    emoji: {
      react() {
        return null;
      }
    }
  }
];
let obj = {
  react() {
    return null;
  }
};
const reactParserForResult1 = importAllResult1.reactParserFor(importDefaultResult2(items1));
let result = require("MarkupText").fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = reactParserForResult;
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  let value = tmp4.get(arg0);
  if (null == value) {
    const tmp3 = callback(arg0, true);
    const result = tmp4.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    let value = tmp4.get(description);
    if (null == value) {
      tmp4 = callback(description, true);
      const result = obj.set(description, tmp4);
      value = tmp4;
    }
    obj = tmp4;
    const obj2 = t;
    return obj2.reactFor(t.ruleOutput(closure_2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult1;