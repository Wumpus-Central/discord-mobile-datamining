// === Module 12244: useGuildPowerupsNotifications ===

// Module 12244 (useGuildPowerupsNotifications)
import dismissible_content from "dismissible_content" /* 2048 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7998 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8003 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12241 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 12246 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 12247 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12248 */;
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig" /* 12250 */;
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion" /* 12256 */;
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup" /* 12257 */;
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts" /* 12258 */;
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup" /* 12259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameServerStore from "GameServerStore" /* 8004 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildPowerupsNotificationStore from "GuildPowerupsNotificationStore" /* 12245 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4967 */;

const require = globalThis.__r;

require = fn;
function maybeGetPerkPurchaseablePopoutDCF(guildId, allPowerups, available, serverThemeEnabled) {
  _require = guildId;
  closure_1 = allPowerups;
  dependencyMap = available;
  closure_3 = serverThemeEnabled;
  guild = GuildStore.getGuild(guildId);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants2.NONE;
  }
  const arr = Array.from(closure_12.values());
  const found = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != allPowerups.unlockedPowerups[item]) {
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
          if (null != allPowerups.allPowerups[item]) {
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
  }).filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      if (!tmp4Result.isContentDismissed(tmp4(2048).DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK, guildId)) {
        let obj = {
          type: tmp4(12248).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
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
      if (!tmp4Result2.isContentDismissed(tmp4(2048).DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, guildId)) {
        const obj2 = {
          type: tmp4(12248).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
                  const result = GuildDismissibleContentUtils.markContentAsDismissed(dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK, closure_0, true, AUTO_DISMISS);
                }
        };
        tmp6 = obj2;
      }
      tmp4Result2 = tmp4(12247);
    }
    obj = tmp6;
  }
  const flatMapResult = Array.from(closure_12.values()).flatMap((arr) => {
    if (arr.length > 0) {
      if (!arr.some((item) => {
        if (null != allPowerups.unlockedPowerups[item]) {
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
          if (null != allPowerups.allPowerups[item]) {
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
const GuildPowerupsConstants = fn(4968);
({ BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_9, BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10, GUILD_POWERUP_MIGRATION_USER_ID: closure_11, GUILD_POWERUP_NEW_PERK_GROUPS: closure_12, GuildPowerupNewPerkMarketingVersion: map1, NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14, POWERUPS_INCLUDED_IN_LEVEL: closure_15 } = GuildPowerupsConstants);
const Constants = fn(1085);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsNotificationIndicator(arg0, unlockedPowerups, lastSeenWarningNotification) {
  _require = arg0;
  let WARNING = dependencyMap;
  const cResult = require("c").c(8);
  const available = useGuildPowerupsBoostCountDefault(arg0).available;
  const tmp3 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
  const obj = require("c");
  let dismissibleContent = null;
  if (null != tmp3) {
    dismissibleContent = tmp3.dismissibleContent;
  }
  const isSingleUseGuildDismissibleContentDismissed = require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameServerStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return GameServerStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = require("DismissibleContentUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp8);
  if (null != unlockedPowerups) {
    const _Object = Object;
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups.unlockedPowerups), 0);
    let entitlements;
    if (stateFromStores != null) {
      entitlements = stateFromStores.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
    const expiringGuildEntitlements = tmp(12246).getExpiringGuildEntitlements(items1);
    let prop;
    if (lastSeenWarningNotification != null) {
      prop = lastSeenWarningNotification.lastSeenWarningNotification;
    }
    if (prop == null) {
      const _Date = Date;
      prop = Date.now();
    }
    let ends_at;
    if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
      ends_at = tmp18.ends_at;
    }
    const date = new Date(ends_at);
    let num8;
    const time = date.getTime();
    if (lastSeenWarningNotification != null) {
      num8 = lastSeenWarningNotification.lastBoostCount;
    }
    if (num8 == null) {
      num8 = 0;
    }
    const diff = available - num8;
    if (expiringGuildEntitlements.length <= 0) {
      if (available !== num8) {
        if (diff > 0) {
          if (cResult[5] !== diff) {
            const obj3 = { indicator: null, showUnread: true };
            const obj4 = { type: tmp(12248).GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
            obj3.indicator = obj4;
            cResult[5] = diff;
            cResult[6] = obj3;
            let tmp27 = obj3;
          } else {
            tmp27 = cResult[6];
          }
          let tmp10 = tmp27;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { indicator: "Reflect", showUnread: true };
        cResult[7] = obj5;
        let tmp26 = obj5;
      } else {
        tmp26 = cResult[7];
      }
      tmp10 = tmp26;
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { indicator: null, showUnread: true };
      const obj7 = { type: null };
      WARNING = tmp(12248).GuildPowerupNotificationIndicatorType.WARNING;
      obj7.type = WARNING;
      obj6.indicator = obj7;
      cResult[4] = obj6;
    }
    const tmpResult2 = tmp(12246);
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { indicator: "Reflect", showUnread: true };
      cResult[3] = obj8;
      tmp10 = obj8;
    } else {
      tmp10 = cResult[3];
    }
  }
  return tmp10;
}) : (function useGuildPowerupsNotificationIndicator(arg0, arg1, lastBoostCount) {
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
      return { indicator: "Reflect", showUnread: true };
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
          obj3 = { indicator: "Reflect", showUnread: true };
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
});
let closure_20 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsChannelListPopout(guildId, allPowerups) {
  _require = guildId;
  let PERKS_AVAILABLE = dependencyMap;
  const cResult = require("c").c(45);
  const obj = require("c");
  const obj2 = require("GuildPowerupsNotificationsDCF");
  [tmp5, tmp6] = require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != allPowerups);
  const available = useGuildPowerupsBoostCountDefault(guildId).available;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      guild = GuildStore.getGuild(closure_0);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(constants3.GAME_SERVERS);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != allPowerups), 2);
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameServerStore];
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function w() {
      return GameServerStore.getLowestGameCostForGuild(closure_0);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp12, tmp14);
  const tmpResult14 = require("useStateFromStores");
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const tmpResult15 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  const tmpResult16 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(guildId, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const tmp19 = tmp5 === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  const tmp20 = useGuildPowerupNewPerkMarketingVersionDefault(guildId, allPowerups);
  const tmpResult17 = require("ServerThemeExperiment");
  let tmp21 = null != allPowerups;
  if (tmp21) {
    tmp21 = !tmp19;
  }
  const tmpResult18 = require("GuildPowerupsNotificationsDCF");
  [tmp23, tmp24] = require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp21, tmp20);
  const tmp25 = useBoostToUnlockFeaturedPowerupDefault(guildId);
  const tmp3Result = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp21, tmp20), 2);
  const tmp26 = useCanPurchaseBoostsDefault();
  let tmp27 = null != allPowerups;
  if (tmp27) {
    tmp27 = !tmp19;
  }
  const tmp28 = tmp23 === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  if (tmp27) {
    tmp27 = !tmp28;
  }
  if (tmp27) {
    tmp27 = null != tmp25;
  }
  if (tmp27) {
    tmp27 = tmp26;
  }
  const tmpResult19 = require("GuildPowerupsNotificationsDCF");
  [tmp30, tmp31] = require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp27, guildId);
  const tmp32 = useFeaturedExpiringPowerupDefault(guildId);
  const tmp3Result5 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp27, guildId), 2);
  let tmp33 = null != allPowerups;
  if (tmp33) {
    tmp33 = !tmp19;
  }
  if (tmp33) {
    tmp33 = !tmp28;
  }
  const tmp34 = tmp30 === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  if (tmp33) {
    tmp33 = !tmp34;
  }
  if (tmp33) {
    tmp33 = null != tmp32;
  }
  const tmpResult20 = require("GuildPowerupsNotificationsDCF");
  [tmp36, tmp37] = require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp33, guildId);
  if (cResult[6] !== guildId) {
    const gameServerEnabled = tmp(4986).getGameServerEnabled(guildId, "useGuildPowerupsChannelListPopout");
    cResult[6] = guildId;
    cResult[7] = gameServerEnabled;
    let tmp38 = gameServerEnabled;
    const tmpResult21 = tmp(4986);
  } else {
    tmp38 = cResult[7];
  }
  const tmp3Result6 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp33, guildId), 2);
  let tmp40 = null != allPowerups;
  if (tmp40) {
    tmp40 = tmp38;
  }
  const tmp41 = tmp36 === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  const tmpResult22 = require("GuildPowerupsNotificationsDCF");
  [tmp43, tmp44] = require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp40);
  const tmp45 = tmp43 === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  let tmp46;
  if (null != allPowerups) {
    if (!tmp19) {
      if (!tmp28) {
        if (!tmp45) {
          if (!tmp34) {
            if (!tmp41) {
              if (cResult[8] === guildId) {
                if (cResult[9] === allPowerups) {
                  let tmp47 = cResult[10];
                }
                tmp46 = tmp47;
                if (null == tmp47) {
                  if (cResult[11] === available) {
                    if (cResult[12] === guildId) {
                      if (cResult[13] === serverThemeEnabled) {
                        if (cResult[14] === allPowerups) {
                          let tmp55 = cResult[15];
                        }
                        tmp46 = tmp55;
                        if (null == tmp55) {
                          if (cResult[16] === available) {
                            if (cResult[17] === guildId) {
                              if (cResult[18] === stateFromStores) {
                                if (cResult[19] === stateFromStores1) {
                                  let tmp62 = cResult[20];
                                }
                                let tmp64;
                                if (null != tmp62) {
                                  tmp64 = tmp62;
                                }
                                tmp46 = tmp64;
                              }
                            }
                          }
                          closure_130_0 = guildId;
                          let tmp63;
                          if (tmpResult23.getGameServerEnabled(guildId, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
                            if (!stateFromStores) {
                              if (null != stateFromStores1) {
                                if (available >= stateFromStores1) {
                                  if (!tmpResult24.isContentDismissed(tmp(2048).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId)) {
                                    const obj3 = {
                                      type: tmp(12248).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                      markAsDismissed(AUTO_DISMISS) {
                                                                          const result = closure_0(12247).markContentAsDismissed(closure_0(2048).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                                        }
                                    };
                                    tmp63 = obj3;
                                  }
                                  tmpResult24 = tmp(12247);
                                }
                              }
                            }
                          }
                          cResult[16] = available;
                          cResult[17] = guildId;
                          cResult[18] = stateFromStores;
                          cResult[19] = stateFromStores1;
                          cResult[20] = tmp63;
                          tmp62 = tmp63;
                          tmpResult23 = tmp(4986);
                        }
                      }
                    }
                  }
                  const tmp61 = maybeGetPerkPurchaseablePopoutDCF(guildId, allPowerups, available, serverThemeEnabled);
                  cResult[11] = available;
                  cResult[12] = guildId;
                  cResult[13] = serverThemeEnabled;
                  cResult[14] = allPowerups;
                  cResult[15] = tmp61;
                  tmp55 = tmp61;
                }
              }
              closure_129_0 = guildId;
              closure_129_1 = allPowerups;
              const ReverseOrderedTiers = tmp(7998).ReverseOrderedTiers;
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
              let tmp49;
              if (null != found) {
                closure_129_2 = tmp51;
                if (null != dependencyMap3[found]) {
                  if (!tmpResult25.isContentDismissed(tmp51, guildId)) {
                    let tmp54;
                    if (null != dependencyMap2[found]) {
                      tmp54 = allPowerups.allPowerups[tmp53];
                    }
                    if (null != tmp54) {
                      const obj4 = {
                        type: tmp(12248).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                        powerup: tmp54,
                        markAsDismissed(AUTO_DISMISS) {
                                              const result = closure_0(12247).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                                            }
                      };
                      tmp49 = obj4;
                    }
                  }
                  tmpResult25 = tmp(12247);
                }
              }
              cResult[8] = guildId;
              cResult[9] = allPowerups;
              cResult[10] = tmp49;
              tmp47 = tmp49;
            }
          }
        }
      }
    }
  }
  importDefault = tmp46;
  const tmp3Result7 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp40), 2);
  const tmpResult26 = require("GuildPowerupsNotificationsDCF");
  const tmp67 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != tmp46), 2)[1];
  dependencyMap = tmp67;
  let tmp68;
  if (null != allPowerups) {
    if (tmp19) {
      if (cResult[21] !== tmp6) {
        const obj5 = { type: null, markAsDismissed: null };
        PERKS_AVAILABLE = tmp(12248).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE;
        obj5.type = PERKS_AVAILABLE;
        obj5.markAsDismissed = tmp6;
        cResult[21] = tmp6;
        cResult[22] = obj5;
      }
    } else if (tmp28) {
      if (tmp20 === constants.GAME_SERVER_HOSTING) {
        if (cResult[23] !== tmp24) {
          const obj6 = { type: tmp(12248).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: tmp24 };
          cResult[23] = tmp24;
          cResult[24] = obj6;
          let tmp80 = obj6;
        } else {
          tmp80 = cResult[24];
        }
        tmp68 = tmp80;
      } else {
        _slicedToArray = tmp84;
        if (cResult[25] === dependencyMap2[tmp20]) {
          if (cResult[26] === allPowerups.allPowerups) {
            let arr4 = cResult[27];
          }
          if (0 !== arr4.length) {
            if (cResult[28] === tmp24) {
              if (cResult[29] === arr4) {
                let tmp79 = cResult[30];
              }
              tmp68 = tmp79;
            }
            const obj7 = { powerups: arr4, type: tmp(12248).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: tmp24 };
            cResult[28] = tmp24;
            cResult[29] = arr4;
            cResult[30] = obj7;
            tmp79 = obj7;
          }
        }
        const _Object = Object;
        const values = Object.values(allPowerups.allPowerups);
        const found1 = values.filter((skuId) => set.has(skuId.skuId));
        cResult[25] = dependencyMap2[tmp20];
        cResult[26] = allPowerups.allPowerups;
        cResult[27] = found1;
        arr4 = found1;
      }
    } else {
      if (tmp34) {
        if (null != tmp25) {
          if (cResult[31] === tmp25) {
            if (cResult[32] === tmp31) {
              let tmp76 = cResult[33];
            }
            tmp68 = tmp76;
          }
          const obj8 = { type: tmp(12248).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp25, markAsDismissed: tmp31 };
          cResult[31] = tmp25;
          cResult[32] = tmp31;
          cResult[33] = obj8;
          tmp76 = obj8;
        }
      }
      if (tmp41) {
        if (null != tmp32) {
          if (cResult[34] === tmp32) {
            if (cResult[35] === tmp37) {
              let tmp75 = cResult[36];
            }
            tmp68 = tmp75;
          }
          const obj9 = { type: tmp(12248).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp32, markAsDismissed: tmp37 };
          cResult[34] = tmp32;
          cResult[35] = tmp37;
          cResult[36] = obj9;
          tmp75 = obj9;
        }
      }
      if (tmp45) {
        if (cResult[37] !== tmp44) {
          const obj10 = { type: tmp(12248).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: tmp44 };
          cResult[37] = tmp44;
          cResult[38] = obj10;
          let tmp74 = obj10;
        } else {
          tmp74 = cResult[38];
        }
        tmp68 = tmp74;
      } else if (tmp66 === tmp(2048).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
        if (null != tmp46) {
          if (cResult[39] === tmp67) {
            if (cResult[40] === tmp46) {
              let tmp69 = cResult[41];
            }
            if (cResult[42] === tmp46) {
              if (cResult[43] === tmp69) {
                let tmp70 = cResult[44];
              }
              tmp68 = tmp70;
            }
            const obj11 = {};
            const merged = Object.assign(tmp46);
            obj11.markAsDismissed = tmp69;
            cResult[42] = tmp46;
            cResult[43] = tmp69;
            cResult[44] = obj11;
            tmp70 = obj11;
          }
          function ve(arg0) {
            closure_2(arg0);
            closure_1.markAsDismissed(arg0);
          }
          cResult[39] = tmp67;
          cResult[40] = tmp46;
          cResult[41] = ve;
          tmp69 = ve;
        }
      }
    }
  }
  return tmp68;
}) : (function useGuildPowerupsChannelListPopout(guildId, arg1) {
  _require = guildId;
  importDefault = arg1;
  let tmp4 = _slicedToArray(require("GuildPowerupsNotificationsDCF").usePerksCoachmarkDCF(null != arg1), 2);
  dependencyMap = tmp5;
  const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
  _slicedToArray = tmp6;
  const available = useGuildPowerupsBoostCountDefault(guildId).available;
  let obj = require("GuildPowerupsNotificationsDCF");
  const items = [stateFromStores1];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants3.GAME_SERVERS);
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
  let serverThemeEnabled = require("ServerThemeExperiment").useServerThemeEnabled(guildId, "useGuildPowerupsChannelListPopout");
  let obj4 = require("ServerThemeExperiment");
  const serverThemeUserEnabled = require("ServerThemeUserExperiment").useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
  let obj5 = require("ServerThemeUserExperiment");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(guildId, "useGuildPowerupsChannelListPopout");
  if (serverThemeEnabled) {
    serverThemeEnabled = serverThemeUserEnabled;
  }
  if (serverThemeEnabled) {
    serverThemeEnabled = !serverThemeRollbackEnabled;
  }
  const tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(guildId, arg1);
  closure_8 = tmp13;
  let obj6 = require("ServerThemeExperiment");
  let tmp14 = null != arg1;
  if (tmp14) {
    tmp14 = !tmp6;
  }
  const tmp3Result = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewPerkAvailableCoachmarkDCF(tmp14, tmp13), 2);
  const markAsDismissed2 = tmp16;
  let tmp17 = tmp3Result[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
  closure_10 = tmp17;
  const tmp18 = useBoostToUnlockFeaturedPowerupDefault(guildId);
  closure_11 = tmp18;
  const tmpResult = require("GuildPowerupsNotificationsDCF");
  const tmp19 = useCanPurchaseBoostsDefault();
  let tmp20 = null != arg1;
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
  const tmp3Result5 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useBoostToUnlockCoachmarkDCF(tmp20, guildId), 2);
  const markAsDismissed3 = tmp22;
  const tmp23 = tmp3Result5[0] === require("dismissible_content").DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
  constants = tmp23;
  const tmp24 = useFeaturedExpiringPowerupDefault(guildId);
  closure_14 = tmp24;
  const tmpResult6 = require("GuildPowerupsNotificationsDCF");
  let tmp25 = null != arg1;
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
  const tmp3Result6 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useExpiringPowerupCoachmarkDCF(tmp25, guildId), 2);
  const markAsDismissed4 = tmp27;
  const tmp28 = tmp3Result6[0] === require("dismissible_content").DismissibleContent.EXPIRING_POWERUP_COACHMARK;
  closure_16 = tmp28;
  const tmpResult7 = require("GuildPowerupsNotificationsDCF");
  const gameServerEnabled = require("GameServerExperiment").getGameServerEnabled(guildId, "useGuildPowerupsChannelListPopout");
  const tmpResult8 = require("GameServerExperiment");
  let tmp30 = null != arg1;
  if (tmp30) {
    tmp30 = gameServerEnabled;
  }
  const tmp3Result7 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useNewGamesCoachmarkDC(tmp30), 2);
  const markAsDismissed5 = tmp32;
  const tmp33 = tmp3Result7[0] === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
  closure_18 = tmp33;
  const items2 = [guildId, arg1, tmp6, tmp17, tmp33, tmp23, tmp28, available, stateFromStores, stateFromStores1, serverThemeEnabled];
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
                                                const result = closure_0(12247).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                                              }
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
                            if (!tmp7Result4.isContentDismissed(dismissible_content.DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, tmp6)) {
                              const obj2 = {
                                type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                markAsDismissed(AUTO_DISMISS) {
                                                            const result = closure_0(12247).markContentAsDismissed(closure_0(2048).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                                                          }
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
  const tmp3Result8 = _slicedToArray(require("GuildPowerupsNotificationsDCF").useGuildPowerupNotificationDCF(null != memo), 2);
  const first = tmp3Result8[0];
  closure_21 = tmp37;
  const items3 = [arg1, tmp6, tmp4[1], memo, first, tmp3Result8[1], tmp17, tmp3Result[1], tmp13, tmp23, tmp18, tmp3Result5[1], tmp28, tmp24, tmp3Result6[1], tmp33, tmp3Result7[1]];
  return available.useMemo(() => {
    if (null != closure_1) {
      if (closure_3) {
        const obj2 = { type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE, markAsDismissed };
        return obj2;
      } else if (closure_10) {
        if (closure_8 === constants.GAME_SERVER_HOSTING) {
          const obj3 = { type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE, markAsDismissed: markAsDismissed2 };
          return obj3;
        } else {
          guildId = closure_14[tmp26];
          const _Object = Object;
          const values = Object.values(tmp.allPowerups);
          const found = values.filter((skuId) => set.has(skuId.skuId));
          if (0 !== found.length) {
            const obj4 = { powerups: found, type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE, markAsDismissed: markAsDismissed2 };
            return obj4;
          }
        }
      } else {
        if (constants) {
          if (null != closure_11) {
            const obj5 = { type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, powerup: tmp5, markAsDismissed: markAsDismissed3 };
            let tmp12 = obj5;
          }
          return tmp12;
        }
        if (closure_16) {
          if (null != closure_14) {
            const obj6 = { type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK, featuredExpiringPowerup: tmp7, markAsDismissed: markAsDismissed4 };
            tmp12 = obj6;
          }
        }
        if (closure_18) {
          const obj7 = { type: guildId(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES, markAsDismissed: markAsDismissed5 };
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
});
let closure_21 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupsNotifications(arg0) {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsNotificationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildPowerupsStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
    cResult[5] = arg0;
    cResult[6] = E;
  } else {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, E);
  if (stateFromStores1 == null) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmpResult2 = require("useStateFromStores");
  ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
  if (stateFromStores1 == null) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
  }
  const tmp15Result = closure_21(arg0, stateFromStores1);
  if (null !== stateFromStores1) {
    class E {
      constructor() {
        return closure_8.getStateForGuild(closure_0);
      }
    }
    if (cResult[7] === indicator) {
      class E {
        constructor() {
          return closure_8.getStateForGuild(closure_0);
        }
      }
    }
    const obj2 = { indicator, showUnread, popout: tmp15Result };
    cResult[7] = indicator;
    cResult[8] = tmp15Result;
    cResult[9] = showUnread;
    cResult[10] = obj2;
  }
  const tmp13Result = closure_20(arg0, stateFromStores1, stateFromStores);
}) : (function useGuildPowerupsNotifications(arg0) {
  _require = arg0;
  const items = [GuildPowerupsNotificationStore];
  const items1 = [arg0];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0), items1);
  const obj = require("useStateFromStores");
  const items2 = [GuildPowerupsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const obj2 = require("useStateFromStores");
  ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
  const tmp3Result = closure_20(arg0, stateFromStores1, stateFromStores);
  if (null !== stateFromStores1) {
    const obj3 = { indicator, showUnread, popout: tmp6Result };
    return obj3;
  }
  tmp6Result = closure_21(arg0, stateFromStores1);
});
let closure_22 = tmp6;
ReactCompilerGating = fn(558);
function maybeGetLevelUnlockedPopoutDCF(guildId, arg1) {
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
            type: tmp(12248).GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
                      const result = closure_0(12247).markContentAsDismissed(dependencyMap, closure_0, true, AUTO_DISMISS);
                    }
          };
          return obj;
        }
      }
      tmpResult = tmp(12247);
    }
  }
}
function maybeGetGameServerHostingGuildEligiblePopoutDCF(guildId, arg1, arg2, arg3) {
  _require = guildId;
  if (obj.getGameServerEnabled(guildId, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    if (!arg1) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          if (!tmpResult.isContentDismissed(tmp(2048).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, guildId)) {
            const obj2 = {
              type: tmp(12248).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                          const result = closure_0(12247).markContentAsDismissed(closure_0(2048).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK, closure_0, true, AUTO_DISMISS);
                        }
            };
            return obj2;
          }
          tmpResult = tmp(12247);
        }
      }
    }
  }
  obj = require("GameServerExperiment");
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default tmp6;
export { maybeGetLevelUnlockedPopoutDCF };
export { maybeGetPerkPurchaseablePopoutDCF };
export { maybeGetGameServerHostingGuildEligiblePopoutDCF };
export const useGuildPowerupsNotificationIndicator = tmp4;
export const useGuildPowerupsChannelListPopout = tmp5;
export const useAutoDismissGuildPowerupsNotifications = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoDismissGuildPowerupsNotifications(arg0) {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildPowerupsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  const tmp8 = closure_22(arg0);
  dependencyMap = tmp8;
  const tmpResult = require("useStateFromStores");
  const autoDismissGuildPowerupsNewBadge = require("useGuildPowerupsNewBadge").useAutoDismissGuildPowerupsNewBadge(arg0);
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
      const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp11 = items1;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  if (cResult[6] !== tmp8) {
    class G {
      constructor() {
        items = [, ];
        items[0] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK;
        items[1] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK;
        set = new Set(items);
        tmp = closure_2;
        type = undefined;
        if (closure_2 != null) {
          popout = tmp.popout;
          if (popout != null) {
            type = popout.type;
          }
        }
        hasItem = null != type;
        if (hasItem) {
          tmp4 = set;
          hasItem = set.has(tmp.popout.type);
        }
        if (!hasItem) {
          if (tmp != null) {
            popout2 = tmp.popout;
            if (popout2 != null) {
              tmp5 = ContentDismissActionType;
              markAsDismissedResult = popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
            }
          }
        }
        return;
      }
    }
    const items2 = [tmp8];
    cResult[6] = tmp8;
    cResult[7] = G;
    cResult[8] = items2;
    let tmp14 = items2;
  } else {
    class G {
      constructor() {
        items = [, ];
        items[0] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK;
        items[1] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK;
        set = new Set(items);
        tmp = closure_2;
        type = undefined;
        if (closure_2 != null) {
          popout = tmp.popout;
          if (popout != null) {
            type = popout.type;
          }
        }
        hasItem = null != type;
        if (hasItem) {
          tmp4 = set;
          hasItem = set.has(tmp.popout.type);
        }
        if (!hasItem) {
          if (tmp != null) {
            popout2 = tmp.popout;
            if (popout2 != null) {
              tmp5 = ContentDismissActionType;
              markAsDismissedResult = popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
            }
          }
        }
        return;
      }
    }
    tmp14 = cResult[8];
  }
  const effect1 = noop.useEffect(G, tmp14);
  if (cResult[9] === arg0) {
    class G {
      constructor() {
        items = [, ];
        items[0] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK;
        items[1] = closure_0(closure_2[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK;
        set = new Set(items);
        tmp = closure_2;
        type = undefined;
        if (closure_2 != null) {
          popout = tmp.popout;
          if (popout != null) {
            type = popout.type;
          }
        }
        hasItem = null != type;
        if (hasItem) {
          tmp4 = set;
          hasItem = set.has(tmp.popout.type);
        }
        if (!hasItem) {
          if (tmp != null) {
            popout2 = tmp.popout;
            if (popout2 != null) {
              tmp5 = ContentDismissActionType;
              markAsDismissedResult = popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
            }
          }
        }
        return;
      }
    }
    const effect2 = noop.useEffect(C, items3);
  }
  class C {
    constructor() {
      if (null != closure_1) {
        tmp = closure_0;
        tmp2 = closure_2;
        ReverseOrderedTiers = closure_0(closure_2[9]).ReverseOrderedTiers;
        item = ReverseOrderedTiers.forEach((item) => {
          if (null != dependencyMap2[item]) {
            if (null != unlockedPowerups.unlockedPowerups[tmp]) {
              if (null != dependencyMap3[item]) {
                const obj = closure_0(closure_2[10]);
                const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
              }
            }
          }
        });
      }
      return;
    }
  }
  items3 = [arg0, stateFromStores];
  cResult[9] = arg0;
  cResult[10] = stateFromStores;
  cResult[11] = C;
  cResult[12] = items3;
  const tmpResult2 = require("useGuildPowerupsNewBadge");
}) : (function useAutoDismissGuildPowerupsNotifications(arg0) {
  _require = arg0;
  let items = [GuildPowerupsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = closure_22(arg0);
  dependencyMap = tmp2;
  let obj = require("useStateFromStores");
  const autoDismissGuildPowerupsNewBadge = require("useGuildPowerupsNewBadge").useAutoDismissGuildPowerupsNewBadge(arg0);
  const items1 = [arg0];
  const effect = noop.useEffect(() => {
    const result = GuildPowerupsActionCreators.guildPowerupsAckNotification(closure_0);
  }, items1);
  const items2 = [tmp2];
  const effect1 = noop.useEffect(() => {
    const items = [GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK, GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK];
    const set = new Set(items);
    let type;
    if (closure_2 != null) {
      const popout = closure_2.popout;
      if (popout != null) {
        type = popout.type;
      }
    }
    let hasItem = null != type;
    if (hasItem) {
      hasItem = set.has(closure_2.popout.type);
    }
    if (!hasItem) {
      if (closure_2 != null) {
        const popout2 = closure_2.popout;
        if (popout2 != null) {
          popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
        }
      }
    }
  }, items2);
  const items3 = [arg0, stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
      const item = ReverseOrderedTiers.forEach((item) => {
        if (null != dependencyMap2[item]) {
          if (null != unlockedPowerups.unlockedPowerups[tmp]) {
            if (null != dependencyMap3[item]) {
              const obj = closure_0(closure_2[10]);
              const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
            }
          }
        }
      });
    }
  }, items3);
});