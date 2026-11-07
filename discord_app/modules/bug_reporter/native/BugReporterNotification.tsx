// === Module 11218: BugReporterNotification ===

// Module 11218 (BugReporterNotification)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import FastImageDefault from "FastImage" /* 5842 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11152 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 11154 */;
import noop from "module_19" /* 19 */;
import BugReportStore from "BugReportStore" /* 11219 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj2 = { preview: null, rightAccessoryContainer: null };
let size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
obj2.preview = size;
obj2.rightAccessoryContainer = { marginLeft: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_8();
  const obj = { style: tmp.rightAccessoryContainer, children: null };
  const memo = noop.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj.children = jsx(FastImageDefault, { source: { uri: notification.imageUri }, style: tmp.preview });
  let obj2 = { source: { uri: notification.imageUri }, style: tmp.preview };
  const tmp3 = <View style={tmp.rightAccessoryContainer}>{null}</View>;
  return jsx(notification(11208).NotificationPressable, {
    header: memo,
    children: jsx(notification(11169).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <View style={tmp.rightAccessoryContainer}>{null}</View>,
    onPress() {
      if (!BugReportStore.getField("isReportOpen")) {
        ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
        InAppNotificationUtils.trackDismissed({ type: null, dismissReason: "notification_clicked", inAppNotificationId: null });
        const obj9 = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
        BugReportStore.setState({ isReportOpen: true });
        ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11220, dependencyMap.paths), { screenshotUri: null, screenshot: null });
        const obj10 = { screenshotUri: null, screenshot: null };
      }
    },
    onSettingsPress() {
      notification(dependencyMap[15]).openUserSettings({ screen: constants.OVERVIEW });
    },
    notification
  });
}