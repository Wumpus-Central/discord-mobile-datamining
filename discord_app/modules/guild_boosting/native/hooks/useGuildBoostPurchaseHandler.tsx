// === Module 12212: useGuildBoostPurchaseHandler ===

// Module 12212 (useGuildBoostPurchaseHandler)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = new LoggerDefault("useGuildBoostPurchaseHandler");
let closure_6 = tmp2;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(6922);
    const result = tmpResult.isMobileWebRedirectCheckoutEnabled();
    cResult[0] = result;
    first = result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    _require = _asyncToGenerator(async (arg0, arg1) => {
      closure_0 = arg0;
      let closure_1 = arg1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              const obj6 = closure_0(dependencyMap[7]);
              const newAnalyticsLoadId = obj6.getNewAnalyticsLoadId();
              const obj7 = closure_0(dependencyMap[8]);
              c3 = 1;
              c4 = 1;
              const obj4 = {
                value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(closure_0, closure_1, newAnalyticsLoadId, () => {
                          let items;
                          let obj2;
                          const obj = { guild_id, load_id: newAnalyticsLoadId, location_stack: items, custom_checkout_flow: obj2.getCustomCheckoutFlowForAnalytics() };
                          items = [...closure_0];
                          const track = closure_2_1(closure_2_2[9]).track;
                          const MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE = constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
                          closure_2_1(closure_2_2[9]);
                          obj2 = closure_2_0(closure_2_2[6]);
                          track(MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj);
                          logger.log("Successfully opened mobile web Guild Boost Management page");
                        }, (arg0) => {
                          let intl;
                          let intl2;
                          logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                          const obj = { title: intl.string(closure_1_0(closure_1_2[11]).t.NrBVjw), body: intl2.string(closure_1_0(closure_1_2[11]).t["gD+grx"]), hideActionSheet: true };
                          const show = closure_1_1(closure_1_2[10]).show;
                          closure_1_1(closure_1_2[10]);
                          intl = closure_1_0(closure_1_2[11]).intl;
                          intl2 = closure_1_0(closure_1_2[11]).intl;
                          show(obj);
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
            let obj = closure_0(dependencyMap[12]);
            obj.closeApplyBoostModal();
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c4 = 3;
          throw tmp9;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    let obj2 = { shouldUseMobileWebRedirectCheckout: first, handleMobileWebRedirectCheckout: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
  _require = arg0;
  let obj = require("MobileWebRedirectCheckoutUtils");
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  const useCallback = react.useCallback;
  _require = _asyncToGenerator(async (arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            const obj6 = closure_0(dependencyMap[7]);
            const newAnalyticsLoadId = obj6.getNewAnalyticsLoadId();
            const obj7 = closure_0(dependencyMap[8]);
            c3 = 1;
            c4 = 1;
            const obj4 = {
              value: obj7.goToStandaloneGuildBoostCheckoutFromMobileApp(closure_0, closure_1, newAnalyticsLoadId, () => {
                        let items;
                        let obj2;
                        const obj = { guild_id, load_id: newAnalyticsLoadId, location_stack: items, custom_checkout_flow: obj2.getCustomCheckoutFlowForAnalytics() };
                        items = [...closure_0];
                        const track = closure_2_1(closure_2_2[9]).track;
                        const MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE = constants.MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE;
                        closure_2_1(closure_2_2[9]);
                        obj2 = closure_2_0(closure_2_2[6]);
                        track(MOBILE_OPEN_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE, obj);
                        logger.log("Successfully opened mobile web Guild Boost Management page");
                      }, (arg0) => {
                        let intl;
                        let intl2;
                        logger.error("Failed to open mobile web Guild Boost Management page, error response: ", arg0);
                        const obj = { title: intl.string(closure_1_0(closure_1_2[11]).t.NrBVjw), body: intl2.string(closure_1_0(closure_1_2[11]).t["gD+grx"]), hideActionSheet: true };
                        const show = closure_1_1(closure_1_2[10]).show;
                        closure_1_1(closure_1_2[10]);
                        intl = closure_1_0(closure_1_2[11]).intl;
                        intl2 = closure_1_0(closure_1_2[11]).intl;
                        show(obj);
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
          let obj = closure_0(dependencyMap[12]);
          obj.closeApplyBoostModal();
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c4 = 3;
        throw tmp9;
      }
    }
  });
  let items = [arg0];
  let obj2 = {
    shouldUseMobileWebRedirectCheckout: result,
    handleMobileWebRedirectCheckout: useCallback(function() {
      return closure_0(...arguments);
    }, items)
  };
  return obj2;
});
let result = size.fileFinishedImporting("modules/guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx");

export default tmp3;