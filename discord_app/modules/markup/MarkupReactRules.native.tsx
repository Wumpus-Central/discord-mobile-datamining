// discord_app/modules/markup/MarkupReactRules.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import isDiscordProxiedAssetUrlDefault from "../../utils/URLUtils.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import _modDef4090 from "../../lib/native/Linking.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../components_native/common/FastImage.tsx";
import smartOutput from "MarkupRulesUtils.tsx";
import handleTapCommandMentionDefault from "native/MarkupReactCommandRule.tsx";
import showLongPressURLActionSheetDefault from "../links/native/showLongPressURLActionSheet.tsx";
import noop from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../a11y/AccessibilityStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import ME from "../../Constants.tsx";
import { Fonts } from "../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import set from "../channel/ChannelConstants.tsx";

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
    merged = Object.assign(global, Object.create(null));
    obj = { variant: str2, color: str };
    merged1 = Object.assign(merged);
    obj.children = global.children;
    return jsx(require("Text").Text, obj);
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
  obj[2] = link;
  obj[3] = function onPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = isDiscordProxiedAssetUrlDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            formatResult = isDiscordProxiedAssetUrlDefault.format(url);
            const tmp9Result = isDiscordProxiedAssetUrlDefault;
          }
        }
      }
      tmp = formatResult;
    }
    node = tmp;
    if (null != tmp) {
      stopPropagation.stopPropagation();
      const obj = { href: null, onConfirm: null, trusted: null };
      obj[0] = tmp;
      obj[1] = function onConfirm() {
        return _modDef4090.openURL(closure_0);
      };
      obj[2] = function trusted() {
        return formatResult(closure_1_2[28]).isLinkTrusted(closure_0);
      };
      node(dependencyMap[26]).handleClick(obj);
      const obj2 = node(dependencyMap[26]);
    }
  };
  obj[4] = function onLongPress(stopPropagation) {
    const target = node.target;
    let tmp = null;
    if (typeof target === "string") {
      const url = isDiscordProxiedAssetUrlDefault.safeParseWithQuery(target);
      let formatResult = null;
      if (null != url) {
        formatResult = null;
        if (null != url.protocol) {
          formatResult = null;
          if (null != url.hostname) {
            let obj = isDiscordProxiedAssetUrlDefault;
            formatResult = obj.format(url);
          }
        }
      }
      tmp = formatResult;
    }
    if (null != tmp) {
      stopPropagation.stopPropagation();
      obj = { urlString: null };
      obj[0] = tmp;
      showLongPressURLActionSheetDefault(obj);
    }
  };
  tmp = callback2();
  obj = {};
  const merged = Object.assign(state);
  obj.inLink = true;
  obj[5] = node(8308).smartOutput(node, output, obj);
  return callback(node(4734).Text, obj, state.key);
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
  let obj = node(guildId[31]);
  const items = [closure_10];
  const items1 = [guildId, roleId, tmp2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let role = null;
    if (closure_3) {
      role = closure_1_10.getRole(guildId, roleId);
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
  let tmp8 = styles.mention || callback2().mention;
  let tmp9 = tmp2;
  if (tmp2) {
    tmp9 = null != colorString;
  }
  if (tmp9) {
    tmp9 = "username" === roleStyle;
  }
  if (tmp9) {
    obj = { color: null, backgroundColor: null };
    obj[0] = colorString;
    const mention = styles.mention;
    let backgroundColor;
    if (mention != null) {
      backgroundColor = mention.backgroundColor;
    }
    if (backgroundColor == null) {
      let tmp3Result = node(tmp4[32]);
      backgroundColor = tmp3Result.hexWithOpacity(colorString, 0.1);
    }
    obj[1] = backgroundColor;
    tmp8 = obj;
  }
  tmp3Result = node(tmp4[33]);
  const processColorStringsArray = tmp3Result.useProcessColorStringsArray(colorStrings);
  const tmp = callback2();
  let str2 = "button";
  const isRoleStyleAndRoleColorsEligibleForERC = node(guildId[33]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, userId, roleStyle, processColorStringsArray);
  if (state.noStyleAndInteraction) {
    str2 = "text";
  }
  let fn;
  if (!state.noStyleAndInteraction) {
    fn = () => {
      if (null != node.roleId) {
        if (null != node.guildId) {
          const obj5 = roleId(guildId[34]);
          let obj = { guildId: null, roleId: null, channelId: null };
          ({ guildId: obj6[0], roleId: obj6[1], channelId: obj6[2] } = node);
          obj5.openLazy(node(guildId[36])(guildId[35], guildId.paths), "RoleMembersActionSheet", obj, "stack");
        }
      }
      if ("@everyone" === node.roleName) {
        if (null != node.guildId) {
          obj1 = roleId(guildId[34]);
          const tmp12 = node(guildId[36])(guildId[35], guildId.paths);
          obj = { guildId: null, roleId: null, channelId: null };
          obj[0] = node.guildId;
          obj[1] = roleId(guildId[37]).castGuildIdAsEveryoneGuildRoleId(node.guildId);
          obj[2] = node.channelId;
          obj1.openLazy(tmp12, "RoleMembersActionSheet", obj, "stack");
          const obj4 = roleId(guildId[37]);
        }
      }
      ({ userId, channelId } = node);
      if (null != userId) {
        obj = { userId: null, channelId: null };
        obj[0] = userId;
        obj[1] = channelId;
        roleId(guildId[18])(obj);
        const tmp4 = roleId(guildId[18]);
      } else {
        obj1 = { title: null, body: null, confirmText: null };
        const intl = node(guildId[20]).intl;
        obj1[0] = intl.string(node(guildId[20]).t.r0DLNm);
        const intl2 = node(guildId[20]).intl;
        obj1[1] = intl2.string(node(guildId[20]).t.Fqqbhg);
        const intl3 = node(guildId[20]).intl;
        obj1[2] = intl3.string(node(guildId[20]).t.BddRzS);
        roleId(guildId[19]).show(obj1);
        const obj7 = roleId(guildId[19]);
      }
    };
  }
  obj = { accessibilityRole: str2, style: tmp8, color: null, gradientColors: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj[2] = textColor;
  let tmp16;
  if (tmp2) {
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp16 = processColorStringsArray;
    }
  }
  obj[3] = tmp16;
  obj[4] = fn;
  if (tmp2) {
    tmp2 = "dot" === roleStyle;
  }
  if (tmp2) {
    obj1 = { guildId: null, color: null, colors: null, size: "small" };
    obj1[0] = guildId;
    obj1[1] = colorString;
    obj1[2] = colorStrings;
    tmp2 = callback(node(tmp4[24]).RoleDot, obj1);
  }
  const items2 = [tmp2, ];
  const tmp3Result1 = node(guildId[33]);
  items2[1] = node(guildId[30]).smartOutput(node, styles.output, state);
  obj[5] = items2;
  return callback2(MarkupText, obj, state.key);
}
function MarkupBlockQuote(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let blockQuote = styles.blockQuote;
  if (!blockQuote) {
    blockQuote = callback2().blockQuote;
  }
  const obj = { style: blockQuote, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj[1] = textColor;
  obj[2] = smartOutput.smartOutput(node, output, state);
  return callback(MarkupText, obj, state.key);
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
  const tmp3 = callback2();
  let obj = {};
  const merged = Object.assign(styles.inlineCode || callback2().inlineCode);
  if (state.inLink) {
    delete tmp2[tmp];
  }
  obj = { accessibilityRole: str, style: obj, color: null, onPress: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj[2] = textColor;
  let fn;
  if (tmp4) {
    fn = () => {
      const content = node.content;
      if (typeof content === "string") {
        node(dependencyMap[21]).copy(content);
        const obj = node(dependencyMap[21]);
        const result = node(dependencyMap[22]).presentCopiedToClipboard();
        const obj2 = node(dependencyMap[22]);
      }
    };
  }
  obj[3] = fn;
  const tmp5 = styles.inlineCode || callback2().inlineCode;
  obj[4] = node(8308).smartOutput(node, output, state);
  return callback(MarkupText, obj, state.key);
}
function MarkupCodeBlock(state) {
  state = state.state;
  ({ styles, node, output } = state);
  let codeBlock = styles.codeBlock;
  if (!codeBlock) {
    codeBlock = callback2().codeBlock;
  }
  const obj = { style: codeBlock, color: null, children: null };
  let textColor;
  if (state != null) {
    textColor = state.textColor;
  }
  obj[1] = textColor;
  const items = [smartOutput.smartOutput(node, output, state), "\n"];
  obj[2] = items;
  return callback2(MarkupText, obj, state.key);
}
function MarkupCustomEmoji(styles) {
  ({ state, node } = styles);
  const AnimateEmoji = explicitContentFromProto.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (node.src) {
    let emoji = styles.styles.emoji;
    if (!emoji) {
      emoji = emoji.emoji;
    }
    const items1 = [emoji, ];
    let tmp12 = null;
    if (null != state.customEmojiOffsetY) {
      obj = { translateY: null };
      obj[0] = state.customEmojiOffsetY;
      const items2 = [obj];
      obj[0] = items2;
      tmp12 = obj;
    }
    obj1 = { style: null, source: null, enableAnimation: null };
    items1[1] = tmp12;
    obj1[0] = items1;
    const obj2 = { uri: null };
    obj2[0] = node.src;
    obj1[1] = obj2;
    let tmp13 = !stateFromStores;
    if (!stateFromStores) {
      tmp13 = setting;
    }
    obj1[2] = tmp13;
    let tmp4Result = callback(preloadDefault, obj1, state.key);
  } else {
    let textColor;
    if (state != null) {
      textColor = state.textColor;
    }
    const obj3 = { color: null, children: null };
    obj3[0] = textColor;
    obj3[1] = node.alt;
    tmp4Result = callback(MarkupText, obj3, state.key);
  }
  return tmp4Result;
}
function MarkupChannelMention(state) {
  state = state.state;
  const node = state.node;
  const output = state.output;
  ({ styles, variants } = state);
  const tmp = callback2();
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
    items[2] = tmp3(8308).smartOutput(node, output, state);
    obj[2] = items;
    const tmp2Result = callback2(state(4734).Text, obj, state.key);
    let tmp13Result = tmp2Result;
    if (!state.disablePressableChannelMention) {
      obj = { accessibilityRole: null, style: null, pointerEvents: null, onPress: null, children: null };
      obj[0] = str;
      let channelMention = styles.channel;
      if (!channelMention) {
        channelMention = tmp.channelMention;
      }
      const items1 = [channelMention, ];
      let tmp15 = null;
      if (null != state.mentionPillOffsetY) {
        obj = { transform: null };
        obj1 = { translateY: null };
        obj1[0] = state.mentionPillOffsetY;
        const items2 = [obj1];
        obj[0] = items2;
        tmp15 = obj;
      }
      items1[1] = tmp15;
      obj[1] = items1;
      let str3 = "auto";
      if (state.noStyleAndInteraction) {
        str3 = "none";
      }
      obj[2] = str3;
      obj[3] = function onPress() {
        if (!state.noStyleAndInteraction) {
          ({ channelId, messageId } = node);
          if (null != channelId) {
            if (null != messageId) {
              state(dependencyMap[14]).transitionToMessage(channelId, messageId);
              const obj5 = state(dependencyMap[14]);
            } else {
              const channel = closure_1_9.getChannel(channelId);
              let isGuildVocalResult;
              if (channel != null) {
                isGuildVocalResult = channel.isGuildVocal();
              }
              if (isGuildVocalResult) {
                if (obj.canViewChannel(channel)) {
                  if (tmp3) {
                    const rootNavigationRef = state(dependencyMap[16]).getRootNavigationRef();
                    if (rootNavigationRef != null) {
                      rootNavigationRef.goBack();
                    }
                    const obj2 = state(dependencyMap[16]);
                  }
                  if (tmp4) {
                    let arr = node(dependencyMap[17]);
                    arr = arr.pop();
                  }
                }
                obj = state(dependencyMap[15]);
              }
              state(dependencyMap[14]).transitionToChannel(channelId);
              const obj4 = state(dependencyMap[14]);
            }
          }
        }
        return null;
      };
      obj[4] = tmp2Result;
      tmp13Result = callback(closure_5, obj, state.key);
    }
    return tmp13Result;
  } else {
    let obj2 = { themedColor: null, style: null, source: null, size: null };
    obj2[0] = node(712).colors.MENTION_FOREGROUND;
    const fontScale = store.getFontScale();
    if (fontScale < 1.25) {
      let obj3 = { width: 8, height: 8 };
    } else {
      obj3 = fontScale < 2 ? { width: 12, height: 12 } : { width: 16, height: 16 };
    }
    obj2[1] = obj3;
    obj2[2] = node(10757);
    obj2[3] = tmp3(1297).Icon.Sizes.CUSTOM;
    callback(tmp3(1297).ThemedIcon, obj2);
  }
}
function MarkupAttachmentLink(state) {
  state = state.state;
  const node = state.node;
  ({ output, styles, variants } = state);
  const tmp = callback2();
  let str = "button";
  if (state.noStyleAndInteraction) {
    str = "text";
  }
  let str2 = variants.channelMentionText;
  if (str2 == null) {
    str2 = "text-xs/medium";
  }
  let obj = { themedColor: node(712).colors.MENTION_FOREGROUND, source: node(13066), size: null };
  const fontScale = store.getFontScale();
  if (fontScale < 1) {
    let SMALL = tmp3(1297).Icon.Sizes.EXTRA_SMALL_10;
  } else if (fontScale < 1.25) {
    SMALL = tmp3(1297).Icon.Sizes.EXTRA_SMALL;
  } else {
    SMALL = tmp3(1297).Icon.Sizes.SMALL;
  }
  obj[2] = SMALL;
  const items = [callback(state(1297).ThemedIcon, obj), state(8308).smartOutput(node, output, state)];
  obj[2] = items;
  const tmp2Result = callback2(state(4734).Text, obj, state.key);
  let tmp5Result = tmp2Result;
  if (!state.disablePressableChannelMention) {
    obj = { accessibilityRole: null, style: null, pointerEvents: null, onPress: null, children: null };
    obj[0] = str;
    let channelMention = styles.channel;
    if (!channelMention) {
      channelMention = tmp.channelMention;
    }
    const items1 = [channelMention, ];
    let tmp10 = null;
    if (null != state.mentionPillOffsetY) {
      obj1 = { transform: null };
      const obj2 = { translateY: null };
      obj2[0] = state.mentionPillOffsetY;
      const items2 = [obj2];
      obj1[0] = items2;
      tmp10 = obj1;
    }
    items1[1] = tmp10;
    obj[1] = items1;
    let str3 = "auto";
    if (state.noStyleAndInteraction) {
      str3 = "none";
    }
    obj[2] = str3;
    obj[3] = function onPress(stopPropagation) {
      if (!state.noStyleAndInteraction) {
        stopPropagation.stopPropagation();
        node(dependencyMap[27]).openURL(node.attachmentLink);
        const obj = node(dependencyMap[27]);
      }
    };
    obj[4] = tmp2Result;
    tmp5Result = callback(closure_5, obj, state.key);
  }
  return tmp5Result;
}
function MarkupCommandMention(state) {
  state = state.state;
  ({ node, output, styles } = state);
  const obj = { node, output, state, style: null };
  let mention = styles.mention;
  const tmp = callback2();
  if (!mention) {
    mention = tmp.mention;
  }
  obj[3] = mention;
  return callback(handleTapCommandMentionDefault, obj, state.key);
}
({ PixelRatio: c4, Pressable: c5, View: closure_6, Text: error } = get_ActivityIndicator);
({ EMOJI_CHAT_SIZE, GuildFeatures: closure_12 } = ME);
({ StaticChannelRoute: map1, StaticChannelId: closure_14 } = require("set"));
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const regExp = new RegExp(require("regExp").ANSI_CONTROL_SEQUENCE_RE, "g");
let obj = { fontFamily: Fonts.PRIMARY_BOLD };
let closure_18 = { emoji: { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, resizeMode: "contain" }, guildIcon: { paddingEnd: 2, paddingBottom: 1 }, list: { paddingTop: 16 }, listItem: { paddingTop: 4 }, bullet: obj, strong: obj };
obj = { link: null, channelMention: null, channelMentionText: null, mention: null, inlineCode: null, codeBlock: null, blockQuote: null };
obj[0] = { fontFamily: Fonts.PRIMARY_BOLD, color: ThemesDefault.colors.TEXT_LINK };
const createCacheKey = { backgroundColor: ThemesDefault.colors.MENTION_BACKGROUND, borderRadius: 3, paddingHorizontal: 2, alignItems: "center" };
obj[1] = createCacheKey;
obj[2] = { color: ThemesDefault.colors.MENTION_FOREGROUND };
obj[3] = { color: ThemesDefault.unsafe_rawColors.BRAND_500, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[4] = { fontFamily: Fonts.CODE_BOLD, color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BACKGROUND_CODE };
obj[5] = { fontFamily: Fonts.CODE_BOLD, color: ThemesDefault.colors.TEXT_DEFAULT, backgroundColor: ThemesDefault.colors.BACKGROUND_CODE };
obj[6] = { borderLeftWidth: 4, borderLeftColor: ThemesDefault.colors.SPINE_DEFAULT, paddingLeft: 8 };
let closure_20 = createCacheKey.createStyles(obj);
let c21 = "  ";
let result = require("obj132").fileFinishedImporting("modules/markup/MarkupReactRules.native.tsx");

export default function createRules() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  obj = undefined;
  if (obj === undefined) {
    obj = {};
  }
  obj = undefined;
  if (obj === undefined) {
    obj = {};
  }
  const react = (node, output, noStyleAndInteraction) => {
    if (noStyleAndInteraction.noStyleAndInteraction) {
      let textColor;
      if (noStyleAndInteraction != null) {
        textColor = noStyleAndInteraction.textColor;
      }
      obj = { color: null, children: null };
      obj[0] = textColor;
      obj[1] = obj(dependencyMap[30]).smartOutput(node, output, noStyleAndInteraction);
      let tmpResult = closure_1_15(MarkupText, obj, noStyleAndInteraction.key);
      const obj3 = obj(dependencyMap[30]);
    } else {
      obj = { state: null, node: null, output: null, styles: null };
      obj[0] = noStyleAndInteraction;
      obj[1] = node;
      obj[2] = output;
      obj[3] = obj;
      tmpResult = closure_1_15(MarkupLink, obj, noStyleAndInteraction.key);
    }
    return tmpResult;
  };
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
          obj = { color: null, children: null };
          obj[0] = textColor;
          obj[1] = obj(8308).smartOutput(content, output, textColor);
          content = callback(closure_19, obj, textColor.key);
          const obj2 = obj(8308);
        }
        return content;
      }
    },
    [closure_0(closure_2[43]).AST_KEY.STRIKETHROUGH]: {
      react(node, output, textColor) {
        obj = { style: { textDecorationLine: "line-through" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj[1] = textColor;
        obj[2] = textColor.textVariant;
        obj[3] = obj(8308).smartOutput(node, output, textColor);
        return callback(closure_19, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.UNDERLINE]: {
      react(node, output, textColor) {
        obj = { style: { textDecorationLine: "underline" }, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj[1] = textColor;
        obj[2] = textColor.textVariant;
        obj[3] = obj(8308).smartOutput(node, output, textColor);
        return callback(closure_19, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.ITALICS]: {
      react(node, output, textColor) {
        const em = obj.em;
        str = undefined;
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
        obj[1] = textColor;
        obj[2] = textColor.textVariant;
        obj[3] = obj(dependencyMap[30]).smartOutput(node, output, textColor);
        return closure_1_15(MarkupText, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.STRONG]: {
      react(node, output, textColor) {
        let strong = obj.strong;
        if (!strong) {
          strong = closure_1_18.strong;
        }
        obj = { style: strong, color: null, variant: null, children: null };
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj[1] = textColor;
        obj[2] = textColor.textVariant;
        obj[3] = obj(dependencyMap[30]).smartOutput(node, output, textColor);
        return closure_1_15(MarkupText, obj, textColor.key);
      }
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
        return callback(closure_19, { color, children: "\n" }, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.HIGHLIGHT]: {
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8308).smartOutput(node, output, textColor) };
        return callback(closure_19, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.BLOCK_QUOTE]: {
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output };
        return closure_1_15(MarkupBlockQuote, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.PARAGRAPH]: {
      order: 600,
      react(node, output, textColor) {
        textColor = undefined;
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: obj(8308).smartOutput(node, output, textColor) };
        return callback(closure_19, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.EMOJI]: {
      react(surrogate, arg1, key) {
        let children = surrogate.surrogate;
        if (!children) {
          children = surrogate.content;
        }
        return callback(closure_7, { children }, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.CUSTOM_EMOJI]: {
      react(node, arg1, key) {
        obj = { state: key, node, styles: obj };
        return closure_1_15(MarkupCustomEmoji, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.SPOILER]: {
      react(node, output, key) {
        obj = { spoilerStyle: obj.spoiler, spoilerRevealedStyle: obj.spoilerRevealed, children: null };
        const tmp = str(dependencyMap[44]);
        obj[2] = obj(dependencyMap[30]).smartOutput(node, output, key);
        return closure_1_15(tmp, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.STATIC_ROUTE_LINK]: {
      react(channelId, output, textColor) {
        obj = channelId;
        obj = obj(dependencyMap[30]);
        if (obj.isStaticRouteIconType(channelId.channelId)) {
          let SignPostIcon = tmp(dependencyMap[45]).SignPostIcon;
          channelId = channelId.channelId;
          if (closure_1_14.GUILD_HOME !== channelId) {
            if (closure_1_14.SERVER_GUIDE !== channelId) {
              if (closure_1_14.CHANNEL_BROWSER !== channelId) {
                if (closure_1_14.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (closure_1_14.LINKED_ROLES === channelId) {
                    SignPostIcon = tmp(dependencyMap[47]).LinkIcon;
                  }
                }
              }
              SignPostIcon = tmp(dependencyMap[46]).ChannelListMagnifyingGlassIcon;
            }
            obj = { accessibilityRole: "button", style: null, color: null, onPress: null, children: null };
            obj[1] = obj.staticRouteLink;
            textColor = undefined;
            if (textColor != null) {
              textColor = textColor.textColor;
            }
            obj[2] = textColor;
            obj[3] = function onPress() {
              ({ guildId, channelId } = channelId);
              const guild = closure_1_11.getGuild(guildId);
              let hasItem = null != guildId && null != guild;
              if (hasItem) {
                const features = guild.features;
                hasItem = features.has(closure_1_12.COMMUNITY);
              }
              if (hasItem) {
                if (!tmp4) {
                  const result = channelId(closure_1_2[14]).transitionToStaticChannelRoute(guildId, closure_1_13.GUILD_HOME);
                  obj = channelId(closure_1_2[14]);
                }
                tmp4 = channelId !== closure_1_14.GUILD_HOME && channelId !== closure_1_14.SERVER_GUIDE;
              }
            };
            obj = { style: null, size: "sm" };
            obj[0] = obj.staticRouteLinkIcon;
            const items = [closure_1_15(SignPostIcon, obj), tmp(dependencyMap[30]).smartOutput(channelId, output, textColor)];
            obj[4] = items;
            return closure_1_16(MarkupText, obj, textColor.key);
          }
          SignPostIcon = tmp(dependencyMap[45]).SignPostIcon;
        } else {
          return null;
        }
      }
    },
    [closure_0(closure_2[43]).AST_KEY.INLINE_CODE]: {
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output };
        return closure_1_15(MarkupInlineCode, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.CODE_BLOCK]: {
      parse(arg0, arg1, arg2) {
        obj = str(6809).RULES[obj(undefined, 4765).AST_KEY.CODE_BLOCK];
        const parsed = obj.parse(arg0, arg1, arg2);
        if ("ansi" === parsed.lang.toLowerCase()) {
          const content = parsed.content;
          parsed.content = content.replaceAll(closure_17, "");
        }
        return parsed;
      },
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output };
        return closure_1_15(MarkupCodeBlock, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.MENTION]: {
      react: (node, output, key) => {
        obj = { roleStyle: str, state: key, node, output, styles: obj };
        return closure_1_15(MarkupMention, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.CHANNEL_MENTION]: {
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output, variants: str };
        return closure_1_15(MarkupChannelMention, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.ATTACHMENT_LINK]: {
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output, variants: str };
        return closure_1_15(MarkupAttachmentLink, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.SOUNDBOARD]: {
      react(node, output, key) {
        obj = { variant: "text-md/bold", children: null };
        const items = ["<sound:", obj(8308).smartOutput(node, output, key), ">"];
        obj[1] = items;
        return callback2(obj(4734).Text, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.GUILD]: {
      react(icon, output, textColor) {
        obj = obj(500);
        let num = 2;
        if (!obj.isAndroid()) {
          let num3 = 0;
          if (store.getFontScale() < 1.5) {
            num3 = 1;
          }
          num = num3;
        }
        if (null == icon.icon) {
          textColor = undefined;
          if (textColor != null) {
            textColor = textColor.textColor;
          }
          obj = { color: null, children: null };
          obj[0] = textColor;
          obj = { style: null, children: null };
          obj[0] = closure_18.guildIcon;
          obj[1] = null;
          const items = [callback(closure_6, obj), ];
          let textColor1;
          if (textColor != null) {
            textColor1 = textColor.textColor;
          }
          obj1 = { color: null, children: null };
          obj1[0] = textColor1;
          obj1[1] = tmp(8308).smartOutput(icon, output, textColor);
          items[1] = callback(closure_19, obj1);
          obj[1] = items;
          return callback2(closure_19, obj, textColor.key);
        } else {
          const obj2 = { style: null, icon: null, size: null };
          const obj3 = { top: null };
          obj3[0] = num;
          obj2[0] = obj3;
          obj2[1] = icon.icon;
          const fontScale = store.getFontScale();
          if (fontScale < 1) {
            let XXSMALL = tmp(7188).GuildIconSizes.XXXSMALL;
          } else if (fontScale < 1.25) {
            XXSMALL = tmp(7188).GuildIconSizes.XXSMALL_12;
          } else {
            XXSMALL = tmp(7188).GuildIconSizes.XXSMALL;
          }
          obj2[2] = XXSMALL;
          callback(str(7188), obj2);
          const tmp6 = str(7188);
        }
      }
    },
    [closure_0(closure_2[43]).AST_KEY.CHANNEL]: {
      react(iconType, output, textColor) {
        str = iconType.iconType;
        if (str == null) {
          str = "text";
        }
        let num = 2;
        if ("text" === str) {
          num = 0;
        }
        obj = { themedColor: str(712).colors.MENTION_FOREGROUND, source: obj(6832).getChannelMentionIcon(str), size: null, style: null };
        const fontScale = store.getFontScale();
        if (fontScale < 1) {
          let SMALL = tmp2(1297).Icon.Sizes.EXTRA_SMALL_10;
        } else if (fontScale < 1.25) {
          SMALL = tmp2(1297).Icon.Sizes.EXTRA_SMALL;
        } else {
          SMALL = tmp2(1297).Icon.Sizes.SMALL;
        }
        obj[2] = SMALL;
        obj[3] = { top: 1 };
        textColor = undefined;
        const obj2 = obj(6832);
        if (textColor != null) {
          textColor = textColor.textColor;
        }
        obj = { color: textColor, children: null };
        const items = [callback(closure_6, { style: { paddingEnd: num }, children: callback(obj(1297).ThemedIcon, obj) }), ];
        const tmpResult = callback(obj(1297).ThemedIcon, obj);
        items[1] = obj(8308).smartOutput(iconType, output, textColor);
        obj[1] = items;
        return callback2(closure_19, obj, textColor.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.COMMAND_MENTION]: {
      react(node, output, key) {
        obj = { styles: obj, state: key, node, output };
        return closure_1_15(MarkupCommandMention, obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.GAME_MENTION]: {
      react(node, arg1, key) {
        return callback(str(13071), { node, state: key }, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.TIMESTAMP]: {
      react(node, arg1, key) {
        obj = { node, style: obj.timestamp };
        return closure_1_15(str(dependencyMap[52]), obj, key.key);
      }
    },
    [closure_0(closure_2[43]).AST_KEY.LIST]: {
      react(start, arg1, level) {
        obj = start;
        closure_1 = arg1;
        dependencyMap = level;
        closure_3 = start;
        closure_5 = null != start.start ? start.start : level.start;
        if (level.formatInline) {
          let textColor;
          if (level != null) {
            textColor = level.textColor;
          }
          obj = { color: null, children: null };
          obj[0] = textColor;
          let items = start.items;
          obj[1] = items.map((item, index) => {
            str = "\u2022 ";
            if (true === start.ordered) {
              str = "\u2022 ";
              if (null != closure_5) {
                const _HermesInternal = HermesInternal;
                str = "" + closure_5 + index + ". ";
              }
            }
            const children = [str, , ];
            obj = {};
            const merged = Object.assign(level);
            obj.key = "" + level.key + "-" + index;
            children[1] = callback(item, obj);
            let str4 = " ";
            if (index !== start.items.length - 1) {
              str4 = closure_1_21;
            }
            children[2] = str4;
            return closure_1_16(start2.Fragment, { children }, "list-" + level.key + "-item-" + index);
          });
          let _HermesInternal2 = HermesInternal;
          return callback(closure_19, obj, "list-" + level.key);
        } else {
          let items1 = start.items;
          let mapped = items1.map((item, index) => {
            start = item;
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
              obj = { style: null, variant: "text-sm/medium", children: null };
              obj[0] = closure_1_18.listItem;
              obj1 = { style: null, color: null, children: null };
              obj1[0] = closure_1_18.bullet;
              let textColor;
              if (level != null) {
                textColor = level.textColor;
              }
              obj1[1] = textColor;
              let repeatResult = str5;
              if (tmp > 0) {
                repeatResult = closure_1_21.repeat(tmp);
              }
              const items = [repeatResult, "\u26AC "];
              obj1[2] = items;
              const _HermesInternal3 = HermesInternal;
              const items1 = [closure_1_16(closure_1_19, obj1, "list-" + level.key + "-item-" + index + "-bullet"), , ];
              const _Array = Array;
              if (Array.isArray(item)) {
                let mapped = item.map((item, index) => {
                  str = tmp;
                  const sum = index + 1;
                  if ("list" === item.type) {
                    str = "\n";
                  }
                  let str2 = sum === item.length;
                  const children = [str, obj(item, obj), ];
                  if (str2) {
                    str2 = !tmp;
                  }
                  if (str2) {
                    str2 = "\n";
                  }
                  children[2] = str2;
                  return closure_2_16(React.Fragment, { children }, index);
                });
              } else {
                mapped = obj(item, obj);
              }
              items1[1] = mapped;
              if (start2.items.length !== index + 1) {
                str5 = closure_1_21;
              }
              items1[2] = str5;
              obj[2] = items1;
              const _HermesInternal4 = HermesInternal;
              return closure_1_16(start(level[11]).Text, obj, "list-" + level.key + "-item-" + index);
            } else {
              str = start2.ordered;
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
            }
          });
          obj = { style: null, variant: "text-sm/medium", children: null };
          obj[0] = closure_18.list;
          obj[2] = mapped;
          let _HermesInternal = HermesInternal;
          return callback(obj(4734).Text, obj, "list-" + level.key);
        }
      }
    },
    [closure_0(closure_2[43]).AST_KEY.HEADING]: {
      react(level, output, formatInline) {
        if (formatInline.formatInline) {
          let textColor;
          if (formatInline != null) {
            textColor = formatInline.textColor;
          }
          obj = { variant: "text-sm/semibold", color: null, children: null };
          obj[1] = textColor;
          obj = {};
          const merged = Object.assign(formatInline);
          obj.textVariant = "text-sm/semibold";
          const items = [obj(8308).smartOutput(level, output, obj), " "];
          obj[2] = items;
          return callback2(closure_19, obj, formatInline.key);
        } else {
          str = "heading-xl/bold";
          if (1 !== level.level) {
            let str2 = "heading-md/bold";
            if (2 === level.level) {
              str2 = "heading-lg/bold";
            }
            str = str2;
          }
          obj = { variant: null, color: null, children: null };
          obj[0] = str;
          let str3 = "text-strong";
          if (formatInline.forceWhite) {
            str3 = "text-overlay-light";
          }
          obj[1] = str3;
          obj1 = {};
          const merged1 = Object.assign(formatInline);
          obj1.textVariant = str;
          const items1 = [obj(8308).smartOutput(level, output, obj1), "\n"];
          obj[2] = items1;
          return callback2(obj(4734).Text, obj, formatInline.key);
        }
      }
    },
    [closure_0(closure_2[43]).AST_KEY.SUBTEXT]: {
      react(node, output, key) {
        obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const items = [obj(8308).smartOutput(node, output, key), "\n"];
        obj[2] = items;
        return callback2(obj(4734).Text, obj, key.key);
      }
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
          obj = { color: null, children: null };
          obj[0] = textColor;
          obj[1] = obj(8308).smartOutput(content, output, textColor);
          content = callback(closure_19, obj, textColor.key);
          const obj2 = obj(8308);
        }
        return content;
      }
    }
  };
};
export { MarkupText };
export const plainMentionRenderer = function plainMentionRenderer(content, output, state) {
  if (typeof content.content === "string") {
    content = content.content;
  } else {
    content = smartOutput.smartOutput(content, output, state);
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