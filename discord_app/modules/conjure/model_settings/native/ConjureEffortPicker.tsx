// === Module 12507: ConjureEffortPicker ===

// Module 12507 (ConjureEffortPicker)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet from "ActionSheet" /* 7366 */;
import ConjureEffortTiers from "ConjureEffortTiers" /* 12508 */;
import ConjureModelLabels from "ConjureModelLabels" /* 12509 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class ConjureEffortPicker {
  constructor(arg0) {
    settings = global.settings;
    ({ tiers, choices, disabled } = global);
    ({ onChange, hideTitle } = global);
    if (hideTitle === undefined) {
      hideTitle = false;
    }
    closure_3 = undefined;
    tmp = closure_3(closure_4.useState(false), 2);
    [tmp2, closure_3] = tmp;
    tmp4 = settings;
    tmp5 = onChange;
    callback = closure_4.useCallback(() => _undefined((arg0) => !arg0), []);
    intl = settings(onChange[4]).intl;
    tmp6 = disabled;
    stringResult = intl.string(disabled(onChange[5]).aBPQxX);
    intl2 = settings(onChange[4]).intl;
    stringResult1 = intl2.string(disabled(onChange[5])["59TDiR"]);
    intl3 = settings(onChange[4]).intl;
    stringResult2 = intl3.string(disabled(onChange[5]).fpdVCO);
    obj = settings(onChange[6]);
    conjureTierModelResult = obj.conjureTierModel(settings, tiers, settings.tier);
    tmp11 = jsxs;
    obj1 = { direction: "vertical", spacing: disabled(onChange[8]).space.PX_16, children: null };
    tmp12 = jsx;
    obj14 = {
      hasIcons: false,
      value: settings.tier,
      onChange(tier2) {
            if (tier2 !== settings.tier) {
              const conjureWithTierResult = ConjureEffortTiers.conjureWithTier(tmp, tier2);
              dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjureWithTierResult));
            }
          },
      title: null,
      accessibilityLabel: null,
      children: null
    };
    tmp13 = undefined;
    if (!hideTitle) {
      tmp13 = stringResult;
    }
    obj14.title = tmp13;
    obj14.accessibilityLabel = stringResult;
    CONJURE_MODEL_TIERS = tmp4(tmp5[10]).CONJURE_MODEL_TIERS;
    obj14.children = CONJURE_MODEL_TIERS.map((value) => {
      const obj = { label: ConjureEffortTiers.conjureTierLabel(value), subLabel: null, value: null, disabled: null };
      obj.subLabel = ConjureEffortTiers.conjureTierDescription(value);
      obj.value = value;
      obj.disabled = disabled;
      return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
    });
    items = [, , ];
    items[0] = tmp12(settings(onChange[9]).TableRadioGroup, obj14);
    obj15 = { hasIcons: false, children: null };
    obj16 = { label: null, arrow: null, accessibilityState: null, onPress: null };
    intl4 = tmp4(tmp5[4]).intl;
    tmp4Result = tmp4(tmp5[6]);
    obj16.label = intl4.string(tmp4Result.conjureCustomizeMessage(choices));
    obj16.arrow = !tmp2;
    obj16.accessibilityState = { expanded: tmp2 };
    obj16.onPress = callback;
    obj15.children = tmp12(tmp4(tmp5[13]).TableRow, obj16);
    items[1] = tmp12(tmp4(tmp5[12]).TableRowGroup, obj15);
    tmp11Result = null;
    if (tmp2) {
      tmp15 = Fragment;
      tmp4Result1 = tmp4(tmp5[6]);
      tmp12Result = null;
      if (tmp4Result1.conjureCanPickModel(choices)) {
        tmp12Result = null;
        if (null != conjureTierModelResult) {
          obj17 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
          obj17.value = conjureTierModelResult;
          obj17.onChange = function onChange(arg0) {
            const conjurePickTierModelResult = ConjureEffortTiers.conjurePickTierModel(settings, settings.tier, arg0);
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjurePickTierModelResult));
          };
          obj17.title = stringResult1;
          obj17.accessibilityLabel = stringResult1;
          main = choices.main;
          obj17.children = main.map((label) => timestampProducer(TableRadioRow.TableRadioRow, { label: label.label, subLabel: label.provider_label, value: label.id, disabled }, label.id));
          tmp12Result = tmp12(tmp4(tmp5[9]).TableRadioGroup, obj17);
        }
      }
      items1 = [, , ];
      items1[0] = tmp12Result;
      str = settings.thinking;
      if (str == null) {
        thinking = undefined;
        if (tiers != null) {
          tmp18 = tiers[settings.tier];
          if (tmp18 != null) {
            thinking = tmp18.thinking;
          }
        }
        str = thinking;
      }
      if (str == null) {
        str = "";
      }
      obj18 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj18.value = str;
      obj18.onChange = function onChange(thinking) {
        const obj = {};
        const merged = Object.assign(settings);
        obj.thinking = thinking;
        dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
      };
      obj18.title = stringResult2;
      obj18.accessibilityLabel = stringResult2;
      thinking1 = choices.thinking;
      obj18.children = thinking1.map((value) => {
        let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
        if (tmp2 == null) {
          tmp2 = value;
        }
        return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
      });
      items1[1] = tmp12(tmp4(tmp5[9]).TableRadioGroup, obj18);
      tmp4Result2 = tmp4(tmp5[6]);
      tmp12Result1 = null;
      if (tmp4Result2.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
        obj19 = { hasIcons: false, children: null };
        obj20 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
        intl5 = tmp4(tmp5[4]).intl;
        obj20.label = intl5.string(tmp6(tmp5[5])["5AblQX"]);
        intl6 = tmp4(tmp5[4]).intl;
        obj20.subLabel = intl6.string(tmp6(tmp5[5]).QnUV8M);
        flag = true;
        obj20.value = true === settings.fast;
        obj20.disabled = disabled;
        obj20.onValueChange = function onValueChange(fast) {
          const obj = {};
          const merged = Object.assign(settings);
          obj.fast = fast;
          dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
        };
        obj19.children = tmp12(tmp4(tmp5[15]).TableSwitchRow, obj20);
        tmp12Result1 = tmp12(tmp4(tmp5[12]).TableRowGroup, obj19);
      }
      obj21 = { children: null };
      items1[2] = tmp12Result1;
      obj21.children = items1;
      tmp11Result = tmp11(tmp15, obj21);
    }
    items[2] = tmp11Result;
    obj1.children = items;
    return tmp11(settings(onChange[7]).Stack, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default ConjureEffortPicker;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export function ConjureEffortPickerSheet(onChange) {
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
  obj2.title = intl.string(_modDef3868.aBPQxX);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = timestampProducer(View, { children: timestampProducer(ConjureEffortPicker, { settings: tmp[0], tiers, choices, disabled: false, onChange: callback, hideTitle: true }) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
}