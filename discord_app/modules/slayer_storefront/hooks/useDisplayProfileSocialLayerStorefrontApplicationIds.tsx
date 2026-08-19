// discord_app/modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx
import noop from "../../../../_runtime/00019_noop.js";
import handleUserSettingsStoreUpdate from "../SocialLayerStorefrontStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2])(userId.userId);
  const _require = tmp;
  let items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let userId;
    if (closure_0 != null) {
      userId = closure_0.userId;
    }
    if (null != userId) {
      const items = [closure_0.userId];
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
        if (item10011 instanceof lib(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[5]).BaseGameWidget) {
          let games = item10011.games;
          let item = games.forEach((item, index) => {
            const applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(item.gameId);
            if (null != applicationIdFromDetectableId) {
              set.add(applicationIdFromDetectableId);
            }
          });
        } else if (item10011 instanceof lib(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[6]).ApplicationWidget) {
          let applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(item10011.applicationId);
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