// discord_app/modules/bug_reporter/native/BugReporterNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import InAppNotificationUtils from "../../in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BugReportStore from "../BugReportStore.tsx";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { preview: null, rightAccessoryContainer: null };
let size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
obj2.preview = size;
obj2.rightAccessoryContainer = { marginLeft: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_8();
  const obj = { style: tmp.rightAccessoryContainer, children: null };
  const memo = noop.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj.children = jsx(FastImageDefault, { source: { uri: notification.imageUri }, style: tmp.preview });
  let obj2 = { source: { uri: notification.imageUri }, style: tmp.preview };
  const tmp3 = <View style={tmp.rightAccessoryContainer}>{null}</View>;
  return jsx(notification(12567).NotificationPressable, {
    header: memo,
    children: jsx(notification(12537).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <View style={tmp.rightAccessoryContainer}>{null}</View>,
    onPress() {
      if (!BugReportStore.getField("isReportOpen")) {
        ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
        InAppNotificationUtils.trackDismissed({
          type: null,
          dismissReason: "notification_clicked",
          inAppNotificationId: null,
        });
        const obj9 = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
        BugReportStore.setState({ isReportOpen: true });
        ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12578, dependencyMap.paths), {
          screenshotUri: null,
          screenshot: null,
        });
        const obj10 = { screenshotUri: null, screenshot: null };
      }
    },
    onSettingsPress() {
      notification(dependencyMap[15]).openUserSettings({ screen: constants.OVERVIEW });
    },
    notification,
  });
};
