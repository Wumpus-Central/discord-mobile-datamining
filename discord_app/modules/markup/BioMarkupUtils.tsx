// === Module 11225: BioMarkupUtils ===

// Module 11225 (BioMarkupUtils)
import privDefault from "priv" /* 1456 */;
import _modDef1948 from "module_1948" /* 1948 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 5078 */;
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 5397 */;
import MarkupParser_mod from "MarkupParser" /* 7978 */;
import MarkupUtils from "MarkupUtils" /* 5077 */;
import apply from "module_12" /* 12 */;

let combineMarkupRules = combineMarkupRules_mod;
const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
const MarkupReactRules = fn(5078);
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let closure_3 = new privDefault({ max: 2000 });
let closure_4 = { allowGameMentions: true };
let MarkupParser = MarkupParser_mod;
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
let MarkupParser = MarkupParser_mod;
let combineMarkupRules = combineMarkupRules_mod;
const items1 = [
  apply.omit(importDefaultResultResult, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]),
  {
    emoji: {
      react() {
        return null;
      }
    }
  }
];
let obj2 = {
  emoji: {
    react() {
      return null;
    }
  }
};
let tmp4 = new privDefault({ max: 2000 });
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = function parseBioReact(bio, arg1, arg2, arg3) {
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, {}, arg3);
};
export const getOrParseBioAST = function getOrParseBioAST(arg0, guildId) {
  let str = guildId;
  if (guildId == null) {
    str = "";
  }
  const combined = "" + str + ":" + arg0;
  value = closure_3.get(combined);
  if (null == value) {
    const obj2 = { guildId };
    const tmp4 = closure_6(arg0, true, obj2);
    const result = closure_3.set(combined, tmp4);
    value = tmp4;
  }
  return value;
};
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(cResult, guildId) {
  if (0 === cResult.trim().length) {
    return null;
  } else {
    let str = guildId;
    if (guildId == null) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + cResult;
    value = closure_3.get(combined);
    if (null == value) {
      const obj2 = { guildId };
      const tmp5 = closure_6(cResult, true, obj2);
      const result = closure_3.set(combined, tmp5);
      value = tmp5;
    }
    const obj3 = _modDef1948;
    return obj3.reactFor(_modDef1948.ruleOutput(importDefaultResultResult, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = MarkupParser.reactParserFor(combineMarkupRules(items1));