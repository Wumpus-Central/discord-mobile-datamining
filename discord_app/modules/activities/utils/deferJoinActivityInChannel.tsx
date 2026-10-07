// discord_app/modules/activities/utils/deferJoinActivityInChannel.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/deferJoinActivityInChannel.tsx");

export default function deferJoinActivityApplication(arg0) {
  ({ channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin } = arg0);
  DispatcherDefault.dispatch({
    type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
    channelId,
    applicationId,
    intent,
    inviterUserId,
    analyticsLocations,
    commandOrigin,
  });
}
