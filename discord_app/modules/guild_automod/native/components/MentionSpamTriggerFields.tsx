// === Module 17970: MentionSpamTriggerFields ===

// Module 17970 (MentionSpamTriggerFields)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(12121);
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default function MentionSpamTriggerFields(rule) {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  _slicedToArray = undefined;
  ({ mentionTotalLimit, mentionRaidProtectionEnabled } = rule.triggerMetadata);
  const tmp = closure_9();
  let isMentionRaidExperimentEnabled = rule(onChangeRule[6]).useIsMentionRaidExperimentEnabled(rule.guildId, false);
  const intl = rule(onChangeRule[7]).intl;
  const stringResult = intl.string(rule(onChangeRule[7]).t["s/26oQ"]);
  let obj = rule(onChangeRule[6]);
  [tmp7, c2] = noop.useState(true);
  let obj2 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl2 = rule(onChangeRule[7]).intl;
  obj2.title = intl2.string(rule(onChangeRule[7]).t.IGfuTa);
  let tmp9;
  if (!tmp7) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(tmp3[7]).intl;
    const obj4 = { minimum, maximum };
    obj3.children = intl3.formatToPlainString(tmp2(tmp3[7]).t["8Y5zsp"], obj4);
    tmp9 = closure_7(tmp2(tmp3[9]).Text, obj3);
  }
  obj2.helperText = tmp9;
  const obj5 = { label: stringResult, subLabel: null, trailing: null };
  const intl4 = tmp2(tmp3[7]).intl;
  obj5.subLabel = intl4.string(rule(onChangeRule[7]).t["8uW4/N"]);
  const obj6 = { style: tmp.limitField, children: null };
  const obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange(arg0) {
      const NumberResult = Number(arg0);
      let isFiniteResult = "" !== arg0;
      let tmp4 = isFiniteResult;
      if (isFiniteResult) {
        const _Number = Number;
        let isIntegerResult = Number.isInteger(NumberResult);
        if (isIntegerResult) {
          isIntegerResult = NumberResult >= minimum;
        }
        if (isIntegerResult) {
          isIntegerResult = NumberResult <= maximum;
        }
        tmp4 = isIntegerResult;
      }
      _undefined(tmp4);
      if (isFiniteResult) {
        const _Number2 = Number;
        isFiniteResult = Number.isFinite(NumberResult);
      }
      if (isFiniteResult) {
        const obj = {};
        const merged = Object.assign(rule);
        const obj2 = {};
        const merged1 = Object.assign(rule.triggerMetadata);
        obj2.mentionTotalLimit = NumberResult;
        obj.triggerMetadata = obj2;
        onChangeRule(obj);
      }
    },
    status: "error",
    accessibilityLabel: stringResult
  };
  obj6.children = closure_7(rule(onChangeRule[11]).TextField, obj7);
  obj5.trailing = closure_7(View, obj6);
  const items = [closure_7(rule(onChangeRule[10]).TableRow, obj5), ];
  if (isMentionRaidExperimentEnabled) {
    const obj8 = { label: null, subLabel: null, checked: null, onPress: null };
    const intl5 = tmp2(tmp3[7]).intl;
    obj8.label = intl5.string(tmp2(tmp3[7]).t.XnuC9g);
    const intl6 = tmp2(tmp3[7]).intl;
    obj8.subLabel = intl6.string(tmp2(tmp3[7]).t.EDBe5m);
    obj8.checked = mentionRaidProtectionEnabled;
    obj8.onPress = function onPress(mentionRaidProtectionEnabled) {
      const obj = {};
      const merged = Object.assign(rule);
      const obj2 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      obj2.mentionRaidProtectionEnabled = mentionRaidProtectionEnabled;
      obj.triggerMetadata = obj2;
      return onChangeRule(obj);
    };
    isMentionRaidExperimentEnabled = closure_7(tmp2(tmp3[12]).TableCheckboxRow, obj8);
  }
  items[1] = isMentionRaidExperimentEnabled;
  obj2.children = items;
  return closure_8(rule(onChangeRule[8]).TableRowGroup, obj2);
};