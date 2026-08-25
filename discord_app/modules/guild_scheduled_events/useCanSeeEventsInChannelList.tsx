// === Module 11941: useCanSeeEventsInChannelList ===

// Module 11941 (useCanSeeEventsInChannelList)
import set from "set" /* 2 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9184 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 11942 */;

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