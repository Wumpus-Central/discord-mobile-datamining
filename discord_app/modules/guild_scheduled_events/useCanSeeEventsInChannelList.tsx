// discord_app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
import useCanCreateAnEventDefault from "useCanCreateAnEvent.tsx";
import useIsHubForGuildDefault from "../hub/useIsHubForGuild.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

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
}
