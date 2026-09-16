// discord_app/modules/markup/MarkupReactRules.native.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01897_asyncRequireImpl.js";
import UserSettings from "../user_settings/UserSettings.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ToastUtils from "../toast/native/ToastUtils.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import LinkIcon from "../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import LinkUtils from "../links/LinkUtils.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import FastImageDefault from "../../components_native/common/FastImage.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import MarkupRulesUtils from "MarkupRulesUtils.tsx";
import showUserProfileActionSheetDefault from "../user_profile/native/showUserProfileActionSheet.tsx";
import SpoilerDefault from "native/Spoiler.tsx";
import TimestampDefault from "Timestamp.native.tsx";
import MarkupReactCommandRuleDefault from "native/MarkupReactCommandRule.tsx";
import showLongPressURLActionSheetDefault from "../links/native/showLongPressURLActionSheet.tsx";
import SignPostIcon2 from "../../design/components/Icon/native/redesign/generated/SignPostIcon.tsx";
import ChannelListMagnifyingGlassIcon from "../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
class MarkupText {
  constructor(arg0) {
    str = global.color;
    if (str === undefined) {
      str = "text-default";
    }
    str2 = global.variant;
    if (str2 === undefined) {
      str2 = "text-sm/medium";
    }
    merged = Object.assign(global, Object.assign({ children: 0, color: 0, variant: 0 }));
    obj = { variant: str2, color: str };
    merged1 = Object.assign(merged);
    obj.children = global.children;
    return jsx(closure_0(closure_2[11]).Text, obj);
  }
}
function MarkupLink(arg0) {
  ({ state, node } = arg0);
  ({ output, styles } = arg0);
  let str = state.linkVariant;
  if (str == null) {
    str = "text-sm/medium";
  }
  let obj = { variant: str, accessibilityRole: "link", style: null, onPress: null, onLongPress: null, children: null };
  let link = styles.link;
  if (!link) {
    link = tmp.link;
  }
  obj.style = link;
  obj.onPress = function onPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = URLUtilsDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = URLUtilsDefault.format(url);
            const tmp9Result = URLUtilsDefault;
          }
        }
      }
      tmp = formatResult;
    }
    node = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj = {
        href: tmp,
        onConfirm() {
          return LinkingDefault.openURL(formatResult);
        },
        trusted() {
          return node(11756).isLinkTrusted(formatResult);
        },
      };
      node(8500).handleClick(obj);
      const obj2 = node(8500);
    }
  };
  obj.onLongPress = function onLongPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = URLUtilsDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = URLUtilsDefault.format(url);
          }
        }
      }
      tmp = formatResult;
    }
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj2 = { urlString: tmp };
      showLongPressURLActionSheetDefault(obj2);
    }
  };
  tmp = closure_20();
  let obj2 = {};
  const merged = Object.assign(state);
  obj2.inLink = true;
  obj.children = node(8213).smartOutput(node, output, obj2);
  return closure_15(node(4634).Text, obj, state.key);
}
function MarkupMention(styles) {
  ({ roleStyle, state, node } = styles);
  styles = styles.styles;
  roleId = undefined;
  closure_3 = undefined;
  ({ userId, roleId } = node);
  const guildId = node.guildId;
  let tmp2 = null != guildId;
  if (tmp2) {
    tmp2 = null != roleId;
  }
  closure_3 = tmp2;
  const tmp = closure_20();
  const items = [GuildRoleStore];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = node(guildId[31]).useStateFromStores(
    items,
    () => {
      let role = null;
      if (closure_3) {
        role = GuildRoleStore.getRole(guildId, roleId);
      }
      return role;
    },
    items1,
  );
  let colorString;
  if (stateFromStores != null) {
    colorString = stateFromStores.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  let colorStrings;
  if (stateFromStores != null) {
    colorStrings = stateFromStores.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  let tmp8 = styles.mention || tmp.mention;
  let tmp9 = tmp2;
  if (tmp2) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    tmp9 = "username" === roleStyle;
  }
  if (tmp9) {
    let obj2 = { color: colorString, backgroundColor: null };
    const mention = styles.mention;
    let backgroundColor;
    if (mention != null) {
      backgroundColor = mention.backgroundColor;
    }
    if (backgroundColor == null) {
      backgroundColor = node(tmp4[32]).hexWithOpacity(colorString, 0.1);
      const tmp3Result = node(tmp4[32]);
    }
    obj2.backgroundColor = backgroundColor;
    tmp8 = obj2;
  }
  let obj = node(guildId[31]);
  const processColorStringsArray = node(guildId[33]).useProcessColorStringsArray(colorStrings);
  const tmp3Result4 = node(guildId[33]);
  let str2 = "button";
  const isRoleStyleAndRoleColorsEligibleForERC = node(guildId[33]).useIsRoleStyleAndRoleColorsEligibleForERC(
    guildId,
    userId,
    roleStyle,
    processColorStringsArray,
  );
  if (state.noStyleAndInteraction) {
    str2 = "text";
  }
  let fn;
  if (!state.noStyleAndInteraction) {
    fn = () => {
      if (null != node.roleId) {
        if (null != node.guildId) {
          const obj5 = ActionSheetActionCreatorsDefault;
          const obj3 = { guildId: null, roleId: null, channelId: null };
          ({ guildId: obj6.guildId, roleId: obj6.roleId, channelId: obj6.channelId } = node);
          obj5.openLazy(asyncRequireImpl(11729, dependencyMap.paths), "RoleMembersActionSheet", obj3, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          const obj2 = ActionSheetActionCreatorsDefault;
          const tmp12 = asyncRequireImpl(11729, dependencyMap.paths);
          const obj8 = {
            guildId: node.guildId,
            roleId: SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(node.guildId),
            channelId: node.channelId,
          };
          obj2.openLazy(tmp12, "RoleMembersActionSheet", obj8, "stack");
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        const obj = { userId, channelId };
        showUserProfileActionSheetDefault(obj);
      } else {
        const obj11 = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj11.title = intl.string(util.t.r0DLNm);
        const intl2 = util.intl;
        obj11.body = intl2.string(util.t.Fqqbhg);
        const intl3 = util.intl;
        obj11.confirmText = intl3.string(util.t.BddRzS);
        AlertActionCreatorsDefault.show(obj11);
      }
    };
  }
  let obj3 = { accessibilityRole: str2, style: tmp8, color: null, gradientColors: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj3.color = textColor;
  let tmp16;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp16 = processColorStringsArray;
    }
  }
  obj3.gradientColors = tmp16;
  obj3.onPress = fn;
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj4 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_15(node(tmp4[24]).RoleDot, obj4);
  }
  const items2 = [tmp2];
  const tmp3Result5 = node(guildId[33]);
  items2[1] = node(guildId[30]).smartOutput(node, styles.output, state);
  obj3.children = items2;
  return closure_16(MarkupText, obj3, state.key);
}
function MarkupBlockQuote(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  if (!blockQuote) {
    blockQuote = closure_20().blockQuote;
  }
  const obj = { style: blockQuote, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  obj.children = MarkupRulesUtils.smartOutput(node, output, state);
  return __initData(MarkupText, obj, state.key);
}
function MarkupInlineCode(arg0) {
  ({ state, node } = arg0);
  ({ styles, output } = arg0);
  const noStyleAndInteraction = state.noStyleAndInteraction;
  let tmp4 = !noStyleAndInteraction;
  if (!noStyleAndInteraction) {
    tmp4 = !state.inLink;
  }
  let str = "text";
  if (tmp4) {
    str = "button";
  }
  const tmp3 = closure_20();
  style = {};
  const merged = Object.assign(styles.inlineCode || closure_20().inlineCode);
  if (state.inLink) {
    delete tmp2[tmp];
  }
  let obj2 = { accessibilityRole: str, style, color: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj2.color = textColor;
  let fn;
  if (tmp4) {
    fn = () => {
      const content = node.content;
      if (typeof content === "string") {
        ClipboardUtils.copy(content);
        const result = ToastUtils.presentCopiedToClipboard();
      }
    };
  }
  obj2.onPress = fn;
  const tmp5 = styles.inlineCode || closure_20().inlineCode;
  obj2.children = node(8213).smartOutput(node, output, state);
  return closure_15(MarkupText, obj2, state.key);
}
function MarkupCodeBlock(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  if (!codeBlock) {
    codeBlock = closure_20().codeBlock;
  }
  const obj = { style: codeBlock, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  const items = [MarkupRulesUtils.smartOutput(node, output, state), "\n"];
  obj.children = items;
  return value2(MarkupText, obj, state.key);
}
function MarkupCustomEmoji(styles) {
  ({ state, node } = styles);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (node.src) {
    let emoji = styles.styles.emoji;
    if (!emoji) {
      emoji = obj.emoji;
    }
    const items1 = [emoji];
    let tmp12 = null;
    if (null != state.customEmojiOffsetY) {
      const obj2 = { transform: null };
      const obj3 = { translateY: state.customEmojiOffsetY };
      const items2 = [obj3];
      obj2.transform = items2;
      tmp12 = obj2;
    }
    const obj4 = { style: null, source: null, enableAnimation: null };
    items1[1] = tmp12;
    obj4.style = items1;
    const obj5 = { uri: node.src };
    obj4.source = obj5;
    let tmp13 = !stateFromStores;
    if (!stateFromStores) {
      tmp13 = setting;
    }
    obj4.enableAnimation = tmp13;
    let tmp4Result = __initData(FastImageDefault, obj4, state.key);
  } else {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj6 = { color: textColor, children: node.alt };
    tmp4Result = __initData(MarkupText, obj6, state.key);
  }
  return tmp4Result;
}
function MarkupChannelMention(state) {
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = closure_20();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: null };
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  const items = [outputResult, ,];
  if (null == node.inContent) {
    items[1] = null;
    items[2] = tmp3(8213).smartOutput(node, output, state);
    obj.children = items;
    const tmp2Result = closure_16(state(4634).Text, obj, state.key);
    let tmp13Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      let obj2 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
      let channelMention = styles.channel;
      if (!channelMention) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention];
      let tmp15 = null;
      if (null != state.mentionPillOffsetY) {
        const obj3 = { transform: null };
        let obj4 = { translateY: state.mentionPillOffsetY };
        const items2 = [obj4];
        obj3.transform = items2;
        tmp15 = obj3;
      }
      items1[1] = tmp15;
      obj2.style = items1;
      let str3 = "auto";
      if (state.noStyleAndInteraction) {
        str3 = "none";
      }
      obj2.pointerEvents = str3;
      obj2.onPress = function onPress() {
        if (!state.noStyleAndInteraction) {
          ({ channelId, messageId } = node);
          if (null != channelId) {
            if (null != messageId) {
              transitionToChannel.transitionToMessage(channelId, messageId);
            } else {
              const channel = ChannelStore.getChannel(channelId);
              let isGuildVocalResult;
              if (channel != null) {
                isGuildVocalResult = channel.isGuildVocal();
              }
              if (isGuildVocalResult) {
                if (obj.canViewChannel(channel)) {
                  if (tmp3) {
                    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.goBack();
                    }
                  }
                  if (tmp4) {
                    ModalActionCreatorsDefault.pop();
                  }
                }
                obj = LinkUtils;
              }
              transitionToChannel.transitionToChannel(channelId);
            }
          }
        }
        return null;
      };
      obj2.children = tmp2Result;
      tmp13Result = closure_15(closure_5, obj2, state.key);
    }
    return tmp13Result;
  } else {
    let obj5 = { themedColor: node(576).colors.MENTION_FOREGROUND, style: null, source: null, size: null };
    const fontScale = closure_4.getFontScale();
    if (fontScale < 1.25) {
      let size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    obj5.style = size;
    obj5.source = node(11707);
    obj5.size = tmp3(1177).Icon.Sizes.CUSTOM;
    closure_15(tmp3(1177).ThemedIcon, obj5);
  }
}
function MarkupAttachmentLink(state) {
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  const tmp = closure_20();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: null };
  const obj2 = { themedColor: node(576).colors.MENTION_FOREGROUND, source: node(13947), size: null };
  const fontScale = closure_4.getFontScale();
  if (fontScale < 1) {
    let SMALL = tmp3(1177).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1177).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1177).Icon.Sizes.SMALL;
  }
  obj2.size = SMALL;
  const items = [closure_15(state(1177).ThemedIcon, obj2), state(8213).smartOutput(node, output, state)];
  obj.children = items;
  const tmp2Result = closure_16(state(4634).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    const obj3 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
    let channelMention = styles.channel;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention];
    let tmp10 = null;
    if (null != state.mentionPillOffsetY) {
      const obj4 = { transform: null };
      const obj5 = { translateY: state.mentionPillOffsetY };
      const items2 = [obj5];
      obj4.transform = items2;
      tmp10 = obj4;
    }
    items1[1] = tmp10;
    obj3.style = items1;
    let str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    obj3.pointerEvents = str3;
    obj3.onPress = function onPress(stopPropagation) {
      if (!state.noStyleAndInteraction) {
        stopPropagation.stopPropagation();
        LinkingDefault.openURL(node.attachmentLink);
      }
    };
    obj3.children = tmp2Result;
    tmp5Result = closure_15(closure_5, obj3, state.key);
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: null };
  let mention = styles.mention;
  const tmp = closure_20();
  if (!mention) {
    mention = tmp.mention;
  }
  obj.style = mention;
  return __initData(MarkupReactCommandRuleDefault, obj, state.key);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, Pressable: hasOwnProperty, View: metroRequire, Text: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_12 } = Constants);
