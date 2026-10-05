// discord_app/modules/user_settings/defs/native/PremiumGiftingSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BillingPlatformUtils from "../../../device/BillingPlatformUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import GiftIcon from "../../../../design/components/Icon/native/redesign/generated/GiftIcon.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import PromotionsHooks from "../../../premium/promotions/PromotionsHooks.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = BlockedPaymentsCountryExperiment;
          const isPaymentsBlocked = obj.getIsPaymentsBlocked();
          let flag = !isPaymentsBlocked;
          if (isPaymentsBlocked) {
            openBlockedPaymentsCountryActionSheetDefault();
            flag = false;
          }
          return flag;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      react.useCallback(() => {
        const obj = BlockedPaymentsCountryExperiment;
        const isPaymentsBlocked = obj.getIsPaymentsBlocked();
        let flag = !isPaymentsBlocked;
        if (isPaymentsBlocked) {
          openBlockedPaymentsCountryActionSheetDefault();
          flag = false;
        }
        return flag;
      }, []);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = PromotionsHooks;
      const unseenOutboundPromotions = obj2.useUnseenOutboundPromotions();
      if (cResult[0] !== unseenOutboundPromotions.length) {
        const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
        cResult[0] = unseenOutboundPromotions.length;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = PromotionsHooks;
      const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
      return jsx(native.Badge, { value: unseenOutboundPromotions.length });
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: GiftIcon.GiftIcon,
  usePredicate() {
    const obj = BillingPlatformUtils;
    return obj.isPremiumGiftingSupported();
  },
  usePreNavigationAction: tmp2,
  useTrailing: tmp3,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    },
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
