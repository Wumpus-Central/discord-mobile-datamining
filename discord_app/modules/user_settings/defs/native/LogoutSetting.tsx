// === Module 15555: LogoutSetting ===

// Module 15555 (LogoutSetting)
import Storage2 from "Storage" /* 510 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import AlertModal from "AlertModal" /* 4910 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import DoorExitIcon from "DoorExitIcon" /* 9073 */;
import PushNotificationDefault from "PushNotification" /* 9687 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function handleLogout() {
  const Storage = Storage2.Storage;
  const result = Storage.set(ConstantsIOS.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  SelectedChannelActionCreatorsDefault.disconnect();
  const result1 = PushNotificationDefault.clearAllNotifications();
  UserSettingsModalActionCreatorsDefault.close();
  AuthenticationActionCreatorsDefault.logout("confirm_logout_alert");
}
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["2jxGer"]);
  },
  IconComponent: DoorExitIcon.DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = { title: null, content: null, actions: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["2jxGer"]);
    const intl2 = util.intl;
    obj.content = intl2.string(util.t.SUnWBB);
    obj = { children: null };
    const obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = util.intl;
    obj1.text = intl3.string(util.t["2jxGer"]);
    obj1.onPress = handleLogout;
    const items = [React3(AlertModal.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj2.text = intl4.string(util.t["13/7kX"]);
    items[1] = React3(AlertModal.AlertActionButton, obj2);
    obj.children = items;
    obj.actions = hasOwnProperty(React4, obj);
    obj.openAlert("logout", React3(AlertModal.AlertModal, obj));
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;