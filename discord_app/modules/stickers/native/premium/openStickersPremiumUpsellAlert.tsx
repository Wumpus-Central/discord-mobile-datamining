// discord_app/modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import actions_BillingActionCreators from "../../../billing/actions/BillingActionCreators.tsx";
import SubscriptionPlanActionCreators from "../../../../actions/SubscriptionPlanActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_7 = async function _openStickersPremiumUpsellAlert() {
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const paths = tmp2;
            closure_1 = tmp5;
            closure_129_0 = _location;
            const obj4 = { type: closure_2_5.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, location: _location };
            AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj4);
            const items = [SubscriptionPlanActionCreators.fetchPremiumSubscriptionPlans()];
            items[1] = actions_BillingActionCreators.fetchPaymentSources();
            c3 = 1;
            c4 = 1;
            const obj5 = { value: Promise.all(items), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj8 = {
            importer() {
              return analyticsLocation(paths[9])(paths[8], paths.paths).then((result) => {
                closure_0 = result.default;
                return (arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.analyticsLocation = analyticsLocation;
                  return closure_3_6(closure_0, obj);
                };
              });
            },
            isDismissable: true,
          };
          closure_130_1(closure_130_2[7]).openLazy(obj8);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c4 = tmp;
        throw tmp11;
      }
    }
  })();
};
const Constants = fn(1074);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx");

export default function openStickersPremiumUpsellAlert() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
