// === Module 17544: AutomodActionUtils ===

// Module 17544 (AutomodActionUtils)
import Constants from "Constants" /* 11862 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  let obj = { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "Array" } };
  obj = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "Array" } };
  obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  closure_0 = { [closure_1_0.BLOCK_MESSAGE]: obj, [closure_1_0.FLAG_TO_CHANNEL]: obj, [closure_1_0.USER_COMMUNICATION_DISABLED]: obj, [closure_1_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  return Array.from(defaultActionTypes.defaultActionTypes).map((item) => closure_0[item]);
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
  let obj = { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "Array" } };
  obj = { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "Array" } };
  obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  return { [closure_1_0.BLOCK_MESSAGE]: obj, [closure_1_0.FLAG_TO_CHANNEL]: obj, [closure_1_0.USER_COMMUNICATION_DISABLED]: obj, [closure_1_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
};