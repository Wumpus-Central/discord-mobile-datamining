// discord_app/modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import GuildPowerupsActionCreators from "../GuildPowerupsActionCreators.tsx";
import getExpiringGuildEntitlements from "../utils/getExpiringGuildEntitlements.tsx";
import GuildDismissibleContentUtils from "../../../guild_dismissible_content/GuildDismissibleContentUtils.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig.tsx";
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion.tsx";
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup.tsx";
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts.tsx";
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameServerStore from "../../../game_server/GameServerStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsNotificationStore from "../GuildPowerupsNotificationStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = globalThis.__r;

require = fn;
function maybeGetPerkPurchaseablePopoutDCF(guildId, unlockedPowerups, available, serverThemeEnabled) {
  _require = guildId;
  closure_1 = unlockedPowerups;
  dependencyMap = available;
  closure_3 = serverThemeEnabled;
  const guild = GuildStore.getGuild(guildId);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values())
    .flatMap((arr) => {
      if (arr.length > 0) {
        if (
          !arr.some((item) => {
            if (null != unlockedPowerups.unlockedPowerups[item]) {
              return true;
            } else {
              let tmp3 = null != tmp2;
              if (tmp3) {
                tmp3 = premiumTier >= tmp2;
              }
              return tmp3;
            }
          })
        ) {
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
                  if (!tmpResult.isGuildPowerupRollbackEnabled(guildId, tmp5, "maybeGetPerkPurchaseablePopoutDCF")) {
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
    })
    .filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      if (
        !tmp4Result.isContentDismissed(
          tmp4(2029).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
          guildId,
        )
      ) {
        let obj = {
          type: tmp4(12204).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
            const result = GuildDismissibleContentUtils.markContentAsDismissed(
              dismissible_content.DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
              closure_0,
              true,
              AUTO_DISMISS,
            );
          },
        };
      }
      return obj;
    }
    let tmp6;
    if (found.length > 1) {
      if (
        !tmp4Result2.isContentDismissed(
          tmp4(2029).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
          guildId,
        )
      ) {
        const obj2 = {
          type: tmp4(12204).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
            const result = GuildDismissibleContentUtils.markContentAsDismissed(
              dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
              closure_0,
              true,
              AUTO_DISMISS,
            );
          },
        };
        tmp6 = obj2;
      }
      tmp4Result2 = tmp4(12203);
    }
    obj = tmp6;
  }
  const flatMapResult = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (
        !arr.some((item) => {
          if (null != unlockedPowerups.unlockedPowerups[item]) {
            return true;
          } else {
            let tmp3 = null != tmp2;
            if (tmp3) {
              tmp3 = premiumTier >= tmp2;
            }
            return tmp3;
          }
        })
      ) {
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
                if (!tmpResult.isGuildPowerupRollbackEnabled(guildId, tmp5, "maybeGetPerkPurchaseablePopoutDCF")) {
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
  const tmp5 =
    null != tmp2 &&
    !require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, guildId);
  noop = tmp5;
  let obj = require("DismissibleContentUtils");
  let items = [stateFromStores];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    GameServerStore.getStateForGuild(closure_0),
  );
  const items1 = [available, , , , ,];
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
      return { indicator: "flex", showUnread: null };
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
              const obj2 = {
                type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD,
                count: diff,
              };
              obj.indicator = obj2;
              let obj3 = obj;
            }
          }
          obj3 = { indicator: "flex", showUnread: null };
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
function useGuildPowerupsChannelListPopout(guildId, stateFromStores1) {
  _require = guildId;
  importDefault = stateFromStores1;
  let tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != stateFromStores1), 2);
  dependencyMap = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  _slicedToArray = tmp6;
  const available = useGuildPowerupsBoostCountDefault(guildId).available;
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
  stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
    GameServerStore.getLowestGameCostForGuild(closure_0),
  );
  let obj3 = require("useStateFromStores");
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(
    guildId,
    "useGuildPowerupsChannelListPopout",
  );
  let obj4 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled(
    "useGuildPowerupsChannelListPopout",
  );
  let obj5 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(
    guildId,
    "useGuildPowerupsChannelListPopout",
  );
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(guildId, stateFromStores1);
  closure_8 = tmp13;
  let obj6 = require("ServerThemeExperiment");
  let tmp14 = null != stateFromStores1;
  if (tmp14) {
    tmp14 = !tmp6;
  }
  const tmp3Result = _slicedToArray(
    require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp14, tmp13),
    2,
  );
  const markAsDismissed2 = tmp16;
  let tmp17 =
    tmp3Result[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  closure_10 = tmp17;
  const tmp18 = useBoostToUnlockFeaturedPowerupDefault(guildId);
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
  const tmp3Result5 = _slicedToArray(
    require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp20, guildId),
    2,
  );
  const markAsDismissed3 = tmp22;
  const tmp23 = tmp3Result5[0] === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp23;
  const tmp24 = useFeaturedExpiringPowerupDefault(guildId);
  closure_14 = tmp24;
  const tmpResult6 = require("GuildPowerupsNotificationsDCF");
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
  const tmp3Result6 = _slicedToArray(
    require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp25, guildId),
    2,
  );
  const markAsDismissed4 = tmp27;
  const tmp28 = tmp3Result6[0] === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  closure_16 = tmp28;
  const tmpResult7 = require("GuildPowerupsNotificationsDCF");
  const gameServerEnabled = require("GameServerExperiment").getGameServerEnabled(
    guildId,
    "useGuildPowerupsChannelListPopout",
  );
  const tmpResult8 = require("GameServerExperiment");
  let tmp30 = null != stateFromStores1;
  if (tmp30) {
    tmp30 = gameServerEnabled;
  }
  const tmp3Result7 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp30), 2);
  const markAsDismissed5 = tmp32;
  const tmp33 = tmp3Result7[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  closure_18 = tmp33;
  const items2 = [
    guildId,
    stateFromStores1,
    tmp6,
    tmp17,
    tmp33,
    tmp23,
    tmp28,
    available,
    stateFromStores,
    stateFromStores1,
    serverThemeEnabled,
  ];
  const memo = available.useMemo(() => {
    if (null != unlockedPowerups) {
      if (!closure_3) {
        if (!closure_10) {
          if (!closure_18) {
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
                let tmp10;
                if (null != found) {
                  dependencyMap = tmp12;
                  if (null != dependencyMap3[found]) {
                    if (!tmp7Result.isContentDismissed(tmp12, tmp6)) {
                      let tmp15;
                      if (null != dependencyMap2[found]) {
                        tmp15 = tmp.allPowerups[tmp14];
                      }
                      if (null != tmp15) {
                        const obj = {
                          type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                          powerup: tmp15,
                          markAsDismissed(AUTO_DISMISS) {
                            const result = closure_0(12203).markContentAsDismissed(
                              dependencyMap,
                              closure_0,
                              true,
                              AUTO_DISMISS,
                            );
                          },
                        };
                        tmp10 = obj;
                      }
                    }
                    tmp7Result = GuildDismissibleContentUtils;
                  }
                }
                if (null != tmp10) {
                  return tmp10;
                } else {
                  const tmp25 = maybeGetPerkPurchaseablePopoutDCF(tmp6, tmp, available, serverThemeEnabled);
                  if (null != tmp25) {
                    return tmp25;
                  } else {
                    closure_0 = tmp6;
                    let tmp16;
                    if (tmp7Result3.getGameServerEnabled(tmp6, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                      if (!stateFromStores) {
                        if (null != stateFromStores1) {
                          if (available >= stateFromStores1) {
                            if (
                              !tmp7Result4.isContentDismissed(
                                dismissible_content.DismissibleGuildContent
                                  .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                tmp6,
                              )
                            ) {
                              const obj2 = {
                                type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType
                                  .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed(AUTO_DISMISS) {
                                  const result = closure_0(12203).markContentAsDismissed(
                                    closure_0(2029).DismissibleGuildContent
                                      .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                    closure_0,
                                    true,
                                    AUTO_DISMISS,
                                  );
                                },
                              };
                              tmp16 = obj2;
                            }
                            tmp7Result4 = GuildDismissibleContentUtils;
                          }
                        }
                      }
                    }
                    let tmp17;
                    if (null != tmp16) {
                      tmp17 = tmp16;
                    }
                    return tmp17;
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items2);
  const tmpResult9 = require("GuildPowerupsNotificationsDCF");
  const tmp3Result8 = _slicedToArray(
    require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != memo),
    2,
  );
  const first = tmp3Result8[0];
  closure_21 = tmp37;
  const items3 = [
    stateFromStores1,
    tmp6,
    tmp4[1],
    memo,
    first,
    tmp3Result8[1],
    tmp17,
    tmp3Result[1],
    tmp13,
    tmp23,
    tmp18,
    tmp3Result5[1],
    tmp28,
    tmp24,
    tmp3Result6[1],
    tmp33,
    tmp3Result7[1],
  ];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (closure_3) {
        const obj2 = {
          type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE,
          markAsDismissed,
        };
        return obj2;
      } else if (closure_10) {
        if (closure_8 === constants.GAME_SERVER_HOSTING) {
          const obj3 = {
            type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE,
            markAsDismissed: markAsDismissed2,
          };
          return obj3;
        } else {
          guildId = closure_14[tmp26];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj4 = {
              powerups: found,
              type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE,
              markAsDismissed: markAsDismissed2,
            };
            return obj4;
          }
        }
      } else {
        if (constants) {
          if (null != closure_11) {
            const obj5 = {
              type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
              powerup: tmp5,
              markAsDismissed: markAsDismissed3,
            };
            let tmp12 = obj5;
          }
          return tmp12;
        }
        if (closure_16) {
          if (null != closure_14) {
            const obj6 = {
              type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK,
              featuredExpiringPowerup: tmp7,
              markAsDismissed: markAsDismissed4,
            };
            tmp12 = obj6;
          }
        }
        if (closure_18) {
          const obj7 = {
            type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES,
            markAsDismissed: markAsDismissed5,
          };
          tmp12 = obj7;
        } else if (first === guildId(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
          if (null != memo) {
            const obj = {};
            const merged = Object.assign(memo);
            obj.markAsDismissed = function markAsDismissed(arg0) {
              closure_1_21(arg0);
              memo.markAsDismissed(arg0);
            };
            tmp12 = obj;
          }
        }
      }
    }
  }, items3);
}
const GuildPowerupsConstants = fn(4753);
({
  BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9,
  BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10,
  GUILD_POWERUP_MIGRATION_USER_ID: closure_11,
  GUILD_POWERUP_NEW_PERK_GROUPS: closure_12,
  GuildPowerupNewPerkMarketingVersion: map1,
  NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14,
  POWERUPS_INCLUDED_IN_LEVEL: closure_15,
} = GuildPowerupsConstants);
const Constants = fn(1074);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default function useGuildPowerupsNotifications(guildId) {
  _require = guildId;
  const items = [GuildPowerupsNotificationStore];
  const items1 = [guildId];
  const stateFromStores = require("useStateFromStores").useStateFromStores(
    items,
    () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0),
    items1,
  );
  const obj = require("useStateFromStores");
  const items2 = [GuildPowerupsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
  const obj2 = require("useStateFromStores");
  ({ indicator, showUnread } = useGuildPowerupsNotificationIndicator(guildId, stateFromStores1, stateFromStores));
  const tmp3Result = useGuildPowerupsNotificationIndicator(guildId, stateFromStores1, stateFromStores);
  if (null !== stateFromStores1) {
    const obj3 = { indicator, showUnread, popout: tmp6Result };
    return obj3;
  }
  tmp6Result = useGuildPowerupsChannelListPopout(guildId, stateFromStores1);
}
export const maybeGetLevelUnlockedPopoutDCF = function maybeGetLevelUnlockedPopoutDCF(guildId, arg1) {
  _require = guildId;
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
      if (!tmpResult.isContentDismissed(tmp8, guildId)) {
        let tmp6;
        if (null != dependencyMap2[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = {
            type: tmp(12204).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
              const result = closure_0(12203).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
            },
          };
          return obj;
        }
      }
      tmpResult = tmp(12203);
    }
  }
};
export { maybeGetPerkPurchaseablePopoutDCF };
export const maybeGetGameServerHostingGuildEligiblePopoutDCF = function maybeGetGameServerHostingGuildEligiblePopoutDCF(
  guildId,
  arg1,
  arg2,
  arg3,
) {
  _require = guildId;
  if (obj.getGameServerEnabled(guildId, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (
            !tmpResult.isContentDismissed(
              tmp(2029).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
              guildId,
            )
          ) {
            const obj2 = {
              type: tmp(12204).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                const result = closure_0(12203).markContentAsDismissed(
                  closure_0(2029).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                  closure_0,
                  true,
                  AUTO_DISMISS,
                );
              },
            };
            return obj2;
          }
          tmpResult = tmp(12203);
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
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
  closure_129_0 = guildId;
  let obj = require("useStateFromStores");
  const tmp = _require;
  const tmp2 = obj4;
  const items1 = [GuildPowerupsNotificationStore];
  const items2 = [guildId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(
    items1,
    () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0),
    items2,
  );
  const obj2 = require("useStateFromStores");
  const items3 = [GuildPowerupsStore];
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items3, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
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
  const autoDismissGuildPowerupsNewBadge = tmp(tmp2[29]).useAutoDismissGuildPowerupsNewBadge(guildId);
  const items4 = [guildId];
  const effect = noop.useEffect(() => {
    const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
  }, items4);
  const items5 = [tmp12];
  const effect1 = noop.useEffect(() => {
    const items = [
      GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
      GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK,
    ];
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
  const tmpResult = tmp(tmp2[29]);
};
