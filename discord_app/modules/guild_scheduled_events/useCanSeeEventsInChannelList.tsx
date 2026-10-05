// discord_app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
import useGuildScheduledEventsDefault from "useGuildScheduledEvents.tsx";
import useCanCreateAnEventDefault from "useCanCreateAnEvent.tsx";
import useIsHubForGuildDefault from "../hub/useIsHubForGuild.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = useCanCreateAnEventDefault(arg0);
      const arr = useGuildScheduledEventsDefault(arg0);
      let tmp3 = !useIsHubForGuildDefault(arg0);
      useIsHubForGuildDefault(arg0);
      if (tmp3) {
        if (!tmp) {
          tmp = arr.length > 0;
        }
        tmp3 = tmp;
      }
      return tmp3;
    }
  : (arg0) => {
      let tmp = useCanCreateAnEventDefault(arg0);
      const arr = useGuildScheduledEventsDefault(arg0);
      let tmp3 = !useIsHubForGuildDefault(arg0);
      useIsHubForGuildDefault(arg0);
      if (tmp3) {
        if (!tmp) {
          tmp = arr.length > 0;
        }
        tmp3 = tmp;
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default tmp2;
