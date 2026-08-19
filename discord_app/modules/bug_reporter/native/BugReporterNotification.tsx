// === Module 10126: BugReporterNotification ===

// Module 10126 (BugReporterNotification)
import ThemesDefault from "Themes" /* 712 */;
import _modDef5260 from "module_5260" /* 5260 */;
import dispatcherDefault from "dispatcher" /* 10031 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import zustandStore from "zustandStore" /* 10127 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ Image: c4, View: c5 } = get_ActivityIndicator);
const createCacheKey = { height: 64, width: 32, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: ThemesDefault.space.PX_12 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = callback();
  let obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = React.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj[1] = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  obj = {
    header: memo,
    children: jsx(notification(10048).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = closure_1_6;
      if (!closure_1_6.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3[0], inAppNotificationId: obj3[2] } = notification);
        notification(dependencyMap[9]).trackDismissed(obj);
        const obj2 = notification(dependencyMap[9]);
        _modDef5260.popAll();
        dispatcherDefault.clearNotification();
        obj.setState({ isReportOpen: true });
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7[0], image: obj7[1] } = notification);
        _modDef5260.pushLazy(notification(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), obj);
      }
    },
    onSettingsPress() {
      notification(table[14]);
      const obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  };
  return jsx(notification(10113).NotificationPressable, {
    header: memo,
    children: jsx(notification(10048).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = closure_1_6;
      if (!closure_1_6.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3[0], inAppNotificationId: obj3[2] } = notification);
        notification(dependencyMap[9]).trackDismissed(obj);
        const obj2 = notification(dependencyMap[9]);
        _modDef5260.popAll();
        dispatcherDefault.clearNotification();
        obj.setState({ isReportOpen: true });
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7[0], image: obj7[1] } = notification);
        _modDef5260.pushLazy(notification(dependencyMap[13])(dependencyMap[12], dependencyMap.paths), obj);
      }
    },
    onSettingsPress() {
      notification(table[14]);
      const obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  });
};