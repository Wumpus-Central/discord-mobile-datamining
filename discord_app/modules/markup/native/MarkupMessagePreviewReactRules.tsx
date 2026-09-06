// === Module 10117: MarkupMessagePreviewReactRules ===

// Module 10117 (MarkupMessagePreviewReactRules)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import MarkupRulesDefault from "MarkupRules" /* 4998 */;
import FastImageDefault from "FastImage" /* 5587 */;
import IconSize from "IconSize" /* 6620 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8096 */;
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import HighlightTextDefault from "HighlightText" /* 10126 */;
import SpoilerDefault from "Spoiler" /* 10127 */;
import TimestampDefault from "Timestamp" /* 10129 */;
import noop from "module_19" /* 19 */;

require = fn;
function defaultReactFn(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = MarkupRulesUtils.smartOutput(content, output, state);
  }
  return content;
}
function createMessagePreviewReactRules(customEmojiSize) {
  let num = customEmojiSize.customEmojiSize;
  if (num === undefined) {
    num = 15;
  }
  obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj };
  obj = { react: defaultReactFn };
  obj = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.STRIKETHROUGH]);
  obj.react = defaultReactFn;
  obj[num(4996).AST_KEY.STRIKETHROUGH] = obj;
  let obj1 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.UNDERLINE]);
  obj1.react = defaultReactFn;
  obj[num(4996).AST_KEY.UNDERLINE] = obj1;
  let obj2 = {};
  const merged2 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.ITALICS]);
  obj2.react = defaultReactFn;
  obj[num(4996).AST_KEY.ITALICS] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.STRONG]);
  obj3.react = defaultReactFn;
  obj[num(4996).AST_KEY.STRONG] = obj3;
  const obj4 = {};
  const merged4 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.LINK]);
  obj4.react = defaultReactFn;
  obj[num(4996).AST_KEY.LINK] = obj4;
  const obj5 = {};
  const merged5 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.URL]);
  obj5.react = defaultReactFn;
  obj[num(4996).AST_KEY.URL] = obj5;
  const obj6 = {};
  const merged6 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.AUTOLINK]);
  obj6.react = defaultReactFn;
  obj[num(4996).AST_KEY.AUTOLINK] = obj6;
  const obj7 = {};
  const merged7 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.LINE_BREAK]);
  obj7.react = function react() {
    return "\n";
  };
  obj[num(4996).AST_KEY.LINE_BREAK] = obj7;
  obj[num(4996).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = { children: null };
      const tmp = HighlightTextDefault;
      obj.children = num(8096).smartOutput(node, output, key);
      return closure_1_4(tmp, obj, key.key);
    }
  };
  const obj8 = {};
  const merged8 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.BLOCK_QUOTE]);
  obj8.react = defaultReactFn;
  obj[num(4996).AST_KEY.BLOCK_QUOTE] = obj8;
  const obj9 = {};
  const merged9 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.PARAGRAPH]);
  obj9.order = 600;
  obj9.react = defaultReactFn;
  obj[num(4996).AST_KEY.PARAGRAPH] = obj9;
  obj[num(4996).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[num(4996).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      if (src.src) {
        let obj = ChannelListLayout;
        const sizeStyle = obj.makeSizeStyle(num);
        const items = [sizeStyle, { resizeMode: "contain" }, , ];
        let obj1 = utils_PlatformUtils;
        let isAndroidResult = obj1.isAndroid();
        if (isAndroidResult) {
          obj = { transform: null };
          const items1 = [{ translateY: 3 }];
          obj.transform = items1;
          isAndroidResult = obj;
        }
        items[2] = isAndroidResult;
        muted = muted.muted;
        if (muted) {
          obj = { opacity: MUTED_OPACITY_CONTENT };
          muted = obj;
        }
        obj1 = { style: null, source: null };
        items[3] = muted;
        obj1.style = items;
        const obj2 = { uri: src.src };
        obj1.source = obj2;
        return React4(FastImageDefault, obj1, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[num(4996).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted, children: null };
      const tmp = SpoilerDefault;
      obj.children = num(8096).smartOutput(node, output, muted);
      return closure_1_4(tmp, obj, muted.key);
    }
  };
  obj[num(4996).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        smartOutputResult = num(8096).smartOutput(channelId, output, state);
        const tmpResult = num(8096);
      }
      return smartOutputResult;
    }
  };
  const obj10 = {};
  const merged10 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.INLINE_CODE]);
  obj10.react = defaultReactFn;
  obj[num(4996).AST_KEY.INLINE_CODE] = obj10;
  const obj11 = {};
  const merged11 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.CODE_BLOCK]);
  obj11.parse = function parse(arg0, arg1, arg2) {
    const parsed = MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(regExp, "");
    }
    return parsed;
  };
  obj11.react = defaultReactFn;
  obj[num(4996).AST_KEY.CODE_BLOCK] = obj11;
  const obj12 = {};
  const merged12 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.MENTION]);
  obj12.react = defaultReactFn;
  obj[num(4996).AST_KEY.MENTION] = obj12;
  const obj13 = {};
  const merged13 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.CHANNEL_MENTION]);
  obj13.react = num(10128).inlineChannelMentionReact;
  obj[num(4996).AST_KEY.CHANNEL_MENTION] = obj13;
  const obj14 = {};
  const merged14 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.ATTACHMENT_LINK]);
  obj14.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["\u{1F4CE} ", num(8096).smartOutput(node, output, key)];
    obj.children = items;
    return closure_1_5(num(1178).LegacyText, obj, key.key);
  };
  obj[num(4996).AST_KEY.ATTACHMENT_LINK] = obj14;
  const obj15 = {};
  const merged15 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.SOUNDBOARD]);
  obj15.react = defaultReactFn;
  obj[num(4996).AST_KEY.SOUNDBOARD] = obj15;
  obj[num(4996).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj16 = { react: null };
  let obj19 = num(10128);
  obj16.react = obj19.createInlineChannelReact("\u{1F4AC}");
  obj[num(4996).AST_KEY.CHANNEL] = obj16;
  const obj17 = {};
  const merged16 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.COMMAND_MENTION]);
  obj17.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["/", num(8096).smartOutput(node, output, key)];
    obj.children = items;
    return closure_1_5(num(1178).LegacyText, obj, key.key);
  };
  obj[num(4996).AST_KEY.COMMAND_MENTION] = obj17;
  const obj18 = {};
  const merged17 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.TIMESTAMP]);
  obj18.react = function react(node, arg1, key) {
    return closure_1_4(TimestampDefault, { node, style: null }, key.key);
  };
  obj[num(4996).AST_KEY.TIMESTAMP] = obj18;
  obj19 = {};
  const merged18 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 4996).AST_KEY.LIST]);
  obj19.react = function react(arg0, output, state) {
    const first = arg0.items[0];
    let first1 = first;
    if (Array.isArray(first)) {
      first1 = first[0];
    }
    let smartOutputResult = null;
    if (null != first1) {
      smartOutputResult = num(8096).smartOutput(first1, output, state);
      const obj = num(8096);
    }
    return smartOutputResult;
  };
  obj[num(4996).AST_KEY.LIST] = obj19;
  obj[num(4996).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[num(4996).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
const MUTED_OPACITY_CONTENT = fn(10118).MUTED_OPACITY_CONTENT;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const regExp = new RegExp(fn(4555).ANSI_CONTROL_SEQUENCE_RE, "g");
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, arg1, arg2, arg3) {
  let obj = ChannelListLayout;
  let bound = arg2;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  let num = IconSize.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  if (num == null) {
    num = 0;
  }
  obj = { customEmojiSize: num * bound };
  return createMessagePreviewReactRules(obj);
};
export { createMessagePreviewReactRules };