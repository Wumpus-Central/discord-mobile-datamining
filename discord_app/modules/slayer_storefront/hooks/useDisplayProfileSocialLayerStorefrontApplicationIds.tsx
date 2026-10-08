// === Module 8964: useDisplayProfileSocialLayerStorefrontApplicationIds ===

// Module 8964 (useDisplayProfileSocialLayerStorefrontApplicationIds)
import _mod12 from "module_12" /* 12 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7311 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7314 */;
import noop from "module_19" /* 19 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6919 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  const cResult = require("c").c(19);
  const tmp4 = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4])(userId.userId);
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    userId = undefined;
    if (tmp4 != null) {
      userId = tmp4.userId;
    }
    if (null != userId) {
      let items = [tmp4.userId];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp4;
    cResult[1] = items1;
  } else {
    if (cResult[2] !== cResult[1]) {
      const obj2 = { userIds: tmp5 };
      cResult[2] = tmp5;
      cResult[3] = obj2;
      let tmp9 = obj2;
    } else {
      tmp9 = cResult[3];
    }
    usersPlayingStorefrontEnabledGamesApplicationIds = tmp(tmp2[5]).useUsersPlayingStorefrontEnabledGamesApplicationIds(tmp9);
    if (cResult[4] !== cResult[1]) {
      const obj3 = { userIds: tmp5 };
      cResult[4] = tmp5;
      cResult[5] = obj3;
      let tmp11 = obj3;
    } else {
      tmp11 = cResult[5];
    }
    const tmpResult = tmp(tmp2[5]);
    usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = tmp(tmp2[5]).useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(tmp11);
    const tmpResult4 = tmp(tmp2[5]);
    const areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = tmp(tmp2[5]).useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(tmp5);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStoresArray];
      cResult[6] = items2;
      let tmp15 = items2;
    } else {
      tmp15 = cResult[6];
    }
    let widgets;
    if (tmp4 != null) {
      widgets = tmp4.widgets;
    }
    if (cResult[7] !== widgets) {
      let widgets1;
      if (tmp4 != null) {
        widgets1 = tmp4.widgets;
      }
      const fn = function y() {
        let widgets;
        if (application != null) {
          widgets = application.widgets;
        }
        if (null == widgets) {
          return [];
        } else {
          const _Set = Set;
          const set = new Set();
          let widgets1;
          if (application != null) {
            widgets1 = application.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
          for (const item10011 of widgets1) {
            if (item10011 instanceof UserProfileGameWidgetTypes.BaseGameWidget) {
              let games = item10011.games;
              let item = games.forEach((gameId) => {
                const applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(gameId.gameId);
                if (null != applicationIdFromDetectableId) {
                  set.add(applicationIdFromDetectableId);
                }
              });
            } else if (item10011 instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
              let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(item10011.applicationId);
              if (null != applicationIdFromDetectableId) {
                let addResult = set.add(tmp12);
              }
            }
            continue;
          }
          const _Array = Array;
          return Array.from(set).sort();
        }
      };
      cResult[7] = widgets1;
      cResult[8] = fn;
      let tmp19 = fn;
    } else {
      tmp19 = cResult[8];
    }
    if (cResult[9] !== tmp4) {
      const items3 = [tmp4];
      cResult[9] = tmp4;
      cResult[10] = items3;
      let tmp21 = items3;
    } else {
      tmp21 = cResult[10];
    }
    const tmpResult5 = tmp(tmp2[5]);
    stateFromStoresArray = tmp(tmp2[8]).useStateFromStoresArray(tmp15, tmp19, tmp21);
    let application;
    if (tmp4 != null) {
      application = tmp4.application;
    }
    if (cResult[11] === application) {
      if (cResult[12] === stateFromStoresArray) {
        if (cResult[13] === usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds) {
          if (cResult[14] === areUsersInSocialLayerStorefrontMutualGuildsApplicationIds) {
            if (cResult[15] === usersPlayingStorefrontEnabledGamesApplicationIds) {
              let tmp24 = cResult[16];
            }
            if (cResult[17] !== tmp24) {
              const tmp24Result = tmp24();
              cResult[17] = tmp24;
              cResult[18] = tmp24Result;
              let tmp26 = tmp24Result;
            } else {
              tmp26 = cResult[18];
            }
            return tmp26;
          }
        }
      }
    }
    let application1;
    if (tmp4 != null) {
      application1 = tmp4.application;
    }
    const fn2 = function w() {
      application = undefined;
      if (application != null) {
        application = application.application;
      }
      if (null != application) {
        let items = [];
      } else {
        const items1 = [];
        HermesBuiltin.arraySpread(stateFromStoresArray, HermesBuiltin.arraySpread(areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
        items = _mod12.uniq(items1);
      }
      return items;
    };
    cResult[11] = application1;
    cResult[12] = stateFromStoresArray;
    cResult[13] = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
    cResult[14] = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
    cResult[15] = usersPlayingStorefrontEnabledGamesApplicationIds;
    cResult[16] = fn2;
    tmp24 = fn2;
    const tmpResult6 = tmp(tmp2[8]);
  }
}) : (function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4])(userId.userId);
  _require = tmp;
  let items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let userId;
    if (application != null) {
      userId = application.userId;
    }
    if (null != userId) {
      const items = [application.userId];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  usersPlayingStorefrontEnabledGamesApplicationIds = require("SocialLayerStorefrontEligibilityHooks").useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  let obj = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = require("SocialLayerStorefrontEligibilityHooks").useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const obj2 = require("SocialLayerStorefrontEligibilityHooks");
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = require("SocialLayerStorefrontEligibilityHooks").useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  const obj3 = require("SocialLayerStorefrontEligibilityHooks");
  let items1 = [stateFromStoresArray];
  const items2 = [tmp];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    let widgets;
    if (application != null) {
      widgets = application.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      const set = new Set();
      let widgets1;
      if (application != null) {
        widgets1 = application.widgets;
      }
      if (widgets1 == null) {
        widgets1 = [];
      }
      for (const item10011 of widgets1) {
        if (item10011 instanceof UserProfileGameWidgetTypes.BaseGameWidget) {
          let games = item10011.games;
          let item = games.forEach((gameId) => {
            const applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(gameId.gameId);
            if (null != applicationIdFromDetectableId) {
              set.add(applicationIdFromDetectableId);
            }
          });
        } else if (item10011 instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(item10011.applicationId);
          if (null != applicationIdFromDetectableId) {
            let addResult = set.add(tmp12);
          }
        }
        continue;
      }
      const _Array = Array;
      return Array.from(set).sort();
    }
  }, items2);
  let application;
  if (tmp != null) {
    application = tmp.application;
  }
  const items3 = [application, usersPlayingStorefrontEnabledGamesApplicationIds, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, stateFromStoresArray];
  return areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    application = undefined;
    if (application != null) {
      application = application.application;
    }
    if (null != application) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(stateFromStoresArray, HermesBuiltin.arraySpread(areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = _mod12.uniq(items1);
    }
    return items;
  }, items3);
});