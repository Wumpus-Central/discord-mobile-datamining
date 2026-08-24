// discord_app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
import set from "../../../_runtime/00002_set.js";
import useCanCreateAnEventDefault from "useCanCreateAnEvent.tsx";
import useIsHubForGuildDefault from "../hub/useIsHubForGuild.tsx";

const result = set.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = useCanCreateAnEventDefault(arg0);
  const tmp2 = useIsHubForGuildDefault(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};