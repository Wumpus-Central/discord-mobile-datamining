// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../../utils/AnalyticsUtils.tsx";
import isClickstreamEnabled from "../../clickstream/Clickstream.tsx";
import getTrackFriendsListViewedDataDefault from "getTrackFriendsListViewedData.native.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx");

export default function trackFriendsListViewed(source) {
  let str = source.tab_opened;
  const tmp = getTrackFriendsListViewedDataDefault();
  let obj = expandEventPropertiesDefault;
  obj = { tab_opened: str, source: source.source };
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
  obj[1] = num;
  let flag = tmp.now_playing_visible;
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  let num2 = tmp.now_playing_num_cards;
  if (num2 == null) {
    num2 = 0;
  }
  obj[3] = num2;
  isClickstreamEnabled.trackClickstream(AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM, obj);
};