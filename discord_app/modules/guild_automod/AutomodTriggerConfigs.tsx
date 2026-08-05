// discord_app/modules/guild_automod/AutomodTriggerConfigs.tsx
import noop from "noop";
import AutomodEventType from "AutomodEventType";
import set from "getSystemLocale";

let AutomodActionType;
let AutomodEventType;
let AutomodTriggerType;
const require = arg1;
({ AutomodActionType, AutomodEventType, AutomodTriggerType } = AutomodEventType);
let closure_4 = AutomodEventType.MENTION_SPAM_LIMIT_DEFAULT;
let obj = { NEW: "new", RECOMMENDED: "recommended", BETA: "beta", ALPHA: "alpha" };
obj = {};
obj = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ffR2cM);
  },
  type: AutomodTriggerType.SPAM_LINK,
  eventType: AutomodEventType.MESSAGE_SEND,
  perGuildMaxCount: 0,
  availableActionTypes: null,
  flags: null,
  defaultActionTypes: null
};
let set = new Set();
obj[4] = set;
obj[5] = new Set();
const set1 = new Set();
obj[6] = new Set();
obj[AutomodTriggerType.SPAM_LINK] = obj;
const obj1 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ffR2cM);
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
obj1[4] = new Set(items);
const set3 = new Set(items);
obj1[5] = new Set();
const items1 = [AutomodActionType.BLOCK_MESSAGE];
const set4 = new Set();
obj1[6] = new Set(items1);
obj[AutomodTriggerType.KEYWORD] = obj1;
const obj2 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["puF/Os"]);
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
obj2[4] = new Set(items2);
const set6 = new Set(items2);
obj2[5] = new Set([]);
const items3 = [AutomodActionType.BLOCK_MESSAGE];
const set7 = new Set([]);
obj2[6] = new Set(items3);
obj[AutomodTriggerType.ML_SPAM] = obj2;
const obj3 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LnGhZv);
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
obj3[4] = new Set(items4);
const set9 = new Set(items4);
obj3[5] = new Set([]);
const items5 = [AutomodActionType.BLOCK_MESSAGE];
const set10 = new Set([]);
obj3[6] = new Set(items5);
obj[AutomodTriggerType.DEFAULT_KEYWORD_LIST] = obj3;
const obj4 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pX7i6n);
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
obj4[4] = new Set(items6);
const set12 = new Set(items6);
obj4[5] = new Set([]);
const items7 = [AutomodActionType.BLOCK_MESSAGE];
const set13 = new Set([]);
obj4[6] = new Set(items7);
obj[AutomodTriggerType.MENTION_SPAM] = obj4;
const obj5 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.q1L2v8);
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
obj5[4] = new Set(items8);
const set15 = new Set(items8);
obj5[5] = new Set([]);
const items9 = [AutomodActionType.QUARANTINE_USER];
const set16 = new Set([]);
obj5[6] = new Set(items9);
obj[AutomodTriggerType.USER_PROFILE] = obj5;
const obj6 = {
  getDefaultRuleName() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ZQr92M);
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
obj6[4] = new Set(items10);
const items11 = [obj.ALPHA];
const set18 = new Set(items10);
obj6[5] = new Set(items11);
const set19 = new Set(items11);
obj6[6] = new Set();
obj[AutomodTriggerType.SERVER_POLICY] = obj6;
const obj7 = { MEMBERS: "members", CONTENT: "content" };
const obj8 = { [obj7.MEMBERS]: items12, [obj7.CONTENT]: items13 };
items12 = [obj[AutomodTriggerType.USER_PROFILE]];
items13 = [obj[AutomodTriggerType.SERVER_POLICY], obj[AutomodTriggerType.MENTION_SPAM], obj[AutomodTriggerType.ML_SPAM], obj[AutomodTriggerType.DEFAULT_KEYWORD_LIST], obj[AutomodTriggerType.KEYWORD]];
const result = set.fileFinishedImporting("modules/guild_automod/AutomodTriggerConfigs.tsx");

export const AutomodTriggerConfigFlags = obj;
export const triggerConfigs = obj;
export const AutomodTriggerCategory = obj7;
export const AUTOMOD_RULE_CONFIGS_BY_CATEGORY = obj8;
export const checkTriggerTypeForFlag = function checkTriggerTypeForFlag(arg0, arg1) {
  const flags = obj[arg0].flags;
  return flags.has(arg1);
};
export const getAvailableActionTypes = function getAvailableActionTypes(arg0) {
  return Array.from(obj[arg0].availableActionTypes);
};
export const validateRuleByTriggerConfigOrThrow = function validateRuleByTriggerConfigOrThrow(actions, arr) {
  let require;
  let triggerType;
  ({ id: require, triggerType } = actions);
  actions = actions.actions;
  let c2;
  c2 = tmp;
  if (arr.filter((id) => {
    let tmp = closure_0 !== id.id;
    if (tmp) {
      tmp = id.triggerType === triggerType;
    }
    return tmp;
  }).length > obj[triggerType].perGuildMaxCount) {
    const _Error3 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("You have exceeded the maximum number of rules of type " + triggerType);
    throw error;
  } else if (actions.some((type) => {
    const availableActionTypes = _undefined.availableActionTypes;
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
export const useAvailableTriggerTypes = function useAvailableTriggerTypes(arg0) {
  isUserProfileRuleEnabled = isUserProfileRuleEnabled(15777).useIsUserProfileRuleEnabled(arg0);
  const items = [isUserProfileRuleEnabled];
  return React.useMemo(() => {
    const keys = Object.keys(outer1_7);
    return keys.reduce((arg0, arg1) => {
      const found = outer1_7[arg1].filter((type) => {
        let tmp2 = type.type !== outer1_3.SERVER_POLICY;
        if (tmp2) {
          let tmp3 = type.type === tmp.USER_PROFILE;
          if (tmp3) {
            tmp3 = !closure_0;
          }
          let tmp5 = !tmp3;
          if (!tmp3) {
            tmp5 = type.perGuildMaxCount > 0;
          }
          tmp2 = tmp5;
        }
        return tmp2;
      });
      arg0[arg1] = found.map((type) => type.type);
      return arg0;
    }, { [outer1_6.MEMBERS]: [], [outer1_6.CONTENT]: [] });
  }, items);
};
export const getDefaultTriggerMetadataForTriggerType = function getDefaultTriggerMetadataForTriggerType(arg0, arg1) {
  require(9689) /* isInMentionRaidExperiment */;
  if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === arg0) {
    let obj = { allowList: null, presets: null };
    obj[0] = [];
    obj[1] = [];
    return obj;
  } else {
    if (tmp3.USER_PROFILE !== arg0) {
      if (tmp3.KEYWORD !== arg0) {
        if (tmp3.MENTION_SPAM === arg0) {
          obj = { mentionTotalLimit: null, mentionRaidProtectionEnabled: null };
          obj[0] = closure_4;
          obj[1] = tmp2;
          return obj;
        } else if (tmp3.ML_SPAM !== arg0) {
          const SERVER_POLICY = tmp3.SERVER_POLICY;
        }
      }
    }
    obj = { keywordFilter: null, regexPatterns: null, allowList: null };
    obj[0] = [];
    obj[1] = [];
    obj[2] = [];
    return obj;
  }
};