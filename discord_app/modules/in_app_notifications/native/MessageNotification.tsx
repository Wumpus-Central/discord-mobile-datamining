// discord_app/modules/in_app_notifications/native/MessageNotification.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import MessageParserDefault from "../../messages/MessageParser.tsx";
import MessagePreviewTextDefault from "MessagePreviewText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const InAppNotificationConstants = fn(10442);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: hasOwnProperty, NOTIFICATION_PREVIEW_LINE_CLAMP: metroRequire } =
  InAppNotificationConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ newContainerRoleDot: { paddingRight: 4, paddingTop: 0 } });
let closure_9 = noop.memo((message) =>
  jsx(MessagePreviewTextDefault, { message: message.message, lineClamp, maxHeight }),
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageNotification.tsx");

export default noop.memo(function MessageNotification(notification) {
  notification = notification.notification;
  let nullableMessageAuthor;
  let handleDismissNotification;
  const message = notification.message;
  const channel = notification.channel;
  const parentChannel = notification.parentChannel;
  const guild = notification.guild;
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
    let intl = message(parentChannel[8]).intl;
    const interaction = message.interaction;
    let user;
    if (interaction != null) {
      user = interaction.user;
    }
    let obj2 = { username: message(parentChannel[9]).getUserAuthor(user, channel).nick };
    message.content = intl.formatToPlainString(message(parentChannel[8]).t["7eikg1"], obj2);
    let obj = message(parentChannel[9]);
  }
  const tmp = closure_8();
  nullableMessageAuthor = message(parentChannel[9]).useNullableMessageAuthor(message);
  const obj3 = message(parentChannel[9]);
  const items = [nullableMessageAuthor];
  let colorString;
  const stateFromStores = message(parentChannel[6]).useStateFromStores(items, () => nullableMessageAuthor.roleStyle);
  if (nullableMessageAuthor != null) {
    colorString = nullableMessageAuthor.colorString;
  }
  let tmp15Result;
  if ("dot" === stateFromStores) {
    if (undefined !== colorString) {
      const obj5 = { color: colorString, colors: null, containerStyles: null };
      let colorStrings;
      if (nullableMessageAuthor != null) {
        colorStrings = nullableMessageAuthor.colorStrings;
      }
      obj5.colors = colorStrings;
      obj5.containerStyles = tmp.newContainerRoleDot;
      tmp15Result = jsx(tmp9(tmp10[7]).RoleDot, { color: colorString, colors: null, containerStyles: null });
    }
  }
  const obj4 = message(parentChannel[6]);
  handleDismissNotification = message(parentChannel[10]).useInAppNotificationContext().handleDismissNotification;
  const items1 = [nullableMessageAuthor.nick, channel.id, message.content];
  const effect = guild.useEffect(() => {
    const intl = util.intl;
    const obj = {
      userName: nullableMessageAuthor.nick,
      message: MessageParserDefault.unparse(message.content, channel.id, true),
    };
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.Hjp1LH, obj));
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel.id];
  const callback = guild.useCallback(() => {
    ModalActionCreatorsDefault.popAll();
    transitionToChannel.transitionToMessage(channel.id, message.id, { navigationReplace: true });
  }, items2);
  const items4 = [channel, parentChannel, guild, nullableMessageAuthor, handleDismissNotification];
  const callback1 = guild.useCallback(
    () =>
      ModalActionCreatorsDefault.pushLazy(
        asyncRequireImpl(10485, dependencyMap.paths),
        { channelId: channel.id },
        "in-app-notification-settings-modal",
      ),
    items3,
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
    items4,
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
  obj6.size = message(parentChannel[7]).AvatarSizes.NORMAL;
  obj7.icon = jsx(message(parentChannel[7]).Avatar, { user: message.author, guildId: null, size: null });
  obj7.accessoryLabelNode = tmp15Result;
  obj7.rightAccessory = jsx(message(parentChannel[18]).MediaPreviewRightAccessory, { message });
  obj7.children = <closure_9 message={message} />;
  obj7.header = memo;
  obj7.notification = notification;
  obj7.onPress = callback;
  obj7.onSettingsPress = callback1;
  return jsx(message(parentChannel[17]).NotificationPressable, {
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
