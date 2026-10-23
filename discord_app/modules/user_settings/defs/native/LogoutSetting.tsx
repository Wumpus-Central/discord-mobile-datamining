// === Module 16877: LogoutSetting ===

// Module 16877 (LogoutSetting)
import Storage2 from "Storage" /* 510 */;
import ConstantsIOS from "ConstantsIOS" /* 1107 */;
import util from "util" /* 1128 */;
import useAlertStore from "useAlertStore" /* 5908 */;
import AlertModal from "AlertModal" /* 5912 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6632 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6666 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7085 */;
import PushNotificationDefault from "PushNotification" /* 10752 */;
import DoorExitIcon from "DoorExitIcon" /* 11514 */;
import jsxProd from "jsxProd" /* 21 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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