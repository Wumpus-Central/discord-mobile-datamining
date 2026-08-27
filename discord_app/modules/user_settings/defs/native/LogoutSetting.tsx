// === Module 15100: handleLogout ===

// Module 15100 (handleLogout)
import set from "set" /* 2 */;
import Storage2 from "Storage" /* 595 */;
import keys from "keys" /* 691 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useAlertStore from "useAlertStore" /* 4811 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4815 */;
import _modDef5307 from "module_5307" /* 5307 */;
import handleLogoutDefault from "handleLogout" /* 6004 */;
import dispatcherDefault from "dispatcher" /* 7695 */;
import NativeModulesDefault from "NativeModules" /* 9578 */;
import DoorExitIcon from "DoorExitIcon" /* 9923 */;
import jsxProd from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10988 */;

function handleLogout() {
  const Storage = Storage2.Storage;
  const result = Storage.set(keys.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  _modDef5307.disconnect();
  const obj2 = _modDef5307;
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