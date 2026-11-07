// discord_app/modules/conjure/model_settings/native/ConjureEffortPicker.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4026 from "../../intl/ConjureUntranslated.messages.js";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ConjureEffortTiers from "../ConjureEffortTiers.tsx";
import ConjureModelLabels from "../ConjureModelLabels.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    conjureCanPickModelResult = obj.conjureCanPickModel(choices);
    obj2 = settings(onChange[6]);
    conjureTierModelResult = obj2.conjureTierModel(settings, tiers, settings.tier);
    tmp12 = jsxs;
    obj1 = { direction: "vertical", spacing: disabled(onChange[8]).space.PX_16, children: null };
    tmp13 = jsx;
    obj14 = {
      hasIcons: false,
      value: settings.tier,
      onChange(value) {
        let conjureTierAvailableResult = value !== settings.tier;
        if (conjureTierAvailableResult) {
          conjureTierAvailableResult = ConjureEffortTiers.conjureTierAvailable(value);
        }
        if (conjureTierAvailableResult) {
          const conjureWithTierResult = ConjureEffortTiers.conjureWithTier(settings, value);
          dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjureWithTierResult));
        }
      },
      title: null,
      accessibilityLabel: null,
      children: null,
    };
    tmp14 = undefined;
    if (!hideTitle) {
      tmp14 = stringResult;
    }
    obj14.title = tmp14;
    obj14.accessibilityLabel = stringResult;
    CONJURE_MODEL_TIERS = tmp4(tmp5[10]).CONJURE_MODEL_TIERS;
    obj14.children = CONJURE_MODEL_TIERS.map((value) => {
      const obj = { label: ConjureEffortTiers.conjureTierLabel(value), subLabel: null, value: null, disabled: null };
      if (obj3.conjureTierAvailable(value)) {
        let result = ConjureEffortTiers.conjureTierDescription(value);
        const tmp2Result = ConjureEffortTiers;
      } else {
        const intl = util.intl;
        result = intl.string(_modDef4026["17yEQw"]);
      }
      obj.subLabel = result;
      obj.value = value;
      let tmp6 = disabled;
      if (!disabled) {
        tmp6 = !ConjureEffortTiers.conjureTierAvailable(value);
        const tmp2Result2 = ConjureEffortTiers;
      }
      obj.disabled = tmp6;
      return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
    });
    items = [, ,];
    items[0] = tmp13(settings(onChange[9]).TableRadioGroup, obj14);
    tmp13Result = null;
    if (conjureCanPickModelResult) {
      obj15 = { hasIcons: false, children: null };
      obj16 = { label: null, arrow: null, accessibilityState: null, onPress: null };
      intl4 = tmp4(tmp5[4]).intl;
      obj16.label = intl4.string(tmp6(tmp5[5]).YLHRzA);
      obj16.arrow = !tmp2;
      obj17 = { expanded: null };
      obj17.expanded = tmp2;
      obj16.accessibilityState = obj17;
      obj16.onPress = callback;
      obj15.children = tmp13(tmp4(tmp5[13]).TableRow, obj16);
      tmp13Result = tmp13(tmp4(tmp5[12]).TableRowGroup, obj15);
    }
    items[1] = tmp13Result;
    tmp12Result = null;
    if (conjureCanPickModelResult) {
      tmp12Result = null;
      if (tmp2) {
        tmp13Result1 = null;
        tmp17 = Fragment;
        if (null != conjureTierModelResult) {
          obj18 = {
            hasIcons: false,
            value: null,
            onChange: null,
            title: null,
            accessibilityLabel: null,
            children: null,
          };
          obj18.value = conjureTierModelResult;
          obj18.onChange = function onChange(arg0) {
            const conjurePickTierModelResult = ConjureEffortTiers.conjurePickTierModel(settings, settings.tier, arg0);
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(conjurePickTierModelResult));
          };
          obj18.title = stringResult1;
          obj18.accessibilityLabel = stringResult1;
          main = choices.main;
          obj18.children = main.map((label) =>
            timestampProducer(
              TableRadioRow.TableRadioRow,
              { label: label.label, subLabel: label.provider_label, value: label.id, disabled },
              label.id,
            ),
          );
          tmp13Result1 = tmp13(tmp4(tmp5[9]).TableRadioGroup, obj18);
        }
        items1 = [, ,];
        items1[0] = tmp13Result1;
        str = settings.thinking;
        if (str == null) {
          thinking = undefined;
          if (tiers != null) {
            tmp20 = tiers[settings.tier];
            if (tmp20 != null) {
              thinking = tmp20.thinking;
            }
          }
          str = thinking;
        }
        if (str == null) {
          str = "";
        }
        obj19 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
        obj19.value = str;
        obj19.onChange = function onChange(thinking) {
          const obj = {};
          const merged = Object.assign(settings);
          obj.thinking = thinking;
          dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
        };
        obj19.title = stringResult2;
        obj19.accessibilityLabel = stringResult2;
        thinking1 = choices.thinking;
        obj19.children = thinking1.map((value) => {
          let tmp2 = ConjureModelLabels.THINKING_LABELS[value];
          if (tmp2 == null) {
            tmp2 = value;
          }
          return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
        });
        items1[1] = tmp13(tmp4(tmp5[9]).TableRadioGroup, obj19);
        tmp4Result = tmp4(tmp5[6]);
        tmp13Result2 = null;
        if (tmp4Result.conjureCeilingSupportsFast(settings, tiers, choices.main)) {
          obj20 = { hasIcons: false, children: null };
          obj21 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
          intl5 = tmp4(tmp5[4]).intl;
          obj21.label = intl5.string(tmp6(tmp5[5])["5AblQX"]);
          intl6 = tmp4(tmp5[4]).intl;
          obj21.subLabel = intl6.string(tmp6(tmp5[5]).QnUV8M);
          flag = true;
          obj21.value = true === settings.fast;
          obj21.disabled = disabled;
          obj21.onValueChange = function onValueChange(fast) {
            const obj = {};
            const merged = Object.assign(settings);
            obj.fast = fast;
            dependencyMap(ConjureEffortTiers.conjureNormalizeFast(obj));
          };
          obj20.children = tmp13(tmp4(tmp5[15]).TableSwitchRow, obj21);
          tmp13Result2 = tmp13(tmp4(tmp5[12]).TableRowGroup, obj20);
        }
        obj22 = { children: null };
        items1[2] = tmp13Result2;
        obj22.children = items1;
        tmp12Result = tmp12(tmp17, obj22);
      }
    }
    items[2] = tmp12Result;
    obj1.children = items;
    return tmp12(settings(onChange[7]).Stack, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/model_settings/native/ConjureEffortPicker.tsx");

export default ConjureEffortPicker;
export const CONJURE_EFFORT_PICKER_SHEET_KEY = "ConjureEffortPickerSheet";
export function ConjureEffortPickerSheet(onChange) {
  onChange = onChange.onChange;
  ({ tiers, choices } = onChange);
  const tmp = _slicedToArray(noop.useState(onChange.initialSettings), 2);
  closure_1 = tmp[1];
  items = [onChange];
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef4026.aBPQxX);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = timestampProducer(View, {
    children: timestampProducer(ConjureEffortPicker, {
      settings: tmp[0],
      tiers,
      choices,
      disabled: false,
      onChange: callback,
      hideTitle: true,
    }),
  });
  return timestampProducer(ActionSheet.ActionSheet, obj);
}
