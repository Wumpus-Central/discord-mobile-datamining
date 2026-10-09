// discord_app/modules/in_app_notifications/native/ReactionNotification.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import ForumPostReactionButton from "../../forums/native/posts/reactions/ForumPostReactionButton.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import ChannelRowPreview from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import useGetInitialMessagePreview from "hooks/useGetInitialMessagePreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function ReactorNotificationIcon(notification) {
  if (closure_17) {
    let NORMAL = dependencyMap;
    const cResult = c.c(6);
    const tmp22 = closure_13();
    ({ user: user2, guild: guild2, channel: channel2 } = notification.notification);
    if (!notification.isMilestone) {
      let tmp23 = null;
      if (null != user2) {
        const obj2 = { user: user2, guildId: null, size: null };
        tmp23 = guild2 == tmp23;
        let id;
        if (!tmp23) {
          id = guild2.id;
        }
        obj2.guildId = id;
        obj2.size = native.AvatarSizes.NORMAL;
        let tmp28Result = collapsed(native.Avatar, obj2);
      } else {
        const obj3 = { guild: guild2, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp22.guildIcon };
        tmp28Result = collapsed(GuildIconDefault, obj3);
      }
      cResult[2] = guild2;
      cResult[3] = tmp22;
      cResult[4] = user2;
      cResult[5] = tmp28Result;
    }
    if (cResult[0] !== channel2) {
      const obj5 = { channel: channel2, size: null };
      NORMAL = native.AvatarSizes.NORMAL;
      obj5.size = NORMAL;
      const tmp35 = collapsed(GroupDMAvatarDefault, obj5);
      cResult[0] = channel2;
      cResult[1] = tmp35;
    }
  } else {
    ({ user, guild, channel } = notification.notification);
    if (notification.isMilestone) {
      if (channel.isGroupDM()) {
        const obj6 = { channel, size: native.AvatarSizes.NORMAL };
        let tmp10Result = collapsed(GroupDMAvatarDefault, obj6);
      }
      return tmp10Result;
    }
    if (null != user) {
      const obj7 = { user, guildId: null, size: null };
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj7.guildId = id1;
      obj7.size = native.AvatarSizes.NORMAL;
      tmp10Result = collapsed(native.Avatar, obj7);
    } else {
      const obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp2.guildIcon };
      tmp10Result = collapsed(GuildIconDefault, obj);
    }
    tmp2 = closure_13();
  }
}
const View = fn(17).View;
const InAppNotificationConstants = fn(12529);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } =
  InAppNotificationConstants);
