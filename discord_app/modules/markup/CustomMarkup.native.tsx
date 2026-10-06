// === Module 5791: CustomMarkup ===

// Module 5791 (CustomMarkup)
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import MarkupReactRules from "MarkupReactRules" /* 4884 */;
import MarkupTypes from "MarkupTypes" /* 5792 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 5793 */;
import MarkupRulesDefault from "MarkupRules" /* 5794 */;
import size from "module_2" /* 2 */;

const MarkupReactRulesDefault = MarkupReactRules;

function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = MarkupReactRulesDefault(arg0, obj);
  items = [, , ];
  const tmp2 = combineMarkupRulesDefault;
  items[0] = MarkupUtilsDefault.defaultRules;
  items[1] = tmp;
  const obj2 = {};
  const obj3 = { react: tmp[MarkupTypes.AST_KEY.LINK].react };
  const LINK = MarkupTypes.AST_KEY.LINK;
  const merged = Object.assign(_modDef1936.defaultRules.link);
  obj2[LINK] = obj3;
  const obj4 = { react: tmp[MarkupTypes.AST_KEY.URL].react };
  const _URL = MarkupTypes.AST_KEY.URL;
  const merged1 = Object.assign(_modDef1936.defaultRules.url);
  obj2[_URL] = obj4;
  const obj5 = { react: tmp[MarkupTypes.AST_KEY.AUTOLINK].react };
  const AUTOLINK = MarkupTypes.AST_KEY.AUTOLINK;
  const merged2 = Object.assign(_modDef1936.defaultRules.autolink);
  obj2[AUTOLINK] = obj5;
  const obj6 = { react: tmp[MarkupTypes.AST_KEY.BLOCK_QUOTE].react };
  const BLOCK_QUOTE = MarkupTypes.AST_KEY.BLOCK_QUOTE;
  const merged3 = Object.assign(_modDef1936.defaultRules.blockQuote);
  obj2[BLOCK_QUOTE] = obj6;
  items[2] = obj2;
  return tmp2(items);
}
function createRulesWithoutLinks(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const obj3 = {};
  const merged = Object.assign(createRules(arg0, obj));
  for (const item10012 of items) {
    delete obj2[item10012];
    continue;
  }
  return obj3;
}
function createNotifCenterV2MessagePreviewRules(arg0, arg1, roleStyle) {
  const tmp = MarkupReactRulesDefault(arg0, arg1, roleStyle);
  items = [, ];
  const tmp2 = combineMarkupRulesDefault;
  items[0] = MarkupUtilsDefault.notifCenterV2MessagePreviewRules;
  const obj = {};
  const obj2 = { react: tmp[MarkupTypes.AST_KEY.MENTION].react };
  const MENTION = MarkupTypes.AST_KEY.MENTION;
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj[MENTION] = obj2;
  const obj3 = { react: tmp[MarkupTypes.AST_KEY.CHANNEL_MENTION].react };
  const CHANNEL_MENTION = MarkupTypes.AST_KEY.CHANNEL_MENTION;
  const merged1 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.CHANNEL_MENTION]);
  obj[CHANNEL_MENTION] = obj3;
  const obj4 = { react: tmp[MarkupTypes.AST_KEY.ITALICS].react };
  const ITALICS = MarkupTypes.AST_KEY.ITALICS;
  const merged2 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.ITALICS]);
  obj[ITALICS] = obj4;
  items[1] = obj;
  return tmp2(items);
}
let items = [MarkupTypes.AST_KEY.URL, MarkupTypes.AST_KEY.AUTOLINK, MarkupTypes.AST_KEY.LINK, "mailto", "tel"];
const result = size.fileFinishedImporting("modules/markup/CustomMarkup.native.tsx");

export { createRules };
export const getParser = function getParser(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  const obj3 = MarkupUtilsDefault;
  return obj3.reactParserFor(createRules(obj, obj2));
};
export { createRulesWithoutLinks };
export const getParserWithoutLinks = function getParserWithoutLinks(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  const obj3 = MarkupUtilsDefault;
  return obj3.reactParserFor(createRulesWithoutLinks(obj, obj2));
};
export { createNotifCenterV2MessagePreviewRules };
export const getNotifCenterV2MessagePreviewParser = function getNotifCenterV2MessagePreviewParser(arg0, arg1) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = {};
  }
  const obj3 = MarkupUtilsDefault;
  return obj3.reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj2, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  items = [, ];
  const tmp = combineMarkupRulesDefault;
  items[0] = MarkupUtilsDefault.lockscreenWidgetMessageRules;
  const obj = {};
  const obj2 = { react: MarkupReactRules.plainMentionRenderer };
  const MENTION = MarkupTypes.AST_KEY.MENTION;
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj[MENTION] = obj2;
  const obj3 = { react: MarkupReactRules.plainSpoilerRenderer };
  const SPOILER = MarkupTypes.AST_KEY.SPOILER;
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj[SPOILER] = obj3;
  items[1] = obj;
  return tmp(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  MarkupUtilsDefault;
  items = [, ];
  const tmp2 = combineMarkupRulesDefault;
  items[0] = MarkupUtilsDefault.lockscreenWidgetMessageRules;
  const obj = {};
  const obj2 = { react: MarkupReactRules.plainMentionRenderer };
  const MENTION = MarkupTypes.AST_KEY.MENTION;
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj[MENTION] = obj2;
  const obj3 = { react: MarkupReactRules.plainSpoilerRenderer };
  const SPOILER = MarkupTypes.AST_KEY.SPOILER;
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj[SPOILER] = obj3;
  items[1] = obj;
  return reactParserFor(tmp2(items));
};