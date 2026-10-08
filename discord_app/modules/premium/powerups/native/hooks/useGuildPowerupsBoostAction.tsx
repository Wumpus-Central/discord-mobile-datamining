// === Module 16396: useGuildPowerupsBoostAction ===

// Module 16396 (useGuildPowerupsBoostAction)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import useGuildBoostPurchaseHandlerDefault from "useGuildBoostPurchaseHandler" /* 12291 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7107 */;

const require = globalThis.__r;

const require = fn;
const GuildPowerupsConstants = fn(4968);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const Constants = fn(1085);
({ AnalyticsObjects: closure_8, AnalyticsObjectTypes: closure_9 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  asyncGeneratorStep = arg4;
  const cResult = require("c").c(8);
  const tmp2 = useGuildBoostPurchaseHandlerDefault(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp2.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp2.handleMobileWebRedirectCheckout;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] === arg4) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === arg2) {
        if (cResult[3] === arg0) {
          if (cResult[4] === handleMobileWebRedirectCheckout) {
            if (cResult[5] === arg1) {
              if (cResult[6] === shouldUseMobileWebRedirectCheckout) {
                let tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
      }
    }
  }
  _require = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const guildId = tmp3;
            closure_128_0 = undefined;
            let availableGuildBoostSlots;
            if (null != tmp2) {
              let tmp15 = c2;
              if (c2 > 0) {
                if (!handleMobileWebRedirectCheckout.hasFetched) {
                  const items = [tmp2(7127).init(), ];
                  let obj2 = tmp2(7127);
                  items[1] = guildId(8000).fetchGuildBoostSlots();
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: Promise.all(items), done: false };
                  return obj8;
                }
              }
            }
            c3 = 3;
            handleMobileWebRedirectCheckout(analyticsLocations, guildId);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        tmp15 = undefined;
        let PERK;
        if (tmp2.type === constants.PERK) {
          PERK = analyticsLocations.PERK;
        }
        closure_128_0 = PERK;
        availableGuildBoostSlots = guildId(7998).getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
        if (availableGuildBoostSlots.length >= c2) {
          tmp15 = guildId(5964);
          const obj9 = { guildBoostSlots: availableGuildBoostSlots.slice(0, c2), guildId, intent: closure_128_0 };
          tmp15.openTransferModal(obj9);
        } else if (!shouldUseMobileWebRedirectCheckout) {
          const obj10 = { source: null, analyticsLocations: null, guildId: null, onPaymentSuccess: null };
          const obj11 = {};
          const merged = Object.assign(c3);
          obj11.object = constants2.BUTTON_CTA;
          obj11.objectType = constants3.BUY;
          obj10.source = obj11;
          obj10.analyticsLocations = analyticsLocations;
          obj10.guildId = guildId;
          obj10.onPaymentSuccess = function onPaymentSuccess() {
            const availableGuildBoostSlots = guildId(dependencyMap[11]).getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
            if (availableGuildBoostSlots.length >= c2) {
              const obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
              guildId(dependencyMap[12]).openTransferModal(obj2);
              const tmpResult = guildId(dependencyMap[12]);
            }
            const obj = guildId(dependencyMap[11]);
          };
          const result = guildId(7108).launchGuildBoostFlowOrAlert(obj10);
          const obj6 = guildId(7108);
        }
        const obj5 = guildId(7998);
      } catch (tmp50) {
        c3 = tmp;
        throw tmp50;
      }
    }
  });
  function t0() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = arg4;
  cResult[1] = analyticsLocations;
  cResult[2] = arg2;
  cResult[3] = arg0;
  cResult[4] = handleMobileWebRedirectCheckout;
  cResult[5] = arg1;
  cResult[6] = shouldUseMobileWebRedirectCheckout;
  cResult[7] = t0;
  tmp3 = t0;
}) : (function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  asyncGeneratorStep = arg4;
  const tmp = useGuildBoostPurchaseHandlerDefault(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp.handleMobileWebRedirectCheckout;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [arg1, arg2, arg0, arg4, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, analyticsLocations];
  return shouldUseMobileWebRedirectCheckout.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_128_0 = undefined;
            let availableGuildBoostSlots;
            let tmp15 = null;
            if (null != tmp2) {
              tmp15 = dependencyMap;
              if (dependencyMap > 0) {
                if (!handleMobileWebRedirectCheckout.hasFetched) {
                  const items = [tmp2(7127).init(), ];
                  let obj2 = tmp2(7127);
                  items[1] = tmp3(8000).fetchGuildBoostSlots();
                  dependencyMap = 1;
                  c3 = 1;
                  const obj8 = { value: Promise.all(items), done: false };
                  return obj8;
                }
              }
            }
            c3 = 3;
            closure_129_5(closure_129_6, closure_129_0);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        tmp15 = undefined;
        let PERK;
        if (closure_129_1.type === constants2.PERK) {
          PERK = constants.PERK;
        }
        closure_128_0 = PERK;
        availableGuildBoostSlots = tmp3(7998).getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
        if (availableGuildBoostSlots.length >= closure_129_2) {
          tmp15 = tmp3(5964);
          const obj9 = { guildBoostSlots: availableGuildBoostSlots.slice(0, closure_129_2), guildId: closure_129_0, intent: closure_128_0 };
          tmp15.openTransferModal(obj9);
        } else if (!closure_129_4) {
          const obj10 = { source: null, analyticsLocations: null, guildId: null, onPaymentSuccess: null };
          const obj11 = {};
          const merged = Object.assign(closure_129_3);
          obj11.object = constants3.BUTTON_CTA;
          obj11.objectType = constants4.BUY;
          obj10.source = obj11;
          obj10.analyticsLocations = closure_129_6;
          obj10.guildId = closure_129_0;
          obj10.onPaymentSuccess = function onPaymentSuccess() {
            const availableGuildBoostSlots = guildId(dependencyMap[11]).getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
            if (availableGuildBoostSlots.length >= c2) {
              const obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
              guildId(dependencyMap[12]).openTransferModal(obj2);
              const tmpResult = guildId(dependencyMap[12]);
            }
            const obj = guildId(dependencyMap[11]);
          };
          const result = tmp3(7108).launchGuildBoostFlowOrAlert(obj10);
          const obj6 = tmp3(7108);
        }
        const obj5 = tmp3(7998);
      } catch (tmp50) {
        c3 = tmp;
        throw tmp50;
      }
    }
  }), items);
});