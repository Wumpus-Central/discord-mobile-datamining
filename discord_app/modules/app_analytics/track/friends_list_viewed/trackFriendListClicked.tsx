// === Module 16752: trackFriendListClicked ===

// Module 16752 (trackFriendListClicked)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 16750 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  const obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};