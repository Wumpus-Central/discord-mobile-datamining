// discord_app/modules/markup/MarkupUtils.tsx
import MarkupReactRules from "MarkupReactRules.native.tsx";
import combineMarkupRulesDefault from "combineMarkupRules.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import MarkupParserAll from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import apply from "../../../_runtime/metro/00012__.js";

const MarkupReactRulesDefault = MarkupReactRules;

require = fn;
const args = ["url", "autolink", "link", "mailto", "tel"];
let lockscreenWidgetMessageRules = { enableBuildOverrides: false, enableEmojiClick: true };
let closure_6 = apply.once(() => {
  const items = [MarkupReactRulesDefault({ enableBuildOverrides: true })];
  const items1 = [MarkupRulesDefault.RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_7 = apply.once(() => {
  obj = apply;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), "paragraph", "newline");
});
let closure_8 = apply.once(() => {
  let codeBlock = {};
  const merged = Object.assign(codeBlock);
  codeBlock.emojiTooltipPosition = "bottom";
  codeBlock.shouldCloseDefaultModals = true;
  codeBlock.shouldStopPropagation = true;
  const merged1 = Object.assign({});
  const items = [MarkupReactRulesDefault(codeBlock), ,];
  items[1] = MarkupReactRules.createFetchingGameMentionRule();
  codeBlock = { codeBlock: null };
  codeBlock = { react: MarkupRulesDefault.RULES.text.react };
  codeBlock.codeBlock = codeBlock;
  items[2] = codeBlock;
  const items1 = [MarkupRulesDefault.CHANNEL_TOPIC_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_9 = apply.once(() => {
  let codeBlock = {};
  const merged = Object.assign(codeBlock);
  codeBlock.emojiTooltipPosition = "bottom";
  codeBlock.shouldCloseDefaultModals = true;
  codeBlock.shouldStopPropagation = true;
  const merged1 = Object.assign({ emojiFocusable: false });
  const items = [MarkupReactRulesDefault(codeBlock), ,];
  items[1] = MarkupReactRules.createFetchingGameMentionRule();
  codeBlock = { codeBlock: null };
  codeBlock = { react: MarkupRulesDefault.RULES.text.react };
  codeBlock.codeBlock = codeBlock;
  items[2] = codeBlock;
  const items1 = [MarkupRulesDefault.CHANNEL_TOPIC_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_10 = apply.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.enableEmojiClick = false;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.VOICE_CHANNEL_STATUS_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_11 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_12 = apply.once(() => {
  obj = apply;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), closure_4);
});
let closure_13 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.INLINE_REPLY_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_14 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_VERIFICATION_FORM_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_15 = apply.once(() => {
  obj = {};
  const merged = Object.assign(obj);
  obj.shouldStopPropagation = true;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_EVENT_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_16 = apply.once(() => apply.omit(closure_15(), "subtext"));
let closure_17 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.AUTO_MODERATION_SYSTEM_MESSAGE_RULES];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let closure_18 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES];
  const tmp = apply;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  const items2 = [
    combineMarkupRulesDefault(items1),
    "paragraph",
    "newline",
    "strong",
    "codeBlock",
    "inlineCode",
    "u",
    "list",
    "heading",
    "subtext",
    ...closure_4,
  ];
  return tmp.omit.apply(items2);
});
lockscreenWidgetMessageRules = { text: MarkupRulesDefault.RULES.text };
let closure_19 = apply.once(() => MarkupParserAll.reactParserFor(closure_6()));
let closure_20 = apply.once(() => MarkupParserAll.reactParserFor(closure_8()));
let closure_21 = apply.once(() => MarkupParserAll.reactParserFor(closure_9()));
let closure_22 = apply.once(() => MarkupParserAll.reactParserFor(closure_10()));
let closure_23 = apply.once(() => MarkupParserAll.reactParserFor(closure_11()));
let closure_24 = apply.once(() => MarkupParserAll.reactParserFor(closure_12()));
let closure_25 = apply.once(() => MarkupParserAll.reactParserFor(closure_13()));
let closure_26 = apply.once(() => MarkupParserAll.reactParserFor(closure_14()));
let closure_27 = apply.once(() => MarkupParserAll.reactParserFor(closure_15()));
let closure_28 = apply.once(() => MarkupParserAll.reactParserFor(closure_17()));
let closure_29 = apply.once(() => MarkupParserAll.reactParserFor(closure_7()));
let closure_30 = apply.once(() => MarkupParserAll.astParserFor(closure_6()));
let closure_31 = apply.once(() => MarkupParserAll.astParserFor(closure_8()));
let closure_32 = apply.once(() => MarkupParserAll.astParserFor(closure_11()));
let closure_33 = apply.once(() => MarkupParserAll.astParserFor(closure_12()));
let closure_34 = apply.once(() => MarkupParserAll.astParserFor(closure_13()));
let closure_35 = apply.once(() => MarkupParserAll.astParserFor(closure_17()));
lockscreenWidgetMessageRules = {
  combineAndInjectMentionRule(arg0, arg1) {
    const items = [arg0];
    items[HermesBuiltin.arraySpread(arg1, 1)] = {};
    return combineMarkupRulesDefault(items);
  },
  createReactRules: MarkupReactRulesDefault,
  defaultReactRuleOptions: lockscreenWidgetMessageRules,
};
Object.defineProperty(lockscreenWidgetMessageRules, "defaultRules", { get: () => closure_6(), set: undefined });
Object.defineProperty(lockscreenWidgetMessageRules, "guildEventRules", { get: () => closure_15(), set: undefined });
Object.defineProperty(lockscreenWidgetMessageRules, "guildEventLocationRules", {
  get: () => closure_16(),
  set: undefined,
});
Object.defineProperty(lockscreenWidgetMessageRules, "notifCenterV2MessagePreviewRules", {
  get: () => closure_18(),
  set: undefined,
});
lockscreenWidgetMessageRules.lockscreenWidgetMessageRules = lockscreenWidgetMessageRules;
lockscreenWidgetMessageRules.astParserFor = MarkupParserAll.astParserFor;
lockscreenWidgetMessageRules.reactParserFor = MarkupParserAll.reactParserFor;
lockscreenWidgetMessageRules.parse = function parse() {
  const items = [...arguments];
  return closure_19()(...items);
};
lockscreenWidgetMessageRules.parseTopic = function parseTopic(topic, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_20()(topic, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
lockscreenWidgetMessageRules.parseTruncatedTopic = function parseTruncatedTopic(arg0, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_21()(arg0, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
lockscreenWidgetMessageRules.parseVoiceChannelStatus = function parseVoiceChannelStatus() {
  const items = [...arguments];
  return closure_22()(...items);
};
lockscreenWidgetMessageRules.parseEmbedTitle = function parseEmbedTitle() {
  const items = [...arguments];
  return closure_23()(...items);
};
lockscreenWidgetMessageRules.parseEmbedTitleWithoutLinks = function parseEmbedTitleWithoutLinks() {
  const items = [...arguments];
  return closure_24()(...items);
};
lockscreenWidgetMessageRules.parseInlineReply = function parseInlineReply() {
  const items = [...arguments];
  return closure_25()(...items);
};
lockscreenWidgetMessageRules.parseGuildVerificationFormRule = function parseGuildVerificationFormRule() {
  const items = [...arguments];
  return closure_26()(...items);
};
lockscreenWidgetMessageRules.parseGuildEventDescription = function parseGuildEventDescription() {
  const items = [...arguments];
  return closure_27()(...items);
};
lockscreenWidgetMessageRules.parseAutoModerationSystemMessage = function parseAutoModerationSystemMessage() {
  const items = [...arguments];
  return closure_28()(...items);
};
lockscreenWidgetMessageRules.parseForumPostGuidelines = function parseForumPostGuidelines() {
  const items = [...arguments];
  return closure_29()(...items);
};
lockscreenWidgetMessageRules.parseToAST = function parseToAST() {
  const items = [...arguments];
  return closure_30()(...items);
};
lockscreenWidgetMessageRules.parseTopicToAST = function parseTopicToAST() {
  const items = [...arguments];
  return closure_31()(...items);
};
lockscreenWidgetMessageRules.parseEmbedTitleToAST = function parseEmbedTitleToAST() {
  const items = [...arguments];
  return closure_32()(...items);
};
lockscreenWidgetMessageRules.parseEmbedTitleWithoutLinksToAST = function parseEmbedTitleWithoutLinksToAST() {
  const items = [...arguments];
  return closure_33()(...items);
};
lockscreenWidgetMessageRules.parseInlineReplyToAST = function parseInlineReplyToAST() {
  const items = [...arguments];
  return closure_34()(...items);
};
lockscreenWidgetMessageRules.parseAutoModerationSystemMessageToAST = function parseAutoModerationSystemMessageToAST() {
  const items = [...arguments];
  return closure_35()(...items);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default lockscreenWidgetMessageRules;
