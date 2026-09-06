// discord_app/modules/markup/MarkupReactRules.native.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import UserSettings from "../user_settings/UserSettings.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ToastUtils from "../toast/native/ToastUtils.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
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
  obj = { variant: str, accessibilityRole: "link", style: null, onPress: null, onLongPress: null, children: null };
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
            formatResult = tmp9(1365).format(url);
            const tmp9Result = tmp9(1365);
          }
        }
      }
      tmp = formatResult;
      tmp9 = importDefault;
    }
    node = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      obj = {
        href: tmp,
        onConfirm() {
          return LinkingDefault.openURL(formatResult);
        },
        trusted() {
          return node(11614).isLinkTrusted(formatResult);
        },
      };
      node(8370).handleClick(obj);
      const obj2 = node(8370);
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
            obj = URLUtilsDefault;
            formatResult = obj.format(url);
          }
        }
      }
      tmp = formatResult;
    }
    if (null != tmp) {
      stopPropagation.stopPropagation();
      obj = { urlString: tmp };
      showLongPressURLActionSheetDefault(obj);
    }
  };
  tmp = closure_20();
  const tmp2 = closure_15;
  obj = {};
  const merged = Object.assign(state);
  obj.inLink = true;
  obj.children = node(8096).smartOutput(node, output, obj);
  return tmp2(node(4556).Text, obj, state.key);
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
  obj = node(guildId[31]);
  const items = [GuildRoleStore];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = obj.useStateFromStores(
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
  let tmp8 = styles.mention || closure_20().mention;
  let tmp9 = tmp2;
  if (tmp2) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    tmp9 = "username" === roleStyle;
  }
  if (tmp9) {
    obj = { color: colorString, backgroundColor: null };
    const mention = styles.mention;
    let backgroundColor;
    if (mention != null) {
      backgroundColor = mention.backgroundColor;
    }
    if (backgroundColor == null) {
      let tmp3Result = tmp3(tmp4[32]);
      backgroundColor = tmp3Result.hexWithOpacity(colorString, 0.1);
    }
    obj.backgroundColor = backgroundColor;
    tmp8 = obj;
  }
  tmp3Result = tmp3(tmp4[33]);
  const processColorStringsArray = tmp3Result.useProcessColorStringsArray(colorStrings);
  const tmp = closure_20();
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
        if (null != tmp.guildId) {
          const obj5 = ActionSheetActionCreatorsDefault;
          obj = { guildId: null, roleId: null, channelId: null };
          ({ guildId: obj6.guildId, roleId: obj6.roleId, channelId: obj6.channelId } = tmp);
          obj5.openLazy(asyncRequireImpl(11587, dependencyMap.paths), "RoleMembersActionSheet", obj, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != tmp.guildId) {
          let obj1 = ActionSheetActionCreatorsDefault;
          const tmp12 = asyncRequireImpl(11587, dependencyMap.paths);
          obj = {
            guildId: tmp.guildId,
            roleId: SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(tmp.guildId),
            channelId: tmp.channelId,
          };
          obj1.openLazy(tmp12, "RoleMembersActionSheet", obj, "stack");
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        obj = { userId, channelId };
        showUserProfileActionSheetDefault(obj);
      } else {
        obj1 = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj1.title = intl.string(util.t.r0DLNm);
        const intl2 = util.intl;
        obj1.body = intl2.string(util.t.Fqqbhg);
        const intl3 = util.intl;
        obj1.confirmText = intl3.string(util.t.BddRzS);
        AlertActionCreatorsDefault.show(obj1);
      }
    };
  }
  obj = { accessibilityRole: str2, style: tmp8, color: null, gradientColors: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  let tmp16;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp16 = processColorStringsArray;
    }
  }
  obj.gradientColors = tmp16;
  obj.onPress = fn;
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj1 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_15(tmp3(tmp4[24]).RoleDot, obj1);
  }
  const items2 = [tmp2];
  const tmp13 = closure_16;
  const tmp14 = MarkupText;
  const tmp3Result1 = node(guildId[33]);
  items2[1] = node(guildId[30]).smartOutput(node, styles.output, state);
  obj.children = items2;
  return tmp13(tmp14, obj, state.key);
}
function MarkupBlockQuote(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  if (!blockQuote) {
    blockQuote = closure_20().blockQuote;
  }
  obj = { style: blockQuote, color: null, children: null };
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
  let style = {};
  const merged = Object.assign(styles.inlineCode || closure_20().inlineCode);
  if (state.inLink) {
    delete tmp2[tmp];
  }
  style = { accessibilityRole: str, style, color: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  style.color = textColor;
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
  style.onPress = fn;
  const tmp5 = styles.inlineCode || closure_20().inlineCode;
  const tmp7 = closure_15;
  const tmp8 = MarkupText;
  style.children = node(8096).smartOutput(node, output, state);
  return tmp7(tmp8, style, state.key);
}
function MarkupCodeBlock(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  if (!codeBlock) {
    codeBlock = closure_20().codeBlock;
  }
  obj = { style: codeBlock, color: null, children: null };
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
  obj = initialize;
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
      obj = { transform: null };
      obj = { translateY: state.customEmojiOffsetY };
      const items2 = [obj];
      obj.transform = items2;
      tmp12 = obj;
    }
    const obj1 = { style: null, source: null, enableAnimation: null };
    items1[1] = tmp12;
    obj1.style = items1;
    const obj2 = { uri: node.src };
    obj1.source = obj2;
    let tmp13 = !stateFromStores;
    if (!stateFromStores) {
      tmp13 = setting;
    }
    obj1.enableAnimation = tmp13;
    let tmp4Result = tmp4(FastImageDefault, obj1, state.key);
  } else {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj3 = { color: textColor, children: node.alt };
    tmp4Result = tmp4(MarkupText, obj3, state.key);
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
  obj = { variant: str2, style: tmp.channelMentionText, children: null };
  let outputResult = null;
  if (null != node.inContent) {
    outputResult = output(node.inContent, state);
  }
  const items = [outputResult, ,];
  if (null == node.inContent) {
    items[1] = null;
    items[2] = tmp3(8096).smartOutput(node, output, state);
    obj.children = items;
    const tmp2Result = closure_16(state(4556).Text, obj, state.key);
    let tmp13Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      obj = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
      let channelMention = styles.channel;
      if (!channelMention) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention];
      let tmp15 = null;
      if (null != state.mentionPillOffsetY) {
        obj = { transform: null };
        const obj1 = { translateY: state.mentionPillOffsetY };
        const items2 = [obj1];
        obj.transform = items2;
        tmp15 = obj;
      }
      items1[1] = tmp15;
      obj.style = items1;
      let str3 = "auto";
      if (state.noStyleAndInteraction) {
        str3 = "none";
      }
      obj.pointerEvents = str3;
      obj.onPress = function onPress() {
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
                    let arr = ModalActionCreatorsDefault;
                    arr = arr.pop();
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
      obj.children = tmp2Result;
      tmp13Result = closure_15(closure_5, obj, state.key);
    }
    return tmp13Result;
  } else {
    let obj2 = { themedColor: node(576).colors.MENTION_FOREGROUND, style: null, source: null, size: null };
    const fontScale = closure_4.getFontScale();
    if (fontScale < 1.25) {
      let size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    obj2.style = size;
    obj2.source = node(11565);
    obj2.size = tmp3(1178).Icon.Sizes.CUSTOM;
    closure_15(tmp3(1178).ThemedIcon, obj2);
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
  obj = { variant: str2, style: tmp.channelMentionText, children: null };
  obj = { themedColor: node(576).colors.MENTION_FOREGROUND, source: node(13840), size: null };
  const fontScale = closure_4.getFontScale();
  if (fontScale < 1) {
    let SMALL = tmp3(1178).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1178).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1178).Icon.Sizes.SMALL;
  }
  obj.size = SMALL;
  const items = [closure_15(state(1178).ThemedIcon, obj), state(8096).smartOutput(node, output, state)];
  obj.children = items;
  const tmp2Result = closure_16(state(4556).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    obj = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
    let channelMention = styles.channel;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention];
    let tmp10 = null;
    if (null != state.mentionPillOffsetY) {
      const obj1 = { transform: null };
      const obj2 = { translateY: state.mentionPillOffsetY };
      const items2 = [obj2];
      obj1.transform = items2;
      tmp10 = obj1;
    }
    items1[1] = tmp10;
    obj.style = items1;
    let str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    obj.pointerEvents = str3;
    obj.onPress = function onPress(stopPropagation) {
      if (!state.noStyleAndInteraction) {
        stopPropagation.stopPropagation();
        LinkingDefault.openURL(node.attachmentLink);
      }
    };
    obj.children = tmp2Result;
    tmp5Result = tmp5(closure_5, obj, state.key);
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  state = state.state;
  ({ node, output, styles } = state);
  obj = { node, output, state, style: null };
  let mention = styles.mention;
  const tmp = closure_20();
  const tmp2 = __initData;
  if (!mention) {
    mention = tmp.mention;
  }
  obj.style = mention;
  return tmp2(MarkupReactCommandRuleDefault, obj, state.key);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, Pressable: hasOwnProperty, View: metroRequire, Text: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_12 } = Constants);
