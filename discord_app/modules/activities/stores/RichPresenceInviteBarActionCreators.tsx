// === Module 10522: markChannelInvited ===

// Module 10522 (markChannelInvited)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/activities/stores/RichPresenceInviteBarActionCreators.tsx");

export const markChannelInvited = function markChannelInvited(activitySessionKey, id) {
  let obj = dispatcherDefault;
  obj = { type: "RICH_PRESENCE_INVITE_BAR_CHANNEL_INVITED", sessionKey: activitySessionKey, channelId: id };
  obj.dispatch(obj);
};
export const dismissSession = function dismissSession(sessionKey) {
  let obj = dispatcherDefault;
  obj = { type: "RICH_PRESENCE_INVITE_BAR_SESSION_DISMISSED", sessionKey };
  obj.dispatch(obj);
};