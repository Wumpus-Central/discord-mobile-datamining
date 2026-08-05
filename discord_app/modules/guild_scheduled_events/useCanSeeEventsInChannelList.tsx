// discord_app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
import { useIsHubForGuild } from "../hub/useIsHubForGuild.tsx";
import { useCanCreateAnEvent } from "useCanCreateAnEvent.tsx";
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = useCanCreateAnEvent(arg0);
  const tmp2 = useIsHubForGuild(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};