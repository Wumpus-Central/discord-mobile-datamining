// === Module 10217: ReactionNotification ===

// Module 10217 (ReactionNotification)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import Text_Text from "Text/Text" /* 4556 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import EmojiDefault from "Emoji" /* 7130 */;
import isForwardMessageDefault from "isForwardMessage" /* 7302 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10096 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 10108 */;
import ChannelRowPreview from "ChannelRowPreview" /* 10109 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10131 */;
import ForumPostReactionButton from "ForumPostReactionButton" /* 10218 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const GuildIconDefault = GuildIcon;

require = fn;
function ReactionNotificationBody(arg0) {
  ({ secondaryText, messagePreview } = arg0);
  ({ text, hasMessageContent } = arg0);
  let obj = InAppNotificationUtils;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  const tmp = closure_13();
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  obj = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text };
  const children = [closure_1_10(Text_Text.Text, obj), , ];
  let tmp8Result = null;
  if (null != secondaryText) {
    obj = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp, children: secondaryText };
    tmp8Result = closure_1_10(Text_Text.Text, obj);
  }
  children[1] = tmp8Result;
  tmp8Result = null;
  if (hasMessageContent) {
    tmp8Result = null;
    if (null != messagePreview) {
      const obj1 = { message: messagePreview, lineClamp: 1, maxHeight, textColor: "text-subtle", gradientStyles, gradientColors };
      tmp8Result = closure_1_10(ChannelRowPreview.NativeChannelRowPreview, obj1);
    }
  }
  children[2] = tmp8Result;
  return closure_1_12(closure_1_11, { children });
}
function ReactionNotificationBodyWrapper(arg0) {
  ({ message, reaction, reactionCount } = arg0);
  let tmp = message.embeds.length > 0;
  ({ renderAnnouncementText, isMilestone } = arg0);
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
  dependencyMap = tmp3;
  const tmp4 = closure_13();
  noop = tmp4;
  const AnimateEmoji = message(1935).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = message(10131);
  const previewableMedia = obj.usePreviewableMedia(message);
  const items = [setting, reaction, , , ];
  ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp4);
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
          let obj = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
          return closure_2_10(Text_Text.Text, obj, reaction.emoji.name);
        }
      }
      let id1;
      if (reaction != null) {
        id1 = reaction.emoji.id;
      }
      let emojiURL;
      if (null != id1) {
        obj = { id: reaction.emoji.id, animated: null, size: null };
        let animated = setting;
        if (setting) {
          animated = reaction.emoji.animated;
        }
        obj.animated = animated;
        obj.size = ForumPostReactionButton.DEFAULT_EMOJI_SIZE;
        emojiURL = obj.getEmojiURL(obj);
      }
      const obj1 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
      ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = italic);
      obj1.src = emojiURL;
      obj1.name = reaction.emoji.name;
      return closure_2_10(EmojiDefault, obj1);
    }
  }, items);
  const items1 = [emojiHook, tmp3, message, previewableMedia];
  const memo = noop.useMemo(() => {
    if (0 !== previewableMedia.length) {
      if (!closure_2) {
        if (1 === previewableMedia.length) {
          const first = previewableMedia[0];
          const type = first.type;
          if (usePreviewableMedia.PreviewableMediaTypes.IMAGE === type) {
            let obj = { text: null, secondaryText: null };
            const intl11 = util.intl;
            obj = { emojiHook };
            obj.text = intl11.format(util.t.I7mNcA, obj);
            return obj;
          } else if (usePreviewableMedia.PreviewableMediaTypes.VIDEO === type) {
            const obj1 = { text: null, secondaryText: null };
            const intl10 = util.intl;
            const obj2 = { emojiHook };
            obj1.text = intl10.format(util.t["Umew/z"], obj2);
            return obj1;
          } else if (usePreviewableMedia.PreviewableMediaTypes.AUDIO === type) {
            const obj3 = { text: null, secondaryText: null };
            const intl9 = util.intl;
            const obj4 = { emojiHook };
            obj3.text = intl9.format(util.t["P/bwx9"], obj4);
            obj3.secondaryText = first.media.filename;
            return obj3;
          } else if (usePreviewableMedia.PreviewableMediaTypes.FILE === type) {
            const obj5 = { text: null, secondaryText: null };
            const intl8 = util.intl;
            const obj6 = { emojiHook };
            obj5.text = intl8.format(util.t.TXNjGW, obj6);
            obj5.secondaryText = first.media.filename;
            return obj5;
          } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
            const obj7 = { text: null, secondaryText: null };
            const intl7 = util.intl;
            const obj8 = { emojiHook };
            obj7.text = intl7.format(util.t.pnm8NC, obj8);
            return obj7;
          } else if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
            const obj9 = { text: null, secondaryText: null };
            const intl6 = util.intl;
            const obj10 = { emojiHook };
            obj9.text = intl6.format(util.t.k6YnQO, obj10);
            return obj9;
          } else if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
            const obj11 = { text: null, secondaryText: null };
            const intl5 = util.intl;
            const obj12 = { emojiHook };
            obj11.text = intl5.format(util.t["3oS3Jq"], obj12);
            return obj11;
          } else {
            const obj13 = { text: null, secondaryText: null };
            const intl4 = util.intl;
            const obj14 = { emojiHook };
            obj13.text = intl4.format(util.t.sHV43G, obj14);
            return obj13;
          }
        } else if (isForwardMessageDefault(message)) {
          const obj15 = { text: null, secondaryText: null };
          const intl3 = util.intl;
          const obj16 = { emojiHook };
          obj15.text = intl3.format(util.t["8xg9ZQ"], obj16);
          return obj15;
        } else {
          const intl = util.intl;
          obj = { emojiHook, count: previewableMedia.length };
          const everyResult = previewableMedia.every((type) => type.type === message(closure_1_2[11]).PreviewableMediaTypes.FILE);
          const intl2 = util.intl;
          const obj17 = { emojiHook, count: previewableMedia.length };
          let formatResult1 = intl2.format(util.t.UNRyki, obj17);
          if (everyResult) {
            formatResult1 = formatResult;
          }
          const obj18 = { text: formatResult1, secondaryText: null };
          return obj18;
        }
      }
    }
    const intl12 = util.intl;
    const format = intl12.format;
    const t = util.t;
    if (closure_2) {
      const obj19 = { emojiHook };
      let text = format(t.sHV43G, obj19);
    } else {
      const obj20 = { emojiHook };
      text = format(t.ZOzpKt, obj20);
    }
    return { text, secondaryText: null };
  }, items1);
  ({ secondaryText, text } = memo);
  let obj1 = message(10094);
  const hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  let obj2 = message(10140);
  if (hasPreviewableMedia) {
    message = obj2.useGetInitialMessagePreview({ message });
  }
  if (renderAnnouncementText) {
    obj = { text: null };
    let intl2 = tmp5(1114).intl;
    obj = { count: reactionCount };
    obj.text = intl2.format(tmp5(1114).t.Tqk79E, obj);
    return closure_10(ReactionNotificationBody, obj);
  } else if (isMilestone) {
    let intl = tmp5(1114).intl;
    let format = intl.format;
    let t = tmp5(1114).t;
    if (tmp3) {
      obj1 = { count: reactionCount };
      let formatResult = format(t.NfZxrD, obj1);
    } else {
      obj2 = { count: reactionCount };
      formatResult = format(t.vfYN5b, obj2);
    }
    let obj3 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj3);
  } else {
    let obj4 = { text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj4);
  }
}
function ReactorNotificationIcon(notification) {
  ({ user, guild, channel } = notification.notification);
  if (notification.isMilestone) {
    if (channel.isGroupDM()) {
      let obj = { channel, size: native.AvatarSizes.NORMAL };
      let tmp8Result = closure_1_10(GroupDMAvatarDefault, obj);
    }
    return tmp8Result;
  }
  if (null != user) {
    obj = { user, guildId: null, size: null };
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj.guildId = id;
    obj.size = native.AvatarSizes.NORMAL;
    tmp8Result = closure_1_10(native.Avatar, obj);
  } else {
    obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp.guildIcon };
    tmp8Result = closure_1_10(GuildIconDefault, obj);
  }
  tmp = closure_13();
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10095);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = InAppNotificationConstants);
const Constants = fn(1074);
({ ChannelTypes: closure_8, MessageEmbedTypes: closure_9 } = Constants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 }, imageEmoji: null, italic: null, guildIcon: null };
let PlatformUtils = fn(1116);
let tmp5;
if (!PlatformUtils.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
createStyles.imageEmoji = { height: 16, width: 16, transform: tmp5 };
PlatformUtils = fn(1116);
createStyles = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
createStyles.italic = createStyles;
createStyles.guildIcon = { borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  notification = notification.notification;
  let message;
  c7 = undefined;
  constants = undefined;
  let userAuthor;
  const tmp = closure_13();
  const channel = notification.channel;
  const guild = notification.guild;
  const parentChannel = notification.parentChannel;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = channel.guild_id;
  }
  id = channel.id;
  message = notification.message;
  let obj = notification(guild[18]);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp6 = channel.type === constants.GUILD_ANNOUNCEMENT;
  const result = obj.isReactionMilestoneNotification(message.reactions, type);
  c7 = result;
  let obj1 = parentChannel;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(() => _mod12.sumBy(message.reactions, (count_details) => {
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
  }), items);
  if (tmp6) {
    tmp6 = 1 !== memo;
  }
  constants = tmp6;
  userAuthor = null;
  if (!tmp6) {
    userAuthor = null;
    if (!result) {
      let tmp3Result = tmp3(tmp4[26]);
      userAuthor = tmp3Result.getUserAuthor(notification.user, channel);
    }
  }
  tmp3Result = tmp3(tmp4[27]);
  const items1 = [id];
  let colorString;
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => id.roleStyle);
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  let tmp13Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      obj = { color: colorString, colors: null, containerStyles: null };
      let colorStrings;
      if (userAuthor != null) {
        colorStrings = userAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      obj.colors = colorStrings;
      obj.containerStyles = tmp.newContainerRoleDot;
      tmp13Result = closure_10(tmp3(tmp4[23]).RoleDot, obj);
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp6, result];
  const items3 = [channel.id, id, id, message.id, , ];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = obj1.useMemo(() => {
    const obj = { type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str };
    return obj;
  }, items2);
  const items4 = [id];
  const callback = obj1.useCallback(() => {
    const obj = { type: notification.type, dismissReason: "notification_clicked", guildId: id, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    obj.trackDismissed(obj);
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
    InAppNotificationActionCreatorsDefault.clearNotification();
  }, items3);
  const callback1 = obj1.useCallback(() => {
    const obj = { channelId: id };
    return obj.pushLazy(asyncRequireImpl(10142, dependencyMap.paths), obj);
  }, items4);
  obj = { icon: closure_10(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp13Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: closure_10(tmp3(tmp4[34]).MediaPreviewRightAccessory, { message }), children: null };
  obj1 = { style: tmp.container, children: closure_10(ReactionNotificationBodyWrapper, { message, reaction: notification.reaction, reactionCount: memo, renderAnnouncementText: tmp6, isMilestone: result }) };
  obj.children = closure_10(id, obj1);
  return closure_10(notification(guild[33]).NotificationPressable, obj);
};