// discord_app/modules/user_profile/native/UserProfileActivityCardBadges.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(13005).PartyBadge, activity(13005).TimestampBadge];
    let items3 = items;
  } else if (activity.type === ActivityTypes.LISTENING) {
    const items1 = [activity(13005).TimestampBadge];
    items3 = items1;
  } else if (activity.type === ActivityTypes.WATCHING) {
    const items2 = [activity(13005).TimestampBadge, activity(13005).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = {
      style: activity.style,
      children: items3.map((item, index) => <item key={index} activity={activity} />),
    };
    tmp8 = (
      <View style={activity.style}>
        {items3.map((item, index) => (
          <item key={index} activity={activity} />
        ))}
      </View>
    );
  }
  return tmp8;
}
