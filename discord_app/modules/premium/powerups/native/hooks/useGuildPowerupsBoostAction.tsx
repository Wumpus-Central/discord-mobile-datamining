// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx
import useGuildBoostPurchaseHandler from "useGuildBoostPurchaseHandler";
import noop from "noop";
import handleGuildBoostsUpdate from "handleGuildBoostsUpdate";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { context } from "../../../../app_analytics/useAnalyticsLocations.tsx";
import { useGuildBoostPurchaseHandler } from "../../../../guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ BoostPurchaseIntent: closure_6, GuildPowerupType: error } = BoostedGuildTiers);
({ AnalyticsObjects: metroImportAll, AnalyticsObjectTypes: c9 } = ME);
let result = require("handleGuildBoostsUpdate").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let dependencyMap = arg2;
  const callback = arg4;
  const tmp = useGuildBoostPurchaseHandler(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp.handleMobileWebRedirectCheckout;
  const analyticsLocations = context().analyticsLocations;
  let items = [arg1, arg2, arg0, arg4, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout, analyticsLocations];
  return shouldUseMobileWebRedirectCheckout.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let type = tmp2;
            let c0 = tmp3;
            c0 = undefined;
            type = undefined;
            let tmp15 = null;
            if (null != outer1_1) {
              tmp15 = dependencyMap;
              if (dependencyMap > 0) {
                if (!outer1_5.hasFetched) {
                  let obj1 = outer1_1(6924);
                  const items = [obj1.init(), ];
                  let obj2 = outer1_0(4240);
                  items[1] = obj2.fetchGuildBoostSlots();
                  dependencyMap = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              }
            }
            c3 = 3;
            outer1_5(outer1_6, outer1_0);
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        tmp15 = undefined;
        let PERK;
        if (type.type === outer1_7.PERK) {
          PERK = outer1_6.PERK;
        }
        outer1_0 = PERK;
        let obj4 = outer1_0(4236);
        outer1_1 = obj4.getAvailableGuildBoostSlots(outer1_5.boostSlots);
        if (outer1_1.length >= dependencyMap) {
          tmp15 = outer1_0(5191);
          obj2 = { guildBoostSlots: null, guildId: null, intent: null };
          obj2[0] = outer1_1.slice(0, dependencyMap);
          obj2[1] = outer1_0;
          obj2[2] = outer1_0;
          tmp15.openTransferModal(obj2);
        } else if (!outer1_4) {
          const obj3 = { source: null, analyticsLocations: null, guildId: null, onPaymentSuccess: null };
          obj4 = {};
          const merged = Object.assign(c3);
          obj4.object = outer1_8.BUTTON_CTA;
          obj4.objectType = outer1_9.BUY;
          obj3[0] = obj4;
          obj3[1] = outer1_6;
          obj3[2] = outer1_0;
          obj3[3] = function onPaymentSuccess() {
            let obj = outer2_0(table[9]);
            const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(outer2_5.boostSlots);
            if (availableGuildBoostSlots.length >= table) {
              obj = { guildBoostSlots: null, guildId: null, intent: null };
              obj[0] = availableGuildBoostSlots.slice(0, tmp3);
              obj[1] = c0;
              obj[2] = c0;
              outer2_0(table[10]).openTransferModal(obj);
              const tmpResult = outer2_0(table[10]);
            }
          };
          const result = outer1_0(6906).launchGuildBoostFlowOrAlert(obj3);
          const obj6 = outer1_0(6906);
        }
      } catch (tmp50) {
        c3 = tmp;
        throw tmp50;
      }
    }
  }), items);
};