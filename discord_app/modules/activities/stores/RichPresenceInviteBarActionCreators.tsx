// === Module 10675: markChannelInvited ===

// Module 10675 (markChannelInvited)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  const obj = { type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: activitySessionKey, channelId: id };
  obj.dispatch(obj);
};
export const dismissSession = function dismissSession(sessionKey) {
  const obj = { type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey };
  obj.dispatch(obj);
};