const ChannelConstants = fn(1965);
({ StaticChannelRoute: map1, StaticChannelId: closure_14 } = ChannelConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const regExp = new RegExp(fn(4633).ANSI_CONTROL_SEQUENCE_RE, "g");
let style = {
  emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" },
  guildIcon: { paddingEnd: 2, paddingBottom: 1 },
  list: { paddingTop: 16 },
  listItem: { paddingTop: 4 },
  bullet: { fontFamily: Fonts.CODE_BOLD },
  strong: { fontFamily: Fonts.PRIMARY_BOLD },
};
const createStyles = fn(4638);
let obj3 = {
  link: { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK },
  channelMention: null,
  channelMentionText: null,
  mention: null,
  inlineCode: null,
  codeBlock: null,
  blockQuote: null,
};
let obj4 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
obj3.channelMention = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  borderRadius: 3,
  paddingHorizontal: 2,
  alignItems: "center",
};
let obj5 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  borderRadius: 3,
  paddingHorizontal: 2,
  alignItems: "center",
};
obj3.channelMentionText = { color: nativeDefault.colors.MENTION_FOREGROUND };
let obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj3.mention = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj7 = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj3.inlineCode = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
let obj8 = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
obj3.codeBlock = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
const obj9 = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
obj3.blockQuote = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_20 = createStyles.createStyles(obj3);
let c21 = "  ";
let size = fn(2);
let result = size.fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules() {
  if (styles === undefined) {
    styles = {};
  }
  if (arg1 === undefined) {
    let obj2 = {};
  }
  closure_129_0 = undefined;
  let obj3 = styles;
  if (styles === undefined) {
    obj3 = {};
  }
  closure_129_0 = obj3;
  closure_130_0 = undefined;
  closure_130_1 = undefined;
  if (styles === undefined) {
    styles = {};
  }
  let str = arg2;
  closure_130_0 = styles;
  if (arg2 === undefined) {
    str = "username";
  }
  const react = (node, output, noStyleAndInteraction) => {
    if (noStyleAndInteraction.noStyleAndInteraction) {
      let textColor;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      obj2 = { color: textColor, children: MarkupRulesUtils.smartOutput(node, output, noStyleAndInteraction) };
      let tmpResult = __initData(MarkupText, obj2, noStyleAndInteraction.key);
    } else {
      styles = { state: noStyleAndInteraction, node, output, styles: null };
      styles.styles = styles;
      tmpResult = __initData(MarkupLink, styles, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
  closure_130_1 = str;
  return {
    [closure_0(closure_2[43]).AST_KEY.TEXT]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8213).smartOutput(content, output, textColor);
          content = closure_1_15(MarkupText, obj, textColor.key);
          obj2 = obj(8213);
        }
        return content;
      },
    },
    [closure_0(closure_2[43]).AST_KEY.STRIKETHROUGH]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "line-through" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8213).smartOutput(node, output, textColor);
        return closure_1_15(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.UNDERLINE]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "underline" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8213).smartOutput(node, output, textColor);
        return closure_1_15(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.ITALICS]: {
      react(node, output, textColor) {
        const em = obj.em;
        let str;
        if (em != null) {
          str = em.fontStyle;
        }
        if (str == null) {
          str = "italic";
        }
        obj = { style: { fontStyle: str }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = MarkupRulesUtils.smartOutput(node, output, textColor);
        return __initData(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.STRONG]: {
      react(node, output, textColor) {
        let strong = obj.strong;
        if (!strong) {
          strong = obj.strong;
        }
        obj = { style: strong, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = MarkupRulesUtils.smartOutput(node, output, textColor);
        return __initData(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.LINK]: { react },
    [closure_0(closure_2[43]).AST_KEY.URL]: { react },
    [closure_0(closure_2[43]).AST_KEY.AUTOLINK]: { react },
    [closure_0(closure_2[43]).AST_KEY.LINE_BREAK]: {
      react(arg0, arg1, textColor) {
        let color;
        if (textColor != null) {
          color = textColor.textColor;
        }
        return closure_1_15(MarkupText, { color, children: "\n" }, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.HIGHLIGHT]: {
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8213).smartOutput(node, output, textColor) };
        return closure_1_15(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.BLOCK_QUOTE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return __initData(MarkupBlockQuote, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.PARAGRAPH]: {
      order: 600,
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8213).smartOutput(node, output, textColor) };
        return closure_1_15(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.EMOJI]: {
      react(surrogate, arg1, key) {
        let children = surrogate.surrogate;
        if (!children) {
          children = surrogate.content;
        }
        return closure_1_15(closure_1_7, { children }, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.CUSTOM_EMOJI]: {
      react(node, arg1, state) {
        styles = { state, node, styles };
        return __initData(MarkupCustomEmoji, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SPOILER]: {
      react(node, output, key) {
        obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: null };
        const tmp = SpoilerDefault;
        obj.children = MarkupRulesUtils.smartOutput(node, output, key);
        return __initData(tmp, obj, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.STATIC_ROUTE_LINK]: {
      react(channelId, output, textColor) {
        closure_0 = channelId;
        let obj = MarkupRulesUtils;
        if (obj.isStaticRouteIconType(channelId.channelId)) {
          let SignPostIcon = SignPostIcon2.SignPostIcon;
          channelId = channelId.channelId;
          if (constants.GUILD_HOME !== channelId) {
            if (constants.SERVER_GUIDE !== channelId) {
              if (constants.CHANNEL_BROWSER !== channelId) {
                if (constants.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (constants.LINKED_ROLES === channelId) {
                    SignPostIcon = LinkIcon.LinkIcon;
                  }
                }
              }
              SignPostIcon = ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
            }
            obj2 = {
              accessibilityRole: "button",
              style: obj.staticRouteLink,
              color: null,
              onPress: null,
              children: null,
            };
            textColor = undefined;
            if (textColor != null) {
              textColor = textColor.textColor;
            }
            obj2.color = textColor;
            obj2.onPress = function onPress() {
              ({ guildId, channelId } = closure_0);
              guild = guild.getGuild(guildId);
              let hasItem = null != guildId && null != guild;
              if (hasItem) {
                const features = guild.features;
                hasItem = features.has(constants.COMMUNITY);
              }
              if (hasItem) {
                if (!tmp4) {
                  obj = obj(4649);
                  const result = obj.transitionToStaticChannelRoute(guildId, constants2.GUILD_HOME);
                }
                tmp4 = channelId !== constants3.GUILD_HOME && channelId !== constants3.SERVER_GUIDE;
              }
            };
            const obj3 = { style: obj.staticRouteLinkIcon, size: "sm" };
            const items = [__initData(SignPostIcon, obj3), MarkupRulesUtils.smartOutput(channelId, output, textColor)];
            obj2.children = items;
            return value2(MarkupText, obj2, textColor.key);
          }
          SignPostIcon = SignPostIcon2.SignPostIcon;
        } else {
          return null;
        }
      },
    },
    [closure_0(closure_2[43]).AST_KEY.INLINE_CODE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return __initData(MarkupInlineCode, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.CODE_BLOCK]: {
      parse(arg0, arg1, arg2) {
        obj = obj2(5083).RULES[obj(undefined, 5081).AST_KEY.CODE_BLOCK];
        const parsed = obj.parse(arg0, arg1, arg2);
        if ("ansi" === str.toLowerCase()) {
          const content = parsed.content;
          parsed.content = content.replaceAll(regExp, "");
        }
        return parsed;
      },
      react(node, output, state) {
        styles = { styles, state, node, output };
        return __initData(MarkupCodeBlock, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.MENTION]: {
      react: (node, output, state) => {
        styles = { roleStyle: obj2, state, node, output, styles };
        return __initData(MarkupMention, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.CHANNEL_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return __initData(MarkupChannelMention, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.ATTACHMENT_LINK]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return __initData(MarkupAttachmentLink, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SOUNDBOARD]: {
      react(node, output, key) {
        const obj = { variant: "text-md/bold", children: null };
        const items = ["<sound:", obj(8213).smartOutput(node, output, key), ">"];
        obj.children = items;
        return closure_1_16(obj(4634).Text, obj, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.GUILD]: {
      react(icon, output, textColor) {
        obj = obj(1364);
        let num = 2;
        if (!obj.isAndroid()) {
          let num3 = 0;
          if (closure_1_4.getFontScale() < 1.5) {
            num3 = 1;
          }
          num = num3;
        }
        if (null == icon.icon) {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          obj2 = { color: textColor, children: null };
          const obj3 = { style: style.guildIcon, children: null };
          const items = [closure_1_15(closure_1_6, obj3)];
          let textColor1;
          if (textColor != null) {
            textColor1 = textColor.textColor;
          }
          const obj4 = { color: textColor1, children: tmp(8213).smartOutput(icon, output, textColor) };
          items[1] = closure_1_15(MarkupText, obj4);
          obj2.children = items;
          return closure_1_16(MarkupText, obj2, textColor.key);
        } else {
          const obj5 = { style: null, icon: null, size: null };
          const obj6 = { top: num };
          obj5.style = obj6;
          obj5.icon = icon.icon;
          const fontScale = closure_1_4.getFontScale();
          if (fontScale < 1) {
            let XXSMALL = tmp(5670).GuildIconSizes.XXXSMALL;
          } else if (fontScale < 1.25) {
            XXSMALL = tmp(5670).GuildIconSizes.XXSMALL_12;
          } else {
            XXSMALL = tmp(5670).GuildIconSizes.XXSMALL;
          }
          obj5.size = XXSMALL;
          closure_1_15(obj2(5670), obj5);
          const tmp6 = obj2(5670);
        }
      },
    },
    [closure_0(closure_2[43]).AST_KEY.CHANNEL]: {
      react(iconType, output, textColor) {
        let str = iconType.iconType;
        if (str == null) {
          str = "text";
        }
        let num = 2;
        if ("text" === str) {
          num = 0;
        }
        const obj = { themedColor: obj2(576).colors.MENTION_FOREGROUND, source: null, size: null, style: null };
        obj2 = obj(5113);
        obj.source = obj2.getChannelMentionIcon(str);
        const fontScale = closure_1_4.getFontScale();
        if (fontScale < 1) {
          let SMALL = tmp2(1177).Icon.Sizes.EXTRA_SMALL_10;
        } else if (fontScale < 1.25) {
          SMALL = tmp2(1177).Icon.Sizes.EXTRA_SMALL;
        } else {
          SMALL = tmp2(1177).Icon.Sizes.SMALL;
        }
        obj.size = SMALL;
        obj.style = { top: 1 };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj3 = { color: textColor, children: null };
        const tmpResult = closure_1_15(obj(1177).ThemedIcon, obj);
        const items = [
          closure_1_15(closure_1_6, { style: { paddingEnd: num }, children: closure_1_15(obj(1177).ThemedIcon, obj) }),
        ];
        const obj4 = { style: { paddingEnd: num }, children: closure_1_15(obj(1177).ThemedIcon, obj) };
        items[1] = obj(8213).smartOutput(iconType, output, textColor);
        obj3.children = items;
        return closure_1_16(MarkupText, obj3, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.COMMAND_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return __initData(MarkupCommandMention, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.GAME_MENTION]: {
      react(node, arg1, state) {
        return closure_1_15(obj2(13952), { node, state }, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.TIMESTAMP]: {
      react(node, arg1, key) {
        obj = { node, style: obj.timestamp };
        return __initData(TimestampDefault, obj, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.LIST]: {
      react(start, arg1, level) {
        closure_1 = arg1;
        dependencyMap = level;
        const start2 = start;
        closure_5 = null != start.start ? start.start : level.start;
        if (level.formatInline) {
          let textColor;
          if (level != null) {
            textColor = level.textColor;
          }
          obj2 = { color: textColor, children: null };
          let items = start.items;
          obj2.children = items.map((item, index) => {
            let str = "\u2022 ";
            if (true === start.ordered) {
              str = "\u2022 ";
              if (null != closure_5) {
                const _HermesInternal = HermesInternal;
                str = "" + closure_5 + index + ". ";
              }
            }
            const children = [str, ,];
            const obj = {};
            const merged = Object.assign(level);
            obj.key = "" + level.key + "-" + index;
            children[1] = closure_1(item, obj);
            let str4 = " ";
            if (index !== start.items.length - 1) {
              str4 = closure_2_21;
            }
            children[2] = str4;
            return closure_2_16(React.Fragment, { children }, "list-" + level.key + "-item-" + index);
          });
          let _HermesInternal2 = HermesInternal;
          return closure_15(closure_19, obj2, "list-" + level.key);
        } else {
          let items1 = start.items;
          let mapped = items1.map((arr, index) => {
            start = arr;
            if (0 !== num) {
              obj2 = {};
              const merged = Object.assign(level);
              const _HermesInternal2 = HermesInternal;
              let str5 = "";
              obj2.key = "" + level.key + "-" + index;
              obj2.level = tmp + 1;
              let sum = closure_5;
              if (null != closure_5) {
                sum = closure_5 + 1;
              }
              obj2.start = sum;
              const obj3 = { style: list.listItem, variant: "text-sm/medium", children: null };
              const obj4 = { style: list.bullet, color: null, children: null };
              let textColor;
              if (level != null) {
                textColor = level.textColor;
              }
              obj4.color = textColor;
              let repeatResult = str5;
              if (tmp > 0) {
                repeatResult = closure_1_21.repeat(tmp);
              }
              const items = [repeatResult, "\u26AC "];
              obj4.children = items;
              const _HermesInternal3 = HermesInternal;
              const items1 = [closure_1_16(closure_1_19, obj4, "list-" + level.key + "-item-" + index + "-bullet"), ,];
              const _Array = Array;
              if (Array.isArray(arr)) {
                let mapped = arr.map((type, index) => {
                  let str = tmp;
                  const sum = index + 1;
                  if ("list" === type.type) {
                    str = "\n";
                  }
                  let str2 = sum === closure_0.length;
                  const children = [str, obj2(type, obj2)];
                  if (str2) {
                    str2 = !tmp;
                  }
                  if (str2) {
                    str2 = "\n";
                  }
                  children[2] = str2;
                  return closure_3_16(React.Fragment, { children }, index);
                });
              } else {
                mapped = obj2(arr, obj2);
              }
              items1[1] = mapped;
              if (start2.items.length !== index + 1) {
                str5 = closure_1_21;
              }
              items1[2] = str5;
              obj3.children = items1;
              const _HermesInternal4 = HermesInternal;
              return closure_1_16(start(level[11]).Text, obj3, "list-" + level.key + "-item-" + index);
            } else {
              let str = start2.ordered;
              if (typeof str === "boolean") {
                if (start2.ordered) {
                  str = closure_5;
                }
                const _HermesInternal = HermesInternal;
                const sum1 = str + index;
                str = "";
                let str2 = "" + sum1 + ". ";
              }
              str2 = "\u25CF ";
              if (obj.isAndroid()) {
                str2 = "\u2022 ";
              }
              obj = start(level[49]);
            }
          });
          let obj = { style: list.list, variant: "text-sm/medium", children: mapped };
          let _HermesInternal = HermesInternal;
          return closure_15(start(4634).Text, obj, "list-" + level.key);
        }
      },
    },
    [closure_0(closure_2[43]).AST_KEY.HEADING]: {
      react(level, output, formatInline) {
        if (formatInline.formatInline) {
          let textColor;
          if (formatInline != null) {
            textColor = formatInline.textColor;
          }
          obj2 = { variant: "text-sm/semibold", color: textColor, children: null };
          const obj3 = {};
          const merged = Object.assign(formatInline);
          obj3.textVariant = "text-sm/semibold";
          const items = [obj(8213).smartOutput(level, output, obj3), " "];
          obj2.children = items;
          return closure_1_16(MarkupText, obj2, formatInline.key);
        } else {
          let str = "heading-xl/bold";
          if (1 !== level.level) {
            let str2 = "heading-md/bold";
            if (2 === level.level) {
              str2 = "heading-lg/bold";
            }
            str = str2;
          }
          obj = { variant: str, color: null, children: null };
          let str3 = "text-strong";
          if (formatInline.forceWhite) {
            str3 = "text-overlay-light";
          }
          obj.color = str3;
          const obj4 = {};
          const merged1 = Object.assign(formatInline);
          obj4.textVariant = str;
          const items1 = [obj(8213).smartOutput(level, output, obj4), "\n"];
          obj.children = items1;
          return closure_1_16(obj(4634).Text, obj, formatInline.key);
        }
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SUBTEXT]: {
      react(node, output, key) {
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items = [obj(8213).smartOutput(node, output, key), "\n"];
        obj.children = items;
        return closure_1_16(obj(4634).Text, obj, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SILENT_PREFIX]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8213).smartOutput(content, output, textColor);
          content = closure_1_15(MarkupText, obj, textColor.key);
          obj2 = obj(8213);
        }
        return content;
      },
    },
  };
}
export { MarkupText };
export const plainMentionRenderer = function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = MarkupRulesUtils.smartOutput(content, output, state);
  }
  return content;
};
export const plainSpoilerRenderer = function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if (typeof content.content === "string") {
    str = content.content.replace(/[^\n]/g, "\u2588");
  }
  return str;
};
export const createFetchingGameMentionRule = fn(13952).createFetchingGameMentionRule;
