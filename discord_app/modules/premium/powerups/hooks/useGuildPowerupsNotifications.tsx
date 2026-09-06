// === Module 12491: useGuildPowerupsNotifications ===

// Module 12491 (useGuildPowerupsNotifications)
import dismissible_content from "dismissible_content" /* 1943 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4454 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4469 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12488 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12493 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 12494 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12495 */;
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig" /* 12497 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12503 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12504 */;
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts" /* 12505 */;
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup" /* 12506 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4470 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsNotificationStore from "GuildPowerupsNotificationStore" /* 12492 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
function maybeGetPerkPurchaseablePopoutDCF(id, arg1, available, serverThemeEnabled) {
  _require = id;
  closure_1 = arg1;
  dependencyMap = available;
  closure_3 = serverThemeEnabled;
  const guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != closure_1_1.unlockedPowerups[item]) {
          return true;
        } else {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = premiumTier >= tmp2;
          }
          return tmp3;
        }
      })) {
        const mapped = arr.map((item) => {
          if (item === closure_0(dependencyMap[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!serverThemeEnabled) {
              return null;
            }
          }
          let tmp6 = null;
          if (null != closure_1_1.allPowerups[item]) {
            tmp6 = null;
            if (available >= tmp5.cost) {
              const dependencies = tmp5.dependencies;
              let tmp8 = null;
              if (dependencies.every((item) => null != unlockedPowerups.unlockedPowerups[item])) {
                let tmp10 = null;
                if (!tmpResult.isGuildPowerupRollbackEnabled(id, tmp5, "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp5;
                }
                tmp8 = tmp10;
                tmpResult = closure_0(dependencyMap[13]);
              }
              tmp6 = tmp8;
            }
          }
          return tmp6;
        });
      }
      return [];
    }
  }).filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      let tmp4Result = tmp4(12494);
      if (!tmp4Result.isContentDismissed(tmp4(1943).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, id)) {
        let obj = {
          type: tmp4(12495).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
      }
      return obj;
    }
    let tmp6;
    if (found.length > 1) {
      tmp4Result = tmp4(12494);
      if (!tmp4Result.isContentDismissed(tmp4(1943).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, id)) {
        obj = {
          type: tmp4(12495).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
        tmp6 = obj;
      }
    }
    obj = tmp6;
  }
}
function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
  _require = arg0;
  importDefault = arg1;
  dependencyMap = lastBoostCount;
  const available = useGuildPowerupsBoostCountDefault(arg0).available;
  const tmp2 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp2) {
    dismissibleContent = tmp2.dismissibleContent;
  }
  const tmp5 = null != tmp2 && !require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  noop = tmp5;
  let obj = require("DismissibleContentUtils");
  let items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
  const items1 = [available, , , , , ];
  lastBoostCount = undefined;
  if (lastBoostCount != null) {
    lastBoostCount = lastBoostCount.lastBoostCount;
  }
  items1[1] = lastBoostCount;
  let prop;
  if (lastBoostCount != null) {
    prop = lastBoostCount.lastSeenWarningNotification;
  }
  items1[2] = prop;
  items1[3] = arg1;
  items1[4] = tmp5;
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  items1[5] = entitlements;
  return noop.useMemo(() => {
    if (null == closure_1) {
      return { indicator: "PX_16", showUnread: true };
    } else {
      const _Object = Object;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(tmp.unlockedPowerups), 0);
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      arraySpreadResult = HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(items);
      let prop;
      if (closure_2 != null) {
        prop = tmp5.lastSeenWarningNotification;
      }
      if (prop == null) {
        const _Date = Date;
        prop = Date.now();
      }
      let ends_at;
      if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
        ends_at = tmp7.ends_at;
      }
      const date = new Date(ends_at);
      let num2;
      const time = date.getTime();
      if (closure_2 != null) {
        num2 = tmp5.lastBoostCount;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const diff = available - num2;
      if (!tmp14) {
        if (!closure_4) {
          if (tmp15 !== num2) {
            if (diff > 0) {
              let obj = { indicator: null, showUnread: true };
              obj = { type: tmp18(12495).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
              obj.indicator = obj;
              let obj1 = obj;
            }
          }
          obj1 = { indicator: "PX_16", showUnread: true };
        }
        return obj1;
      }
      const obj2 = { indicator: null, showUnread: true };
      const obj3 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING };
      obj2.indicator = obj3;
      obj1 = obj2;
      tmp14 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(id, arg1) {
  _require = id;
  importDefault = arg1;
  let tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != arg1), 2);
  dependencyMap = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  _slicedToArray = tmp6;
  const available = useGuildPowerupsBoostCountDefault(id).available;
  let obj = require("GuildPowerupsNotificationsDCF");
  const items = [stateFromStores1];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants2.GAME_SERVERS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj2 = require("useStateFromStores");
  const items1 = [stateFromStores];
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => GameServerStore.getLowestGameCostForGuild(closure_0));
  let obj3 = require("useStateFromStores");
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(id, "useGuildPowerupsChannelListPopout");
  let obj4 = require("ServerThemeExperiment");
  if (serverThemeEnabled) {
    serverThemeEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  }
  let tmp11 = useGuildPowerupNewPerkMarketingVersionDefault(id, arg1);
  closure_8 = tmp11;
  let tmpResult = tmp(12501);
  let tmp12 = null != arg1;
  if (tmp12) {
    tmp12 = !tmp6;
  }
  let tmp3Result = tmp3(tmpResult.useNewPerkAvailableCoachmarkDCF(tmp12, tmp11), 2);
  const markAsDismissed2 = tmp14;
  const tmp15 = tmp3Result[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  closure_10 = tmp15;
  let tmp16 = useBoostToUnlockFeaturedPowerupDefault(id);
  closure_11 = tmp16;
  obj5 = require("ServerThemeUserExperiment");
  tmpResult = tmp(12501);
  let tmp18 = null != arg1;
  if (tmp18) {
    tmp18 = !tmp6;
  }
  if (tmp18) {
    tmp18 = !tmp15;
  }
  if (tmp18) {
    tmp18 = null != tmp16;
  }
  if (tmp18) {
    tmp18 = tmp17;
  }
  tmp3Result = tmp3(tmpResult.useBoostToUnlockCoachmarkDCF(tmp18, id), 2);
  const markAsDismissed3 = tmp20;
  let tmp21 = tmp3Result[0] === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp21;
  const tmp22 = useFeaturedExpiringPowerupDefault(id);
  closure_14 = tmp22;
  tmp17 = useCanPurchaseBoostsDefault();
  let tmp23 = null != arg1;
  if (tmp23) {
    tmp23 = !tmp6;
  }
  if (tmp23) {
    tmp23 = !tmp15;
  }
  if (tmp23) {
    tmp23 = !tmp21;
  }
  if (tmp23) {
    tmp23 = null != tmp22;
  }
  const tmp3Result1 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp23, id), 2);
  const markAsDismissed4 = tmp25;
  let tmp26 = tmp3Result1[0] === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  closure_16 = tmp26;
  const tmpResult1 = require("GuildPowerupsNotificationsDCF");
  const gameServerEnabled = require("GameServerExperiment").getGameServerEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult2 = require("GameServerExperiment");
  const isNewGamesCoachmarkEnabled = require("NewGamesCoachmarkExperiment").useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult3 = require("NewGamesCoachmarkExperiment");
  let tmp29 = null != arg1;
  if (tmp29) {
    tmp29 = gameServerEnabled;
  }
  if (tmp29) {
    tmp29 = isNewGamesCoachmarkEnabled;
  }
  const tmp3Result2 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp29), 2);
  const markAsDismissed5 = tmp31;
  const tmp32 = tmp3Result2[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  closure_18 = tmp32;
  const tmpResult4 = require("GuildPowerupsNotificationsDCF");
  const isGameServerPricingEnabled = require("GameServerPricingExperiment").useIsGameServerPricingEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult5 = require("GameServerPricingExperiment");
  let tmp34 = null != arg1;
  if (tmp34) {
    tmp34 = !stateFromStores;
  }
  if (tmp34) {
    tmp34 = gameServerEnabled;
  }
  if (tmp34) {
    tmp34 = isGameServerPricingEnabled;
  }
  const tmp3Result3 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGameServerPricingCoachmarkDCF(tmp34), 2);
  const markAsDismissed6 = tmp36;
  const tmp37 = tmp3Result3[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  closure_20 = tmp37;
  const items2 = [id, arg1, tmp6, tmp15, tmp32, tmp37, tmp21, tmp26, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = available.useMemo(() => {
    if (null != unlockedPowerups) {
      if (!closure_3) {
        if (!closure_10) {
          if (!closure_18) {
            if (!closure_20) {
              if (!closure_13) {
                if (!closure_16) {
                  unlockedPowerups = tmp;
                  const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
                  const found = ReverseOrderedTiers.find((item) => {
                    let tmp2;
                    if (null != closure_9[item]) {
                      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                    }
                    let tmp4 = null != tmp2;
                    if (tmp4) {
                      tmp4 = tmp2.user_id !== closure_11;
                    }
                    return tmp4;
                  });
                  let tmp11;
                  if (null != found) {
                    dependencyMap = tmp13;
                    if (null != dependencyMap3[found]) {
                      let tmp8Result = tmp8(12494);
                      if (!tmp8Result.isContentDismissed(tmp13, tmp7)) {
                        let tmp16;
                        if (null != dependencyMap2[found]) {
                          tmp16 = tmp.allPowerups[tmp15];
                        }
                        if (null != tmp16) {
                          let obj = {
                            type: tmp8(12495).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp16,
                            markAsDismissed(AUTO_DISMISS) {
                                                    const result = closure_0(12494).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                                                  }
                          };
                          tmp11 = obj;
                        }
                      }
                    }
                  }
                  if (null != tmp11) {
                    return tmp11;
                  } else {
                    const tmp26 = maybeGetPerkPurchaseablePopoutDCF(tmp7, tmp, available, serverThemeEnabled);
                    if (null != tmp26) {
                      return tmp26;
                    } else {
                      closure_0 = tmp7;
                      tmp8Result = tmp8(4473);
                      let tmp17;
                      if (tmp8Result.getGameServerEnabled(tmp7, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                        if (!stateFromStores) {
                          if (null != tmp28) {
                            if (tmp21 >= tmp28) {
                              if (!tmp8Result1.isContentDismissed(tmp8(1943).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7)) {
                                obj = {
                                  type: tmp8(12495).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                  markAsDismissed(AUTO_DISMISS) {
                                                                const result = closure_0(12494).markContentAsDismissed(closure_0(1943).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                              }
                                };
                                tmp17 = obj;
                              }
                              tmp8Result1 = tmp8(12494);
                            }
                          }
                        }
                      }
                      let tmp18;
                      if (null != tmp17) {
                        tmp18 = tmp17;
                      }
                      return tmp18;
                    }
                    tmp21 = available;
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items2);
  const tmpResult6 = require("GuildPowerupsNotificationsDCF");
  const tmp3Result4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result4[0];
  closure_23 = tmp41;
  const items3 = [arg1, tmp6, tmp4[1], memo, first, tmp3Result4[1], tmp15, tmp3Result[1], tmp11, tmp21, tmp16, tmp3Result[1], tmp26, tmp22, tmp3Result1[1], tmp32, tmp3Result2[1], tmp37, tmp3Result3[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (closure_3) {
        let obj = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed };
        return obj;
      } else if (closure_10) {
        if (closure_8 === constants.GAME_SERVER_HOSTING) {
          obj = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: markAsDismissed2 };
          return obj;
        } else {
          id = closure_14[tmp30];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj1 = { powerups: found, type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: markAsDismissed2 };
            return obj1;
          }
        }
      } else {
        if (constants) {
          if (null != closure_11) {
            const obj2 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
            let tmp13 = obj2;
          }
          return tmp13;
        }
        if (closure_16) {
          if (null != closure_14) {
            const obj3 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
            tmp13 = obj3;
          }
        }
        if (closure_18) {
          const obj4 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
          tmp13 = obj4;
        } else if (closure_20) {
          const obj5 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: markAsDismissed6 };
          tmp13 = obj5;
        } else if (first === id(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            obj = {};
            const merged = Object.assign(tmp14);
            obj.markAsDismissed = function markAsDismissed(arg0) {
              closure_1_23(arg0);
              memo.markAsDismissed(arg0);
            };
            tmp13 = obj;
          }
        }
      }
    }
  }, items3);
}
const GuildPowerupsConstants = fn(4450);
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = GuildPowerupsConstants);
const Constants = fn(1074);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default function useGuildPowerupsNotifications(arg0) {
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [GuildPowerupsNotificationStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items1);
  const items2 = [GuildPowerupsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj2 = require("useStateFromStores");
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(arg0, stateFromStores1, stateFromStores));
  const tmp6Result = useGuildPowerupsChannelListPopout(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    obj = { indicator, showUnread, popout: tmp6Result };
    return obj;
  }
};
export const maybeGetLevelUnlockedPopoutDCF = function maybeGetLevelUnlockedPopoutDCF(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const ReverseOrderedTiers = require("GuildBoostingUtils").ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((item) => {
    let tmp2;
    if (null != closure_9[item]) {
      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      tmp4 = tmp2.user_id !== closure_11;
    }
    return tmp4;
  });
  if (null != found) {
    dependencyMap = tmp8;
    if (null != dependencyMap3[found]) {
      if (!tmpResult.isContentDismissed(tmp8, id)) {
        let tmp6;
        if (null != dependencyMap2[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = {
            type: tmp(12495).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
                      const result = closure_0(12494).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      tmpResult = tmp(12494);
    }
  }
};
export { maybeGetPerkPurchaseablePopoutDCF };
export const maybeGetGameServerHostingGuildEligiblePopoutDCF = function maybeGetGameServerHostingGuildEligiblePopoutDCF(id, arg1, arg2, arg3) {
  _require = id;
  let obj = require("GameServerExperiment");
  if (obj.getGameServerEnabled(id, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!tmpResult.isContentDismissed(tmp(1943).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, id)) {
            obj = {
              type: tmp(12495).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = closure_0(12494).markContentAsDismissed(closure_0(1943).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                        }
            };
            return obj;
          }
          tmpResult = tmp(12494);
        }
      }
    }
  }
};
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  _require = guildId;
  obj = require("useStateFromStores");
  let items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  closure_129_0 = guildId;
  const items1 = [GuildPowerupsNotificationStore];
  const items2 = [guildId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items2);
  const obj2 = require("useStateFromStores");
  const tmp = _require;
  const tmp2 = obj;
  const items3 = [GuildPowerupsStore];
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items3, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj3 = require("useStateFromStores");
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1));
  const tmp9Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores2);
  let tmp12;
  if (null !== stateFromStores2) {
    obj = { indicator, showUnread, popout: tmp9Result };
    tmp12 = obj;
  }
  obj = tmp12;
  const tmp6Result = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1);
  const autoDismissGuildPowerupsNewBadge = tmp(tmp2[31]).useAutoDismissGuildPowerupsNewBadge(guildId);
  const items4 = [guildId];
  const effect = noop.useEffect(() => {
    const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
  }, items4);
  const items5 = [tmp12];
  const effect1 = noop.useEffect(() => {
    const items = [GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    const set = new Set(items);
    let type;
    if (obj != null) {
      const popout = tmp.popout;
      if (popout != null) {
        type = popout.type;
      }
    }
    let hasItem = null != type;
    if (hasItem) {
      hasItem = set.has(tmp.popout.type);
    }
    if (!hasItem) {
      if (tmp != null) {
        const popout2 = tmp.popout;
        if (popout2 != null) {
          popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }
  }, items5);
  const items6 = [guildId, stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((item) => {
        if (null != dependencyMap2[item]) {
          if (null != unlockedPowerups.unlockedPowerups[tmp]) {
            if (null != dependencyMap3[item]) {
              obj = closure_0(obj[10]);
              const result = obj.markContentAsDismissed(tmp4, guildId, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items6);
};