// discord_app/modules/in_app_notifications/native/ReactionNotification.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../discord_common/js/shared/Constants.tsx";
import intl13 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import ForumPostReactionButton from "../../forums/native/posts/reactions/ForumPostReactionButton.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import ChannelRowPreview from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import useGetInitialMessagePreview from "hooks/useGetInitialMessagePreview.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let constants, count_details, importDefault;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp6;
let unpackModuleId;
function ReactorNotificationIcon(notification) {
  let channel;
  let channel2;
  let guild;
  let guild2;
  let id;
  let id1;
  let tmp11Result;
  let user;
  let user2;
  if (closure_17) {
    let tmp25;
    let tmp31Result;
    const obj4 = react2;
    const cResult = obj4.c(6);
    notification = notification.notification;
    const isMilestone2 = notification.isMilestone;
    const tmp24 = closure_13();
    ({ user: user2, guild: guild2, channel: channel2 } = notification);
    if (isMilestone2) {
      if (channel2.isGroupDM()) {
        let tmp33;
        if (cResult[0] !== channel2) {
          const obj2 = { channel: channel2, size: native.AvatarSizes.NORMAL };
          const tmp36 = GroupDMAvatarDefault;
          const tmp37 = authStore(tmp36, obj2);
          cResult[0] = channel2;
          cResult[1] = tmp37;
          tmp33 = tmp37;
        } else {
          tmp33 = cResult[1];
        }
        tmp25 = tmp33;
      }
      tmp11Result = tmp25;
    }
    if (cResult[2] === guild2) {
      if (cResult[3] === tmp24) {
        if (cResult[4] === user2) {
          tmp25 = cResult[5];
        }
      }
    }
    if (null != user2) {
      const obj3 = { user: user2, guildId: id, size: native.AvatarSizes.NORMAL };
      id = undefined;
      const Avatar2 = native.Avatar;
      if (guild2 != null) {
        id = guild2.id;
      }
      tmp31Result = authStore(Avatar2, obj3);
    } else {
      const obj5 = { guild: guild2, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp24.guildIcon };
      const tmp29 = GuildIconDefault;
      tmp31Result = authStore(tmp29, obj5);
    }
    cResult[2] = guild2;
    cResult[3] = tmp24;
    cResult[4] = user2;
    cResult[5] = tmp31Result;
    tmp25 = tmp31Result;
  } else {
    const isMilestone = notification.isMilestone;
    ({ user, guild, channel } = notification.notification);
    const tmp3 = closure_13();
    if (isMilestone) {
      if (channel.isGroupDM()) {
        const obj6 = { channel, size: native.AvatarSizes.NORMAL };
        const tmp18 = GroupDMAvatarDefault;
        tmp11Result = authStore(tmp18, obj6);
      }
    }
    if (null != user) {
      const obj7 = { user, guildId: id1, size: native.AvatarSizes.NORMAL };
      id1 = undefined;
      const Avatar = native.Avatar;
      if (guild != null) {
        id1 = guild.id;
      }
      tmp11Result = authStore(Avatar, obj7);
    } else {
      const obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp3.guildIcon };
      const tmp8 = GuildIconDefault;
      tmp11Result = authStore(tmp8, obj);
    }
  }
  return tmp11Result;
}
let react = react_mod;
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportDefault } =
  InAppNotificationConstants);
