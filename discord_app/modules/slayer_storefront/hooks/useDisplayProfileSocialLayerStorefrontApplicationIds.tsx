// discord_app/modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import UserProfileGameWidgetTypes from "../../user_profile/UserProfileGameWidgetTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SocialLayerStorefrontStore from "../SocialLayerStorefrontStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx",
);

export default function useDisplayProfileSocialLayerStorefrontApplicationIds(userId) {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(
    usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[2],
  )(userId.userId);
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
  usersPlayingStorefrontEnabledGamesApplicationIds =
    require("SocialLayerStorefrontEligibilityHooks").useUsersPlayingStorefrontEnabledGamesApplicationIds({
      userIds: memo,
    });
  let obj = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds =
    require("SocialLayerStorefrontEligibilityHooks").useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({
      userIds: memo,
    });
  const obj2 = require("SocialLayerStorefrontEligibilityHooks");
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds =
    require("SocialLayerStorefrontEligibilityHooks").useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  const obj3 = require("SocialLayerStorefrontEligibilityHooks");
  let items1 = [stateFromStoresArray];
  const items2 = [tmp];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items1,
    () => {
      let widgets;
      if (closure_0 != null) {
        widgets = tmp.widgets;
      }
      if (null == widgets) {
        return [];
      } else {
        const _Set = Set;
        const set = new Set();
        let widgets1;
        if (tmp != null) {
          widgets1 = tmp.widgets;
        }
        if (widgets1 == null) {
          widgets1 = [];
        }
        for (const item10011 of widgets1) {
          let tmp5 = item10011;
          let tmp6 = require;
          if (item10011 instanceof UserProfileGameWidgetTypes.BaseGameWidget) {
            let games = tmp5.games;
            let item = games.forEach((gameId) => {
              const applicationIdFromDetectableId = stateFromStoresArray.getApplicationIdFromDetectableId(
                gameId.gameId,
              );
              if (null != applicationIdFromDetectableId) {
                set.add(applicationIdFromDetectableId);
              }
            });
          } else if (tmp5 instanceof tmp6(7633).ApplicationWidget) {
            let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(
              tmp5.applicationId,
            );
            if (null != applicationIdFromDetectableId) {
              let addResult = set.add(tmp12);
            }
          }
          continue;
        }
        const _Array = Array;
        return Array.from(set).sort();
      }
    },
    items2,
  );
  let application;
  if (tmp != null) {
    application = tmp.application;
  }
  const items3 = [
    application,
    usersPlayingStorefrontEnabledGamesApplicationIds,
    usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds,
    areUsersInSocialLayerStorefrontMutualGuildsApplicationIds,
    stateFromStoresArray,
  ];
  return areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    application = undefined;
    if (application != null) {
      application = application.application;
    }
    if (null != application) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(
        stateFromStoresArray,
        HermesBuiltin.arraySpread(
          areUsersInSocialLayerStorefrontMutualGuildsApplicationIds,
          HermesBuiltin.arraySpread(
            usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds,
            HermesBuiltin.arraySpread(usersPlayingStorefrontEnabledGamesApplicationIds, 0),
          ),
        ),
      );
      items = _mod12.uniq(items1);
    }
    return items;
  }, items3);
}
