// === Module 17866: TriggerFields ===

// Module 17866 (TriggerFields)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17852 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17867 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17868 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17872 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17876 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(arg0) {
  ({ rule, onChangeRule } = arg0);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["1YgPj/"]);
    let tmp3 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule });
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