// discord_app/modules/guild_automod/AutomodRuleUtils.tsx
import intl8 from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ApplicationCommandUtils from "../application_commands/ApplicationCommandUtils.tsx";
import AutomodErrorUtils from "AutomodErrorUtils.tsx";
import AutomodStore from "AutomodStore.tsx";
import AutomodTriggerConfigs from "AutomodTriggerConfigs.tsx";
import AutomodActionUtils from "AutomodActionUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const f131594 = (keyword) => {
  const InvalidKeywordError = AutomodErrorUtils.InvalidKeywordError;
  const intl = intl8.intl;
  const range = { keyword, max, min };
  const invalidKeywordError = new InvalidKeywordError(intl.formatToPlainString(intl8.t.rbRvGe, range));
  throw invalidKeywordError;
};
const f131595 = (regex) => {
  const InvalidRegexPatternError = AutomodErrorUtils.InvalidRegexPatternError;
  const intl = intl8.intl;
  const range = { regex, max: max2, min: min2 };
  const invalidRegexPatternError = new InvalidRegexPatternError(intl.formatToPlainString(intl8.t.WR0m9w, range));
  throw invalidRegexPatternError;
};
const getRuleCountByTriggerType = AutomodStore.getRuleCountByTriggerType;
({
  AutomodTriggerType: closure_4,
  MAX_KEYWORDS_PER_KEYWORD_FILTER: hasOwnProperty,
  MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER: metroRequire,
  MAX_CHARACTERS_PER_KEYWORD: metroImportDefault,
  MIN_CHARACTERS_PER_KEYWORD: metroImportAll,
  MIN_REGEX_PATTERN_LENGTH: c9,
  MAX_REGEX_PATTERN_LENGTH: c10,
  AutomodActionType: unpackModuleId,
  AutomodEventType: closure_12,
  MAX_MENTION_SPAM_LIMIT: map1,
  MIN_MENTION_SPAM_LIMIT: closure_14,
} = Constants);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodRuleUtils.tsx");

