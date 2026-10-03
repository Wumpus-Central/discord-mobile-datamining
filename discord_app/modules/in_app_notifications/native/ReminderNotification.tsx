// === Module 12542: ReminderNotification ===

// Module 12542 (ReminderNotification)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ClockIcon from "ClockIcon" /* 4849 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import showForLaterModal from "showForLaterModal" /* 7494 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7495 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12477 */;
import MessagePreviewTextDefault from "MessagePreviewText" /* 12486 */;
import MessageNotificationHeaderDefault from "MessageNotificationHeader" /* 12518 */;
import MediaPreviewRightAccessory from "MediaPreviewRightAccessory" /* 12520 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const View = fn(17).View;
const InAppNotificationConstants = fn(12478);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8, RIGHT_ACCESSORY_LEFT_MARGIN } = InAppNotificationConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({ cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } });
let obj3 = { direction: fn(1188).CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ user, guildId } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === guildId) {
    if (cResult[1] === user) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
      const tmp11 = v65535(ClockIcon.ClockIcon, obj2);
      cResult[3] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4.cutoutIconContainer) {
      obj3 = { style: tmp4.cutoutIconContainer, children: tmp8 };
      const tmp15 = v65535(View, obj3);
      cResult[4] = tmp4.cutoutIconContainer;
      cResult[5] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp4.avatarContainer) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp12) {
          let tmp16 = cResult[9];
        }
        return tmp16;
      }
    }
    const obj4 = { style: tmp4.avatarContainer, children: null };
    const items = [tmp5, tmp12];
    obj4.children = items;
    const tmp19 = closure_1_11(View, obj4);
    cResult[6] = tmp4.avatarContainer;
    cResult[7] = tmp5;
    cResult[8] = tmp12;
    cResult[9] = tmp19;
    tmp16 = tmp19;
  }
  const tmp6 = v65535(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 });
  cResult[0] = guildId;
  cResult[1] = user;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj5 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
}) : ((arg0) => {
  ({ user, guildId } = arg0);
  const tmp = closure_13();
  const obj = { style: tmp.avatarContainer, children: null };
  const items = [v65535(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 }), ];
  obj3 = { style: tmp.cutoutIconContainer, children: null };
  const obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
  obj3.children = v65535(ClockIcon.ClockIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE });
  items[1] = v65535(View, obj3);
  obj.children = items;
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(5);
  message = message.message;
  let rightAccessoryContainer = closure_13();
  if (!obj2.useHasPreviewableMedia(message)) {
    return null;
  } else {
    if (cResult[0] !== message) {
      obj3 = { message };
      const tmp6 = v65535(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
      cResult[0] = message;
      cResult[1] = tmp6;
      let tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] === rightAccessoryContainer.rightAccessoryContainer) {
    }
    const obj4 = { style: rightAccessoryContainer.rightAccessoryContainer, children: tmp4 };
    const tmp10 = v65535(View, obj4);
    rightAccessoryContainer = rightAccessoryContainer.rightAccessoryContainer;
    cResult[2] = rightAccessoryContainer;
    cResult[3] = tmp4;
    cResult[4] = tmp10;
  }
  obj2 = InAppNotificationUtils;
}) : ((message) => {
  message = message.message;
  const tmp = closure_13();
  let tmp4 = null;
  if (obj.useHasPreviewableMedia(message)) {
    const obj2 = { style: tmp.rightAccessoryContainer, children: null };
    obj3 = { message };
    obj2.children = v65535(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
    tmp4 = v65535(View, obj2);
  }
  return tmp4;
}));
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(20);
  channel = channel.channel;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function l() {
      return GuildStore.getGuild(channel.guild_id);
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channel.parent_id) {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
    cResult[4] = channel.parent_id;
    cResult[5] = M;
  } else {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp8, M);
  const tmpResult3 = channel(504);
  const hasPreviewableMedia = channel(12477).useHasPreviewableMedia(channel.message);
  const tmp13 = channel.type === channel(1106).ChannelTypes.DM;
  if (tmp13) {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
    const messagePreviewTextVariant = obj5.getMessagePreviewTextVariant();
    cResult[6] = messagePreviewTextVariant;
  } else {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
  }
  if (cResult[7] === channel) {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
  }
  let tmp16 = null;
  if (!tmp13) {
    class M {
      constructor() {
        return closure_5.getChannel(channel.parent_id);
      }
    }
    const obj2 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp16 = closure_10(MessageNotificationHeaderDefault, obj2);
  }
  cResult[7] = channel;
  cResult[8] = stateFromStores;
  cResult[9] = tmp13;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp16;
  const tmpResult4 = channel(12477);
}) : ((channel) => {
  channel = channel.channel;
  const message = channel.message;
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const obj = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj2 = channel(504);
  const hasPreviewableMedia = channel(12477).useHasPreviewableMedia(message);
  const tmp6 = channel.type === channel(1106).ChannelTypes.DM;
  let num = 1;
  if (tmp6) {
    num = closure_8;
  }
  obj3 = channel(12477);
  let tmp10 = null;
  const messagePreviewTextVariant = channel(12477).getMessagePreviewTextVariant();
  if (!tmp6) {
    const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
  }
  const items2 = [tmp10, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      const obj5 = { channel, message, color: "text-default", layout: tmp(7514).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      let tmp14 = closure_10(tmp(12488).ChannelRowPreview, obj5);
    }
    const obj6 = { children: null };
    items2[1] = tmp14;
    obj6.children = items2;
    return closure_11(closure_12, obj6);
  }
  tmp14 = closure_10(MessagePreviewTextDefault, { message, lineClamp: num, showMessageAuthor: true, maxHeight });
  const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
  const tmpResult = channel(12477);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((notification) => {
  const cResult = notification(576).c(17);
  notification = notification.notification;
  ({ author, channel } = notification);
  const message = notification.savedMessage.message;
  _modDef38(null != message, "Message in a notification should not be null.");
  if (cResult[0] === author) {
    if (cResult[1] === channel.guild_id) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { type: "simple", text: null };
      const intl = tmp(1126).intl;
      obj2.text = intl.string(tmp(1126).t.Whs8tE);
      cResult[3] = obj2;
      let tmp8 = obj2;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== notification) {
      const fn = function p() {
        ModalActionCreatorsDefault.popAll();
        showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
        ({ savedMessage, author } = notification);
        AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" });
      };
      cResult[4] = notification;
      cResult[5] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== message) {
      obj3 = { message };
      const tmp13 = closure_10(closure_16, obj3);
      cResult[6] = message;
      cResult[7] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    if (cResult[8] === channel) {
      if (cResult[9] === message) {
        let tmp14 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === notification) {
          if (cResult[13] === tmp9) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp14) {
                let tmp18 = cResult[16];
              }
              return tmp18;
            }
          }
        }
      }
      const obj4 = { icon: tmp5, header: tmp8, onPress: tmp9, notification, rightAccessory: tmp10, children: tmp14 };
      const tmp20 = closure_10(tmp(12516).NotificationPressable, obj4);
      cResult[11] = tmp5;
      cResult[12] = notification;
      cResult[13] = tmp9;
      cResult[14] = tmp10;
      cResult[15] = tmp14;
      cResult[16] = tmp20;
      tmp18 = tmp20;
    }
    const obj5 = { channel, message };
    const tmp17 = closure_10(closure_17, obj5);
    cResult[8] = channel;
    cResult[9] = message;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const tmp6 = closure_10(closure_15, { user: author, guildId: channel.guild_id });
  cResult[0] = author;
  cResult[1] = channel.guild_id;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  let obj = notification(576);
  const obj6 = { user: author, guildId: channel.guild_id };
}) : ((notification) => {
  notification = notification.notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  _modDef38(null != message, "Message in a notification should not be null.");
  const items = [notification];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = notification(1126).intl;
    obj.text = intl.string(notification(1126).t.Whs8tE);
    return obj;
  }, []);
  const callback = noop.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    ({ savedMessage, author } = notification);
    AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" });
  }, items);
  let obj = { user: notification.author, guildId: channel.guild_id };
  const tmp2 = closure_10(closure_15, { user: notification.author, guildId: channel.guild_id });
  return closure_10(notification(12516).NotificationPressable, { icon: closure_10(closure_15, { user: notification.author, guildId: channel.guild_id }), header: memo, onPress: callback, notification, rightAccessory: closure_10(closure_16, { message }), children: closure_10(closure_17, { channel, message }) });
}));