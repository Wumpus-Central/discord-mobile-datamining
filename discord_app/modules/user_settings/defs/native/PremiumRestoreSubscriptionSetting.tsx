// === Module 15243: PremiumRestoreSubscriptionSetting ===

// Module 15243 (PremiumRestoreSubscriptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 7419 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.s9h22P);
  },
  parent: null,
  IconComponent: fn(8662).NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let obj = BillingActionCreatorsDefault;
    const result = obj.restoreAndApplyPurchases(true);
    result.then((result) => {
      if (result.length > 0) {
        require("actions/AlertActionCreators");
        let obj = { body: null };
        const intl = require("util").intl;
        obj.body = intl.string(require("util").t.pnRpIb);
        obj.show(obj);
      } else {
        obj = { title: null, body: null };
        const intl2 = require("util").intl;
        obj.title = intl2.string(require("util").t.WXkaoM);
        const intl3 = require("util").intl;
        obj.body = intl3.string(require("util").t.YW7lqS);
        require("actions/AlertActionCreators").show(obj);
        const obj3 = require("actions/AlertActionCreators");
      }
    }, () => {
      require("actions/AlertActionCreators");
      const obj = { title: null, body: null };
      const intl = require("util").intl;
      obj.title = intl.string(require("util").t.POsVOt);
      const intl2 = require("util").intl;
      obj.body = intl2.string(require("util").t["XbE/Ez"]);
      obj.show(obj);
    });
    obj = {
      importer() {
        return require("asyncRequireImpl")(paths[5], paths.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return closure_2_4(closure_0, {});
          };
        });
      }
    };
    actions_AlertActionCreatorsDefault.openLazy(obj);
  },
  withArrow: true,
  usePredicate: function useHasPremiumRestoreSubscriptionSetting() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let tmp4 = null != stateFromStores && stateFromStores.verified;
    if (tmp4) {
      tmp4 = !PlatformUtils.isAndroid();
      const tmpResult = PlatformUtils;
    }
    return tmp4;
  }
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default SettingBuilders;