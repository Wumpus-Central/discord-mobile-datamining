// === Module 12538: useGuildBoostPurchaseHandler ===

// Module 12538 (useGuildBoostPurchaseHandler)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const require = arg1;
let closure_6 = new timestampDefault("useGuildBoostPurchaseHandler");
const tmp2 = new timestampDefault("useGuildBoostPurchaseHandler");
let result = require("set").fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  let _require = arg0;
  let obj = _require(7406);
  _require = undefined;
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  _require = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let newAnalyticsLoadId = tmp2;
              newAnalyticsLoadId = undefined;
              newAnalyticsLoadId = callback(closure_2_2[5]).getNewAnalyticsLoadId();
              const obj7 = callback(closure_2_2[6]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(callback, closure_1, newAnalyticsLoadId, () => {
                let obj = callback(newAnalyticsLoadId[7]);
                obj = { guild_id: callback, load_id: newAnalyticsLoadId, location_stack: items, custom_checkout_flow: args(newAnalyticsLoadId[4]).getCustomCheckoutFlowForAnalytics() };
                items = [...closure_0];
                obj.track(closure_1_5.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj);
                closure_1_6.log("Successfully opened mobile web Guild Boost Management page");
              }, (arg0) => {
                logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                let obj = callback(newAnalyticsLoadId[8]);
                obj = { title: null, body: null, hideActionSheet: true };
                const intl = args(newAnalyticsLoadId[9]).intl;
                obj[0] = intl.string(args(newAnalyticsLoadId[9]).t.NrBVjw);
                const intl2 = args(newAnalyticsLoadId[9]).intl;
                obj[1] = intl2.string(args(newAnalyticsLoadId[9]).t["gD+grx"]);
                obj.show(obj);
              });
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = callback(closure_2_2[10]);
            obj.closeApplyBoostModal();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c4 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  let items = [arg0];
  obj = {
    shouldUseMobileWebRedirectCheckout: result,
    handleMobileWebRedirectCheckout: React.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items)
  };
  return obj;
};