// === Module 18187: TriggerFields ===

// Module 18187 (TriggerFields)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 18171 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 18188 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 18189 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 18193 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 18197 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TriggerFields(arg0) {
  let stringResult = dependencyMap;
  const cResult = c.c(14);
  ({ rule, onChangeRule, onValidityChange } = arg0);
  if (obj2.isRuleMLSpamFilter(rule)) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/normal", color: "text-default", children: null };
      const intl = util.intl;
      stringResult = intl.string(util.t["1YgPj/"]);
      obj3.children = stringResult;
      const tmp28 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: null });
      cResult[0] = tmp28;
      let first = tmp28;
    } else {
      first = cResult[0];
    }
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      if (cResult[1] === onChangeRule) {
        if (cResult[2] === onValidityChange) {
        }
      }
      const obj4 = { rule, onChangeRule, onValidityChange };
      const tmp23 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule, onValidityChange });
      cResult[1] = onChangeRule;
      cResult[2] = onValidityChange;
      cResult[3] = rule;
      cResult[4] = tmp23;
    } else {
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        if (cResult[5] === onChangeRule) {
        }
        const obj5 = { rule, onChangeRule };
        const tmp18 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
        cResult[5] = onChangeRule;
        cResult[6] = rule;
        cResult[7] = tmp18;
      } else {
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          if (cResult[8] === onChangeRule) {
          }
          const obj6 = { rule, onChangeRule };
          const tmp13 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
          cResult[8] = onChangeRule;
          cResult[9] = rule;
          cResult[10] = tmp13;
        } else {
          if (!tmpResult7.isRuleUserProfileFilter(rule)) {
            if (!tmpResult8.isRuleKeywordFilter(rule)) {
              return null;
            }
            tmpResult8 = AutomodRuleUtils;
          }
          if (cResult[11] === onChangeRule) {
          }
          const obj7 = { rule, onChangeRule };
          const tmp8 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          cResult[11] = onChangeRule;
          cResult[12] = rule;
          cResult[13] = tmp8;
          tmpResult7 = AutomodRuleUtils;
        }
        tmpResult6 = AutomodRuleUtils;
      }
      tmpResult5 = AutomodRuleUtils;
    }
    tmpResult = AutomodRuleUtils;
  }
  obj2 = AutomodRuleUtils;
}) : (function TriggerFields(onValidityChange) {
  ({ rule, onChangeRule } = onValidityChange);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["1YgPj/"]);
    let tmp3 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "text-default", children: null });
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
});