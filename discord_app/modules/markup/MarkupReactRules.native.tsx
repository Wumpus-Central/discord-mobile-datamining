// === Module 5750: MarkupReactRules ===

// Module 5750 (MarkupReactRules)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import UserSettings from "UserSettings" /* 4834 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkUtils from "LinkUtils" /* 5649 */;
import LinkingDefault from "Linking" /* 5704 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import FastImageDefault from "FastImage" /* 5712 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8563 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10161 */;
import SpoilerDefault from "Spoiler" /* 11036 */;
import TimestampDefault from "Timestamp" /* 11038 */;
import MarkupReactCommandRuleDefault from "MarkupReactCommandRule" /* 11463 */;
import openStaticChannelRouteDefault from "openStaticChannelRoute" /* 11539 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;

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
    return jsx(closure_0(closure_2[9]).Text, obj);
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
  if (link == null) {
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
            return node(10106).isLinkTrusted(formatResult);
          }
      };
      node(8931).handleClick(obj);
      const obj2 = node(8931);
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
  tmp = closure_16();
  let obj2 = {};
  const merged = Object.assign(state);
  obj2.inLink = true;
  obj.children = node(8563).smartOutput(node, output, obj2);
  return closure_12(node(5619).Text, obj, state.key);
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
  const tmp = closure_16();
  const items = [GuildRoleStore];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = node(guildId[29]).useStateFromStores(items, () => {
    let role = null;
    if (closure_3) {
      role = GuildRoleStore.getRole(guildId, roleId);
    }
    return role;
  }, items1);
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
  let mention = styles.mention;
  if (mention == null) {
    mention = tmp.mention;
  }
  let tmp8 = tmp2;
  if (tmp2) {
    tmp8 = null != colorString;
  }
  if (tmp8) {
    tmp8 = "username" === roleStyle;
  }
  if (tmp8) {
    let obj2 = { color: colorString, backgroundColor: null };
    const mention2 = styles.mention;
    let backgroundColor;
    if (mention2 != null) {
      backgroundColor = mention2.backgroundColor;
    }
    if (backgroundColor == null) {
      backgroundColor = node(tmp4[30]).hexWithOpacity(colorString, 0.1);
      const tmp3Result = node(tmp4[30]);
    }
    obj2.backgroundColor = backgroundColor;
    mention = obj2;
  }
  let obj = node(guildId[29]);
  const processColorStringsArray = node(guildId[31]).useProcessColorStringsArray(colorStrings);
  const tmp3Result4 = node(guildId[31]);
  let str2 = "button";
  const isRoleStyleAndRoleColorsEligibleForERC = node(guildId[31]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, userId, roleStyle, processColorStringsArray);
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
          obj5.openLazy(asyncRequireImpl(11583, dependencyMap.paths), "RoleMembersActionSheet", obj3, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          const obj2 = ActionSheetActionCreatorsDefault;
          const tmp12 = asyncRequireImpl(11583, dependencyMap.paths);
          const obj8 = { guildId: node.guildId, roleId: SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(node.guildId), channelId: node.channelId };
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
  let obj3 = { accessibilityRole: str2, style: mention, color: null, gradientColors: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj3.color = textColor;
  let tmp15;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp15 = processColorStringsArray;
    }
  }
  obj3.gradientColors = tmp15;
  obj3.onPress = fn;
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    let obj4 = { guildId, color: colorString, colors: colorStrings, size: "small" };
    tmp2 = closure_12(node(tmp4[22]).RoleDot, obj4);
  }
  const items2 = [tmp2, ];
  const tmp3Result5 = node(guildId[31]);
  items2[1] = node(guildId[28]).smartOutput(node, styles.output, state);
  obj3.children = items2;
  return closure_13(MarkupText, obj3, state.key);
}
function MarkupBlockQuote(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  if (blockQuote == null) {
    blockQuote = closure_16().blockQuote;
  }
  const obj = { style: blockQuote, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  obj.children = MarkupRulesUtils.smartOutput(node, output, state);
  return closure_1_12(MarkupText, obj, state.key);
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
  let inlineCode = styles.inlineCode;
  if (inlineCode == null) {
    inlineCode = tmp3.inlineCode;
  }
  style = {};
  const merged = Object.assign(inlineCode);
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
  tmp3 = closure_16();
  obj2.children = node(8563).smartOutput(node, output, state);
  return closure_12(MarkupText, obj2, state.key);
}
function MarkupCodeBlock(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  if (codeBlock == null) {
    codeBlock = closure_16().codeBlock;
  }
  const obj = { style: codeBlock, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj.color = textColor;
  const items = [MarkupRulesUtils.smartOutput(node, output, state), "\n"];
  obj.children = items;
  return map1(MarkupText, obj, state.key);
}
function MarkupCustomEmoji(styles) {
  ({ state, node } = styles);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (typeof node.src === "string") {
    if ("" !== node.src) {
      let emoji = styles.styles.emoji;
      if (emoji == null) {
        emoji = obj.emoji;
      }
      const items1 = [emoji, ];
      let tmp5 = null;
      if (typeof state.customEmojiOffsetY === "number") {
        const obj2 = { transform: null };
        const obj3 = { translateY: state.customEmojiOffsetY };
        const items2 = [obj3];
        obj2.transform = items2;
        tmp5 = obj2;
      }
      const obj4 = { style: null, source: null, enableAnimation: null };
      items1[1] = tmp5;
      obj4.style = items1;
      const obj5 = { uri: node.src };
      obj4.source = obj5;
      let tmp6 = !stateFromStores;
      if (!stateFromStores) {
        tmp6 = setting;
      }
      obj4.enableAnimation = tmp6;
      let tmp8Result = closure_1_12(FastImageDefault, obj4, state.key);
    }
    return tmp8Result;
  }
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  tmp8Result = closure_1_12(MarkupText, { color: textColor, children: node.alt }, state.key);
  const obj6 = { color: textColor, children: node.alt };
}
function MarkupChannelMention(state) {
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = closure_16();
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
  const items = [outputResult, , ];
  if (null == node.inContent) {
    items[1] = null;
    items[2] = tmp3(8563).smartOutput(node, output, state);
    obj.children = items;
    const tmp2Result = closure_13(state(5619).Text, obj, state.key);
    let tmp13Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      let obj2 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
      let channelMention = styles.channel;
      if (channelMention == null) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
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
      tmp13Result = closure_12(closure_5, obj2, state.key);
    }
    return tmp13Result;
  } else {
    let obj5 = { themedColor: node(575).colors.MENTION_FOREGROUND, style: null, source: null, size: null };
    const fontScale = closure_4.getFontScale();
    if (fontScale < 1.25) {
      let size = { width: 8, height: 8 };
    } else {
      size = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    obj5.style = size;
    obj5.source = node(11556);
    obj5.size = tmp3(1188).Icon.Sizes.CUSTOM;
    closure_12(tmp3(1188).ThemedIcon, obj5);
  }
}
function MarkupStaticRouteLink(state) {
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  let tmp = closure_16();
  let SignPostIcon = state(15618).SignPostIcon;
  const channelId = node.channelId;
  if (StaticChannelId.GUILD_HOME !== channelId) {
    if (StaticChannelId.SERVER_GUIDE !== channelId) {
      if (StaticChannelId.CHANNEL_BROWSER !== channelId) {
        if (StaticChannelId.CUSTOMIZE_COMMUNITY !== channelId) {
          if (StaticChannelId.LINKED_ROLES === channelId) {
            SignPostIcon = tmp2(5722).LinkIcon;
          }
        }
      }
      SignPostIcon = tmp2(15620).ChannelListMagnifyingGlassIcon;
    }
    let str = "button";
    if (state.noStyleAndInteraction) {
      str = "text";
    }
    let str2 = variants.channelMentionText;
    if (str2 == null) {
      str2 = "text-xs/medium";
    }
    let obj = { variant: str2, style: tmp.channelMentionText, children: null };
    const obj2 = { style: obj.staticRouteLinkIcon, children: null };
    const obj3 = { color: node(575).colors.MENTION_FOREGROUND, size: null };
    const fontScale = closure_4.getFontScale();
    let str3 = "xxs";
    if (fontScale >= 1) {
      let str4 = "sm";
      if (fontScale < 1.25) {
        str4 = "xs";
      }
      str3 = str4;
    }
    obj3.size = str3;
    obj2.children = closure_12(SignPostIcon, obj3);
    const items = [closure_12(closure_6, obj2), tmp2(8563).smartOutput(node, output, state)];
    obj.children = items;
    const tmp5Result = closure_13(tmp2(5619).Text, obj, state.key);
    if (state.disablePressableChannelMention) {
      return tmp5Result;
    } else {
      let channelMention = styles.channel;
      if (channelMention == null) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
      let tmp14 = null;
      if (null != state.mentionPillOffsetY) {
        const obj4 = { transform: null };
        const obj5 = { translateY: state.mentionPillOffsetY };
        const items2 = [obj5];
        obj4.transform = items2;
        tmp14 = obj4;
      }
      items1[1] = tmp14;
      if (null == node.guildId) {
        const obj6 = { style: items1, children: tmp5Result };
        let tmp7Result = closure_12(closure_6, obj6, state.key);
      } else {
        const obj7 = { accessibilityRole: str, style: items1, pointerEvents: null, onPress: null, children: null };
        let str5 = "auto";
        if (state.noStyleAndInteraction) {
          str5 = "none";
        }
        obj7.pointerEvents = str5;
        obj7.onPress = function onPress() {
          let tmp = null;
          if (!state.noStyleAndInteraction) {
            const obj = { guildId: null, staticRoute: null, itemId: null };
            ({ guildId: obj.guildId, channelId: obj.staticRoute, itemId: obj.itemId } = node);
            tmp = openStaticChannelRouteDefault(obj);
          }
          return tmp;
        };
        obj7.children = tmp5Result;
        tmp7Result = closure_12(closure_5, obj7, state.key);
      }
      return tmp7Result;
    }
    const tmp2Result = tmp2(8563);
  }
  SignPostIcon = tmp2(15618).SignPostIcon;
}
function MarkupAttachmentLink(state) {
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  const tmp = closure_16();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { variant: str2, style: tmp.channelMentionText, children: null };
  const obj2 = { themedColor: node(575).colors.MENTION_FOREGROUND, source: node(15622), size: null };
  const fontScale = closure_4.getFontScale();
  if (fontScale < 1) {
    let SMALL = tmp3(1188).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1188).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1188).Icon.Sizes.SMALL;
  }
  obj2.size = SMALL;
  const items = [closure_12(state(1188).ThemedIcon, obj2), state(8563).smartOutput(node, output, state)];
  obj.children = items;
  const tmp2Result = closure_13(state(5619).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    const obj3 = { accessibilityRole: str, style: null, pointerEvents: null, onPress: null, children: null };
    let channelMention = styles.channel;
    if (channelMention == null) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention, ];
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
    tmp5Result = closure_12(closure_5, obj3, state.key);
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: null };
  let mention = styles.mention;
  const tmp = closure_16();
  if (mention == null) {
    mention = tmp.mention;
  }
  obj.style = mention;
  return closure_1_12(MarkupReactCommandRuleDefault, obj, state.key);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, Pressable: hasOwnProperty, View: metroRequire, Text: closure_7 } = get_ActivityIndicator);
const EMOJI_CHAT_SIZE = fn(1072).EMOJI_CHAT_SIZE;
const StaticChannelId = fn(4865).StaticChannelId;
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let style = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, staticRouteLinkIcon: { paddingEnd: 2, top: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: { fontFamily: Fonts.CODE_BOLD }, strong: { fontFamily: Fonts.PRIMARY_BOLD } };
const createStyles = fn(5009);
let obj3 = { link: { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK }, channelMention: null, channelMentionText: null, mention: null, inlineCode: null, codeBlock: null, blockQuote: null };
let obj4 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.TEXT_LINK };
obj3.channelMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
let obj5 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj3.channelMentionText = { color: nativeDefault.colors.MENTION_FOREGROUND };
let obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND };
obj3.mention = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
let obj7 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
obj3.inlineCode = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
let obj8 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj3.codeBlock = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
const obj9 = { fontFamily: Fonts.CODE_BOLD, color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_CODE };
obj3.blockQuote = { borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_16 = createStyles.createStyles(obj3);
let c17 = "  ";
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
      let tmpResult = closure_2_12(MarkupText, obj2, noStyleAndInteraction.key);
    } else {
      styles = { state: noStyleAndInteraction, node, output, styles: null };
      styles.styles = styles;
      tmpResult = closure_2_12(MarkupLink, styles, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
  closure_130_1 = str;
  return {
    [closure_0(closure_2[45]).AST_KEY.TEXT]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8563).smartOutput(content, output, textColor);
          content = closure_1_12(MarkupText, obj, textColor.key);
          obj2 = obj(8563);
        }
        return content;
      }
    },
    [closure_0(closure_2[45]).AST_KEY.STRIKETHROUGH]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "line-through" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8563).smartOutput(node, output, textColor);
        return closure_1_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.UNDERLINE]: {
      react(node, output, textColor) {
        const obj = { style: { textDecorationLine: "underline" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj.color = textColor;
        obj.variant = textColor.textVariant;
        obj.children = obj(8563).smartOutput(node, output, textColor);
        return closure_1_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.ITALICS]: {
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
        return closure_2_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.STRONG]: {
      react(node, output, textColor) {
        let strong = obj.strong;
        if (strong == null) {
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
        return closure_2_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.LINK]: { react },
    [closure_0(closure_2[45]).AST_KEY.URL]: { react },
    [closure_0(closure_2[45]).AST_KEY.AUTOLINK]: { react },
    [closure_0(closure_2[45]).AST_KEY.LINE_BREAK]: {
      react(arg0, arg1, textColor) {
        let color;
        if (textColor != null) {
          color = textColor.textColor;
        }
        return closure_1_12(MarkupText, { color, children: "\n" }, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.HIGHLIGHT]: {
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8563).smartOutput(node, output, textColor) };
        return closure_1_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.BLOCK_QUOTE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return closure_2_12(MarkupBlockQuote, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.PARAGRAPH]: {
      order: 600,
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8563).smartOutput(node, output, textColor) };
        return closure_1_12(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.EMOJI]: {
      react(surrogate, arg1, key) {
        let children = surrogate.surrogate;
        if (!children) {
          children = surrogate.content;
        }
        return closure_1_12(closure_1_7, { children }, key.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.CUSTOM_EMOJI]: {
      react(node, arg1, state) {
        styles = { state, node, styles };
        return closure_2_12(MarkupCustomEmoji, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.SPOILER]: {
      react(id, output, key) {
        obj = { id: id.id, spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: null };
        const tmp = SpoilerDefault;
        obj.children = MarkupRulesUtils.smartOutput(id, output, key);
        return closure_2_12(tmp, obj, key.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.STATIC_ROUTE_LINK]: {
      react(channelId, output, state) {
        styles = MarkupRulesUtils;
        let tmp = null;
        if (styles.isStaticRouteIconType(channelId.channelId)) {
          obj2 = { styles, variants: null, state: null, node: null, output: null };
          obj2.variants = obj2;
          obj2.state = state;
          obj2.node = channelId;
          obj2.output = output;
          tmp = closure_2_12(MarkupStaticRouteLink, obj2, state.key);
        }
        return tmp;
      }
    },
    [closure_0(closure_2[45]).AST_KEY.INLINE_CODE]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return closure_2_12(MarkupInlineCode, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.CODE_BLOCK]: {
      parse(arg0, arg1, arg2) {
        obj = obj2(6029).RULES[obj(undefined, 6027).AST_KEY.CODE_BLOCK];
        const parsed = obj.parse(arg0, arg1, arg2);
        if ("ansi" === str.toLowerCase()) {
          const content = parsed.content;
          parsed.content = content.replaceAll(obj(8563).ANSI_CONTROL_SEQUENCE_RE_GLOBAL, "");
        }
        return parsed;
      },
      react(node, output, state) {
        styles = { styles, state, node, output };
        return closure_2_12(MarkupCodeBlock, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.MENTION]: {
      react: (node, output, state) => {
        styles = { roleStyle: obj2, state, node, output, styles };
        return closure_2_12(MarkupMention, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.CHANNEL_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return closure_2_12(MarkupChannelMention, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.ATTACHMENT_LINK]: {
      react(node, output, state) {
        styles = { styles, state, node, output, variants: obj2 };
        return closure_2_12(MarkupAttachmentLink, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.SOUNDBOARD]: {
      react(node, output, key) {
        const obj = { variant: "text-md/bold", children: null };
        const items = ["<sound:", obj(8563).smartOutput(node, output, key), ">"];
        obj.children = items;
        return closure_1_13(obj(5619).Text, obj, key.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.GUILD]: {
      react(icon, output, textColor) {
        obj = obj(1376);
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
          const items = [closure_1_12(closure_1_6, obj3), ];
          let textColor1;
          if (textColor != null) {
            textColor1 = textColor.textColor;
          }
          const obj4 = { color: textColor1, children: tmp(8563).smartOutput(icon, output, textColor) };
          items[1] = closure_1_12(MarkupText, obj4);
          obj2.children = items;
          return closure_1_13(MarkupText, obj2, textColor.key);
        } else {
          const obj5 = { style: null, icon: null, size: null };
          const obj6 = { top: num };
          obj5.style = obj6;
          obj5.icon = icon.icon;
          const fontScale = closure_1_4.getFontScale();
          if (fontScale < 1) {
            let XXSMALL = tmp(6951).GuildIconSizes.XXXSMALL;
          } else if (fontScale < 1.25) {
            XXSMALL = tmp(6951).GuildIconSizes.XXSMALL_12;
          } else {
            XXSMALL = tmp(6951).GuildIconSizes.XXSMALL;
          }
          obj5.size = XXSMALL;
          closure_1_12(obj2(6951), obj5);
          const tmp6 = obj2(6951);
        }
      }
    },
    [closure_0(closure_2[45]).AST_KEY.CHANNEL]: {
      react(iconType, output, textColor) {
        let str = iconType.iconType;
        if (str == null) {
          str = "text";
        }
        let num = 2;
        if ("text" === str) {
          num = 0;
        }
        const obj = { themedColor: obj2(575).colors.MENTION_FOREGROUND, source: null, size: null, style: null };
        obj2 = obj(8595);
        obj.source = obj2.getChannelMentionIcon(str);
        const fontScale = closure_1_4.getFontScale();
        if (fontScale < 1) {
          let SMALL = tmp2(1188).Icon.Sizes.EXTRA_SMALL_10;
        } else if (fontScale < 1.25) {
          SMALL = tmp2(1188).Icon.Sizes.EXTRA_SMALL;
        } else {
          SMALL = tmp2(1188).Icon.Sizes.SMALL;
        }
        obj.size = SMALL;
        obj.style = { top: 1 };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        const obj3 = { color: textColor, children: null };
        const tmpResult = closure_1_12(obj(1188).ThemedIcon, obj);
        const items = [closure_1_12(closure_1_6, { style: { paddingEnd: num }, children: closure_1_12(obj(1188).ThemedIcon, obj) }), ];
        const obj4 = { style: { paddingEnd: num }, children: closure_1_12(obj(1188).ThemedIcon, obj) };
        items[1] = obj(8563).smartOutput(iconType, output, textColor);
        obj3.children = items;
        return closure_1_13(MarkupText, obj3, textColor.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.COMMAND_MENTION]: {
      react(node, output, state) {
        styles = { styles, state, node, output };
        return closure_2_12(MarkupCommandMention, styles, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.GAME_MENTION]: {
      react(node, arg1, state) {
        return closure_1_12(obj2(15623), { node, state }, state.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.TIMESTAMP]: {
      react(node, arg1, key) {
        obj = { node, style: obj.timestamp };
        return closure_2_12(TimestampDefault, obj, key.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.LIST]: {
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
            const children = [str, , ];
            const obj = {};
            const merged = Object.assign(level);
            obj.key = "" + level.key + "-" + index;
            children[1] = closure_1(item, obj);
            let str4 = " ";
            if (index !== start.items.length - 1) {
              str4 = closure_2_17;
            }
            children[2] = str4;
            return closure_2_13(React.Fragment, { children }, "list-" + level.key + "-item-" + index);
          });
          let _HermesInternal2 = HermesInternal;
          return closure_12(closure_15, obj2, "list-" + level.key);
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
                repeatResult = closure_1_17.repeat(tmp);
              }
              const items = [repeatResult, "\u26AC "];
              obj4.children = items;
              const _HermesInternal3 = HermesInternal;
              const items1 = [closure_1_13(closure_1_15, obj4, "list-" + level.key + "-item-" + index + "-bullet"), , ];
              const _Array = Array;
              if (Array.isArray(arr)) {
                let mapped = arr.map((type, index) => {
                  let str = tmp;
                  const sum = index + 1;
                  if ("list" === type.type) {
                    str = "\n";
                  }
                  let str2 = sum === closure_0.length;
                  const children = [str, obj2(type, obj2), ];
                  if (str2) {
                    str2 = !tmp;
                  }
                  if (str2) {
                    str2 = "\n";
                  }
                  children[2] = str2;
                  return closure_3_13(React.Fragment, { children }, index);
                });
              } else {
                mapped = obj2(arr, obj2);
              }
              items1[1] = mapped;
              if (start2.items.length !== index + 1) {
                str5 = closure_1_17;
              }
              items1[2] = str5;
              obj3.children = items1;
              const _HermesInternal4 = HermesInternal;
              return closure_1_13(start(level[9]).Text, obj3, "list-" + level.key + "-item-" + index);
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
              obj = start(level[48]);
            }
          });
          let obj = { style: list.list, variant: "text-sm/medium", children: mapped };
          let _HermesInternal = HermesInternal;
          return closure_12(start(5619).Text, obj, "list-" + level.key);
        }
      }
    },
    [closure_0(closure_2[45]).AST_KEY.HEADING]: {
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
          const items = [obj(8563).smartOutput(level, output, obj3), " "];
          obj2.children = items;
          return closure_1_13(MarkupText, obj2, formatInline.key);
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
          const items1 = [obj(8563).smartOutput(level, output, obj4), "\n"];
          obj.children = items1;
          return closure_1_13(obj(5619).Text, obj, formatInline.key);
        }
      }
    },
    [closure_0(closure_2[45]).AST_KEY.SUBTEXT]: {
      react(node, output, key) {
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items = [obj(8563).smartOutput(node, output, key), "\n"];
        obj.children = items;
        return closure_1_13(obj(5619).Text, obj, key.key);
      }
    },
    [closure_0(closure_2[45]).AST_KEY.SILENT_PREFIX]: {
      react(content, output, textColor) {
        if (typeof content.content === "string") {
          content = content.content;
        } else {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          const obj = { color: textColor, children: null };
          obj.children = obj(8563).smartOutput(content, output, textColor);
          content = closure_1_12(MarkupText, obj, textColor.key);
          obj2 = obj(8563);
        }
        return content;
      }
    }
  };
};
export { MarkupText };
export function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = MarkupRulesUtils.smartOutput(content, output, state);
  }
  return content;
}
export function plainSpoilerRenderer(content) {
  let str = "\u2588\u2588\u2588";
  if (typeof content.content === "string") {
    str = content.content.replace(/[^\n]/g, "\u2588");
  }
  return str;
}
export const createFetchingGameMentionRule = fn(15623).createFetchingGameMentionRule;