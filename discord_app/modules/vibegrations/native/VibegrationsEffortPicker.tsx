// === Module 16552: VibegrationsEffortPicker ===

// Module 16552 (VibegrationsEffortPicker)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import VibegrationsEffortTiers from "VibegrationsEffortTiers" /* 16553 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16554 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((settings) => {
  const cResult = settings(onChange[5]).c(37);
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  let obj = settings(onChange[5]);
  [r10023, _slicedToArray] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(disabled(tmp2[7]).GDs9Vq);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult1 = intl2.string(disabled(tmp2[7])["9FRudW"]);
    cResult[2] = stringResult1;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult2 = intl3.string(disabled(tmp2[7])["4AsQHS"]);
    cResult[3] = stringResult2;
  }
  if (cResult[4] !== onChange) {
    class A {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        tmp = onChange(obj.vibegrationsNormalizeFast(settings));
        return;
      }
    }
    cResult[4] = onChange;
    cResult[5] = A;
  } else {
    class A {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        tmp = onChange(obj.vibegrationsNormalizeFast(settings));
        return;
      }
    }
  }
  noop = A;
  if (cResult[6] === settings) {
    class A {
      constructor(arg0) {
        obj = closure_0(closure_2[8]);
        tmp = onChange(obj.vibegrationsNormalizeFast(settings));
        return;
      }
    }
    if (cResult[9] === A) {
      class A {
        constructor(arg0) {
          obj = closure_0(closure_2[8]);
          tmp = onChange(obj.vibegrationsNormalizeFast(settings));
          return;
        }
      }
      class B {
        constructor(arg0) {
          if (settings !== settings.tier) {
            tmp2 = closure_4;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[8]);
            tmp5 = closure_4(obj.vibegrationsWithTier(tmp, settings));
          }
          return;
        }
      }
      if (cResult[12] !== disabled) {
        class A {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            tmp = onChange(obj.vibegrationsNormalizeFast(settings));
            return;
          }
        }
        const mapped = arr.map((value) => {
          const obj = { label: VibegrationsEffortTiers.vibegrationsTierLabel(value), subLabel: null, value: null, disabled: null };
          obj.subLabel = VibegrationsEffortTiers.vibegrationsTierDescription(value);
          obj.value = value;
          obj.disabled = disabled;
          return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
        });
        class B {
          constructor(arg0) {
            if (settings !== settings.tier) {
              tmp2 = closure_4;
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[8]);
              tmp5 = closure_4(obj.vibegrationsWithTier(tmp, settings));
            }
            return;
          }
        }
        cResult[12] = disabled;
        cResult[13] = mapped;
      } else {
        class A {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            tmp = onChange(obj.vibegrationsNormalizeFast(settings));
            return;
          }
        }
      }
      if (cResult[14] === settings.tier) {
        class A {
          constructor(arg0) {
            obj = closure_0(closure_2[8]);
            tmp = onChange(obj.vibegrationsNormalizeFast(settings));
            return;
          }
        }
      }
      let obj2 = { hasIcons: false, value: tmp17, onChange: B, title: undefined, accessibilityLabel: tmp6, children: tmp20 };
      const tmp24 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj2);
      cResult[14] = settings.tier;
      cResult[15] = undefined;
      cResult[16] = tmp20;
      cResult[17] = B;
      cResult[18] = tmp24;
    }
    class B {
      constructor(arg0) {
        if (settings !== settings.tier) {
          tmp2 = closure_4;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[8]);
          tmp5 = closure_4(obj.vibegrationsWithTier(tmp, settings));
        }
        return;
      }
    }
    cResult[9] = A;
    cResult[10] = settings;
    cResult[11] = B;
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const result = settings(onChange[8]).vibegrationsTierModel(settings, tiers, settings.tier);
  cResult[6] = settings;
  cResult[7] = tiers;
  cResult[8] = result;
  const tmpResult = settings(onChange[8]);
}) : ((settings) => {
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  ({ onChange: dependencyMap, hideTitle } = settings);
  if (hideTitle === undefined) {
    hideTitle = false;
  }
  _slicedToArray = undefined;
  [tmp2, c3] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const intl = settings(1126).intl;
  const stringResult = intl.string(disabled(3723).GDs9Vq);
  const intl2 = settings(1126).intl;
  const stringResult1 = intl2.string(disabled(3723)["9FRudW"]);
  const intl3 = settings(1126).intl;
  const stringResult2 = intl3.string(disabled(3723)["4AsQHS"]);
  const tmp = _slicedToArray(noop.useState(false), 2);
  let result = settings(16553).vibegrationsTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: null };
  const obj3 = {
    hasIcons: false,
    value: settings.tier,
    onChange(tier2) {
      if (tier2 !== settings.tier) {
        const vibegrationsWithTierResult = VibegrationsEffortTiers.vibegrationsWithTier(tmp, tier2);
        dependencyMap(VibegrationsEffortTiers.vibegrationsNormalizeFast(vibegrationsWithTierResult));
      }
    },
    title: null,
    accessibilityLabel: null,
    children: null
  };
  let tmp13;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  obj3.title = tmp13;
  obj3.accessibilityLabel = stringResult;
  const prop = tmp4(6747).VIBEGRATIONS_MODEL_TIERS;
  obj3.children = prop.map((value) => {
    const obj = { label: VibegrationsEffortTiers.vibegrationsTierLabel(value), subLabel: null, value: null, disabled: null };
    obj.subLabel = VibegrationsEffortTiers.vibegrationsTierDescription(value);
    obj.value = value;
    obj.disabled = disabled;
    return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
  });
  const items = [closure_6(settings(6072).TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, arrow: null, accessibilityState: null, onPress: null };
  const intl4 = tmp4(1126).intl;
  obj5.label = intl4.string(disabled(3723).IaLFoX);
  obj5.arrow = !tmp2;
  obj5.accessibilityState = { expanded: tmp2 };
  obj5.onPress = callback;
  obj4.children = closure_6(settings(5993).TableRow, obj5);
  items[1] = closure_6(settings(6074).TableRowGroup, obj4);
  let tmp11Result = null;
  if (tmp2) {
    let tmp12Result = null;
    if (null != result) {
      const obj6 = {
        hasIcons: false,
        value: result,
        onChange(arg0) {
              const result = VibegrationsEffortTiers.vibegrationsPickTierModel(settings, settings.tier, arg0);
              dependencyMap(VibegrationsEffortTiers.vibegrationsNormalizeFast(result));
            },
        title: stringResult1,
        accessibilityLabel: stringResult1,
        children: null
      };
      const main = choices.main;
      obj6.children = main.map((label) => timestampProducer(TableRadioRow.TableRadioRow, { label: label.label, subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled }, label.id));
      tmp12Result = closure_6(tmp4(6072).TableRadioGroup, obj6);
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    if (str == null) {
      let thinking;
      if (tiers != null) {
        if (tiers[settings.tier] != null) {
          thinking = tmp18.thinking;
        }
      }
      str = thinking;
    }
    if (str == null) {
      str = "";
    }
    const obj7 = {
      hasIcons: false,
      value: str,
      onChange(thinking) {
          const obj = {};
          const merged = Object.assign(settings);
          obj.thinking = thinking;
          dependencyMap(VibegrationsEffortTiers.vibegrationsNormalizeFast(obj));
        },
      title: stringResult2,
      accessibilityLabel: stringResult2,
      children: null
    };
    const thinking1 = choices.thinking;
    obj7.children = thinking1.map((value) => {
      let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
    });
    items1[1] = closure_6(tmp4(6072).TableRadioGroup, obj7);
    let tmp12Result2 = null;
    if (tmp4Result.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: null };
      const obj9 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
      const intl5 = tmp4(1126).intl;
      obj9.label = intl5.string(disabled(3723).SYLSgx);
      const intl6 = tmp4(1126).intl;
      obj9.subLabel = intl6.string(disabled(3723).HITWAI);
      obj9.value = true === settings.fast;
      obj9.disabled = disabled;
      obj9.onValueChange = function onValueChange(fast) {
        const obj = {};
        const merged = Object.assign(settings);
        obj.fast = fast;
        dependencyMap(VibegrationsEffortTiers.vibegrationsNormalizeFast(obj));
      };
      obj8.children = closure_6(tmp4(6698).TableSwitchRow, obj9);
      tmp12Result2 = closure_6(tmp4(6074).TableRowGroup, obj8);
    }
    const obj10 = { children: null };
    items1[2] = tmp12Result2;
    obj10.children = items1;
    tmp11Result = closure_8(closure_7, obj10);
    tmp4Result = tmp4(16553);
  }
  items[2] = tmp11Result;
  obj2.children = items;
  return closure_8(settings(5593).Stack, obj2);
});
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default tmp3;
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((initialSettings) => {
  const cResult = c.c(8);
  ({ tiers, choices, onChange } = initialSettings);
  [tmp5, importDefault] = noop.useState(initialSettings.initialSettings);
  if (cResult[0] !== onChange) {
    const fn = function c(arg0) {
      importDefault(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3723.GDs9Vq);
    const tmp10 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === choices) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === tmp5) {
        if (cResult[6] === tiers) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  const obj3 = { header: tmp7, children: null };
  const tmp4 = _slicedToArray(noop.useState(initialSettings.initialSettings), 2);
  obj3.children = timestampProducer(View, { children: timestampProducer(closure_9, { settings: tmp5, tiers, choices, disabled: false, onChange: tmp6, hideTitle: true }) });
  const tmp12 = timestampProducer(ActionSheet.ActionSheet, obj3);
  cResult[3] = choices;
  cResult[4] = tmp6;
  cResult[5] = tmp5;
  cResult[6] = tiers;
  cResult[7] = tmp12;
  tmp11 = tmp12;
  const obj4 = { children: timestampProducer(closure_9, { settings: tmp5, tiers, choices, disabled: false, onChange: tmp6, hideTitle: true }) };
}) : ((onChange) => {
  onChange = onChange.onChange;
  ({ tiers, choices } = onChange);
  const tmp = _slicedToArray(noop.useState(onChange.initialSettings), 2);
  closure_1 = tmp[1];
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3723.GDs9Vq);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = timestampProducer(View, { children: timestampProducer(closure_9, { settings: tmp[0], tiers, choices, disabled: false, onChange: callback, hideTitle: true }) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
});