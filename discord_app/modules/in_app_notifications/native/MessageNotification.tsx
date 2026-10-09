// discord_app/modules/in_app_notifications/native/MessageNotification.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import MessageParserDefault from "../../messages/MessageParser.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const InAppNotificationConstants = fn(12529);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: hasOwnProperty, NOTIFICATION_PREVIEW_LINE_CLAMP: metroRequire } =
  InAppNotificationConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let ReactCompilerGating = fn(558);
let closure_9 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessagePreview(message) {
        const cResult = c.c(2);
        message = message.message;
        if (cResult[0] !== message) {
          const obj2 = { message, lineClamp, maxHeight };
          const tmp8 = jsx(MessagePreviewTextDefault, { message, lineClamp, maxHeight });
          cResult[0] = message;
          cResult[1] = tmp8;
          let tmp3 = tmp8;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : function MessagePreview(message) {
        return jsx(MessagePreviewTextDefault, { message: message.message, lineClamp, maxHeight });
      },
);
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAccessoryLabelNode(arg0) {
      const cResult = c.c(7);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (author != null) {
        colorString = author.colorString;
      }
      let colorStrings;
      if (author != null) {
        colorStrings = author.colorStrings;
      }
      if (cResult[2] === colorStrings) {
        if (cResult[3] === containerStyles) {
          if (cResult[4] === colorString) {
            if (cResult[5] === tmp9) {
              let tmp11 = cResult[6];
            }
            return tmp11;
          }
        }
      }
      let tmp13Result;
      if ("dot" === stateFromStores && undefined !== colorString) {
        const obj2 = { color: colorString, colors: null, containerStyles: null };
        let colorStrings1;
        if (author != null) {
          colorStrings1 = author.colorStrings;
        }
        obj2.colors = colorStrings1;
        obj2.containerStyles = containerStyles;
        tmp13Result = jsx(native.RoleDot, { color: colorString, colors: null, containerStyles: null });
      }
      let colorStrings2;
      if (author != null) {
        colorStrings2 = author.colorStrings;
      }
      cResult[2] = colorStrings2;
      cResult[3] = containerStyles;
      cResult[4] = colorString;
      cResult[5] = "dot" === stateFromStores && undefined !== colorString;
      cResult[6] = tmp13Result;
      tmp11 = tmp13Result;
      const tmpResult = initialize;
    }
  : function useAccessoryLabelNode(author) {
      author = author.author;
      const items = [AccessibilityStore];
      let colorString;
      const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
      if (author != null) {
        colorString = author.colorString;
      }
      let tmp6Result;
      if ("dot" === stateFromStores) {
        if (undefined !== colorString) {
          const obj2 = { color: colorString, colors: null, containerStyles: null };
          let colorStrings;
          if (author != null) {
            colorStrings = author.colorStrings;
          }
          obj2.colors = colorStrings;
          obj2.containerStyles = author.containerStyles;
          tmp6Result = jsx(native.RoleDot, { color: colorString, colors: null, containerStyles: null });
        }
      }
      return tmp6Result;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default noop.memo(function MessageNotification(notification) {
  notification = notification.notification;
  let nullableMessageAuthor;
  let handleDismissNotification;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  guild = notification.guild;
  let tmp2 = 0 === message.content.length;
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
    const interaction = message.interaction;
    let user;
    if (interaction != null) {
      user = interaction.user;
    }
    let obj2 = { username: message(parentChannel[11]).getUserAuthor(user, channel).nick };
    message.content = intl.formatToPlainString(message(parentChannel[10]).t["7eikg1"], obj2);
    let obj = message(parentChannel[11]);
  }
  const tmp = closure_8();
  nullableMessageAuthor = message(parentChannel[11]).useNullableMessageAuthor(message);
  const obj3 = message(parentChannel[11]);
  const obj4 = { author: nullableMessageAuthor, containerStyles: tmp.newContainerRoleDot };
  const tmp12 = closure_10({ author: nullableMessageAuthor, containerStyles: tmp.newContainerRoleDot });
  handleDismissNotification = message(parentChannel[12]).useInAppNotificationContext().handleDismissNotification;
  const items = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    const intl = util.intl;
    const obj = {
      userName: nullableMessageAuthor.nick,
      message: MessageParserDefault.unparse(message.content, channel.id, true),
    };
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.Hjp1LH, obj));
  }, items);
  const items1 = [channel.id, message.id];
  const items2 = [channel.id];
  const callback = guild.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items1);
  const items3 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(
    () =>
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(12546, dependencyMap.paths),
        { channelId: channel.id },
        "in-app-notification-settings-modal",
      ),
    items2,
  );
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
  const obj6 = { user: message.author, guildId: null, size: null };
  const guild2 = notification.guild;
  let id;
  if (guild2 != null) {
    id = guild2.id;
  }
  const obj7 = {
    icon: null,
    accessoryLabelNode: null,
    rightAccessory: null,
    children: null,
    header: null,
    notification: null,
    onPress: null,
    onSettingsPress: null,
  };
  obj6.guildId = id;
  obj6.size = message(parentChannel[9]).AvatarSizes.NORMAL;
  obj7.icon = jsx(message(parentChannel[9]).Avatar, { user: message.author, guildId: null, size: null });
  obj7.accessoryLabelNode = tmp12;
  obj7.rightAccessory = jsx(message(parentChannel[20]).MediaPreviewRightAccessory, { message });
  obj7.children = <closure_9 message={message} />;
  obj7.header = memo;
  obj7.notification = notification;
  obj7.onPress = callback;
  obj7.onSettingsPress = callback1;
  return jsx(message(parentChannel[19]).NotificationPressable, {
    icon: null,
    accessoryLabelNode: null,
    rightAccessory: null,
    children: null,
    header: null,
    notification: null,
    onPress: null,
    onSettingsPress: null,
  });
});
