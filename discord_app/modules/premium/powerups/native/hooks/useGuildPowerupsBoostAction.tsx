// === Module 16097: useGuildPowerupsBoostAction ===

// Module 16097 (useGuildPowerupsBoostAction)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import useGuildBoostPurchaseHandlerDefault from "useGuildBoostPurchaseHandler" /* 12197 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6908 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _asyncToGenerator = _asyncToGenerator_mod;
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: metroImportDefault } = GuildPowerupsConstants);
({ AnalyticsObjects: metroImportAll, AnalyticsObjectTypes: c9 } = Constants);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  _asyncToGenerator = arg4;
  let obj = require("react");
  const cResult = obj.c(8);
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
              let tmp3;
              if (cResult[6] === shouldUseMobileWebRedirectCheckout) {
                tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
      }
    }
  }
  _require = _asyncToGenerator(async () => {
    let obj10;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let guildId;
        let PERK;
        let availableGuildBoostSlots;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            guildId = tmp2;
            PERK = undefined;
            availableGuildBoostSlots = undefined;
            if (null != availableGuildBoostSlots) {
              if (c2 > 0) {
                if (!handleMobileWebRedirectCheckout.hasFetched) {
                  let obj2 = closure_2_1(closure_2_2[9]);
                  const items = [obj2.init(), ];
                  const obj3 = guildId(closure_2_2[10]);
                  items[1] = obj3.fetchGuildBoostSlots();
                  c2 = 1;
                  c3 = 1;
                  const obj7 = { value: all(items), done: false };
                  return obj7;
                }
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        PERK = undefined;
        if (availableGuildBoostSlots.type === constants2.PERK) {
          PERK = constants.PERK;
        }
        const obj5 = guildId(closure_2_2[11]);
        availableGuildBoostSlots = obj5.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
        if (availableGuildBoostSlots.length >= c2) {
          const obj8 = { guildBoostSlots: availableGuildBoostSlots.slice(0, c2), guildId, intent: PERK };
          let openTransferModal = guildId(closure_2_2[12]).openTransferModal;
          const tmp44 = guildId(closure_2_2[12]);
          const openTransferModalResult = openTransferModal(obj8);
        } else if (shouldUseMobileWebRedirectCheckout) {
          closure_1_5(analyticsLocations, guildId);
        } else {
          const obj9 = {
            source: obj10,
            analyticsLocations,
            guildId,
            onPaymentSuccess() {
                    const obj = guildId(closure_3_2[11]);
                    const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
                    if (availableGuildBoostSlots.length >= c2) {
                      const obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
                      const openTransferModal = guildId(closure_3_2[12]).openTransferModal;
                      guildId(closure_3_2[12]);
                      openTransferModal(obj2);
                    }
                  }
          };
          obj10 = { object: constants3.BUTTON_CTA, objectType: constants4.BUY };
          const launchGuildBoostFlowOrAlert = guildId(closure_2_2[13]).launchGuildBoostFlowOrAlert;
          const tmp27 = guildId(closure_2_2[13]);
          const merged = Object.assign(c3);
          const result = launchGuildBoostFlowOrAlert(obj9);
        }
      } catch (tmp50) {
        c3 = 3;
        throw tmp50;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = arg4;
  cResult[1] = analyticsLocations;
  cResult[2] = arg2;
  cResult[3] = arg0;
  cResult[4] = handleMobileWebRedirectCheckout;
  cResult[5] = arg1;
  cResult[6] = shouldUseMobileWebRedirectCheckout;
  cResult[7] = fn;
  tmp3 = fn;
}) : ((arg0, arg1, arg2, arg3, arg4) => {
  let closure_1;
  let closure_2;
  let closure_3;
  let closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  _asyncToGenerator = arg4;
  const tmp = useGuildBoostPurchaseHandlerDefault(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp.handleMobileWebRedirectCheckout;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [arg1, arg2, arg0, arg4, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, analyticsLocations];
  return shouldUseMobileWebRedirectCheckout.useCallback(_asyncToGenerator(async () => {
    let obj10;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let PERK;
        let availableGuildBoostSlots;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            PERK = undefined;
            availableGuildBoostSlots = undefined;
            if (null != availableGuildBoostSlots) {
              if (closure_2 > 0) {
                if (!handleMobileWebRedirectCheckout.hasFetched) {
                  let obj2 = availableGuildBoostSlots(c2[9]);
                  const items = [obj2.init(), ];
                  const obj3 = tmp2(c2[10]);
                  items[1] = obj3.fetchGuildBoostSlots();
                  c2 = 1;
                  c3 = 1;
                  const obj7 = { value: all(items), done: false };
                  return obj7;
                }
              }
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        }
        PERK = undefined;
        if (closure_129_1.type === constants2.PERK) {
          PERK = constants.PERK;
        }
        const obj5 = tmp2(c2[11]);
        availableGuildBoostSlots = obj5.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
        if (availableGuildBoostSlots.length >= closure_129_2) {
          const obj8 = { guildBoostSlots: availableGuildBoostSlots.slice(0, closure_129_2), guildId: closure_129_0, intent: PERK };
          let openTransferModal = tmp2(c2[12]).openTransferModal;
          const tmp44 = tmp2(c2[12]);
          const openTransferModalResult = openTransferModal(obj8);
        } else if (closure_129_4) {
          closure_129_5(closure_129_6, closure_129_0);
        } else {
          const obj9 = {
            source: obj10,
            analyticsLocations: closure_129_6,
            guildId: closure_129_0,
            onPaymentSuccess() {
                    const obj = guildId(closure_2[11]);
                    const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
                    if (availableGuildBoostSlots.length >= c2) {
                      const obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
                      const openTransferModal = guildId(closure_2[12]).openTransferModal;
                      guildId(closure_2[12]);
                      openTransferModal(obj2);
                    }
                  }
          };
          obj10 = { object: constants3.BUTTON_CTA, objectType: constants4.BUY };
          const launchGuildBoostFlowOrAlert = tmp2(c2[13]).launchGuildBoostFlowOrAlert;
          const tmp27 = tmp2(c2[13]);
          const merged = Object.assign(closure_129_3);
          const result = launchGuildBoostFlowOrAlert(obj9);
        }
      } catch (tmp50) {
        c3 = 3;
        throw tmp50;
      }
    }
  }), items);
});
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default tmp4;