// === Module 12535: useGuildPowerupOnActivate ===

// Module 12535 (useGuildPowerupOnActivate)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4454 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5434 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4455 */;

require = fn;
const GuildPowerupsConstants = fn(4450);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = require("useGuildPowerupOnToggle")(arg0, arg1);
  onToggle = tmp.onToggle;
  ({ isLoading, error } = tmp);
  let obj = require("initialize");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const tmp3 = require("useAvailableBoostCountForPowerup")(arg0, arg1);
  closure_4 = tmp3;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp4 = require("useGuildBoostPurchaseHandler")("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  obj = { onActivate: null, isLoading, error };
  const items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  obj.onActivate = stateFromStores.useCallback(() => {
    if (null != stateFromStores) {
      if (null != PERK) {
        if (closure_4 >= tmp14.cost) {
          onToggle(true);
        } else {
          const diff = tmp14.cost - tmp15;
          closure_0 = diff;
          let availableGuildBoostSlots = closure_0(onToggle[9]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
          if (tmp14.type === handleMobileWebRedirectCheckout.LEVEL) {
            PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
          } else {
            PERK = shouldUseMobileWebRedirectCheckout.PERK;
          }
          let obj = PERK(onToggle[10]);
          obj.hideActionSheet(closure_0(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
          if (availableGuildBoostSlots.length > 0) {
            let tmp17Result = tmp17(onToggle[12]);
            obj = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
              guildId: stateFromStores.id,
              intent: PERK,
              onResult(arg0) {
                        if (arg0) {
                          dependencyMap(true);
                        }
                      }
            };
            tmp17Result.openTransferModal(obj);
          } else if (shouldUseMobileWebRedirectCheckout) {
            handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
          } else {
            tmp17Result = tmp17(onToggle[13]);
            obj = {
              source: { page: "Guild Powerups", section: "Powerup Activation" },
              analyticsLocations,
              guildId: stateFromStores.id,
              onBack() {
                        return PERK(4763).popWithKey(diff(7412).PREMIUM_KEY);
                      },
              onPaymentSuccess() {
                        let obj = GuildBoostingUtils;
                        const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(GuildBoostSlotStore.boostSlots);
                        if (availableGuildBoostSlots.length >= diff) {
                          obj = {
                            guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                            guildId: stateFromStores.id,
                            intent: PERK,
                            onResult(arg0) {
                                if (arg0) {
                                  dependencyMap(true);
                                }
                              }
                          };
                          actions_BoostingActionCreators.openTransferModal(obj);
                          const tmpResult = actions_BoostingActionCreators;
                        }
                      },
              onPaymentDismiss() {
                        return PERK(4763).popWithKey(diff(7412).PREMIUM_KEY);
                      }
            };
            const result = tmp17Result.launchGuildBoostFlowOrAlert(obj);
          }
          const obj6 = closure_0(onToggle[9]);
        }
      }
    }
  }, items1);
  return obj;
};