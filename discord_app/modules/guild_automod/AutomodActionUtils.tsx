// === Module 18026: AutomodActionUtils ===

// Module 18026 (AutomodActionUtils)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Constants from "Constants" /* 12198 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 18025 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  closure_0 = { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  return Array.from(defaultActionTypes.defaultActionTypes).map((item) => closure_0[item]);
};
export const getRuleActionsInOrder = function getRuleActionsInOrder(rule) {
  let actions = rule;
  const availableActionTypes = AutomodTriggerConfigs.getAvailableActionTypes(rule.triggerType);
  const mapped = availableActionTypes.map((item) => {
    actions = item;
    actions = actions.actions;
    return actions.find((type) => type.type === closure_0);
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};
export const setRuleAction = function setRuleAction(actions, BLOCK_MESSAGE, arg2) {
  closure_0 = BLOCK_MESSAGE;
  actions = actions.actions;
  const found = actions.filter((type) => type.type !== closure_0);
  const obj = {};
  const merged = Object.assign(actions);
  let tmp3 = found;
  if (null != arg2) {
    const items = [];
    items[HermesBuiltin.arraySpread(found, 0)] = arg2;
    tmp3 = items;
  }
  obj.actions = tmp3;
  return obj;
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
  return { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
};