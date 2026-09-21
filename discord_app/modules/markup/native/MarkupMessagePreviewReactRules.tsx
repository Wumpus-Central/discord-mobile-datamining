// === Module 10373: MarkupMessagePreviewReactRules ===

// Module 10373 (MarkupMessagePreviewReactRules)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import MarkupRulesDefault from "MarkupRules" /* 5209 */;
import FastImageDefault from "FastImage" /* 5804 */;
import IconSize from "IconSize" /* 6862 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8354 */;
import ChannelListLayout from "ChannelListLayout" /* 10377 */;
import HighlightTextDefault from "HighlightText" /* 10382 */;
import SpoilerDefault from "Spoiler" /* 10383 */;
import TimestampDefault from "Timestamp" /* 10385 */;
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
  let obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj2 };
  let obj3 = {};
  const merged = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.STRIKETHROUGH]);
  obj3.react = defaultReactFn;
  obj[num(5207).AST_KEY.STRIKETHROUGH] = obj3;
  let obj4 = {};
  const merged1 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.UNDERLINE]);
  obj4.react = defaultReactFn;
  obj[num(5207).AST_KEY.UNDERLINE] = obj4;
  let obj5 = {};
  const merged2 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.ITALICS]);
  obj5.react = defaultReactFn;
  obj[num(5207).AST_KEY.ITALICS] = obj5;
  let obj6 = {};
  const merged3 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.STRONG]);
  obj6.react = defaultReactFn;
  obj[num(5207).AST_KEY.STRONG] = obj6;
  const obj7 = {};
  const merged4 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.LINK]);
  obj7.react = defaultReactFn;
  obj[num(5207).AST_KEY.LINK] = obj7;
  const obj8 = {};
  const merged5 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.URL]);
  obj8.react = defaultReactFn;
  obj[num(5207).AST_KEY.URL] = obj8;
  const obj9 = {};
  const merged6 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.AUTOLINK]);
  obj9.react = defaultReactFn;
  obj[num(5207).AST_KEY.AUTOLINK] = obj9;
  const obj10 = {};
  const merged7 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.LINE_BREAK]);
  obj10.react = function react() {
    return "\n";
  };
  obj[num(5207).AST_KEY.LINE_BREAK] = obj10;
  obj[num(5207).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = { children: null };
      const tmp = HighlightTextDefault;
      obj.children = num(8354).smartOutput(node, output, key);
      return closure_1_4(tmp, obj, key.key);
    }
  };
  const obj11 = {};
  const merged8 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.BLOCK_QUOTE]);
  obj11.react = defaultReactFn;
  obj[num(5207).AST_KEY.BLOCK_QUOTE] = obj11;
  const obj12 = {};
  const merged9 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.PARAGRAPH]);
  obj12.order = 600;
  obj12.react = defaultReactFn;
  obj[num(5207).AST_KEY.PARAGRAPH] = obj12;
  obj[num(5207).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[num(5207).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      if (src.src) {
        const sizeStyle = ChannelListLayout.makeSizeStyle(num);
        const items = [sizeStyle, { resizeMode: "contain" }, , ];
        const tmp7 = FastImageDefault;
        let isAndroidResult = utils_PlatformUtils.isAndroid();
        if (isAndroidResult) {
          const obj3 = { transform: null };
          const items1 = [{ translateY: 3 }];
          obj3.transform = items1;
          isAndroidResult = obj3;
        }
        items[2] = isAndroidResult;
        muted = muted.muted;
        if (muted) {
          const obj4 = { opacity: MUTED_OPACITY_CONTENT };
          muted = obj4;
        }
        const obj5 = { style: null, source: null };
        items[3] = muted;
        obj5.style = items;
        const obj6 = { uri: src.src };
        obj5.source = obj6;
        return React4(tmp7, obj5, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[num(5207).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted, children: null };
      const tmp = SpoilerDefault;
      obj.children = num(8354).smartOutput(node, output, muted);
      return closure_1_4(tmp, obj, muted.key);
    }
  };
  obj[num(5207).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        smartOutputResult = num(8354).smartOutput(channelId, output, state);
        const tmpResult = num(8354);
      }
      return smartOutputResult;
    }
  };
  const obj13 = {};
  const merged10 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.INLINE_CODE]);
  obj13.react = defaultReactFn;
  obj[num(5207).AST_KEY.INLINE_CODE] = obj13;
  const obj14 = {};
  const merged11 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.CODE_BLOCK]);
  obj14.parse = function parse(arg0, arg1, arg2) {
    const parsed = MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(regExp, "");
    }
    return parsed;
  };
  obj14.react = defaultReactFn;
  obj[num(5207).AST_KEY.CODE_BLOCK] = obj14;
  const obj15 = {};
  const merged12 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.MENTION]);
  obj15.react = defaultReactFn;
  obj[num(5207).AST_KEY.MENTION] = obj15;
  const obj16 = {};
  const merged13 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.CHANNEL_MENTION]);
  obj16.react = num(10384).inlineChannelMentionReact;
  obj[num(5207).AST_KEY.CHANNEL_MENTION] = obj16;
  const obj17 = {};
  const merged14 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.ATTACHMENT_LINK]);
  obj17.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["\u{1F4CE} ", num(8354).smartOutput(node, output, key)];
    obj.children = items;
    return closure_1_5(num(1177).LegacyText, obj, key.key);
  };
  obj[num(5207).AST_KEY.ATTACHMENT_LINK] = obj17;
  const obj18 = {};
  const merged15 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.SOUNDBOARD]);
  obj18.react = defaultReactFn;
  obj[num(5207).AST_KEY.SOUNDBOARD] = obj18;
  obj[num(5207).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj19 = { react: num(10384).createInlineChannelReact("\u{1F4AC}") };
  obj[num(5207).AST_KEY.CHANNEL] = obj19;
  const obj21 = {};
  const merged16 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.COMMAND_MENTION]);
  obj21.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["/", num(8354).smartOutput(node, output, key)];
    obj.children = items;
    return closure_1_5(num(1177).LegacyText, obj, key.key);
  };
  obj[num(5207).AST_KEY.COMMAND_MENTION] = obj21;
  const obj22 = {};
  const merged17 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.TIMESTAMP]);
  obj22.react = function react(node, arg1, key) {
    return closure_1_4(TimestampDefault, { node, style: null }, key.key);
  };
  obj[num(5207).AST_KEY.TIMESTAMP] = obj22;
  const obj23 = {};
  const merged18 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5207).AST_KEY.LIST]);
  obj23.react = function react(arg0, output, state) {
    const first = arg0.items[0];
    let first1 = first;
    if (Array.isArray(first)) {
      first1 = first[0];
    }
    let smartOutputResult = null;
    if (null != first1) {
      smartOutputResult = num(8354).smartOutput(first1, output, state);
      const obj = num(8354);
    }
    return smartOutputResult;
  };
  obj[num(5207).AST_KEY.LIST] = obj23;
  obj[num(5207).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[num(5207).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
const MUTED_OPACITY_CONTENT = fn(10374).MUTED_OPACITY_CONTENT;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const regExp = new RegExp(fn(4751).ANSI_CONTROL_SEQUENCE_RE, "g");
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, arg1, arg2, arg3) {
  let bound = arg2;
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  let num = IconSize.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  if (num == null) {
    num = 0;
  }
  return createMessagePreviewReactRules({ customEmojiSize: num * bound });
};
export { createMessagePreviewReactRules };