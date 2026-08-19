// === Module 14589: pressable ===

// Module 14589 (pressable)
import obj132 from "obj132" /* 500 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4656 from "module_4656" /* 4656 */;
import applyAppleReceiptDefault from "applyAppleReceipt" /* 7390 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.s9h22P);
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = applyAppleReceiptDefault;
    const result = obj.restoreAndApplyPurchases(true);
    result.then((result) => {
      if (result.length > 0) {
        callback2(paths[3]);
        let obj = { body: null };
        const intl = callback(paths[4]).intl;
        obj[0] = intl.string(callback(paths[4]).t.pnRpIb);
        obj.show(obj);
      } else {
        obj = { title: null, body: null };
        const intl2 = callback(paths[4]).intl;
        obj[0] = intl2.string(callback(paths[4]).t.WXkaoM);
        const intl3 = callback(paths[4]).intl;
        obj[1] = intl3.string(callback(paths[4]).t.YW7lqS);
        callback2(paths[3]).show(obj);
        const obj3 = callback2(paths[3]);
      }
    }, () => {
      callback2(paths[3]);
      const obj = { title: null, body: null };
      const intl = callback(paths[4]).intl;
      obj[0] = intl.string(callback(paths[4]).t.POsVOt);
      const intl2 = callback(paths[4]).intl;
      obj[1] = intl2.string(callback(paths[4]).t["XbE/Ez"]);
      obj.show(obj);
    });
    obj = {
      importer() {
        return callback(paths[6])(paths[5], paths.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return closure_1_4(closure_0, {});
          };
        });
      }
    };
    _modDef4656.openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [closure_3];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp4 = null != stateFromStores && stateFromStores.verified;
    if (tmp4) {
      tmp4 = !obj132.isAndroid();
      const tmpResult = obj132;
    }
    return tmp4;
  }
};
createToggle = createToggle.createPressable(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default createToggle;