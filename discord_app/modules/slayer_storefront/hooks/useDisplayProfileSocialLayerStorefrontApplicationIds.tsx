// === Module 9474: useDisplayProfileSocialLayerStorefrontApplicationIds ===

// Module 9474 (useDisplayProfileSocialLayerStorefrontApplicationIds)
import apply from "apply" /* 12 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7354 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7357 */;
import noop from "module_19" /* 19 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7246 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2])(userId.userId);
  _require = tmp;
  items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let userId;
    if (application != null) {
      userId = application.userId;
    }
    if (null != userId) {
      items = [application.userId];
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
      items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(stateFromStoresArray, HermesBuiltin.arraySpread(areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = apply.uniq(items1);
    }
    return items;
  }, items3);
};