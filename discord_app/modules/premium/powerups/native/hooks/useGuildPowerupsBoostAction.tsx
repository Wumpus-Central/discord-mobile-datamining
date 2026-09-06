// === Module 16173: useGuildPowerupsBoostAction ===

// Module 16173 (useGuildPowerupsBoostAction)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import useGuildBoostPurchaseHandlerDefault from "useGuildBoostPurchaseHandler" /* 12538 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

const require = fn;
const GuildPowerupsConstants = fn(4450);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const Constants = fn(1074);
({ AnalyticsObjects: closure_8, AnalyticsObjectTypes: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            let availableGuildBoostSlots;
            let tmp15 = null;
            if (null != tmp2) {
              tmp15 = dependencyMap;
              if (dependencyMap > 0) {
                if (!handleMobileWebRedirectCheckout.hasFetched) {
                  let obj1 = tmp2(7419);
                  const items = [obj1.init(), ];
                  let obj2 = tmp3(4458);
                  items[1] = obj2.fetchGuildBoostSlots();
                  dependencyMap = 1;
                  c3 = 1;
                  obj1 = { value: Promise.all(items), done: false };
                  return obj1;
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
          obj = { value, done: true };
          return obj;
        }
        tmp15 = undefined;
        let PERK;
        if (closure_129_1.type === constants2.PERK) {
          PERK = constants.PERK;
        }
        closure_128_0 = PERK;
        let obj4 = tmp3(4454);
        availableGuildBoostSlots = obj4.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
        if (availableGuildBoostSlots.length >= closure_129_2) {
          tmp15 = tmp3(5434);
          obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, closure_129_2), guildId: closure_129_0, intent: closure_128_0 };
          tmp15.openTransferModal(obj2);
        } else if (!closure_129_4) {
          const obj3 = { source: null, analyticsLocations: null, guildId: null, onPaymentSuccess: null };
          obj4 = {};
          const merged = Object.assign(closure_129_3);
          obj4.object = constants3.BUTTON_CTA;
          obj4.objectType = constants4.BUY;
          obj3.source = obj4;
          obj3.analyticsLocations = closure_129_6;
          obj3.guildId = closure_129_0;
          obj3.onPaymentSuccess = function onPaymentSuccess() {
            let obj = guildId(dependencyMap[9]);
            const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
            if (availableGuildBoostSlots.length >= c2) {
              obj = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
              guildId(dependencyMap[10]).openTransferModal(obj);
              const tmpResult = guildId(dependencyMap[10]);
            }
          };
          const result = tmp3(7403).launchGuildBoostFlowOrAlert(obj3);
          const obj6 = tmp3(7403);
        }
      } catch (tmp50) {
        c3 = tmp;
        throw tmp50;
      }
    }
  }), items);
};