// === Module 7067: MarkupUtils ===

// Module 7067 (MarkupUtils)
import MarkupReactRules from "MarkupReactRules" /* 6121 */;
import reactParserFor2 from "reactParserFor" /* 7068 */;
import combineMarkupRulesDefault from "combineMarkupRules" /* 7071 */;
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import markup_MarkupParserAll from "markup/MarkupParser" /* 7179 */;
import apply_mod from "apply" /* 12 */;

const MarkupReactRulesDefault = MarkupReactRules;

require = fn;
function reactParserFor(link) {
  link = link.link;
  let react;
  if (link != null) {
    react = link.react;
  }
  let tmp2 = link;
  if (null == react) {
    const obj2 = {};
    const merged = Object.assign(link);
    const obj3 = {};
    const merged1 = Object.assign(link.link);
    obj3.react = function react(content, fn, arg2) {
      return fn(content.content, arg2);
    };
    obj2.link = obj3;
    tmp2 = obj2;
  }
  return reactParserFor2.default(tmp2);
}
const args = ["url", "autolink", "link", "mailto", "tel"];
const defaultReactRuleOptions = { enableBuildOverrides: false, enableEmojiClick: true };
let apply = apply_mod;
let closure_7 = apply.once(() => {
  items = [MarkupReactRulesDefault({ enableBuildOverrides: true })];
  const items1 = [MarkupRulesDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_8 = apply.once(() => {
  items = [closure_7(), ];
  const tmp = combineMarkupRulesDefault;
  items[1] = MarkupReactRules.createFetchingGameMentionRule();
  return tmp(items);
});
let apply = apply_mod;
let closure_9 = apply.once(() => {
  const obj = apply;
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), "paragraph", "newline");
});
let apply = apply_mod;
let closure_10 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({});
  items = [MarkupReactRulesDefault(obj), , ];
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
let closure_11 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.emojiTooltipPosition = "bottom";
  obj.shouldCloseDefaultModals = true;
  obj.shouldStopPropagation = true;
  const merged1 = Object.assign({ emojiFocusable: false });
  items = [MarkupReactRulesDefault(obj), , ];
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
let closure_12 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.enableEmojiClick = false;
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.VOICE_CHANNEL_STATUS_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_13 = apply.once(() => {
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_14 = apply.once(() => {
  const obj = apply;
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.EMBED_TITLE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return obj.omit(combineMarkupRulesDefault(items1), closure_5, "channelOrMessageUrl", "mediaPostLink");
});
let apply = apply_mod;
let closure_15 = apply.once(() => {
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.INLINE_REPLY_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_16 = apply.once(() => {
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_VERIFICATION_FORM_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_17 = apply.once(() => {
  const obj = {};
  const merged = Object.assign(obj);
  obj.shouldStopPropagation = true;
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.GUILD_EVENT_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_18 = apply.once(() => apply.omit(closure_17(), "subtext"));
let apply = apply_mod;
let closure_19 = apply.once(() => {
  items = [MarkupRulesDefault.POLL_RULES, MarkupReactRulesDefault(obj)];
  return combineMarkupRulesDefault(items);
});
let apply = apply_mod;
let closure_20 = apply.once(() => {
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, ];
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  return combineMarkupRulesDefault(items1);
});
let apply = apply_mod;
let closure_21 = apply.once(() => {
  items = [MarkupReactRulesDefault(obj)];
  const items1 = [MarkupRulesDefault.RULES, ];
  const tmp = apply;
  items1[HermesBuiltin.arraySpread(items, 1)] = {};
  const items2 = [combineMarkupRulesDefault(items1), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ...closure_5];
  return tmp.omit.apply(items2);
});
let apply = apply_mod;
let closure_22 = apply.once(() => {
  const tmp = closure_7();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_23 = apply.once(() => {
  const tmp = closure_8();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_24 = apply.once(() => {
  const tmp = closure_10();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_25 = apply.once(() => {
  const tmp = closure_11();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_26 = apply.once(() => {
  const tmp = closure_12();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_27 = apply.once(() => {
  const tmp = closure_13();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_28 = apply.once(() => {
  const tmp = closure_14();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_29 = apply.once(() => {
  const tmp = closure_15();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_30 = apply.once(() => {
  const tmp = closure_16();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_31 = apply.once(() => {
  const tmp = closure_17();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_32 = apply.once(() => {
  const tmp = closure_20();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_33 = apply.once(() => {
  const tmp = closure_9();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_34 = apply.once(() => {
  const tmp = closure_19();
  if (typeof reactParserFor === "function") {
    const link = tmp.link;
    let react;
    if (link != null) {
      react = link.react;
    }
    let tmp6 = tmp;
    if (null == react) {
      const obj2 = {};
      const merged = Object.assign(tmp);
      const obj3 = {};
      const merged1 = Object.assign(tmp.link);
      obj3.react = function react(content, fn, arg2) {
        return fn(content.content, arg2);
      };
      obj2.link = obj3;
      tmp6 = obj2;
    }
    return reactParserFor2.default(tmp6);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
let apply = apply_mod;
let closure_35 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_7()));
let apply = apply_mod;
let closure_36 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_10()));
let apply = apply_mod;
let closure_37 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_13()));
let apply = apply_mod;
let closure_38 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_14()));
let apply = apply_mod;
let closure_39 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_15()));
let apply = apply_mod;
let closure_40 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_20()));
let apply = apply_mod;
let closure_41 = apply.once(() => markup_MarkupParserAll.astParserFor(closure_19()));
let obj3 = {
  combineAndInjectMentionRule(arg0, arg1) {
    items = [arg0, ];
    items[HermesBuiltin.arraySpread(arg1, 1)] = {};
    return combineMarkupRulesDefault(items);
  },
  createReactRules: MarkupReactRulesDefault,
  defaultReactRuleOptions
};
Object.defineProperty(obj3, "defaultRules", { get: () => closure_7(), set: undefined });
Object.defineProperty(obj3, "topicRules", { get: () => closure_10(), set: undefined });
Object.defineProperty(obj3, "guildEventRules", { get: () => closure_17(), set: undefined });
Object.defineProperty(obj3, "guildEventLocationRules", { get: () => closure_18(), set: undefined });
Object.defineProperty(obj3, "notifCenterV2MessagePreviewRules", { get: () => closure_21(), set: undefined });
obj3.lockscreenWidgetMessageRules = { text: MarkupRulesDefault.RULES.text };
obj3.astParserFor = markup_MarkupParserAll.astParserFor;
obj3.reactParserFor = reactParserFor;
obj3.parse = function parse() {
  items = [...arguments];
  return closure_22()(...items);
};
obj3.parseRichEmbedText = function parseRichEmbedText(arg0, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_23()(arg0, arg1, { allowGameMentions: true }, arg3);
};
obj3.parseTopic = function parseTopic(topic, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_24()(topic, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj3.parseTruncatedTopic = function parseTruncatedTopic(arg0, arg1, arg2, arg3) {
  const merged = Object.assign(arg2);
  return closure_25()(arg0, arg1, { allowLinks: true, allowGameMentions: true }, arg3);
};
obj3.parseVoiceChannelStatus = function parseVoiceChannelStatus() {
  items = [...arguments];
  return closure_26()(...items);
};
obj3.parseEmbedTitle = function parseEmbedTitle() {
  items = [...arguments];
  return closure_27()(...items);
};
obj3.parseEmbedTitleWithoutLinks = function parseEmbedTitleWithoutLinks() {
  items = [...arguments];
  return closure_28()(...items);
};
obj3.parseInlineReply = function parseInlineReply() {
  items = [...arguments];
  return closure_29()(...items);
};
obj3.parseGuildVerificationFormRule = function parseGuildVerificationFormRule() {
  items = [...arguments];
  return closure_30()(...items);
};
obj3.parseGuildEventDescription = function parseGuildEventDescription() {
  items = [...arguments];
  return closure_31()(...items);
};
obj3.parseAutoModerationSystemMessage = function parseAutoModerationSystemMessage() {
  items = [...arguments];
  return closure_32()(...items);
};
obj3.parseForumPostGuidelines = function parseForumPostGuidelines() {
  items = [...arguments];
  return closure_33()(...items);
};
obj3.parsePoll = function parsePoll(c3, arg1, arg2) {
  return closure_34()(c3, arg1, arg2);
};
obj3.parseToAST = function parseToAST() {
  items = [...arguments];
  return closure_35()(...items);
};
obj3.parseTopicToAST = function parseTopicToAST() {
  items = [...arguments];
  return closure_36()(...items);
};
obj3.parseEmbedTitleToAST = function parseEmbedTitleToAST() {
  items = [...arguments];
  return closure_37()(...items);
};
obj3.parseEmbedTitleWithoutLinksToAST = function parseEmbedTitleWithoutLinksToAST() {
  items = [...arguments];
  return closure_38()(...items);
};
obj3.parseInlineReplyToAST = function parseInlineReplyToAST() {
  items = [...arguments];
  return closure_39()(...items);
};
obj3.parseAutoModerationSystemMessageToAST = function parseAutoModerationSystemMessageToAST() {
  items = [...arguments];
  return closure_40()(...items);
};
obj3.parsePollToAST = function parsePollToAST() {
  items = [...arguments];
  return closure_41()(...items);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupUtils.tsx");

export default obj3;