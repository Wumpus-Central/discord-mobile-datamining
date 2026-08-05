// discord_app/modules/activities/utils/deferJoinActivityInChannel.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/activities/utils/deferJoinActivityInChannel.tsx");

export default function deferJoinActivityApplication(arg0) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let commandOrigin;
  let intent;
  let inviterUserId;
  ({ channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin } = arg0);
  dispatcher.dispatch({ type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN", channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin });
};