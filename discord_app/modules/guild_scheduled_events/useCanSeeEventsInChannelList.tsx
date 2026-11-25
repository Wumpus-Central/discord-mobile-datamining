// === Module 13284: useCanSeeEventsInChannelList ===

// Module 13284 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8570 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13285 */;
import size from "module_2" /* 2 */;

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
};