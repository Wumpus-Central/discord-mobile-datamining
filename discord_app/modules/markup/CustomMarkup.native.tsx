// discord_app/modules/markup/CustomMarkup.native.tsx
import set from "../../../_runtime/00002_set.js";
import tDefault from "../../../_runtime/04192_t.js";
import get_defaultRulesDefault from "MarkupUtils.tsx";
import MarkupText from "MarkupReactRules.native.tsx";
import MarkupTextDefault from "MarkupReactRules.native.tsx";
import AST_KEY from "MarkupTypes.tsx";
import combineMarkupRulesDefault from "combineMarkupRules.tsx";
import parseLinkDefault from "MarkupRules.tsx";

function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = MarkupTextDefault(arg0, obj);
  items = [get_defaultRulesDefault.defaultRules, tmp, ];
  obj = {};
  obj = {};
  const merged = Object.assign(tDefault.defaultRules.link);
  obj.react = tmp[AST_KEY.AST_KEY.LINK].react;
  obj[AST_KEY.AST_KEY.LINK] = obj;
  obj1 = {};
  const merged1 = Object.assign(tDefault.defaultRules.url);
  obj1.react = tmp[AST_KEY.AST_KEY.URL].react;
  obj[AST_KEY.AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(tDefault.defaultRules.autolink);
  obj2.react = tmp[AST_KEY.AST_KEY.AUTOLINK].react;
  obj[AST_KEY.AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(tDefault.defaultRules.blockQuote);
  obj3.react = tmp[AST_KEY.AST_KEY.BLOCK_QUOTE].react;
  obj[AST_KEY.AST_KEY.BLOCK_QUOTE] = obj3;
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
function createNotifCenterV2MessagePreviewRules(closure_28, closure_28, roleStyle) {
  const tmp = MarkupTextDefault(closure_28, closure_28, roleStyle);
  items = [get_defaultRulesDefault.notifCenterV2MessagePreviewRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(parseLinkDefault.RULES[AST_KEY.AST_KEY.MENTION]);
  obj.react = tmp[AST_KEY.AST_KEY.MENTION].react;
  obj[AST_KEY.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(parseLinkDefault.RULES[AST_KEY.AST_KEY.CHANNEL_MENTION]);
  obj.react = tmp[AST_KEY.AST_KEY.CHANNEL_MENTION].react;
  obj[AST_KEY.AST_KEY.CHANNEL_MENTION] = obj;
  obj1 = {};
  const merged2 = Object.assign(parseLinkDefault.RULES[AST_KEY.AST_KEY.ITALICS]);
  obj1.react = tmp[AST_KEY.AST_KEY.ITALICS].react;
  obj[AST_KEY.AST_KEY.ITALICS] = obj1;
  items[1] = obj;
  return combineMarkupRulesDefault(items);
}
let items = [AST_KEY.AST_KEY.URL, AST_KEY.AST_KEY.AUTOLINK, AST_KEY.AST_KEY.LINK, "mailto", "tel"];
const result = set.fileFinishedImporting("modules/markup/CustomMarkup.native.tsx");

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
  return get_defaultRulesDefault.reactParserFor(createRules(obj, obj));
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
  return get_defaultRulesDefault.reactParserFor(createRulesWithoutLinks(obj, obj));
};
export { createNotifCenterV2MessagePreviewRules };
export const getNotifCenterV2MessagePreviewParser = function getNotifCenterV2MessagePreviewParser(arg0, closure_28, roleStyle) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = closure_28;
  if (closure_28 === undefined) {
    obj = {};
  }
  return get_defaultRulesDefault.reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  items = [get_defaultRulesDefault.lockscreenWidgetMessageRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(parseLinkDefault.RULES[AST_KEY.AST_KEY.MENTION]);
  obj.react = MarkupText.plainMentionRenderer;
  obj[AST_KEY.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(parseLinkDefault.RULES.spoiler);
  obj.react = MarkupText.plainSpoilerRenderer;
  obj[AST_KEY.AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return combineMarkupRulesDefault(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  let obj = get_defaultRulesDefault;
  items = [get_defaultRulesDefault.lockscreenWidgetMessageRules, ];
  obj = {};
  obj = {};
  const merged = Object.assign(parseLinkDefault.RULES[AST_KEY.AST_KEY.MENTION]);
  obj.react = MarkupText.plainMentionRenderer;
  obj[AST_KEY.AST_KEY.MENTION] = obj;
  obj1 = {};
  const merged1 = Object.assign(parseLinkDefault.RULES.spoiler);
  obj1.react = MarkupText.plainSpoilerRenderer;
  obj[AST_KEY.AST_KEY.SPOILER] = obj1;
  items[1] = obj;
  return obj.reactParserFor(combineMarkupRulesDefault(items));
};