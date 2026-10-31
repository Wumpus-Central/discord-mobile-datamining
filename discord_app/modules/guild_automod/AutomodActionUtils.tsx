// === Module 19672: AutomodActionUtils ===

// Module 19672 (AutomodActionUtils)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import Constants from "Constants" /* 13277 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 19669 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/AutomodActionUtils.tsx");

export function getRuleDefaultActionsFromConfig(defaultActionTypes) {
  closure_0 = { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "Array" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "Array" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
  return Array.from(defaultActionTypes.defaultActionTypes).map((item) => closure_0[item]);
}
export function getRuleActionsInOrder(rule) {
  let actions = rule;
  const availableActionTypes = AutomodTriggerConfigs.getAvailableActionTypes(rule.triggerType);
  const mapped = availableActionTypes.map((item) => {
    actions = item;
    actions = actions.actions;
    return actions.find((type) => type.type === closure_0);
  });
  return mapped.filter(GlobalUtils.isNotNullish);
}
export function setRuleAction(actions, BLOCK_MESSAGE, arg2) {
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
}
export function isActionFlagToChannel(type) {
  return type.type === AutomodActionType.FLAG_TO_CHANNEL;
}
export function isActionUserCommunicationDisabled(type) {
  return type.type === AutomodActionType.USER_COMMUNICATION_DISABLED;
}
export function isActionBlockMessage(type) {
  return type.type === AutomodActionType.BLOCK_MESSAGE;
}
export function isActionQuarantineUser(type) {
  return type.type === AutomodActionType.QUARANTINE_USER;
}
export function getDefaultActions() {
  return { [closure_1_2.BLOCK_MESSAGE]: { type: AutomodActionType.BLOCK_MESSAGE, metadata: { customMessage: "Array" } }, [closure_1_2.FLAG_TO_CHANNEL]: { type: AutomodActionType.FLAG_TO_CHANNEL, metadata: { channelId: "Array" } }, [closure_1_2.USER_COMMUNICATION_DISABLED]: { type: AutomodActionType.USER_COMMUNICATION_DISABLED, metadata: { durationSeconds: 60 } }, [closure_1_2.QUARANTINE_USER]: { type: AutomodActionType.QUARANTINE_USER, metadata: {} } };
}