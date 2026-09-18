// === Module 15771: LogoutSetting ===

// Module 15771 (LogoutSetting)
import Storage2 from "Storage" /* 510 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import useAlertStore from "useAlertStore" /* 5068 */;
import AlertModal from "AlertModal" /* 5072 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5581 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6785 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7186 */;
import DoorExitIcon from "DoorExitIcon" /* 9311 */;
import PushNotificationDefault from "PushNotification" /* 9932 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
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
    const obj2 = { title: null, content: null, actions: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["2jxGer"]);
    const intl2 = util.intl;
    obj2.content = intl2.string(util.t.SUnWBB);
    const obj3 = { children: null };
    const obj4 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = util.intl;
    obj4.text = intl3.string(util.t["2jxGer"]);
    obj4.onPress = handleLogout;
    const items = [React3(AlertModal.AlertActionButton, obj4), ];
    const obj5 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(util.t["13/7kX"]);
    items[1] = React3(AlertModal.AlertActionButton, obj5);
    obj3.children = items;
    obj2.actions = hasOwnProperty(React4, obj3);
    useAlertStore.openAlert("logout", React3(AlertModal.AlertModal, obj2));
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;