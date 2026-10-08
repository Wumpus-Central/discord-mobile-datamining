// discord_app/modules/guild_automod/native/components/MentionSpamTriggerFields.tsx
import AutomodRuleUtils from "../../AutomodRuleUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(11473);
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MentionSpamTriggerFields(rule) {
      const cResult = rule(onChangeRule[7]).c(25);
      rule = rule.rule;
      onChangeRule = rule.onChangeRule;
      const onValidityChange = rule.onValidityChange;
      const tmp4 = closure_9();
      ({ mentionRaidProtectionEnabled, mentionTotalLimit } = rule.triggerMetadata);
      let obj = rule(onChangeRule[7]);
      const hasMentionRaidLimitAccess = rule(onChangeRule[8]).useHasMentionRaidLimitAccess(rule.guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[9]).intl;
        const stringResult = intl.string(tmp(tmp2[9]).t["s/26oQ"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      let obj2 = rule(onChangeRule[8]);
      [tmp9, noop] = onValidityChange(noop.useState(true), 2);
      if (cResult[1] === onChangeRule) {
        if (cResult[2] === onValidityChange) {
          if (cResult[3] === rule) {
            let tmp10 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[9]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[9]).t.IGfuTa);
            cResult[5] = stringResult1;
            let tmp11 = stringResult1;
          } else {
            tmp11 = cResult[5];
          }
          if (cResult[6] !== tmp9) {
            let tmp14;
            if (!tmp9) {
              let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
              const intl3 = tmp(tmp2[9]).intl;
              const obj4 = { minimum, maximum };
              obj3.children = intl3.formatToPlainString(tmp(tmp2[9]).t["8Y5zsp"], obj4);
              tmp14 = closure_7(tmp(tmp2[11]).Text, obj3);
            }
            cResult[6] = tmp9;
            cResult[7] = tmp14;
            let tmp13 = tmp14;
          } else {
            tmp13 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[9]).intl;
            const stringResult2 = intl4.string(tmp(tmp2[9]).t["8uW4/N"]);
            cResult[8] = stringResult2;
            let tmp18 = stringResult2;
          } else {
            tmp18 = cResult[8];
          }
          const _String = String;
          const _String2 = String;
          const StringResult = String(mentionTotalLimit);
          if (cResult[9] === tmp10) {
            if (cResult[10] === StringResult) {
              if (cResult[11] === str) {
                let tmp22 = cResult[12];
              }
              if (cResult[13] === tmp4.limitField) {
                if (cResult[14] === tmp22) {
                  let tmp25 = cResult[15];
                }
                if (cResult[16] === mentionRaidProtectionEnabled) {
                  if (cResult[17] === onChangeRule) {
                    if (cResult[18] === hasMentionRaidLimitAccess) {
                      if (cResult[19] === rule) {
                        let tmp29 = cResult[20];
                      }
                      if (cResult[21] === tmp25) {
                        if (cResult[22] === tmp29) {
                          if (cResult[23] === tmp13) {
                            let tmp32 = cResult[24];
                          }
                          return tmp32;
                        }
                      }
                      const obj5 = { title: tmp11, hasIcons: false, helperText: tmp13, children: null };
                      const items = [tmp25, tmp29];
                      obj5.children = items;
                      const tmp34 = closure_8(tmp(tmp2[15]).TableRowGroup, obj5);
                      cResult[21] = tmp25;
                      cResult[22] = tmp29;
                      cResult[23] = tmp13;
                      cResult[24] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                }
                let tmp30 = hasMentionRaidLimitAccess;
                if (hasMentionRaidLimitAccess) {
                  const obj6 = { label: null, subLabel: null, checked: null, onPress: null };
                  const intl5 = tmp(tmp2[9]).intl;
                  obj6.label = intl5.string(tmp(tmp2[9]).t.XnuC9g);
                  const intl6 = tmp(tmp2[9]).intl;
                  obj6.subLabel = intl6.string(tmp(tmp2[9]).t.EDBe5m);
                  obj6.checked = mentionRaidProtectionEnabled;
                  obj6.onPress = function onPress(mentionRaidProtectionEnabled) {
                    const obj = {};
                    const merged = Object.assign(rule);
                    const obj2 = {};
                    const merged1 = Object.assign(rule.triggerMetadata);
                    obj2.mentionRaidProtectionEnabled = mentionRaidProtectionEnabled;
                    obj.triggerMetadata = obj2;
                    return onChangeRule(obj);
                  };
                  tmp30 = closure_7(tmp(tmp2[14]).TableCheckboxRow, obj6);
                }
                cResult[16] = mentionRaidProtectionEnabled;
                cResult[17] = onChangeRule;
                cResult[18] = hasMentionRaidLimitAccess;
                cResult[19] = rule;
                cResult[20] = tmp30;
                tmp29 = tmp30;
              }
              const obj7 = { label: first, subLabel: tmp18, trailing: null };
              const obj8 = { style: tmp4.limitField, children: tmp22 };
              obj7.trailing = closure_7(View, obj8);
              const tmp28 = closure_7(tmp(tmp2[13]).TableRow, obj7);
              cResult[13] = tmp4.limitField;
              cResult[14] = tmp22;
              cResult[15] = tmp28;
              tmp25 = tmp28;
            }
          }
          const obj9 = {
            keyboardType: "number-pad",
            maxLength: String(maximum).length,
            textAlign: "center",
            defaultValue: StringResult,
            onChange: tmp10,
            status: "error",
            accessibilityLabel: first,
          };
          const tmp24 = closure_7(tmp(tmp2[12]).TextField, obj9);
          cResult[9] = tmp10;
          cResult[10] = StringResult;
          cResult[11] = "error";
          cResult[12] = tmp24;
          tmp22 = tmp24;
        }
      }
      function handleChangeLimit(arg0) {
        const NumberResult = Number(arg0);
        let isFiniteResult = "" !== arg0;
        let result = isFiniteResult;
        if (isFiniteResult) {
          result = AutomodRuleUtils.isValidMentionSpamLimit(NumberResult);
        }
        noop(result);
        if (onValidityChange != null) {
          onValidityChange(result);
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
          onChangeRule(obj2);
        }
      }
      cResult[1] = onChangeRule;
      cResult[2] = onValidityChange;
      cResult[3] = rule;
      cResult[4] = handleChangeLimit;
      tmp10 = handleChangeLimit;
      const tmp8 = onValidityChange(noop.useState(true), 2);
    }
  : function MentionSpamTriggerFields(rule) {
      rule = rule.rule;
      ({ onChangeRule: dependencyMap, onValidityChange: _slicedToArray } = rule);
      noop = undefined;
      ({ mentionTotalLimit, mentionRaidProtectionEnabled } = rule.triggerMetadata);
      const tmp = closure_9();
      let hasMentionRaidLimitAccess = rule(17319).useHasMentionRaidLimitAccess(rule.guildId);
      const intl = rule(1126).intl;
      const stringResult = intl.string(rule(1126).t["s/26oQ"]);
      let obj = rule(17319);
      [tmp7, c3] = noop.useState(true);
      let obj2 = { title: null, hasIcons: false, helperText: null, children: null };
      const intl2 = rule(1126).intl;
      obj2.title = intl2.string(rule(1126).t.IGfuTa);
      let tmp9;
      if (!tmp7) {
        let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
        const intl3 = tmp2(1126).intl;
        const obj4 = { minimum, maximum };
        obj3.children = intl3.formatToPlainString(tmp2(1126).t["8Y5zsp"], obj4);
        tmp9 = closure_7(tmp2(5086).Text, obj3);
      }
      obj2.helperText = tmp9;
      const obj5 = { label: stringResult, subLabel: null, trailing: null };
      const intl4 = tmp2(1126).intl;
      obj5.subLabel = intl4.string(rule(1126).t["8uW4/N"]);
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
        accessibilityLabel: stringResult,
      };
      obj6.children = closure_7(rule(6287).TextField, obj7);
      obj5.trailing = closure_7(View, obj6);
      const items = [closure_7(rule(6184).TableRow, obj5)];
      if (hasMentionRaidLimitAccess) {
        const obj8 = { label: null, subLabel: null, checked: null, onPress: null };
        const intl5 = tmp2(1126).intl;
        obj8.label = intl5.string(tmp2(1126).t.XnuC9g);
        const intl6 = tmp2(1126).intl;
        obj8.subLabel = intl6.string(tmp2(1126).t.EDBe5m);
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
        hasMentionRaidLimitAccess = closure_7(tmp2(6181).TableCheckboxRow, obj8);
      }
      items[1] = hasMentionRaidLimitAccess;
      obj2.children = items;
      return closure_8(rule(6267).TableRowGroup, obj2);
    };
