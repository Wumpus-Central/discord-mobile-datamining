// === Module 5206: CustomMarkup ===

// Module 5206 (CustomMarkup)
import _modDef1929 from "module_1929" /* 1929 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4746 */;
import MarkupReactRules from "MarkupReactRules" /* 4747 */;
import MarkupTypes from "MarkupTypes" /* 5207 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 5208 */;
import MarkupRulesDefault from "MarkupRules" /* 5209 */;
import size from "module_2" /* 2 */;

const MarkupReactRulesDefault = MarkupReactRules;

function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = MarkupReactRulesDefault(arg0, obj);
  items = [MarkupUtilsDefault.defaultRules, tmp, ];
  const obj2 = {};
  const obj3 = {};
  const merged = Object.assign(_modDef1929.defaultRules.link);
  obj3.react = tmp[MarkupTypes.AST_KEY.LINK].react;
  obj2[MarkupTypes.AST_KEY.LINK] = obj3;
  const obj4 = {};
  const merged1 = Object.assign(_modDef1929.defaultRules.url);
  obj4.react = tmp[MarkupTypes.AST_KEY.URL].react;
  obj2[MarkupTypes.AST_KEY.URL] = obj4;
  const obj5 = {};
  const merged2 = Object.assign(_modDef1929.defaultRules.autolink);
  obj5.react = tmp[MarkupTypes.AST_KEY.AUTOLINK].react;
  obj2[MarkupTypes.AST_KEY.AUTOLINK] = obj5;
  const obj6 = {};
  const merged3 = Object.assign(_modDef1929.defaultRules.blockQuote);
  obj6.react = tmp[MarkupTypes.AST_KEY.BLOCK_QUOTE].react;
  obj2[MarkupTypes.AST_KEY.BLOCK_QUOTE] = obj6;
  items[2] = obj2;
  return combineMarkupRulesDefault(items);
}
function createRulesWithoutLinks(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const merged = Object.assign(createRules(arg0, obj));
  for (const item10012 of items) {
    delete tmp[tmp2];
    continue;
  }
  return {};
}
function createNotifCenterV2MessagePreviewRules(arg0, arg1, roleStyle) {
  const tmp = MarkupReactRulesDefault(arg0, arg1, roleStyle);
  items = [MarkupUtilsDefault.notifCenterV2MessagePreviewRules, ];
  const obj = {};
  const obj2 = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj2.react = tmp[MarkupTypes.AST_KEY.MENTION].react;
  obj[MarkupTypes.AST_KEY.MENTION] = obj2;
  const obj3 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.CHANNEL_MENTION]);
  obj3.react = tmp[MarkupTypes.AST_KEY.CHANNEL_MENTION].react;
  obj[MarkupTypes.AST_KEY.CHANNEL_MENTION] = obj3;
  const obj4 = {};
  const merged2 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.ITALICS]);
  obj4.react = tmp[MarkupTypes.AST_KEY.ITALICS].react;
  obj[MarkupTypes.AST_KEY.ITALICS] = obj4;
  items[1] = obj;
  return combineMarkupRulesDefault(items);
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
  return MarkupUtilsDefault.reactParserFor(createRules(obj, obj2));
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
  return MarkupUtilsDefault.reactParserFor(createRulesWithoutLinks(obj, obj2));
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
  return MarkupUtilsDefault.reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj2, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  items = [MarkupUtilsDefault.lockscreenWidgetMessageRules, ];
  const obj = {};
  const obj2 = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj2.react = MarkupReactRules.plainMentionRenderer;
  obj[MarkupTypes.AST_KEY.MENTION] = obj2;
  const obj3 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj3.react = MarkupReactRules.plainSpoilerRenderer;
  obj[MarkupTypes.AST_KEY.SPOILER] = obj3;
  items[1] = obj;
  return combineMarkupRulesDefault(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  const obj = MarkupUtilsDefault;
  items = [MarkupUtilsDefault.lockscreenWidgetMessageRules, ];
  const obj2 = {};
  const obj3 = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj3.react = MarkupReactRules.plainMentionRenderer;
  obj2[MarkupTypes.AST_KEY.MENTION] = obj3;
  const obj4 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj4.react = MarkupReactRules.plainSpoilerRenderer;
  obj2[MarkupTypes.AST_KEY.SPOILER] = obj4;
  items[1] = obj2;
  return obj.reactParserFor(combineMarkupRulesDefault(items));
};