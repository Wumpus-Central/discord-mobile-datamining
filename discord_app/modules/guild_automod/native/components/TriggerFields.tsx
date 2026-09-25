// discord_app/modules/guild_automod/native/components/TriggerFields.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AutomodRuleUtils from "../../AutomodRuleUtils.tsx";
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields.tsx";
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields.tsx";
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields.tsx";
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(onValidityChange) {
  ({ rule, onChangeRule } = onValidityChange);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["1YgPj/"]);
    let tmp3 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule, onValidityChange: onValidityChange.onValidityChange };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, {
        rule,
        onChangeRule,
        onValidityChange: onValidityChange.onValidityChange,
      });
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
}
