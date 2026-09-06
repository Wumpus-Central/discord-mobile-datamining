// discord_app/modules/markup/CustomMarkup.native.tsx
import _modDef4257 from "../../../_runtime/metro/04257__.js";
import MarkupUtilsDefault from "MarkupUtils.tsx";
import MarkupReactRules from "MarkupReactRules.native.tsx";
import MarkupTypes from "MarkupTypes.tsx";
import combineMarkupRulesDefault from "combineMarkupRules.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MarkupReactRulesDefault = MarkupReactRules;

function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = MarkupReactRulesDefault(arg0, obj);
  items = [MarkupUtilsDefault.defaultRules, tmp];
  obj = {};
  obj = {};
  const merged = Object.assign(_modDef4257.defaultRules.link);
  obj.react = tmp[MarkupTypes.AST_KEY.LINK].react;
  obj[MarkupTypes.AST_KEY.LINK] = obj;
  const obj1 = {};
  const merged1 = Object.assign(_modDef4257.defaultRules.url);
  obj1.react = tmp[MarkupTypes.AST_KEY.URL].react;
  obj[MarkupTypes.AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(_modDef4257.defaultRules.autolink);
  obj2.react = tmp[MarkupTypes.AST_KEY.AUTOLINK].react;
  obj[MarkupTypes.AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(_modDef4257.defaultRules.blockQuote);
  obj3.react = tmp[MarkupTypes.AST_KEY.BLOCK_QUOTE].react;
  obj[MarkupTypes.AST_KEY.BLOCK_QUOTE] = obj3;
  items[2] = obj;
  return combineMarkupRulesDefault(items);
}
function createRulesWithoutLinks(arg0, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(createRules(arg0, obj));
  for (const item10012 of items) {
    delete tmp[tmp2];
    continue;
  }
  return obj;
}
function createNotifCenterV2MessagePreviewRules(arg0, arg1, roleStyle) {
  const tmp = MarkupReactRulesDefault(arg0, arg1, roleStyle);
  items = [MarkupUtilsDefault.notifCenterV2MessagePreviewRules];
  let obj = {};
  obj = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj.react = tmp[MarkupTypes.AST_KEY.MENTION].react;
  obj[MarkupTypes.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.CHANNEL_MENTION]);
  obj.react = tmp[MarkupTypes.AST_KEY.CHANNEL_MENTION].react;
  obj[MarkupTypes.AST_KEY.CHANNEL_MENTION] = obj;
  const obj1 = {};
  const merged2 = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.ITALICS]);
  obj1.react = tmp[MarkupTypes.AST_KEY.ITALICS].react;
  obj[MarkupTypes.AST_KEY.ITALICS] = obj1;
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
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return MarkupUtilsDefault.reactParserFor(createRules(obj, obj));
};
export { createRulesWithoutLinks };
export const getParserWithoutLinks = function getParserWithoutLinks(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return MarkupUtilsDefault.reactParserFor(createRulesWithoutLinks(obj, obj));
};
export { createNotifCenterV2MessagePreviewRules };
export const getNotifCenterV2MessagePreviewParser = function getNotifCenterV2MessagePreviewParser(arg0, arg1) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return MarkupUtilsDefault.reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  items = [MarkupUtilsDefault.lockscreenWidgetMessageRules];
  let obj = {};
  obj = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj.react = MarkupReactRules.plainMentionRenderer;
  obj[MarkupTypes.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj.react = MarkupReactRules.plainSpoilerRenderer;
  obj[MarkupTypes.AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return combineMarkupRulesDefault(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  items = [MarkupUtilsDefault.lockscreenWidgetMessageRules];
  let obj = {};
  obj = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[MarkupTypes.AST_KEY.MENTION]);
  obj.react = MarkupReactRules.plainMentionRenderer;
  obj[MarkupTypes.AST_KEY.MENTION] = obj;
  const obj1 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES.spoiler);
  obj1.react = MarkupReactRules.plainSpoilerRenderer;
  obj[MarkupTypes.AST_KEY.SPOILER] = obj1;
  items[1] = obj;
  return obj.reactParserFor(combineMarkupRulesDefault(items));
};
