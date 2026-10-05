// discord_app/modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import BillingActionCreatorsDefault from "../../../../actions/native/BillingActionCreators.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react;
      const cResult = obj.c(4);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let tmp10 = null != stateFromStores && stateFromStores.verified;
        if (tmp10) {
          const tmpResult2 = PlatformUtils;
          tmp10 = !tmpResult2.isAndroid();
        }
        cResult[2] = stateFromStores;
        cResult[3] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let tmp4 = null != stateFromStores && stateFromStores.verified;
      if (tmp4) {
        const tmpResult = PlatformUtils;
        tmp4 = !tmpResult.isAndroid();
      }
      return tmp4;
    };
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.s9h22P);
  },
  parent: null,
  IconComponent: NitroWheelIcon.NitroWheelIcon,
  onPress: function handleNitroRestoreSettingPress() {
    let paths;
    let obj = BillingActionCreatorsDefault;
    const result = obj.restoreAndApplyPurchases(true);
    result.then(
      (result) => {
        let intl;
        let intl2;
        let intl3;
        if (result.length > 0) {
          const obj = { body: intl.string(require("intl").t.pnRpIb) };
          const show = require("actions/AlertActionCreators").show;
          require("actions/AlertActionCreators");
          intl = require("intl").intl;
          show(obj);
        } else {
          const obj2 = { title: intl2.string(require("intl").t.WXkaoM), body: intl3.string(require("intl").t.YW7lqS) };
          const show2 = require("actions/AlertActionCreators").show;
          require("actions/AlertActionCreators");
          intl2 = require("intl").intl;
          intl3 = require("intl").intl;
          show2(obj2);
        }
      },
      () => {
        let intl;
        let intl2;
        const obj = { title: intl.string(require("intl").t.POsVOt), body: intl2.string(require("intl").t["XbE/Ez"]) };
        const show = require("actions/AlertActionCreators").show;
        require("actions/AlertActionCreators");
        intl = require("intl").intl;
        intl2 = require("intl").intl;
        show(obj);
      },
    );
    let obj2 = actions_AlertActionCreatorsDefault;
    const obj3 = {
      importer() {
        const promise = require("asyncRequire")(paths[5], paths.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            return closure_2_4(closure_0, obj);
          };
        });
      },
      isDismissable: false,
    };
    obj2.openLazy(obj3);
  },
  withArrow: true,
  usePredicate: tmp2,
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumRestoreSubscriptionSetting.tsx");

export default pressable;
