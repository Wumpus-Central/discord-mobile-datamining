// === Module 10148: openStickersPremiumUpsellAlert ===

// Module 10148 (openStickersPremiumUpsellAlert)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5411 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6770 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_1;

let closure_4;
let hasOwnProperty;
let obj = function _openStickersPremiumUpsellAlert() {
  obj = _asyncToGenerator(async (_location) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              const paths = tmp;
              closure_1 = tmp4;
              const obj4 = { type: closure_2_5.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, location: _location };
              const obj7 = AnalyticsUtilsDefault;
              obj7.track(constants.OPEN_MODAL, obj4);
              const items = [, ];
              const obj9 = SubscriptionPlanActionCreators;
              items[0] = obj9.fetchPremiumSubscriptionPlans();
              const obj10 = actions_BillingActionCreators;
              items[1] = obj10.fetchPaymentSources();
              c3 = 1;
              c4 = 1;
              const obj5 = { value: all(items), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            obj = closure_130_1(closure_130_2[7]);
            const obj8 = {
              importer() {
                      const promise = analyticsLocation(paths[9])(paths[8], paths.paths);
                      return promise.then((result) => {
                        let closure_0 = result.default;
                        return (arg0) => {
                          obj = { analyticsLocation };
                          const merged = Object.assign(arg0);
                          return closure_3_6(closure_0, obj);
                        };
                      });
                    },
              isDismissable: true
            };
            obj.openLazy(obj8);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c4 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx");

export default function openStickersPremiumUpsellAlert() {
  return obj(...arguments);
};