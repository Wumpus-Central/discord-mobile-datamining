// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx
import contextDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import useGuildBoostPurchaseHandlerDefault from "../../../../guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx";
import closure_3 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../../stores/billing/GuildBoostSlotStore.tsx";
import BoostedGuildTiers from "../../constants/GuildPowerupsConstants.tsx";
import ME from "../../../../../Constants.tsx";

const require = arg1;
({ BoostPurchaseIntent: closure_6, GuildPowerupType: error } = BoostedGuildTiers);
({ AnalyticsObjects: closure_8, AnalyticsObjectTypes: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx");

export default function useGuildPowerupsBoostAction(arg0, arg1, arg2, arg3, arg4) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  const callback = arg4;
  const tmp = useGuildBoostPurchaseHandlerDefault(arg3);
  const shouldUseMobileWebRedirectCheckout = tmp.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp.handleMobileWebRedirectCheckout;
  const analyticsLocations = contextDefault().analyticsLocations;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            let arr = tmp2;
            c0 = tmp3;
            c0 = undefined;
            arr = undefined;
            let tmp15 = null;
            if (null != arr) {
              tmp15 = dependencyMap;
              if (dependencyMap > 0) {
                if (!closure_1_5.hasFetched) {
                  obj1 = arr(7132);
                  const items = [obj1.init(), ];
                  let obj2 = PERK(4343);
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
            closure_1_5(closure_1_6, PERK);
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
        PERK = undefined;
        if (arr.type === closure_1_7.PERK) {
          PERK = closure_1_6.PERK;
        }
        let obj4 = PERK(4339);
        arr = obj4.getAvailableGuildBoostSlots(closure_1_5.boostSlots);
        if (arr.length >= dependencyMap) {
          tmp15 = PERK(5345);
          obj2 = { guildBoostSlots: null, guildId: null, intent: null };
          obj2[0] = arr.slice(0, dependencyMap);
          obj2[1] = PERK;
          obj2[2] = PERK;
          tmp15.openTransferModal(obj2);
        } else if (!closure_1_4) {
          const obj3 = { source: null, analyticsLocations: null, guildId: null, onPaymentSuccess: null };
          obj4 = {};
          const merged = Object.assign(c3);
          obj4.object = closure_1_8.BUTTON_CTA;
          obj4.objectType = closure_1_9.BUY;
          obj3[0] = obj4;
          obj3[1] = closure_1_6;
          obj3[2] = PERK;
          obj3[3] = function onPaymentSuccess() {
            let obj = PERK(table[9]);
            const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(closure_2_5.boostSlots);
            if (availableGuildBoostSlots.length >= table) {
              obj = { guildBoostSlots: null, guildId: null, intent: null };
              obj[0] = availableGuildBoostSlots.slice(0, tmp3);
              obj[1] = c0;
              obj[2] = c0;
              PERK(table[10]).openTransferModal(obj);
              const tmpResult = PERK(table[10]);
            }
          };
          const result = PERK(7114).launchGuildBoostFlowOrAlert(obj3);
          const obj6 = PERK(7114);
        }
      } catch (tmp50) {
        c3 = tmp;
        throw tmp50;
      }
    }
  }), items);
};