// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Clickstream from "../../clickstream/Clickstream.tsx";
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(tab_opened) {
  let flag;
  let num;
  let num2;
  let str = tab_opened.tab_opened;
  const source = tab_opened.source;
  const tmp = getTrackFriendsListViewedDataDefault();
  const track = AnalyticsUtilsDefault.track;
  const FRIENDS_LIST_VIEWED = AnalyticEvents.FRIENDS_LIST_VIEWED;
  const obj = { tab_opened: str, source };
  AnalyticsUtilsDefault;
  const merged = Object.assign(tmp);
  track(FRIENDS_LIST_VIEWED, obj);
  const trackClickstream = Clickstream.trackClickstream;
  const FRIENDS_LIST_VIEWED_CLICKSTREAM = AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM;
  Clickstream;
  if (str == null) {
    str = "tabless";
  }
  const obj2 = { tab_opened: str, num_friends: num, now_playing_visible: flag, now_playing_num_cards: num2 };
  num = tmp.num_friends;
  if (num == null) {
    num = 0;
  }
  flag = tmp.now_playing_visible;
  if (flag == null) {
    flag = false;
  }
  num2 = tmp.now_playing_num_cards;
  if (num2 == null) {
    num2 = 0;
  }
  trackClickstream(FRIENDS_LIST_VIEWED_CLICKSTREAM, obj2);
}
