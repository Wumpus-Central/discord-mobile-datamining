// === Module 20008: MentionSpamTriggerFields ===

// Module 20008 (MentionSpamTriggerFields)
import AutomodRuleUtils from "AutomodRuleUtils" /* 19991 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(13524);
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: closure_6 } = Constants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5143);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default function MentionSpamTriggerFields(rule) {
  rule = rule.rule;
  ({ onChangeRule: dependencyMap, onValidityChange: _slicedToArray } = rule);
  noop = undefined;
  ({ mentionTotalLimit, mentionRaidProtectionEnabled } = rule.triggerMetadata);
  const tmp = closure_9();
  let hasMentionRaidLimitAccess = rule(19227).useHasMentionRaidLimitAccess(rule.guildId);
  const intl = rule(1113).intl;
  const stringResult = intl.string(rule(1113).t["s/26oQ"]);
  let obj = rule(19227);
  [tmp7, c3] = noop.useState(true);
  let obj2 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl2 = rule(1113).intl;
  obj2.title = intl2.string(rule(1113).t.IGfuTa);
  let tmp9;
  if (!tmp7) {
    let obj3 = { variant: "body-xs/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1113).intl;
    const obj4 = { minimum, maximum };
    obj3.children = intl3.formatToPlainString(tmp2(1113).t["8Y5zsp"], obj4);
    tmp9 = closure_7(tmp2(5763).Text, obj3);
  }
  obj2.helperText = tmp9;
  const obj5 = { label: stringResult, subLabel: null, trailing: null };
  const intl4 = tmp2(1113).intl;
  obj5.subLabel = intl4.string(rule(1113).t["8uW4/N"]);
  const obj6 = { style: tmp.limitField, children: null };
  const obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange: function handleChangeLimit(arg0) {
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
    accessibilityLabel: stringResult
  };
  obj6.children = closure_7(rule(7233).TextField, obj7);
  obj5.trailing = closure_7(View, obj6);
  items = [closure_7(rule(7119).TableRow, obj5), ];
  if (hasMentionRaidLimitAccess) {
    const obj8 = { label: null, subLabel: null, checked: null, onPress: null };
    const intl5 = tmp2(1113).intl;
    obj8.label = intl5.string(tmp2(1113).t.XnuC9g);
    const intl6 = tmp2(1113).intl;
    obj8.subLabel = intl6.string(tmp2(1113).t.EDBe5m);
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
    hasMentionRaidLimitAccess = closure_7(tmp2(7118).TableCheckboxRow, obj8);
  }
  items[1] = hasMentionRaidLimitAccess;
  obj2.children = items;
  return closure_8(rule(7204).TableRowGroup, obj2);
};