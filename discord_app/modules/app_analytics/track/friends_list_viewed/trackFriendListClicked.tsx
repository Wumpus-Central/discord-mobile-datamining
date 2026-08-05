// discord_app/modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/trackFriendListClicked.tsx");

export default function trackFriendsListClicked(arg0) {
  let source;
  let tab_opened;
  ({ tab_opened, source } = arg0);
  let obj = require("../../../../utils/AnalyticsUtils.tsx");
  obj = { tab_opened, source };
  const merged = Object.assign(require("getTrackFriendsListViewedData.native.tsx")());
  obj.track(AnalyticEvents.FRIENDS_LIST_CLICKED, obj);
};