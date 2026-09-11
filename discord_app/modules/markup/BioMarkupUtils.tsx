// === Module 9510: BioMarkupUtils ===

// Module 9510 (BioMarkupUtils)
import privDefault from "priv" /* 1437 */;
import _modDef4303 from "module_4303" /* 4303 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 4597 */;
import MarkupRulesDefault from "MarkupRules" /* 5049 */;
import combineMarkupRules from "combineMarkupRules" /* 5048 */;
import MarkupParser from "MarkupParser" /* 8061 */;
import MarkupUtils from "MarkupUtils" /* 4596 */;
import apply from "module_12" /* 12 */;

const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
let MarkupReactRules = fn(4597);
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let closure_3 = new privDefault({ max: 2000 });
let closure_4 = { allowGameMentions: true };
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
const items1 = [apply.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), ];
MarkupReactRules = {
  emoji: {
    react() {
      return null;
    }
  }
};
items1[1] = MarkupReactRules;
let tmp4 = new privDefault({ max: 2000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(bio, arg1, arg2, arg3) {
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, {}, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  value = closure_3.get(arg0);
  if (null == value) {
    const tmp3 = closure_6(arg0, true);
    const result = closure_3.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    value = closure_3.get(description);
    if (null == value) {
      const tmp4 = closure_6(description, true);
      const result = closure_3.set(description, tmp4);
      value = tmp4;
    }
    const obj2 = _modDef4303;
    return obj2.reactFor(_modDef4303.ruleOutput(importDefaultResultResult, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = MarkupParser.reactParserFor(combineMarkupRules(items1));