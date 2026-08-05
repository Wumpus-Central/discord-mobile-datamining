// discord_app/modules/user_settings/defs/native/LogoutSetting.tsx
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let c3;
let c4;
let c5;
function handleLogout() {
  const Storage = require("../../../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
  const result = Storage.set(require("../../../../ConstantsIOS.tsx") /* keys */.StorageKeys.LOGOUT_TIMESTAMP_KEY, new Date().getTime());
  const date = new Date();
  require("../../../../actions/SelectedChannelActionCreators.tsx").disconnect();
  const obj2 = require("../../../../actions/SelectedChannelActionCreators.tsx");
  const result1 = require("../../../../lib/pushnotification/PushNotification.tsx").clearAllNotifications();
  const obj3 = require("../../../../lib/pushnotification/PushNotification.tsx");
  require("../../../../actions/UserSettingsModalActionCreators.tsx").close();
  const obj4 = require("../../../../actions/UserSettingsModalActionCreators.tsx");
  require("../../../../actions/AuthenticationActionCreators.tsx").logout("confirm_logout_alert");
}
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require("../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
    obj = { title: null, content: null, actions: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.SUnWBB);
    obj = { children: null };
    const obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj1[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj));
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
  },
  IconComponent: require("DoorExitIcon").DoorExitIcon,
  parent: null,
  variant: "danger",
  onPress: function showConfirmLogoutAlert() {
    let obj = require("../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
    obj = { title: null, content: null, actions: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.SUnWBB);
    obj = { children: null };
    const obj1 = { text: null, onPress: null, variant: "destructive" };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj1[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["2jxGer"]);
    obj1[1] = handleLogout;
    const items = [callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj1), ];
    const obj2 = { variant: "secondary", text: null };
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]);
    items[1] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, obj2);
    obj[0] = items;
    obj[2] = callback2(closure_4, obj);
    obj.openAlert("logout", callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, obj));
  }
};
let result = require("keys").fileFinishedImporting("modules/user_settings/defs/native/LogoutSetting.tsx");

export default pressable;