const ChannelConstants = fn(1964);
({ StaticChannelRoute: map1, StaticChannelId: closure_14 } = ChannelConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const regExp = new RegExp(fn(4555).ANSI_CONTROL_SEQUENCE_RE, "g");
let link = {
  emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" },
  guildIcon: { paddingEnd: 2, paddingBottom: 1 },
  list: { paddingTop: 16 },
  listItem: { paddingTop: 4 },
  bullet: { fontFamily: Fonts.CODE_BOLD },
  strong: { fontFamily: Fonts.PRIMARY_BOLD },
};
fn(4560);
link = {
  link: null,
  channelMention: null,
  channelMentionText: null,
  mention: null,
  inlineCode: null,
  codeBlock: null,
  blockQuote: null,
};
link = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
link.link = link;
const createStyles = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  borderRadius: 3,
  paddingHorizontal: 2,
  alignItems: "center",
};
link.channelMention = createStyles;
link.channelMentionText = { color: nativeDefault.colors.MENTION_FOREGROUND };
let obj2 = { color: nativeDefault.colors.MENTION_FOREGROUND };
link.mention = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj3 = { color: nativeDefault.unsafe_rawColors.BRAND_500, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
link.inlineCode = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
let obj4 = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
link.codeBlock = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
let obj5 = {
  fontFamily: Fonts.CODE_BOLD,
  color: nativeDefault.colors.TEXT_DEFAULT,
  backgroundColor: nativeDefault.colors.BACKGROUND_CODE,
};
link.blockQuote = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_20 = createStyles.createStyles(link);
let c21 = "  ";
let size = fn(2);
let result = size.fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  closure_129_0 = undefined;
  if (obj === undefined) {
    obj = {};
  }
  closure_129_0 = obj;
  closure_130_0 = undefined;
  closure_130_1 = undefined;
  if (obj === undefined) {
    obj = {};
  }
  let str = arg2;
  closure_130_0 = obj;
  if (arg2 === undefined) {
    str = "username";
  }
  const react = (node, output, noStyleAndInteraction) => {
    if (noStyleAndInteraction.noStyleAndInteraction) {
      let textColor;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      let styles = { color: textColor, children: MarkupRulesUtils.smartOutput(node, output, noStyleAndInteraction) };
      let tmpResult = tmp(MarkupText, styles, noStyleAndInteraction.key);
    } else {
      styles = { state: noStyleAndInteraction, node, output, styles: null };
      styles.styles = styles;
      tmpResult = tmp(MarkupLink, styles, noStyleAndInteraction.key);
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
          obj = { color: textColor, children: null };
          obj.children = obj(8096).smartOutput(content, output, textColor);
          content = closure_1_15(MarkupText, obj, textColor.key);
          const obj2 = obj(8096);
        }
        return content;
      },
    },
    [closure_0(closure_2[43]).AST_KEY.STRIKETHROUGH]: {
      react(node, output, textColor) {
        obj = { style: { textDecorationLine: "line-through" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8096).smartOutput(node, output, textColor);
        return closure_1_15(MarkupText, obj, textColor.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.UNDERLINE]: {
      react(node, output, textColor) {
        obj = { style: { textDecorationLine: "underline" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8096).smartOutput(node, output, textColor);
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
        obj = { color: textColor, children: obj(8096).smartOutput(node, output, textColor) };
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
        obj = { color: textColor, children: obj(8096).smartOutput(node, output, textColor) };
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
        obj = MarkupRulesUtils;
        if (obj.isStaticRouteIconType(channelId.channelId)) {
          let SignPostIcon = tmp(13841).SignPostIcon;
          channelId = channelId.channelId;
          if (constants.GUILD_HOME !== channelId) {
            if (tmp4.SERVER_GUIDE !== channelId) {
              if (tmp4.CHANNEL_BROWSER !== channelId) {
                if (tmp4.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (tmp4.LINKED_ROLES === channelId) {
                    SignPostIcon = tmp(4503).LinkIcon;
                  }
                }
              }
              SignPostIcon = tmp(13843).ChannelListMagnifyingGlassIcon;
            }
            obj = { accessibilityRole: "button", style: null, color: null, onPress: null, children: null };
            obj.style = obj.staticRouteLink;
            textColor = undefined;
            if (textColor != null) {
              textColor = textColor.textColor;
            }
            obj.color = textColor;
            obj.onPress = function onPress() {
              ({ guildId, channelId } = closure_0);
              guild = guild.getGuild(guildId);
              let hasItem = null != guildId && null != guild;
              if (hasItem) {
                const features = guild.features;
                hasItem = features.has(constants.COMMUNITY);
              }
              if (hasItem) {
                if (!tmp4) {
                  obj = obj(4571);
                  const result = obj.transitionToStaticChannelRoute(guildId, constants2.GUILD_HOME);
                }
                tmp4 = channelId !== constants3.GUILD_HOME && channelId !== constants3.SERVER_GUIDE;
              }
            };
            obj = { style: null, size: "sm" };
            obj.style = obj.staticRouteLinkIcon;
            const items = [__initData(SignPostIcon, obj), tmp(8096).smartOutput(channelId, output, textColor)];
            obj.children = items;
            return value2(MarkupText, obj, textColor.key);
          }
          SignPostIcon = tmp(13841).SignPostIcon;
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
        obj = obj(4998).RULES[obj(undefined, 4996).AST_KEY.CODE_BLOCK];
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
        styles = { roleStyle: styles, state, node, output, styles };
        return __initData(MarkupMention, styles, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.CHANNEL_MENTION]: {
      react(node, output, state) {
        variants = { styles: variants, state, node, output, variants };
        return __initData(MarkupChannelMention, variants, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.ATTACHMENT_LINK]: {
      react(node, output, state) {
        variants = { styles: variants, state, node, output, variants };
        return __initData(MarkupAttachmentLink, variants, state.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SOUNDBOARD]: {
      react(node, output, key) {
        obj = { variant: "text-md/bold", children: null };
        const items = ["<sound:", obj(8096).smartOutput(node, output, key), ">"];
        obj.children = items;
        return closure_1_16(obj(4556).Text, obj, key.key);
      },
    },
    [closure_0(closure_2[43]).AST_KEY.GUILD]: {
      react(icon, output, textColor) {
        obj = obj(1115);
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
          obj = { color: textColor, children: null };
          obj = { style: closure_1_18.guildIcon, children: null };
          const items = [closure_1_15(closure_1_6, obj)];
          let textColor1;
          if (textColor != null) {
            textColor1 = textColor.textColor;
          }
          const obj1 = { color: textColor1, children: tmp(8096).smartOutput(icon, output, textColor) };
          items[1] = closure_1_15(MarkupText, obj1);
          obj.children = items;
          return closure_1_16(MarkupText, obj, textColor.key);
        } else {
          const obj2 = { style: null, icon: null, size: null };
          const obj3 = { top: num };
          obj2.style = obj3;
          obj2.icon = icon.icon;
          const fontScale = closure_1_4.getFontScale();
          if (fontScale < 1) {
            let XXSMALL = tmp(5584).GuildIconSizes.XXXSMALL;
          } else if (fontScale < 1.25) {
            XXSMALL = tmp(5584).GuildIconSizes.XXSMALL_12;
          } else {
            XXSMALL = tmp(5584).GuildIconSizes.XXSMALL;
          }
          obj2.size = XXSMALL;
          closure_1_15(obj(5584), obj2);
          const tmp6 = obj(5584);
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
        obj = {
          themedColor: obj(576).colors.MENTION_FOREGROUND,
          source: obj(5028).getChannelMentionIcon(str),
          size: null,
          style: null,
        };
        const fontScale = closure_1_4.getFontScale();
        if (fontScale < 1) {
          let SMALL = tmp2(1178).Icon.Sizes.EXTRA_SMALL_10;
        } else if (fontScale < 1.25) {
          SMALL = tmp2(1178).Icon.Sizes.EXTRA_SMALL;
        } else {
          SMALL = tmp2(1178).Icon.Sizes.SMALL;
        }
        obj.size = SMALL;
        obj.style = { top: 1 };
        textColor = undefined;
        const obj2 = obj(5028);
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: null };
        obj = { style: { paddingEnd: num }, children: closure_1_15(obj(1178).ThemedIcon, obj) };
        const items = [closure_1_15(closure_1_6, obj)];
        const tmp6 = closure_1_16;
        const tmp7 = MarkupText;
        const tmpResult = closure_1_15(obj(1178).ThemedIcon, obj);
        items[1] = obj(8096).smartOutput(iconType, output, textColor);
        obj.children = items;
        return tmp6(tmp7, obj, textColor.key);
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
        obj = { node, state };
        return closure_1_15(obj(13845), obj, state.key);
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
          obj = { color: textColor, children: null };
          let items = start.items;
          obj.children = items.map((item, index) => {
            let str = "\u2022 ";
            if (true === start.ordered) {
              str = "\u2022 ";
              if (null != closure_5) {
                const _HermesInternal = HermesInternal;
                str = "" + closure_5 + index + ". ";
              }
            }
            const children = [str, ,];
            obj = {};
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
          return closure_15(closure_19, obj, "list-" + level.key);
        } else {
          let items1 = start.items;
          let mapped = items1.map((arr, index) => {
            start = arr;
            if (0 !== num) {
              obj = {};
              const merged = Object.assign(level);
              const _HermesInternal2 = HermesInternal;
              let str5 = "";
              obj.key = "" + level.key + "-" + index;
              obj.level = tmp + 1;
              let sum = closure_5;
              if (null != closure_5) {
                sum = closure_5 + 1;
              }
              obj.start = sum;
              obj = { style: closure_1_18.listItem, variant: "text-sm/medium", children: null };
              const obj1 = { style: closure_1_18.bullet, color: null, children: null };
              let textColor;
              if (level != null) {
                textColor = tmp8.textColor;
              }
              obj1.color = textColor;
              let repeatResult = str5;
              if (tmp > 0) {
                repeatResult = closure_1_21.repeat(tmp);
              }
              const items = [repeatResult, "\u26AC "];
              obj1.children = items;
              const _HermesInternal3 = HermesInternal;
              const items1 = [closure_1_16(closure_1_19, obj1, "list-" + level.key + "-item-" + index + "-bullet"), ,];
              const _Array = Array;
              if (Array.isArray(arr)) {
                let mapped = arr.map((type, index) => {
                  let str = tmp;
                  const sum = index + 1;
                  if ("list" === type.type) {
                    str = "\n";
                  }
                  let str2 = sum === closure_0.length;
                  const children = [str, closure_1(type, obj)];
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
                mapped = obj(arr, obj);
              }
              items1[1] = mapped;
              if (start2.items.length !== index + 1) {
                str5 = closure_1_21;
              }
              items1[2] = str5;
              obj.children = items1;
              const _HermesInternal4 = HermesInternal;
              return closure_1_16(start(level[11]).Text, obj, "list-" + level.key + "-item-" + index);
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
              obj = start(level[49]);
              str2 = "\u25CF ";
              if (obj.isAndroid()) {
                str2 = "\u2022 ";
              }
            }
          });
          obj = { style: closure_18.list, variant: "text-sm/medium", children: mapped };
          let _HermesInternal = HermesInternal;
          return closure_15(start(4556).Text, obj, "list-" + level.key);
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
          obj = { variant: "text-sm/semibold", color: textColor, children: null };
          obj = {};
          const merged = Object.assign(formatInline);
          obj.textVariant = "text-sm/semibold";
          const items = [obj(8096).smartOutput(level, output, obj), " "];
          obj.children = items;
          return closure_1_16(MarkupText, obj, formatInline.key);
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
          const obj1 = {};
          const merged1 = Object.assign(formatInline);
          obj1.textVariant = str;
          const items1 = [obj(8096).smartOutput(level, output, obj1), "\n"];
          obj.children = items1;
          return closure_1_16(obj(4556).Text, obj, formatInline.key);
        }
      },
    },
    [closure_0(closure_2[43]).AST_KEY.SUBTEXT]: {
      react(node, output, key) {
        obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items = [obj(8096).smartOutput(node, output, key), "\n"];
        obj.children = items;
        return closure_1_16(obj(4556).Text, obj, key.key);
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
          obj = { color: textColor, children: null };
          obj.children = obj(8096).smartOutput(content, output, textColor);
          content = closure_1_15(MarkupText, obj, textColor.key);
          const obj2 = obj(8096);
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
export const createFetchingGameMentionRule = fn(13845).createFetchingGameMentionRule;
