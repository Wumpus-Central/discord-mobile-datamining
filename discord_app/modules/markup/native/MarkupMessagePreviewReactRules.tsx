import "set";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
function defaultReactFn(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = require(9471) /* smartOutput */.smartOutput(content, output, state);
    const obj = require(9471) /* smartOutput */;
  }
  return content;
}
function createMessagePreviewReactRules(iconColor) {
  let customEmojiSize;
  let importDefault;
  iconColor = iconColor.iconColor;
  ({ iconSize: importDefault, customEmojiSize } = iconColor);
  if (customEmojiSize === undefined) {
    customEmojiSize = 15;
  }
  obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj };
  obj = { react: defaultReactFn };
  obj = {};
  const merged = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.STRIKETHROUGH]);
  obj.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.STRIKETHROUGH] = obj;
  let obj1 = {};
  const merged1 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.UNDERLINE]);
  obj1.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.UNDERLINE] = obj1;
  let obj2 = {};
  const merged2 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.ITALICS]);
  obj2.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.ITALICS] = obj2;
  const obj3 = {};
  const merged3 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.STRONG]);
  obj3.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.STRONG] = obj3;
  const obj4 = {};
  const merged4 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.LINK]);
  obj4.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.LINK] = obj4;
  const obj5 = {};
  const merged5 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.URL]);
  obj5.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.URL] = obj5;
  const obj6 = {};
  const merged6 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.AUTOLINK]);
  obj6.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.AUTOLINK] = obj6;
  const obj7 = {};
  const merged7 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.LINE_BREAK]);
  obj7.react = function react() {
    return "\n";
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.LINE_BREAK] = obj7;
  obj[iconColor(customEmojiSize[7]).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      const obj = { children: null };
      const tmp = callback(customEmojiSize[9]);
      obj[0] = iconColor(customEmojiSize[4]).smartOutput(node, output, key);
      return callback2(tmp, obj, key.key);
    }
  };
  const obj8 = {};
  const merged8 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.BLOCK_QUOTE]);
  obj8.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.BLOCK_QUOTE] = obj8;
  const obj9 = {};
  const merged9 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.PARAGRAPH]);
  obj9.order = 600;
  obj9.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.PARAGRAPH] = obj9;
  obj[iconColor(customEmojiSize[7]).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      if (src.src) {
        let obj = iconColor(customEmojiSize[5]);
        const sizeStyle = obj.makeSizeStyle(customEmojiSize);
        const items = [sizeStyle, { resizeMode: "contain" }, , ];
        let obj1 = iconColor(customEmojiSize[11]);
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
          obj[0] = outer1_3;
          muted = obj;
        }
        obj1 = { style: null, source: null };
        items[3] = muted;
        obj1[0] = items;
        const obj2 = { uri: null };
        obj2[0] = src.src;
        obj1[1] = obj2;
        return outer1_4(outer1_1(customEmojiSize[10]), obj1, muted.key);
      } else {
        return src.alt;
      }
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      const obj = { disableReveal: true, muted: muted.muted, children: null };
      const tmp = callback(customEmojiSize[12]);
      obj[2] = iconColor(customEmojiSize[4]).smartOutput(node, output, muted);
      return callback2(tmp, obj, muted.key);
    }
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        smartOutputResult = iconColor(customEmojiSize[4]).smartOutput(channelId, output, state);
        const tmpResult = iconColor(customEmojiSize[4]);
      }
      return smartOutputResult;
    }
  };
  const obj10 = {};
  const merged10 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.INLINE_CODE]);
  obj10.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.INLINE_CODE] = obj10;
  const obj11 = {};
  const merged11 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CODE_BLOCK]);
  obj11.parse = function parse(arg0, arg1, arg2) {
    const parsed = callback(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CODE_BLOCK].parse(arg0, arg1, arg2);
    if ("ansi" === str.toLowerCase()) {
      const content = parsed.content;
      parsed.content = content.replaceAll(closure_6, "");
    }
    return parsed;
  };
  obj11.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.CODE_BLOCK] = obj11;
  const obj12 = {};
  const merged12 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.MENTION]);
  obj12.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.MENTION] = obj12;
  const obj13 = {};
  const merged13 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.CHANNEL_MENTION]);
  obj13.react = iconColor(customEmojiSize[13]).inlineChannelMentionReact;
  obj[iconColor(customEmojiSize[7]).AST_KEY.CHANNEL_MENTION] = obj13;
  const obj14 = {};
  const merged14 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.ATTACHMENT_LINK]);
  obj14.react = function react(node, output, key) {
    let obj = iconColor(customEmojiSize[15]);
    let str = "\u{1F4CE} ";
    if (!obj.isFabric()) {
      obj = { color: null, size: null };
      obj[0] = iconColor;
      obj[1] = closure_1;
      str = outer1_4(tmp2(tmp3[16]).AttachmentIcon, obj);
    }
    obj = { children: null };
    const items = [str, iconColor(customEmojiSize[4]).smartOutput(node, output, key)];
    obj[0] = items;
    return outer1_5(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.ATTACHMENT_LINK] = obj14;
  const obj15 = {};
  const merged15 = Object.assign(importDefault(customEmojiSize[8]).RULES[iconColor(undefined, customEmojiSize[7]).AST_KEY.SOUNDBOARD]);
  obj15.react = defaultReactFn;
  obj[iconColor(customEmojiSize[7]).AST_KEY.SOUNDBOARD] = obj15;
  obj[iconColor(customEmojiSize[7]).AST_KEY.GUILD] = { react: defaultReactFn };
  let obj18 = iconColor(customEmojiSize[13]);
  let obj19 = iconColor(customEmojiSize[15]);
  let str = "\u{1F4AC}";
  if (!obj19.isFabric()) {
    const obj16 = { source: null, size: null, themedColor: null };
    obj16[0] = tmp4(tmp2[17]);
    obj16[1] = iconColor.channelIconSize;
    obj16[2] = iconColor;
    str = callback(tmp(tmp2[14]).ThemedIcon, obj16);
  }
  obj[iconColor(customEmojiSize[7]).AST_KEY.CHANNEL] = { react: obj18.createInlineChannelReact(str) };
  obj18 = {};
  const merged16 = Object.assign(tmp4(tmp2[8]).RULES[tmp(undefined, tmp2[7]).AST_KEY.COMMAND_MENTION]);
  obj18.react = function react(node, output, key) {
    const obj = { children: null };
    const items = ["/", iconColor(customEmojiSize[4]).smartOutput(node, output, key)];
    obj[0] = items;
    return callback3(iconColor(customEmojiSize[14]).LegacyText, obj, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.COMMAND_MENTION] = obj18;
  obj19 = {};
  const merged17 = Object.assign(tmp4(tmp2[8]).RULES[tmp(undefined, tmp2[7]).AST_KEY.TIMESTAMP]);
  obj19.react = function react(node, arg1, key) {
    return callback2(callback(customEmojiSize[18]), { node, style: null }, key.key);
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.TIMESTAMP] = obj19;
  const obj20 = {};
  const merged18 = Object.assign(tmp4(tmp2[8]).RULES[tmp(undefined, tmp2[7]).AST_KEY.LIST]);
  obj20.react = function react(arg0, output, state) {
    const first = arg0.items[0];
    let first1 = first;
    if (Array.isArray(first)) {
      first1 = first[0];
    }
    let smartOutputResult = null;
    if (null != first1) {
      smartOutputResult = iconColor(customEmojiSize[4]).smartOutput(first1, output, state);
      const obj = iconColor(customEmojiSize[4]);
    }
    return smartOutputResult;
  };
  obj[iconColor(customEmojiSize[7]).AST_KEY.LIST] = obj20;
  obj[iconColor(customEmojiSize[7]).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[iconColor(customEmojiSize[7]).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const regExp = new RegExp(require("regExp").ANSI_CONTROL_SEQUENCE_RE, "g");
const result = require("jsxProd").fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, iconColor) {
  let obj = require(9711) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout);
  let bound = arg2;
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  obj = { iconColor, iconSize: layoutStyles.messagePreview.messageTypeIconSizeNew, channelIconSize: layoutStyles.messagePreview.messageTypeIconSize, customEmojiSize: null };
  let num = require(5659) /* ICON_SIZE */.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  if (num == null) {
    num = 0;
  }
  obj[3] = num * bound;
  return createMessagePreviewReactRules(obj);
};
export { createMessagePreviewReactRules };