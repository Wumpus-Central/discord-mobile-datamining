// === Module 12840: useGuildPowerupsNotifications ===

// Module 12840 (useGuildPowerupsNotifications)
import dismissible_content from "dismissible_content" /* 2028 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4722 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4737 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12837 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12842 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 12843 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12844 */;
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig" /* 12846 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12852 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12853 */;
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts" /* 12854 */;
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup" /* 12855 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 4738 */;
import GuildStore from "GuildStore" /* 2066 */;
import GuildPowerupsNotificationStore from "GuildPowerupsNotificationStore" /* 12841 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4717 */;

const require = globalThis.__r;

require = fn;
function maybeGetPerkPurchaseablePopoutDCF(id, unlockedPowerups, available, serverThemeEnabled) {
  _require = id;
  closure_1 = unlockedPowerups;
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
        if (null != unlockedPowerups.unlockedPowerups[item]) {
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
          if (null != unlockedPowerups.allPowerups[item]) {
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
      if (!tmp4Result.isContentDismissed(tmp4(2028).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, id)) {
        let obj = {
          type: tmp4(12844).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
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
      if (!tmp4Result2.isContentDismissed(tmp4(2028).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, id)) {
        const obj2 = {
          type: tmp4(12844).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
        tmp6 = obj2;
      }
      tmp4Result2 = tmp4(12843);
    }
    obj = tmp6;
  }
  const flatMapResult = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != unlockedPowerups.unlockedPowerups[item]) {
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
          if (null != unlockedPowerups.allPowerups[item]) {
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
  });
}
function useGuildPowerupsNotificationIndicator(guildId, stateFromStores1, lastBoostCount) {
  _require = guildId;
  importDefault = stateFromStores1;
  dependencyMap = lastBoostCount;
  const available = useGuildPowerupsBoostCountDefault(guildId).available;
  const tmp2 = useGuildPowerupRollbackNotificationConfigDefault(guildId, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp2) {
    dismissibleContent = tmp2.dismissibleContent;
  }
  const tmp5 = null != tmp2 && !require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, guildId);
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
  items1[3] = stateFromStores1;
  items1[4] = tmp5;
  let entitlements;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  items1[5] = entitlements;
  return noop.useMemo(() => {
    if (null == closure_1) {
      return { indicator: "flex", showUnread: true };
    } else {
      const _Object = Object;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(tmp.unlockedPowerups), 0);
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const expiringGuildEntitlements = getExpiringGuildEntitlements.getExpiringGuildEntitlements(items);
      let prop;
      if (lastBoostCount != null) {
        prop = lastBoostCount.lastSeenWarningNotification;
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
      if (lastBoostCount != null) {
        num2 = lastBoostCount.lastBoostCount;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const diff = available - num2;
      if (!tmp14) {
        if (!closure_4) {
          if (tmp15 !== num2) {
            if (diff > 0) {
              const obj = { indicator: null, showUnread: true };
              const obj2 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
              obj.indicator = obj2;
              let obj3 = obj;
            }
          }
          obj3 = { indicator: "flex", showUnread: true };
        }
        return obj3;
      }
      const obj4 = { indicator: null, showUnread: true };
      const obj5 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING };
      obj4.indicator = obj5;
      obj3 = obj4;
      tmp14 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(id, stateFromStores1) {
  _require = id;
  importDefault = stateFromStores1;
  let tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != stateFromStores1), 2);
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
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  let obj5 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(id, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  let tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(id, stateFromStores1);
  closure_8 = tmp13;
  let obj6 = require("ServerThemeExperiment");
  let tmp14 = null != stateFromStores1;
  if (tmp14) {
    tmp14 = !tmp6;
  }
  const tmp3Result = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp14, tmp13), 2);
  const markAsDismissed2 = tmp16;
  let tmp17 = tmp3Result[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  closure_10 = tmp17;
  let tmp18 = useBoostToUnlockFeaturedPowerupDefault(id);
  closure_11 = tmp18;
  const tmpResult = require("GuildPowerupsNotificationsDCF");
  const tmp19 = useCanPurchaseBoostsDefault();
  let tmp20 = null != stateFromStores1;
  if (tmp20) {
    tmp20 = !tmp6;
  }
  if (tmp20) {
    tmp20 = !tmp17;
  }
  if (tmp20) {
    tmp20 = null != tmp18;
  }
  if (tmp20) {
    tmp20 = tmp19;
  }
  const tmp3Result6 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp20, id), 2);
  const markAsDismissed3 = tmp22;
  const tmp23 = tmp3Result6[0] === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp23;
  const tmp24 = useFeaturedExpiringPowerupDefault(id);
  closure_14 = tmp24;
  const tmpResult9 = require("GuildPowerupsNotificationsDCF");
  let tmp25 = null != stateFromStores1;
  if (tmp25) {
    tmp25 = !tmp6;
  }
  if (tmp25) {
    tmp25 = !tmp17;
  }
  if (tmp25) {
    tmp25 = !tmp23;
  }
  if (tmp25) {
    tmp25 = null != tmp24;
  }
  const tmp3Result7 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp25, id), 2);
  const markAsDismissed4 = tmp27;
  const tmp28 = tmp3Result7[0] === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  closure_16 = tmp28;
  const tmpResult10 = require("GuildPowerupsNotificationsDCF");
  const gameServerEnabled = require("GameServerExperiment").getGameServerEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult11 = require("GameServerExperiment");
  const isNewGamesCoachmarkEnabled = require("NewGamesCoachmarkExperiment").useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult12 = require("NewGamesCoachmarkExperiment");
  let tmp31 = null != stateFromStores1;
  if (tmp31) {
    tmp31 = gameServerEnabled;
  }
  if (tmp31) {
    tmp31 = isNewGamesCoachmarkEnabled;
  }
  const tmp3Result8 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp31), 2);
  const markAsDismissed5 = tmp33;
  const tmp34 = tmp3Result8[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  closure_18 = tmp34;
  const tmpResult13 = require("GuildPowerupsNotificationsDCF");
  const isGameServerPricingEnabled = require("GameServerPricingExperiment").useIsGameServerPricingEnabled(id, "useGuildPowerupsChannelListPopout");
  const tmpResult14 = require("GameServerPricingExperiment");
  let tmp36 = null != stateFromStores1;
  if (tmp36) {
    tmp36 = !stateFromStores;
  }
  if (tmp36) {
    tmp36 = gameServerEnabled;
  }
  if (tmp36) {
    tmp36 = isGameServerPricingEnabled;
  }
  const tmp3Result9 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGameServerPricingCoachmarkDCF(tmp36), 2);
  const markAsDismissed6 = tmp38;
  const tmp39 = tmp3Result9[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  closure_20 = tmp39;
  const items2 = [id, stateFromStores1, tmp6, tmp17, tmp34, tmp39, tmp23, tmp28, available, stateFromStores, stateFromStores1, serverThemeEnabled];
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
                      if (!tmp8Result.isContentDismissed(tmp13, tmp7)) {
                        let tmp16;
                        if (null != dependencyMap2[found]) {
                          tmp16 = tmp.allPowerups[tmp15];
                        }
                        if (null != tmp16) {
                          const obj = {
                            type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp16,
                            markAsDismissed(AUTO_DISMISS) {
                                                    const result = closure_0(12843).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                                                  }
                          };
                          tmp11 = obj;
                        }
                      }
                      tmp8Result = GuildDismissibleContentUtils;
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
                      let tmp17;
                      if (tmp8Result3.getGameServerEnabled(tmp7, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                        if (!stateFromStores) {
                          if (null != stateFromStores1) {
                            if (available >= stateFromStores1) {
                              if (!tmp8Result4.isContentDismissed(dismissible_content.DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7)) {
                                const obj2 = {
                                  type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                  markAsDismissed(AUTO_DISMISS) {
                                                                const result = closure_0(12843).markContentAsDismissed(closure_0(2028).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                              }
                                };
                                tmp17 = obj2;
                              }
                              tmp8Result4 = GuildDismissibleContentUtils;
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items2);
  const tmpResult15 = require("GuildPowerupsNotificationsDCF");
  const tmp3Result10 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result10[0];
  closure_23 = tmp43;
  const items3 = [stateFromStores1, tmp6, tmp4[1], memo, first, tmp3Result10[1], tmp17, tmp3Result[1], tmp13, tmp23, tmp18, tmp3Result6[1], tmp28, tmp24, tmp3Result7[1], tmp34, tmp3Result8[1], tmp39, tmp3Result9[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (closure_3) {
        const obj2 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed };
        return obj2;
      } else if (closure_10) {
        if (closure_8 === constants.GAME_SERVER_HOSTING) {
          const obj3 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: markAsDismissed2 };
          return obj3;
        } else {
          id = closure_14[tmp30];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj4 = { powerups: found, type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: markAsDismissed2 };
            return obj4;
          }
        }
      } else {
        if (constants) {
          if (null != closure_11) {
            const obj5 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
            let tmp13 = obj5;
          }
          return tmp13;
        }
        if (closure_16) {
          if (null != closure_14) {
            const obj6 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
            tmp13 = obj6;
          }
        }
        if (closure_18) {
          const obj7 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
          tmp13 = obj7;
        } else if (closure_20) {
          const obj8 = { type: id(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE, markAsDismissed: markAsDismissed6 };
          tmp13 = obj8;
        } else if (first === id(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            const obj = {};
            const merged = Object.assign(memo);
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
const GuildPowerupsConstants = fn(4718);
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = GuildPowerupsConstants);
const Constants = fn(1074);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default function useGuildPowerupsNotifications(guildId) {
  _require = guildId;
  const items = [GuildPowerupsNotificationStore];
  const items1 = [guildId];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items1);
  const obj = require("useStateFromStores");
  const items2 = [GuildPowerupsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj2 = require("useStateFromStores");
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores1, stateFromStores));
  const tmp3Result = useGuildPowerupsNotificationIndicator(guildId, stateFromStores1, stateFromStores);
  if (null !== stateFromStores1) {
    const obj3 = { indicator, showUnread, popout: tmp6Result };
    return obj3;
  }
  tmp6Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores1);
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
            type: tmp(12844).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
                      const result = closure_0(12843).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      tmpResult = tmp(12843);
    }
  }
};
export { maybeGetPerkPurchaseablePopoutDCF };
export const maybeGetGameServerHostingGuildEligiblePopoutDCF = function maybeGetGameServerHostingGuildEligiblePopoutDCF(id, arg1, arg2, arg3) {
  _require = id;
  if (obj.getGameServerEnabled(id, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!tmpResult.isContentDismissed(tmp(2028).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, id)) {
            const obj2 = {
              type: tmp(12844).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = closure_0(12843).markContentAsDismissed(closure_0(2028).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                        }
            };
            return obj2;
          }
          tmpResult = tmp(12843);
        }
      }
    }
  }
  obj = require("GameServerExperiment");
};
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  _require = guildId;
  let items = [GuildPowerupsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  closure_129_0 = guildId;
  let obj = require("useStateFromStores");
  const tmp = _require;
  const tmp2 = obj4;
  const items1 = [GuildPowerupsNotificationStore];
  const items2 = [guildId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items2);
  const obj2 = require("useStateFromStores");
  const items3 = [GuildPowerupsStore];
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items3, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj3 = require("useStateFromStores");
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1));
  const tmp6Result = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1);
  let tmp12;
  if (null !== stateFromStores2) {
    obj4 = { indicator, showUnread, popout: tmp9Result };
    tmp12 = obj4;
  }
  obj4 = tmp12;
  tmp9Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores2);
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
    if (obj4 != null) {
      const popout = obj4.popout;
      if (popout != null) {
        type = popout.type;
      }
    }
    let hasItem = null != type;
    if (hasItem) {
      hasItem = set.has(obj4.popout.type);
    }
    if (!hasItem) {
      if (obj4 != null) {
        const popout2 = obj4.popout;
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
              const obj = closure_0(obj4[10]);
              const result = obj.markContentAsDismissed(tmp4, guildId, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items6);
  const tmpResult = tmp(tmp2[31]);
};