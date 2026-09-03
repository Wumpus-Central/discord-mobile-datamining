// === Module 15397: handleLogout ===

// Module 15397 (handleLogout)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 592 */;
import keys from "keys" /* 688 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useAlertStore from "useAlertStore" /* 4860 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4864 */;
import _modDef5364 from "module_5364" /* 5364 */;
import handleLogoutDefault from "handleLogout" /* 6061 */;
import dispatcherDefault from "dispatcher" /* 7774 */;
import NativeModulesDefault from "NativeModules" /* 9674 */;
import DoorExitIcon from "DoorExitIcon" /* 10029 */;
import jsxProd from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11292 */;

function handleLogout() {
  const Storage = Storage2.Storage;
  const result = Storage.set(keys.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  _modDef5364.disconnect();
  const obj2 = _modDef5364;
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