export const getRulesFromTriggerTypeMap = function getRulesFromTriggerTypeMap(rulesByTriggerType) {
  let obj = rulesByTriggerType;
  const _Object = Object;
  if (rulesByTriggerType == null) {
    obj = {};
  }
  const values2 = values(obj);
  const flatResult = values2.flat();
  return flatResult.filter(GlobalUtils.isNotNullish);
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
export const isRuleKeywordFilter = function isRuleKeywordFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
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
export const isRuleApplicationFilter = function isRuleApplicationFilter(rule) {
  let triggerType;
  if (rule != null) {
    triggerType = rule.triggerType;
  }
  return triggerType === constants.APPLICATION;
};
export const createDefaultRule = function createDefaultRule(guildId, triggerType) {
  let defaultTriggerMetadataForTriggerType;
  let obj4;
  const obj = AutomodTriggerConfigs.triggerConfigs[triggerType];
  const obj3 = {
    id: "" + guildId + "-" + triggerType + "-new-rule",
    name: obj.getDefaultRuleName(),
    guildId,
    eventType: obj.eventType,
    triggerType,
    triggerMetadata: defaultTriggerMetadataForTriggerType,
    enabled: true,
    creatorId: AuthenticationStore.getId(),
    actions: obj4.getRuleDefaultActionsFromConfig(obj),
    position: 0,
    exemptChannels: new Set(),
    exemptRoles: new Set(),
  };
  const obj2 = AutomodTriggerConfigs;
  defaultTriggerMetadataForTriggerType = obj2.getDefaultTriggerMetadataForTriggerType(triggerType, guildId);
  obj4 = AutomodActionUtils;
  new Set();
  new Set();
  let str = obj3.id;
  const isSnowflake = ApplicationCommandUtils.isSnowflake;
  ApplicationCommandUtils;
  if (str == null) {
    str = "INVALID_SNOWFLAKE";
  }
  if (isSnowflake(str)) {
    const _Error = Error;
    const intl = intl8.intl;
    const self = this;
    const self2 = this;
    const error = new Error(intl.string(intl8.t["A/nX8D"]));
    throw error;
  } else {
    const tmp8 = getRuleCountByTriggerType(guildId, triggerType);
    if (tmp8 > 0) {
      const _HermesInternal = HermesInternal;
      obj3.name = obj3.name + " " + tmp8 + 1;
    }
    return obj3;
  }
};
export const validateKeywordsOrThrow = function validateKeywordsOrThrow(arr, maxWordCount) {
  if (arr.length > maxWordCount) {
    const _Error = Error;
    const intl = intl8.intl;
    const self = this;
    const self2 = this;
    const obj = { limit: maxWordCount };
    const error = new Error(intl.formatToPlainString(intl8.t.mee4qd, obj));
    throw error;
  } else {
    const item = arr.forEach(f131594);
  }
};
export const validateRegexPatternsOrThrow = function validateRegexPatternsOrThrow(arr) {
  if (arr.length > metroRequire) {
    const _Error = Error;
    const intl = intl8.intl;
    const self = this;
    const self2 = this;
    const obj = { limit: tmp };
    const error = new Error(intl.formatToPlainString(intl8.t.tDjhF1, obj));
    throw error;
  } else {
    const item = arr.forEach(f131595);
  }
};
export const isValidMentionSpamLimit = function isValidMentionSpamLimit(NumberResult) {
  const isIntegerResult = Number.isInteger(NumberResult) && NumberResult >= closure_14 && NumberResult <= map1;
  return isIntegerResult;
};
export const validateRuleBeforeSaveOrThrow = function validateRuleBeforeSaveOrThrow(triggerType) {
  let max;
  let max2;
  let min;
  let min2;
  triggerType = undefined;
  if (triggerType != null) {
    triggerType = triggerType.triggerType;
  }
  if (triggerType === constants.MENTION_SPAM) {
    const mentionTotalLimit = triggerType.triggerMetadata.mentionTotalLimit;
    const _Number = Number;
    const isIntegerResult =
      Number.isInteger(mentionTotalLimit) && mentionTotalLimit >= minimum && mentionTotalLimit <= map1;
    if (!isIntegerResult) {
      const _Error = Error;
      let intl = intl8.intl;
      const self = this;
      const self2 = this;
      const obj = { minimum, maximum: map1 };
      const error = new Error(intl.formatToPlainString(intl8.t["8Y5zsp"], obj));
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
        const intl6 = intl8.intl;
        const self11 = this;
        const self12 = this;
        const error1 = new Error(intl6.string(intl8.t.kz2Av3));
        throw error1;
      }
    }
    if (keywordFilter.length > hasOwnProperty) {
      const _Error5 = Error;
      const intl5 = intl8.intl;
      const self9 = this;
      const self10 = this;
      const obj2 = { limit: tmp13 };
      const error2 = new Error(intl5.formatToPlainString(intl8.t.mee4qd, obj2));
      throw error2;
    } else {
      const item = keywordFilter.forEach(f131594);
      if (regexPatterns.length > metroRequire) {
        const _Error4 = Error;
        const intl4 = intl8.intl;
        const self7 = this;
        const self8 = this;
        const obj3 = { limit: tmp42 };
        const error3 = new Error(intl4.formatToPlainString(intl8.t.tDjhF1, obj3));
        throw error3;
      } else {
        const item1 = regexPatterns.forEach(f131595);
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
      const intl3 = intl8.intl;
      const self5 = this;
      const self6 = this;
      const error4 = new Error(intl3.string(intl8.t["6NbEkN"]));
      throw error4;
    }
  } else if (0 === triggerType.actions.length) {
    const _Error2 = Error;
    const intl2 = intl8.intl;
    const self3 = this;
    const self4 = this;
    const error5 = new Error(intl2.string(intl8.t["t+gj5V"]));
    throw error5;
  }
};
export const isBackendPersistedRule = function isBackendPersistedRule(editingRule) {
  let str;
  const isSnowflake = ApplicationCommandUtils.isSnowflake;
  ApplicationCommandUtils;
  if (editingRule != null) {
    str = editingRule.id;
  }
  if (str == null) {
    str = "INVALID_SNOWFLAKE";
  }
  return isSnowflake(str);
};
export const eventTypeToName = function eventTypeToName(newValue) {
  if (constants3.MESSAGE_SEND === newValue) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.NlQW4P);
  } else if (tmp.GUILD_MEMBER_JOIN_OR_UPDATE === newValue) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t["Q+68IX"]);
  } else {
    const intl = intl8.intl;
    return intl.string(intl8.t.SP9BBx);
  }
};
export const actionTypeToName = function actionTypeToName(arg0) {
  if (unpackModuleId.BLOCK_MESSAGE === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.d1ab8n);
  } else if (unpackModuleId.FLAG_TO_CHANNEL === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t["Y+VmvU"]);
  } else if (unpackModuleId.USER_COMMUNICATION_DISABLED === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["6WPxY2"]);
  } else if (unpackModuleId.QUARANTINE_USER === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.NPO8ee);
  } else {
    const intl = intl8.intl;
    return intl.string(intl8.t.SP9BBx);
  }
};
export const triggerTypeToName = function triggerTypeToName(newValue) {
  if (constants.KEYWORD === newValue) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.ffR2cM);
  } else if (constants.ML_SPAM === newValue) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t["puF/Os"]);
  } else if (constants.DEFAULT_KEYWORD_LIST === newValue) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.LnGhZv);
  } else if (constants.MENTION_SPAM === newValue) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.pX7i6n);
  } else if (constants.USER_PROFILE === newValue) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.q1L2v8);
  } else if (constants.APPLICATION === newValue) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.VxE3o6);
  } else {
    const intl = intl8.intl;
    return intl.string(intl8.t.SP9BBx);
  }
};
