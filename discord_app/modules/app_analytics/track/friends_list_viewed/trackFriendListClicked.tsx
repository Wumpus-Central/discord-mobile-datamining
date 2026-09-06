// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  const obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
}
