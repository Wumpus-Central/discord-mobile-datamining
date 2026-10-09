// === Module 12227: useGuildPowerupOnActivate ===

// Module 12227 (useGuildPowerupOnActivate)
import BoostingActionCreators from "BoostingActionCreators" /* 5966 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8006 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7112 */;

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4969);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupOnActivate(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(15);
  const tmp5 = require("useGuildPowerupOnToggle")(arg0, arg1);
  onToggle = tmp5.onToggle;
  ({ isLoading, error } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8);
  const tmp10 = require("useAvailableBoostCountForPowerup")(arg0, arg1);
  closure_4 = tmp10;
  const analyticsLocations = tmp4(tmp2[9])().analyticsLocations;
  const tmp11 = require("useGuildBoostPurchaseHandler")("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === handleMobileWebRedirectCheckout) {
          if (cResult[7] === onToggle) {
            if (cResult[8] === arg1) {
              if (cResult[9] === shouldUseMobileWebRedirectCheckout) {
                let tmp12 = cResult[10];
              }
              if (cResult[11] === error) {
                if (cResult[12] === isLoading) {
                  if (cResult[13] === tmp12) {
                    let tmp13 = cResult[14];
                  }
                  return tmp13;
                }
              }
              let obj2 = { onActivate: tmp12, isLoading, error };
              cResult[11] = error;
              cResult[12] = isLoading;
              cResult[13] = tmp12;
              cResult[14] = obj2;
              tmp13 = obj2;
            }
          }
        }
      }
    }
  }
  const fn2 = function _(arg0) {
    if (null != stateFromStores) {
      if (null != diff) {
        function activatePowerup() {

        }
        if (closure_4 >= tmp14.cost) {
          PERK(true);
        } else {
          diff = tmp14.cost - tmp15;
          let availableGuildBoostSlots = closure_0(onToggle[11]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
          if (tmp14.type === handleMobileWebRedirectCheckout.LEVEL) {
            PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
          } else {
            PERK = shouldUseMobileWebRedirectCheckout.PERK;
          }
          const obj6 = closure_0(onToggle[11]);
          diff(onToggle[12]).hideActionSheet(closure_0(onToggle[13]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
          if (availableGuildBoostSlots.length > 0) {
            let obj2 = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
              guildId: stateFromStores.id,
              intent: PERK,
              onResult(arg0) {
                        if (arg0) {
                          if (typeof activatePowerup === "function") {
                            onToggle(true);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
            };
            closure_0(onToggle[14]).openTransferModal(obj2);
            const tmp17Result = closure_0(onToggle[14]);
          } else if (shouldUseMobileWebRedirectCheckout) {
            handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
          } else {
            const obj3 = {
              source: { page: "Guild Powerups", section: "Powerup Activation" },
              analyticsLocations,
              guildId: stateFromStores.id,
              onBack() {
                        return diff(PERK[16]).popWithKey(activatePowerup(PERK[17]).PREMIUM_KEY);
                      },
              onPaymentSuccess() {
                        const availableGuildBoostSlots = GuildBoostingUtils.getAvailableGuildBoostSlots(GuildBoostSlotStore.boostSlots);
                        if (availableGuildBoostSlots.length >= diff) {
                          const obj2 = {
                            guildBoostSlots: availableGuildBoostSlots.slice(0, diff.cost),
                            guildId: stateFromStores.id,
                            intent: PERK,
                            onResult(arg0) {
                                if (arg0) {
                                  if (typeof activatePowerup === "function") {
                                    PERK(true);
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                              }
                          };
                          BoostingActionCreators.openTransferModal(obj2);
                          const tmpResult = BoostingActionCreators;
                        }
                      },
              onPaymentDismiss() {
                        return diff(PERK[16]).popWithKey(activatePowerup(PERK[17]).PREMIUM_KEY);
                      }
            };
            const result = closure_0(onToggle[15]).launchGuildBoostFlowOrAlert(obj3);
            const tmp17Result2 = closure_0(onToggle[15]);
          }
          let obj = diff(onToggle[12]);
        }
      }
    }
  };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp10;
  cResult[5] = stateFromStores;
  cResult[6] = handleMobileWebRedirectCheckout;
  cResult[7] = onToggle;
  cResult[8] = arg1;
  cResult[9] = shouldUseMobileWebRedirectCheckout;
  cResult[10] = fn2;
  tmp12 = fn2;
}) : (function useGuildPowerupOnActivate(arg0, arg1) {
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
  const items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  obj2.onActivate = stateFromStores.useCallback(() => {
    if (null != stateFromStores) {
      if (null != PERK) {
        if (closure_4 >= tmp14.cost) {
          onToggle(true);
        } else {
          const diff = tmp14.cost - tmp15;
          closure_0 = diff;
          let availableGuildBoostSlots = closure_0(onToggle[11]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
          if (tmp14.type === handleMobileWebRedirectCheckout.LEVEL) {
            PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
          } else {
            PERK = shouldUseMobileWebRedirectCheckout.PERK;
          }
          const obj6 = closure_0(onToggle[11]);
          PERK(onToggle[12]).hideActionSheet(closure_0(onToggle[13]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
          if (availableGuildBoostSlots.length > 0) {
            let obj2 = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
              guildId: stateFromStores.id,
              intent: PERK,
              onResult(arg0) {
                        if (arg0) {
                          dependencyMap(true);
                        }
                      }
            };
            tmp17(onToggle[14]).openTransferModal(obj2);
            const tmp17Result = tmp17(onToggle[14]);
          } else if (shouldUseMobileWebRedirectCheckout) {
            handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
          } else {
            const obj3 = {
              source: { page: "Guild Powerups", section: "Powerup Activation" },
              analyticsLocations,
              guildId: stateFromStores.id,
              onBack() {
                        return PERK(5941).popWithKey(diff(7123).PREMIUM_KEY);
                      },
              onPaymentSuccess() {
                        const availableGuildBoostSlots = GuildBoostingUtils.getAvailableGuildBoostSlots(GuildBoostSlotStore.boostSlots);
                        if (availableGuildBoostSlots.length >= diff) {
                          const obj2 = {
                            guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                            guildId: stateFromStores.id,
                            intent: PERK,
                            onResult(arg0) {
                                if (arg0) {
                                  dependencyMap(true);
                                }
                              }
                          };
                          BoostingActionCreators.openTransferModal(obj2);
                          const tmpResult = BoostingActionCreators;
                        }
                      },
              onPaymentDismiss() {
                        return PERK(5941).popWithKey(diff(7123).PREMIUM_KEY);
                      }
            };
            const result = tmp17(onToggle[15]).launchGuildBoostFlowOrAlert(obj3);
            const tmp17Result2 = tmp17(onToggle[15]);
          }
          let obj = PERK(onToggle[12]);
        }
      }
    }
  }, items1);
  return obj2;
});