// === Module 17137: trackFriendListViewed ===

// Module 17137 (trackFriendListViewed)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Clickstream from "Clickstream" /* 7661 */;
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData" /* 17138 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(source) {
  let str = source.tab_opened;
  const tmp = getTrackFriendsListViewedDataDefault();
  const merged = Object.assign(tmp);
  AnalyticsUtilsDefault.track(AnalyticEvents.FRIENDS_LIST_VIEWED, { tab_opened: str, source: source.source });
  const obj2 = { tab_opened: str, source: source.source };
  if (str == null) {
    str = "tabless";
  }
  const obj4 = { tab_opened: str, num_friends: null, now_playing_visible: null, now_playing_num_cards: null };
  let num = tmp.num_friends;
  if (num == null) {
    num = 0;
  }
  obj4.num_friends = num;
  let flag = tmp.now_playing_visible;
  if (flag == null) {
    flag = false;
  }
  obj4.now_playing_visible = flag;
  let num2 = tmp.now_playing_num_cards;
  if (num2 == null) {
    num2 = 0;
  }
  obj4.now_playing_num_cards = num2;
  Clickstream.trackClickstream(AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, obj4);
};