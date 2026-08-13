// discord_app/modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
import guildPowerupsAckNotification from "guildPowerupsAckNotification";
import addVersionedDismissedContent from "addVersionedDismissedContent";
import handleGameServerInstanceCreated from "handleGameServerInstanceCreated";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getState from "getState";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { defaultAreStatesEqual } from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { DismissibleContent } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { isDiscordFrontendDevelopment } from "../../../../utils/GlobalUtils.tsx";
import { getGuildTierFromGuild } from "../../../../utils/GuildBoostingUtils.tsx";
import { addVersionedDismissedContent } from "../../../dismissible_content/DismissibleContentUtils.tsx";
import { experiment } from "../../../game_server/experiments/GameServerPricingExperiment.tsx";
import { useIsNewGamesCoachmarkEnabled } from "../../../game_server/experiments/NewGamesCoachmarkExperiment.tsx";
import { experiment } from "../../../game_server/GameServerExperiment.tsx";
import { experiment } from "../experiments/ServerThemeExperiment.tsx";
import { apexExperiment } from "../experiments/ServerThemeUserExperiment.tsx";
import { usePerksCoachmarkDCF } from "GuildPowerupsNotificationsDCF.native.tsx";
import { items } from "useBoostToUnlockFeaturedPowerup.tsx";
import { useCanPurchaseBoosts } from "useCanPurchaseBoosts.tsx";
import { useFeaturedExpiringPowerup } from "useFeaturedExpiringPowerup.tsx";
import { useGuildPowerupNewPerkMarketingVersion } from "useGuildPowerupNewPerkMarketingVersion.tsx";
import { useGuildPowerupRollbackNotificationConfig } from "useGuildPowerupRollbackNotificationConfig.tsx";
import { useGuildAppliedBoostCount } from "useGuildPowerupsBoostCount.tsx";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
const require = arg1;
function maybeGetPerkPurchaseablePopoutDCF(closure_1) {
  const _require = closure_1;
  closure_1 = arg1;
  const dependencyMap = arg2;
  let guildPowerupsAckNotification = arg3;
  guild = guild.getGuild(closure_1);
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
      if (!arr.some((arg0) => {
        if (null != closure_1.unlockedPowerups[arg0]) {
          return true;
        } else {
          let tmp3 = null != tmp2;
          if (tmp3) {
            tmp3 = addVersionedDismissedContent >= tmp2;
          }
          return tmp3;
        }
      })) {
        const mapped = arr.map((arg0) => {
          if (arg0 === outer1_0(outer1_2[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!guildPowerupsAckNotification) {
              return null;
            }
          }
          let tmp6 = null;
          if (null != closure_1.allPowerups[arg0]) {
            tmp6 = null;
            if (closure_2 >= tmp5.cost) {
              const dependencies = tmp5.dependencies;
              let tmp8 = null;
              if (dependencies.every((arg0) => null != unlockedPowerups.unlockedPowerups[arg0])) {
                let tmp10 = null;
                if (!tmpResult.isGuildPowerupRollbackEnabled(closure_0, tmp5, "maybeGetPerkPurchaseablePopoutDCF")) {
                  tmp10 = tmp5;
                }
                tmp8 = tmp10;
                tmpResult = outer1_0(outer1_2[13]);
              }
              tmp6 = tmp8;
            }
          }
          return tmp6;
        });
      }
      return [];
    }
  }).filter(_isDiscordFrontendDevelopment.isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      let tmp4Result = tmp4(11918);
      if (!tmp4Result.isContentDismissed(tmp4(1377).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, closure_1)) {
        let obj = { type: null, powerups: null, markAsDismissed: null };
        obj[0] = tmp4(11919).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE;
        obj[1] = found;
        obj[2] = function markAsDismissed(AUTO_DISMISS) {
          const result = callback(11918).markContentAsDismissed(callback(1377).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, callback, true, AUTO_DISMISS);
        };
      }
      return obj;
    }
    let tmp6;
    if (found.length > 1) {
      tmp4Result = tmp4(11918);
      if (!tmp4Result.isContentDismissed(tmp4(1377).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_1)) {
        obj = { type: null, powerups: null, markAsDismissed: null };
        obj[0] = tmp4(11919).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE;
        obj[1] = found;
        obj[2] = function markAsDismissed(AUTO_DISMISS) {
          const result = callback(11918).markContentAsDismissed(callback(1377).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, callback, true, AUTO_DISMISS);
        };
        tmp6 = obj;
      }
    }
    obj = tmp6;
  }
}
function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
  const _require = arg0;
  const importDefault = arg1;
  const dependencyMap = lastBoostCount;
  const available = useGuildAppliedBoostCount(arg0).available;
  const tmp2 = useGuildPowerupRollbackNotificationConfig(arg0, "useGuildPowerupsNotificationIndicator");
  let dismissibleContent = null;
  if (null != tmp2) {
    dismissibleContent = tmp2.dismissibleContent;
  }
  const tmp5 = null != tmp2 && !_addVersionedDismissedContent.useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  const React = tmp5;
  let obj = _addVersionedDismissedContent;
  const tmp3 = _require;
  let items = [stateFromStores];
  stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => stateFromStores.getStateForGuild(closure_0));
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
  return React.useMemo(() => {
    if (null == closure_1) {
      return { indicator: "ct", showUnread: true };
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
      const expiringGuildEntitlements = callback(lastBoostCount[21]).getExpiringGuildEntitlements(items);
      let prop;
      if (lastBoostCount != null) {
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
      if (lastBoostCount != null) {
        num2 = tmp5.lastBoostCount;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const diff = available - num2;
      if (!tmp14) {
        if (!addVersionedDismissedContent) {
          if (tmp15 !== num2) {
            if (diff > 0) {
              let obj = { indicator: null, showUnread: true };
              obj = { type: null, count: null };
              obj[0] = tmp18(tmp19[11]).GuildPowerupNotificationIndicatorType.UNREAD;
              obj[1] = diff;
              obj[0] = obj;
              let obj1 = obj;
            }
          }
          obj1 = { indicator: "ct", showUnread: true };
        }
        return obj1;
      }
      const obj2 = { indicator: null, showUnread: true };
      const obj3 = { type: null };
      obj3[0] = callback(lastBoostCount[11]).GuildPowerupNotificationIndicatorType.WARNING;
      obj2[0] = obj3;
      obj1 = obj2;
      const obj8 = callback(lastBoostCount[21]);
      tmp14 = expiringGuildEntitlements.length > 0 && prop < time;
    }
  }, items1);
}
function useGuildPowerupsChannelListPopout(c0) {
  const _require = c0;
  const importDefault = arg1;
  let tmp4 = callback(_usePerksCoachmarkDCF.usePerksCoachmarkDCF(null != arg1), 2);
  const dependencyMap = tmp5;
  const tmp6 = tmp4[0] === _DismissibleContent.DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  callback = tmp6;
  const available = useGuildAppliedBoostCount(c0).available;
  let obj = _usePerksCoachmarkDCF;
  const items = [stateFromStores1];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => {
    const guild = stateFromStores1.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(tmp31.GAME_SERVERS);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj2 = _defaultAreStatesEqual;
  const items1 = [stateFromStores];
  stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => stateFromStores.getLowestGameCostForGuild(closure_0));
  let obj3 = _defaultAreStatesEqual;
  let serverThemeEnabled = _experiment.useServerThemeEnabled(c0, "useGuildPowerupsChannelListPopout");
  let obj4 = _experiment;
  if (serverThemeEnabled) {
    serverThemeEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  }
  let tmp11 = useGuildPowerupNewPerkMarketingVersion(c0, arg1);
  let calculateAppliedBoosts = tmp11;
  let tmpResult = tmp(11925);
  let tmp12 = null != arg1;
  if (tmp12) {
    tmp12 = !tmp6;
  }
  let tmp3Result = tmp3(tmpResult.useNewPerkAvailableCoachmarkDCF(tmp12, tmp11), 2);
  let closure_9 = tmp14;
  const tmp15 = tmp3Result[0] === _DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  let closure_10 = tmp15;
  let tmp16 = items(c0);
  let closure_11 = tmp16;
  obj5 = _apexExperiment;
  tmpResult = tmp(11925);
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
  tmp3Result = tmp3(tmpResult.useBoostToUnlockCoachmarkDCF(tmp18, c0), 2);
  let closure_12 = tmp20;
  let tmp21 = tmp3Result[0] === _DismissibleContent.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  let closure_13 = tmp21;
  const tmp22 = useFeaturedExpiringPowerup(c0);
  let closure_14 = tmp22;
  tmp17 = useCanPurchaseBoosts();
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
  const tmp3Result1 = callback(_usePerksCoachmarkDCF.useExpiringPowerupCoachmarkDCF(tmp23, c0), 2);
  let closure_15 = tmp25;
  let tmp26 = tmp3Result1[0] === _DismissibleContent.DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  let closure_16 = tmp26;
  const tmpResult1 = _usePerksCoachmarkDCF;
  const gameServerEnabled = _experiment.getGameServerEnabled(c0, "useGuildPowerupsChannelListPopout");
  const tmpResult2 = _experiment;
  const isNewGamesCoachmarkEnabled = _useIsNewGamesCoachmarkEnabled.useIsNewGamesCoachmarkEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult3 = _useIsNewGamesCoachmarkEnabled;
  let tmp29 = null != arg1;
  if (tmp29) {
    tmp29 = gameServerEnabled;
  }
  if (tmp29) {
    tmp29 = isNewGamesCoachmarkEnabled;
  }
  const tmp3Result2 = callback(_usePerksCoachmarkDCF.useNewGamesCoachmarkDC(tmp29), 2);
  let closure_17 = tmp31;
  const tmp32 = tmp3Result2[0] === _DismissibleContent.DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  const ContentDismissActionType = tmp32;
  const tmpResult4 = _usePerksCoachmarkDCF;
  const isGameServerPricingEnabled = _experiment.useIsGameServerPricingEnabled(c0, "useGuildPowerupsChannelListPopout");
  const tmpResult5 = _experiment;
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
  const tmp3Result3 = callback(_usePerksCoachmarkDCF.useGameServerPricingCoachmarkDCF(tmp34), 2);
  const maybeGetPerkPurchaseablePopoutDCF = tmp36;
  const tmp37 = tmp3Result3[0] === _DismissibleContent.DismissibleContent.GAME_SERVER_PRICING_CHANGE_COACHMARK;
  const useGuildPowerupsNotificationIndicator = tmp37;
  const items2 = [c0, arg1, tmp6, tmp15, tmp32, tmp37, tmp21, tmp26, available, stateFromStores, stateFromStores1, serverThemeEnabled];
  const memo = available.useMemo(() => {
    if (null != closure_1) {
      if (!guildPowerupsAckNotification) {
        if (!tmp15) {
          if (!closure_18) {
            if (!closure_20) {
              let tmp5 = closure_13;
              if (!closure_13) {
                if (!closure_16) {
                  closure_1 = tmp;
                  const ReverseOrderedTiers = c0(tmp5[9]).ReverseOrderedTiers;
                  const found = ReverseOrderedTiers.find((arg0) => {
                    let tmp2;
                    if (null != outer1_9[arg0]) {
                      tmp2 = tmp.unlockedPowerups[tmp];
                    }
                    let tmp4 = null != tmp2;
                    if (tmp4) {
                      tmp4 = tmp2.user_id !== outer1_11;
                    }
                    return tmp4;
                  });
                  let tmp11;
                  if (null != found) {
                    tmp5 = tmp13;
                    if (null != tmp15[found]) {
                      let tmp8Result = tmp8(tmp9[10]);
                      if (!tmp8Result.isContentDismissed(tmp13, tmp7)) {
                        let tmp16;
                        if (null != tmp14[found]) {
                          tmp16 = tmp.allPowerups[tmp15];
                        }
                        if (null != tmp16) {
                          let obj = { type: null, powerup: null, markAsDismissed: null };
                          obj[0] = tmp8(tmp9[11]).GuildPowerupNotificationPopoutType.LEVEL_REACHED;
                          obj[1] = tmp16;
                          obj[2] = function markAsDismissed(AUTO_DISMISS) {
                            const result = tmp7(tmp13[10]).markContentAsDismissed(tmp13, tmp7, true, AUTO_DISMISS);
                          };
                          tmp11 = obj;
                        }
                      }
                    }
                  }
                  if (null != tmp11) {
                    return tmp11;
                  } else {
                    const tmp26 = tmp36(tmp7, tmp, available, serverThemeEnabled);
                    if (null != tmp26) {
                      return tmp26;
                    } else {
                      c0 = tmp7;
                      tmp8Result = tmp8(tmp9[16]);
                      let tmp17;
                      if (tmp8Result.getGameServerEnabled(tmp7, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                        if (!stateFromStores) {
                          if (null != tmp28) {
                            if (tmp21 >= tmp28) {
                              if (!tmp8Result1.isContentDismissed(tmp8(tmp9[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7)) {
                                obj = { type: null, markAsDismissed: null };
                                obj[0] = tmp8(tmp9[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
                                obj[1] = function markAsDismissed(AUTO_DISMISS) {
                                  const result = tmp7(tmp13[10]).markContentAsDismissed(tmp7(tmp13[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7, true, AUTO_DISMISS);
                                };
                                tmp17 = obj;
                              }
                              tmp8Result1 = tmp8(tmp9[10]);
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
  const tmpResult6 = _usePerksCoachmarkDCF;
  const tmp3Result4 = callback(_usePerksCoachmarkDCF.useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result4[0];
  let closure_23 = tmp41;
  const items3 = [arg1, tmp6, tmp4[1], memo, first, tmp3Result4[1], tmp15, tmp3Result[1], tmp11, tmp21, tmp16, tmp3Result[1], tmp26, tmp22, tmp3Result1[1], tmp32, tmp3Result2[1], tmp37, tmp3Result3[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (guildPowerupsAckNotification) {
        let obj = { type: null, markAsDismissed: null };
        obj[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE;
        obj[1] = tmp5;
        return obj;
      } else if (closure_10) {
        if (calculateAppliedBoosts === tmp21.GAME_SERVER_HOSTING) {
          obj = { type: null, markAsDismissed: null };
          obj[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE;
          obj[1] = closure_9;
          return obj;
        } else {
          c0 = tmp22[tmp30];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj1 = { powerups: null, type: null, markAsDismissed: null };
            obj1[0] = found;
            obj1[1] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE;
            obj1[2] = closure_9;
            return obj1;
          }
        }
      } else {
        if (tmp21) {
          if (null != closure_11) {
            const obj2 = { type: null, powerup: null, markAsDismissed: null };
            obj2[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK;
            obj2[1] = tmp5;
            obj2[2] = closure_12;
            let tmp13 = obj2;
          }
          return tmp13;
        }
        if (closure_16) {
          if (null != tmp22) {
            const obj3 = { type: null, featuredExpiringPowerup: null, markAsDismissed: null };
            obj3[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK;
            obj3[1] = tmp7;
            obj3[2] = closure_15;
            tmp13 = obj3;
          }
        }
        if (closure_18) {
          const obj4 = { type: null, markAsDismissed: null };
          obj4[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES;
          obj4[1] = closure_17;
          tmp13 = obj4;
        } else if (closure_20) {
          const obj5 = { type: null, markAsDismissed: null };
          obj5[0] = c0(tmp5[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_PRICING_CHANGE;
          obj5[1] = closure_19;
          tmp13 = obj5;
        } else if (first === c0(tmp5[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            obj = {};
            const merged = Object.assign(tmp14);
            obj.markAsDismissed = function markAsDismissed(arg0) {
              callback(arg0);
              closure_21.markAsDismissed(arg0);
            };
            tmp13 = obj;
          }
        }
      }
    }
  }, items3);
}
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: c9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: unpackModuleId, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = BoostedGuildTiers);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = ME);
let result = require("handleGameServerInstanceCreated").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default function useGuildPowerupsNotifications(arg0) {
  let indicator;
  let showUnread;
  const _require = arg0;
  let obj = _defaultAreStatesEqual;
  const items = [getState];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNotificationStateForGuild(closure_0), items1);
  const items2 = [calculateAppliedBoosts];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items2, () => outer1_8.getStateForGuild(closure_0));
  const obj2 = _defaultAreStatesEqual;
  const tmp3 = useGuildPowerupsNotificationIndicator;
  const tmp4 = stateFromStores1;
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(arg0, stateFromStores1, stateFromStores));
  const tmp6Result = useGuildPowerupsChannelListPopout(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    obj = { indicator: null, showUnread: null, popout: null };
    obj[0] = indicator;
    obj[1] = showUnread;
    obj[2] = tmp6Result;
    return obj;
  }
};
export const maybeGetLevelUnlockedPopoutDCF = function maybeGetLevelUnlockedPopoutDCF(closure_1) {
  const _require = closure_1;
  closure_1 = arg1;
  const ReverseOrderedTiers = _getGuildTierFromGuild.ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((arg0) => {
    let tmp2;
    if (null != outer1_9[arg0]) {
      tmp2 = tmp.unlockedPowerups[tmp];
    }
    let tmp4 = null != tmp2;
    if (tmp4) {
      tmp4 = tmp2.user_id !== outer1_11;
    }
    return tmp4;
  });
  if (null != found) {
    const dependencyMap = tmp8;
    if (null != table2[found]) {
      if (!tmpResult.isContentDismissed(tmp8, closure_1)) {
        let tmp6;
        if (null != table[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = { type: null, powerup: null, markAsDismissed: null };
          obj[0] = tmp(11919).GuildPowerupNotificationPopoutType.LEVEL_REACHED;
          obj[1] = tmp6;
          obj[2] = function markAsDismissed(AUTO_DISMISS) {
            const result = tmp7(tmp13[10]).markContentAsDismissed(tmp13, tmp7, true, AUTO_DISMISS);
          };
          return obj;
        }
      }
      tmpResult = tmp(11918);
    }
  }
};
export { maybeGetPerkPurchaseablePopoutDCF };
export const maybeGetGameServerHostingGuildEligiblePopoutDCF = function maybeGetGameServerHostingGuildEligiblePopoutDCF(c0) {
  const _require = c0;
  let obj = _experiment;
  if (obj.getGameServerEnabled(c0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!tmpResult.isContentDismissed(tmp(1377).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, c0)) {
            obj = { type: null, markAsDismissed: null };
            obj[0] = tmp(11919).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE;
            obj[1] = function markAsDismissed(AUTO_DISMISS) {
              const result = tmp7(tmp13[10]).markContentAsDismissed(tmp7(tmp13[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp7, true, AUTO_DISMISS);
            };
            return obj;
          }
          tmpResult = tmp(11918);
        }
      }
    }
  }
};
export { useGuildPowerupsNotificationIndicator };
export { useGuildPowerupsChannelListPopout };
export const useAutoDismissGuildPowerupsNotifications = function useAutoDismissGuildPowerupsNotifications(guildId) {
  let indicator;
  let showUnread;
  let _require = guildId;
  let obj = _defaultAreStatesEqual;
  let items = [calculateAppliedBoosts];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getStateForGuild(closure_0));
  _require = guildId;
  const items1 = [getState];
  const items2 = [guildId];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items1, () => outer1_7.getNotificationStateForGuild(closure_0), items2);
  const obj2 = _defaultAreStatesEqual;
  const tmp = _require;
  const items3 = [calculateAppliedBoosts];
  const stateFromStores2 = _defaultAreStatesEqual.useStateFromStores(items3, () => outer1_8.getStateForGuild(closure_0));
  const obj3 = _defaultAreStatesEqual;
  const tmp6 = useGuildPowerupsNotificationIndicator;
  const tmp7 = stateFromStores2;
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1));
  const tmp9Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores2);
  let tmp12;
  if (null !== stateFromStores2) {
    obj = { indicator: null, showUnread: null, popout: null };
    obj[0] = indicator;
    obj[1] = showUnread;
    obj[2] = tmp9Result;
    tmp12 = obj;
  }
  const dependencyMap = tmp12;
  const tmp10 = stateFromStores2;
  const tmp6Result = useGuildPowerupsNotificationIndicator(guildId, stateFromStores2, stateFromStores1);
  const tmp9 = useGuildPowerupsChannelListPopout;
  const autoDismissGuildPowerupsNewBadge = tmp(11934).useAutoDismissGuildPowerupsNewBadge(guildId);
  const items4 = [guildId];
  const effect = React.useEffect(() => {
    const result = guildId(tmp12[32]).guildPowerupsAckNotification(guildId);
  }, items4);
  const items5 = [tmp12];
  const effect1 = React.useEffect(() => {
    const items = [guildId(tmp12[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, guildId(tmp12[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    const set = new Set(items);
    let type;
    if (tmp12 != null) {
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
          popout2.markAsDismissed(outer1_18.AUTO_DISMISS);
        }
      }
    }
  }, items5);
  const items6 = [guildId, stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = guildId(tmp12[9]).ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((arg0) => {
        if (null != outer1_9[arg0]) {
          if (null != unlockedPowerups.unlockedPowerups[tmp]) {
            if (null != outer1_10[arg0]) {
              const obj = outer1_0(outer1_2[10]);
              const result = obj.markContentAsDismissed(tmp4, closure_0, false, outer1_18.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items6);
};