// discord_app/modules/bug_reporter/native/BugReporterNotification.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { UserSettingsSections } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
createCacheKey = { preview: null, rightAccessoryContainer: null };
createCacheKey = { height: 64, width: 32, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginLeft: require("Themes").space.PX_12 };
const result = require("zustandStore").fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = createCacheKey();
  let obj = { style: tmp.rightAccessoryContainer, children: null };
  obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = React.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj[1] = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  obj = { header: memo, children: null, rightAccessory: null, onPress: null, onSettingsPress: null, notification: null };
  obj[1] = jsx(notification(9674).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." });
  obj[2] = <closure_5 header={memo} rightAccessory={null} onPress={null} onSettingsPress={null} notification={null}>{null}</closure_5>;
  obj[3] = function onPress() {
    let obj = outer1_6;
    if (!outer1_6.getField("isReportOpen")) {
      obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
      ({ type: obj3[0], inAppNotificationId: obj3[2] } = notification);
      notification(outer1_2[9]).trackDismissed(obj);
      const obj2 = notification(outer1_2[9]);
      outer1_1(outer1_2[10]).popAll();
      const obj4 = outer1_1(outer1_2[10]);
      outer1_1(outer1_2[11]).clearNotification();
      obj.setState({ isReportOpen: true });
      const obj5 = outer1_1(outer1_2[11]);
      obj = { screenshotUri: null, screenshot: null };
      ({ imageUri: obj7[0], image: obj7[1] } = notification);
      outer1_1(outer1_2[10]).pushLazy(notification(outer1_2[13])(outer1_2[12], outer1_2.paths), obj);
      const obj6 = outer1_1(outer1_2[10]);
    }
  };
  obj[4] = function onSettingsPress() {
    let obj = notification(table[14]);
    obj = { screen: constants.OVERVIEW };
    obj.openUserSettings(obj);
  };
  obj[5] = notification;
  return jsx(notification(9738).NotificationPressable, { header: memo, children: null, rightAccessory: null, onPress: null, onSettingsPress: null, notification: null });
};