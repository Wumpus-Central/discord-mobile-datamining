// discord_app/modules/in_app_notifications/native/MessageNotification.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import MessageParserDefault from "../../messages/MessageParser.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: hasOwnProperty, NOTIFICATION_PREVIEW_LINE_CLAMP: metroRequire } =
  InAppNotificationConstants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        let tmp3;
        const obj = react2;
        const cResult = obj.c(2);
        message = message.message;
        if (cResult[0] !== message) {
          const tmp8 = jsx(MessagePreviewTextDefault, { message, lineClamp: metroRequire, maxHeight: hasOwnProperty });
          cResult[0] = message;
          cResult[1] = tmp8;
          tmp3 = tmp8;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : (message) =>
        jsx(MessagePreviewTextDefault, {
          message: message.message,
          lineClamp: metroRequire,
          maxHeight: hasOwnProperty,
        }),
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let author;
      let containerStyles;
      let roleStyle;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(7);
      ({ author, containerStyles } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function s() {
          return roleStyle.roleStyle;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let colorString;
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (author != null) {
        colorString = author.colorString;
      }
      let colorStrings;
      const tmp10 = cResult[2];
      if (author != null) {
        colorStrings = author.colorStrings;
      }
      if (tmp10 === colorStrings) {
        if (cResult[3] === containerStyles) {
          if (cResult[4] === colorString) {
            let tmp12;
            if (cResult[5] === ("dot" === stateFromStores && undefined !== colorString)) {
              tmp12 = cResult[6];
            }
            return tmp12;
          }
        }
      }
      let tmp14Result;
      if ("dot" === stateFromStores && undefined !== colorString) {
        let colorStrings1;
        const RoleDot = native.RoleDot;
        if (author != null) {
          colorStrings1 = author.colorStrings;
        }
        tmp14Result = <RoleDot color={colorString} colors={colorStrings1} containerStyles={containerStyles} />;
      }
      let colorStrings2;
      if (author != null) {
        colorStrings2 = author.colorStrings;
      }
      cResult[2] = colorStrings2;
      cResult[3] = containerStyles;
      cResult[4] = colorString;
      cResult[5] = "dot" === stateFromStores && undefined !== colorString;
      cResult[6] = tmp14Result;
      tmp12 = tmp14Result;
    }
  : (author) => {
      let roleStyle;
      author = author.author;
      const containerStyles = author.containerStyles;
      const items = [AccessibilityStore];
      let colorString;
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
      if (author != null) {
        colorString = author.colorString;
      }
      let tmp6Result;
      if ("dot" === stateFromStores) {
        if (undefined !== colorString) {
          let colorStrings;
          const RoleDot = native.RoleDot;
          if (author != null) {
            colorStrings = author.colorStrings;
          }
          tmp6Result = <RoleDot color={colorString} colors={colorStrings} containerStyles={containerStyles} />;
        }
      }
      return tmp6Result;
    };
const memoResult = react.memo(function MessageNotification(notification) {
  let id;
  notification = notification.notification;
  let nullableMessageAuthor;
  let handleDismissNotification;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
  let tmp2 = 0 === message.content.length;
  const tmp = closure_8();
  if (tmp2) {
    tmp2 = null !== message.interaction;
  }
  if (tmp2) {
    tmp2 = undefined !== message.interaction;
  }
  if (tmp2) {
    tmp2 = null !== message.activityInstance;
  }
  if (tmp2) {
    tmp2 = undefined !== message.activityInstance;
  }
  if (tmp2) {
    let intl = message(parentChannel[10]).intl;
    let formatToPlainString = intl.formatToPlainString;
    const v7eikg1 = message(parentChannel[10]).t["7eikg1"];
    const interaction = message.interaction;
    let user;
    const getUserAuthor = message(parentChannel[11]).getUserAuthor;
    message(parentChannel[11]);
    if (interaction != null) {
      user = interaction.user;
    }
    let obj = { username: getUserAuthor(user, channel).nick };
    message.content = formatToPlainString(v7eikg1, obj);
  }
  let obj2 = message(parentChannel[11]);
  nullableMessageAuthor = obj2.useNullableMessageAuthor(message);
  const obj3 = { author: nullableMessageAuthor, containerStyles: tmp.newContainerRoleDot };
  const tmp14 = closure_10(obj3);
  const obj4 = message(parentChannel[12]);
  handleDismissNotification = obj4.useInAppNotificationContext().handleDismissNotification;
  const items = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    let obj2;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { userName: nullableMessageAuthor.nick, message: obj2.unparse(message.content, channel.id, true) };
    const Hjp1LH = intl2.t.Hjp1LH;
    obj2 = MessageParserDefault;
    const formatToPlainStringResult = formatToPlainString(Hjp1LH, obj);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(formatToPlainStringResult);
  }, items);
  const items1 = [channel.id, message.id];
  const items2 = [channel.id];
  const callback = guild.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    const obj2 = transitionToChannel;
    obj2.transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items1);
  const items3 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channelId: channel.id };
    return obj.pushLazy(asyncRequire(12510, dependencyMap.paths), obj2, "in-app-notification-settings-modal");
  }, items2);
  const memo = guild.useMemo(
    () => ({
      type: "message",
      channel,
      parentChannel,
      guild,
      author: nullableMessageAuthor,
      onDismiss: handleDismissNotification,
    }),
    items3,
  );
  const NotificationPressable = message(parentChannel[19]).NotificationPressable;
  ({ user: message.author, guildId: id, size: message(parentChannel[9]).AvatarSizes.NORMAL });
  const guild2 = notification.guild;
  id = undefined;
  const Avatar = message(parentChannel[9]).Avatar;
  if (guild2 != null) {
    id = guild2.id;
  }
  return (
    <NotificationPressable
      icon={null}
      accessoryLabelNode={tmp14}
      rightAccessory={null}
      header={memo}
      notification={notification}
      onPress={callback}
      onSettingsPress={callback1}
    >
      {null}
    </NotificationPressable>
  );
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default memoResult;
