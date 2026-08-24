// === Module 9197: useDisplayProfileSocialLayerStorefrontApplicationIds ===

// Module 9197 (useDisplayProfileSocialLayerStorefrontApplicationIds)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleUserSettingsStoreUpdate" /* 7202 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let _require;
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2])(userId.userId);
  _require = tmp;
  let items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let userId;
    if (closure_0 != null) {
      userId = tmp.userId;
    }
    if (null != userId) {
      const items = [tmp.userId];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  usersPlayingStorefrontEnabledGamesApplicationIds = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  let obj = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const obj2 = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]).useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  const obj3 = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[3]);
  let items1 = [stateFromStoresArray];
  const items2 = [tmp];
  stateFromStoresArray = _require(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4]).useStateFromStoresArray(items1, () => {
    let widgets;
    if (set != null) {
      widgets = tmp.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      set = new Set();
      let widgets1;
      if (tmp != null) {
        widgets1 = tmp.widgets;
      }
      if (widgets1 == null) {
        widgets1 = [];
      }
      for (const item10011 of widgets1) {
        let tmp5 = item10011;
        let tmp6 = lib;
        let tmp7 = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
        let tmp8 = item10011;
        if (item10011 instanceof lib(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[5]).BaseGameWidget) {
          let games = tmp5.games;
          let item = games.forEach((gameId) => {
            const applicationIdFromDetectableId = closure_1_4.getApplicationIdFromDetectableId(gameId.gameId);
            if (null != applicationIdFromDetectableId) {
              set.add(applicationIdFromDetectableId);
            }
          });
        } else if (tmp5 instanceof tmp6(tmp7[6]).ApplicationWidget) {
          let tmp9 = stateFromStoresArray;
          let tmp10 = item10011;
          let applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(tmp5.applicationId);
          if (null != applicationIdFromDetectableId) {
            let tmp13 = applicationIdFromDetectableId;
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
    let application;
    if (lib != null) {
      application = lib.application;
    }
    if (null != application) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(stateFromStoresArray, HermesBuiltin.arraySpread(areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = lib(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[7]).uniq(items1);
      const obj = lib(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[7]);
    }
    return items;
  }, items3);
};