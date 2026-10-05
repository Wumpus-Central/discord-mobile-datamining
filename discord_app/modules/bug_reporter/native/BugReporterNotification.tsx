// discord_app/modules/bug_reporter/native/BugReporterNotification.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import InAppNotificationUtils from "../../in_app_notifications/native/InAppNotificationUtils.tsx";
import InAppNotificationActionCreatorsDefault from "../../../actions/native/InAppNotificationActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import BugReportStore from "../BugReportStore.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let size;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { preview: size, rightAccessoryContainer: obj2 };
size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_9();
  let obj2 = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = react.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  const tmp3 = <closure_5 style={tmp.rightAccessoryContainer}>{null}</closure_5>;
  const NotificationPressable = notification(12516).NotificationPressable;
  return (
    <NotificationPressable
      header={memo}
      rightAccessory={tmp3}
      onPress={function onPress() {
        if (!BugReportStore.getField("isReportOpen")) {
          const obj9 = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
          ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
          const obj2 = InAppNotificationUtils;
          obj2.trackDismissed(obj9);
          const obj4 = ModalActionCreatorsDefault;
          obj4.popAll();
          const obj5 = InAppNotificationActionCreatorsDefault;
          obj5.clearNotification();
          BugReportStore.setState({ isReportOpen: true });
          const obj10 = { screenshotUri: null, screenshot: null };
          ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
          const obj6 = ModalActionCreatorsDefault;
          obj6.pushLazy(asyncRequire(12525, dependencyMap.paths), obj10);
        }
      }}
      onSettingsPress={function onSettingsPress() {
        const obj = notification(dependencyMap[14]);
        const obj2 = { screen: constants.OVERVIEW };
        obj.openUserSettings(obj2);
      }}
      notification={notification}
    >
      {null}
    </NotificationPressable>
  );
};
