// === Module 16886: getNewAutomodRuleMockId ===

// Module 16886 (getNewAutomodRuleMockId)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import buildCommand from "buildCommand" /* 7127 */;
import AutomodTriggerType from "AutomodTriggerType" /* 16889 */;
import getRuleDefaultActionsFromConfig from "getRuleDefaultActionsFromConfig" /* 16890 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import { getRuleCountByTriggerType } from "withEqualityFn" /* 16887 */;
import AutomodEventType from "AutomodEventType" /* 11423 */;

require = arg1;
({ AutomodTriggerType: c4, MAX_KEYWORDS_PER_KEYWORD_FILTER: c5, MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: closure_6, MAX_CHARACTERS_PER_KEYWORD: error, MIN_CHARACTERS_PER_KEYWORD: closure_8, MIN_REGEX_PATTERN_LENGTH: c9, MAX_REGEX_PATTERN_LENGTH: c10, AutomodActionType: unpackModuleId, AutomodEventType: closure_12 } = AutomodEventType);
const result = require("set").fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

export const getNewAutomodRuleMockId = function getNewAutomodRuleMockId(arg0, arg1) {
  return "" + arg0 + "-" + arg1 + "-new-rule";
};
export const isRuleKeywordFilter = function isRuleKeywordFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.KEYWORD;
};
export const isRuleMLSpamFilter = function isRuleMLSpamFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.ML_SPAM;
};
export const isRuleDefaultKeywordListFilter = function isRuleDefaultKeywordListFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.DEFAULT_KEYWORD_LIST;
};
export const isRuleMentionSpamFilter = function isRuleMentionSpamFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.MENTION_SPAM;
};
export const isRuleServerPolicyFilter = function isRuleServerPolicyFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.SERVER_POLICY;
};
export const isRuleUserProfileFilter = function isRuleUserProfileFilter(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  return triggerType === constants.USER_PROFILE;
};
export const createDefaultRule = function createDefaultRule(arg0, arg1) {
  let obj = AutomodTriggerType.triggerConfigs[arg1];
  obj = { id: null, name: null, guildId: null, eventType: null, triggerType: null, triggerMetadata: null, enabled: true, creatorId: null, actions: null, position: 0, exemptChannels: null, exemptRoles: null };
  const defaultTriggerMetadataForTriggerType = AutomodTriggerType.getDefaultTriggerMetadataForTriggerType(arg1, arg0);
  obj[0] = "" + arg0 + "-" + arg1 + "-new-rule";
  obj[1] = obj.getDefaultRuleName();
  obj[2] = arg0;
  obj[3] = obj.eventType;
  obj[4] = arg1;
  obj[5] = defaultTriggerMetadataForTriggerType;
  obj[7] = id.getId();
  const obj2 = AutomodTriggerType;
  obj[8] = getRuleDefaultActionsFromConfig.getRuleDefaultActionsFromConfig(obj);
  const obj4 = getRuleDefaultActionsFromConfig;
  obj[10] = new Set();
  const set = new Set();
  obj[11] = new Set();
  const set1 = new Set();
  let str = obj.id;
  if (str == null) {
    str = "INVALID_SNOWFLAKE";
  }
  if (obj5.isSnowflake(str)) {
    const _Error = Error;
    const intl = tmp(1236).intl;
    error = new Error(intl.string(tmp(1236).t["A/nX8D"]));
    throw error;
  } else {
    const tmp7 = getRuleCountByTriggerType(arg0, arg1);
    if (tmp7 > 0) {
      const _HermesInternal = HermesInternal;
      obj.name = obj.name + " " + tmp7 + 1;
    }
    return obj;
  }
  obj5 = buildCommand;
};
export const validateKeywordsOrThrow = function validateKeywordsOrThrow(arr) {
  if (arr.length > arg1) {
    const _Error = Error;
    const intl = getSystemLocale.intl;
    const obj = { limit: null };
    obj[0] = arg1;
    error = new Error(intl.formatToPlainString(getSystemLocale.t.mee4qd, obj));
    throw error;
  } else {
    const item = arr.forEach((keyword) => {
      const intl = callback(1236).intl;
      const invalidKeywordError = new callback(7467).InvalidKeywordError(intl.formatToPlainString(callback(1236).t.rbRvGe, { keyword, max: closure_7, min: closure_8 }));
      throw invalidKeywordError;
    });
  }
};
export const validateRegexPatternsOrThrow = function validateRegexPatternsOrThrow(arr) {
  if (arr.length > closure_6) {
    const _Error = Error;
    const intl = getSystemLocale.intl;
    const obj = { limit: null };
    obj[0] = tmp;
    error = new Error(intl.formatToPlainString(getSystemLocale.t.tDjhF1, obj));
    throw error;
  } else {
    const item = arr.forEach((regex) => {
      const intl = callback(1236).intl;
      const invalidRegexPatternError = new callback(7467).InvalidRegexPatternError(intl.formatToPlainString(callback(1236).t.WR0m9w, { regex, max: closure_10, min: closure_9 }));
      throw invalidRegexPatternError;
    });
  }
};
export const validateRuleBeforeSaveOrThrow = function validateRuleBeforeSaveOrThrow(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  if (triggerType === constants.KEYWORD) {
    let keywordFilter = triggerType.triggerMetadata.keywordFilter;
    if (keywordFilter == null) {
      keywordFilter = [];
    }
    let regexPatterns = triggerType.triggerMetadata.regexPatterns;
    if (regexPatterns == null) {
      regexPatterns = [];
    }
    if (0 === keywordFilter.length) {
      if (0 === regexPatterns.length) {
        const _Error4 = Error;
        const intl4 = getSystemLocale.intl;
        error = new Error(intl4.string(getSystemLocale.t.kz2Av3));
        throw error;
      }
    }
    if (keywordFilter.length > closure_5) {
      const _Error3 = Error;
      const intl3 = getSystemLocale.intl;
      let obj = { limit: null };
      obj[0] = tmp2;
      const error1 = new Error(intl3.formatToPlainString(getSystemLocale.t.mee4qd, obj));
      throw error1;
    } else {
      const item = keywordFilter.forEach((keyword) => {
        const intl = callback(1236).intl;
        const invalidKeywordError = new callback(7467).InvalidKeywordError(intl.formatToPlainString(callback(1236).t.rbRvGe, { keyword, max: closure_7, min: closure_8 }));
        throw invalidKeywordError;
      });
      if (regexPatterns.length > closure_6) {
        const _Error2 = Error;
        const intl2 = getSystemLocale.intl;
        obj = { limit: null };
        obj[0] = tmp33;
        const error2 = new Error(intl2.formatToPlainString(getSystemLocale.t.tDjhF1, obj));
        throw error2;
      } else {
        const item1 = regexPatterns.forEach((regex) => {
          const intl = callback(1236).intl;
          const invalidRegexPatternError = new callback(7467).InvalidRegexPatternError(intl.formatToPlainString(callback(1236).t.WR0m9w, { regex, max: closure_10, min: closure_9 }));
          throw invalidRegexPatternError;
        });
      }
    }
  }
  if (0 === triggerType.actions.length) {
    const _Error = Error;
    let intl = getSystemLocale.intl;
    const error3 = new Error(intl.string(getSystemLocale.t["t+gj5V"]));
    throw error3;
  }
};
export const isBackendPersistedRule = function isBackendPersistedRule(id) {
  let str;
  if (id != null) {
    str = id.id;
  }
  if (str == null) {
    str = "INVALID_SNOWFLAKE";
  }
  return buildCommand.isSnowflake(str);
};
export const eventTypeToName = function eventTypeToName(newValue) {
  if (constants3.MESSAGE_SEND === newValue) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.NlQW4P);
  } else if (tmp.GUILD_MEMBER_JOIN_OR_UPDATE === newValue) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["Q+68IX"]);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SP9BBx);
  }
};
export const actionTypeToName = function actionTypeToName(arg0) {
  if (constants2.BLOCK_MESSAGE === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.d1ab8n);
  } else if (tmp.FLAG_TO_CHANNEL === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["Y+VmvU"]);
  } else if (tmp.USER_COMMUNICATION_DISABLED === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["6WPxY2"]);
  } else if (tmp.QUARANTINE_USER === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.NPO8ee);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SP9BBx);
  }
};
export const triggerTypeToName = function triggerTypeToName(newValue) {
  if (constants.KEYWORD === newValue) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.ffR2cM);
  } else if (tmp.ML_SPAM === newValue) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["puF/Os"]);
  } else if (tmp.DEFAULT_KEYWORD_LIST === newValue) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.LnGhZv);
  } else if (tmp.MENTION_SPAM === newValue) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.pX7i6n);
  } else if (tmp.USER_PROFILE === newValue) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.q1L2v8);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.SP9BBx);
  }
};