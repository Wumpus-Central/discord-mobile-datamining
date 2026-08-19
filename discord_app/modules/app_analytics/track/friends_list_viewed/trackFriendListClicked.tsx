// === Module 15971: trackFriendsListClicked ===

// Module 15971 (trackFriendsListClicked)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 15969 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  ({ tab_opened, source } = arg0);
  const obj = { tab_opened, source };
  const merged = Object.assign(getTrackFriendsListViewedDataDefault());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};