// === Module 16556: ConjureEffortPicker ===

// Module 16556 (ConjureEffortPicker)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import TableRadioRow2 from "TableRadioRow" /* 6071 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 16557 */;
import ConjureModelLabels from "ConjureModelLabels" /* 16558 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let settings;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((settings) => {
  let choices;
  let disabled;
  let onChange;
  let tiers;
  let tmp7;
  const tmp = settings;
  let tmp2 = onChange;
  let obj = settings(onChange[5]);
  const cResult = obj.c(37);
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  onChange = settings.onChange;
  const hideTitle = settings.hideTitle;
  const tmp4 = undefined !== hideTitle && hideTitle;
  const tmp5 = _slicedToArray(G.useState(false), 2);
  [r10023, _slicedToArray] = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[6]).intl;
    const stringResult = intl.string(disabled(tmp2[7]).aBPQxX);
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[6]).intl;
    cResult[2] = intl2.string(disabled(tmp2[7])["59TDiR"]);
    const stringResult1 = intl2.string(disabled(tmp2[7])["59TDiR"]);
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(tmp2[6]).intl;
    cResult[3] = intl3.string(disabled(tmp2[7]).fpdVCO);
    const stringResult2 = intl3.string(disabled(tmp2[7]).fpdVCO);
  }
  if (cResult[4] !== onChange) {
    class G {
      constructor(conjurePickTierModelResult) {
        const obj = ConjureEffortTiers;
        onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
      }
    }
    cResult[4] = onChange;
    cResult[5] = G;
  } else {
    class G {
      constructor(conjurePickTierModelResult) {
        const obj = ConjureEffortTiers;
        onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
      }
    }
  }
  G = tmp16;
  if (cResult[6] === settings) {
    class G {
      constructor(conjurePickTierModelResult) {
        const obj = ConjureEffortTiers;
        onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
      }
    }
    if (cResult[9] === tmp16) {
      class G {
        constructor(conjurePickTierModelResult) {
          const obj = ConjureEffortTiers;
          onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
        }
      }
      if (!tmp4) {
        class G {
          constructor(conjurePickTierModelResult) {
            const obj = ConjureEffortTiers;
            onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
          }
        }
      }
      if (cResult[12] !== disabled) {
        class G {
          constructor(conjurePickTierModelResult) {
            const obj = ConjureEffortTiers;
            onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
          }
        }
        const mapped = arr.map((value) => {
          let obj2;
          let obj3;
          const obj = { label: obj2.conjureTierLabel(value), subLabel: obj3.conjureTierDescription(value), value, disabled };
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          obj2 = ConjureEffortTiers;
          obj3 = ConjureEffortTiers;
          return metroRequire(TableRadioRow, obj, value);
        });
        cResult[12] = disabled;
        cResult[13] = mapped;
      } else {
        class G {
          constructor(conjurePickTierModelResult) {
            const obj = ConjureEffortTiers;
            onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
          }
        }
      }
      if (cResult[14] === settings.tier) {
        class G {
          constructor(conjurePickTierModelResult) {
            const obj = ConjureEffortTiers;
            onChange(obj.conjureNormalizeFast(conjurePickTierModelResult));
          }
        }
      }
      let obj2 = { hasIcons: false, value: tmp18, onChange: tmp19, title: undefined, accessibilityLabel: tmp7, children: tmp21 };
      cResult[14] = settings.tier;
      cResult[15] = undefined;
      cResult[16] = tmp21;
      cResult[17] = tmp19;
      cResult[18] = closure_6(tmp(tmp2[11]).TableRadioGroup, obj2);
      const tmp25 = closure_6(tmp(tmp2[11]).TableRadioGroup, obj2);
    }
    const fn2 = function x(tier2) {
      if (tier2 !== settings.tier) {
        const obj = ConjureEffortTiers;
        G(obj.conjureWithTier(tmp, tier2));
      }
    };
    cResult[9] = tmp16;
    cResult[10] = settings;
    cResult[11] = fn2;
  }
  const tmpResult = tmp(tmp2[8]);
  cResult[6] = settings;
  cResult[7] = tiers;
  cResult[8] = tmpResult.conjureTierModel(settings, tiers, settings.tier);
  tmpResult.conjureTierModel(settings, tiers, settings.tier);
}) : ((settings) => {
  let CONJURE_MODEL_TIERS;
  let TableRow;
  let TableSwitchRow;
  let _undefined;
  let c3;
  let choices;
  let disabled;
  let hideTitle;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let main;
  let obj5;
  let obj9;
  let thinking1;
  let tiers;
  let tmp13;
  let tmp2;
  settings = settings.settings;
  ({ tiers, choices, disabled } = settings);
  ({ onChange: dependencyMap, hideTitle } = settings);
  if (hideTitle === undefined) {
    hideTitle = false;
  }
  _slicedToArray = undefined;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  const callback = react.useCallback(() => _undefined((arg0) => !arg0), []);
  const intl = settings(1126).intl;
  const stringResult = intl.string(disabled(3723).aBPQxX);
  const intl2 = settings(1126).intl;
  const stringResult1 = intl2.string(disabled(3723)["59TDiR"]);
  const intl3 = settings(1126).intl;
  const stringResult2 = intl3.string(disabled(3723).fpdVCO);
  let obj = settings(16557);
  const conjureTierModelResult = obj.conjureTierModel(settings, tiers, settings.tier);
  let obj2 = { direction: "vertical", spacing: disabled(587).space.PX_16, children: items };
  const Stack = settings(5593).Stack;
  let obj3 = {
    hasIcons: false,
    value: settings.tier,
    onChange(tier2) {
      if (tier2 !== settings.tier) {
        const obj = ConjureEffortTiers;
        const conjureWithTierResult = obj.conjureWithTier(tmp, tier2);
        const obj2 = ConjureEffortTiers;
        dependencyMap(obj2.conjureNormalizeFast(conjureWithTierResult));
      }
    },
    title: tmp13,
    accessibilityLabel: stringResult,
    children: CONJURE_MODEL_TIERS.map((value) => {
      let obj2;
      let obj3;
      const obj = { label: obj2.conjureTierLabel(value), subLabel: obj3.conjureTierDescription(value), value, disabled };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      obj2 = ConjureEffortTiers;
      obj3 = ConjureEffortTiers;
      return metroRequire(TableRadioRow, obj, value);
    })
  };
  tmp13 = undefined;
  const TableRadioGroup = settings(6072).TableRadioGroup;
  if (!hideTitle) {
    tmp13 = stringResult;
  }
  CONJURE_MODEL_TIERS = tmp4(6747).CONJURE_MODEL_TIERS;
  items = [closure_6(TableRadioGroup, obj3), , ];
  const obj4 = { hasIcons: false, children: closure_6(TableRow, obj5) };
  const TableRowGroup = tmp4(6074).TableRowGroup;
  obj5 = { label: intl4.string(disabled(3723).eGqPbV), arrow: !tmp2, accessibilityState: { expanded: tmp2 }, onPress: callback };
  TableRow = tmp4(5993).TableRow;
  intl4 = tmp4(1126).intl;
  items[1] = closure_6(TableRowGroup, obj4);
  let tmp11Result = null;
  if (tmp2) {
    let tmp12Result = null;
    if (null != conjureTierModelResult) {
      const obj6 = {
        hasIcons: false,
        value: conjureTierModelResult,
        onChange(arg0) {
              const obj = ConjureEffortTiers;
              const conjurePickTierModelResult = obj.conjurePickTierModel(settings, settings.tier, arg0);
              const obj2 = ConjureEffortTiers;
              dependencyMap(obj2.conjureNormalizeFast(conjurePickTierModelResult));
            },
        title: stringResult1,
        accessibilityLabel: stringResult1,
        children: main.map((label) => {
              const obj = { label: label.label, subLabel: ConjureModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              return metroRequire(TableRadioRow, obj, label.id);
            })
      };
      main = choices.main;
      const TableRadioGroup2 = tmp4(6072).TableRadioGroup;
      tmp12Result = closure_6(TableRadioGroup2, obj6);
    }
    const items1 = [tmp12Result, , ];
    let str = settings.thinking;
    const TableRadioGroup3 = tmp4(6072).TableRadioGroup;
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
          const obj = { thinking };
          const merged = Object.assign(settings);
          const obj2 = ConjureEffortTiers;
          dependencyMap(obj2.conjureNormalizeFast(obj));
        },
      title: stringResult2,
      accessibilityLabel: stringResult2,
      children: thinking1.map((value) => {
          const TableRadioRow = TableRadioRow2.TableRadioRow;
          let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
          if (tmp2 == null) {
            tmp2 = value;
          }
          const obj = { label: tmp2, value, disabled };
          return metroRequire(TableRadioRow, obj, value);
        })
    };
    thinking1 = choices.thinking;
    items1[1] = closure_6(TableRadioGroup3, obj7);
    let tmp12Result2 = null;
    const tmp4Result = settings(16557);
    if (tmp4Result.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
      const obj8 = { hasIcons: false, children: closure_6(TableSwitchRow, obj9) };
      const TableRowGroup2 = tmp4(6074).TableRowGroup;
      obj9 = {
        label: intl5.string(disabled(3723)["5AblQX"]),
        subLabel: intl6.string(disabled(3723).QnUV8M),
        value: true === settings.fast,
        disabled,
        onValueChange(fast) {
              const obj = { fast };
              const merged = Object.assign(settings);
              const obj2 = ConjureEffortTiers;
              dependencyMap(obj2.conjureNormalizeFast(obj));
            }
      };
      TableSwitchRow = tmp4(6698).TableSwitchRow;
      intl5 = tmp4(1126).intl;
      intl6 = tmp4(1126).intl;
      tmp12Result2 = closure_6(TableRowGroup2, obj8);
    }
    const obj10 = { children: items1 };
    items1[2] = tmp12Result2;
    tmp11Result = closure_8(closure_7, obj10);
  }
  items[2] = tmp11Result;
  return closure_8(Stack, obj2);
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialSettings) => {
  let choices;
  let closure_129_1;
  let intl;
  let obj4;
  let onChange;
  let tiers;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ tiers, choices, onChange } = initialSettings);
  [tmp5, closure_129_1] = react.useState(initialSettings.initialSettings);
  _slicedToArray(react.useState(initialSettings.initialSettings), 2);
  if (cResult[0] !== onChange) {
    const fn = function c(arg0) {
      closure_1_1(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(_modDef3723.aBPQxX) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl7.intl;
    const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === choices) {
    if (cResult[4] === tmp6) {
      if (cResult[5] === tmp5) {
        let tmp11;
        if (cResult[6] === tiers) {
          tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  const obj3 = { header: tmp7, children: metroRequire(View, obj4) };
  obj4 = { children: metroRequire(closure_9, { settings: tmp5, tiers, choices, disabled: false, onChange: tmp6, hideTitle: true }) };
  const ActionSheet = ActionSheet2.ActionSheet;
  const tmp12 = metroRequire(ActionSheet, obj3);
  cResult[3] = choices;
  cResult[4] = tmp6;
  cResult[5] = tmp5;
  cResult[6] = tiers;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : ((onChange) => {
  let BottomSheetTitleHeader;
  let choices;
  let closure_1;
  let first;
  let intl;
  let obj2;
  let obj3;
  let tiers;
  onChange = onChange.onChange;
  closure_1 = undefined;
  ({ tiers, choices } = onChange);
  [first, closure_1] = react.useState(onChange.initialSettings);
  const items = [onChange];
  const callback = react.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: metroRequire(BottomSheetTitleHeader, obj2), children: metroRequire(View, obj3) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(_modDef3723.aBPQxX) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl7.intl;
  obj3 = { children: metroRequire(closure_9, { settings: first, tiers, choices, disabled: false, onChange: callback, hideTitle: true }) };
  return metroRequire(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default tmp3;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export const ConjureEffortPickerSheet = tmp4;