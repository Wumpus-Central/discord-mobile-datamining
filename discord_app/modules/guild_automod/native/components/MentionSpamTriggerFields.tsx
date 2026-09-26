// discord_app/modules/guild_automod/native/components/MentionSpamTriggerFields.tsx
import AutomodRuleUtils from "../../AutomodRuleUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(11341);
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default function MentionSpamTriggerFields(rule) {
  rule = rule.rule;
  ({ onChangeRule: dependencyMap, onValidityChange: _slicedToArray } = rule);
  noop = undefined;
  ({ mentionTotalLimit, mentionRaidProtectionEnabled } = rule.triggerMetadata);
  const tmp = closure_9();
  let isMentionRaidExperimentEnabled = rule(9559).useIsMentionRaidExperimentEnabled(rule.guildId, false);
  const intl = rule(1115).intl;
  const stringResult = intl.string(rule(1115).t["s/26oQ"]);
  let obj = rule(9559);
  [tmp7, c3] = noop.useState(true);
  let obj2 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl2 = rule(1115).intl;
  obj2.title = intl2.string(rule(1115).t.IGfuTa);
  let tmp9;
  if (!tmp7) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1115).intl;
    const obj4 = { minimum, maximum };
    obj3.children = intl3.formatToPlainString(tmp2(1115).t["8Y5zsp"], obj4);
    tmp9 = closure_7(tmp2(4832).Text, obj3);
  }
  obj2.helperText = tmp9;
  const obj5 = { label: stringResult, subLabel: null, trailing: null };
  const intl4 = tmp2(1115).intl;
  obj5.subLabel = intl4.string(rule(1115).t["8uW4/N"]);
  const obj6 = { style: tmp.limitField, children: null };
  const obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange(arg0) {
      const NumberResult = Number(arg0);
      let isFiniteResult = "" !== arg0;
      let result = isFiniteResult;
      if (isFiniteResult) {
        result = AutomodRuleUtils.isValidMentionSpamLimit(NumberResult);
      }
      _undefined(result);
      if (_slicedToArray != null) {
        _slicedToArray(result);
      }
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(NumberResult);
      }
      if (isFiniteResult) {
        const obj2 = {};
        const merged = Object.assign(rule);
        const obj3 = {};
        const merged1 = Object.assign(rule.triggerMetadata);
        obj3.mentionTotalLimit = NumberResult;
        obj2.triggerMetadata = obj3;
        dependencyMap(obj2);
      }
    },
    status: "error",
    accessibilityLabel: stringResult,
  };
  obj6.children = closure_7(rule(6031).TextField, obj7);
  obj5.trailing = closure_7(View, obj6);
  const items = [closure_7(rule(5917).TableRow, obj5)];
  if (isMentionRaidExperimentEnabled) {
    const obj8 = { label: null, subLabel: null, checked: null, onPress: null };
    const intl5 = tmp2(1115).intl;
    obj8.label = intl5.string(tmp2(1115).t.XnuC9g);
    const intl6 = tmp2(1115).intl;
    obj8.subLabel = intl6.string(tmp2(1115).t.EDBe5m);
    obj8.checked = mentionRaidProtectionEnabled;
    obj8.onPress = function onPress(mentionRaidProtectionEnabled) {
      const obj = {};
      const merged = Object.assign(rule);
      const obj2 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      obj2.mentionRaidProtectionEnabled = mentionRaidProtectionEnabled;
      obj.triggerMetadata = obj2;
      return dependencyMap(obj);
    };
    isMentionRaidExperimentEnabled = closure_7(tmp2(5916).TableCheckboxRow, obj8);
  }
  items[1] = isMentionRaidExperimentEnabled;
  obj2.children = items;
  return closure_8(rule(5999).TableRowGroup, obj2);
}
