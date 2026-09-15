// discord_app/modules/markup/BioMarkupUtils.tsx
import privDefault from "../../../_runtime/01438_priv.js";
import _modDef4336 from "../../../_runtime/metro/04336__.js";
import MarkupReactRulesDefault from "MarkupReactRules.native.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import combineMarkupRules_mod from "combineMarkupRules.tsx";
import MarkupParser_mod from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import MarkupUtils from "MarkupUtils.tsx";
import apply from "../../../_runtime/metro/00012__.js";

let combineMarkupRules = combineMarkupRules_mod;
const items = [
  MarkupRulesDefault.PROFILE_BIO_RULES,
  MarkupReactRulesDefault({ enableBuildOverrides: false, mustConfirmExternalLink: true }),
];
const MarkupReactRules = fn(4630);
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
      },
    },
  },
];
let obj2 = {
  emoji: {
    react() {
      return null;
    },
  },
};
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
    const obj2 = _modDef4336;
    return obj2.reactFor(_modDef4336.ruleOutput(importDefaultResultResult, "react"))(value);
  }
};
export const parseBioReactWithoutScrolling = MarkupParser.reactParserFor(combineMarkupRules(items1));
