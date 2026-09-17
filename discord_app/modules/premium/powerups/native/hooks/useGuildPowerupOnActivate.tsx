// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx
import GuildBoostingUtils from "../../../../../utils/GuildBoostingUtils.tsx";
import actions_BoostingActionCreators from "../../../../../actions/native/BoostingActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import GuildBoostSlotStore from "../../../../../stores/billing/GuildBoostSlotStore.tsx";

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4529);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = require("useGuildPowerupOnToggle")(arg0, arg1);
  onToggle = tmp.onToggle;
  ({ isLoading, error } = tmp);
  const items = [closure_4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const tmp3 = require("useAvailableBoostCountForPowerup")(arg0, arg1);
  closure_4 = tmp3;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp4 = require("useGuildBoostPurchaseHandler")("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  let obj2 = { onActivate: null, isLoading, error };
  const items1 = [
    onToggle,
    arg1,
    tmp3,
    stateFromStores,
    analyticsLocations,
    shouldUseMobileWebRedirectCheckout,
    handleMobileWebRedirectCheckout,
  ];
  obj2.onActivate = stateFromStores.useCallback(() => {
    if (null != stateFromStores) {
      if (null != PERK) {
        if (closure_4 >= tmp14.cost) {
          onToggle(true);
        } else {
          const diff = tmp14.cost - tmp15;
          closure_0 = diff;
          let availableGuildBoostSlots = closure_0(onToggle[9]).getAvailableGuildBoostSlots(
            analyticsLocations.boostSlots,
          );
          if (tmp14.type === handleMobileWebRedirectCheckout.LEVEL) {
            PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
          } else {
            PERK = shouldUseMobileWebRedirectCheckout.PERK;
          }
          const obj6 = closure_0(onToggle[9]);
          PERK(onToggle[10]).hideActionSheet(closure_0(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
          if (availableGuildBoostSlots.length > 0) {
            let obj2 = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
              guildId: stateFromStores.id,
              intent: PERK,
              onResult(arg0) {
                if (arg0) {
                  dependencyMap(true);
                }
              },
            };
            tmp17(onToggle[12]).openTransferModal(obj2);
            const tmp17Result = tmp17(onToggle[12]);
          } else if (shouldUseMobileWebRedirectCheckout) {
            handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
          } else {
            const obj3 = {
              source: { page: "Guild Powerups", section: "Powerup Activation" },
              analyticsLocations,
              guildId: stateFromStores.id,
              onBack() {
                return PERK(4843).popWithKey(diff(7526).PREMIUM_KEY);
              },
              onPaymentSuccess() {
                const availableGuildBoostSlots = GuildBoostingUtils.getAvailableGuildBoostSlots(
                  GuildBoostSlotStore.boostSlots,
                );
                if (availableGuildBoostSlots.length >= diff) {
                  const obj2 = {
                    guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                    guildId: stateFromStores.id,
                    intent: PERK,
                    onResult(arg0) {
                      if (arg0) {
                        dependencyMap(true);
                      }
                    },
                  };
                  actions_BoostingActionCreators.openTransferModal(obj2);
                  const tmpResult = actions_BoostingActionCreators;
                }
              },
              onPaymentDismiss() {
                return PERK(4843).popWithKey(diff(7526).PREMIUM_KEY);
              },
            };
            const result = tmp17(onToggle[13]).launchGuildBoostFlowOrAlert(obj3);
            const tmp17Result2 = tmp17(onToggle[13]);
          }
          let obj = PERK(onToggle[10]);
        }
      }
    }
  }, items1);
  return obj2;
}
