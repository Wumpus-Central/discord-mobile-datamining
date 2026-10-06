// === Module 8971: BioMarkupUtils ===

// Module 8971 (BioMarkupUtils)
import LRUCacheDefault from "LRUCache" /* 1444 */;
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 4884 */;
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 5793 */;
import MarkupParser_mod from "MarkupParser" /* 7657 */;
import MarkupUtils from "MarkupUtils" /* 4883 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const MarkupReactRules = MarkupReactRulesDefault;

let combineMarkupRules = combineMarkupRules_mod;
const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let tmp4 = new LRUCacheDefault({ max: 2000 });
let closure_3 = tmp4;
let closure_4 = { allowGameMentions: true };
let MarkupParser = MarkupParser_mod;
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
MarkupParser = MarkupParser_mod;
const reactParserFor = MarkupParser.reactParserFor;
combineMarkupRules = combineMarkupRules_mod;
const items1 = [module_12.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), ];
let obj = {
  emoji: {
    react() {
      return null;
    }
  }
};
items1[1] = obj;
const reactParserForResult = reactParserFor(combineMarkupRules(items1));
let result = size.fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(bio, arg1, arg2, arg3) {
  const obj = {};
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, obj, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0) {
  let value = closure_3.get(arg0);
  if (null == value) {
    const tmp3 = closure_6(arg0, true);
    const result = closure_3.set(arg0, tmp3);
    value = tmp3;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(cResult) {
  if (0 === cResult.trim().length) {
    return null;
  } else {
    let value = closure_3.get(cResult);
    if (null == value) {
      const tmp4 = closure_6(cResult, true);
      const result = closure_3.set(cResult, tmp4);
      value = tmp4;
    }
    const reactFor = _modDef1936.reactFor;
    _modDef1936;
    const obj2 = _modDef1936;
    return reactFor(obj2.ruleOutput(c2, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult;