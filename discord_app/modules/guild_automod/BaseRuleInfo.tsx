// === Module 17954: BaseRuleInfo ===

// Module 17954 (BaseRuleInfo)
import util from "util" /* 1115 */;
import Constants from "Constants" /* 12117 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17943 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17944 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/BaseRuleInfo.tsx");

export const getBaseRuleInfo = function getBaseRuleInfo(triggerType, rule) {
  let tmp = null;
  if (null != triggerType) {
    if (AutomodTriggerType.KEYWORD !== triggerType) {
      if (AutomodTriggerType.ML_SPAM !== triggerType) {
        if (AutomodTriggerType.DEFAULT_KEYWORD_LIST !== triggerType) {
          if (AutomodTriggerType.MENTION_SPAM !== triggerType) {
            if (AutomodTriggerType.SERVER_POLICY !== triggerType) {
              if (AutomodTriggerType.USER_PROFILE !== triggerType) {
                let flag = false;
              }
              tmp = null;
              if (flag) {
                let length = rule;
                let str;
                if (rule != null) {
                  str = length.name;
                }
                if (str == null) {
                  str = AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName();
                }
                if (str == null) {
                  str = "";
                }
                const obj2 = { headerText: str, headerSubtext: null, descriptionText: null, descriptionSubtext: null };
                let str2;
                if (obj3.isBackendPersistedRule(length)) {
                  if (tmp5Result.isRuleKeywordFilter(length)) {
                    if (length.triggerMetadata.regexPatterns.length > 0) {
                      const intl2 = util.intl;
                      const obj4 = { keywordCount: length.triggerMetadata.keywordFilter.length, regexPatternCount: null };
                      length = length.triggerMetadata.regexPatterns.length;
                      obj4.regexPatternCount = length;
                      let formatToPlainStringResult = intl2.formatToPlainString(util.t.xZUvxR, obj4);
                    } else {
                      const intl = util.intl;
                      const obj5 = { keywordCount: length.triggerMetadata.keywordFilter.length };
                      formatToPlainStringResult = intl.formatToPlainString(util.t.dJN7Lk, obj5);
                    }
                  }
                  tmp5Result = AutomodRuleUtils;
                }
                if (str2 == null) {
                  str2 = "";
                }
                obj2.headerSubtext = str2;
                if (AutomodTriggerType.KEYWORD === triggerType) {
                  const intl7 = util.intl;
                  let str3 = intl7.string(util.t.TzvaeK);
                } else if (AutomodTriggerType.ML_SPAM === triggerType) {
                  const intl6 = util.intl;
                  str3 = intl6.string(util.t.jBZSQl);
                } else if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
                  const intl5 = util.intl;
                  str3 = intl5.string(util.t.Drc8ft);
                } else if (AutomodTriggerType.MENTION_SPAM === triggerType) {
                  const intl4 = util.intl;
                  str3 = intl4.string(util.t.flhXO4);
                } else if (AutomodTriggerType.USER_PROFILE === triggerType) {
                  const intl3 = util.intl;
                  str3 = intl3.string(util.t.A35LyL);
                } else {
                  str3 = null;
                  if (AutomodTriggerType.APPLICATION === triggerType) {
                    const intl9 = util.intl;
                    str3 = intl9.string(util.t.kHNeDa);
                  }
                }
                if (str3 == null) {
                  str3 = "";
                }
                obj2.descriptionText = str3;
                let str4;
                if (triggerType === AutomodTriggerType.KEYWORD) {
                  const intl8 = util.intl;
                  str4 = intl8.formatToPlainString(util.t.yNec2m, {});
                }
                if (str4 == null) {
                  str4 = "";
                }
                obj2.descriptionSubtext = str4;
                tmp = obj2;
                obj3 = AutomodRuleUtils;
              }
            }
          }
        }
      }
    }
    flag = true;
  }
  return tmp;
};