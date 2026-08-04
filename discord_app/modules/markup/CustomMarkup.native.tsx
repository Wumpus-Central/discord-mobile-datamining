// discord_app/modules/markup/CustomMarkup.native.tsx
function createRules(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const tmp = importDefault(4184)(arg0, obj);
  const items = [importDefault(4183).defaultRules, tmp, ];
  obj = {};
  obj = {};
  const merged = Object.assign(importDefault(3892).defaultRules.link);
  obj.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.LINK].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.LINK] = obj;
  const obj1 = {};
  const merged1 = Object.assign(importDefault(3892).defaultRules.url);
  obj1.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.URL].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.URL] = obj1;
  const obj2 = {};
  const merged2 = Object.assign(importDefault(3892).defaultRules.autolink);
  obj2.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.AUTOLINK].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.AUTOLINK] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(importDefault(3892).defaultRules.blockQuote);
  obj3.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.BLOCK_QUOTE].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.BLOCK_QUOTE] = obj3;
  items[2] = obj;
  return importDefault(4625)(items);
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
  const tmp = importDefault(4184)(closure_28, closure_28, roleStyle);
  const items = [importDefault(4183).notifCenterV2MessagePreviewRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(4626).RULES[require(undefined, 4624) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.MENTION].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(importDefault(4626).RULES[require(undefined, 4624) /* AST_KEY */.AST_KEY.CHANNEL_MENTION]);
  obj.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.CHANNEL_MENTION].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.CHANNEL_MENTION] = obj;
  const obj1 = {};
  const merged2 = Object.assign(importDefault(4626).RULES[require(undefined, 4624) /* AST_KEY */.AST_KEY.ITALICS]);
  obj1.react = tmp[require(undefined, 4624) /* AST_KEY */.AST_KEY.ITALICS].react;
  obj[require(4624) /* AST_KEY */.AST_KEY.ITALICS] = obj1;
  items[1] = obj;
  return importDefault(4625)(items);
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
  return importDefault(4183).reactParserFor(createRules(obj, obj));
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
  return importDefault(4183).reactParserFor(createRulesWithoutLinks(obj, obj));
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
  return importDefault(4183).reactParserFor(createNotifCenterV2MessagePreviewRules(obj, obj, roleStyle));
};
export const createWidgetMessageRules = function createWidgetMessageRules() {
  const items = [importDefault(4183).lockscreenWidgetMessageRules, ];
  let obj = {};
  obj = {};
  const merged = Object.assign(importDefault(4626).RULES[require(undefined, 4624) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = require(4184) /* MarkupText */.plainMentionRenderer;
  obj[require(4624) /* AST_KEY */.AST_KEY.MENTION] = obj;
  obj = {};
  const merged1 = Object.assign(importDefault(4626).RULES.spoiler);
  obj.react = require(4184) /* MarkupText */.plainSpoilerRenderer;
  obj[require(4624) /* AST_KEY */.AST_KEY.SPOILER] = obj;
  items[1] = obj;
  return importDefault(4625)(items);
};
export const getWidgetMessageRules = function getWidgetMessageRules() {
  let obj = importDefault(4183);
  const items = [importDefault(4183).lockscreenWidgetMessageRules, ];
  obj = {};
  obj = {};
  const merged = Object.assign(importDefault(4626).RULES[require(undefined, 4624) /* AST_KEY */.AST_KEY.MENTION]);
  obj.react = require(4184) /* MarkupText */.plainMentionRenderer;
  obj[require(4624) /* AST_KEY */.AST_KEY.MENTION] = obj;
  const obj1 = {};
  const merged1 = Object.assign(importDefault(4626).RULES.spoiler);
  obj1.react = require(4184) /* MarkupText */.plainSpoilerRenderer;
  obj[require(4624) /* AST_KEY */.AST_KEY.SPOILER] = obj1;
  items[1] = obj;
  return obj.reactParserFor(importDefault(4625)(items));
};