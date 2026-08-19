// === Module 12101: UserProfileActivityCardBadges ===

// Module 12101 (UserProfileActivityCardBadges)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ActivityTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(12102).PartyBadge, activity(12102).TimestampBadge];
    let items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [activity(12102).TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [activity(12102).TimestampBadge, activity(12102).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: null, children: null };
    obj[0] = activity.style;
    obj[1] = items3.map((item, index) => <item key={index} activity={activity} />);
    tmp8 = <View style={null}>{null}</View>;
  }
  return tmp8;
};