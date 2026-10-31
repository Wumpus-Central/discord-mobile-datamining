// === Module 14850: UserProfileActivityCardBadges ===

// Module 14850 (UserProfileActivityCardBadges)
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === activity(5762).ActivityTypes.PLAYING) {
    const items = [tmp(14851).PartyBadge, tmp(14851).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp(5762).ActivityTypes.LISTENING) {
    const items1 = [tmp(14851).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp(5762).ActivityTypes.WATCHING) {
    const items2 = [tmp(14851).TimestampBadge, tmp(14851).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp3 = null;
  if (0 !== items3.length) {
    const obj = { style: activity.style, children: items3.map((item, index) => <item key={index} activity={activity} />) };
    tmp3 = <View style={activity.style}>{items3.map((item, index) => <item key={index} activity={activity} />)}</View>;
  }
  return tmp3;
};