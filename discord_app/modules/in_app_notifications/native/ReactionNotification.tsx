// === Module 10356: ReactionNotification ===

// Module 10356 (ReactionNotification)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import Text_Text from "Text/Text" /* 4634 */;
import transitionToChannel from "transitionToChannel" /* 4649 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import GuildIcon from "GuildIcon" /* 5670 */;
import EmojiDefault from "Emoji" /* 7240 */;
import isForwardMessageDefault from "isForwardMessage" /* 7412 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10233 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10235 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 10246 */;
import ChannelRowPreview from "ChannelRowPreview" /* 10247 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10269 */;
import ForumPostReactionButton from "ForumPostReactionButton" /* 10357 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 11059 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;

const GuildIconDefault = GuildIcon;

require = fn;
function ReactionNotificationBody(arg0) {
  ({ secondaryText, messagePreview } = arg0);
  ({ text, hasMessageContent } = arg0);
  const tmp = closure_13();
  const messagePreviewTextVariant = InAppNotificationUtils.getMessagePreviewTextVariant();
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  const children = [closure_1_10(Text_Text.Text, { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text }), , ];
  let tmp8Result = null;
  if (null != secondaryText) {
    const obj3 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp, children: secondaryText };
    tmp8Result = closure_1_10(Text_Text.Text, obj3);
  }
  children[1] = tmp8Result;
  let tmp8Result2 = null;
  if (hasMessageContent) {
    tmp8Result2 = null;
    if (null != messagePreview) {
      const obj4 = { message: messagePreview, lineClamp: 1, maxHeight, textColor: "text-subtle", gradientStyles, gradientColors };
      tmp8Result2 = closure_1_10(ChannelRowPreview.NativeChannelRowPreview, obj4);
    }
  }
  children[2] = tmp8Result2;
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
  const AnimateEmoji = message(1936).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const previewableMedia = message(10269).usePreviewableMedia(message);
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
          const obj2 = { style: italic.italic, variant: "text-sm/normal", children: reaction.emoji.name };
          return closure_2_10(Text_Text.Text, obj2, reaction.emoji.name);
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
      return closure_2_10(EmojiDefault, obj7);
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
          const everyResult = previewableMedia.every((type) => type.type === message(closure_1_2[11]).PreviewableMediaTypes.FILE);
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
    if (closure_2) {
      const obj22 = { emojiHook };
      let text = format(t.sHV43G, obj22);
    } else {
      const obj23 = { emojiHook };
      text = format(t.ZOzpKt, obj23);
    }
    return { text, secondaryText: null };
  }, items1);
  ({ secondaryText, text } = memo);
  let obj = message(10269);
  const hasPreviewableMedia = message(10233).useHasPreviewableMedia(message);
  let obj2 = message(10233);
  if (hasPreviewableMedia) {
    message = obj3.useGetInitialMessagePreview({ message });
  }
  if (renderAnnouncementText) {
    let obj4 = { text: null };
    let intl2 = tmp5(1115).intl;
    let obj5 = { count: reactionCount };
    obj4.text = intl2.format(tmp5(1115).t.Tqk79E, obj5);
    return closure_10(ReactionNotificationBody, obj4);
  } else if (isMilestone) {
    let intl = tmp5(1115).intl;
    let format = intl.format;
    let t = tmp5(1115).t;
    if (tmp3) {
      let obj6 = { count: reactionCount };
      let formatResult = format(t.NfZxrD, obj6);
    } else {
      let obj7 = { count: reactionCount };
      formatResult = format(t.vfYN5b, obj7);
    }
    let obj8 = { text: formatResult, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj8);
  } else {
    let obj9 = { text, secondaryText, hasMessageContent: tmp3, messagePreview: message };
    return closure_10(ReactionNotificationBody, obj9);
  }
  obj3 = message(10278);
}
function ReactorNotificationIcon(notification) {
  ({ user, guild, channel } = notification.notification);
  if (notification.isMilestone) {
    if (channel.isGroupDM()) {
      const obj2 = { channel, size: native.AvatarSizes.NORMAL };
      let tmp8Result = closure_1_10(GroupDMAvatarDefault, obj2);
    }
    return tmp8Result;
  }
  if (null != user) {
    const obj3 = { user, guildId: null, size: null };
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj3.guildId = id;
    obj3.size = native.AvatarSizes.NORMAL;
    tmp8Result = closure_1_10(native.Avatar, obj3);
  } else {
    const obj = { guild, size: GuildIcon.GuildIconSizes.NORMAL, style: tmp.guildIcon };
    tmp8Result = closure_1_10(GuildIconDefault, obj);
  }
  tmp = closure_13();
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10234);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = InAppNotificationConstants);
const Constants = fn(1074);
({ ChannelTypes: closure_8, MessageEmbedTypes: closure_9 } = Constants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 }, imageEmoji: null, italic: null, guildIcon: null };
let PlatformUtils = fn(1365);
let tmp5;
if (!PlatformUtils.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
obj2.imageEmoji = { height: 16, width: 16, transform: tmp5 };
PlatformUtils = fn(1365);
obj2.italic = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
let obj5 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles.createStyles(obj2);
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
  const guild = notification.guild;
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
  const result = notification(guild[18]).isReactionMilestoneNotification(message.reactions, type);
  c7 = result;
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
      userAuthor = tmp3(tmp4[26]).getUserAuthor(notification.user, channel);
      const tmp3Result = tmp3(tmp4[26]);
    }
  }
  let obj = notification(guild[18]);
  const items1 = [id];
  let colorString;
  const stateFromStores = notification(guild[27]).useStateFromStores(items1, () => id.roleStyle);
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
      tmp13Result = closure_10(tmp3(tmp4[23]).RoleDot, obj3);
    }
  }
  const items2 = [channel, parentChannel, guild, userAuthor, tmp6, result];
  const items3 = [channel.id, id, id1, message.id, , ];
  ({ inAppNotificationId: arr4[4], type: arr4[5] } = notification);
  const memo1 = obj2.useMemo(() => {
    const obj = { type: "message", channel, parentChannel, guild, author: userAuthor, locationTextColor: str };
    return obj;
  }, items2);
  const items4 = [id];
  const callback = obj2.useCallback(() => {
    InAppNotificationUtils.trackDismissed({ type: notification.type, dismissReason: "notification_clicked", guildId: id1, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId });
    const obj2 = { type: notification.type, dismissReason: "notification_clicked", guildId: id1, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
    InAppNotificationActionCreatorsDefault.clearNotification();
  }, items3);
  const callback1 = obj2.useCallback(() => ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10280, dependencyMap.paths), { channelId: id }), items4);
  let obj4 = { icon: closure_10(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp13Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: closure_10(notification(guild[34]).MediaPreviewRightAccessory, { message }), children: null };
  const tmp3Result2 = notification(guild[27]);
  obj4.children = closure_10(id1, { style: tmp.container, children: closure_10(ReactionNotificationBodyWrapper, { message, reaction: notification.reaction, reactionCount: memo, renderAnnouncementText: tmp6, isMilestone: result }) });
  return closure_10(notification(guild[33]).NotificationPressable, obj4);
};