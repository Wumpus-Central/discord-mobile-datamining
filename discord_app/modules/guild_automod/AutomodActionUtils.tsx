// discord_app/modules/guild_automod/AutomodActionUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import AutomodEventType from "Constants.tsx";

let AutomodActionType = AutomodEventType.AutomodActionType;
const result = obj132.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  const obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  AutomodActionType = { [closure_0.BLOCK_MESSAGE]: obj, [closure_0.FLAG_TO_CHANNEL]: obj, [closure_0.USER_COMMUNICATION_DISABLED]: obj, [closure_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  return Array.from(defaultActionTypes.defaultActionTypes).map((item, index) => table[item]);
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
  const obj = { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } };
  return { [closure_0.BLOCK_MESSAGE]: obj, [closure_0.FLAG_TO_CHANNEL]: obj, [closure_0.USER_COMMUNICATION_DISABLED]: obj, [closure_0.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
};