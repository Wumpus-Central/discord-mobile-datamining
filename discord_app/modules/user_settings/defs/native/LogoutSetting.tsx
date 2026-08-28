// discord_app/modules/user_settings/defs/native/LogoutSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import Storage2 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import keys from "../../../../ConstantsIOS.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import getAlertModalItemKey from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import _modDef5320 from "../../../../actions/SelectedChannelActionCreators.tsx";
import handleLogoutDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import dispatcherDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import NativeModulesDefault from "../../../../lib/pushnotification/PushNotification.tsx";
import DoorExitIcon from "../../../../design/components/Icon/native/redesign/generated/DoorExitIcon.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function handleLogout() {
  const Storage = Storage2.Storage;
  const result = Storage.set(keys.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  _modDef5320.disconnect();
  const obj2 = _modDef5320;
  const result1 = NativeModulesDefault.clearAllNotifications();
  const obj3 = NativeModulesDefault;
  dispatcherDefault.close();
  const obj4 = dispatcherDefault;
  handleLogoutDefault.logout("confirm_logout_alert");
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["2jxGer"]);
  },
  IconComponent: DoorExitIcon.DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = useAlertStore;
    obj = { title: null, content: null, actions: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["2jxGer"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.SUnWBB);
    obj = { children: null };
    obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = getSystemLocale.intl;
    obj1[0] = intl3.string(getSystemLocale.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(getAlertModalItemKey.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = getSystemLocale.intl;
    obj2[1] = intl4.string(getSystemLocale.t["13/7kX"]);
    items[1] = callback(getAlertModalItemKey.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(getAlertModalItemKey.AlertModal, obj));
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["2jxGer"]);
  },
  IconComponent: DoorExitIcon.DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = useAlertStore;
    obj = { title: null, content: null, actions: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["2jxGer"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.SUnWBB);
    obj = { children: null };
    obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = getSystemLocale.intl;
    obj1[0] = intl3.string(getSystemLocale.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(getAlertModalItemKey.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = getSystemLocale.intl;
    obj2[1] = intl4.string(getSystemLocale.t["13/7kX"]);
    items[1] = callback(getAlertModalItemKey.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(getAlertModalItemKey.AlertModal, obj));
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;