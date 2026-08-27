// === Module 17041: getRuleDefaultActionsFromConfig ===

// Module 17041 (getRuleDefaultActionsFromConfig)
import set from "set" /* 2 */;
import AutomodEventType from "AutomodEventType" /* 11349 */;

let AutomodActionType = AutomodEventType.AutomodActionType;
const result = set.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  let obj = { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } };
  obj = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } };
  obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  AutomodActionType = { [closure_0.BLOCK_MESSAGE]: obj, [closure_0.FLAG_TO_CHANNEL]: obj, [closure_0.USER_COMMUNICATION_DISABLED]: obj, [closure_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  return Array.from(defaultActionTypes.defaultActionTypes).map((arg0) => table[arg0]);
};
export const isActionFlagToChannel = function isActionFlagToChannel(type) {
  return type.type === AutomodActionType.FLAG_TO_CHANNEL;
};
export const isActionUserCommunicationDisabled = function isActionUserCommunicationDisabled(type) {
  return type.type === AutomodActionType.USER_COMMUNICATION_DISABLED;
};
export const isActionBlockMessage = function isActionBlockMessage(type) {
  return type.type === AutomodActionType.BLOCK_MESSAGE;
};
export const isActionQuarantineUser = function isActionQuarantineUser(type) {
  return type.type === AutomodActionType.QUARANTINE_USER;
};
export const getDefaultActions = function getDefaultActions() {
  let obj = { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } };
  obj = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } };
  obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  return { [closure_0.BLOCK_MESSAGE]: obj, [closure_0.FLAG_TO_CHANNEL]: obj, [closure_0.USER_COMMUNICATION_DISABLED]: obj, [closure_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
};