// discord_app/modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _modDef4809 from "../../../../actions/native/AlertActionCreators.tsx";
import applyAppleReceiptDefault from "../../../../actions/native/BillingActionCreators.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.s9h22P);
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = applyAppleReceiptDefault;
    const result = obj.restoreAndApplyPurchases(true);
    result.then((arg0) => {
      if (arg0.length > 0) {
        let obj = callback2(paths[3]);
        obj = { body: null };
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
      let obj = callback2(paths[3]);
      obj = { title: null, body: null };
      const intl = callback(paths[4]).intl;
      obj[0] = intl.string(callback(paths[4]).t.POsVOt);
      const intl2 = callback(paths[4]).intl;
      obj[1] = intl2.string(callback(paths[4]).t["XbE/Ez"]);
      obj.show(obj);
    });
    obj = {
      importer() {
        return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return closure_1_4(closure_0, {});
          };
        });
      }
    };
    _modDef4809.openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [closure_3];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp4 = null != stateFromStores && stateFromStores.verified;
    if (tmp4) {
      tmp4 = !set.isAndroid();
      const tmpResult = set;
    }
    return tmp4;
  }
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default createToggle;