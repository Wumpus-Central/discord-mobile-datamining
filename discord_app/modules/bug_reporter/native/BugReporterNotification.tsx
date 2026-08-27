// discord_app/modules/bug_reporter/native/BugReporterNotification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../BugReportStore.tsx";
import { UserSettingsSections } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
createCacheKey = { preview: null, rightAccessoryContainer: null };
createCacheKey = { height: 64, width: 32, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: ThemesDefault.space.PX_12 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginLeft: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = callback();
  let obj = { style: tmp.rightAccessoryContainer, children: null };
  obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = React.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj[1] = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  obj = {
    header: memo,
    children: jsx(notification(10110).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = closure_1_6;
      if (!closure_1_6.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3[0], inAppNotificationId: obj3[2] } = notification);
        notification(closure_1_2[9]).trackDismissed(obj);
        const obj2 = notification(closure_1_2[9]);
        closure_1_1(closure_1_2[10]).popAll();
        const obj4 = closure_1_1(closure_1_2[10]);
        closure_1_1(closure_1_2[11]).clearNotification();
        obj.setState({ isReportOpen: true });
        const obj5 = closure_1_1(closure_1_2[11]);
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7[0], image: obj7[1] } = notification);
        closure_1_1(closure_1_2[10]).pushLazy(notification(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), obj);
        const obj6 = closure_1_1(closure_1_2[10]);
      }
    },
    onSettingsPress() {
      let obj = notification(table[14]);
      obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  };
  return jsx(notification(10175).NotificationPressable, {
    header: memo,
    children: jsx(notification(10110).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 source={{ uri: notification.imageUri }} style={tmp.preview} />,
    onPress() {
      let obj = closure_1_6;
      if (!closure_1_6.getField("isReportOpen")) {
        obj = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ({ type: obj3[0], inAppNotificationId: obj3[2] } = notification);
        notification(closure_1_2[9]).trackDismissed(obj);
        const obj2 = notification(closure_1_2[9]);
        closure_1_1(closure_1_2[10]).popAll();
        const obj4 = closure_1_1(closure_1_2[10]);
        closure_1_1(closure_1_2[11]).clearNotification();
        obj.setState({ isReportOpen: true });
        const obj5 = closure_1_1(closure_1_2[11]);
        obj = { screenshotUri: null, screenshot: null };
        ({ imageUri: obj7[0], image: obj7[1] } = notification);
        closure_1_1(closure_1_2[10]).pushLazy(notification(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), obj);
        const obj6 = closure_1_1(closure_1_2[10]);
      }
    },
    onSettingsPress() {
      let obj = notification(table[14]);
      obj = { screen: constants.OVERVIEW };
      obj.openUserSettings(obj);
    },
    notification
  });
};