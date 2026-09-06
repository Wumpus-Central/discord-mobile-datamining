// discord_app/modules/user_settings/defs/native/LogoutSetting.tsx
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import DoorExitIcon from "../../../../design/components/Icon/native/redesign/generated/DoorExitIcon.tsx";
import PushNotificationDefault from "../../../../lib/pushnotification/PushNotification.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const items = [React3(AlertModal.AlertActionButton, obj1)];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj2.text = intl4.string(util.t["13/7kX"]);
    items[1] = React3(AlertModal.AlertActionButton, obj2);
    obj.children = items;
    obj.actions = hasOwnProperty(React4, obj);
    obj.openAlert("logout", React3(AlertModal.AlertModal, obj));
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;
