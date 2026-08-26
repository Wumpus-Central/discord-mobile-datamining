// === Module 10016: defaultReactFn ===

// Module 10016 (defaultReactFn)
import noopAll from "noop" /* 19 */;
import parseLinkDefault from "parseLink" /* 4902 */;
import ICON_SIZE from "ICON_SIZE" /* 5949 */;
import smartOutput from "smartOutput" /* 8416 */;
import getLayoutStyles from "getLayoutStyles" /* 10018 */;
import { MUTED_OPACITY_CONTENT } from "hairlineWidth" /* 10017 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function defaultReactFn(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = smartOutput.smartOutput(content, output, state);
    const obj = smartOutput;
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
  const merged = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.STRIKETHROUGH]);
  obj.react = defaultReactFn;
  obj[num(4900).AST_KEY.STRIKETHROUGH] = obj;
  obj1 = {};
  const merged1 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.UNDERLINE]);
  obj1.react = defaultReactFn;
  obj[num(4900).AST_KEY.UNDERLINE] = obj1;
  let obj2 = {};
  const merged2 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.ITALICS]);
  obj2.react = defaultReactFn;
  obj[num(4900).AST_KEY.ITALICS] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.STRONG]);
  obj3.react = defaultReactFn;
  obj[num(4900).AST_KEY.STRONG] = obj3;
  const obj4 = {};
  const merged4 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.LINK]);
  obj4.react = defaultReactFn;
  obj[num(4900).AST_KEY.LINK] = obj4;
  const obj5 = {};
  const merged5 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.URL]);
  obj5.react = defaultReactFn;
  obj[num(4900).AST_KEY.URL] = obj5;
  const obj6 = {};
  const merged6 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.AUTOLINK]);
  obj6.react = defaultReactFn;
  obj[num(4900).AST_KEY.AUTOLINK] = obj6;
  const obj7 = {};
  const merged7 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.LINE_BREAK]);
  obj7.react = function react() {
    return "\n";
  };
  obj[num(4900).AST_KEY.LINE_BREAK] = obj7;
  obj[num(4900).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = { children: null };
      const tmp = callback(10023);
      obj[0] = num(8416).smartOutput(node, output, key);
      return callback2(tmp, obj, key.key);
    }
  };
  const obj8 = {};
  const merged8 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.BLOCK_QUOTE]);
  obj8.react = defaultReactFn;
  obj[num(4900).AST_KEY.BLOCK_QUOTE] = obj8;
  const obj9 = {};
  const merged9 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.PARAGRAPH]);
  obj9.order = 600;
  obj9.react = defaultReactFn;
  obj[num(4900).AST_KEY.PARAGRAPH] = obj9;
  obj[num(4900).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[num(4900).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      if (src.src) {
        let obj = num(closure_1_2[5]);
        const sizeStyle = obj.makeSizeStyle(num);
        const items = [sizeStyle, { resizeMode: "contain" }, , ];
        obj1 = num(closure_1_2[11]);
        let isAndroidResult = obj1.isAndroid();
        if (isAndroidResult) {
          obj = { transform: null };
          const items1 = [{ translateY: 3 }];
          obj[0] = items1;
          isAndroidResult = obj;
        }
        items[2] = isAndroidResult;
        muted = muted.muted;
        if (muted) {
          obj = { opacity: null };
          obj[0] = closure_1_3;
          muted = obj;
        }
        obj1 = { style: null, source: null };
        items[3] = muted;
        obj1[0] = items;
        const obj2 = { uri: null };
        obj2[0] = src.src;
        obj1[1] = obj2;
        return closure_1_4(closure_1_1(closure_1_2[10]), obj1, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[num(4900).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted, children: null };
      const tmp = callback(10024);
      obj[2] = num(8416).smartOutput(node, output, muted);
      return callback2(tmp, obj, muted.key);
    }
  };
  obj[num(4900).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        smartOutputResult = num(8416).smartOutput(channelId, output, state);
        const tmpResult = num(8416);
      }
      return smartOutputResult;
    }
  };
  const obj10 = {};
  const merged10 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.INLINE_CODE]);
  obj10.react = defaultReactFn;
  obj[num(4900).AST_KEY.INLINE_CODE] = obj10;
  const obj11 = {};
  const merged11 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.CODE_BLOCK]);
  obj11.parse = function parse(arg0, arg1, arg2) {
    const parsed = callback(4902).RULES[num(undefined, 4900).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(closure_6, "");
    }
    return parsed;
  };
  obj11.react = defaultReactFn;
  obj[num(4900).AST_KEY.CODE_BLOCK] = obj11;
  const obj12 = {};
  const merged12 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.MENTION]);
  obj12.react = defaultReactFn;
  obj[num(4900).AST_KEY.MENTION] = obj12;
  const obj13 = {};
  const merged13 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.CHANNEL_MENTION]);
  obj13.react = num(10025).inlineChannelMentionReact;
  obj[num(4900).AST_KEY.CHANNEL_MENTION] = obj13;
  const obj14 = {};
  const merged14 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.ATTACHMENT_LINK]);
  obj14.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["\u{1F4CE} ", num(8416).smartOutput(node, output, key)];
    obj[0] = items;
    return callback3(num(1297).LegacyText, obj, key.key);
  };
  obj[num(4900).AST_KEY.ATTACHMENT_LINK] = obj14;
  const obj15 = {};
  const merged15 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.SOUNDBOARD]);
  obj15.react = defaultReactFn;
  obj[num(4900).AST_KEY.SOUNDBOARD] = obj15;
  obj[num(4900).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj16 = { react: null };
  let obj19 = num(10025);
  obj16[0] = obj19.createInlineChannelReact("\u{1F4AC}");
  obj[num(4900).AST_KEY.CHANNEL] = obj16;
  const obj17 = {};
  const merged16 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.COMMAND_MENTION]);
  obj17.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["/", num(8416).smartOutput(node, output, key)];
    obj[0] = items;
    return callback3(num(1297).LegacyText, obj, key.key);
  };
  obj[num(4900).AST_KEY.COMMAND_MENTION] = obj17;
  const obj18 = {};
  const merged17 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.TIMESTAMP]);
  obj18.react = function react(node, arg1, key) {
    return callback2(callback(10026), { node, style: null }, key.key);
  };
  obj[num(4900).AST_KEY.TIMESTAMP] = obj18;
  obj19 = {};
  const merged18 = Object.assign(parseLinkDefault.RULES[num(undefined, 4900).AST_KEY.LIST]);
  obj19.react = function react(arg0, output, state) {
    const first = arg0.items[0];
    let first1 = first;
    if (Array.isArray(first)) {
      first1 = first[0];
    }
    let smartOutputResult = null;
    if (null != first1) {
      smartOutputResult = num(8416).smartOutput(first1, output, state);
      const obj = num(8416);
    }
    return smartOutputResult;
  };
  obj[num(4900).AST_KEY.LIST] = obj19;
  obj[num(4900).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[num(4900).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const regExp = new RegExp(require("regExp").ANSI_CONTROL_SEQUENCE_RE, "g");
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout) {
  let obj = getLayoutStyles;
  let bound = arg2;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  let num = ICON_SIZE.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  if (num == null) {
    num = 0;
  }
  obj = { customEmojiSize: num * bound };
  return createMessagePreviewReactRules(obj);
};
export { createMessagePreviewReactRules };