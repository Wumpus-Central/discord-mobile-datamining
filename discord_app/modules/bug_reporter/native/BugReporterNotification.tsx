// === Module 10183: BugReporterNotification ===

// Module 10183 (BugReporterNotification)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10094 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10096 */;
import noop from "module_19" /* 19 */;
import BugReportStore from "BugReportStore" /* 10184 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { preview: null, rightAccessoryContainer: null };
let size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
createStyles.preview = size;
createStyles = { marginLeft: nativeDefault.space.PX_12 };
createStyles.rightAccessoryContainer = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_9();
  let obj = { style: tmp.rightAccessoryContainer, children: null };
  obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = noop.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj.children = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  obj = {
    header: memo,
    children: jsx(notification(10107).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = BugReportStore;
      if (!BugReportStore.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
        InAppNotificationUtils.trackDismissed(obj);
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
        obj.setState({ isReportOpen: true });
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10185, dependencyMap.paths), obj);
      }
    },
    onSettingsPress() {
      notification(dependencyMap[14]);
      const obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  };
  return jsx(notification(10170).NotificationPressable, {
    header: memo,
    children: jsx(notification(10107).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = BugReportStore;
      if (!BugReportStore.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
        InAppNotificationUtils.trackDismissed(obj);
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
        obj.setState({ isReportOpen: true });
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10185, dependencyMap.paths), obj);
      }
    },
    onSettingsPress() {
      notification(dependencyMap[14]);
      const obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  });
};