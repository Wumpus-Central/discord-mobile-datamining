// === Module 11620: RichPresenceInviteBarActionCreators ===

// Module 11620 (RichPresenceInviteBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  DispatcherDefault.dispatch({ type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: activitySessionKey, channelId: id });
};
export const dismissSession = function dismissSession(sessionKey) {
  DispatcherDefault.dispatch({ type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey });
};