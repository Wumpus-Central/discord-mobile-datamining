// === Module 17682: AutomodActionUtils ===

// Module 17682 (AutomodActionUtils)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import Constants from "Constants" /* 11474 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17679 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export const getRuleDefaultActionsFromConfig = function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  let closure_0 = { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "r" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "r" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  const arr = Array.from(defaultActionTypes.defaultActionTypes);
  return arr.map((item) => closure_0[item]);
};
export const getRuleActionsInOrder = function getRuleActionsInOrder(rule) {
  let closure_0 = rule;
  const obj = AutomodTriggerConfigs;
  const availableActionTypes = obj.getAvailableActionTypes(rule.triggerType);
  const mapped = availableActionTypes.map((item) => {
    actions = item;
    actions = actions.actions;
    return actions.find((type) => type.type === closure_0);
  });
  return mapped.filter(GlobalUtils.isNotNullish);
};
export const setRuleAction = function setRuleAction(rule, BLOCK_MESSAGE, arg2) {
  let tmp4;
  let closure_0 = BLOCK_MESSAGE;
  const actions = rule.actions;
  const found = actions.filter((type) => type.type !== BLOCK_MESSAGE);
  const obj = { actions: tmp4 };
  const merged = Object.assign(rule);
  tmp4 = found;
  if (null != arg2) {
    const items = [];
    items[HermesBuiltin.arraySpread(items, found, 0)] = arg2;
    tmp4 = items;
  }
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