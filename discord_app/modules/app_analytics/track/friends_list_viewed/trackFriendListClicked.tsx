// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData.native.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};