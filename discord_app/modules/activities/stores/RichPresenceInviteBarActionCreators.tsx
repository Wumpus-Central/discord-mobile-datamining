// === Module 11474: RichPresenceInviteBarActionCreators ===

// Module 11474 (RichPresenceInviteBarActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  const obj = { type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: activitySessionKey, channelId: id };
  obj.dispatch(obj);
};
export const dismissSession = function dismissSession(sessionKey) {
  const obj = { type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey };
  obj.dispatch(obj);
};