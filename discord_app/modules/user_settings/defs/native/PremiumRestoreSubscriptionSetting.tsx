// discord_app/modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import BillingActionCreatorsDefault from "../../../../actions/native/BillingActionCreators.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let tmp10 = null != stateFromStores && stateFromStores.verified;
        if (tmp10) {
          tmp10 = !PlatformUtils.isAndroid();
          const tmpResult2 = PlatformUtils;
        }
        cResult[2] = stateFromStores;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let tmp4 = null != stateFromStores && stateFromStores.verified;
      if (tmp4) {
        tmp4 = !PlatformUtils.isAndroid();
        const tmpResult = PlatformUtils;
      }
      return tmp4;
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.s9h22P);
  },
  parent: null,
  IconComponent: fn(8346).NitroWheelIcon,
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function s() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          let tmp10 = null != stateFromStores && stateFromStores.verified;
          if (tmp10) {
            tmp10 = !PlatformUtils.isAndroid();
            const tmpResult2 = PlatformUtils;
          }
          cResult[2] = stateFromStores;
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        return tmp8;
      }
    : () => {
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
