// discord_app/modules/activities/stores/RichPresenceInviteBarActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  DispatcherDefault.dispatch({
    type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED",
    sessionKey: activitySessionKey,
    channelId: id,
  });
};
export const dismissSession = function dismissSession(sessionKey) {
  DispatcherDefault.dispatch({ type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey });
};
