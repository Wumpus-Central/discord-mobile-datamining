// === Module 13111: BioMarkupUtils ===

// Module 13111 (BioMarkupUtils)
import privDefault from "priv" /* 1455 */;
import _modDef2069 from "module_2069" /* 2069 */;
import MarkupReactRulesDefault from "MarkupReactRules" /* 6121 */;
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import combineMarkupRules_mod from "combineMarkupRules" /* 7071 */;
import MarkupParser from "markup/MarkupParser" /* 7179 */;
import MarkupUtils_mod from "MarkupUtils" /* 7067 */;
import apply from "apply" /* 12 */;

let combineMarkupRules = combineMarkupRules_mod;
const items = [MarkupRulesDefault.PROFILE_BIO_RULES, MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }), ];
const MarkupReactRules = fn(6121);
items[2] = MarkupReactRules.createFetchingGameMentionRule();
const importDefaultResultResult = combineMarkupRules(items);
let c2 = importDefaultResultResult;
let closure_3 = new privDefault({ max: 2000 });
let closure_4 = { allowGameMentions: true };
let closure_5 = MarkupParser.reactParserFor(importDefaultResultResult);
let MarkupUtils = MarkupUtils_mod;
let closure_6 = MarkupUtils.astParserFor(importDefaultResultResult);
let MarkupUtils = MarkupUtils_mod;
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

export function parseBioReact(bio, arg1, arg2, arg3) {
  const merged = Object.assign(closure_4);
  const merged1 = Object.assign(arg2);
  return closure_5(bio, arg1, {}, arg3);
}
export function getOrParseBioAST(arg0, guildId) {
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
}
export function parseBioReactWithCachedAST(description, guildId) {
  if (0 === description.trim().length) {
    return null;
  } else {
    let str = guildId;
    if (guildId == null) {
      str = "";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + description;
    value = closure_3.get(combined);
    if (null == value) {
      const obj2 = { guildId };
      const tmp5 = closure_6(description, true, obj2);
      const result = closure_3.set(combined, tmp5);
      value = tmp5;
    }
    const obj3 = _modDef2069;
    return obj3.reactFor(_modDef2069.ruleOutput(importDefaultResultResult, "react"))(value);
  }
}
export const parseBioReactWithoutScrolling = MarkupUtils.reactParserFor(combineMarkupRules(items1));