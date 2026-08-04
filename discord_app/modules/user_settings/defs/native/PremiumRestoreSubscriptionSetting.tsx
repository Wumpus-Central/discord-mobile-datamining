// discord_app/modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.s9h22P);
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = importDefault(6334);
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
          let closure_0 = arg0.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return outer1_4(closure_0, {});
          };
        });
      }
    };
    importDefault(4533).openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp4 = null != stateFromStores && stateFromStores.verified;
    if (tmp4) {
      tmp4 = !require(500) /* set */.isAndroid();
      const tmpResult = require(500) /* set */;
    }
    return tmp4;
  }
};
createToggle = createToggle.createPressable(createToggle);
let result = require("applyAppleReceipt").fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default createToggle;