const Constants = fn(1085);
({ ChannelTypes: closure_8, MessageEmbedTypes: closure_9 } = Constants);
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  newContainerRoleDot: { paddingRight: 4, paddingTop: 0 },
  container: { flexDirection: "column" },
  textEmoji: { fontSize: 12 },
  imageEmoji: null,
  italic: null,
  guildIcon: null,
};
let PlatformUtils = fn(1383);
let tmp5;
if (!PlatformUtils.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
obj2.imageEmoji = { height: 16, width: 16, transform: tmp5 };
PlatformUtils = fn(1383);
obj2.italic = {
  fontStyle: "italic",
  fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
};
let obj5 = {
  fontStyle: "italic",
  fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
};
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useReactionSystemText(hasMessageContent) {
      const cResult = reaction(setting[11]).c(57);
      ({ message, reaction } = hasMessageContent);
      hasMessageContent = hasMessageContent.hasMessageContent;
      const tmp4 = closure_13();
      importDefault = tmp4;
      const AnimateEmoji = reaction(setting[12]).AnimateEmoji;
      setting = AnimateEmoji.useSetting();
      let obj = reaction(setting[11]);
      const previewableMedia = reaction(setting[13]).usePreviewableMedia(message);
      if (cResult[0] === setting) {
        if (cResult[1] === reaction) {
          if (cResult[2] === tmp4.imageEmoji) {
            if (cResult[3] === tmp4.italic) {
              if (cResult[4] === tmp4.textEmoji) {
                let tmp6 = cResult[5];
              }
              if (0 !== previewableMedia.length) {
                if (!hasMessageContent) {
                  if (1 === previewableMedia.length) {
                    const first = previewableMedia[0];
                    const type = first.type;
                    if (tmp(tmp2[13]).PreviewableMediaTypes.IMAGE === type) {
                      if (cResult[11] !== tmp6) {
                        const intl11 = tmp(tmp2[18]).intl;
                        const obj3 = { emojiHook: tmp6 };
                        const formatResult = intl11.format(tmp(tmp2[18]).t.I7mNcA, obj3);
                        cResult[11] = tmp6;
                        cResult[12] = formatResult;
                        let tmp38 = formatResult;
                      } else {
                        tmp38 = cResult[12];
                      }
                      if (cResult[13] !== tmp38) {
                        let obj4 = { text: tmp38, secondaryText: null };
                        cResult[13] = tmp38;
                        cResult[14] = obj4;
                        let tmp40 = obj4;
                      } else {
                        tmp40 = cResult[14];
                      }
                      let tmp12 = tmp40;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.VIDEO === type) {
                      if (cResult[15] !== tmp6) {
                        const intl10 = tmp(tmp2[18]).intl;
                        const obj5 = { emojiHook: tmp6 };
                        const formatResult1 = intl10.format(tmp(tmp2[18]).t["Umew/z"], obj5);
                        cResult[15] = tmp6;
                        cResult[16] = formatResult1;
                        let tmp35 = formatResult1;
                      } else {
                        tmp35 = cResult[16];
                      }
                      if (cResult[17] !== tmp35) {
                        const obj6 = { text: tmp35, secondaryText: null };
                        cResult[17] = tmp35;
                        cResult[18] = obj6;
                        let tmp37 = obj6;
                      } else {
                        tmp37 = cResult[18];
                      }
                      tmp12 = tmp37;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.AUDIO === type) {
                      if (cResult[19] !== tmp6) {
                        const intl9 = tmp(tmp2[18]).intl;
                        let obj7 = { emojiHook: tmp6 };
                        const formatResult2 = intl9.format(tmp(tmp2[18]).t["P/bwx9"], obj7);
                        cResult[19] = tmp6;
                        cResult[20] = formatResult2;
                        let tmp32 = formatResult2;
                      } else {
                        tmp32 = cResult[20];
                      }
                      if (cResult[21] === first.media.filename) {
                        if (cResult[22] === tmp32) {
                          let tmp34 = cResult[23];
                        }
                        tmp12 = tmp34;
                      }
                      const obj8 = { text: tmp32, secondaryText: first.media.filename };
                      cResult[21] = first.media.filename;
                      cResult[22] = tmp32;
                      cResult[23] = obj8;
                      tmp34 = obj8;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.FILE === type) {
                      if (cResult[24] !== tmp6) {
                        const intl8 = tmp(tmp2[18]).intl;
                        const obj9 = { emojiHook: tmp6 };
                        const formatResult3 = intl8.format(tmp(tmp2[18]).t.TXNjGW, obj9);
                        cResult[24] = tmp6;
                        cResult[25] = formatResult3;
                        let tmp29 = formatResult3;
                      } else {
                        tmp29 = cResult[25];
                      }
                      if (cResult[26] === first.media.filename) {
                        if (cResult[27] === tmp29) {
                          let tmp31 = cResult[28];
                        }
                        tmp12 = tmp31;
                      }
                      const obj10 = { text: tmp29, secondaryText: first.media.filename };
                      cResult[26] = first.media.filename;
                      cResult[27] = tmp29;
                      cResult[28] = obj10;
                      tmp31 = obj10;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.STICKER === type) {
                      if (cResult[29] !== tmp6) {
                        const intl7 = tmp(tmp2[18]).intl;
                        const obj11 = { emojiHook: tmp6 };
                        const formatResult4 = intl7.format(tmp(tmp2[18]).t.pnm8NC, obj11);
                        cResult[29] = tmp6;
                        cResult[30] = formatResult4;
                        let tmp26 = formatResult4;
                      } else {
                        tmp26 = cResult[30];
                      }
                      if (cResult[31] !== tmp26) {
                        const obj12 = { text: tmp26, secondaryText: null };
                        cResult[31] = tmp26;
                        cResult[32] = obj12;
                        let tmp28 = obj12;
                      } else {
                        tmp28 = cResult[32];
                      }
                      tmp12 = tmp28;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.VOICE_MESSAGE === type) {
                      if (cResult[33] !== tmp6) {
                        const intl6 = tmp(tmp2[18]).intl;
                        const obj13 = { emojiHook: tmp6 };
                        const formatResult5 = intl6.format(tmp(tmp2[18]).t.k6YnQO, obj13);
                        cResult[33] = tmp6;
                        cResult[34] = formatResult5;
                        let tmp23 = formatResult5;
                      } else {
                        tmp23 = cResult[34];
                      }
                      if (cResult[35] !== tmp23) {
                        const obj14 = { text: tmp23, secondaryText: null };
                        cResult[35] = tmp23;
                        cResult[36] = obj14;
                        let tmp25 = obj14;
                      } else {
                        tmp25 = cResult[36];
                      }
                      tmp12 = tmp25;
                    } else if (tmp(tmp2[13]).PreviewableMediaTypes.GIF === type) {
                      if (cResult[37] !== tmp6) {
                        const intl5 = tmp(tmp2[18]).intl;
                        const obj15 = { emojiHook: tmp6 };
                        const formatResult6 = intl5.format(tmp(tmp2[18]).t["3oS3Jq"], obj15);
                        cResult[37] = tmp6;
                        cResult[38] = formatResult6;
                        let tmp20 = formatResult6;
                      } else {
                        tmp20 = cResult[38];
                      }
                      if (cResult[39] !== tmp20) {
                        const obj16 = { text: tmp20, secondaryText: null };
                        cResult[39] = tmp20;
                        cResult[40] = obj16;
                        let tmp22 = obj16;
                      } else {
                        tmp22 = cResult[40];
                      }
                      tmp12 = tmp22;
                    } else {
                      if (cResult[41] !== tmp6) {
                        const intl4 = tmp(tmp2[18]).intl;
                        const obj17 = { emojiHook: tmp6 };
                        const formatResult7 = intl4.format(tmp(tmp2[18]).t.sHV43G, obj17);
                        cResult[41] = tmp6;
                        cResult[42] = formatResult7;
                        let tmp17 = formatResult7;
                      } else {
                        tmp17 = cResult[42];
                      }
                      if (cResult[43] !== tmp17) {
                        const obj18 = { text: tmp17, secondaryText: null };
                        cResult[43] = tmp17;
                        cResult[44] = obj18;
                        let tmp19 = obj18;
                      } else {
                        tmp19 = cResult[44];
                      }
                      tmp12 = tmp19;
                    }
                  } else if (require("isForwardMessage")(message)) {
                    if (cResult[45] !== tmp6) {
                      const intl3 = tmp(tmp2[18]).intl;
                      const obj19 = { emojiHook: tmp6 };
                      const formatResult8 = intl3.format(tmp(tmp2[18]).t["8xg9ZQ"], obj19);
                      cResult[45] = tmp6;
                      cResult[46] = formatResult8;
                      let tmp13 = formatResult8;
                    } else {
                      tmp13 = cResult[46];
                    }
                    if (cResult[47] !== tmp13) {
                      const obj20 = { text: tmp13, secondaryText: null };
                      cResult[47] = tmp13;
                      cResult[48] = obj20;
                      let tmp15 = obj20;
                    } else {
                      tmp15 = cResult[48];
                    }
                    tmp12 = tmp15;
                  } else {
                    if (cResult[49] === previewableMedia.length) {
                      if (cResult[50] === tmp6) {
                        let tmp8 = cResult[51];
                      }
                      if (cResult[52] === length) {
                        if (cResult[53] === tmp6) {
                          let tmp10 = cResult[54];
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
                      const obj22 = { emojiHook: tmp6, count: length };
                      const formatResult9 = intl2.format(tmp(tmp2[18]).t.UNRyki, obj22);
                      cResult[52] = length;
                      cResult[53] = tmp6;
                      cResult[54] = formatResult9;
                      tmp10 = formatResult9;
                    }
                    const intl = tmp(tmp2[18]).intl;
                    const obj23 = { emojiHook: tmp6, count: previewableMedia.length };
                    const formatResult10 = intl.format(tmp(tmp2[18]).t.sec4g7, obj23);
                    cResult[49] = previewableMedia.length;
                    cResult[50] = tmp6;
                    cResult[51] = formatResult10;
                    tmp8 = formatResult10;
                  }
                  return tmp12;
                }
              }
              if (cResult[6] === tmp6) {
                if (cResult[7] === hasMessageContent) {
                  if (cResult[9] !== cResult[8]) {
                    const obj24 = { text: tmp41, secondaryText: null };
                    cResult[9] = tmp41;
                    cResult[10] = obj24;
                  }
                }
              }
              const intl12 = tmp(tmp2[18]).intl;
              const format = intl12.format;
              let t = tmp(tmp2[18]).t;
              if (hasMessageContent) {
                t = { emojiHook: tmp6 };
                let formatResult11 = format(t.sHV43G, t);
              } else {
                const obj25 = { emojiHook: tmp6 };
                formatResult11 = format(t.ZOzpKt, obj25);
              }
              cResult[6] = tmp6;
              cResult[7] = hasMessageContent;
              cResult[8] = formatResult11;
            }
          }
        }
      }
      const fn = function n() {
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
              const obj2 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
              return collapsed(Text_Text.Text, obj2, reaction.emoji.name);
            }
          }
          let id1;
          if (reaction != null) {
            id1 = reaction.emoji.id;
          }
          let emojiURL;
          if (null != id1) {
            const obj4 = { id: reaction.emoji.id, animated: null, size: null };
            let animated = setting;
            if (setting) {
              animated = reaction.emoji.animated;
            }
            obj4.animated = animated;
            obj4.size = ForumPostReactionButton.DEFAULT_EMOJI_SIZE;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
          }
          const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = italic);
          obj7.src = emojiURL;
          obj7.name = reaction.emoji.name;
          return collapsed(EmojiDefault, obj7);
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
  : function useReactionSystemText(message) {
      message = message.message;
      const reaction = message.reaction;
      const hasMessageContent = message.hasMessageContent;
      const tmp = closure_13();
      noop = tmp;
      const AnimateEmoji = message(hasMessageContent[12]).AnimateEmoji;
      const setting = AnimateEmoji.useSetting();
      const previewableMedia = message(hasMessageContent[13]).usePreviewableMedia(message);
      const items = [setting, reaction, , ,];
      ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp);
      const emojiHook = noop.useCallback(() => {
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
              const obj2 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
              return collapsed(Text_Text.Text, obj2, reaction.emoji.name);
            }
          }
          let id1;
          if (reaction != null) {
            id1 = reaction.emoji.id;
          }
          let emojiURL;
          if (null != id1) {
            const obj4 = { id: reaction.emoji.id, animated: null, size: null };
            let animated = setting;
            if (setting) {
              animated = reaction.emoji.animated;
            }
            obj4.animated = animated;
            obj4.size = ForumPostReactionButton.DEFAULT_EMOJI_SIZE;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
          }
          const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = italic);
          obj7.src = emojiURL;
          obj7.name = reaction.emoji.name;
          return collapsed(EmojiDefault, obj7);
        }
      }, items);
      const items1 = [emojiHook, hasMessageContent, message, previewableMedia];
      return noop.useMemo(() => {
        if (0 !== previewableMedia.length) {
          if (!hasMessageContent) {
            if (1 === previewableMedia.length) {
              const first = previewableMedia[0];
              const type = first.type;
              if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
                const obj2 = { text: null, secondaryText: null };
                const intl11 = util.intl;
                const obj3 = { emojiHook };
                obj2.text = intl11.format(util.t.I7mNcA, obj3);
                return obj2;
              } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
                const obj4 = { text: null, secondaryText: null };
                const intl10 = util.intl;
                const obj5 = { emojiHook };
                obj4.text = intl10.format(util.t["Umew/z"], obj5);
                return obj4;
              } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
                const obj6 = { text: null, secondaryText: null };
                const intl9 = util.intl;
                const obj7 = { emojiHook };
                obj6.text = intl9.format(util.t["P/bwx9"], obj7);
                obj6.secondaryText = first.media.filename;
                return obj6;
              } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
                const obj8 = { text: null, secondaryText: null };
                const intl8 = util.intl;
                const obj9 = { emojiHook };
                obj8.text = intl8.format(util.t.TXNjGW, obj9);
                obj8.secondaryText = first.media.filename;
                return obj8;
              } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                const obj10 = { text: null, secondaryText: null };
                const intl7 = util.intl;
                const obj11 = { emojiHook };
                obj10.text = intl7.format(util.t.pnm8NC, obj11);
                return obj10;
              } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
                const obj12 = { text: null, secondaryText: null };
                const intl6 = util.intl;
                const obj13 = { emojiHook };
                obj12.text = intl6.format(util.t.k6YnQO, obj13);
                return obj12;
              } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
                const obj14 = { text: null, secondaryText: null };
                const intl5 = util.intl;
                const obj15 = { emojiHook };
                obj14.text = intl5.format(util.t["3oS3Jq"], obj15);
                return obj14;
              } else {
                const obj16 = { text: null, secondaryText: null };
                const intl4 = util.intl;
                const obj17 = { emojiHook };
                obj16.text = intl4.format(util.t.sHV43G, obj17);
                return obj16;
              }
            } else if (isForwardMessageDefault(message)) {
              const obj18 = { text: null, secondaryText: null };
              const intl3 = util.intl;
              const obj19 = { emojiHook };
              obj18.text = intl3.format(util.t["8xg9ZQ"], obj19);
              return obj18;
            } else {
              const intl = util.intl;
              const obj = { emojiHook, count: previewableMedia.length };
              const everyResult = previewableMedia.every(
                (type) => type.type === message(hasMessageContent[13]).PreviewableMediaTypes.FILE,
              );
              const intl2 = util.intl;
              const obj20 = { emojiHook, count: previewableMedia.length };
              let formatResult1 = intl2.format(util.t.UNRyki, obj20);
              if (everyResult) {
                formatResult1 = formatResult;
              }
              const obj21 = { text: formatResult1, secondaryText: null };
              return obj21;
            }
          }
        }
        const intl12 = util.intl;
        const format = intl12.format;
        const t = util.t;
        if (hasMessageContent) {
          const obj22 = { emojiHook };
          let text = format(t.sHV43G, obj22);
        } else {
          const obj23 = { emojiHook };
          text = format(t.ZOzpKt, obj23);
        }
        return { text, secondaryText: null };
      }, items1);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReactionNotificationBody(arg0) {
      const cResult = c.c(15);
      ({ text, secondaryText, hasMessageContent, messagePreview } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const messagePreviewTextVariant = InAppNotificationUtils.getMessagePreviewTextVariant();
        cResult[0] = messagePreviewTextVariant;
        let first = messagePreviewTextVariant;
        const tmpResult = InAppNotificationUtils;
      } else {
        first = cResult[0];
      }
      ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
      if (cResult[1] === tmp4.italic) {
        if (cResult[2] === text) {
          let tmp8 = cResult[3];
        }
        if (cResult[4] !== secondaryText) {
          let tmp11 = null;
          if (null != secondaryText) {
            const obj2 = {
              variant: "redesign/message-preview/medium",
              color: "text-link",
              lineClamp,
              children: secondaryText,
            };
            tmp11 = collapsed(Text_Text.Text, obj2);
          }
          cResult[4] = secondaryText;
          cResult[5] = tmp11;
          let tmp10 = tmp11;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === gradientColors) {
          if (cResult[7] === gradientStyles) {
            if (cResult[8] === hasMessageContent) {
              if (cResult[9] === messagePreview) {
                let tmp14 = cResult[10];
              }
              if (cResult[11] === tmp8) {
                if (cResult[12] === tmp10) {
                  if (cResult[13] === tmp14) {
                    let tmp19 = cResult[14];
                  }
                  return tmp19;
                }
              }
              const obj3 = { children: null };
              const items = [tmp8, tmp10, tmp14];
              obj3.children = items;
              const tmp22 = __initData(closure_1_11, obj3);
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
              maxHeight,
              textColor: "text-subtle",
              gradientStyles,
              gradientColors,
            };
            tmp16 = collapsed(ChannelRowPreview.NativeChannelRowPreview, obj4);
          }
        }
        cResult[6] = gradientColors;
        cResult[7] = gradientStyles;
        cResult[8] = hasMessageContent;
        cResult[9] = messagePreview;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const tmp9 = collapsed(Text_Text.Text, {
        variant: first,
        color: "text-default",
        style: tmp4.italic,
        children: text,
      });
      cResult[1] = tmp4.italic;
      cResult[2] = text;
      cResult[3] = tmp9;
      tmp8 = tmp9;
      const obj5 = { variant: first, color: "text-default", style: tmp4.italic, children: text };
      const tmp7 = useTruncatedGradientColorsDefault();
    }
  : function ReactionNotificationBody(arg0) {
      ({ secondaryText, messagePreview } = arg0);
      ({ text, hasMessageContent } = arg0);
      const tmp = closure_13();
      const messagePreviewTextVariant = InAppNotificationUtils.getMessagePreviewTextVariant();
      ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
      const children = [
        collapsed(Text_Text.Text, {
          variant: messagePreviewTextVariant,
          color: "text-default",
          style: tmp.italic,
          children: text,
        }),
        ,
      ];
      let tmp8Result = null;
      if (null != secondaryText) {
        const obj3 = {
          variant: "redesign/message-preview/medium",
          color: "text-link",
          lineClamp,
          children: secondaryText,
        };
        tmp8Result = collapsed(Text_Text.Text, obj3);
      }
      children[1] = tmp8Result;
      let tmp8Result2 = null;
      if (hasMessageContent) {
        tmp8Result2 = null;
        if (null != messagePreview) {
          const obj4 = {
            message: messagePreview,
            lineClamp: 1,
            maxHeight,
            textColor: "text-subtle",
            gradientStyles,
            gradientColors,
          };
          tmp8Result2 = collapsed(ChannelRowPreview.NativeChannelRowPreview, obj4);
        }
      }
      children[2] = tmp8Result2;
      return __initData(closure_1_11, { children });
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReactionNotificationBodyWrapper(arg0) {
      const cResult = c.c(26);
      ({ message, reaction, reactionCount } = arg0);
      let tmp4 = message.embeds.length > 0;
      ({ renderAnnouncementText, isMilestone } = arg0);
      if (tmp4) {
        tmp4 = message.embeds[0].type === constants2.GIFV;
      }
      if (cResult[0] === tmp4) {
        if (cResult[1] === message.content) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === message) {
            if (cResult[5] === reaction) {
              let tmp8 = cResult[6];
            }
            ({ text, secondaryText } = closure_14(tmp8));
            const tmp10 = closure_14(tmp8);
            const hasPreviewableMedia = InAppNotificationUtils.useHasPreviewableMedia(message);
            if (cResult[7] !== message) {
              const obj2 = { message };
              cResult[7] = message;
              cResult[8] = obj2;
              let tmp12 = obj2;
            } else {
              tmp12 = cResult[8];
            }
            const tmpResult = InAppNotificationUtils;
            if (hasPreviewableMedia) {
              message = tmpResult2.useGetInitialMessagePreview(tmp12);
            }
            if (renderAnnouncementText) {
              if (cResult[9] !== reactionCount) {
                const intl2 = util.intl;
                const obj3 = { count: reactionCount };
                const formatResult = intl2.format(util.t.Tqk79E, obj3);
                cResult[9] = reactionCount;
                cResult[10] = formatResult;
                let tmp24 = formatResult;
              } else {
                tmp24 = cResult[10];
              }
              if (cResult[11] !== tmp24) {
                const obj4 = { text: tmp24 };
                const tmp29 = collapsed(closure_15, obj4);
                cResult[11] = tmp24;
                cResult[12] = tmp29;
                let tmp26 = tmp29;
              } else {
                tmp26 = cResult[12];
              }
              return tmp26;
            } else if (isMilestone) {
              if (cResult[13] === tmp6) {
                if (cResult[14] === reactionCount) {
                  if (cResult[16] === tmp6) {
                    if (cResult[17] === message) {
                      if (cResult[18] === secondaryText) {
                        if (cResult[19] === tmp17) {
                          let tmp20 = cResult[20];
                        }
                        return tmp20;
                      }
                    }
                  }
                  const obj5 = { text: cResult[15], secondaryText, hasMessageContent: tmp6, messagePreview: message };
                  const tmp23 = collapsed(closure_15, obj5);
                  cResult[16] = tmp6;
                  cResult[17] = message;
                  cResult[18] = secondaryText;
                  cResult[19] = cResult[15];
                  cResult[20] = tmp23;
                  tmp20 = tmp23;
                }
              }
              const intl = util.intl;
              const format = intl.format;
              let t = util.t;
              if (tmp6) {
                t = { count: reactionCount };
                let formatResult1 = format(t.NfZxrD, t);
              } else {
                const obj6 = { count: reactionCount };
                formatResult1 = format(t.vfYN5b, obj6);
              }
              cResult[13] = tmp6;
              cResult[14] = reactionCount;
              cResult[15] = formatResult1;
            } else {
              if (cResult[21] === tmp6) {
                if (cResult[22] === message) {
                  if (cResult[23] === secondaryText) {
                    if (cResult[24] === text) {
                      let tmp13 = cResult[25];
                    }
                    return tmp13;
                  }
                }
              }
              const obj7 = { text, secondaryText, hasMessageContent: tmp6, messagePreview: message };
              const tmp16 = collapsed(closure_15, obj7);
              cResult[21] = tmp6;
              cResult[22] = message;
              cResult[23] = secondaryText;
              cResult[24] = text;
              cResult[25] = tmp16;
              tmp13 = tmp16;
            }
            tmpResult2 = useGetInitialMessagePreview;
          }
        }
        const obj8 = { message, reaction, hasMessageContent: tmp6 };
        cResult[3] = tmp6;
        cResult[4] = message;
        cResult[5] = reaction;
        cResult[6] = obj8;
        tmp8 = obj8;
      }
      let tmp7 = null != message.content;
      if (tmp7) {
        tmp7 = "" !== message.content.trim();
      }
      if (tmp7) {
        tmp7 = !tmp4;
      }
      cResult[0] = tmp4;
      cResult[1] = message.content;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : function ReactionNotificationBodyWrapper(arg0) {
      ({ message, reactionCount } = arg0);
      let tmp = message.embeds.length > 0;
      ({ reaction, renderAnnouncementText, isMilestone } = arg0);
      if (tmp) {
        tmp = message.embeds[0].type === constants2.GIFV;
      }
      let tmp3 = null != message.content;
      if (tmp3) {
        tmp3 = "" !== message.content.trim();
      }
      if (tmp3) {
        tmp3 = !tmp;
      }
      const tmp4 = closure_14({ message, reaction, hasMessageContent: tmp3 });
      const secondaryText = tmp4.secondaryText;
      const hasPreviewableMedia = InAppNotificationUtils.useHasPreviewableMedia(message);
      if (hasPreviewableMedia) {
        message = obj2.useGetInitialMessagePreview({ message });
      }
      if (renderAnnouncementText) {
        const obj3 = { text: null };
        const intl2 = util.intl;
        const obj4 = { count: reactionCount };
        obj3.text = intl2.format(util.t.Tqk79E, obj4);
        return collapsed(closure_15, obj3);
      } else if (isMilestone) {
        const intl = util.intl;
        const format = intl.format;
        const t = util.t;
        if (tmp3) {
          const obj5 = { count: reactionCount };
          let formatResult = format(t.NfZxrD, obj5);
        } else {
          const obj6 = { count: reactionCount };
          formatResult = format(t.vfYN5b, obj6);
        }
        const obj7 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
        return collapsed(closure_15, obj7);
      } else {
        const obj8 = { text: tmp4.text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
        return collapsed(closure_15, obj8);
      }
      obj2 = useGetInitialMessagePreview;
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  notification = notification.notification;
  let id;
  let message;
  c7 = undefined;
  constants = undefined;
  let userAuthor;
  const tmp = closure_13();
  const channel = notification.channel;
  guild = notification.guild;
  const parentChannel = notification.parentChannel;
  let id1;
  if (guild != null) {
    id1 = guild.id;
  }
  if (id1 == null) {
    id1 = channel.guild_id;
  }
  id = channel.id;
  message = notification.message;
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp6 = channel.type === constants.GUILD_ANNOUNCEMENT;
  const result = notification(guild[20]).isReactionMilestoneNotification(message.reactions, type);
  c7 = result;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(
    () =>
      _mod12.sumBy(message.reactions, (count_details) => {
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
      }),
    items,
  );
  if (tmp6) {
    tmp6 = 1 !== memo;
  }
  constants = tmp6;
  userAuthor = null;
  if (!tmp6) {
    userAuthor = null;
    if (!result) {
      userAuthor = tmp3(tmp4[28]).getUserAuthor(notification.user, channel);
      const tmp3Result = tmp3(tmp4[28]);
    }
  }
  let obj = notification(guild[20]);
  const items1 = [id];
  let colorString;
  const stateFromStores = notification(guild[29]).useStateFromStores(items1, () => id.roleStyle);
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  let tmp13Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      let obj3 = { color: colorString, colors: null, containerStyles: null };
      let colorStrings;
      if (userAuthor != null) {
        colorStrings = userAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      obj3.colors = colorStrings;
      obj3.containerStyles = tmp.newContainerRoleDot;
      tmp13Result = closure_10(tmp3(tmp4[25]).RoleDot, obj3);
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp6, result];
  const items3 = [channel.id, id, id1, message.id, ,];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = obj2.useMemo(() => {
    const obj = { type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str };
    return obj;
  }, items2);
  const items4 = [id];
  const callback = obj2.useCallback(() => {
    InAppNotificationUtils.trackDismissed({
      type: notification.type,
      dismissReason: "notification_clicked",
      guildId: id1,
      channelId: id,
      messageId: message.id,
      inAppNotificationId: notification.inAppNotificationId,
    });
    const obj2 = {
      type: notification.type,
      dismissReason: "notification_clicked",
      guildId: id1,
      channelId: id,
      messageId: message.id,
      inAppNotificationId: notification.inAppNotificationId,
    };
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
    InAppNotificationActionCreatorsDefault.clearNotification();
  }, items3);
  const callback1 = obj2.useCallback(
    () =>
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(12546, dependencyMap.paths),
        { channelId: id },
        "in-app-notification-settings-modal",
      ),
    items4,
  );
  let obj4 = {
    icon: closure_10(ReactorNotificationIcon, { notification, isMilestone: result }),
    accessoryLabelNode: tmp13Result,
    header: memo1,
    onPress: callback,
    onSettingsPress: callback1,
    notification,
    rightAccessory: closure_10(notification(guild[36]).MediaPreviewRightAccessory, { message }),
    children: null,
  };
  const tmp3Result2 = notification(guild[29]);
  obj4.children = closure_10(id1, {
    style: tmp.container,
    children: closure_10(closure_16, {
      message,
      reaction: notification.reaction,
      reactionCount: memo,
      renderAnnouncementText: tmp6,
      isMilestone: result,
    }),
  });
  return closure_10(notification(guild[35]).NotificationPressable, obj4);
}
