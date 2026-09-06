// === Module 12538: useGuildBoostPurchaseHandler ===

// Module 12538 (useGuildBoostPurchaseHandler)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = new LoggerDefault("useGuildBoostPurchaseHandler");
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default function useGuildBoostPurchaseHandler(arg0) {
  _require = arg0;
  let obj = require("MobileWebRedirectCheckoutUtils");
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let newAnalyticsLoadId = tmp2;
            newAnalyticsLoadId = undefined;
            newAnalyticsLoadId = args(10663).getNewAnalyticsLoadId();
            const obj7 = args(7405);
            c3 = 1;
            c4 = 1;
            const obj1 = {
              value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(args, guild_id, newAnalyticsLoadId, () => {
                        guild_id(newAnalyticsLoadId[7]);
                        const obj = { guild_id, load_id: newAnalyticsLoadId, location_stack: null, custom_checkout_flow: args(newAnalyticsLoadId[4]).getCustomCheckoutFlowForAnalytics() };
                        const items = [...closure_0];
                        obj.location_stack = items;
                        obj.track(constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj);
                        logger.log("Successfully opened mobile web Guild Boost Management page");
                      }, (arg0) => {
                        logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                        guild_id(newAnalyticsLoadId[8]);
                        const obj = { title: null, body: null, hideActionSheet: true };
                        const intl = args(newAnalyticsLoadId[9]).intl;
                        obj.title = intl.string(args(newAnalyticsLoadId[9]).t.NrBVjw);
                        const intl2 = args(newAnalyticsLoadId[9]).intl;
                        obj.body = intl2.string(args(newAnalyticsLoadId[9]).t["gD+grx"]);
                        obj.show(obj);
                      }),
              done: false
            };
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          obj = args(5434);
          obj.closeApplyBoostModal();
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
  obj = {
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
  return obj;
};