// === Module 4819: MarkupUtils ===

// Module 4819 (MarkupUtils)
import MarkupReactRules from "MarkupReactRules" /* 4820 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 5296 */;
import MarkupRulesDefault from "MarkupRules" /* 5297 */;
import MarkupParserAll from "MarkupParser" /* 7424 */;
import apply_mod from "module_12" /* 12 */;

const MarkupReactRulesDefault = MarkupReactRules;

require = fn;
const args = ["url", "autolink", "link", "mailto", "tel"];
const defaultReactRuleOptions = { enableBuildOverrides: false, enableEmojiClick: true };
let apply = apply_mod;
let closure_6 = apply.once(() => {
  const items = [MarkupReactRulesDefault({ enableBuildOverrides: true })];
  const items1 = [MarkupRulesDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_7 = apply.once(() => {
  const obj = apply;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), "paragraph", "newline");
});
let apply = apply_mod;
let closure_8 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({});
  const items = [MarkupReactRulesDefault(obj), , ];
  items[1] = MarkupReactRules.createFetchingGameMentionRule();
  const obj3 = { codeBlock: null };
  obj3.codeBlock = { react: MarkupRulesDefault.RULES.text.react };
  items[2] = obj3;
  const items1 = [MarkupRulesDefault.CHANNEL_TOPIC_RULES, ];
  const obj4 = { react: MarkupRulesDefault.RULES.text.react };
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_9 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({ emojiFocusable: false });
  const items = [MarkupReactRulesDefault(obj), , ];
  items[1] = MarkupReactRules.createFetchingGameMentionRule();
  const obj3 = { codeBlock: null };
  obj3.codeBlock = { react: MarkupRulesDefault.RULES.text.react };
  items[2] = obj3;
  const items1 = [MarkupRulesDefault.CHANNEL_TOPIC_RULES, ];
  const obj4 = { react: MarkupRulesDefault.RULES.text.react };
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_10 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.enableEmojiClick = false;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.VOICE_CHANNEL_STATUS_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_11 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_12 = apply.once(() => {
  const obj = apply;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), closure_4);
});
let apply = apply_mod;
let closure_13 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.INLINE_REPLY_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_14 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_VERIFICATION_FORM_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_15 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.shouldStopPropagation = true;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_EVENT_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_16 = apply.once(() => apply.omit(closure_15(), "subtext"));
let apply = apply_mod;
let closure_17 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_18 = apply.once(() => {
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES, ];
  const tmp = apply;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  const items2 = [combineMarkupRulesDefault(items1), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ...closure_4];
  return tmp.omit.apply(items2);
});
let apply = apply_mod;
let closure_19 = apply.once(() => MarkupParserAll.reactParserFor(closure_6()));
let apply = apply_mod;
let closure_20 = apply.once(() => MarkupParserAll.reactParserFor(closure_8()));
let apply = apply_mod;
let closure_21 = apply.once(() => MarkupParserAll.reactParserFor(closure_9()));
let apply = apply_mod;
let closure_22 = apply.once(() => MarkupParserAll.reactParserFor(closure_10()));
let apply = apply_mod;
let closure_23 = apply.once(() => MarkupParserAll.reactParserFor(closure_11()));
let apply = apply_mod;
let closure_24 = apply.once(() => MarkupParserAll.reactParserFor(closure_12()));
let apply = apply_mod;
let closure_25 = apply.once(() => MarkupParserAll.reactParserFor(closure_13()));
let apply = apply_mod;
let closure_26 = apply.once(() => MarkupParserAll.reactParserFor(closure_14()));
let apply = apply_mod;
let closure_27 = apply.once(() => MarkupParserAll.reactParserFor(closure_15()));
let apply = apply_mod;
let closure_28 = apply.once(() => MarkupParserAll.reactParserFor(closure_17()));
let apply = apply_mod;
let closure_29 = apply.once(() => MarkupParserAll.reactParserFor(closure_7()));
let apply = apply_mod;
let closure_30 = apply.once(() => MarkupParserAll.astParserFor(closure_6()));
let apply = apply_mod;
let closure_31 = apply.once(() => MarkupParserAll.astParserFor(closure_8()));
let apply = apply_mod;
let closure_32 = apply.once(() => MarkupParserAll.astParserFor(closure_11()));
let apply = apply_mod;
let closure_33 = apply.once(() => MarkupParserAll.astParserFor(closure_12()));
let apply = apply_mod;
let closure_34 = apply.once(() => MarkupParserAll.astParserFor(closure_13()));
let apply = apply_mod;
let closure_35 = apply.once(() => MarkupParserAll.astParserFor(closure_17()));
let obj3 = {
  combineAndInjectMentionRule(arg0, arg1) {
    const items = [arg0, ];
    items[HermesBuiltin.arraySpread(arg1, 1)] = {};
    return combineMarkupRulesDefault(items);
  },
  createReactRules: MarkupReactRulesDefault,
  defaultReactRuleOptions
};
Object.defineProperty(obj3, "defaultRules", { get: () => closure_6(), set: undefined });
Object.defineProperty(obj3, "guildEventRules", { get: () => closure_15(), set: undefined });
Object.defineProperty(obj3, "guildEventLocationRules", { get: () => closure_16(), set: undefined });
Object.defineProperty(obj3, "notifCenterV2MessagePreviewRules", { get: () => closure_18(), set: undefined });
obj3.lockscreenWidgetMessageRules = { text: MarkupRulesDefault.RULES.text };
obj3.astParserFor = MarkupParserAll.astParserFor;
obj3.reactParserFor = MarkupParserAll.reactParserFor;
obj3.parse = function parse() {
  const items = [...arguments];
  return closure_19()(...items);
};
obj3.parseTopic = function parseTopic(topic, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_20()(topic, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj3.parseTruncatedTopic = function parseTruncatedTopic(arg0, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_21()(arg0, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj3.parseVoiceChannelStatus = function parseVoiceChannelStatus() {
  const items = [...arguments];
  return closure_22()(...items);
};
obj3.parseEmbedTitle = function parseEmbedTitle() {
  const items = [...arguments];
  return closure_23()(...items);
};
obj3.parseEmbedTitleWithoutLinks = function parseEmbedTitleWithoutLinks() {
  const items = [...arguments];
  return closure_24()(...items);
};
obj3.parseInlineReply = function parseInlineReply() {
  const items = [...arguments];
  return closure_25()(...items);
};
obj3.parseGuildVerificationFormRule = function parseGuildVerificationFormRule() {
  const items = [...arguments];
  return closure_26()(...items);
};
obj3.parseGuildEventDescription = function parseGuildEventDescription() {
  const items = [...arguments];
  return closure_27()(...items);
};
obj3.parseAutoModerationSystemMessage = function parseAutoModerationSystemMessage() {
  const items = [...arguments];
  return closure_28()(...items);
};
obj3.parseForumPostGuidelines = function parseForumPostGuidelines() {
  const items = [...arguments];
  return closure_29()(...items);
};
obj3.parseToAST = function parseToAST() {
  const items = [...arguments];
  return closure_30()(...items);
};
obj3.parseTopicToAST = function parseTopicToAST() {
  const items = [...arguments];
  return closure_31()(...items);
};
obj3.parseEmbedTitleToAST = function parseEmbedTitleToAST() {
  const items = [...arguments];
  return closure_32()(...items);
};
obj3.parseEmbedTitleWithoutLinksToAST = function parseEmbedTitleWithoutLinksToAST() {
  const items = [...arguments];
  return closure_33()(...items);
};
obj3.parseInlineReplyToAST = function parseInlineReplyToAST() {
  const items = [...arguments];
  return closure_34()(...items);
};
obj3.parseAutoModerationSystemMessageToAST = function parseAutoModerationSystemMessageToAST() {
  const items = [...arguments];
  return closure_35()(...items);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default obj3;