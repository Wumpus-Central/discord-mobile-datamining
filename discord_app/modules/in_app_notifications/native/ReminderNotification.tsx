// discord_app/modules/in_app_notifications/native/ReminderNotification.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SavedMessagesTypes from "../../saved_messages/SavedMessagesTypes.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import MessageNotificationHeaderDefault from "MessageNotificationHeader.tsx";
import MediaPreviewRightAccessory from "MediaPreviewRightAccessory.tsx";
import showForLaterModal from "../../saved_messages/native/showForLaterModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const InAppNotificationConstants = fn(12589);
({
  IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7,
  NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8,
  RIGHT_ACCESSORY_LEFT_MARGIN,
} = InAppNotificationConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles({
  cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 },
  avatarContainer: { position: "relative" },
  rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN },
});
let obj3 = { direction: fn(1200).CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationAvatar(arg0) {
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
          const tmp11 = collapsed(ClockIcon.ClockIcon, obj2);
          cResult[3] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.cutoutIconContainer) {
          obj3 = { style: tmp4.cutoutIconContainer, children: tmp8 };
          const tmp15 = collapsed(View, obj3);
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
      const tmp6 = collapsed(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 });
      cResult[0] = guildId;
      cResult[1] = user;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj5 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
    }
  : function NotificationAvatar(arg0) {
      ({ user, guildId } = arg0);
      const tmp = closure_13();
      const obj = { style: tmp.avatarContainer, children: null };
      const items = [collapsed(native.Avatar, { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 })];
      obj3 = { style: tmp.cutoutIconContainer, children: null };
      const obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj3 };
      obj3.children = collapsed(ClockIcon.ClockIcon, { size: "xs", color: nativeDefault.colors.ICON_SUBTLE });
      items[1] = collapsed(View, obj3);
      obj.children = items;
      return closure_1_11(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function RightAccessory(message) {
        const cResult = c.c(5);
        message = message.message;
        let rightAccessoryContainer = closure_13();
        if (!obj2.useHasPreviewableMedia(message)) {
          return null;
        } else {
          if (cResult[0] !== message) {
            obj3 = { message };
            const tmp6 = collapsed(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
            cResult[0] = message;
            cResult[1] = tmp6;
            let tmp4 = tmp6;
          } else {
            tmp4 = cResult[1];
          }
          if (cResult[2] === rightAccessoryContainer.rightAccessoryContainer) {
          }
          const obj4 = { style: rightAccessoryContainer.rightAccessoryContainer, children: tmp4 };
          const tmp10 = collapsed(View, obj4);
          rightAccessoryContainer = rightAccessoryContainer.rightAccessoryContainer;
          cResult[2] = rightAccessoryContainer;
          cResult[3] = tmp4;
          cResult[4] = tmp10;
        }
        obj2 = InAppNotificationUtils;
      }
    : function RightAccessory(message) {
        message = message.message;
        const tmp = closure_13();
        let tmp4 = null;
        if (obj.useHasPreviewableMedia(message)) {
          const obj2 = { style: tmp.rightAccessoryContainer, children: null };
          obj3 = { message };
          obj2.children = collapsed(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
          tmp4 = collapsed(View, obj2);
        }
        return tmp4;
      },
);
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationBody(channel) {
      let obj = dependencyMap;
      const cResult = channel(576).c(20);
      channel = channel.channel;
      const message = channel.message;
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
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj2 = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== channel.parent_id) {
        const fn2 = function f() {
          return ChannelStore.getChannel(channel.parent_id);
        };
        cResult[4] = channel.parent_id;
        cResult[5] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      const tmpResult = channel(504);
      const stateFromStores1 = channel(504).useStateFromStores(tmp7, tmp9);
      const tmpResult4 = channel(504);
      const hasPreviewableMedia = channel(12588).useHasPreviewableMedia(message);
      const tmp12 = channel.type === channel(1106).ChannelTypes.DM;
      let num7 = 1;
      if (tmp12) {
        num7 = closure_8;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const messagePreviewTextVariant = tmp(12588).getMessagePreviewTextVariant();
        cResult[6] = messagePreviewTextVariant;
        let tmp13 = messagePreviewTextVariant;
        const tmpResult6 = tmp(12588);
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === channel) {
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === tmp12) {
            if (cResult[10] === stateFromStores1) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === channel) {
              if (cResult[13] === hasPreviewableMedia) {
                if (cResult[14] === num7) {
                  if (cResult[15] === message) {
                    if (cResult[17] === tmp15) {
                      if (cResult[18] === tmp19) {
                        let tmp28 = cResult[19];
                      }
                      return tmp28;
                    }
                    obj3 = { children: null };
                    const items2 = [tmp15, cResult[16]];
                    obj3.children = items2;
                    const tmp31 = closure_11(closure_12, obj3);
                    cResult[17] = tmp15;
                    cResult[18] = cResult[16];
                    cResult[19] = tmp31;
                    tmp28 = tmp31;
                  }
                }
              }
            }
            if (!hasPreviewableMedia) {
              if (null == message.poll) {
                const obj4 = {
                  channel,
                  message,
                  color: "text-default",
                  layout: tmp(9248).ChannelListLayoutTypes.COZY,
                  variant: tmp13,
                  muted: false,
                  lineClamp: num7,
                };
                let tmp22 = closure_10(tmp(12599).ChannelRowPreview, obj4);
              }
              cResult[12] = channel;
              cResult[13] = hasPreviewableMedia;
              cResult[14] = num7;
              cResult[15] = message;
              cResult[16] = tmp22;
            }
            obj = { message, lineClamp: num7, showMessageAuthor: true, maxHeight };
            tmp22 = closure_10(MessagePreviewTextDefault, obj);
          }
        }
      }
      let tmp16 = null;
      if (!tmp12) {
        const obj5 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
        tmp16 = closure_10(MessageNotificationHeaderDefault, obj5);
      }
      cResult[7] = channel;
      cResult[8] = stateFromStores;
      cResult[9] = tmp12;
      cResult[10] = stateFromStores1;
      cResult[11] = tmp16;
      tmp15 = tmp16;
      const tmpResult5 = channel(12588);
    }
  : function NotificationBody(channel) {
      channel = channel.channel;
      const message = channel.message;
      const items = [GuildStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      const obj = channel(504);
      const items1 = [ChannelStore];
      const stateFromStores1 = channel(504).useStateFromStores(items1, () =>
        ChannelStore.getChannel(channel.parent_id),
      );
      const obj2 = channel(504);
      const hasPreviewableMedia = channel(12588).useHasPreviewableMedia(message);
      const tmp6 = channel.type === channel(1106).ChannelTypes.DM;
      let num = 1;
      if (tmp6) {
        num = closure_8;
      }
      obj3 = channel(12588);
      let tmp10 = null;
      const messagePreviewTextVariant = channel(12588).getMessagePreviewTextVariant();
      if (!tmp6) {
        const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
        tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
      }
      const items2 = [tmp10];
      if (!hasPreviewableMedia) {
        if (null == message.poll) {
          const obj5 = {
            channel,
            message,
            color: "text-default",
            layout: tmp(9248).ChannelListLayoutTypes.COZY,
            variant: messagePreviewTextVariant,
            muted: false,
            lineClamp: num,
          };
          let tmp14 = closure_10(tmp(12599).ChannelRowPreview, obj5);
        }
        const obj6 = { children: null };
        items2[1] = tmp14;
        obj6.children = items2;
        return closure_11(closure_12, obj6);
      }
      tmp14 = closure_10(MessagePreviewTextDefault, { message, lineClamp: num, showMessageAuthor: true, maxHeight });
      const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
      const tmpResult = channel(12588);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ReminderNotification(notification) {
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
            const fn = function y() {
              ModalActionCreatorsDefault.popAll();
              showForLaterModal.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
              ({ savedMessage, author } = notification);
              AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, {
                message_id: savedMessage.saveData.messageId,
                message_author_id: author.id,
                notification_type: "IN_APP",
              });
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
            const obj4 = {
              icon: tmp5,
              header: tmp8,
              onPress: tmp9,
              notification,
              rightAccessory: tmp10,
              children: tmp14,
            };
            const tmp20 = closure_10(tmp(12627).NotificationPressable, obj4);
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
      }
    : function ReminderNotification(notification) {
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
          AnalyticsUtilsDefault.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, {
            message_id: savedMessage.saveData.messageId,
            message_author_id: author.id,
            notification_type: "IN_APP",
          });
        }, items);
        let obj = { user: notification.author, guildId: channel.guild_id };
        const tmp2 = closure_10(closure_15, { user: notification.author, guildId: channel.guild_id });
        return closure_10(notification(12627).NotificationPressable, {
          icon: closure_10(closure_15, { user: notification.author, guildId: channel.guild_id }),
          header: memo,
          onPress: callback,
          notification,
          rightAccessory: closure_10(closure_16, { message }),
          children: closure_10(closure_17, { channel, message }),
        });
      },
);
