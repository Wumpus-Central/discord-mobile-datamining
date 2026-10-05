// === Module 17691: BaseRuleInfo ===

// Module 17691 (BaseRuleInfo)
import intl10 from "intl" /* 1126 */;
import Constants from "Constants" /* 11474 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17678 */;
import AutomodTriggerConfigs from "AutomodTriggerConfigs" /* 17679 */;
import size from "module_2" /* 2 */;

const AutomodTriggerType = Constants.AutomodTriggerType;
const result = size.fileFinishedImporting("modules/guild_automod/BaseRuleInfo.tsx");

export const getBaseRuleInfo = function getBaseRuleInfo(triggerType, name) {
  let str2;
  let str3;
  let str4;
  let tmp = null;
  if (null != triggerType) {
    if (AutomodTriggerType.KEYWORD !== triggerType) {
      if (AutomodTriggerType.ML_SPAM !== triggerType) {
        if (AutomodTriggerType.DEFAULT_KEYWORD_LIST !== triggerType) {
          if (AutomodTriggerType.MENTION_SPAM !== triggerType) {
            if (AutomodTriggerType.SERVER_POLICY !== triggerType) {
              let flag;
              if (AutomodTriggerType.USER_PROFILE !== triggerType) {
                flag = false;
              }
              tmp = null;
              if (flag) {
                let str;
                if (name != null) {
                  str = name.name;
                }
                if (str == null) {
                  const obj = AutomodTriggerConfigs.triggerConfigs[triggerType];
                  str = obj.getDefaultRuleName();
                }
                if (str == null) {
                  str = "";
                }
                const obj2 = { headerText: str, headerSubtext: str2, descriptionText: str3, descriptionSubtext: str4 };
                str2 = undefined;
                const obj3 = AutomodRuleUtils;
                if (obj3.isBackendPersistedRule(name)) {
                  let tmp8;
                  const tmp6Result = AutomodRuleUtils;
                  if (tmp6Result.isRuleKeywordFilter(name)) {
                    let formatToPlainStringResult;
                    if (name.triggerMetadata.regexPatterns.length > 0) {
                      const intl2 = intl10.intl;
                      const obj4 = { keywordCount: name.triggerMetadata.keywordFilter.length, regexPatternCount: name.triggerMetadata.regexPatterns.length };
                      formatToPlainStringResult = intl2.formatToPlainString(intl10.t.xZUvxR, obj4);
                    } else {
                      const intl = intl10.intl;
                      const obj5 = { keywordCount: name.triggerMetadata.keywordFilter.length };
                      formatToPlainStringResult = intl.formatToPlainString(intl10.t.dJN7Lk, obj5);
                    }
                    tmp8 = formatToPlainStringResult;
                  }
                  str2 = tmp8;
                }
                if (str2 == null) {
                  str2 = "";
                }
                if (AutomodTriggerType.KEYWORD === triggerType) {
                  const intl7 = intl10.intl;
                  str3 = intl7.string(intl10.t.TzvaeK);
                } else if (AutomodTriggerType.ML_SPAM === triggerType) {
                  const intl6 = intl10.intl;
                  str3 = intl6.string(intl10.t.jBZSQl);
                } else if (AutomodTriggerType.DEFAULT_KEYWORD_LIST === triggerType) {
                  const intl5 = intl10.intl;
                  str3 = intl5.string(intl10.t.Drc8ft);
                } else if (AutomodTriggerType.MENTION_SPAM === triggerType) {
                  const intl4 = intl10.intl;
                  str3 = intl4.string(intl10.t.flhXO4);
                } else if (AutomodTriggerType.USER_PROFILE === triggerType) {
                  const intl3 = intl10.intl;
                  str3 = intl3.string(intl10.t.A35LyL);
                } else {
                  str3 = null;
                  if (AutomodTriggerType.APPLICATION === triggerType) {
                    const intl9 = intl10.intl;
                    str3 = intl9.string(intl10.t.kHNeDa);
                  }
                }
                if (str3 == null) {
                  str3 = "";
                }
                str4 = undefined;
                if (triggerType === AutomodTriggerType.KEYWORD) {
                  const intl8 = intl10.intl;
                  str4 = intl8.formatToPlainString(intl10.t.yNec2m, {});
                }
                if (str4 == null) {
                  str4 = "";
                }
                tmp = obj2;
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