// discord_app/modules/markup/native/MarkupMessagePreviewReactRules.tsx
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import HighlightJsAnsiLanguage from "../../../utils/HighlightJsAnsiLanguage.tsx";
import MarkupRulesDefault from "../MarkupRules.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import IconSize from "../../../design/components/Icon/IconSize.tsx";
import MarkupRulesUtils from "../MarkupRulesUtils.tsx";
import RedesignChannelListConstants from "../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import HighlightTextDefault from "../../search/native/components/HighlightText.tsx";
import SpoilerDefault from "Spoiler.tsx";
import TimestampDefault from "../Timestamp.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
function defaultReactFn(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    const obj = MarkupRulesUtils;
    content = obj.smartOutput(content, output, state);
  }
  return content;
}
function createMessagePreviewReactRules(customEmojiSize) {
  let obj2;
  let obj20;
  let num = customEmojiSize.customEmojiSize;
  if (num === undefined) {
    num = 15;
  }
  let obj = { [closure_0(closure_2[7]).AST_KEY.TEXT]: obj2 };
  obj2 = { react: defaultReactFn };
  let obj3 = { react: defaultReactFn };
  const STRIKETHROUGH = num(5785).AST_KEY.STRIKETHROUGH;
  const merged = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.STRIKETHROUGH]);
  obj[STRIKETHROUGH] = obj3;
  let obj4 = { react: defaultReactFn };
  const UNDERLINE = num(5785).AST_KEY.UNDERLINE;
  const merged1 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.UNDERLINE]);
  obj[UNDERLINE] = obj4;
  let obj5 = { react: defaultReactFn };
  const ITALICS = num(5785).AST_KEY.ITALICS;
  const merged2 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.ITALICS]);
  obj[ITALICS] = obj5;
  let obj6 = { react: defaultReactFn };
  const STRONG = num(5785).AST_KEY.STRONG;
  const merged3 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.STRONG]);
  obj[STRONG] = obj6;
  const obj7 = { react: defaultReactFn };
  const LINK = num(5785).AST_KEY.LINK;
  const merged4 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.LINK]);
  obj[LINK] = obj7;
  const obj8 = { react: defaultReactFn };
  const _URL = num(5785).AST_KEY.URL;
  const merged5 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.URL]);
  obj[_URL] = obj8;
  const obj9 = { react: defaultReactFn };
  const AUTOLINK = num(5785).AST_KEY.AUTOLINK;
  const merged6 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.AUTOLINK]);
  obj[AUTOLINK] = obj9;
  const obj10 = {
    react() {
      return "\n";
    },
  };
  const LINE_BREAK = num(5785).AST_KEY.LINE_BREAK;
  const merged7 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.LINE_BREAK]);
  obj[LINE_BREAK] = obj10;
  obj[num(5785).AST_KEY.HIGHLIGHT] = {
    react(node, output, key) {
      let obj2;
      const obj = { children: obj2.smartOutput(node, output, key) };
      const tmp = HighlightTextDefault;
      obj2 = num(dependencyMap[4]);
      return closure_1_4(tmp, obj, key.key);
    },
  };
  const obj11 = { react: defaultReactFn };
  const BLOCK_QUOTE = num(5785).AST_KEY.BLOCK_QUOTE;
  const merged8 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.BLOCK_QUOTE]);
  obj[BLOCK_QUOTE] = obj11;
  const obj12 = { order: 600, react: defaultReactFn };
  const PARAGRAPH = num(5785).AST_KEY.PARAGRAPH;
  const merged9 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.PARAGRAPH]);
  obj[PARAGRAPH] = obj12;
  obj[num(5785).AST_KEY.EMOJI] = {
    react(surrogate) {
      return surrogate.surrogate || surrogate.content;
    },
  };
  obj[num(5785).AST_KEY.CUSTOM_EMOJI] = {
    react(src, arg1, muted) {
      let items1;
      let obj4;
      if (typeof src.src === "string") {
        if ("" !== src.src) {
          const obj5 = ChannelListLayout;
          const sizeStyle = obj5.makeSizeStyle(num);
          const items = [sizeStyle, { resizeMode: "contain" }, ,];
          const tmp10 = FastImageDefault;
          const obj6 = utils_PlatformUtils;
          let isAndroidResult = obj6.isAndroid();
          if (isAndroidResult) {
            const obj = { transform: items1 };
            items1 = [{ translateY: 3 }];
            isAndroidResult = obj;
          }
          items[2] = isAndroidResult;
          muted = muted.muted;
          let muted2 = typeof muted === "boolean";
          if (typeof muted === "boolean") {
            muted2 = muted.muted;
          }
          if (muted2) {
            muted2 = { opacity: MUTED_OPACITY_CONTENT };
            const obj2 = { opacity: MUTED_OPACITY_CONTENT };
          }
          const obj3 = { style: items, source: obj4 };
          items[3] = muted2;
          obj4 = { uri: src.src };
          return React3(tmp10, obj3, muted.key);
        }
      }
      return src.alt;
    },
  };
  obj[num(5785).AST_KEY.SPOILER] = {
    react(node, output, muted) {
      let obj2;
      const obj = { disableReveal: true, muted: muted.muted, children: obj2.smartOutput(node, output, muted) };
      const tmp = SpoilerDefault;
      obj2 = num(dependencyMap[4]);
      return closure_1_4(tmp, obj, muted.key);
    },
  };
  obj[num(5785).AST_KEY.STATIC_ROUTE_LINK] = {
    react(channelId, output, state) {
      let smartOutputResult = null;
      const obj = num(dependencyMap[4]);
      if (obj.isStaticRouteIconType(channelId.channelId)) {
        const tmpResult = num(dependencyMap[4]);
        smartOutputResult = tmpResult.smartOutput(channelId, output, state);
      }
      return smartOutputResult;
    },
  };
  const obj13 = { react: defaultReactFn };
  const INLINE_CODE = num(5785).AST_KEY.INLINE_CODE;
  const merged10 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.INLINE_CODE]);
  obj[INLINE_CODE] = obj13;
  const obj14 = {
    parse(arg0, arg1, arg2) {
      const obj = MarkupRulesDefault.RULES[num(undefined, dependencyMap[7]).AST_KEY.CODE_BLOCK];
      const parsed = obj.parse(arg0, arg1, arg2);
      const str = parsed.lang;
      if ("ansi" === str.toLowerCase()) {
        const content = parsed.content;
        parsed.content = content.replaceAll(regExp, "");
      }
      return parsed;
    },
    react: defaultReactFn,
  };
  const CODE_BLOCK = num(5785).AST_KEY.CODE_BLOCK;
  const merged11 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.CODE_BLOCK]);
  obj[CODE_BLOCK] = obj14;
  const obj15 = { react: defaultReactFn };
  const MENTION = num(5785).AST_KEY.MENTION;
  const merged12 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.MENTION]);
  obj[MENTION] = obj15;
  const obj16 = { react: num(11705).inlineChannelMentionReact };
  const CHANNEL_MENTION = num(5785).AST_KEY.CHANNEL_MENTION;
  const merged13 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.CHANNEL_MENTION]);
  obj[CHANNEL_MENTION] = obj16;
  const obj17 = {
    react(node, output, key) {
      let items;
      const obj = { children: items };
      const LegacyText = num(dependencyMap[14]).LegacyText;
      items = ["\u{1F4CE} "];
      const obj2 = num(dependencyMap[4]);
      items[1] = obj2.smartOutput(node, output, key);
      return closure_1_5(LegacyText, obj, key.key);
    },
  };
  const ATTACHMENT_LINK = num(5785).AST_KEY.ATTACHMENT_LINK;
  const merged14 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.ATTACHMENT_LINK]);
  obj[ATTACHMENT_LINK] = obj17;
  const obj18 = { react: defaultReactFn };
  const SOUNDBOARD = num(5785).AST_KEY.SOUNDBOARD;
  const merged15 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.SOUNDBOARD]);
  obj[SOUNDBOARD] = obj18;
  obj[num(5785).AST_KEY.GUILD] = { react: defaultReactFn };
  const obj19 = { react: obj20.createInlineChannelReact("\u{1F4AC}") };
  const CHANNEL = num(5785).AST_KEY.CHANNEL;
  obj[CHANNEL] = obj19;
  obj20 = num(11705);
  const obj21 = {
    react(node, output, key) {
      let items;
      const obj = { children: items };
      const LegacyText = num(dependencyMap[14]).LegacyText;
      items = ["/"];
      const obj2 = num(dependencyMap[4]);
      items[1] = obj2.smartOutput(node, output, key);
      return closure_1_5(LegacyText, obj, key.key);
    },
  };
  const COMMAND_MENTION = num(5785).AST_KEY.COMMAND_MENTION;
  const merged16 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.COMMAND_MENTION]);
  obj[COMMAND_MENTION] = obj21;
  const obj22 = {
    react(node, arg1, key) {
      const obj = { node, style: null };
      return closure_1_4(TimestampDefault, obj, key.key);
    },
  };
  const TIMESTAMP = num(5785).AST_KEY.TIMESTAMP;
  const merged17 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.TIMESTAMP]);
  obj[TIMESTAMP] = obj22;
  const obj23 = {
    react(arg0, output, state) {
      const first = arg0.items[0];
      let first1 = first;
      if (Array.isArray(first)) {
        first1 = first[0];
      }
      let smartOutputResult = null;
      if (null != first1) {
        const obj = num(dependencyMap[4]);
        smartOutputResult = obj.smartOutput(first1, output, state);
      }
      return smartOutputResult;
    },
  };
  const LIST = num(5785).AST_KEY.LIST;
  const merged18 = Object.assign(MarkupRulesDefault.RULES[num(undefined, 5785).AST_KEY.LIST]);
  obj[LIST] = obj23;
  obj[num(5785).AST_KEY.HEADING] = { react: defaultReactFn };
  obj[num(5785).AST_KEY.SUBTEXT] = { react: defaultReactFn };
  return obj;
}
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const regExp = new RegExp(HighlightJsAnsiLanguage.ANSI_CONTROL_SEQUENCE_RE, "g");
const result = size.fileFinishedImporting("modules/markup/native/MarkupMessagePreviewReactRules.tsx");

export default function createChannelListMessagePreviewReactRules(layout, arg1, arg2, arg3) {
  let bound = arg2;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  if (null != arg3) {
    const _Math = Math;
    bound = Math.min(arg2, arg3);
  }
  let num = IconSize.ICON_SIZE[layoutStyles.messagePreview.messageTypeIconSizeNew];
  if (num == null) {
    num = 0;
  }
  const obj2 = { customEmojiSize: num * bound };
  return createMessagePreviewReactRules(obj2);
}
export { createMessagePreviewReactRules };
