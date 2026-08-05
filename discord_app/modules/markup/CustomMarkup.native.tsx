// discord_app/modules/markup/CustomMarkup.native.tsx
function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = require("MarkupReactRules.native.tsx")(arg0, obj);
  const items = [require("MarkupUtils.tsx").defaultRules, tmp, ];
  obj = {};
  obj = {};
  const merged = Object.assign(require("../../../_runtime/03984_t.js").defaultRules.link);
  obj.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.LINK].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.LINK] = obj;
  const obj1 = {};
  const merged1 = Object.assign(require("../../../_runtime/03984_t.js").defaultRules.url);
  obj1.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.URL].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(require("../../../_runtime/03984_t.js").defaultRules.autolink);
  obj2.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.AUTOLINK].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(require("../../../_runtime/03984_t.js").defaultRules.blockQuote);
  obj3.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.BLOCK_QUOTE].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.BLOCK_QUOTE] = obj3;
  items[2] = obj;
  return require("combineMarkupRules.tsx")(items);
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
  const tmp = require("MarkupReactRules.native.tsx")(closure_28, closure_28, roleStyle);
  const items = [require("MarkupUtils.tsx").notifCenterV2MessagePreviewRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(require("MarkupRules.tsx").RULES[require(undefined, 4715) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.MENTION].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(require("MarkupRules.tsx").RULES[require(undefined, 4715) /* AST_KEY */.AST_KEY.CHANNEL_MENTION]);
  obj.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.CHANNEL_MENTION].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.CHANNEL_MENTION] = obj;
  const obj1 = {};
  const merged2 = Object.assign(require("MarkupRules.tsx").RULES[require(undefined, 4715) /* AST_KEY */.AST_KEY.ITALICS]);
  obj1.react = tmp[require(undefined, 4715) /* AST_KEY */.AST_KEY.ITALICS].react;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.ITALICS] = obj1;
  items[1] = obj;
  return require("combineMarkupRules.tsx")(items);
}
let items = [require("AST_KEY").AST_KEY.URL, require("AST_KEY").AST_KEY.AUTOLINK, require("AST_KEY").AST_KEY.LINK, "mailto", "tel"];
const result = require("combineMarkupRules").fileFinishedImporting("modules/markup/CustomMarkup.native.tsx");

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
  return require("MarkupUtils.tsx").reactParserFor(createRules(obj, obj));
};
export { createRulesWithoutLinks };
export const getParserWithoutLinks = function getParserWithoutLinks(cacheKey) {
  let obj = cacheKey;
  if (cacheKey === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return require("MarkupUtils.tsx").reactParserFor(createRulesWithoutLinks(obj, obj));
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
  return require("MarkupUtils.tsx").reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  const items = [require("MarkupUtils.tsx").lockscreenWidgetMessageRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(require("MarkupRules.tsx").RULES[require(undefined, 4715) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = require("MarkupReactRules.native.tsx") /* MarkupText */.plainMentionRenderer;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(require("MarkupRules.tsx").RULES.spoiler);
  obj.react = require("MarkupReactRules.native.tsx") /* MarkupText */.plainSpoilerRenderer;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return require("combineMarkupRules.tsx")(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  let obj = require("MarkupUtils.tsx");
  const items = [require("MarkupUtils.tsx").lockscreenWidgetMessageRules, ];
  obj = {};
  obj = {};
  const merged = Object.assign(require("MarkupRules.tsx").RULES[require(undefined, 4715) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = require("MarkupReactRules.native.tsx") /* MarkupText */.plainMentionRenderer;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.MENTION] = obj;
  const obj1 = {};
  const merged1 = Object.assign(require("MarkupRules.tsx").RULES.spoiler);
  obj1.react = require("MarkupReactRules.native.tsx") /* MarkupText */.plainSpoilerRenderer;
  obj[require("MarkupTypes.tsx") /* AST_KEY */.AST_KEY.SPOILER] = obj1;
  items[1] = obj;
  return obj.reactParserFor(require("combineMarkupRules.tsx")(items));
};