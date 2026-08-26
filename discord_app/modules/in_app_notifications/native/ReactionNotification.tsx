// discord_app/modules/in_app_notifications/native/ReactionNotification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconSizes from "../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../guild/native/GuildIcon.tsx";
import FacepileGroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import isReactionMilestoneNotification from "InAppNotificationUtils.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import set from "InAppNotificationConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";

require = arg1;
function ReactionNotificationBody(arg0) {
  ({ secondaryText, messagePreview } = arg0);
  ({ text, hasMessageContent } = arg0);
  let obj = isReactionMilestoneNotification;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  const tmp = callback2();
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  obj = { variant: messagePreviewTextVariant, color: "text-default", style: tmp.italic, children: text };
  const children = [callback(Text.Text, obj), , ];
  let tmp8Result = null;
  if (null != secondaryText) {
    obj = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: null, children: null };
    obj[2] = closure_7;
    obj[3] = secondaryText;
    tmp8Result = tmp8(tmp2(4440).Text, obj);
  }
  children[1] = tmp8Result;
  tmp8Result = null;
  if (hasMessageContent) {
    tmp8Result = null;
    if (null != messagePreview) {
      obj1 = { message: null, lineClamp: 1, maxHeight: null, textColor: "text-subtle", gradientStyles: null, gradientColors: null };
      obj1[0] = messagePreview;
      obj1[2] = closure_6;
      obj1[4] = gradientStyles;
      obj1[5] = gradientColors;
      tmp8Result = tmp8(tmp2(10012).NativeChannelRowPreview, obj1);
    }
  }
  children[2] = tmp8Result;
  return closure_12(closure_11, { children });
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
    const str = message.content;
  }
  if (tmp3) {
    tmp3 = !tmp;
  }
  dependencyMap = tmp3;
  const tmp4 = callback2();
  const React = tmp4;
  const AnimateEmoji = message(4134).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = message(10028);
  const previewableMedia = obj.usePreviewableMedia(message);
  const items = [setting, reaction, , , ];
  ({ imageEmoji: arr[2], textEmoji: arr[3], italic: arr[4] } = tmp4);
  const callback = React.useCallback(() => {
    let name;
    if (reaction != null) {
      name = tmp.emoji.name;
    }
    if (null == name) {
      return null;
    } else {
      let name1;
      if (tmp != null) {
        name1 = tmp.emoji.name;
      }
      if (null != name1) {
        let id;
        if (tmp != null) {
          id = tmp.emoji.id;
        }
        if (null == id) {
          let obj = { style: null, variant: "text-sm/normal", children: null };
          obj[0] = italic.italic;
          obj[2] = tmp.emoji.name;
          return closure_1_10(message(4440).Text, obj, tmp.emoji.name);
        }
      }
      let id1;
      if (tmp != null) {
        id1 = tmp.emoji.id;
      }
      let emojiURL;
      if (null != id1) {
        obj = reaction(1435);
        obj = { id: null, animated: null, size: null };
        obj[0] = tmp.emoji.id;
        let animated = setting;
        if (setting) {
          animated = tmp.emoji.animated;
        }
        obj[1] = animated;
        obj[2] = message(10116).DEFAULT_EMOJI_SIZE;
        emojiURL = obj.getEmojiURL(obj);
      }
      obj1 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
      ({ textEmoji: obj3[0], imageEmoji: obj3[1] } = italic);
      obj1[2] = emojiURL;
      obj1[3] = tmp.emoji.name;
      return closure_1_10(reaction(5532), obj1);
    }
  }, items);
  const items1 = [callback, tmp3, message, previewableMedia];
  const memo = React.useMemo(() => {
    if (0 !== previewableMedia.length) {
      if (!dependencyMap) {
        if (1 === arr.length) {
          const first = arr[0];
          const type = first.type;
          if (message(10028).PreviewableMediaTypes.IMAGE === type) {
            let obj = { text: null, secondaryText: null };
            const intl11 = message(1236).intl;
            obj = { emojiHook: null };
            obj[0] = callback;
            obj[0] = intl11.format(message(1236).t.I7mNcA, obj);
            return obj;
          } else if (message(10028).PreviewableMediaTypes.VIDEO === type) {
            obj1 = { text: null, secondaryText: null };
            const intl10 = message(1236).intl;
            const obj2 = { emojiHook: null };
            obj2[0] = callback;
            obj1[0] = intl10.format(message(1236).t["Umew/z"], obj2);
            return obj1;
          } else if (message(10028).PreviewableMediaTypes.AUDIO === type) {
            const obj3 = { text: null, secondaryText: null };
            const intl9 = message(1236).intl;
            const obj4 = { emojiHook: null };
            obj4[0] = callback;
            obj3[0] = intl9.format(message(1236).t["P/bwx9"], obj4);
            obj3[1] = first.media.filename;
            return obj3;
          } else if (message(10028).PreviewableMediaTypes.FILE === type) {
            const obj5 = { text: null, secondaryText: null };
            const intl8 = message(1236).intl;
            const obj6 = { emojiHook: null };
            obj6[0] = callback;
            obj5[0] = intl8.format(message(1236).t.TXNjGW, obj6);
            obj5[1] = first.media.filename;
            return obj5;
          } else if (message(10028).PreviewableMediaTypes.STICKER === type) {
            const obj7 = { text: null, secondaryText: null };
            const intl7 = message(1236).intl;
            const obj8 = { emojiHook: null };
            obj8[0] = callback;
            obj7[0] = intl7.format(message(1236).t.pnm8NC, obj8);
            return obj7;
          } else if (message(10028).PreviewableMediaTypes.VOICE_MESSAGE === type) {
            const obj9 = { text: null, secondaryText: null };
            const intl6 = message(1236).intl;
            const obj10 = { emojiHook: null };
            obj10[0] = callback;
            obj9[0] = intl6.format(message(1236).t.k6YnQO, obj10);
            return obj9;
          } else if (message(10028).PreviewableMediaTypes.GIF === type) {
            const obj11 = { text: null, secondaryText: null };
            const intl5 = message(1236).intl;
            const obj12 = { emojiHook: null };
            obj12[0] = callback;
            obj11[0] = intl5.format(message(1236).t["3oS3Jq"], obj12);
            return obj11;
          } else {
            const obj13 = { text: null, secondaryText: null };
            const intl4 = message(1236).intl;
            const obj14 = { emojiHook: null };
            obj14[0] = callback;
            obj13[0] = intl4.format(message(1236).t.sHV43G, obj14);
            return obj13;
          }
        } else if (reaction(6091)(message)) {
          const obj15 = { text: null, secondaryText: null };
          const intl3 = message(1236).intl;
          const obj16 = { emojiHook: null };
          obj16[0] = callback;
          obj15[0] = intl3.format(message(1236).t["8xg9ZQ"], obj16);
          return obj15;
        } else {
          const intl = message(1236).intl;
          obj = { emojiHook: null, count: null };
          obj[0] = callback;
          obj[1] = arr.length;
          const everyResult = arr.every((type) => type.type === callback(table[10]).PreviewableMediaTypes.FILE);
          const intl2 = message(1236).intl;
          const obj17 = { emojiHook: null, count: null };
          obj17[0] = callback;
          obj17[1] = arr.length;
          let formatResult1 = intl2.format(message(1236).t.UNRyki, obj17);
          if (everyResult) {
            formatResult1 = formatResult;
          }
          const obj18 = { text: null, secondaryText: null };
          obj18[0] = formatResult1;
          return obj18;
        }
      }
    }
    const intl12 = message(1236).intl;
    const format = intl12.format;
    const t = message(1236).t;
    if (dependencyMap) {
      const obj19 = { emojiHook: null };
      obj19[0] = callback;
      let text = format(t.sHV43G, obj19);
    } else {
      const obj20 = { emojiHook: null };
      obj20[0] = callback;
      text = format(t.ZOzpKt, obj20);
    }
    return { text, secondaryText: null };
  }, items1);
  ({ secondaryText, text } = memo);
  obj1 = message(9991);
  const hasPreviewableMedia = obj1.useHasPreviewableMedia(message);
  let obj2 = message(10037);
  if (hasPreviewableMedia) {
    message = obj2.useGetInitialMessagePreview({ message });
  }
  if (renderAnnouncementText) {
    obj = { text: null };
    let intl2 = tmp5(1236).intl;
    obj = { count: null };
    obj[0] = reactionCount;
    obj[0] = intl2.format(tmp5(1236).t.Tqk79E, obj);
    return callback(ReactionNotificationBody, obj);
  } else if (isMilestone) {
    let intl = tmp5(1236).intl;
    let format = intl.format;
    let t = tmp5(1236).t;
    if (tmp3) {
      obj1 = { count: null };
      obj1[0] = reactionCount;
      let formatResult = format(t.NfZxrD, obj1);
    } else {
      obj2 = { count: null };
      obj2[0] = reactionCount;
      formatResult = format(t.vfYN5b, obj2);
    }
    let obj3 = { text: null, secondaryText: null, hasMessageContent: null, messagePreview: null };
    obj3[0] = formatResult;
    obj3[1] = secondaryText;
    obj3[2] = tmp3;
    obj3[3] = message;
    return callback(ReactionNotificationBody, obj3);
  } else {
    let obj4 = { text: null, secondaryText: null, hasMessageContent: null, messagePreview: null };
    obj4[0] = text;
    obj4[1] = secondaryText;
    obj4[2] = tmp3;
    obj4[3] = message;
    return callback(ReactionNotificationBody, obj4);
  }
}
function ReactorNotificationIcon(notification) {
  ({ user, guild, channel } = notification.notification);
  if (notification.isMilestone) {
    if (channel.isGroupDM()) {
      let obj = { channel: null, size: null };
      obj[0] = channel;
      obj[1] = Button.AvatarSizes.NORMAL;
      let tmp8Result = callback(FacepileGroupDMAvatarDefault, obj);
      const tmp15 = FacepileGroupDMAvatarDefault;
    }
    return tmp8Result;
  }
  if (null != user) {
    obj = { user: null, guildId: null, size: null };
    obj[0] = user;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj[1] = id;
    obj[2] = Button.AvatarSizes.NORMAL;
    tmp8Result = callback(Button.Avatar, obj);
    const tmp8 = callback;
    const tmp9 = require;
  } else {
    obj = { guild: null, size: null, style: null };
    obj[0] = guild;
    obj[1] = GuildIconSizes.GuildIconSizes.NORMAL;
    obj[2] = tmp.guildIcon;
    tmp8Result = callback(GuildIconSizesDefault, obj);
    const tmp5 = GuildIconSizesDefault;
  }
}
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_6, NOTIFICATION_PREVIEW_LINE_CLAMP: error } = set);
({ ChannelTypes: closure_8, MessageEmbedTypes: c9 } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { newContainerRoleDot: { paddingRight: 4, paddingTop: 0 }, container: { flexDirection: "column" }, textEmoji: { fontSize: 12 }, imageEmoji: null, italic: null, guildIcon: null };
let tmp5;
if (!PlatformTypes.isIOS()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
createCacheKey[3] = { height: 16, width: 16, transform: tmp5 };
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (PlatformTypes.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
createCacheKey[4] = { fontStyle: "italic", fontFamily: str };
createCacheKey = { borderRadius: ThemesDefault.radii.sm };
createCacheKey[5] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/ReactionNotification.tsx");

export default function ReactionNotification(notification) {
  notification = notification.notification;
  let channel;
  let guild;
  let parentChannel;
  let id;
  id = undefined;
  let message;
  c7 = undefined;
  let constants;
  let userAuthor;
  const tmp = callback2();
  channel = notification.channel;
  guild = notification.guild;
  parentChannel = notification.parentChannel;
  id = undefined;
  if (guild != null) {
    id = guild.id;
  }
  if (id == null) {
    id = channel.guild_id;
  }
  id = channel.id;
  message = notification.message;
  let obj = notification(guild[17]);
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp6 = channel.type === constants.GUILD_ANNOUNCEMENT;
  const result = obj.isReactionMilestoneNotification(message.reactions, type);
  c7 = result;
  obj1 = parentChannel;
  const items = [message.reactions];
  const memo = parentChannel.useMemo(() => notification(guild[24]).sumBy(message.reactions, (count_details) => {
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
      let tmp3Result = tmp3(tmp4[25]);
      userAuthor = tmp3Result.getUserAuthor(notification.user, channel);
    }
  }
  tmp3Result = tmp3(tmp4[26]);
  const items1 = [id];
  let colorString;
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => id.roleStyle);
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  let tmp13Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      obj = { color: null, colors: null, containerStyles: null };
      obj[0] = colorString;
      let colorStrings;
      if (userAuthor != null) {
        colorStrings = userAuthor.colorStrings;
      }
      if (colorStrings == null) {
        colorStrings = null;
      }
      obj[1] = colorStrings;
      obj[2] = tmp.newContainerRoleDot;
      tmp13Result = callback(tmp3(tmp4[22]).RoleDot, obj);
      const tmp13 = callback;
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
  callback = obj1.useCallback(() => {
    let obj = notification(guild[17]);
    obj = { type: notification.type, dismissReason: "notification_clicked", guildId: id, channelId: id, messageId: message.id, inAppNotificationId: notification.inAppNotificationId };
    obj.trackDismissed(obj);
    channel(guild[27]).popAll();
    const obj3 = channel(guild[27]);
    notification(guild[28]).transitionToMessage(channel.id, message.id, { navigationReplace: true });
    const obj4 = notification(guild[28]);
    channel(guild[29]).clearNotification();
  }, items3);
  const callback1 = obj1.useCallback(() => {
    let obj = channel(guild[27]);
    obj = { channelId: id };
    return obj.pushLazy(notification(guild[31])(guild[30], guild.paths), obj);
  }, items4);
  obj = { icon: callback(ReactorNotificationIcon, { notification, isMilestone: result }), accessoryLabelNode: tmp13Result, header: memo1, onPress: callback, onSettingsPress: callback1, notification, rightAccessory: callback(tmp3(tmp4[33]).MediaPreviewRightAccessory, { message }), children: null };
  obj1 = { style: tmp.container, children: callback(ReactionNotificationBodyWrapper, { message, reaction: notification.reaction, reactionCount: memo, renderAnnouncementText: tmp6, isMilestone: result }) };
  obj[7] = callback(id, obj1);
  return callback(notification(guild[32]).NotificationPressable, obj);
};