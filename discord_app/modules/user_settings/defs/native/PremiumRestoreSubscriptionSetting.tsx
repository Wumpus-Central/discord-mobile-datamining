// discord_app/modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import BillingActionCreatorsDefault from "../../../../actions/native/BillingActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11725);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.s9h22P);
  },
  parent: null,
  IconComponent: fn(8940).NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    const result = BillingActionCreatorsDefault.restoreAndApplyPurchases(true);
    result.then(
      (result) => {
        if (result.length > 0) {
          const obj2 = { body: null };
          const intl = require("util").intl;
          obj2.body = intl.string(require("util").t.pnRpIb);
          require("actions/AlertActionCreators").show(obj2);
          const obj = require("actions/AlertActionCreators");
        } else {
          const obj4 = { title: null, body: null };
          const intl2 = require("util").intl;
          obj4.title = intl2.string(require("util").t.WXkaoM);
          const intl3 = require("util").intl;
          obj4.body = intl3.string(require("util").t.YW7lqS);
          require("actions/AlertActionCreators").show(obj4);
          const obj3 = require("actions/AlertActionCreators");
        }
      },
      () => {
        const obj2 = { title: null, body: null };
        const intl = require("util").intl;
        obj2.title = intl.string(require("util").t.POsVOt);
        const intl2 = require("util").intl;
        obj2.body = intl2.string(require("util").t["XbE/Ez"]);
        require("actions/AlertActionCreators").show(obj2);
      },
    );
    actions_AlertActionCreatorsDefault.openLazy({
      importer() {
        return require("asyncRequireImpl")(paths[5], paths.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const merged = Object.assign(arg0);
            return closure_2_4(closure_0, {});
          };
        });
      },
      isDismissable: false,
    });
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default pressable;
