// === Module 12033: useGuildPowerupOnActivate ===

// Module 12033 (useGuildPowerupOnActivate)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "handleGuildBoostsUpdate" /* 4338 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4333 */;

const require = arg1;
({ BoostPurchaseIntent: closure_6, GuildPowerupType: error } = BoostedGuildTiers);
let result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  const tmp = importDefault(onToggle[4])(arg0, arg1);
  onToggle = tmp.onToggle;
  ({ isLoading, error } = tmp);
  let obj = _require(onToggle[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  const tmp3 = importDefault(onToggle[6])(arg0, arg1);
  closure_4 = tmp3;
  const analyticsLocations = importDefault(onToggle[7])().analyticsLocations;
  const tmp4 = importDefault(onToggle[8])("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  obj = {
    onActivate: stateFromStores.useCallback(() => {
      if (null != stateFromStores) {
        if (null != PERK) {
          if (closure_4 >= tmp14.cost) {
            onToggle(true);
          } else {
            const diff = tmp14.cost - tmp15;
            const callback = diff;
            let availableGuildBoostSlots = callback(onToggle[9]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
            if (tmp14.type === handleMobileWebRedirectCheckout.LEVEL) {
              PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
            } else {
              PERK = shouldUseMobileWebRedirectCheckout.PERK;
            }
            let obj = callback2(tmp18[10]);
            obj.hideActionSheet(callback(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
            if (availableGuildBoostSlots.length > 0) {
              let tmp17Result = tmp17(tmp18[12]);
              obj = { guildBoostSlots: null, guildId: null, intent: null, onResult: null };
              obj[0] = availableGuildBoostSlots.slice(0, diff);
              obj[1] = tmp.id;
              obj[2] = PERK;
              obj[3] = function onResult(arg0) {
                if (arg0) {
                  dependencyMap(true);
                }
              };
              tmp17Result.openTransferModal(obj);
            } else if (shouldUseMobileWebRedirectCheckout) {
              handleMobileWebRedirectCheckout(analyticsLocations, tmp.id);
            } else {
              tmp17Result = tmp17(tmp18[13]);
              obj = { source: null, analyticsLocations: null, guildId: null, onBack: null, onPaymentSuccess: null, onPaymentDismiss: null };
              obj[0] = { page: "Guild Powerups", section: "Powerup Activation" };
              obj[1] = analyticsLocations;
              obj[2] = tmp.id;
              obj[3] = function onBack() {
                return PERK(4689).popWithKey(diff(7102).PREMIUM_KEY);
              };
              obj[4] = function onPaymentSuccess() {
                let obj = diff(onToggle[9]);
                const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
                if (availableGuildBoostSlots.length >= diff) {
                  obj = { guildBoostSlots: null, guildId: null, intent: null, onResult: null };
                  obj[0] = availableGuildBoostSlots.slice(0, PERK.cost);
                  obj[1] = closure_1_3.id;
                  obj[2] = PERK;
                  obj[3] = function onResult(arg0) {
                    if (arg0) {
                      callback(true);
                    }
                  };
                  diff(onToggle[12]).openTransferModal(obj);
                  const tmpResult = diff(onToggle[12]);
                }
              };
              obj[5] = function onPaymentDismiss() {
                return PERK(4689).popWithKey(diff(7102).PREMIUM_KEY);
              };
              const result = tmp17Result.launchGuildBoostFlowOrAlert(obj);
            }
            const obj6 = callback(onToggle[9]);
          }
        }
      }
    }, items1),
    isLoading,
    error
  };
  items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  return obj;
};