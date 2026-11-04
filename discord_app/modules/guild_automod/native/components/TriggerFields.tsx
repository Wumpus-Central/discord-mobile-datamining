// === Module 19957: TriggerFields ===

// Module 19957 (TriggerFields)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5761 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 19941 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 19958 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 19959 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 19963 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 19967 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(onValidityChange) {
  ({ rule, onChangeRule } = onValidityChange);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "body-md/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["1YgPj/"]);
    let tmp3 = jsx(Text_Text.Text, { variant: "body-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule, onValidityChange: onValidityChange.onValidityChange };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule, onValidityChange: onValidityChange.onValidityChange });
    } else {
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        const obj4 = { rule, onChangeRule };
        tmp3 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
      } else {
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          const obj5 = { rule, onChangeRule };
          tmp3 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
        } else {
          if (tmpResult7.isRuleUserProfileFilter(rule)) {
            const obj6 = { rule, onChangeRule };
            tmp3 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          } else {
            AutomodRuleUtils;
            tmp3 = null;
          }
          tmpResult7 = AutomodRuleUtils;
        }
        tmpResult6 = AutomodRuleUtils;
      }
      tmpResult5 = AutomodRuleUtils;
    }
    tmpResult = AutomodRuleUtils;
  }
  return tmp3;
};