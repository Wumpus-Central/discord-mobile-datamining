// === Module 16741: VibegrationsEffortPicker ===

// Module 16741 (VibegrationsEffortPicker)
import util from "util" /* 1115 */;
import _modDef3591 from "module_3591" /* 3591 */;
import TableRadioRow from "TableRadioRow" /* 5774 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7259 */;
import ActionSheet from "ActionSheet" /* 7307 */;
import VibegrationsEffortPresets from "VibegrationsEffortPresets" /* 16737 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16738 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class VibegrationsEffortPicker {
  constructor(arg0) {
    settings = global.settings;
    model = settings;
    choices = global.choices;
    disabled = global.disabled;
    ({ onChange, hideTitle } = global);
    if (hideTitle === undefined) {
      hideTitle = false;
    }
    closure_4 = undefined;
    tmp = closure_5(closure_6.useState(false), 2);
    [tmp2, closure_4] = tmp;
    tmp4 = model;
    tmp5 = disabled;
    callback = closure_6.useCallback(() => _undefined((arg0) => !arg0), []);
    obj = model(disabled[5]);
    result = obj.matchVibegrationsEffortPreset(settings, choices.main);
    intl = model(disabled[6]).intl;
    tmp7 = choices;
    stringResult = intl.string(choices(disabled[7]).GDs9Vq);
    intl2 = model(disabled[6]).intl;
    stringResult1 = intl2.string(choices(disabled[7])["9FRudW"]);
    intl3 = model(disabled[6]).intl;
    stringResult2 = intl3.string(choices(disabled[7])["4AsQHS"]);
    tmp11 = jsxs;
    obj1 = { direction: "vertical", spacing: choices(disabled[9]).space.PX_16, children: null };
    tmp12 = jsx;
    str = "";
    if (result >= 0) {
      tmp13 = globalThis;
      _String = String;
      str = String(result);
    }
    obj13 = {
      hasIcons: false,
      value: str,
      onChange(arg0) {
            const tmp3 = VibegrationsEffortPresets.VIBEGRATIONS_EFFORT_PRESETS[Number(undefined, arg0)];
            if (null != tmp3) {
              const result = VibegrationsEffortPresets.vibegrationsPresetTier(tmp3);
              const tmp15 = _objectWithoutProperties(result, closure_3);
              const tmpResult = VibegrationsEffortPresets;
              let tmp7 = tmp15;
              if (true === result.fast) {
                model = result.model;
                const main = choices.main;
                const found = main.find((id) => id.id === model);
                let supports_fast;
                if (found != null) {
                  supports_fast = found.supports_fast;
                }
                tmp7 = tmp15;
                if (true === supports_fast) {
                  const obj = {};
                  const merged = Object.assign(tmp15);
                  obj.fast = true;
                  tmp7 = obj;
                }
              }
              closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp7));
              const tmpResult2 = VibegrationsEffortPresets;
            }
          },
      title: null,
      accessibilityLabel: null,
      children: null
    };
    tmp14 = undefined;
    if (!hideTitle) {
      tmp14 = stringResult;
    }
    obj13.title = tmp14;
    obj13.accessibilityLabel = stringResult;
    prop = tmp4(tmp5[5]).VIBEGRATIONS_EFFORT_PRESETS;
    obj13.children = prop.map((summary, index) => {
      const obj = { label: summary.summary(), subLabel: null, value: null, disabled: null };
      model = summary.model;
      const main = choices.main;
      const found = main.find((id) => id.id === model);
      let label;
      if (found != null) {
        label = found.label;
      }
      if (label == null) {
        label = model;
      }
      let thinking = VibegrationsModelLabels.THINKING_LABELS[summary.thinking];
      if (thinking == null) {
        thinking = summary.thinking;
      }
      obj.subLabel = "" + label + " \u00B7 " + thinking;
      obj.value = String(index);
      obj.disabled = disabled;
      return React6(TableRadioRow.TableRadioRow, obj, index);
    });
    items = [, , , ];
    items[0] = tmp12(model(disabled[10]).TableRadioGroup, obj13);
    tmp12Result = null;
    if (result < 0) {
      obj14 = { variant: "text-xs/normal", color: "text-muted", children: null };
      tmp4Result = tmp4(tmp5[5]);
      obj14.children = tmp4Result.describeVibegrationsModelSettings(settings, choices.main);
      tmp12Result = tmp12(tmp4(tmp5[13]).Text, obj14);
    }
    items[1] = tmp12Result;
    obj15 = { hasIcons: false, children: null };
    obj16 = { label: null, arrow: null, accessibilityState: null, onPress: null };
    intl4 = tmp4(tmp5[6]).intl;
    obj16.label = intl4.string(tmp7(tmp5[7]).IaLFoX);
    obj16.arrow = !tmp2;
    obj16.accessibilityState = { expanded: tmp2 };
    obj16.onPress = callback;
    obj15.children = tmp12(tmp4(tmp5[15]).TableRow, obj16);
    items[2] = tmp12(tmp4(tmp5[14]).TableRowGroup, obj15);
    tmp11Result = null;
    if (tmp2) {
      tmp17 = Fragment;
      obj17 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj17.value = settings.main.model;
      obj17.onChange = function onChange(model) {
        const obj = {};
        const merged = Object.assign(model.main);
        obj.model = model;
        const tmp2 = _objectWithoutProperties(obj, closure_3);
        let tmp4 = tmp2;
        if (true === obj.fast) {
          model = obj.model;
          const main = choices.main;
          const found = main.find((id) => id.id === model);
          let supports_fast;
          if (found != null) {
            supports_fast = found.supports_fast;
          }
          tmp4 = tmp2;
          if (true === supports_fast) {
            const obj3 = {};
            const merged1 = Object.assign(tmp2);
            obj3.fast = true;
            tmp4 = obj3;
          }
        }
        closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
      };
      obj17.title = stringResult1;
      obj17.accessibilityLabel = stringResult1;
      main = choices.main;
      obj17.children = main.map((label) => React6(TableRadioRow.TableRadioRow, { label: label.label, subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider], value: label.id, disabled }, label.id));
      items1 = [, , ];
      items1[0] = tmp12(tmp4(tmp5[10]).TableRadioGroup, obj17);
      obj18 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj18.value = settings.main.thinking;
      obj18.onChange = function onChange(thinking) {
        const obj = {};
        const merged = Object.assign(model.main);
        obj.thinking = thinking;
        const tmp2 = _objectWithoutProperties(obj, closure_3);
        let tmp4 = tmp2;
        if (true === obj.fast) {
          model = obj.model;
          const main = choices.main;
          const found = main.find((id) => id.id === model);
          let supports_fast;
          if (found != null) {
            supports_fast = found.supports_fast;
          }
          tmp4 = tmp2;
          if (true === supports_fast) {
            const obj3 = {};
            const merged1 = Object.assign(tmp2);
            obj3.fast = true;
            tmp4 = obj3;
          }
        }
        closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
      };
      obj18.title = stringResult2;
      obj18.accessibilityLabel = stringResult2;
      thinking = choices.thinking;
      obj18.children = thinking.map((value) => {
        let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
        if (tmp2 == null) {
          tmp2 = value;
        }
        return React6(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
      });
      items1[1] = tmp12(tmp4(tmp5[10]).TableRadioGroup, obj18);
      model = settings.main.model;
      main1 = choices.main;
      found = main1.find((id) => id.id === model);
      supports_fast = undefined;
      if (found != null) {
        supports_fast = found.supports_fast;
      }
      flag = true;
      tmp12Result1 = null;
      if (true === supports_fast) {
        obj19 = { hasIcons: false, children: null };
        obj20 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
        intl5 = tmp4(tmp5[6]).intl;
        obj20.label = intl5.string(tmp7(tmp5[7]).SYLSgx);
        intl6 = tmp4(tmp5[6]).intl;
        obj20.subLabel = intl6.string(tmp7(tmp5[7]).HITWAI);
        obj20.value = true === settings.main.fast;
        obj20.disabled = disabled;
        obj20.onValueChange = function onValueChange(fast) {
          const obj = {};
          const merged = Object.assign(model.main);
          obj.fast = fast;
          const tmp2 = _objectWithoutProperties(obj, closure_3);
          let tmp4 = tmp2;
          if (true === obj.fast) {
            model = obj.model;
            const main = choices.main;
            const found = main.find((id) => id.id === model);
            let supports_fast;
            if (found != null) {
              supports_fast = found.supports_fast;
            }
            tmp4 = tmp2;
            if (true === supports_fast) {
              const obj3 = {};
              const merged1 = Object.assign(tmp2);
              obj3.fast = true;
              tmp4 = obj3;
            }
          }
          closure_1_3(VibegrationsEffortPresets.vibegrationsSettingsForTier(tmp4));
        };
        obj19.children = tmp12(tmp4(tmp5[16]).TableSwitchRow, obj20);
        tmp12Result1 = tmp12(tmp4(tmp5[14]).TableRowGroup, obj19);
      }
      obj21 = { children: null };
      items1[2] = tmp12Result1;
      obj21.children = items1;
      tmp11Result = tmp11(tmp17, obj21);
    }
    items[3] = tmp11Result;
    obj1.children = items;
    return tmp11(model(disabled[8]).Stack, obj1);
  }
}
let closure_3 = ["fast"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default VibegrationsEffortPicker;
export const describeVibegrationsEffort = function describeVibegrationsEffort(first1, landingModelChoicesResult) {
  const result = VibegrationsEffortPresets.matchVibegrationsEffortPreset(first1, landingModelChoicesResult.main);
  const obj2 = VibegrationsEffortPresets.VIBEGRATIONS_EFFORT_PRESETS[result];
  if (null != obj2) {
    let summaryResult = obj2.summary();
  } else {
    summaryResult = VibegrationsEffortPresets.describeVibegrationsModelSettings(first1, landingModelChoicesResult.main);
    const tmpResult = VibegrationsEffortPresets;
  }
  return summaryResult;
};
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = function VibegrationsEffortPickerSheet(choices) {
  const onChange = choices.onChange;
  const tmp = _slicedToArray(noop.useState(choices.initialSettings), 2);
  closure_1 = tmp[1];
  const items = [onChange];
  const callback = noop.useCallback((arg0) => {
    closure_1(arg0);
    onChange(arg0);
  }, items);
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3591.GDs9Vq);
  obj.header = React6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = React6(View, { children: React6(VibegrationsEffortPicker, { settings: tmp[0], choices: choices.choices, disabled: false, onChange: callback, hideTitle: true }) });
  return React6(ActionSheet.ActionSheet, obj);
};