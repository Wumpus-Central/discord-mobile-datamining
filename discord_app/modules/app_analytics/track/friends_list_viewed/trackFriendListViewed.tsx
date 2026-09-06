// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Clickstream from "../../clickstream/Clickstream.tsx";
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(source) {
  let str = source.tab_opened;
  const tmp = getTrackFriendsListViewedDataDefault();
  let obj = { tab_opened: str, source: source.source };
  const merged = Object.assign(tmp);
  obj.track(AnalyticEvents.FRIENDS_LIST_VIEWED, obj);
  if (str == null) {
    str = "tabless";
  }
  obj = { tab_opened: str, num_friends: null, now_playing_visible: null, now_playing_num_cards: null };
  let num = tmp.num_friends;
  if (num == null) {
    num = 0;
  }
  obj.num_friends = num;
  let flag = tmp.now_playing_visible;
  if (flag == null) {
    flag = false;
  }
  obj.now_playing_visible = flag;
  let num2 = tmp.now_playing_num_cards;
  if (num2 == null) {
    num2 = 0;
  }
  obj.now_playing_num_cards = num2;
  Clickstream.trackClickstream(AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, obj);
}
