// discord_app/modules/markup/MarkupUtils.tsx
import MarkupReactRules from "MarkupReactRules.native.tsx";
import combineMarkupRulesDefault from "combineMarkupRules.tsx";
import MarkupRulesDefault from "MarkupRules.tsx";
import MarkupParserAll from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import module_12_mod from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const MarkupReactRulesDefault = MarkupReactRules;

const args = ["url", "autolink", "link", "mailto", "tel"];
const defaultReactRuleOptions = { enableBuildOverrides: false, enableEmojiClick: true };
let module_12 = module_12_mod;
let closure_6 = module_12.once(() => {
  const RULES = MarkupRulesDefault.RULES;
  const items = [MarkupReactRulesDefault({ enableBuildOverrides: true })];
  const items1 = [RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp2 = combineMarkupRulesDefault;
  return tmp2(items1);
});
module_12 = module_12_mod;
let closure_7 = module_12.once(() => {
  const omit = module_12.omit;
  module_12;
  const RULES = MarkupRulesDefault.RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp3 = combineMarkupRulesDefault;
  return omit(tmp3(items1), "paragraph", "newline");
});
module_12 = module_12_mod;
let closure_8 = module_12.once(() => {
  const CHANNEL_TOPIC_RULES = MarkupRulesDefault.CHANNEL_TOPIC_RULES;
  const obj = { emojiTooltipPosition: "bottom", shouldCloseDefaultModals: true, shouldStopPropagation: true };
  const tmp2 = MarkupReactRulesDefault;
  const merged = Object.assign(obj);
  const merged1 = Object.assign({});
  const items = [tmp2(obj), ,];
  const obj2 = MarkupReactRules;
  items[1] = obj2.createFetchingGameMentionRule();
  items[2] = { codeBlock: { react: MarkupRulesDefault.RULES.text.react } };
  const items1 = [CHANNEL_TOPIC_RULES];
  const obj3 = { codeBlock: { react: MarkupRulesDefault.RULES.text.react } };
  ({ react: MarkupRulesDefault.RULES.text.react });
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp5 = combineMarkupRulesDefault;
  return tmp5(items1);
});
module_12 = module_12_mod;
let closure_9 = module_12.once(() => {
  const CHANNEL_TOPIC_RULES = MarkupRulesDefault.CHANNEL_TOPIC_RULES;
  const obj = { emojiTooltipPosition: "bottom", shouldCloseDefaultModals: true, shouldStopPropagation: true };
  const tmp2 = MarkupReactRulesDefault;
  const merged = Object.assign(obj);
  const merged1 = Object.assign({ emojiFocusable: false });
  const items = [tmp2(obj), ,];
  const obj2 = MarkupReactRules;
  items[1] = obj2.createFetchingGameMentionRule();
  items[2] = { codeBlock: { react: MarkupRulesDefault.RULES.text.react } };
  const items1 = [CHANNEL_TOPIC_RULES];
  const obj3 = { codeBlock: { react: MarkupRulesDefault.RULES.text.react } };
  ({ react: MarkupRulesDefault.RULES.text.react });
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp5 = combineMarkupRulesDefault;
  return tmp5(items1);
});
module_12 = module_12_mod;
let closure_10 = module_12.once(() => {
  const VOICE_CHANNEL_STATUS_RULES = MarkupRulesDefault.VOICE_CHANNEL_STATUS_RULES;
  const obj = { enableEmojiClick: false };
  const tmp2 = MarkupReactRulesDefault;
  const merged = Object.assign(obj);
  const items = [tmp2(obj)];
  const items1 = [VOICE_CHANNEL_STATUS_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp4 = combineMarkupRulesDefault;
  return tmp4(items1);
});
module_12 = module_12_mod;
let closure_11 = module_12.once(() => {
  const EMBED_TITLE_RULES = MarkupRulesDefault.EMBED_TITLE_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [EMBED_TITLE_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp2 = combineMarkupRulesDefault;
  return tmp2(items1);
});
module_12 = module_12_mod;
let closure_12 = module_12.once(() => {
  const omit = module_12.omit;
  module_12;
  const EMBED_TITLE_RULES = MarkupRulesDefault.EMBED_TITLE_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [EMBED_TITLE_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp3 = combineMarkupRulesDefault;
  return omit(tmp3(items1), args);
});
module_12 = module_12_mod;
let closure_13 = module_12.once(() => {
  const INLINE_REPLY_RULES = MarkupRulesDefault.INLINE_REPLY_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [INLINE_REPLY_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp2 = combineMarkupRulesDefault;
  return tmp2(items1);
});
module_12 = module_12_mod;
let closure_14 = module_12.once(() => {
  const GUILD_VERIFICATION_FORM_RULES = MarkupRulesDefault.GUILD_VERIFICATION_FORM_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [GUILD_VERIFICATION_FORM_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp2 = combineMarkupRulesDefault;
  return tmp2(items1);
});
module_12 = module_12_mod;
let closure_15 = module_12.once(() => {
  const obj = { shouldStopPropagation: true };
  const merged = Object.assign(obj);
  const GUILD_EVENT_RULES = MarkupRulesDefault.GUILD_EVENT_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [GUILD_EVENT_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp3 = combineMarkupRulesDefault;
  return tmp3(items1);
});
module_12 = module_12_mod;
let closure_16 = module_12.once(() => {
  const obj = module_12;
  return obj.omit(closure_15(), "subtext");
});
module_12 = module_12_mod;
let closure_17 = module_12.once(() => {
  const AUTO_MODERATION_SYSTEM_MESSAGE_RULES = MarkupRulesDefault.AUTO_MODERATION_SYSTEM_MESSAGE_RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [AUTO_MODERATION_SYSTEM_MESSAGE_RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp2 = combineMarkupRulesDefault;
  return tmp2(items1);
});
module_12 = module_12_mod;
let closure_18 = module_12.once(() => {
  const omit = module_12.omit;
  module_12;
  const RULES = MarkupRulesDefault.RULES;
  const items = [MarkupReactRulesDefault(obj)];
  const items1 = [RULES];
  items1[HermesBuiltin.arraySpread(items1, items, 1)] = {};
  const tmp3 = combineMarkupRulesDefault;
  const items2 = [
    tmp3(items1),
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
  return omit.apply(items2);
});
let obj2 = { text: MarkupRulesDefault.RULES.text };
module_12 = module_12_mod;
let closure_19 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_6());
});
module_12 = module_12_mod;
let closure_20 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_8());
});
module_12 = module_12_mod;
let closure_21 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_9());
});
module_12 = module_12_mod;
let closure_22 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_10());
});
module_12 = module_12_mod;
let closure_23 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_11());
});
module_12 = module_12_mod;
let closure_24 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_12());
});
module_12 = module_12_mod;
let closure_25 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_13());
});
module_12 = module_12_mod;
let closure_26 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_14());
});
module_12 = module_12_mod;
let closure_27 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_15());
});
module_12 = module_12_mod;
let closure_28 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_17());
});
module_12 = module_12_mod;
let closure_29 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.reactParserFor(closure_7());
});
module_12 = module_12_mod;
let closure_30 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_6());
});
module_12 = module_12_mod;
let closure_31 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_8());
});
module_12 = module_12_mod;
let closure_32 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_11());
});
module_12 = module_12_mod;
let closure_33 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_12());
});
module_12 = module_12_mod;
let closure_34 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_13());
});
module_12 = module_12_mod;
let closure_35 = module_12.once(() => {
  const obj = MarkupParserAll;
  return obj.astParserFor(closure_17());
});
let obj3 = {
  combineAndInjectMentionRule(arg0, arg1) {
    const items = [arg0];
    items[HermesBuiltin.arraySpread(items, arg1, 1)] = {};
    const tmp2 = combineMarkupRulesDefault;
    return tmp2(items);
  },
  createReactRules: MarkupReactRulesDefault,
  defaultReactRuleOptions,
  lockscreenWidgetMessageRules: obj2,
  astParserFor: MarkupParserAll.astParserFor,
  reactParserFor: MarkupParserAll.reactParserFor,
  parse() {
    const items = [...arguments];
    const tmp = closure_19();
    return tmp(...items);
  },
  parseTopic(topic, arg1, arg2, arg3) {
    const obj = { allowLinks: true, allowGameMentions: true };
    const tmp = closure_20();
    const merged = Object.assign(arg2);
    return tmp(topic, arg1, obj, arg3);
  },
  parseTruncatedTopic(arg0, arg1, arg2, arg3) {
    const obj = { allowLinks: true, allowGameMentions: true };
    const tmp = closure_21();
    const merged = Object.assign(arg2);
    return tmp(arg0, arg1, obj, arg3);
  },
  parseVoiceChannelStatus() {
    const items = [...arguments];
    const tmp = closure_22();
    return tmp(...items);
  },
  parseEmbedTitle() {
    const items = [...arguments];
    const tmp = closure_23();
    return tmp(...items);
  },
  parseEmbedTitleWithoutLinks() {
    const items = [...arguments];
    const tmp = closure_24();
    return tmp(...items);
  },
  parseInlineReply() {
    const items = [...arguments];
    const tmp = closure_25();
    return tmp(...items);
  },
  parseGuildVerificationFormRule() {
    const items = [...arguments];
    const tmp = closure_26();
    return tmp(...items);
  },
  parseGuildEventDescription() {
    const items = [...arguments];
    const tmp = closure_27();
    return tmp(...items);
  },
  parseAutoModerationSystemMessage() {
    const items = [...arguments];
    const tmp = closure_28();
    return tmp(...items);
  },
  parseForumPostGuidelines() {
    const items = [...arguments];
    const tmp = closure_29();
    return tmp(...items);
  },
  parseToAST() {
    const items = [...arguments];
    const tmp = closure_30();
    return tmp(...items);
  },
  parseTopicToAST() {
    const items = [...arguments];
    const tmp = closure_31();
    return tmp(...items);
  },
  parseEmbedTitleToAST() {
    const items = [...arguments];
    const tmp = closure_32();
    return tmp(...items);
  },
  parseEmbedTitleWithoutLinksToAST() {
    const items = [...arguments];
    const tmp = closure_33();
    return tmp(...items);
  },
  parseInlineReplyToAST() {
    const items = [...arguments];
    const tmp = closure_34();
    return tmp(...items);
  },
  parseAutoModerationSystemMessageToAST() {
    const items = [...arguments];
    const tmp = closure_35();
    return tmp(...items);
  },
};
Object.defineProperty(obj3, "defaultRules", { get: () => closure_6(), set: undefined });
Object.defineProperty(obj3, "guildEventRules", { get: () => closure_15(), set: undefined });
Object.defineProperty(obj3, "guildEventLocationRules", { get: () => closure_16(), set: undefined });
Object.defineProperty(obj3, "notifCenterV2MessagePreviewRules", { get: () => closure_18(), set: undefined });
const result = size.fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default obj3;
