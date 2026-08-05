// discord_app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = require("useCanCreateAnEvent.tsx")(arg0);
  const tmp2 = require("../hub/useIsHubForGuild.tsx")(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};