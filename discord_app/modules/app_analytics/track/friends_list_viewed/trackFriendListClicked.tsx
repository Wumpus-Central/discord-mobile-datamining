// === Module 16575: trackFriendListClicked ===

// Module 16575 (trackFriendListClicked)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 16573 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  const tmp = getTrackFriendsListViewedDataDefault();
  const merged = Object.assign(tmp);
  AnalyticsUtilsDefault.track(AnalyticEvents.FRIENDS_LIST_CLICKED, { tab_opened, source });
};