// discord_app/modules/guild_automod/AutomodRuleUtils.tsx
import util from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ApplicationCommandUtils from "../application_commands/ApplicationCommandUtils.tsx";
import AutomodErrorUtils from "AutomodErrorUtils.tsx";
import AutomodTriggerConfigs from "AutomodTriggerConfigs.tsx";
import AutomodActionUtils from "AutomodActionUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
const getRuleCountByTriggerType = fn(17272).getRuleCountByTriggerType;
const Constants = fn(11327);
({
  AutomodTriggerType: closure_4,
  MAX_KEYWORDS_PER_KEYWORD_FILTER: hasOwnProperty,
  MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: metroRequire,
  MAX_CHARACTERS_PER_KEYWORD: closure_7,
  MIN_CHARACTERS_PER_KEYWORD: closure_8,
  MIN_REGEX_PATTERN_LENGTH: closure_9,
  MAX_REGEX_PATTERN_LENGTH: c10,
  AutomodActionType: closure_11,
  AutomodEventType: closure_12,
  MAX_MENTION_SPAM_LIMIT: map1,
  MIN_MENTION_SPAM_LIMIT: closure_14,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

export const getRulesFromTriggerTypeMap = function getRulesFromTriggerTypeMap(rulesByTriggerType) {
  let obj = rulesByTriggerType;
  if (rulesByTriggerType == null) {
    obj = {};
  }
  const values = Object.values(obj);
  return values.flat().filter(GlobalUtils.isNotNullish);
};
export const isRegexSupported = function isRegexSupported(arg0) {
  if (constants.KEYWORD !== arg0) {
    if (constants.USER_PROFILE !== arg0) {
      return false;
    }
  }
  return true;
};
export const getNewAutomodRuleMockId = function getNewAutomodRuleMockId(arg0, arg1) {
  return "" + arg0 + "-" + arg1 + "-new-rule";
};
export const isRuleKeywordFilter = function isRuleKeywordFilter(length) {
  let triggerType;
  if (length != null) {
    triggerType = length.triggerType;
  }
  return triggerType === constants.KEYWORD;
};
export const isRuleMLSpamFilter = function isRuleMLSpamFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
  }
  return triggerType === constants.ML_SPAM;
};
export const isRuleDefaultKeywordListFilter = function isRuleDefaultKeywordListFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
  }
  return triggerType === constants.DEFAULT_KEYWORD_LIST;
};
export const isRuleMentionSpamFilter = function isRuleMentionSpamFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
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
export const isRuleUserProfileFilter = function isRuleUserProfileFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
  }
  return triggerType === constants.USER_PROFILE;
};
export const isRuleApplicationFilter = function isRuleApplicationFilter(editingRule) {
  let triggerType;
  if (editingRule != null) {
    triggerType = editingRule.triggerType;
  }
  return triggerType === constants.APPLICATION;
};
export const createDefaultRule = function createDefaultRule(guildId, triggerType) {
  const obj = AutomodTriggerConfigs.triggerConfigs[triggerType];
  const obj3 = {
    id: null,
    name: null,
    guildId: null,
    eventType: null,
    triggerType: null,
    triggerMetadata: null,
    enabled: true,
    creatorId: null,
    actions: null,
    position: 0,
    exemptChannels: null,
    exemptRoles: null,
  };
  const defaultTriggerMetadataForTriggerType = AutomodTriggerConfigs.getDefaultTriggerMetadataForTriggerType(
    triggerType,
    guildId,
  );
  obj3.id = "" + guildId + "-" + triggerType + "-new-rule";
  obj3.name = obj.getDefaultRuleName();
  obj3.guildId = guildId;
  obj3.eventType = obj.eventType;
  obj3.triggerType = triggerType;
  obj3.triggerMetadata = defaultTriggerMetadataForTriggerType;
  obj3.creatorId = AuthenticationStore.getId();
  obj3.actions = AutomodActionUtils.getRuleDefaultActionsFromConfig(obj);
  obj3.exemptChannels = new Set();
  const set = new Set();
  obj3.exemptRoles = new Set();
  const set1 = new Set();
  let str = obj3.id;
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
      obj3.name = obj3.name + " " + tmp7 + 1;
    }
    return obj3;
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
      const invalidKeywordError = new AutomodErrorUtils.InvalidKeywordError(
        intl.formatToPlainString(util.t.rbRvGe, range),
      );
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
      const invalidRegexPatternError = new AutomodErrorUtils.InvalidRegexPatternError(
        intl.formatToPlainString(util.t.WR0m9w, range),
      );
      throw invalidRegexPatternError;
    });
  }
};
export const isValidMentionSpamLimit = function isValidMentionSpamLimit(NumberResult) {
  let isIntegerResult = Number.isInteger(NumberResult);
  if (isIntegerResult) {
    isIntegerResult = NumberResult >= minimum;
  }
  if (isIntegerResult) {
    isIntegerResult = NumberResult <= maximum;
  }
  return isIntegerResult;
};
export const validateRuleBeforeSaveOrThrow = function validateRuleBeforeSaveOrThrow(triggerType) {
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  if (triggerType === constants.MENTION_SPAM) {
    const mentionTotalLimit = triggerType.triggerMetadata.mentionTotalLimit;
    const _Number = Number;
    let isIntegerResult = Number.isInteger(mentionTotalLimit);
    if (isIntegerResult) {
      isIntegerResult = mentionTotalLimit >= minimum;
    }
    if (isIntegerResult) {
      isIntegerResult = mentionTotalLimit <= maximum;
    }
    if (!isIntegerResult) {
      const _Error = Error;
      let intl = util.intl;
      const obj = { minimum, maximum };
      const error = new Error(intl.formatToPlainString(util.t["8Y5zsp"], obj));
      throw error;
    }
  }
  let triggerType1;
  if (triggerType != null) {
    triggerType1 = triggerType.triggerType;
  }
  if (triggerType1 === constants.KEYWORD) {
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
        const _Error6 = Error;
        const intl6 = util.intl;
        const error1 = new Error(intl6.string(util.t.kz2Av3));
        throw error1;
      }
    }
    if (keywordFilter.length > hasOwnProperty) {
      const _Error5 = Error;
      const intl5 = util.intl;
      const obj2 = { limit: tmp15 };
      const error2 = new Error(intl5.formatToPlainString(util.t.mee4qd, obj2));
      throw error2;
    } else {
      const item = keywordFilter.forEach((keyword) => {
        const intl = util.intl;
        const range = { keyword, max, min };
        const invalidKeywordError = new AutomodErrorUtils.InvalidKeywordError(
          intl.formatToPlainString(util.t.rbRvGe, range),
        );
        throw invalidKeywordError;
      });
      if (regexPatterns.length > timestampProducer) {
        const _Error4 = Error;
        const intl4 = util.intl;
        const obj3 = { limit: tmp54 };
        const error3 = new Error(intl4.formatToPlainString(util.t.tDjhF1, obj3));
        throw error3;
      } else {
        const item1 = regexPatterns.forEach((regex) => {
          const intl = util.intl;
          const range = { regex, max: max2, min: min2 };
          const invalidRegexPatternError = new AutomodErrorUtils.InvalidRegexPatternError(
            intl.formatToPlainString(util.t.WR0m9w, range),
          );
          throw invalidRegexPatternError;
        });
      }
    }
  }
  let triggerType2;
  if (triggerType != null) {
    triggerType2 = triggerType.triggerType;
  }
  if (triggerType2 === constants.APPLICATION) {
    if (null == triggerType.triggerMetadata.applicationId) {
      const _Error3 = Error;
      const intl3 = util.intl;
      const error4 = new Error(intl3.string(util.t["6NbEkN"]));
      throw error4;
    }
  } else if (0 === triggerType.actions.length) {
    const _Error2 = Error;
    const intl2 = util.intl;
    const error5 = new Error(intl2.string(util.t["t+gj5V"]));
    throw error5;
  }
};
export const isBackendPersistedRule = function isBackendPersistedRule(editingRule) {
  let str;
  if (editingRule != null) {
    str = editingRule.id;
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
    const intl7 = util.intl;
    return intl7.string(util.t.ffR2cM);
  } else if (constants.ML_SPAM === newValue) {
    const intl6 = util.intl;
    return intl6.string(util.t["puF/Os"]);
  } else if (constants.DEFAULT_KEYWORD_LIST === newValue) {
    const intl5 = util.intl;
    return intl5.string(util.t.LnGhZv);
  } else if (constants.MENTION_SPAM === newValue) {
    const intl4 = util.intl;
    return intl4.string(util.t.pX7i6n);
  } else if (constants.USER_PROFILE === newValue) {
    const intl3 = util.intl;
    return intl3.string(util.t.q1L2v8);
  } else if (constants.APPLICATION === newValue) {
    const intl2 = util.intl;
    return intl2.string(util.t.VxE3o6);
  } else {
    const intl = util.intl;
    return intl.string(util.t.SP9BBx);
  }
};
