// === Module 4438: get defaultRules ===

// Module 4438 (get defaultRules)
import MarkupText from "MarkupText" /* 4439 */;
import MarkupTextDefault from "MarkupText" /* 4439 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 4918 */;
import parseLinkDefault from "parseLink" /* 4919 */;
import reactParserForAll from "reactParserFor" /* 7864 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
let closure_4 = ["url", "autolink", "link", "mailto", "tel"];
let obj = { enableBuildOverrides: false, enableEmojiClick: true };
let closure_6 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault({ enableBuildOverrides: true })];
  const items1 = [parseLinkDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_7 = importDefaultResult.once(() => {
  obj = importDefaultResult;
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), "paragraph", "newline");
});
const importDefaultResult1 = importDefaultResult;
let closure_8 = importDefaultResult.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({});
  const items = [MarkupTextDefault(obj), , ];
  const tmp = MarkupTextDefault;
  items[1] = MarkupText.createFetchingGameMentionRule();
  obj = { codeBlock: null };
  obj = { react: parseLinkDefault.RULES.text.react };
  obj[0] = obj;
  items[2] = obj;
  const items1 = [parseLinkDefault.CHANNEL_TOPIC_RULES, ];
  const obj2 = MarkupText;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult2 = importDefaultResult;
let closure_9 = importDefaultResult.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({ emojiFocusable: false });
  const items = [MarkupTextDefault(obj), , ];
  const tmp = MarkupTextDefault;
  items[1] = MarkupText.createFetchingGameMentionRule();
  obj = { codeBlock: null };
  obj = { react: parseLinkDefault.RULES.text.react };
  obj[0] = obj;
  items[2] = obj;
  const items1 = [parseLinkDefault.CHANNEL_TOPIC_RULES, ];
  const obj2 = MarkupText;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult3 = importDefaultResult;
let closure_10 = importDefaultResult.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.enableEmojiClick = false;
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.VOICE_CHANNEL_STATUS_RULES, ];
  const tmp = MarkupTextDefault;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult4 = importDefaultResult;
let closure_11 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult5 = importDefaultResult;
let closure_12 = importDefaultResult.once(() => {
  obj = importDefaultResult;
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), closure_4);
});
const importDefaultResult6 = importDefaultResult;
let closure_13 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.INLINE_REPLY_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult7 = importDefaultResult;
let closure_14 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.GUILD_VERIFICATION_FORM_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult8 = importDefaultResult;
let closure_15 = importDefaultResult.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.shouldStopPropagation = true;
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.GUILD_EVENT_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult9 = importDefaultResult;
let closure_16 = importDefaultResult.once(() => importDefaultResult.omit(callback10(), "subtext"));
const importDefaultResult10 = importDefaultResult;
let closure_17 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
const importDefaultResult11 = importDefaultResult;
let closure_18 = importDefaultResult.once(() => {
  const items = [MarkupTextDefault(obj)];
  const items1 = [parseLinkDefault.RULES, ];
  const tmp = importDefaultResult;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  const items2 = [combineMarkupRulesDefault(items1), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ...closure_4];
  return tmp.omit.apply(items2);
});
obj = { text: parseLinkDefault.RULES.text };
const importDefaultResult12 = importDefaultResult;
let closure_19 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback()));
const importDefaultResult13 = importDefaultResult;
let closure_20 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback3()));
const importDefaultResult14 = importDefaultResult;
let closure_21 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback4()));
const importDefaultResult15 = importDefaultResult;
let closure_22 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback5()));
const importDefaultResult16 = importDefaultResult;
let closure_23 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback6()));
const importDefaultResult17 = importDefaultResult;
let closure_24 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback7()));
const importDefaultResult18 = importDefaultResult;
let closure_25 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback8()));
const importDefaultResult19 = importDefaultResult;
let closure_26 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback9()));
const importDefaultResult20 = importDefaultResult;
let closure_27 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback10()));
const importDefaultResult21 = importDefaultResult;
let closure_28 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback12()));
const importDefaultResult22 = importDefaultResult;
let closure_29 = importDefaultResult.once(() => reactParserForAll.reactParserFor(callback2()));
const importDefaultResult23 = importDefaultResult;
let closure_30 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback()));
const importDefaultResult24 = importDefaultResult;
let closure_31 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback3()));
const importDefaultResult25 = importDefaultResult;
let closure_32 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback6()));
const importDefaultResult26 = importDefaultResult;
let closure_33 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback7()));
const importDefaultResult27 = importDefaultResult;
let closure_34 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback8()));
const importDefaultResult28 = importDefaultResult;
let closure_35 = importDefaultResult.once(() => reactParserForAll.astParserFor(callback12()));
obj = {
  combineAndInjectMentionRule(arg0, arg1) {
    const items = [arg0, ];
    items[HermesBuiltin.arraySpread(arg1, 1)] = {};
    return combineMarkupRulesDefault(items);
  },
  createReactRules: MarkupTextDefault,
  defaultReactRuleOptions: obj
};
Object.defineProperty(obj, "defaultRules", { get: () => callback(), set: undefined });
Object.defineProperty(obj, "guildEventRules", { get: () => callback10(), set: undefined });
Object.defineProperty(obj, "guildEventLocationRules", { get: () => callback11(), set: undefined });
Object.defineProperty(obj, "notifCenterV2MessagePreviewRules", { get: () => callback13(), set: undefined });
obj.lockscreenWidgetMessageRules = obj;
obj.astParserFor = reactParserForAll.astParserFor;
obj.reactParserFor = reactParserForAll.reactParserFor;
obj.parse = function parse() {
  const items = [...arguments];
  return callback14()(...items);
};
obj.parseTopic = function parseTopic(topic, arg1, arg2) {
  const merged = Object.assign(arg2);
  return callback15()(topic, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj.parseTruncatedTopic = function parseTruncatedTopic(arg0, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return callback16()(arg0, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj.parseVoiceChannelStatus = function parseVoiceChannelStatus(gameMentionsAsPlainText, arg1, arg2) {
  const items = [...arguments];
  return callback17()(...items);
};
obj.parseEmbedTitle = function parseEmbedTitle() {
  const items = [...arguments];
  return callback18()(...items);
};
obj.parseEmbedTitleWithoutLinks = function parseEmbedTitleWithoutLinks() {
  const items = [...arguments];
  return callback19()(...items);
};
obj.parseInlineReply = function parseInlineReply(content, arg1) {
  const items = [...arguments];
  return callback20()(...items);
};
obj.parseGuildVerificationFormRule = function parseGuildVerificationFormRule(rule, arg1, arg2) {
  const items = [...arguments];
  return callback21()(...items);
};
obj.parseGuildEventDescription = function parseGuildEventDescription() {
  const items = [...arguments];
  return callback22()(...items);
};
obj.parseAutoModerationSystemMessage = function parseAutoModerationSystemMessage(arg0, arg1, arg2, arg3) {
  const items = [...arguments];
  return callback23()(...items);
};
obj.parseForumPostGuidelines = function parseForumPostGuidelines(topic, arg1, arg2) {
  const items = [...arguments];
  return callback24()(...items);
};
obj.parseToAST = function parseToAST(content, arg1, initialParserState) {
  const items = [...arguments];
  return callback25()(...items);
};
obj.parseTopicToAST = function parseTopicToAST() {
  const items = [...arguments];
  return callback26()(...items);
};
obj.parseEmbedTitleToAST = function parseEmbedTitleToAST(rawName, arg1, arg2) {
  const items = [...arguments];
  return callback27()(...items);
};
obj.parseEmbedTitleWithoutLinksToAST = function parseEmbedTitleWithoutLinksToAST(arg0, arg1, arg2) {
  const items = [...arguments];
  return callback28()(...items);
};
obj.parseInlineReplyToAST = function parseInlineReplyToAST() {
  const items = [...arguments];
  return callback29()(...items);
};
obj.parseAutoModerationSystemMessageToAST = function parseAutoModerationSystemMessageToAST(arg0, arg1, arg2, arg3) {
  const items = [...arguments];
  return callback30()(...items);
};
const importDefaultResult29 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default obj;