// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupsBoostAction.tsx
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import useGuildBoostPurchaseHandlerDefault from "../../../../guild_boosting/native/hooks/useGuildBoostPurchaseHandler.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildBoostSlotStore from "../../../../../stores/billing/GuildBoostSlotStore.tsx";

const require = fn;
const GuildPowerupsConstants = fn(4529);
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
  let items = [
    arg1,
    arg2,
    arg0,
    arg4,
    shouldUseMobileWebRedirectCheckout,
    handleMobileWebRedirectCheckout,
    analyticsLocations,
  ];
  return shouldUseMobileWebRedirectCheckout.useCallback(
    asyncGeneratorStep(async () => {
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
                    const items = [tmp2(7526).init()];
                    let obj2 = tmp2(7526);
                    items[1] = tmp3(4537).fetchGuildBoostSlots();
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
          availableGuildBoostSlots = tmp3(4533).getAvailableGuildBoostSlots(handleMobileWebRedirectCheckout.boostSlots);
          if (availableGuildBoostSlots.length >= closure_129_2) {
            tmp15 = tmp3(5519);
            const obj9 = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, closure_129_2),
              guildId: closure_129_0,
              intent: closure_128_0,
            };
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
              const availableGuildBoostSlots = guildId(dependencyMap[9]).getAvailableGuildBoostSlots(
                handleMobileWebRedirectCheckout.boostSlots,
              );
              if (availableGuildBoostSlots.length >= c2) {
                const obj2 = { guildBoostSlots: availableGuildBoostSlots.slice(0, tmp3), guildId, intent };
                guildId(dependencyMap[10]).openTransferModal(obj2);
                const tmpResult = guildId(dependencyMap[10]);
              }
              const obj = guildId(dependencyMap[9]);
            };
            const result = tmp3(7510).launchGuildBoostFlowOrAlert(obj10);
            const obj6 = tmp3(7510);
          }
          const obj5 = tmp3(4533);
        } catch (tmp50) {
          c3 = tmp;
          throw tmp50;
        }
      }
    }),
    items,
  );
}
