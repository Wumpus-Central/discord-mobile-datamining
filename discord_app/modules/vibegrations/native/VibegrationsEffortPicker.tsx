// discord_app/modules/vibegrations/native/VibegrationsEffortPicker.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import TableRadioRow from "../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import VibegrationsEffortTiers from "../lib/VibegrationsEffortTiers.tsx";
import VibegrationsModelLabels from "../lib/VibegrationsModelLabels.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class VibegrationsEffortPicker {
  constructor(arg0) {
    settings = global.settings;
    tiers = global.tiers;
    choices = global.choices;
    disabled = global.disabled;
    ({ onChange, hideTitle } = global);
    if (hideTitle === undefined) {
      hideTitle = false;
    }
    closure_5 = undefined;
    tmp = disabled(onChange.useState(false), 2);
    [tmp2, closure_5] = tmp;
    tmp4 = settings;
    tmp5 = choices;
    callback = onChange.useCallback(() => _undefined((arg0) => !arg0), []);
    intl = settings(choices[4]).intl;
    tmp6 = tiers;
    stringResult = intl.string(tiers(choices[5]).GDs9Vq);
    intl2 = settings(choices[4]).intl;
    stringResult1 = intl2.string(tiers(choices[5])["9FRudW"]);
    intl3 = settings(choices[4]).intl;
    stringResult2 = intl3.string(tiers(choices[5])["4AsQHS"]);
    obj = settings(choices[6]);
    result = obj.vibegrationsTierModel(settings, tiers, settings.tier);
    tmp11 = jsxs;
    obj1 = { direction: "vertical", spacing: tiers(choices[8]).space.PX_16, children: null };
    tmp12 = jsx;
    obj12 = {
      hasIcons: false,
      value: settings.tier,
      onChange(tier2) {
        if (tier2 !== settings.tier) {
          const vibegrationsWithTierResult = VibegrationsEffortTiers.vibegrationsWithTier(tmp, tier2);
          noop(VibegrationsEffortTiers.vibegrationsNormalizeFast(vibegrationsWithTierResult, tiers, choices.main));
        }
      },
      title: null,
      accessibilityLabel: null,
      children: null,
    };
    tmp13 = undefined;
    if (!hideTitle) {
      tmp13 = stringResult;
    }
    obj12.title = tmp13;
    obj12.accessibilityLabel = stringResult;
    prop = tmp4(tmp5[10]).VIBEGRATIONS_MODEL_TIERS;
    obj12.children = prop.map((value) => {
      const obj = {
        label: VibegrationsEffortTiers.vibegrationsTierLabel(value),
        subLabel: null,
        value: null,
        disabled: null,
      };
      obj.subLabel = VibegrationsEffortTiers.vibegrationsTierDescription(value);
      obj.value = value;
      obj.disabled = disabled;
      return timestampProducer(TableRadioRow.TableRadioRow, obj, value);
    });
    items = [, ,];
    items[0] = tmp12(settings(choices[9]).TableRadioGroup, obj12);
    obj13 = { hasIcons: false, children: null };
    obj14 = { label: null, arrow: null, accessibilityState: null, onPress: null };
    intl4 = tmp4(tmp5[4]).intl;
    obj14.label = intl4.string(tmp6(tmp5[5]).IaLFoX);
    obj14.arrow = !tmp2;
    obj14.accessibilityState = { expanded: tmp2 };
    obj14.onPress = callback;
    obj13.children = tmp12(tmp4(tmp5[13]).TableRow, obj14);
    items[1] = tmp12(tmp4(tmp5[12]).TableRowGroup, obj13);
    tmp11Result = null;
    if (tmp2) {
      tmp12Result = null;
      tmp15 = Fragment;
      if (null != result) {
        obj15 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
        obj15.value = result;
        obj15.onChange = function onChange(arg0) {
          const result = VibegrationsEffortTiers.vibegrationsPickTierModel(settings, settings.tier, arg0);
          noop(VibegrationsEffortTiers.vibegrationsNormalizeFast(result, tiers, choices.main));
        };
        obj15.title = stringResult1;
        obj15.accessibilityLabel = stringResult1;
        main = choices.main;
        obj15.children = main.map((label) =>
          timestampProducer(
            TableRadioRow.TableRadioRow,
            {
              label: label.label,
              subLabel: VibegrationsModelLabels.PROVIDER_LABELS[label.provider],
              value: label.id,
              disabled,
            },
            label.id,
          ),
        );
        tmp12Result = tmp12(tmp4(tmp5[9]).TableRadioGroup, obj15);
      }
      items1 = [, ,];
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
      obj16 = { hasIcons: false, value: null, onChange: null, title: null, accessibilityLabel: null, children: null };
      obj16.value = str;
      obj16.onChange = function onChange(thinking) {
        const obj = {};
        const merged = Object.assign(settings);
        obj.thinking = thinking;
        noop(VibegrationsEffortTiers.vibegrationsNormalizeFast(obj, tiers, choices.main));
      };
      obj16.title = stringResult2;
      obj16.accessibilityLabel = stringResult2;
      thinking1 = choices.thinking;
      obj16.children = thinking1.map((value) => {
        let tmp2 = VibegrationsModelLabels.THINKING_LABELS[value];
        if (tmp2 == null) {
          tmp2 = value;
        }
        return timestampProducer(TableRadioRow.TableRadioRow, { label: tmp2, value, disabled }, value);
      });
      items1[1] = tmp12(tmp4(tmp5[9]).TableRadioGroup, obj16);
      tmp4Result = tmp4(tmp5[6]);
      tmp12Result1 = null;
      if (tmp4Result.vibegrationsCeilingSupportsFast(settings, tiers, choices.main)) {
        obj17 = { hasIcons: false, children: null };
        obj18 = { label: null, subLabel: null, value: null, disabled: null, onValueChange: null };
        intl5 = tmp4(tmp5[4]).intl;
        obj18.label = intl5.string(tmp6(tmp5[5]).SYLSgx);
        intl6 = tmp4(tmp5[4]).intl;
        obj18.subLabel = intl6.string(tmp6(tmp5[5]).HITWAI);
        flag = true;
        obj18.value = true === settings.fast;
        obj18.disabled = disabled;
        obj18.onValueChange = function onValueChange(fast) {
          const obj = {};
          const merged = Object.assign(settings);
          obj.fast = fast;
          noop(VibegrationsEffortTiers.vibegrationsNormalizeFast(obj, tiers, choices.main));
        };
        obj17.children = tmp12(tmp4(tmp5[15]).TableSwitchRow, obj18);
        tmp12Result1 = tmp12(tmp4(tmp5[12]).TableRowGroup, obj17);
      }
      obj19 = { children: null };
      items1[2] = tmp12Result1;
      obj19.children = items1;
      tmp11Result = tmp11(tmp15, obj19);
    }
    items[2] = tmp11Result;
    obj1.children = items;
    return tmp11(settings(choices[7]).Stack, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsEffortPicker.tsx");

export default VibegrationsEffortPicker;
export const VIBEGRATIONS_EFFORT_PICKER_SHEET_KEY = "VibegrationsEffortPickerSheet";
export const VibegrationsEffortPickerSheet = function VibegrationsEffortPickerSheet(onChange) {
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
  obj2.title = intl.string(_modDef3714.GDs9Vq);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = timestampProducer(View, {
    children: timestampProducer(VibegrationsEffortPicker, {
      settings: tmp[0],
      tiers,
      choices,
      disabled: false,
      onChange: callback,
      hideTitle: true,
    }),
  });
  return timestampProducer(ActionSheet.ActionSheet, obj);
};
