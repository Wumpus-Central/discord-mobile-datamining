// discord_app/modules/user_profile/native/UserProfileActivityCardBadges.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === activity(5896).ActivityTypes.PLAYING) {
    items = [tmp(15066).PartyBadge, tmp(15066).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp(5896).ActivityTypes.LISTENING) {
    const items1 = [tmp(15066).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp(5896).ActivityTypes.WATCHING) {
    const items2 = [tmp(15066).TimestampBadge, tmp(15066).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp3 = null;
  if (0 !== items3.length) {
    const obj = {
      style: activity.style,
      children: items3.map((item, index) => <item key={index} activity={activity} />),
    };
    tmp3 = (
      <View style={activity.style}>
        {items3.map((item, index) => (
          <item key={index} activity={activity} />
        ))}
      </View>
    );
  }
  return tmp3;
}
