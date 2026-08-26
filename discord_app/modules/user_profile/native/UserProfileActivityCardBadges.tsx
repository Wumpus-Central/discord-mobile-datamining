// === Module 12557: UserProfileActivityCardBadges ===

// Module 12557 (UserProfileActivityCardBadges)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ActivityTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(12558).PartyBadge, activity(12558).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp.LISTENING) {
    const items1 = [activity(12558).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp.WATCHING) {
    const items2 = [activity(12558).TimestampBadge, activity(12558).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: null, children: null };
    obj[0] = activity.style;
    obj[1] = items3.map((arg0, arg1) => closure_1_4(arg0, { activity }, arg1));
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
};