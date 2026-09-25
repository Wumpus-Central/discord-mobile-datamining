// === Module 12016: useGuildBoostPurchaseHandler ===

// Module 12016 (useGuildBoostPurchaseHandler)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = new LoggerDefault("useGuildBoostPurchaseHandler");
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  _require = undefined;
  const result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
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
            let newAnalyticsLoadId = tmp2;
            newAnalyticsLoadId = undefined;
            newAnalyticsLoadId = args(10115).getNewAnalyticsLoadId();
            const obj7 = args(6820);
            c3 = 1;
            c4 = 1;
            const obj4 = {
              value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(args, guild_id, newAnalyticsLoadId, () => {
                        const obj2 = { guild_id, load_id: newAnalyticsLoadId, location_stack: null, custom_checkout_flow: null };
                        const items = [...closure_0];
                        obj2.location_stack = items;
                        const obj = guild_id(newAnalyticsLoadId[7]);
                        obj2.custom_checkout_flow = args(newAnalyticsLoadId[4]).getCustomCheckoutFlowForAnalytics();
                        obj.track(constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj2);
                        logger.log("Successfully opened mobile web Guild Boost Management page");
                      }, (arg0) => {
                        logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                        const obj2 = { title: null, body: null, hideActionSheet: true };
                        const intl = args(newAnalyticsLoadId[9]).intl;
                        obj2.title = intl.string(args(newAnalyticsLoadId[9]).t.NrBVjw);
                        const intl2 = args(newAnalyticsLoadId[9]).intl;
                        obj2.body = intl2.string(args(newAnalyticsLoadId[9]).t["gD+grx"]);
                        guild_id(newAnalyticsLoadId[8]).show(obj2);
                      }),
              done: false
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          args(5741).closeApplyBoostModal();
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c4 = tmp;
        throw tmp10;
      }
    }
  });
  let items = [arg0];
  let obj = require("MobileWebRedirectCheckoutUtils");
  return {
    shouldUseMobileWebRedirectCheckout: result,
    handleMobileWebRedirectCheckout: noop.useCallback(function() {
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
};