({ ChannelTypes: metroImportAll, MessageEmbedTypes: c9 } = Constants);
const Fonts = Constants2.Fonts;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  newContainerRoleDot: { paddingRight: 4, paddingTop: 0 },
  container: { flexDirection: "column" },
  textEmoji: { fontSize: 12 },
  imageEmoji: { height: 16, width: 16, transform: tmp6 },
  italic: obj2,
  guildIcon: obj3,
};
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
tmp6 = undefined;
if (!PlatformUtils.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp6 = items;
}
PlatformUtils = PlatformUtils_mod;
obj2 = {
  fontStyle: "italic",
  fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
};
obj3 = { borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasMessageContent) => {
      let italic;
      let message;
      let reaction;
      let setting;
      let obj = reaction(setting[11]);
      const cResult = obj.c(57);
      ({ message, reaction } = hasMessageContent);
      hasMessageContent = hasMessageContent.hasMessageContent;
      const tmp4 = closure_13();
      importDefault = tmp4;
      const AnimateEmoji = reaction(setting[12]).AnimateEmoji;
      setting = AnimateEmoji.useSetting();
      const obj2 = reaction(setting[13]);
      const previewableMedia = obj2.usePreviewableMedia(message);
      if (cResult[0] === setting) {
        if (cResult[1] === reaction) {
          if (cResult[2] === tmp4.imageEmoji) {
            if (cResult[3] === tmp4.italic) {
              let tmp6;
              let tmp12;
              let formatResult11;
              if (cResult[4] === tmp4.textEmoji) {
                tmp6 = cResult[5];
              }
              if (0 !== previewableMedia.length) {
                if (!hasMessageContent) {
                  if (1 === previewableMedia.length) {
                    const first = previewableMedia[0];
                    const type = first.type;
                    if (reaction(setting[13]).PreviewableMediaTypes.IMAGE === type) {
                      let tmp38;
                      let tmp40;
                      if (cResult[11] !== tmp6) {
                        const intl11 = tmp(tmp2[18]).intl;
                        let obj3 = { emojiHook: tmp6 };
                        const formatResult = intl11.format(reaction(setting[18]).t.I7mNcA, obj3);
                        cResult[11] = tmp6;
                        cResult[12] = formatResult;
                        tmp38 = formatResult;
                      } else {
                        tmp38 = cResult[12];
                      }
                      if (cResult[13] !== tmp38) {
                        const obj4 = { text: tmp38, secondaryText: null };
                        cResult[13] = tmp38;
                        cResult[14] = obj4;
                        tmp40 = obj4;
                      } else {
                        tmp40 = cResult[14];
                      }
                      tmp12 = tmp40;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.VIDEO === type) {
                      let tmp35;
                      let tmp37;
                      if (cResult[15] !== tmp6) {
                        const intl10 = tmp(tmp2[18]).intl;
                        let obj5 = { emojiHook: tmp6 };
                        const formatResult1 = intl10.format(reaction(setting[18]).t["Umew/z"], obj5);
                        cResult[15] = tmp6;
                        cResult[16] = formatResult1;
                        tmp35 = formatResult1;
                      } else {
                        tmp35 = cResult[16];
                      }
                      if (cResult[17] !== tmp35) {
                        const obj6 = { text: tmp35, secondaryText: null };
                        cResult[17] = tmp35;
                        cResult[18] = obj6;
                        tmp37 = obj6;
                      } else {
                        tmp37 = cResult[18];
                      }
                      tmp12 = tmp37;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.AUDIO === type) {
                      let tmp32;
                      if (cResult[19] !== tmp6) {
                        const intl9 = tmp(tmp2[18]).intl;
                        const obj7 = { emojiHook: tmp6 };
                        const formatResult2 = intl9.format(reaction(setting[18]).t["P/bwx9"], obj7);
                        cResult[19] = tmp6;
                        cResult[20] = formatResult2;
                        tmp32 = formatResult2;
                      } else {
                        tmp32 = cResult[20];
                      }
                      if (cResult[21] === first.media.filename) {
                        let tmp34;
                        if (cResult[22] === tmp32) {
                          tmp34 = cResult[23];
                        }
                        tmp12 = tmp34;
                      }
                      const obj8 = { text: tmp32, secondaryText: first.media.filename };
                      cResult[21] = first.media.filename;
                      cResult[22] = tmp32;
                      cResult[23] = obj8;
                      tmp34 = obj8;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.FILE === type) {
                      let tmp29;
                      if (cResult[24] !== tmp6) {
                        const intl8 = tmp(tmp2[18]).intl;
                        const obj9 = { emojiHook: tmp6 };
                        const formatResult3 = intl8.format(reaction(setting[18]).t.TXNjGW, obj9);
                        cResult[24] = tmp6;
                        cResult[25] = formatResult3;
                        tmp29 = formatResult3;
                      } else {
                        tmp29 = cResult[25];
                      }
                      if (cResult[26] === first.media.filename) {
                        let tmp31;
                        if (cResult[27] === tmp29) {
                          tmp31 = cResult[28];
                        }
                        tmp12 = tmp31;
                      }
                      const obj10 = { text: tmp29, secondaryText: first.media.filename };
                      cResult[26] = first.media.filename;
                      cResult[27] = tmp29;
                      cResult[28] = obj10;
                      tmp31 = obj10;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.STICKER === type) {
                      let tmp26;
                      let tmp28;
                      if (cResult[29] !== tmp6) {
                        const intl7 = tmp(tmp2[18]).intl;
                        const obj11 = { emojiHook: tmp6 };
                        const formatResult4 = intl7.format(reaction(setting[18]).t.pnm8NC, obj11);
                        cResult[29] = tmp6;
                        cResult[30] = formatResult4;
                        tmp26 = formatResult4;
                      } else {
                        tmp26 = cResult[30];
                      }
                      if (cResult[31] !== tmp26) {
                        const obj12 = { text: tmp26, secondaryText: null };
                        cResult[31] = tmp26;
                        cResult[32] = obj12;
                        tmp28 = obj12;
                      } else {
                        tmp28 = cResult[32];
                      }
                      tmp12 = tmp28;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
                      let tmp23;
                      let tmp25;
                      if (cResult[33] !== tmp6) {
                        const intl6 = tmp(tmp2[18]).intl;
                        const obj13 = { emojiHook: tmp6 };
                        const formatResult5 = intl6.format(reaction(setting[18]).t.k6YnQO, obj13);
                        cResult[33] = tmp6;
                        cResult[34] = formatResult5;
                        tmp23 = formatResult5;
                      } else {
                        tmp23 = cResult[34];
                      }
                      if (cResult[35] !== tmp23) {
                        const obj14 = { text: tmp23, secondaryText: null };
                        cResult[35] = tmp23;
                        cResult[36] = obj14;
                        tmp25 = obj14;
                      } else {
                        tmp25 = cResult[36];
                      }
                      tmp12 = tmp25;
                    } else if (reaction(setting[13]).PreviewableMediaTypes.GIF === type) {
                      let tmp20;
                      let tmp22;
                      if (cResult[37] !== tmp6) {
                        const intl5 = tmp(tmp2[18]).intl;
                        const obj15 = { emojiHook: tmp6 };
                        const formatResult6 = intl5.format(reaction(setting[18]).t["3oS3Jq"], obj15);
                        cResult[37] = tmp6;
                        cResult[38] = formatResult6;
                        tmp20 = formatResult6;
                      } else {
                        tmp20 = cResult[38];
                      }
                      if (cResult[39] !== tmp20) {
                        const obj16 = { text: tmp20, secondaryText: null };
                        cResult[39] = tmp20;
                        cResult[40] = obj16;
                        tmp22 = obj16;
                      } else {
                        tmp22 = cResult[40];
                      }
                      tmp12 = tmp22;
                    } else {
                      let tmp17;
                      let tmp19;
                      if (cResult[41] !== tmp6) {
                        const intl4 = tmp(tmp2[18]).intl;
                        const obj17 = { emojiHook: tmp6 };
                        const formatResult7 = intl4.format(reaction(setting[18]).t.sHV43G, obj17);
                        cResult[41] = tmp6;
                        cResult[42] = formatResult7;
                        tmp17 = formatResult7;
                      } else {
                        tmp17 = cResult[42];
                      }
                      if (cResult[43] !== tmp17) {
                        const obj18 = { text: tmp17, secondaryText: null };
                        cResult[43] = tmp17;
                        cResult[44] = obj18;
                        tmp19 = obj18;
                      } else {
                        tmp19 = cResult[44];
                      }
                      tmp12 = tmp19;
                    }
                  } else if (require("isForwardMessage")(message)) {
                    let tmp13;
                    let tmp15;
                    if (cResult[45] !== tmp6) {
                      const intl3 = tmp(tmp2[18]).intl;
                      const obj19 = { emojiHook: tmp6 };
                      const formatResult8 = intl3.format(reaction(setting[18]).t["8xg9ZQ"], obj19);
                      cResult[45] = tmp6;
                      cResult[46] = formatResult8;
                      tmp13 = formatResult8;
                    } else {
                      tmp13 = cResult[46];
                    }
                    if (cResult[47] !== tmp13) {
                      const obj20 = { text: tmp13, secondaryText: null };
                      cResult[47] = tmp13;
                      cResult[48] = obj20;
                      tmp15 = obj20;
                    } else {
                      tmp15 = cResult[48];
                    }
                    tmp12 = tmp15;
                  } else {
                    if (cResult[49] === previewableMedia.length) {
                      let tmp8;
                      if (cResult[50] === tmp6) {
                        tmp8 = cResult[51];
                      }
                      if (cResult[52] === previewableMedia.length) {
                        let tmp10;
                        if (cResult[53] === tmp6) {
                          tmp10 = cResult[54];
                        }
                        if (tmp7) {
                          tmp10 = tmp8;
                        }
                        if (cResult[55] !== tmp10) {
                          const obj21 = { text: tmp10, secondaryText: null };
                          cResult[55] = tmp10;
                          cResult[56] = obj21;
                          tmp12 = obj21;
                        } else {
                          tmp12 = cResult[56];
                        }
                      }
                      const intl2 = tmp(tmp2[18]).intl;
                      const obj22 = { emojiHook: tmp6, count: previewableMedia.length };
                      const formatResult9 = intl2.format(reaction(setting[18]).t.UNRyki, obj22);
                      cResult[52] = previewableMedia.length;
                      cResult[53] = tmp6;
                      cResult[54] = formatResult9;
                      tmp10 = formatResult9;
                    }
                    const intl = tmp(tmp2[18]).intl;
                    const obj23 = { emojiHook: tmp6, count: previewableMedia.length };
                    const formatResult10 = intl.format(reaction(setting[18]).t.sec4g7, obj23);
                    cResult[49] = previewableMedia.length;
                    cResult[50] = tmp6;
                    cResult[51] = formatResult10;
                    tmp8 = formatResult10;
                  }
                }
                return tmp12;
              }
              if (cResult[6] === tmp6) {
                let tmp41;
                let tmp43;
                if (cResult[7] === hasMessageContent) {
                  tmp41 = cResult[8];
                }
                if (cResult[9] !== tmp41) {
                  const obj24 = { text: tmp41, secondaryText: null };
                  cResult[9] = tmp41;
                  cResult[10] = obj24;
                  tmp43 = obj24;
                } else {
                  tmp43 = cResult[10];
                }
                tmp12 = tmp43;
              }
              const intl12 = tmp(tmp2[18]).intl;
              const format = intl12.format;
              const t = tmp(tmp2[18]).t;
              if (hasMessageContent) {
                const obj25 = { emojiHook: tmp6 };
                formatResult11 = format(t.sHV43G, obj25);
              } else {
                const obj26 = { emojiHook: tmp6 };
                formatResult11 = format(t.ZOzpKt, obj26);
              }
              cResult[6] = tmp6;
              cResult[7] = hasMessageContent;
              cResult[8] = formatResult11;
              tmp41 = formatResult11;
            }
          }
        }
      }
      const fn = function n() {
        let animated;
        let name;
        if (reaction != null) {
          name = reaction.emoji.name;
        }
        if (null == name) {
          return null;
        } else {
          let name1;
          if (reaction != null) {
            name1 = reaction.emoji.name;
          }
          if (null != name1) {
            let id;
            if (reaction != null) {
              id = reaction.emoji.id;
            }
            if (null == id) {
              const obj3 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
              return authStore(Text_Text.Text, obj3, reaction.emoji.name);
            }
          }
          let id1;
          if (reaction != null) {
            id1 = reaction.emoji.id;
          }
          let emojiURL;
          if (null != id1) {
            const obj = { id: reaction.emoji.id, animated, size: ForumPostReactionButton.DEFAULT_EMOJI_SIZE };
            animated = setting;
            const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (setting) {
              animated = reaction.emoji.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const obj5 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: reaction.emoji.name };
          ({ textEmoji: obj2.textEmojiStyle, imageEmoji: obj2.fastImageStyle } = italic);
          return authStore(EmojiDefault, obj5);
        }
      };
      cResult[0] = setting;
      cResult[1] = reaction;
      cResult[2] = tmp4.imageEmoji;
      cResult[3] = tmp4.italic;
      cResult[4] = tmp4.textEmoji;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (message) => {
      let italic;
      message = message.message;
      const reaction = message.reaction;
      const hasMessageContent = message.hasMessageContent;
      const tmp = closure_13();
      react = tmp;
      const AnimateEmoji = message(hasMessageContent[12]).AnimateEmoji;
      const setting = AnimateEmoji.useSetting();
      let obj = message(hasMessageContent[13]);
      const previewableMedia = obj.usePreviewableMedia(message);
      const items = [setting, reaction, , ,];
      ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp);
      const emojiHook = react.useCallback(() => {
        let animated;
        let name;
        if (reaction != null) {
          name = reaction.emoji.name;
        }
        if (null == name) {
          return null;
        } else {
          let name1;
          if (reaction != null) {
            name1 = reaction.emoji.name;
          }
          if (null != name1) {
            let id;
            if (reaction != null) {
              id = reaction.emoji.id;
            }
            if (null == id) {
              const obj3 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
              return authStore(Text_Text.Text, obj3, reaction.emoji.name);
            }
          }
          let id1;
          if (reaction != null) {
            id1 = reaction.emoji.id;
          }
          let emojiURL;
          if (null != id1) {
            const obj = { id: reaction.emoji.id, animated, size: ForumPostReactionButton.DEFAULT_EMOJI_SIZE };
            animated = setting;
            const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (setting) {
              animated = reaction.emoji.animated;
            }
            emojiURL = getEmojiURL(obj);
          }
          const obj5 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: reaction.emoji.name };
          ({ textEmoji: obj2.textEmojiStyle, imageEmoji: obj2.fastImageStyle } = italic);
          return authStore(EmojiDefault, obj5);
        }
      }, items);
      const items1 = [emojiHook, hasMessageContent, message, previewableMedia];
      return react.useMemo(() => {
        let intl10;
        let intl11;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl7;
        let intl8;
        let intl9;
        let text;
        if (0 !== previewableMedia.length) {
          if (!hasMessageContent) {
            if (1 === previewableMedia.length) {
              const first = previewableMedia[0];
              const type = first.type;
              if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
                const obj2 = { text: intl11.format(intl13.t.I7mNcA, obj3), secondaryText: null };
                intl11 = intl13.intl;
                return obj2;
              } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
                const obj4 = { text: intl10.format(intl13.t["Umew/z"], obj5), secondaryText: null };
                intl10 = intl13.intl;
                return obj4;
              } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
                const obj6 = { text: intl9.format(intl13.t["P/bwx9"], obj7), secondaryText: first.media.filename };
                intl9 = intl13.intl;
                return obj6;
              } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
                const obj8 = { text: intl8.format(intl13.t.TXNjGW, obj9), secondaryText: first.media.filename };
                intl8 = intl13.intl;
                return obj8;
              } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                const obj10 = { text: intl7.format(intl13.t.pnm8NC, obj11), secondaryText: null };
                intl7 = intl13.intl;
                return obj10;
              } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
                const obj12 = { text: intl6.format(intl13.t.k6YnQO, obj13), secondaryText: null };
                intl6 = intl13.intl;
                return obj12;
              } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
                const obj14 = { text: intl5.format(intl13.t["3oS3Jq"], obj15), secondaryText: null };
                intl5 = intl13.intl;
                return obj14;
              } else {
                const obj16 = { text: intl4.format(intl13.t.sHV43G, obj17), secondaryText: null };
                intl4 = intl13.intl;
                return obj16;
              }
            } else if (isForwardMessageDefault(message)) {
              const obj18 = { text: intl3.format(intl13.t["8xg9ZQ"], obj19), secondaryText: null };
              intl3 = intl13.intl;
              return obj18;
            } else {
              const everyResult = previewableMedia.every(
                (type) => type.type === message(hasMessageContent[13]).PreviewableMediaTypes.FILE,
              );
              const intl = intl13.intl;
              const obj = { emojiHook, count: previewableMedia.length };
              const formatResult = intl.format(intl13.t.sec4g7, obj);
              const intl2 = intl13.intl;
              const obj20 = { emojiHook, count: previewableMedia.length };
              let formatResult1 = intl2.format(intl13.t.UNRyki, obj20);
              if (everyResult) {
                formatResult1 = formatResult;
              }
              return { text: formatResult1, secondaryText: null };
            }
          }
        }
        const intl12 = intl13.intl;
        const format = intl12.format;
        const t = intl13.t;
        if (hasMessageContent) {
          const obj22 = { emojiHook };
          text = format(t.sHV43G, obj22);
        } else {
          const obj23 = { emojiHook };
          text = format(t.ZOzpKt, obj23);
        }
        return { text, secondaryText: null };
      }, items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let gradientColors;
      let gradientStyles;
      let hasMessageContent;
      let items;
      let messagePreview;
      let secondaryText;
      let text;
      const obj = react2;
      const cResult = obj.c(15);
      ({ text, secondaryText, hasMessageContent, messagePreview } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = InAppNotificationUtils;
        const messagePreviewTextVariant = tmpResult.getMessagePreviewTextVariant();
        cResult[0] = messagePreviewTextVariant;
        first = messagePreviewTextVariant;
      } else {
        first = cResult[0];
      }
      ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
      useTruncatedGradientColorsDefault();
      if (cResult[1] === tmp4.italic) {
        let tmp8;
        let tmp10;
        if (cResult[2] === text) {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== secondaryText) {
          let tmp11 = null;
          if (null != secondaryText) {
            const obj2 = {
              variant: "redesign/message-preview/medium",
              color: "text-link",
              lineClamp: metroImportDefault,
              children: secondaryText,
            };
            tmp11 = authStore(Text_Text.Text, obj2);
          }
          cResult[4] = secondaryText;
          cResult[5] = tmp11;
          tmp10 = tmp11;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === gradientColors) {
          if (cResult[7] === gradientStyles) {
            if (cResult[8] === hasMessageContent) {
              let tmp14;
              if (cResult[9] === messagePreview) {
                tmp14 = cResult[10];
              }
              if (cResult[11] === tmp8) {
                if (cResult[12] === tmp10) {
                  let tmp19;
                  if (cResult[13] === tmp14) {
                    tmp19 = cResult[14];
                  }
                  return tmp19;
                }
              }
              const obj3 = { children: items };
              items = [tmp8, tmp10, tmp14];
              const tmp22 = closure_12(unpackModuleId, obj3);
              cResult[11] = tmp8;
              cResult[12] = tmp10;
              cResult[13] = tmp14;
              cResult[14] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
        let tmp16 = null;
        if (hasMessageContent) {
          tmp16 = null;
          if (null != messagePreview) {
            const obj4 = {
              message: messagePreview,
              lineClamp: 1,
              maxHeight: metroRequire,
              textColor: "text-subtle",
              gradientStyles,
              gradientColors,
            };
            tmp16 = authStore(ChannelRowPreview.NativeChannelRowPreview, obj4);
          }
        }
        cResult[6] = gradientColors;
        cResult[7] = gradientStyles;
        cResult[8] = hasMessageContent;
        cResult[9] = messagePreview;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const obj5 = { variant: first, color: "text-default", style: tmp4.italic, children: text };
      const tmp9 = authStore(Text_Text.Text, obj5);
      cResult[1] = tmp4.italic;
      cResult[2] = text;
      cResult[3] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let gradientColors;
      let gradientStyles;
      let hasMessageContent;
      let messagePreview;
      let secondaryText;
      let text;
      ({ secondaryText, messagePreview } = arg0);
      ({ text, hasMessageContent } = arg0);
      const tmp = closure_13();
      const obj = InAppNotificationUtils;
      const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
      ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
      const children = [, ,];
      const obj2 = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text };
      useTruncatedGradientColorsDefault();
      children[0] = authStore(Text_Text.Text, obj2);
      let tmp8Result = null;
      if (null != secondaryText) {
        const obj3 = {
          variant: "redesign/message-preview/medium",
          color: "text-link",
          lineClamp: metroImportDefault,
          children: secondaryText,
        };
        tmp8Result = authStore(Text_Text.Text, obj3);
      }
      children[1] = tmp8Result;
      let tmp8Result2 = null;
      if (hasMessageContent) {
        tmp8Result2 = null;
        if (null != messagePreview) {
          const obj4 = {
            message: messagePreview,
            lineClamp: 1,
            maxHeight: metroRequire,
            textColor: "text-subtle",
            gradientStyles,
            gradientColors,
          };
          tmp8Result2 = authStore(ChannelRowPreview.NativeChannelRowPreview, obj4);
        }
      }
      children[2] = tmp8Result2;
      return closure_12(unpackModuleId, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isMilestone;
      let message;
      let reaction;
      let reactionCount;
      let renderAnnouncementText;
      let secondaryText;
      let text;
      const obj = react2;
      const cResult = obj.c(26);
      ({ message, reaction, reactionCount } = arg0);
      let tmp4 = message.embeds.length > 0;
      ({ renderAnnouncementText, isMilestone } = arg0);
      if (tmp4) {
        tmp4 = message.embeds[0].type === constants2.GIFV;
      }
      if (cResult[0] === tmp4) {
        let tmp6;
        if (cResult[1] === message.content) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === message) {
            let tmp8;
            let tmp12;
            if (cResult[5] === reaction) {
              tmp8 = cResult[6];
            }
            ({ text, secondaryText } = closure_14(tmp8));
            closure_14(tmp8);
            const tmpResult = InAppNotificationUtils;
            const hasPreviewableMedia = tmpResult.useHasPreviewableMedia(message);
            if (cResult[7] !== message) {
              const obj2 = { message };
              cResult[7] = message;
              cResult[8] = obj2;
              tmp12 = obj2;
            } else {
              tmp12 = cResult[8];
            }
            const tmpResult2 = useGetInitialMessagePreview;
            if (hasPreviewableMedia) {
              message = tmpResult2.useGetInitialMessagePreview(tmp12);
            }
            if (renderAnnouncementText) {
              let tmp23;
              let tmp25;
              if (cResult[9] !== reactionCount) {
                const intl2 = intl13.intl;
                const obj3 = { count: reactionCount };
                const formatResult = intl2.format(intl13.t.Tqk79E, obj3);
                cResult[9] = reactionCount;
                cResult[10] = formatResult;
                tmp23 = formatResult;
              } else {
                tmp23 = cResult[10];
              }
              if (cResult[11] !== tmp23) {
                const obj4 = { text: tmp23 };
                const tmp28 = authStore(closure_15, obj4);
                cResult[11] = tmp23;
                cResult[12] = tmp28;
                tmp25 = tmp28;
              } else {
                tmp25 = cResult[12];
              }
              return tmp25;
            } else if (isMilestone) {
              let formatResult1;
              if (cResult[13] === tmp6) {
                let tmp17;
                if (cResult[14] === reactionCount) {
                  tmp17 = cResult[15];
                }
                if (cResult[16] === tmp6) {
                  if (cResult[17] === message) {
                    if (cResult[18] === secondaryText) {
                      let tmp19;
                      if (cResult[19] === tmp17) {
                        tmp19 = cResult[20];
                      }
                      return tmp19;
                    }
                  }
                }
                const obj5 = { text: tmp17, secondaryText, hasMessageContent: tmp6, messagePreview: message };
                const tmp22 = authStore(closure_15, obj5);
                cResult[16] = tmp6;
                cResult[17] = message;
                cResult[18] = secondaryText;
                cResult[19] = tmp17;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
              const intl = intl13.intl;
              const format = intl.format;
              const t = intl13.t;
              if (tmp6) {
                const obj6 = { count: reactionCount };
                formatResult1 = format(t.NfZxrD, obj6);
              } else {
                const obj7 = { count: reactionCount };
                formatResult1 = format(t.vfYN5b, obj7);
              }
              cResult[13] = tmp6;
              cResult[14] = reactionCount;
              cResult[15] = formatResult1;
              tmp17 = formatResult1;
            } else {
              if (cResult[21] === tmp6) {
                if (cResult[22] === message) {
                  if (cResult[23] === secondaryText) {
                    let tmp13;
                    if (cResult[24] === text) {
                      tmp13 = cResult[25];
                    }
                    return tmp13;
                  }
                }
              }
              const obj8 = { text, secondaryText, hasMessageContent: tmp6, messagePreview: message };
              const tmp16 = authStore(closure_15, obj8);
              cResult[21] = tmp6;
              cResult[22] = message;
              cResult[23] = secondaryText;
              cResult[24] = text;
              cResult[25] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
        const obj9 = { message, reaction, hasMessageContent: tmp6 };
        cResult[3] = tmp6;
        cResult[4] = message;
        cResult[5] = reaction;
        cResult[6] = obj9;
        tmp8 = obj9;
      }
      let tmp7 = null != message.content;
      if (tmp7) {
        const str = message.content;
        tmp7 = "" !== str.trim();
      }
      if (tmp7) {
        tmp7 = !tmp4;
      }
      cResult[0] = tmp4;
      cResult[1] = message.content;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let intl2;
      let isMilestone;
      let message;
      let obj4;
      let reaction;
      let reactionCount;
      let renderAnnouncementText;
      ({ message, reactionCount } = arg0);
      let tmp = message.embeds.length > 0;
      ({ reaction, renderAnnouncementText, isMilestone } = arg0);
      if (tmp) {
        tmp = message.embeds[0].type === constants2.GIFV;
      }
      let tmp3 = null != message.content;
      if (tmp3) {
        const str = message.content;
        tmp3 = "" !== str.trim();
      }
      if (tmp3) {
        tmp3 = !tmp;
      }
      const tmp4 = closure_14({ message, reaction, hasMessageContent: tmp3 });
      const secondaryText = tmp4.secondaryText;
      const text = tmp4.text;
      const obj = InAppNotificationUtils;
      const hasPreviewableMedia = obj.useHasPreviewableMedia(message);
      const obj2 = useGetInitialMessagePreview;
      if (hasPreviewableMedia) {
        message = obj2.useGetInitialMessagePreview({ message });
      }
      if (renderAnnouncementText) {
        const obj3 = { text: intl2.format(intl13.t.Tqk79E, obj4) };
        intl2 = intl13.intl;
        obj4 = { count: reactionCount };
        return authStore(closure_15, obj3);
      } else if (isMilestone) {
        let formatResult;
        const intl = intl13.intl;
        const format = intl.format;
        const t = intl13.t;
        if (tmp3) {
          const obj5 = { count: reactionCount };
          formatResult = format(t.NfZxrD, obj5);
        } else {
          const obj6 = { count: reactionCount };
          formatResult = format(t.vfYN5b, obj6);
        }
        const obj7 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
        return authStore(closure_15, obj7);
      } else {
        const obj8 = { text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
        return authStore(closure_15, obj8);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled();
let result = size.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  let closure_8;
  let colorStrings;
  let obj4;
  notification = notification.notification;
  let id;
  let message;
  let c7;
  constants = undefined;
  let userAuthor;
  const tmp = closure_13();
  const channel = notification.channel;
  const guild = notification.guild;
  const parentChannel = notification.parentChannel;
  let id1;
  const user = notification.user;
  if (guild != null) {
    id1 = guild.id;
  }
  if (id1 == null) {
    id1 = channel.guild_id;
  }
  id = channel.id;
  message = notification.message;
  const type = channel.type;
  const GUILD_ANNOUNCEMENT = constants.GUILD_ANNOUNCEMENT;
  const reaction = notification.reaction;
  let type1;
  const isReactionMilestoneNotification = notification(guild[20]).isReactionMilestoneNotification;
  const reactions = message.reactions;
  notification(guild[20]);
  if (channel != null) {
    type1 = channel.type;
  }
  let tmp7 = type === GUILD_ANNOUNCEMENT;
  const result = isReactionMilestoneNotification(reactions, type1);
  c7 = result;
  let obj = parentChannel;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(() => {
    const obj = _mod12;
    return obj.sumBy(message.reactions, (count_details) => {
      count_details = count_details.count_details;
      let num;
      if (count_details != null) {
        num = count_details.burst;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (count_details != null) {
        num2 = count_details.normal;
      }
      if (num2 == null) {
        num2 = 0;
      }
      return num + num2;
    });
  }, items);
  if (tmp7) {
    let num = 1;
    tmp7 = 1 !== memo;
  }
  constants = tmp7;
  userAuthor = null;
  if (!tmp7) {
    userAuthor = null;
    if (!result) {
      const tmp3Result = notification(guild[28]);
      userAuthor = tmp3Result.getUserAuthor(user, channel);
    }
  }
  const items1 = [id];
  let colorString;
  const tmp3Result2 = notification(guild[29]);
  const stateFromStores = tmp3Result2.useStateFromStores(items1, () => id.roleStyle);
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  let tmp14Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      let obj2 = { color: colorString, colors: colorStrings, containerStyles: tmp.newContainerRoleDot };
      colorStrings = undefined;
      const RoleDot = tmp3(tmp4[25]).RoleDot;
      if (userAuthor != null) {
        colorStrings = userAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      tmp14Result = closure_10(RoleDot, obj2);
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp7, result];
  const items3 = [channel.id, id, id1, message.id, ,];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = obj.useMemo(
    () => ({ type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str }),
    items2,
  );
  const items4 = [id];
  const callback = obj.useCallback(() => {
    const obj = InAppNotificationUtils;
    const obj2 = {
      type: notification.type,
      dismissReason: "notification_clicked",
      guildId: id1,
      channelId: id,
      messageId: message.id,
      inAppNotificationId: notification.inAppNotificationId,
    };
    obj.trackDismissed(obj2);
    const obj3 = ModalActionCreatorsDefault;
    obj3.popAll();
    const obj4 = transitionToChannel;
    obj4.transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj5 = InAppNotificationActionCreatorsDefault;
    obj5.clearNotification();
  }, items3);
  const callback1 = obj.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channelId: id };
    return obj.pushLazy(asyncRequire(12495, dependencyMap.paths), obj2, "in-app-notification-settings-modal");
  }, items4);
  let obj3 = {
    icon: closure_10(ReactorNotificationIcon, { notification, isMilestone: result }),
    accessoryLabelNode: tmp14Result,
    header: memo1,
    onPress: callback,
    onSettingsPress: callback1,
    notification,
    rightAccessory: closure_10(notification(guild[36]).MediaPreviewRightAccessory, { message }),
    children: closure_10(id1, obj4),
  };
  const NotificationPressable = tmp3(tmp4[35]).NotificationPressable;
  obj4 = {
    style: tmp.container,
    children: closure_10(closure_16, {
      message,
      reaction,
      reactionCount: memo,
      renderAnnouncementText: tmp7,
      isMilestone: result,
    }),
  };
  return closure_10(NotificationPressable, obj3);
}
