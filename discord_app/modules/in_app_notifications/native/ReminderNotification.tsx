// discord_app/modules/in_app_notifications/native/ReminderNotification.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ClockIcon2 from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import showForLaterModal from "../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../saved_messages/SavedMessagesTypes.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import MessageNotificationHeaderDefault from "MessageNotificationHeader.tsx";
import MediaPreviewRightAccessory from "MediaPreviewRightAccessory.tsx";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let notification;

let RIGHT_ACCESSORY_LEFT_MARGIN;
let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const View = react_native.View;
({
  IN_APP_NOTIFICATION_MAX_HEIGHT: metroImportDefault,
  NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportAll,
  RIGHT_ACCESSORY_LEFT_MARGIN,
} = InAppNotificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = {
  cutoutIconContainer: { position: "absolute", right: 0, bottom: 0 },
  avatarContainer: { position: "relative" },
  rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN },
};
let closure_13 = createStyles.createStyles(obj);
let obj2 = { direction: native.CutoutDirection.BOTTOM_RIGHT, radius: 10, inset: -2 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let items;
      let user;
      const obj = react2;
      const cResult = obj.c(10);
      ({ user, guildId } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === guildId) {
        let tmp5;
        let tmp8;
        let tmp12;
        if (cResult[1] === user) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          obj2 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
          const ClockIcon = ClockIcon2.ClockIcon;
          const tmp11 = authStore(ClockIcon, obj2);
          cResult[3] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.cutoutIconContainer) {
          const obj3 = { style: tmp4.cutoutIconContainer, children: tmp8 };
          const tmp15 = authStore(View, obj3);
          cResult[4] = tmp4.cutoutIconContainer;
          cResult[5] = tmp15;
          tmp12 = tmp15;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp4.avatarContainer) {
          if (cResult[7] === tmp5) {
            let tmp16;
            if (cResult[8] === tmp12) {
              tmp16 = cResult[9];
            }
            return tmp16;
          }
        }
        const obj4 = { style: tmp4.avatarContainer, children: items };
        items = [tmp5, tmp12];
        const tmp19 = unpackModuleId(View, obj4);
        cResult[6] = tmp4.avatarContainer;
        cResult[7] = tmp5;
        cResult[8] = tmp12;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj5 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj2 };
      const Avatar = native.Avatar;
      const tmp6 = authStore(Avatar, obj5);
      cResult[0] = guildId;
      cResult[1] = user;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let ClockIcon;
      let guildId;
      let items;
      let obj4;
      let user;
      ({ user, guildId } = arg0);
      const tmp = closure_13();
      const obj = { style: tmp.avatarContainer, children: items };
      obj2 = { user, guildId, size: native.AvatarSizes.NORMAL, cutout: obj2 };
      const Avatar = native.Avatar;
      items = [authStore(Avatar, obj2)];
      const obj3 = { style: tmp.cutoutIconContainer, children: authStore(ClockIcon, obj4) };
      obj4 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE };
      ClockIcon = ClockIcon2.ClockIcon;
      items[1] = authStore(View, obj3);
      return unpackModuleId(View, obj);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        const obj = react2;
        const cResult = obj.c(5);
        message = message.message;
        const tmp4 = closure_13();
        let tmp5 = null;
        obj2 = InAppNotificationUtils;
        if (obj2.useHasPreviewableMedia(message)) {
          let tmp6;
          if (cResult[0] !== message) {
            const obj3 = { message };
            const tmp8 = authStore(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3);
            cResult[0] = message;
            cResult[1] = tmp8;
            tmp6 = tmp8;
          } else {
            tmp6 = cResult[1];
          }
          if (cResult[2] === tmp4.rightAccessoryContainer) {
            let tmp9;
            if (cResult[3] === tmp6) {
              tmp9 = cResult[4];
            }
            tmp5 = tmp9;
          }
          const obj4 = { style: tmp4.rightAccessoryContainer, children: tmp6 };
          const tmp12 = authStore(View, obj4);
          cResult[2] = tmp4.rightAccessoryContainer;
          cResult[3] = tmp6;
          cResult[4] = tmp12;
          tmp9 = tmp12;
        }
        return tmp5;
      }
    : (message) => {
        let obj3;
        message = message.message;
        let tmp4 = null;
        const tmp = closure_13();
        const obj = InAppNotificationUtils;
        if (obj.useHasPreviewableMedia(message)) {
          obj2 = {
            style: tmp.rightAccessoryContainer,
            children: authStore(MediaPreviewRightAccessory.MediaPreviewRightAccessory, obj3),
          };
          obj3 = { message };
          tmp4 = authStore(View, obj2);
        }
        return tmp4;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tmp6;
      let tmp8;
      const obj = channel(576);
      const cResult = obj.c(20);
      channel = channel.channel;
      const message = channel.message;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function l() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== channel.parent_id) {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
        cResult[4] = channel.parent_id;
        cResult[5] = M;
      } else {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
      }
      const tmpResult3 = channel(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, M);
      const tmpResult4 = channel(12492);
      const hasPreviewableMedia = tmpResult4.useHasPreviewableMedia(message);
      const tmp13 = channel.type === channel(1106).ChannelTypes.DM;
      if (tmp13) {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
        const messagePreviewTextVariant = obj5.getMessagePreviewTextVariant();
        cResult[6] = messagePreviewTextVariant;
      } else {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
      }
      if (cResult[7] === channel) {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
      }
      let tmp16 = null;
      if (!tmp13) {
        class M {
          constructor() {
            return ChannelStore.getChannel(channel.parent_id);
          }
        }
        obj2 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
        tmp16 = closure_10(MessageNotificationHeaderDefault, obj2);
      }
      cResult[7] = channel;
      cResult[8] = stateFromStores;
      cResult[9] = tmp13;
      cResult[10] = stateFromStores1;
      cResult[11] = tmp16;
    }
  : (channel) => {
      channel = channel.channel;
      const message = channel.message;
      const items = [GuildStore];
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      const items1 = [ChannelStore];
      obj2 = channel(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
      const obj3 = channel(12492);
      const hasPreviewableMedia = obj3.useHasPreviewableMedia(message);
      const tmp6 = channel.type === channel(1106).ChannelTypes.DM;
      let num = 1;
      if (tmp6) {
        num = closure_8;
      }
      let tmp10 = null;
      const tmpResult = channel(12492);
      const messagePreviewTextVariant = tmpResult.getMessagePreviewTextVariant();
      if (!tmp6) {
        const obj4 = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
        tmp10 = closure_10(MessageNotificationHeaderDefault, obj4);
      }
      const items2 = [tmp10];
      if (!hasPreviewableMedia) {
        let tmp14;
        if (null == message.poll) {
          const obj5 = {
            channel,
            message,
            color: "text-default",
            layout: channel(7525).ChannelListLayoutTypes.COZY,
            variant: messagePreviewTextVariant,
            muted: false,
            lineClamp: num,
          };
          const ChannelRowPreview = tmp(12503).ChannelRowPreview;
          tmp14 = closure_10(ChannelRowPreview, obj5);
        }
        const obj6 = { children: items2 };
        items2[1] = tmp14;
        return closure_11(closure_12, obj6);
      }
      const obj7 = { message, lineClamp: num, showMessageAuthor: true, maxHeight };
      tmp14 = closure_10(MessagePreviewTextDefault, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (notification) => {
        let author;
        let channel;
        let intl;
        let obj = notification(576);
        const cResult = obj.c(17);
        notification = notification.notification;
        ({ author, channel } = notification);
        const message = notification.savedMessage.message;
        _modDef38(null != message, "Message in a notification should not be null.");
        if (cResult[0] === author) {
          let tmp5;
          let tmp8;
          let tmp9;
          let tmp10;
          if (cResult[1] === channel.guild_id) {
            tmp5 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            obj2 = { type: "simple", text: intl.string(notification(1126).t.Whs8tE) };
            intl = tmp(1126).intl;
            cResult[3] = obj2;
            tmp8 = obj2;
          } else {
            tmp8 = cResult[3];
          }
          if (cResult[4] !== notification) {
            const fn = function p() {
              let author;
              let savedMessage;
              const obj = ModalActionCreatorsDefault;
              obj.popAll();
              obj2 = showForLaterModal;
              obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
              ({ savedMessage, author } = notification);
              const obj3 = AnalyticsUtilsDefault;
              const obj4 = {
                message_id: savedMessage.saveData.messageId,
                message_author_id: author.id,
                notification_type: "IN_APP",
              };
              obj3.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj4);
            };
            cResult[4] = notification;
            cResult[5] = fn;
            tmp9 = fn;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== message) {
            let obj3 = { message };
            const tmp13 = closure_10(closure_16, obj3);
            cResult[6] = message;
            cResult[7] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === channel) {
            let tmp14;
            if (cResult[9] === message) {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp5) {
              if (cResult[12] === notification) {
                if (cResult[13] === tmp9) {
                  if (cResult[14] === tmp10) {
                    let tmp18;
                    if (cResult[15] === tmp14) {
                      tmp18 = cResult[16];
                    }
                    return tmp18;
                  }
                }
              }
            }
            let obj4 = {
              icon: tmp5,
              header: tmp8,
              onPress: tmp9,
              notification,
              rightAccessory: tmp10,
              children: tmp14,
            };
            const tmp20 = closure_10(notification(12531).NotificationPressable, obj4);
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
        const obj6 = { user: author, guildId: channel.guild_id };
        const tmp6 = closure_10(closure_15, obj6);
        cResult[0] = author;
        cResult[1] = channel.guild_id;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : (notification) => {
        notification = notification.notification;
        const channel = notification.channel;
        const message = notification.savedMessage.message;
        const author = notification.author;
        _modDef38(null != message, "Message in a notification should not be null.");
        let obj = { user: author, guildId: channel.guild_id };
        const items = [notification];
        const tmp2 = closure_10(closure_15, obj);
        const memo = react.useMemo(() => {
          let intl;
          const obj = { type: "simple", text: intl.string(notification(dependencyMap[22]).t.Whs8tE) };
          intl = notification(dependencyMap[22]).intl;
          return obj;
        }, []);
        const callback = react.useCallback(() => {
          let author;
          let savedMessage;
          const obj = ModalActionCreatorsDefault;
          obj.popAll();
          obj2 = showForLaterModal;
          obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
          ({ savedMessage, author } = notification);
          const obj3 = AnalyticsUtilsDefault;
          const obj4 = {
            message_id: savedMessage.saveData.messageId,
            message_author_id: author.id,
            notification_type: "IN_APP",
          };
          obj3.track(AnalyticEvents.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj4);
        }, items);
        obj2 = {
          icon: tmp2,
          header: memo,
          onPress: callback,
          notification,
          rightAccessory: closure_10(closure_16, { message }),
          children: closure_10(closure_17, { channel, message }),
        };
        const NotificationPressable = notification(12531).NotificationPressable;
        return closure_10(NotificationPressable, obj2);
      },
);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default memoResult;
