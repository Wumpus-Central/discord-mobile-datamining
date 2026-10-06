// === Module 17725: AutomodTriggerConfigs ===

// Module 17725 (AutomodTriggerConfigs)
import intl2 from "intl" /* 1126 */;
import guild_automod_PermissionUtils from "guild_automod/PermissionUtils" /* 17038 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11487 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let availableActionTypes;

let AutomodActionType;
let AutomodEventType;
let AutomodTriggerType;
let items;
let items1;
let items10;
let items11;
let items12;
let items13;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
({ AutomodActionType, AutomodEventType, AutomodTriggerType } = Constants);
const MENTION_SPAM_LIMIT_DEFAULT = Constants.MENTION_SPAM_LIMIT_DEFAULT;
let obj = { NEW: "new", RECOMMENDED: "recommended", BETA: "beta", ALPHA: "alpha" };
let obj2 = {};
let obj3 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ffR2cM);
  },
  type: AutomodTriggerType.SPAM_LINK,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 0,
  availableActionTypes: new Set(),
  flags: new Set(),
  defaultActionTypes: new Set()
};
const MAX_APPLICATION_RULES_PER_GUILD = Constants.MAX_APPLICATION_RULES_PER_GUILD;
const SPAM_LINK = AutomodTriggerType.SPAM_LINK;
new Set();
new Set();
obj2[SPAM_LINK] = obj3;
const obj4 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ffR2cM);
  },
  type: AutomodTriggerType.KEYWORD,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 6,
  availableActionTypes: new Set(items),
  flags: new Set(),
  defaultActionTypes: new Set(items1)
};
items = [, , ];
({ BLOCK_MESSAGE: arr[0], FLAG_TO_CHANNEL: arr[1], USER_COMMUNICATION_DISABLED: arr[2] } = AutomodActionType);
const KEYWORD = AutomodTriggerType.KEYWORD;
new Set();
new Set(items);
items1 = [AutomodActionType.BLOCK_MESSAGE];
new Set();
obj2[KEYWORD] = obj4;
const obj5 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t["puF/Os"]);
  },
  type: AutomodTriggerType.ML_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: new Set(items2),
  flags: new Set([]),
  defaultActionTypes: new Set(items3)
};
items2 = [, ];
({ BLOCK_MESSAGE: arr3[0], FLAG_TO_CHANNEL: arr3[1] } = AutomodActionType);
const ML_SPAM = AutomodTriggerType.ML_SPAM;
new Set(items1);
new Set(items2);
items3 = [AutomodActionType.BLOCK_MESSAGE];
new Set([]);
obj2[ML_SPAM] = obj5;
const obj6 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.LnGhZv);
  },
  type: AutomodTriggerType.DEFAULT_KEYWORD_LIST,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: new Set(items4),
  flags: new Set([]),
  defaultActionTypes: new Set(items5)
};
items4 = [, ];
({ BLOCK_MESSAGE: arr5[0], FLAG_TO_CHANNEL: arr5[1] } = AutomodActionType);
const DEFAULT_KEYWORD_LIST = AutomodTriggerType.DEFAULT_KEYWORD_LIST;
new Set(items3);
new Set(items4);
items5 = [AutomodActionType.BLOCK_MESSAGE];
new Set([]);
obj2[DEFAULT_KEYWORD_LIST] = obj6;
const obj7 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.pX7i6n);
  },
  type: AutomodTriggerType.MENTION_SPAM,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: new Set(items6),
  flags: new Set([]),
  defaultActionTypes: new Set(items7)
};
items6 = [, , ];
({ BLOCK_MESSAGE: arr7[0], FLAG_TO_CHANNEL: arr7[1], USER_COMMUNICATION_DISABLED: arr7[2] } = AutomodActionType);
const MENTION_SPAM = AutomodTriggerType.MENTION_SPAM;
new Set(items5);
new Set(items6);
items7 = [AutomodActionType.BLOCK_MESSAGE];
new Set([]);
obj2[MENTION_SPAM] = obj7;
const obj8 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.q1L2v8);
  },
  type: AutomodTriggerType.USER_PROFILE,
  eventType: AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
  perGuildMaxCount: 1,
  availableActionTypes: new Set(items8),
  flags: new Set([]),
  defaultActionTypes: new Set(items9)
};
items8 = [, ];
({ QUARANTINE_USER: arr9[0], FLAG_TO_CHANNEL: arr9[1] } = AutomodActionType);
const USER_PROFILE = AutomodTriggerType.USER_PROFILE;
new Set(items7);
new Set(items8);
items9 = [AutomodActionType.QUARANTINE_USER];
new Set([]);
obj2[USER_PROFILE] = obj8;
const obj9 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ZQr92M);
  },
  type: AutomodTriggerType.SERVER_POLICY,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 1,
  availableActionTypes: new Set(items10),
  flags: new Set(items11),
  defaultActionTypes: new Set()
};
items10 = [AutomodActionType.FLAG_TO_CHANNEL];
let SERVER_POLICY = AutomodTriggerType.SERVER_POLICY;
new Set(items9);
items11 = [obj.ALPHA];
new Set(items10);
new Set(items11);
obj2[SERVER_POLICY] = obj9;
const APPLICATION = AutomodTriggerType.APPLICATION;
const obj10 = {
  getDefaultRuleName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.VxE3o6);
  },
  type: AutomodTriggerType.APPLICATION,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: MAX_APPLICATION_RULES_PER_GUILD,
  availableActionTypes: new Set(),
  flags: new Set(),
  defaultActionTypes: new Set()
};
new Set();
new Set();
new Set();
obj2[APPLICATION] = obj10;
const obj11 = { MEMBERS: "members", CONTENT: "content" };
const obj12 = { [obj11.MEMBERS]: items12, [obj11.CONTENT]: items13 };
items12 = [obj2[AutomodTriggerType.USER_PROFILE]];
items13 = [obj2[AutomodTriggerType.SERVER_POLICY], obj2[AutomodTriggerType.MENTION_SPAM], obj2[AutomodTriggerType.ML_SPAM], obj2[AutomodTriggerType.DEFAULT_KEYWORD_LIST], obj2[AutomodTriggerType.KEYWORD], obj2[AutomodTriggerType.APPLICATION]];
new Set();
const tmp27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isApplicationRuleEnabled;
  let isUserProfileRuleEnabled;
  const obj = isUserProfileRuleEnabled(isApplicationRuleEnabled[4]);
  const cResult = obj.c(3);
  obj2 = isUserProfileRuleEnabled(isApplicationRuleEnabled[5]);
  isUserProfileRuleEnabled = obj2.useIsUserProfileRuleEnabled(arg0);
  const obj3 = isUserProfileRuleEnabled(isApplicationRuleEnabled[6]);
  isApplicationRuleEnabled = obj3.useIsApplicationRuleEnabled(arg0);
  if (cResult[0] === isApplicationRuleEnabled) {
    let tmp4;
    if (cResult[1] === isUserProfileRuleEnabled) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const keys = Object.keys(obj12);
  const reduced = keys.reduce((acc, item) => {
    const arr = obj12[item];
    const found = arr.filter((type) => {
      let tmp2 = type.type !== constants.SERVER_POLICY;
      if (tmp2) {
        let tmp5 = !(type.type === constants.USER_PROFILE && !isUserProfileRuleEnabled);
        const tmp3 = type.type === constants.USER_PROFILE && !isUserProfileRuleEnabled;
        if (tmp5) {
          tmp5 = !(type.type === constants.APPLICATION && !isApplicationRuleEnabled) && type.perGuildMaxCount > 0;
          const tmp8 = !(type.type === constants.APPLICATION && !isApplicationRuleEnabled) && type.perGuildMaxCount > 0;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
    acc[item] = found.map((type) => type.type);
    return acc;
  }, { [closure_6.MEMBERS]: [], [closure_6.CONTENT]: [] });
  cResult[0] = isApplicationRuleEnabled;
  cResult[1] = isUserProfileRuleEnabled;
  cResult[2] = reduced;
  tmp4 = reduced;
}) : ((arg0) => {
  let isApplicationRuleEnabled;
  let isUserProfileRuleEnabled;
  const obj = isUserProfileRuleEnabled(isApplicationRuleEnabled[5]);
  isUserProfileRuleEnabled = obj.useIsUserProfileRuleEnabled(arg0);
  obj2 = isUserProfileRuleEnabled(isApplicationRuleEnabled[6]);
  isApplicationRuleEnabled = obj2.useIsApplicationRuleEnabled(arg0);
  const items = [isUserProfileRuleEnabled, isApplicationRuleEnabled];
  return react.useMemo(() => {
    const keys = Object.keys(obj12);
    return keys.reduce((acc, item) => {
      const arr = obj12[item];
      const found = arr.filter((type) => {
        let tmp2 = type.type !== constants.SERVER_POLICY;
        if (tmp2) {
          let tmp5 = !(type.type === constants.USER_PROFILE && !closure_1_0);
          const tmp3 = type.type === constants.USER_PROFILE && !closure_1_0;
          if (tmp5) {
            tmp5 = !(type.type === constants.APPLICATION && !closure_1_1) && type.perGuildMaxCount > 0;
            const tmp8 = !(type.type === constants.APPLICATION && !closure_1_1) && type.perGuildMaxCount > 0;
          }
          tmp2 = tmp5;
        }
        return tmp2;
      });
      acc[item] = found.map((type) => type.type);
      return acc;
    }, { [closure_2_6.MEMBERS]: [], [closure_2_6.CONTENT]: [] });
  }, items);
});
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
  let closure_129_0;
  let triggerType;
  ({ id: closure_129_0, triggerType } = actions);
  actions = actions.actions;
  const tmp = obj2[triggerType];
  let closure_2 = tmp;
  const eventType = actions.eventType;
  if (arr.filter((id) => closure_1_0 !== id.id && id.triggerType === triggerType).length > tmp.perGuildMaxCount) {
    const _Error3 = Error;
    const _HermesInternal = HermesInternal;
    const self5 = this;
    const self6 = this;
    const error = new Error("You have exceeded the maximum number of rules of type " + triggerType);
    throw error;
  } else if (actions.some((type) => {
    availableActionTypes = availableActionTypes.availableActionTypes;
    return !availableActionTypes.has(type.type);
  })) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error1 = new Error("You have provided an action that is not available for this trigger type");
    throw error1;
  } else if (eventType !== tmp.eventType) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error2 = new Error("You have provided an event type that is not available for this trigger type");
    throw error2;
  }
};
export const useAvailableTriggerTypes = tmp27;
export const getDefaultTriggerMetadataForTriggerType = function getDefaultTriggerMetadataForTriggerType(triggerType, guildId) {
  if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
    return { allowList: [], presets: [] };
  } else {
    if (AutomodTriggerType.USER_PROFILE !== triggerType) {
      if (AutomodTriggerType.KEYWORD !== triggerType) {
        if (AutomodTriggerType.MENTION_SPAM === triggerType) {
          const obj = { mentionTotalLimit: MENTION_SPAM_LIMIT_DEFAULT, mentionRaidProtectionEnabled: obj2.hasMentionRaidLimitAccess(guildId) };
          obj2 = guild_automod_PermissionUtils;
          return obj;
        } else if (AutomodTriggerType.APPLICATION === triggerType) {
          return { applicationId: null };
        } else if (AutomodTriggerType.ML_SPAM !== triggerType) {
          const SERVER_POLICY = AutomodTriggerType.SERVER_POLICY;
        }
      }
    }
    return { keywordFilter: [], regexPatterns: [], allowList: [] };
  }
};