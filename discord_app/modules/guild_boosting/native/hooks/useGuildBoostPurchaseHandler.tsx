// === Module 12197: useGuildBoostPurchaseHandler ===

// Module 12197 (useGuildBoostPurchaseHandler)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
let closure_6 = new LoggerDefault("useGuildBoostPurchaseHandler");
const ReactCompilerGating = fn(558);
const tmp2 = new LoggerDefault("useGuildBoostPurchaseHandler");
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const result = require("MobileWebRedirectCheckoutUtils").isMobileWebRedirectCheckoutEnabled();
    cResult[0] = result;
    let first = result;
    const tmpResult = require("MobileWebRedirectCheckoutUtils");
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
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
          return { value: "IconComponent", done: "IconComponent" };
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
              newAnalyticsLoadId = args(10394).getNewAnalyticsLoadId();
              const obj7 = args(6911);
              c3 = 1;
              c4 = 1;
              const obj4 = {
                value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(args, guild_id, newAnalyticsLoadId, () => {
                          const obj2 = { guild_id, load_id: newAnalyticsLoadId, location_stack: null, custom_checkout_flow: null };
                          const items = [...closure_0];
                          obj2.location_stack = items;
                          const obj = guild_id(newAnalyticsLoadId[9]);
                          obj2.custom_checkout_flow = args(newAnalyticsLoadId[6]).getCustomCheckoutFlowForAnalytics();
                          obj.track(constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj2);
                          logger.log("Successfully opened mobile web Guild Boost Management page");
                        }, (arg0) => {
                          logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                          const obj2 = { title: null, body: null, hideActionSheet: true };
                          const intl = args(newAnalyticsLoadId[11]).intl;
                          obj2.title = intl.string(args(newAnalyticsLoadId[11]).t.NrBVjw);
                          const intl2 = args(newAnalyticsLoadId[11]).intl;
                          obj2.body = intl2.string(args(newAnalyticsLoadId[11]).t["gD+grx"]);
                          guild_id(newAnalyticsLoadId[10]).show(obj2);
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
            args(5612).closeApplyBoostModal();
            c4 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp10) {
          c4 = tmp;
          throw tmp10;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    let obj2 = { shouldUseMobileWebRedirectCheckout: first, handleMobileWebRedirectCheckout: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            newAnalyticsLoadId = args(10394).getNewAnalyticsLoadId();
            const obj7 = args(6911);
            c3 = 1;
            c4 = 1;
            const obj4 = {
              value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(args, guild_id, newAnalyticsLoadId, () => {
                        const obj2 = { guild_id, load_id: newAnalyticsLoadId, location_stack: null, custom_checkout_flow: null };
                        const items = [...closure_0];
                        obj2.location_stack = items;
                        const obj = guild_id(newAnalyticsLoadId[9]);
                        obj2.custom_checkout_flow = args(newAnalyticsLoadId[6]).getCustomCheckoutFlowForAnalytics();
                        obj.track(constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj2);
                        logger.log("Successfully opened mobile web Guild Boost Management page");
                      }, (arg0) => {
                        logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                        const obj2 = { title: null, body: null, hideActionSheet: true };
                        const intl = args(newAnalyticsLoadId[11]).intl;
                        obj2.title = intl.string(args(newAnalyticsLoadId[11]).t.NrBVjw);
                        const intl2 = args(newAnalyticsLoadId[11]).intl;
                        obj2.body = intl2.string(args(newAnalyticsLoadId[11]).t["gD+grx"]);
                        guild_id(newAnalyticsLoadId[10]).show(obj2);
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
          args(5612).closeApplyBoostModal();
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
});