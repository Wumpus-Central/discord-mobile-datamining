// === Module 17306: AutomodTriggerConfigs ===

// Module 17306 (AutomodTriggerConfigs)
import util from "util" /* 1115 */;
import guild_automod_ExperimentUtils from "guild_automod/ExperimentUtils" /* 9559 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(11341);
({ AutomodActionType, AutomodEventType, AutomodTriggerType } = Constants);
const mentionTotalLimit = Constants.MENTION_SPAM_LIMIT_DEFAULT;
let obj = { NEW: "new", RECOMMENDED: "recommended", BETA: "beta", ALPHA: "alpha" };
let obj2 = {};
let obj3 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.ffR2cM);
  },
  type: AutomodTriggerType.SPAM_LINK,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 0,
  availableActionTypes: new Set(),
  flags: null,
  defaultActionTypes: null
};
const set = new Set();
obj3.flags = new Set();
const set1 = new Set();
obj3.defaultActionTypes = new Set();
obj2[AutomodTriggerType.SPAM_LINK] = obj3;
const obj4 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.ffR2cM);
  },
  type: AutomodTriggerType.KEYWORD,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 6,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
let items = [, , ];
({ BLOCK_MESSAGE: arr[0], FLAG_TO_CHANNEL: arr[1], USER_COMMUNICATION_DISABLED: arr[2] } = AutomodActionType);
const set2 = new Set();
obj4.availableActionTypes = new Set(items);
const set3 = new Set(items);
obj4.flags = new Set();
const items1 = [AutomodActionType.BLOCK_MESSAGE];
const set4 = new Set();
obj4.defaultActionTypes = new Set(items1);
obj2[AutomodTriggerType.KEYWORD] = obj4;
const obj5 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t["puF/Os"]);
  },
  type: AutomodTriggerType.ML_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const items2 = [, ];
({ BLOCK_MESSAGE: arr3[0], FLAG_TO_CHANNEL: arr3[1] } = AutomodActionType);
const set5 = new Set(items1);
obj5.availableActionTypes = new Set(items2);
const set6 = new Set(items2);
obj5.flags = new Set([]);
const items3 = [AutomodActionType.BLOCK_MESSAGE];
const set7 = new Set([]);
obj5.defaultActionTypes = new Set(items3);
obj2[AutomodTriggerType.ML_SPAM] = obj5;
const obj6 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.LnGhZv);
  },
  type: AutomodTriggerType.DEFAULT_KEYWORD_LIST,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const items4 = [, ];
({ BLOCK_MESSAGE: arr5[0], FLAG_TO_CHANNEL: arr5[1] } = AutomodActionType);
const set8 = new Set(items3);
obj6.availableActionTypes = new Set(items4);
const set9 = new Set(items4);
obj6.flags = new Set([]);
const items5 = [AutomodActionType.BLOCK_MESSAGE];
const set10 = new Set([]);
obj6.defaultActionTypes = new Set(items5);
obj2[AutomodTriggerType.DEFAULT_KEYWORD_LIST] = obj6;
const obj7 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.pX7i6n);
  },
  type: AutomodTriggerType.MENTION_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const items6 = [, , ];
({ BLOCK_MESSAGE: arr7[0], FLAG_TO_CHANNEL: arr7[1], USER_COMMUNICATION_DISABLED: arr7[2] } = AutomodActionType);
const set11 = new Set(items5);
obj7.availableActionTypes = new Set(items6);
const set12 = new Set(items6);
obj7.flags = new Set([]);
const items7 = [AutomodActionType.BLOCK_MESSAGE];
const set13 = new Set([]);
obj7.defaultActionTypes = new Set(items7);
obj2[AutomodTriggerType.MENTION_SPAM] = obj7;
const obj8 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.q1L2v8);
  },
  type: AutomodTriggerType.USER_PROFILE,
  eventType: AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
  perGuildMaxCount: 1,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const items8 = [, ];
({ QUARANTINE_USER: arr9[0], FLAG_TO_CHANNEL: arr9[1] } = AutomodActionType);
const set14 = new Set(items7);
obj8.availableActionTypes = new Set(items8);
const set15 = new Set(items8);
obj8.flags = new Set([]);
const items9 = [AutomodActionType.QUARANTINE_USER];
const set16 = new Set([]);
obj8.defaultActionTypes = new Set(items9);
obj2[AutomodTriggerType.USER_PROFILE] = obj8;
const obj9 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.ZQr92M);
  },
  type: AutomodTriggerType.SERVER_POLICY,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const items10 = [AutomodActionType.FLAG_TO_CHANNEL];
const set17 = new Set(items9);
obj9.availableActionTypes = new Set(items10);
const items11 = [obj.ALPHA];
const set18 = new Set(items10);
obj9.flags = new Set(items11);
const set19 = new Set(items11);
obj9.defaultActionTypes = new Set();
obj2[AutomodTriggerType.SERVER_POLICY] = obj9;
const obj10 = {
  getDefaultRuleName() {
    const intl = util.intl;
    return intl.string(util.t.VxE3o6);
  },
  type: AutomodTriggerType.APPLICATION,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: Constants.MAX_APPLICATION_RULES_PER_GUILD,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
const set20 = new Set();
obj10.availableActionTypes = new Set();
const set21 = new Set();
obj10.flags = new Set();
const set22 = new Set();
obj10.defaultActionTypes = new Set();
obj2[AutomodTriggerType.APPLICATION] = obj10;
const obj11 = { MEMBERS: "members", CONTENT: "content" };
const obj12 = { [obj11.MEMBERS]: items12, [obj11.CONTENT]: items13 };
items12 = [obj2[AutomodTriggerType.USER_PROFILE]];
items13 = [obj2[AutomodTriggerType.SERVER_POLICY], obj2[AutomodTriggerType.MENTION_SPAM], obj2[AutomodTriggerType.ML_SPAM], obj2[AutomodTriggerType.DEFAULT_KEYWORD_LIST], obj2[AutomodTriggerType.KEYWORD], obj2[AutomodTriggerType.APPLICATION]];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodTriggerConfigs.tsx");

export const AutomodTriggerConfigFlags = obj;
export const triggerConfigs = obj2;
export const AutomodTriggerCategory = obj11;
export const AUTOMOD_RULE_CONFIGS_BY_CATEGORY = obj12;
export const checkTriggerTypeForFlag = function checkTriggerTypeForFlag(arg0, arg1) {
  const flags = obj2[arg0].flags;
  return flags.has(arg1);
};
export const getAvailableActionTypes = function getAvailableActionTypes(triggerType) {
  return Array.from(obj2[triggerType].availableActionTypes);
};
export const validateRuleByTriggerConfigOrThrow = function validateRuleByTriggerConfigOrThrow(actions, arr) {
  ({ id: require, triggerType } = actions);
  actions = actions.actions;
  let availableActionTypes = tmp;
  if (arr.filter((id) => {
    let tmp = require !== id.id;
    if (tmp) {
      tmp = id.triggerType === triggerType;
    }
    return tmp;
  }).length > obj2[triggerType].perGuildMaxCount) {
    const _Error3 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("You have exceeded the maximum number of rules of type " + triggerType);
    throw error;
  } else if (actions.some((type) => {
    availableActionTypes = availableActionTypes.availableActionTypes;
    return !availableActionTypes.has(type.type);
  })) {
    const _Error2 = Error;
    const error1 = new Error("You have provided an action that is not available for this trigger type");
    throw error1;
  } else if (actions.eventType !== tmp.eventType) {
    const _Error = Error;
    const error2 = new Error("You have provided an event type that is not available for this trigger type");
    throw error2;
  }
};
export const useAvailableTriggerTypes = function useAvailableTriggerTypes(guildId) {
  isUserProfileRuleEnabled = isUserProfileRuleEnabled(isApplicationRuleEnabled[3]).useIsUserProfileRuleEnabled(guildId);
  const obj = isUserProfileRuleEnabled(isApplicationRuleEnabled[3]);
  isApplicationRuleEnabled = isUserProfileRuleEnabled(isApplicationRuleEnabled[4]).useIsApplicationRuleEnabled(guildId);
  const items = [isUserProfileRuleEnabled, isApplicationRuleEnabled];
  return noop.useMemo(() => {
    const keys = Object.keys(obj12);
    return keys.reduce((acc, item) => {
      const found = obj12[item].filter((type) => {
        let tmp2 = type.type !== constants.SERVER_POLICY;
        if (tmp2) {
          let tmp3 = type.type === constants.USER_PROFILE;
          if (tmp3) {
            tmp3 = !closure_1_0;
          }
          let tmp5 = !tmp3;
          if (!tmp3) {
            let tmp6 = type.type === constants.APPLICATION;
            if (tmp6) {
              tmp6 = !closure_1_1;
            }
            let tmp8 = !tmp6;
            if (!tmp6) {
              tmp8 = type.perGuildMaxCount > 0;
            }
            tmp5 = tmp8;
          }
          tmp2 = tmp5;
        }
        return tmp2;
      });
      acc[item] = found.map((type) => type.type);
      return acc;
    }, { [closure_2_6.MEMBERS]: [], [closure_2_6.CONTENT]: [] });
  }, items);
};
export const getDefaultTriggerMetadataForTriggerType = function getDefaultTriggerMetadataForTriggerType(triggerType, guildId) {
  guild_automod_ExperimentUtils;
  if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
    obj2 = { allowList: [], presets: [] };
    return obj2;
  } else {
    if (AutomodTriggerType.USER_PROFILE !== triggerType) {
      if (AutomodTriggerType.KEYWORD !== triggerType) {
        if (AutomodTriggerType.MENTION_SPAM === triggerType) {
          const obj = { mentionTotalLimit, mentionRaidProtectionEnabled: tmp2 };
          return obj;
        } else if (AutomodTriggerType.APPLICATION === triggerType) {
          return { applicationId: null };
        } else if (AutomodTriggerType.ML_SPAM !== triggerType) {
          const SERVER_POLICY = AutomodTriggerType.SERVER_POLICY;
        }
      }
    }
    const obj3 = { keywordFilter: [], regexPatterns: [], allowList: [] };
    return obj3;
  }
};