// discord_app/modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../dismissible_content/DismissibleContentConstants.tsx";
import GameServerExperiment from "../../../game_server/GameServerExperiment.tsx";
import GuildBoostingUtils from "../../../../utils/GuildBoostingUtils.tsx";
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import GuildPowerupsActionCreators from "../GuildPowerupsActionCreators.tsx";
import getExpiringGuildEntitlements2 from "../utils/getExpiringGuildEntitlements.tsx";
import GuildDismissibleContentUtils from "../../../guild_dismissible_content/GuildDismissibleContentUtils.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupRollbackNotificationConfigDefault from "useGuildPowerupRollbackNotificationConfig.tsx";
import useGuildPowerupNewPerkMarketingVersionDefault from "useGuildPowerupNewPerkMarketingVersion.tsx";
import useBoostToUnlockFeaturedPowerupDefault from "useBoostToUnlockFeaturedPowerup.tsx";
import useCanPurchaseBoostsDefault from "useCanPurchaseBoosts.tsx";
import useFeaturedExpiringPowerupDefault from "useFeaturedExpiringPowerup.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GameServerStore from "../../../game_server/GameServerStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildPowerupsNotificationStore from "../GuildPowerupsNotificationStore.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, constants, dependencyMap, importDefault, set;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let map1;
let unpackModuleId;
function maybeGetPerkPurchaseablePopoutDCF(c0, allPowerups, available, serverThemeEnabled) {
  function markAsDismissed(AUTO_DISMISS) {
    const obj = GuildDismissibleContentUtils;
    const result = obj.markContentAsDismissed(
      dismissible_content.DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
      closure_0,
      true,
      AUTO_DISMISS,
    );
  }
  _require = c0;
  let closure_1 = allPowerups;
  dependencyMap = available;
  let closure_3 = serverThemeEnabled;
  const guild = GuildStore.getGuild(c0);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants2.NONE;
  }
  const arr = Array.from(closure_12.values());
  const tmp5 = dependencyMap;
  const flatMapResult = arr.flatMap((arr) => {
    if (arr.length > 0) {
      if (
        !arr.some((item) => {
          if (null != allPowerups.unlockedPowerups[item]) {
            return true;
          } else {
            return null != tmp2 && premiumTier >= tmp2;
          }
        })
      ) {
        const mapped = arr.map((item) => {
          let unlockedPowerups;
          if (item === closure_0(closure_2[12]).GUILD_POWERUP_GUILD_THEME_SKU_ID) {
            if (!serverThemeEnabled) {
              return null;
            }
          }
          let tmp6 = null;
          if (null != allPowerups.allPowerups[item]) {
            tmp6 = null;
            if (closure_1_2 >= allPowerups.allPowerups[item].cost) {
              const dependencies = tmp5.dependencies;
              let tmp8 = null;
              if (dependencies.every((item) => null != unlockedPowerups.unlockedPowerups[item])) {
                let tmp10 = null;
                const tmpResult = closure_0(closure_2[13]);
                if (
                  !tmpResult.isGuildPowerupRollbackEnabled(
                    closure_1_0,
                    allPowerups.allPowerups[item],
                    "maybeGetPerkPurchaseablePopoutDCF",
                  )
                ) {
                  tmp10 = tmp5;
                }
                tmp8 = tmp10;
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
  const found = flatMapResult.filter(require("GlobalUtils").isNotNullish);
  if (0 !== found.length) {
    if (1 === found.length) {
      let obj;
      const tmp4Result = require("GuildDismissibleContentUtils");
      if (
        !tmp4Result.isContentDismissed(
          require("dismissible_content").DismissibleGuildContent.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
          c0,
        )
      ) {
        obj = {
          type: tmp4(12169).GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed(AUTO_DISMISS) {
            const obj = GuildDismissibleContentUtils;
            const result = obj.markContentAsDismissed(
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
      const tmp4Result2 = require("GuildDismissibleContentUtils");
      if (
        !tmp4Result2.isContentDismissed(
          require("dismissible_content").DismissibleGuildContent.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
          c0,
        )
      ) {
        tmp6 = {
          type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed,
        };
        const obj2 = {
          type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.PERKS_PURCHASABLE,
          powerups: found,
          markAsDismissed,
        };
      }
    }
    obj = tmp6;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({
  BOOSTING_TIER_TO_LEVEL_SKU_ID: c9,
  BOOSTING_TIER_TO_LEVEL_UNLOCKED_DC: c10,
  GUILD_POWERUP_MIGRATION_USER_ID: unpackModuleId,
  GUILD_POWERUP_NEW_PERK_GROUPS: closure_12,
  GuildPowerupNewPerkMarketingVersion: map1,
  NEW_PERK_MARKETING_VERSION_TO_POWERUP_SKU_ID_SET: closure_14,
  POWERUPS_INCLUDED_IN_LEVEL: closure_15,
} = GuildPowerupsConstants);
({ BoostedGuildTiers: closure_16, GuildFeatures: closure_17 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, unlockedPowerups, lastSeenWarningNotification) {
      let closure_0;
      let first;
      let obj3;
      let obj6;
      let tmp11;
      let tmp13;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(8);
      const available = useGuildPowerupsBoostCountDefault(arg0).available;
      const tmp5 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
      let dismissibleContent = null;
      const useIsSingleUseGuildDismissibleContentDismissed =
        require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed;
      require("DismissibleContentUtils");
      if (null != tmp5) {
        dismissibleContent = tmp5.dismissibleContent;
      }
      const isSingleUseGuildDismissibleContentDismissed = useIsSingleUseGuildDismissibleContentDismissed(
        dismissibleContent,
        arg0,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameServerStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          return GameServerStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[2];
      }
      const tmp2Result = require("useStateFromStores");
      const stateFromStores = tmp2Result.useStateFromStores(first, tmp11);
      if (null != unlockedPowerups) {
        let tmp30;
        unlockedPowerups = unlockedPowerups.unlockedPowerups;
        const _Object = Object;
        const getExpiringGuildEntitlements = require("getExpiringGuildEntitlements").getExpiringGuildEntitlements;
        const items1 = [];
        require("getExpiringGuildEntitlements");
        let entitlements;
        const _Object2 = Object;
        const arraySpreadResult = HermesBuiltin.arraySpread(items1, Object.values(unlockedPowerups), 0);
        if (stateFromStores != null) {
          entitlements = stateFromStores.entitlements;
        }
        if (entitlements == null) {
          entitlements = {};
        }
        HermesBuiltin.arraySpread(items1, values(entitlements), arraySpreadResult);
        const expiringGuildEntitlements = getExpiringGuildEntitlements(items1);
        let prop;
        if (lastSeenWarningNotification != null) {
          prop = lastSeenWarningNotification.lastSeenWarningNotification;
        }
        if (prop == null) {
          const _Date = Date;
          prop = Date.now();
        }
        let ends_at;
        const _Date2 = Date;
        if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
          ends_at = tmp22.ends_at;
        }
        const self = this;
        const self2 = this;
        const _Date21 = new _Date2(ends_at);
        let num8;
        const time = _Date21.getTime();
        if (lastSeenWarningNotification != null) {
          num8 = lastSeenWarningNotification.lastBoostCount;
        }
        if (num8 == null) {
          num8 = 0;
        }
        const diff = available - num8;
        if (expiringGuildEntitlements.length <= 0) {
          let tmp28;
          if (available !== num8) {
            if (diff > 0) {
              let tmp29;
              if (cResult[5] !== diff) {
                const obj2 = { indicator: obj3, showUnread: true };
                cResult[5] = diff;
                cResult[6] = obj2;
                tmp29 = obj2;
                obj3 = {
                  type: require("GuildPowerupsNotification").GuildPowerupNotificationIndicatorType.UNREAD,
                  count: diff,
                };
              } else {
                tmp29 = cResult[6];
              }
              tmp13 = tmp29;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { indicator: "Reflect", showUnread: true };
            cResult[7] = obj4;
            tmp28 = obj4;
          } else {
            tmp28 = cResult[7];
          }
          tmp13 = tmp28;
        }
        const _Symbol3 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { indicator: obj6, showUnread: true };
          cResult[4] = obj5;
          tmp30 = obj5;
          obj6 = { type: require("GuildPowerupsNotification").GuildPowerupNotificationIndicatorType.WARNING };
        } else {
          tmp30 = cResult[4];
        }
        tmp13 = tmp30;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { indicator: "Reflect", showUnread: true };
          cResult[3] = obj7;
          tmp13 = obj7;
        } else {
          tmp13 = cResult[3];
        }
      }
      return tmp13;
    }
  : (arg0, arg1, lastBoostCount) => {
      let closure_0;
      let closure_1;
      let closure_4;
      let stateFromStores;
      _require = arg0;
      importDefault = arg1;
      dependencyMap = lastBoostCount;
      const available = useGuildPowerupsBoostCountDefault(arg0).available;
      const tmp2 = useGuildPowerupRollbackNotificationConfigDefault(arg0, "useGuildPowerupsNotificationIndicator");
      let dismissibleContent = null;
      const useIsSingleUseGuildDismissibleContentDismissed =
        require("DismissibleContentUtils").useIsSingleUseGuildDismissibleContentDismissed;
      const tmp3 = _require;
      const tmp4 = require("DismissibleContentUtils");
      if (null != tmp2) {
        dismissibleContent = tmp2.dismissibleContent;
      }
      const tmp6 = null != tmp2 && !useIsSingleUseGuildDismissibleContentDismissed(dismissibleContent, arg0);
      react = tmp6;
      let items = [stateFromStores];
      const tmp3Result = tmp3(573);
      stateFromStores = tmp3Result.useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
      const items1 = [available, , , , ,];
      lastBoostCount = undefined;
      const tmp8 = react;
      const useMemo = react.useMemo;
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
      items1[4] = tmp6;
      let entitlements;
      if (stateFromStores != null) {
        entitlements = stateFromStores.entitlements;
      }
      items1[5] = entitlements;
      return useMemo(function () {
        let obj2;
        let obj5;
        if (null == closure_1) {
          return { indicator: "Reflect", showUnread: true };
        } else {
          const unlockedPowerups = tmp2.unlockedPowerups;
          const _Object = Object;
          const getExpiringGuildEntitlements = getExpiringGuildEntitlements2.getExpiringGuildEntitlements;
          const items = [];
          getExpiringGuildEntitlements2;
          let entitlements;
          const _Object2 = Object;
          const arraySpreadResult = HermesBuiltin.arraySpread(items, Object.values(unlockedPowerups), 0);
          if (stateFromStores != null) {
            entitlements = stateFromStores.entitlements;
          }
          if (entitlements == null) {
            entitlements = {};
          }
          HermesBuiltin.arraySpread(items, values(entitlements), arraySpreadResult);
          const expiringGuildEntitlements = getExpiringGuildEntitlements(items);
          let prop;
          if (lastBoostCount != null) {
            prop = lastBoostCount.lastSeenWarningNotification;
          }
          if (prop == null) {
            const _Date = Date;
            prop = Date.now();
          }
          let ends_at;
          const _Date2 = Date;
          if (expiringGuildEntitlements[expiringGuildEntitlements.length - 1] != null) {
            ends_at = tmp8.ends_at;
          }
          const self = this;
          const self2 = this;
          const _Date21 = new _Date2(ends_at);
          let num2;
          const time = _Date21.getTime();
          if (lastBoostCount != null) {
            num2 = lastBoostCount.lastBoostCount;
          }
          if (num2 == null) {
            num2 = 0;
          }
          const diff = available - num2;
          const tmp13 = expiringGuildEntitlements.length > 0 && prop < time;
          if (!tmp13) {
            let obj3;
            if (!closure_4) {
              if (tmp14 !== num2) {
                if (diff > 0) {
                  const obj = { indicator: obj2, showUnread: true };
                  obj3 = obj;
                  obj2 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD, count: diff };
                }
              }
              obj3 = { indicator: "Reflect", showUnread: true };
            }
            return obj3;
          }
          const obj4 = { indicator: obj5, showUnread: true };
          obj3 = obj4;
          obj5 = { type: GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING };
        }
      }, items1);
    };
let closure_20 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (c0, allPowerups) => {
      let closure_1;
      let closure_2;
      let first;
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp25;
      let tmp26;
      let tmp33;
      let tmp34;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp48;
      let tmp49;
      let tmp6;
      let tmp7;
      _require = c0;
      const obj = require("react");
      const cResult = obj.c(45);
      const obj2 = require("GuildPowerupsNotificationsDCF");
      [tmp6, tmp7] = obj2.usePerksCoachmarkDCF(null != allPowerups);
      _slicedToArray(obj2.usePerksCoachmarkDCF(null != allPowerups), 2);
      const GUILD_POWERUP_PERKS_COACHMARK =
        require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
      const available = useGuildPowerupsBoostCountDefault(c0).available;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== c0) {
        const fn = function p() {
          const guild = GuildStore.getGuild(closure_0);
          let flag;
          if (guild != null) {
            const features = guild.features;
            flag = features.has(constants.GAME_SERVERS);
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[1] = c0;
        cResult[2] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[2];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GameServerStore];
        cResult[3] = items1;
        tmp13 = items1;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== c0) {
        const fn2 = function v() {
          return GameServerStore.getLowestGameCostForGuild(closure_0);
        };
        cResult[4] = c0;
        cResult[5] = fn2;
        tmp15 = fn2;
      } else {
        tmp15 = cResult[5];
      }
      const tmpResult14 = require("useStateFromStores");
      const stateFromStores1 = tmpResult14.useStateFromStores(tmp13, tmp15);
      const tmpResult15 = require("ServerThemeExperiment");
      let serverThemeEnabled = tmpResult15.useServerThemeEnabled(c0, "useGuildPowerupsChannelListPopout");
      const tmpResult16 = require("ServerThemeUserExperiment");
      const serverThemeUserEnabled = tmpResult16.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
      const tmpResult17 = require("ServerThemeExperiment");
      const serverThemeRollbackEnabled = tmpResult17.useServerThemeRollbackEnabled(
        c0,
        "useGuildPowerupsChannelListPopout",
      );
      if (serverThemeEnabled) {
        serverThemeEnabled = serverThemeUserEnabled;
      }
      if (serverThemeEnabled) {
        serverThemeEnabled = !serverThemeRollbackEnabled;
      }
      const tmp21 = useGuildPowerupNewPerkMarketingVersionDefault(c0, allPowerups);
      let tmp23 = null != allPowerups;
      const useNewPerkAvailableCoachmarkDCF = tmp(12175).useNewPerkAvailableCoachmarkDCF;
      require("GuildPowerupsNotificationsDCF");
      if (tmp23) {
        tmp23 = !tmp20;
      }
      [tmp25, tmp26] = useNewPerkAvailableCoachmarkDCF(tmp23, tmp21);
      _slicedToArray(useNewPerkAvailableCoachmarkDCF(tmp23, tmp21), 2);
      const GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK =
        tmp(2036).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
      const tmp27 = useBoostToUnlockFeaturedPowerupDefault(c0);
      let tmp30 = null != allPowerups;
      const tmp28 = useCanPurchaseBoostsDefault();
      const useBoostToUnlockCoachmarkDCF = tmp(12175).useBoostToUnlockCoachmarkDCF;
      require("GuildPowerupsNotificationsDCF");
      if (tmp30) {
        tmp30 = !tmp20;
      }
      if (tmp30) {
        tmp30 = !tmp31;
      }
      if (tmp30) {
        tmp30 = null != tmp27;
      }
      if (tmp30) {
        tmp30 = tmp28;
      }
      [tmp33, tmp34] = useBoostToUnlockCoachmarkDCF(tmp30, c0);
      _slicedToArray(useBoostToUnlockCoachmarkDCF(tmp30, c0), 2);
      const BOOST_TO_UNLOCK_COACHMARK = tmp(2036).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
      const tmp35 = useFeaturedExpiringPowerupDefault(c0);
      let tmp37 = null != allPowerups;
      const useExpiringPowerupCoachmarkDCF = tmp(12175).useExpiringPowerupCoachmarkDCF;
      require("GuildPowerupsNotificationsDCF");
      if (tmp37) {
        tmp37 = !tmp20;
      }
      if (tmp37) {
        tmp37 = !tmp31;
      }
      if (tmp37) {
        tmp37 = !tmp38;
      }
      if (tmp37) {
        tmp37 = null != tmp35;
      }
      [tmp40, tmp41] = useExpiringPowerupCoachmarkDCF(tmp37, c0);
      _slicedToArray(useExpiringPowerupCoachmarkDCF(tmp37, c0), 2);
      const EXPIRING_POWERUP_COACHMARK = tmp(2036).DismissibleContent.EXPIRING_POWERUP_COACHMARK;
      if (cResult[6] !== c0) {
        const tmpResult21 = require("GameServerExperiment");
        const gameServerEnabled = tmpResult21.getGameServerEnabled(c0, "useGuildPowerupsChannelListPopout");
        cResult[6] = c0;
        cResult[7] = gameServerEnabled;
        tmp42 = gameServerEnabled;
      } else {
        tmp42 = cResult[7];
      }
      let tmp45 = null != allPowerups;
      const useNewGamesCoachmarkDC = tmp(12175).useNewGamesCoachmarkDC;
      require("GuildPowerupsNotificationsDCF");
      if (tmp45) {
        tmp45 = tmp42;
      }
      [tmp48, tmp49] = useNewGamesCoachmarkDC(tmp45);
      _slicedToArray(useNewGamesCoachmarkDC(tmp45), 2);
      const tmp50 = tmp48 === require("dismissible_content").DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
      let tmp51;
      if (null != allPowerups) {
        if (tmp6 !== GUILD_POWERUP_PERKS_COACHMARK) {
          if (tmp25 !== GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK) {
            if (!tmp50) {
              if (tmp33 !== BOOST_TO_UNLOCK_COACHMARK) {
                if (tmp40 !== EXPIRING_POWERUP_COACHMARK) {
                  if (cResult[8] === c0) {
                    let tmp52;
                    if (cResult[9] === allPowerups) {
                      tmp52 = cResult[10];
                    }
                    tmp51 = tmp52;
                    if (null == tmp52) {
                      if (cResult[11] === available) {
                        if (cResult[12] === c0) {
                          if (cResult[13] === serverThemeEnabled) {
                            let tmp60;
                            if (cResult[14] === allPowerups) {
                              tmp60 = cResult[15];
                            }
                            tmp51 = tmp60;
                            if (null == tmp60) {
                              if (cResult[16] === available) {
                                if (cResult[17] === c0) {
                                  if (cResult[18] === stateFromStores) {
                                    let tmp67;
                                    if (cResult[19] === stateFromStores1) {
                                      tmp67 = cResult[20];
                                    }
                                    let tmp69;
                                    if (null != tmp67) {
                                      tmp69 = tmp67;
                                    }
                                    tmp51 = tmp69;
                                  }
                                }
                              }
                              _require = c0;
                              let tmp68;
                              const tmpResult23 = require("GameServerExperiment");
                              if (
                                tmpResult23.getGameServerEnabled(c0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")
                              ) {
                                if (!stateFromStores) {
                                  if (null != stateFromStores1) {
                                    if (available >= stateFromStores1) {
                                      const tmpResult24 = require("GuildDismissibleContentUtils");
                                      if (
                                        !tmpResult24.isContentDismissed(
                                          require("dismissible_content").DismissibleGuildContent
                                            .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                          c0,
                                        )
                                      ) {
                                        tmp68 = {
                                          type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType
                                            .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                          markAsDismissed(AUTO_DISMISS) {
                                            const obj = closure_2_0(markAsDismissed[10]);
                                            const result = obj.markContentAsDismissed(
                                              closure_2_0(markAsDismissed[15]).DismissibleGuildContent
                                                .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                              closure_0,
                                              true,
                                              AUTO_DISMISS,
                                            );
                                          },
                                        };
                                        const obj3 = {
                                          type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType
                                            .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                          markAsDismissed(AUTO_DISMISS) {
                                            const obj = closure_2_0(markAsDismissed[10]);
                                            const result = obj.markContentAsDismissed(
                                              closure_2_0(markAsDismissed[15]).DismissibleGuildContent
                                                .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                              closure_0,
                                              true,
                                              AUTO_DISMISS,
                                            );
                                          },
                                        };
                                      }
                                    }
                                  }
                                }
                              }
                              cResult[16] = available;
                              cResult[17] = c0;
                              cResult[18] = stateFromStores;
                              cResult[19] = stateFromStores1;
                              cResult[20] = tmp68;
                              tmp67 = tmp68;
                            }
                          }
                        }
                      }
                      const tmp66 = maybeGetPerkPurchaseablePopoutDCF(c0, allPowerups, available, serverThemeEnabled);
                      cResult[11] = available;
                      cResult[12] = c0;
                      cResult[13] = serverThemeEnabled;
                      cResult[14] = allPowerups;
                      cResult[15] = tmp66;
                      tmp60 = tmp66;
                    }
                  }
                  _require = c0;
                  importDefault = allPowerups;
                  const ReverseOrderedTiers = tmp(7677).ReverseOrderedTiers;
                  const found = ReverseOrderedTiers.find((item) => {
                    let tmp2;
                    if (null != markAsDismissed2[item]) {
                      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                    }
                    return null != tmp2 && tmp2.user_id !== closure_2_11;
                  });
                  let tmp54;
                  if (null != found) {
                    dependencyMap = tmp56;
                    if (null != closure_10[found]) {
                      const tmpResult25 = require("GuildDismissibleContentUtils");
                      if (!tmpResult25.isContentDismissed(closure_10[found], c0)) {
                        let tmp59;
                        if (null != closure_9[found]) {
                          tmp59 = allPowerups.allPowerups[tmp58];
                        }
                        if (null != tmp59) {
                          tmp54 = {
                            type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp59,
                            markAsDismissed(AUTO_DISMISS) {
                              const obj = closure_2_0(markAsDismissed[10]);
                              const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
                            },
                          };
                          const obj4 = {
                            type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                            powerup: tmp59,
                            markAsDismissed(AUTO_DISMISS) {
                              const obj = closure_2_0(markAsDismissed[10]);
                              const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
                            },
                          };
                        }
                      }
                    }
                  }
                  cResult[8] = c0;
                  cResult[9] = allPowerups;
                  cResult[10] = tmp54;
                  tmp52 = tmp54;
                }
              }
            }
          }
        }
      }
      importDefault = tmp51;
      const tmpResult26 = require("GuildPowerupsNotificationsDCF");
      const tmp72 = _slicedToArray(tmpResult26.useGuildPowerupNotificationDCF(null != tmp51), 2)[1];
      dependencyMap = tmp72;
      let tmp73;
      if (null != allPowerups) {
        if (tmp6 === GUILD_POWERUP_PERKS_COACHMARK) {
          let tmp86;
          if (cResult[21] !== tmp7) {
            const obj5 = {
              type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.PERKS_AVAILABLE,
              markAsDismissed: tmp7,
            };
            cResult[21] = tmp7;
            cResult[22] = obj5;
            tmp86 = obj5;
          } else {
            tmp86 = cResult[22];
          }
          tmp73 = tmp86;
        } else if (tmp25 === GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK) {
          if (tmp21 === constants.GAME_SERVER_HOSTING) {
            let tmp85;
            if (cResult[23] !== tmp26) {
              const obj6 = {
                type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType
                  .GAME_SERVER_HOSTING_AVAILABLE,
                markAsDismissed: tmp26,
              };
              cResult[23] = tmp26;
              cResult[24] = obj6;
              tmp85 = obj6;
            } else {
              tmp85 = cResult[24];
            }
            tmp73 = tmp85;
          } else {
            _slicedToArray = tmp88;
            if (cResult[25] === closure_14[tmp21]) {
              let arr4;
              if (cResult[26] === allPowerups.allPowerups) {
                arr4 = cResult[27];
              }
              if (0 !== arr4.length) {
                if (cResult[28] === tmp26) {
                  let tmp84;
                  if (cResult[29] === arr4) {
                    tmp84 = cResult[30];
                  }
                  tmp73 = tmp84;
                }
                const obj7 = {
                  powerups: arr4,
                  type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE,
                  markAsDismissed: tmp26,
                };
                cResult[28] = tmp26;
                cResult[29] = arr4;
                cResult[30] = obj7;
                tmp84 = obj7;
              }
            }
            const _Object = Object;
            const values = Object.values(allPowerups.allPowerups);
            const found1 = values.filter((skuId) => set.has(skuId.skuId));
            cResult[25] = closure_14[tmp21];
            cResult[26] = allPowerups.allPowerups;
            cResult[27] = found1;
            arr4 = found1;
          }
        } else {
          if (tmp33 === BOOST_TO_UNLOCK_COACHMARK) {
            if (null != tmp27) {
              if (cResult[31] === tmp27) {
                let tmp81;
                if (cResult[32] === tmp34) {
                  tmp81 = cResult[33];
                }
                tmp73 = tmp81;
              }
              const obj8 = {
                type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
                powerup: tmp27,
                markAsDismissed: tmp34,
              };
              cResult[31] = tmp27;
              cResult[32] = tmp34;
              cResult[33] = obj8;
              tmp81 = obj8;
            }
          }
          if (tmp40 === EXPIRING_POWERUP_COACHMARK) {
            if (null != tmp35) {
              if (cResult[34] === tmp35) {
                let tmp80;
                if (cResult[35] === tmp41) {
                  tmp80 = cResult[36];
                }
                tmp73 = tmp80;
              }
              const obj9 = {
                type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.EXPIRING_PERK,
                featuredExpiringPowerup: tmp35,
                markAsDismissed: tmp41,
              };
              cResult[34] = tmp35;
              cResult[35] = tmp41;
              cResult[36] = obj9;
              tmp80 = obj9;
            }
          }
          if (tmp50) {
            let tmp79;
            if (cResult[37] !== tmp49) {
              const obj10 = {
                type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES,
                markAsDismissed: tmp49,
              };
              cResult[37] = tmp49;
              cResult[38] = obj10;
              tmp79 = obj10;
            } else {
              tmp79 = cResult[38];
            }
            tmp73 = tmp79;
          } else if (tmp71 === require("dismissible_content").DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
            if (null != tmp51) {
              if (cResult[39] === tmp72) {
                let tmp74;
                if (cResult[40] === tmp51) {
                  tmp74 = cResult[41];
                }
                if (cResult[42] === tmp51) {
                  let tmp75;
                  if (cResult[43] === tmp74) {
                    tmp75 = cResult[44];
                  }
                  tmp73 = tmp75;
                }
                const obj11 = { markAsDismissed: tmp74 };
                const merged = Object.assign(tmp51);
                cResult[42] = tmp51;
                cResult[43] = tmp74;
                cResult[44] = obj11;
                tmp75 = obj11;
              }
              function we(arg0) {
                closure_2(arg0);
                closure_1.markAsDismissed(arg0);
              }
              cResult[39] = tmp72;
              cResult[40] = tmp51;
              cResult[41] = we;
              tmp74 = we;
            }
          }
        }
      }
      return tmp73;
    }
  : (c0, arg1) => {
      let closure_3;
      let markAsDismissed;
      let stateFromStores1;
      _require = c0;
      importDefault = arg1;
      let tmp = _require;
      let tmp2 = dependencyMap;
      let obj = require("GuildPowerupsNotificationsDCF");
      const tmp4 = _slicedToArray(obj.usePerksCoachmarkDCF(null != arg1), 2);
      const tmp5 = tmp4[1];
      dependencyMap = tmp5;
      const tmp6 = tmp4[0] === require("dismissible_content").DismissibleContent.GUILD_POWERUP_PERKS_COACHMARK;
      _slicedToArray = tmp6;
      const tmp7 = importDefault;
      const available = useGuildPowerupsBoostCountDefault(c0).available;
      let obj2 = require("useStateFromStores");
      const items = [stateFromStores1];
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let flag;
        if (guild != null) {
          const features = guild.features;
          flag = features.has(markAsDismissed5.GAME_SERVERS);
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      });
      let obj3 = require("useStateFromStores");
      const items1 = [stateFromStores];
      stateFromStores1 = obj3.useStateFromStores(items1, () => GameServerStore.getLowestGameCostForGuild(closure_0));
      let obj4 = require("ServerThemeExperiment");
      let serverThemeEnabled = obj4.useServerThemeEnabled(c0, "useGuildPowerupsChannelListPopout");
      let obj5 = require("ServerThemeUserExperiment");
      const serverThemeUserEnabled = obj5.useServerThemeUserEnabled("useGuildPowerupsChannelListPopout");
      let obj6 = require("ServerThemeExperiment");
      const serverThemeRollbackEnabled = obj6.useServerThemeRollbackEnabled(c0, "useGuildPowerupsChannelListPopout");
      if (serverThemeEnabled) {
        serverThemeEnabled = serverThemeUserEnabled;
      }
      if (serverThemeEnabled) {
        serverThemeEnabled = !serverThemeRollbackEnabled;
      }
      const tmp13 = useGuildPowerupNewPerkMarketingVersionDefault(c0, arg1);
      let closure_8 = tmp13;
      let tmp15 = null != arg1;
      const useNewPerkAvailableCoachmarkDCF = tmp(12175).useNewPerkAvailableCoachmarkDCF;
      tmp(12175);
      if (tmp15) {
        tmp15 = !tmp6;
      }
      const tmp3Result = _slicedToArray(useNewPerkAvailableCoachmarkDCF(tmp15, tmp13), 2);
      let tmp17 = tmp3Result[1];
      const markAsDismissed2 = tmp17;
      const tmp18 = tmp3Result[0] === tmp(2036).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK;
      let closure_10 = tmp18;
      const tmp19 = useBoostToUnlockFeaturedPowerupDefault(c0);
      let closure_11 = tmp19;
      let tmp22 = null != arg1;
      const tmp20 = useCanPurchaseBoostsDefault();
      const useBoostToUnlockCoachmarkDCF = tmp(12175).useBoostToUnlockCoachmarkDCF;
      tmp(12175);
      if (tmp22) {
        tmp22 = !tmp6;
      }
      if (tmp22) {
        tmp22 = !tmp18;
      }
      if (tmp22) {
        tmp22 = null != tmp19;
      }
      if (tmp22) {
        tmp22 = tmp20;
      }
      const tmp3Result5 = _slicedToArray(useBoostToUnlockCoachmarkDCF(tmp22, c0), 2);
      const markAsDismissed3 = tmp24;
      let tmp25 = tmp3Result5[0] === tmp(2036).DismissibleContent.BOOST_TO_UNLOCK_COACHMARK;
      constants = tmp25;
      const tmp26 = useFeaturedExpiringPowerupDefault(c0);
      let closure_14 = tmp26;
      let tmp28 = null != arg1;
      const useExpiringPowerupCoachmarkDCF = tmp(12175).useExpiringPowerupCoachmarkDCF;
      tmp(12175);
      if (tmp28) {
        tmp28 = !tmp6;
      }
      if (tmp28) {
        tmp28 = !tmp18;
      }
      if (tmp28) {
        tmp28 = !tmp25;
      }
      if (tmp28) {
        tmp28 = null != tmp26;
      }
      const tmp3Result6 = _slicedToArray(useExpiringPowerupCoachmarkDCF(tmp28, c0), 2);
      const markAsDismissed4 = tmp30;
      const tmp31 = tmp3Result6[0] === tmp(2036).DismissibleContent.EXPIRING_POWERUP_COACHMARK;
      let closure_16 = tmp31;
      const tmpResult8 = tmp(4792);
      const gameServerEnabled = tmpResult8.getGameServerEnabled(c0, "useGuildPowerupsChannelListPopout");
      let tmp34 = null != arg1;
      const useNewGamesCoachmarkDC = tmp(12175).useNewGamesCoachmarkDC;
      tmp(12175);
      if (tmp34) {
        tmp34 = gameServerEnabled;
      }
      const tmp3Result7 = _slicedToArray(useNewGamesCoachmarkDC(tmp34), 2);
      const markAsDismissed5 = tmp36;
      const tmp37 = tmp3Result7[0] === tmp(2036).DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK;
      let closure_18 = tmp37;
      const items2 = [
        c0,
        arg1,
        tmp6,
        tmp18,
        tmp37,
        tmp25,
        tmp31,
        available,
        stateFromStores,
        stateFromStores1,
        serverThemeEnabled,
      ];
      const memo = available.useMemo(() => {
        const tmp = closure_1;
        if (null != closure_1) {
          if (!closure_3) {
            if (!c10) {
              if (!closure_18) {
                if (!constants) {
                  if (!closure_16) {
                    closure_1 = tmp;
                    const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
                    const found = ReverseOrderedTiers.find((item) => {
                      let tmp2;
                      if (null != markAsDismissed2[item]) {
                        tmp2 = unlockedPowerups.unlockedPowerups[tmp];
                      }
                      return null != tmp2 && tmp2.user_id !== closure_2_11;
                    });
                    let tmp10;
                    if (null != found) {
                      let closure_2 = tmp12;
                      if (null != authStore[found]) {
                        const tmp7Result = GuildDismissibleContentUtils;
                        if (!tmp7Result.isContentDismissed(authStore[found], closure_0)) {
                          let tmp15;
                          if (null != React4[found]) {
                            tmp15 = tmp.allPowerups[tmp14];
                          }
                          if (null != tmp15) {
                            let obj = {
                              type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType.LEVEL_REACHED,
                              powerup: tmp15,
                              markAsDismissed(AUTO_DISMISS) {
                                const obj = closure_2_0(markAsDismissed[10]);
                                const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
                              },
                            };
                            tmp10 = obj;
                          }
                        }
                      }
                    }
                    if (null != tmp10) {
                      return tmp10;
                    } else {
                      const tmp25 = maybeGetPerkPurchaseablePopoutDCF(closure_0, tmp, available, serverThemeEnabled);
                      if (null != tmp25) {
                        return tmp25;
                      } else {
                        closure_0 = tmp6;
                        let tmp16;
                        const tmp7Result3 = GameServerExperiment;
                        if (
                          tmp7Result3.getGameServerEnabled(closure_0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")
                        ) {
                          if (!stateFromStores) {
                            if (null != stateFromStores1) {
                              if (available >= stateFromStores1) {
                                const tmp7Result4 = GuildDismissibleContentUtils;
                                if (
                                  !tmp7Result4.isContentDismissed(
                                    dismissible_content.DismissibleGuildContent
                                      .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                    closure_0,
                                  )
                                ) {
                                  tmp16 = {
                                    type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType
                                      .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                    markAsDismissed(AUTO_DISMISS) {
                                      const obj = closure_2_0(markAsDismissed[10]);
                                      const result = obj.markContentAsDismissed(
                                        closure_2_0(markAsDismissed[15]).DismissibleGuildContent
                                          .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                        closure_0,
                                        true,
                                        AUTO_DISMISS,
                                      );
                                    },
                                  };
                                  const obj2 = {
                                    type: GuildPowerupsNotification.GuildPowerupNotificationPopoutType
                                      .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
                                    markAsDismissed(AUTO_DISMISS) {
                                      const obj = closure_2_0(markAsDismissed[10]);
                                      const result = obj.markContentAsDismissed(
                                        closure_2_0(markAsDismissed[15]).DismissibleGuildContent
                                          .GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                                        closure_0,
                                        true,
                                        AUTO_DISMISS,
                                      );
                                    },
                                  };
                                }
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
      const tmpResult10 = tmp(12175);
      const tmp3Result8 = _slicedToArray(tmpResult10.useGuildPowerupNotificationDCF(null != memo), 2);
      const first = tmp3Result8[0];
      closure_21 = tmp41;
      const items3 = [
        arg1,
        tmp6,
        tmp5,
        memo,
        first,
        tmp3Result8[1],
        tmp18,
        tmp17,
        tmp13,
        tmp25,
        tmp19,
        tmp3Result5[1],
        tmp31,
        tmp26,
        tmp3Result6[1],
        tmp37,
        tmp3Result7[1],
      ];
      return available.useMemo(() => {
        if (null != closure_1) {
          if (closure_3) {
            const obj2 = {
              type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.PERKS_AVAILABLE,
              markAsDismissed,
            };
            return obj2;
          } else if (closure_10) {
            if (closure_8 === constants.GAME_SERVER_HOSTING) {
              const obj3 = {
                type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_HOSTING_AVAILABLE,
                markAsDismissed: markAsDismissed2,
              };
              return obj3;
            } else {
              c0 = closure_14[tmp26];
              const _Object = Object;
              const values = Object.values(tmp.allPowerups);
              const found = values.filter((skuId) => set.has(skuId.skuId));
              if (0 !== found.length) {
                const obj4 = {
                  powerups: found,
                  type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.NEW_PERK_AVAILABLE,
                  markAsDismissed: markAsDismissed2,
                };
                return obj4;
              }
            }
          } else {
            let tmp12;
            if (constants) {
              if (null != closure_11) {
                tmp12 = {
                  type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
                  powerup: tmp5,
                  markAsDismissed: markAsDismissed3,
                };
                const obj5 = {
                  type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
                  powerup: tmp5,
                  markAsDismissed: markAsDismissed3,
                };
              }
              return tmp12;
            }
            if (closure_16) {
              if (null != closure_14) {
                tmp12 = {
                  type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK,
                  featuredExpiringPowerup: tmp7,
                  markAsDismissed: markAsDismissed4,
                };
                const obj6 = {
                  type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.EXPIRING_PERK,
                  featuredExpiringPowerup: tmp7,
                  markAsDismissed: markAsDismissed4,
                };
              }
            }
            if (closure_18) {
              tmp12 = {
                type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES,
                markAsDismissed: markAsDismissed5,
              };
              const obj7 = {
                type: c0(markAsDismissed[11]).GuildPowerupNotificationPopoutType.GAME_SERVER_NEW_GAMES,
                markAsDismissed: markAsDismissed5,
              };
            } else if (first === c0(markAsDismissed[15]).DismissibleContent.GUILD_POWERUP_NOTIFICATION) {
              if (null != memo) {
                const obj = {
                  markAsDismissed(arg0) {
                    closure_1_21(arg0);
                    memo.markAsDismissed(arg0);
                  },
                };
                const merged = Object.assign(memo);
                tmp12 = obj;
              }
            }
          }
        }
      }, items3);
    };
let closure_21 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let indicator;
      let showUnread;
      let tmp6;
      let tmp7;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsNotificationStore];
        cResult[0] = items;
        first = items;
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
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildPowerupsStore];
        cResult[4] = items2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        class E {
          constructor() {
            return GuildPowerupsStore.getStateForGuild(closure_0);
          }
        }
        cResult[5] = arg0;
        cResult[6] = E;
      } else {
        class E {
          constructor() {
            return GuildPowerupsStore.getStateForGuild(closure_0);
          }
        }
      }
      const tmpResult2 = require("useStateFromStores");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, E);
      if (stateFromStores1 == null) {
        class E {
          constructor() {
            return GuildPowerupsStore.getStateForGuild(closure_0);
          }
        }
      }
      ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
      closure_20(arg0, stateFromStores1, stateFromStores);
      if (stateFromStores1 == null) {
        class E {
          constructor() {
            return GuildPowerupsStore.getStateForGuild(closure_0);
          }
        }
      }
      const tmp15Result = closure_21(arg0, stateFromStores1);
      if (null !== stateFromStores1) {
        class E {
          constructor() {
            return GuildPowerupsStore.getStateForGuild(closure_0);
          }
        }
        if (cResult[7] === indicator) {
          class E {
            constructor() {
              return GuildPowerupsStore.getStateForGuild(closure_0);
            }
          }
        }
        const obj2 = { indicator, showUnread, popout: tmp15Result };
        cResult[7] = indicator;
        cResult[8] = tmp15Result;
        cResult[9] = showUnread;
        cResult[10] = obj2;
      }
    }
  : (arg0) => {
      let closure_0;
      let indicator;
      let showUnread;
      _require = arg0;
      const items = [GuildPowerupsNotificationStore];
      const items1 = [arg0];
      const obj = require("useStateFromStores");
      const stateFromStores = obj.useStateFromStores(
        items,
        () => GuildPowerupsNotificationStore.getNotificationStateForGuild(closure_0),
        items1,
      );
      const items2 = [GuildPowerupsStore];
      const obj2 = require("useStateFromStores");
      const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildPowerupsStore.getStateForGuild(closure_0));
      ({ indicator, showUnread } = closure_20(arg0, stateFromStores1, stateFromStores));
      closure_20(arg0, stateFromStores1, stateFromStores);
      const tmp6Result = closure_21(arg0, stateFromStores1);
      if (null !== stateFromStores1) {
        return { indicator, showUnread, popout: tmp6Result };
      }
    };
let closure_22 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_2;
      let first;
      let items3;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildPowerupsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmp8 = closure_22(arg0);
      dependencyMap = tmp8;
      const tmpResult2 = require("useGuildPowerupsNewBadge");
      const autoDismissGuildPowerupsNewBadge = tmpResult2.useAutoDismissGuildPowerupsNewBadge(arg0);
      if (cResult[3] !== arg0) {
        const fn2 = function p() {
          const obj = GuildPowerupsActionCreators;
          const result = obj.guildPowerupsAckNotification(closure_0);
        };
        const items1 = [arg0];
        cResult[3] = arg0;
        cResult[4] = fn2;
        cResult[5] = items1;
        tmp11 = items1;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const effect = react.useEffect(tmp10, tmp11);
      if (cResult[6] !== tmp8) {
        class G {
          constructor() {
            const items = [
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK,
            ];
            let type;
            set = new Set(items);
            if (closure_2 != null) {
              const popout = closure_2.popout;
              if (popout != null) {
                type = popout.type;
              }
            }
            const hasItem = null != type && set.has(closure_2.popout.type);
            if (!hasItem) {
              if (closure_2 != null) {
                const popout2 = closure_2.popout;
                if (popout2 != null) {
                  popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
                }
              }
            }
          }
        }
        const items2 = [tmp8];
        cResult[6] = tmp8;
        cResult[7] = G;
        cResult[8] = items2;
        tmp14 = items2;
      } else {
        class G {
          constructor() {
            const items = [
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK,
            ];
            let type;
            set = new Set(items);
            if (closure_2 != null) {
              const popout = closure_2.popout;
              if (popout != null) {
                type = popout.type;
              }
            }
            const hasItem = null != type && set.has(closure_2.popout.type);
            if (!hasItem) {
              if (closure_2 != null) {
                const popout2 = closure_2.popout;
                if (popout2 != null) {
                  popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
                }
              }
            }
          }
        }
        tmp14 = cResult[8];
      }
      const effect1 = react.useEffect(G, tmp14);
      if (cResult[9] === arg0) {
        class G {
          constructor() {
            const items = [
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
              GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK,
            ];
            let type;
            set = new Set(items);
            if (closure_2 != null) {
              const popout = closure_2.popout;
              if (popout != null) {
                type = popout.type;
              }
            }
            const hasItem = null != type && set.has(closure_2.popout.type);
            if (!hasItem) {
              if (closure_2 != null) {
                const popout2 = closure_2.popout;
                if (popout2 != null) {
                  popout2.markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
                }
              }
            }
          }
        }
        const effect2 = react.useEffect(C, items3);
      }
      class C {
        constructor() {
          if (null != closure_1) {
            tmp = closure_0;
            tmp2 = closure_2;
            ReverseOrderedTiers = closure_0(closure_2[9]).ReverseOrderedTiers;
            item = ReverseOrderedTiers.forEach((item) => {
              if (null != closure_2_9[item]) {
                if (null != unlockedPowerups.unlockedPowerups[closure_2_9[item]]) {
                  if (null != closure_2_10[item]) {
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
    }
  : (arg0) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      let obj = require("useStateFromStores");
      let items = [GuildPowerupsStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
      const tmp2 = closure_22(arg0);
      dependencyMap = tmp2;
      const obj2 = require("useGuildPowerupsNewBadge");
      const autoDismissGuildPowerupsNewBadge = obj2.useAutoDismissGuildPowerupsNewBadge(arg0);
      const items1 = [arg0];
      const effect = react.useEffect(() => {
        const obj = GuildPowerupsActionCreators;
        const result = obj.guildPowerupsAckNotification(closure_0);
      }, items1);
      const items2 = [tmp2];
      const effect1 = react.useEffect(() => {
        const items = [
          GuildPowerupsNotification.GuildPowerupNotificationPopoutType.BOOST_TO_UNLOCK,
          GuildPowerupsNotification.GuildPowerupNotificationPopoutType.EXPIRING_PERK,
        ];
        let type;
        set = new Set(items);
        if (closure_2 != null) {
          const popout = closure_2.popout;
          if (popout != null) {
            type = popout.type;
          }
        }
        const hasItem = null != type && set.has(closure_2.popout.type);
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
      const effect2 = react.useEffect(() => {
        let unlockedPowerups;
        if (null != stateFromStores) {
          const ReverseOrderedTiers = GuildBoostingUtils.ReverseOrderedTiers;
          const item = ReverseOrderedTiers.forEach((item) => {
            if (null != closure_2_9[item]) {
              if (null != unlockedPowerups.unlockedPowerups[closure_2_9[item]]) {
                if (null != closure_2_10[item]) {
                  const obj = closure_0(closure_2[10]);
                  const result = obj.markContentAsDismissed(tmp4, closure_1_0, false, constants.AUTO_DISMISS);
                }
              }
            }
          });
        }
      }, items3);
    };
function maybeGetLevelUnlockedPopoutDCF(c0, arg1) {
  let closure_2;
  _require = c0;
  let closure_1 = arg1;
  const ReverseOrderedTiers = require("GuildBoostingUtils").ReverseOrderedTiers;
  const found = ReverseOrderedTiers.find((item) => {
    let tmp2;
    if (null != markAsDismissed2[item]) {
      tmp2 = unlockedPowerups.unlockedPowerups[tmp];
    }
    return null != tmp2 && tmp2.user_id !== closure_2_11;
  });
  if (null != found) {
    dependencyMap = tmp8;
    if (null != closure_10[found]) {
      const tmpResult = require("GuildDismissibleContentUtils");
      if (!tmpResult.isContentDismissed(closure_10[found], c0)) {
        let tmp6;
        if (null != closure_9[found]) {
          tmp6 = arg1.allPowerups[tmp5];
        }
        if (null != tmp6) {
          const obj = {
            type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType.LEVEL_REACHED,
            powerup: tmp6,
            markAsDismissed(AUTO_DISMISS) {
              const obj = closure_2_0(markAsDismissed[10]);
              const result = obj.markContentAsDismissed(closure_2, closure_0, true, AUTO_DISMISS);
            },
          };
          return obj;
        }
      }
    }
  }
}
function maybeGetGameServerHostingGuildEligiblePopoutDCF(c0, arg1, arg2, arg3) {
  _require = c0;
  const obj = require("GameServerExperiment");
  if (obj.getGameServerEnabled(c0, "maybeGetGameServerHostingGuildEligiblePopoutDCF")) {
    const tmp3 = arg1;
    if (!tmp3) {
      if (null != arg3) {
        if (arg2 >= arg3) {
          const tmpResult = require("GuildDismissibleContentUtils");
          if (
            !tmpResult.isContentDismissed(
              require("dismissible_content").DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
              c0,
            )
          ) {
            const obj2 = {
              type: require("GuildPowerupsNotification").GuildPowerupNotificationPopoutType
                .GAME_SERVER_HOSTING_GUILD_ELIGIBLE,
              markAsDismissed(AUTO_DISMISS) {
                const obj = closure_2_0(markAsDismissed[10]);
                const result = obj.markContentAsDismissed(
                  closure_2_0(markAsDismissed[15]).DismissibleGuildContent.GAME_SERVER_HOSTING_GUILD_ELIGIBLE_COACHMARK,
                  closure_0,
                  true,
                  AUTO_DISMISS,
                );
              },
            };
            return obj2;
          }
        }
      }
    }
  }
}
let result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsNotifications.tsx");

export default tmp6;
export { maybeGetLevelUnlockedPopoutDCF };
export { maybeGetPerkPurchaseablePopoutDCF };
export { maybeGetGameServerHostingGuildEligiblePopoutDCF };
export const useGuildPowerupsNotificationIndicator = tmp4;
export const useGuildPowerupsChannelListPopout = tmp5;
export const useAutoDismissGuildPowerupsNotifications = tmp7;
