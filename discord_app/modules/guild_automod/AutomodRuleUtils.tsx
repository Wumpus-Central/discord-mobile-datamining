// === Module 17540: AutomodRuleUtils ===

// Module 17540 (AutomodRuleUtils)
import util from "util" /* 1114 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7521 */;
import AutomodErrorUtils from "AutomodErrorUtils" /* 7939 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17543 */;
import AutomodActionUtils from "AutomodActionUtils" /* 17544 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const getRuleCountByTriggerType = fn(17541).getRuleCountByTriggerType;
const Constants = fn(11862);
({ AutomodTriggerType: closure_4, MAX_KEYWORDS_PER_KEYWORD_FILTER: hasOwnProperty, MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: metroRequire, MAX_CHARACTERS_PER_KEYWORD: closure_7, MIN_CHARACTERS_PER_KEYWORD: closure_8, MIN_REGEX_PATTERN_LENGTH: closure_9, MAX_REGEX_PATTERN_LENGTH: c10, AutomodActionType: closure_11, AutomodEventType: closure_12 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

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
export const createDefaultRule = function createDefaultRule(guildId, triggerType) {
  const obj = { id: null, name: null, guildId: null, eventType: null, triggerType: null, triggerMetadata: null, enabled: true, creatorId: null, actions: null, position: 0, exemptChannels: null, exemptRoles: null };
  const defaultTriggerMetadataForTriggerType = AutomodTriggerConfigs.getDefaultTriggerMetadataForTriggerType(triggerType, guildId);
  obj.id = "" + guildId + "-" + triggerType + "-new-rule";
  obj.name = obj.getDefaultRuleName();
  obj.guildId = guildId;
  obj.eventType = obj.eventType;
  obj.triggerType = triggerType;
  obj.triggerMetadata = defaultTriggerMetadataForTriggerType;
  obj.creatorId = AuthenticationStore.getId();
  obj.actions = AutomodActionUtils.getRuleDefaultActionsFromConfig(obj);
  obj.exemptChannels = new Set();
  const set = new Set();
  obj.exemptRoles = new Set();
  const set1 = new Set();
  let str = obj.id;
  if (str == null) {
    str = "INVALID_SNOWFLAKE";
  }
  if (obj5.isSnowflake(str)) {
    const _Error = Error;
    const intl = util.intl;
    const error = new Error(intl.string(util.t["A/nX8D"]));
    throw error;
  } else {
    const tmp7 = getRuleCountByTriggerType(guildId, triggerType);
    if (tmp7 > 0) {
      const _HermesInternal = HermesInternal;
      obj.name = obj.name + " " + tmp7 + 1;
    }
    return obj;
  }
  obj5 = ApplicationCommandUtils;
};
export const validateKeywordsOrThrow = function validateKeywordsOrThrow(arr, limit) {
  if (arr.length > limit) {
    const _Error = Error;
    const intl = util.intl;
    const obj = { limit };
    const error = new Error(intl.formatToPlainString(util.t.mee4qd, obj));
    throw error;
  } else {
    const item = arr.forEach((keyword) => {
      const intl = util.intl;
      const range = { keyword, max, min };
      const invalidKeywordError = new AutomodErrorUtils.InvalidKeywordError(intl.formatToPlainString(util.t.rbRvGe, range));
      throw invalidKeywordError;
    });
  }
};
export const validateRegexPatternsOrThrow = function validateRegexPatternsOrThrow(arr) {
  if (arr.length > timestampProducer) {
    const _Error = Error;
    const intl = util.intl;
    const obj = { limit: tmp };
    const error = new Error(intl.formatToPlainString(util.t.tDjhF1, obj));
    throw error;
  } else {
    const item = arr.forEach((regex) => {
      const intl = util.intl;
      const range = { regex, max: max2, min: min2 };
      const invalidRegexPatternError = new AutomodErrorUtils.InvalidRegexPatternError(intl.formatToPlainString(util.t.WR0m9w, range));
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
        const intl4 = util.intl;
        const error = new Error(intl4.string(util.t.kz2Av3));
        throw error;
      }
    }
    if (keywordFilter.length > hasOwnProperty) {
      const _Error3 = Error;
      const intl3 = util.intl;
      let obj = { limit: tmp2 };
      const error1 = new Error(intl3.formatToPlainString(util.t.mee4qd, obj));
      throw error1;
    } else {
      const item = keywordFilter.forEach((keyword) => {
        const intl = util.intl;
        const range = { keyword, max, min };
        const invalidKeywordError = new AutomodErrorUtils.InvalidKeywordError(intl.formatToPlainString(util.t.rbRvGe, range));
        throw invalidKeywordError;
      });
      if (regexPatterns.length > timestampProducer) {
        const _Error2 = Error;
        const intl2 = util.intl;
        obj = { limit: tmp33 };
        const error2 = new Error(intl2.formatToPlainString(util.t.tDjhF1, obj));
        throw error2;
      } else {
        const item1 = regexPatterns.forEach((regex) => {
          const intl = util.intl;
          const range = { regex, max: max2, min: min2 };
          const invalidRegexPatternError = new AutomodErrorUtils.InvalidRegexPatternError(intl.formatToPlainString(util.t.WR0m9w, range));
          throw invalidRegexPatternError;
        });
      }
    }
  }
  if (0 === triggerType.actions.length) {
    const _Error = Error;
    let intl = util.intl;
    const error3 = new Error(intl.string(util.t["t+gj5V"]));
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
  return ApplicationCommandUtils.isSnowflake(str);
};
export const eventTypeToName = function eventTypeToName(newValue) {
  if (constants3.MESSAGE_SEND === newValue) {
    const intl3 = util.intl;
    return intl3.string(util.t.NlQW4P);
  } else if (tmp.GUILD_MEMBER_JOIN_OR_UPDATE === newValue) {
    const intl2 = util.intl;
    return intl2.string(util.t["Q+68IX"]);
  } else {
    const intl = util.intl;
    return intl.string(util.t.SP9BBx);
  }
};
export const actionTypeToName = function actionTypeToName(arg0) {
  if (constants2.BLOCK_MESSAGE === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.d1ab8n);
  } else if (constants2.FLAG_TO_CHANNEL === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t["Y+VmvU"]);
  } else if (constants2.USER_COMMUNICATION_DISABLED === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["6WPxY2"]);
  } else if (constants2.QUARANTINE_USER === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.NPO8ee);
  } else {
    const intl = util.intl;
    return intl.string(util.t.SP9BBx);
  }
};
export const triggerTypeToName = function triggerTypeToName(newValue) {
  if (constants.KEYWORD === newValue) {
    const intl6 = util.intl;
    return intl6.string(util.t.ffR2cM);
  } else if (constants.ML_SPAM === newValue) {
    const intl5 = util.intl;
    return intl5.string(util.t["puF/Os"]);
  } else if (constants.DEFAULT_KEYWORD_LIST === newValue) {
    const intl4 = util.intl;
    return intl4.string(util.t.LnGhZv);
  } else if (constants.MENTION_SPAM === newValue) {
    const intl3 = util.intl;
    return intl3.string(util.t.pX7i6n);
  } else if (constants.USER_PROFILE === newValue) {
    const intl2 = util.intl;
    return intl2.string(util.t.q1L2v8);
  } else {
    const intl = util.intl;
    return intl.string(util.t.SP9BBx);
  }
};