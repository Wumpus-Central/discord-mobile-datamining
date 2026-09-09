// === Module 16633: VibegrationsModelSettingsSheet ===

// Module 16633 (VibegrationsModelSettingsSheet)
import VibegrationsEffortPresets from "VibegrationsEffortPresets" /* 16634 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 16623 */;

require = fn;
let closure_3 = ["fast"];
const sendModelSettings = fn(16623).sendModelSettings;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  let settings;
  let obj = projectId(settings[4]);
  const items = [VibegrationsConnectionStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getModelSettings(projectId), items1);
  const items2 = [projectId];
  importDefault = noop.useCallback((fn) => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    if (null != modelSettings) {
      const tmp12 = fn(modelSettings.settings.main);
      const model = tmp12;
      const tmp16 = _objectWithoutProperties(tmp12, closure_3);
      const main = modelSettings.choices.main;
      const found = main.find((id) => id.id === model.model);
      if (found != null) {
        const supports_fast = found.supports_fast;
      }
      try {
        let obj = VibegrationsEffortPresets;
        let tmp6 = tmp16;
        if (true === tmp13) {
          tmp6 = tmp16;
          if (true === supports_fast) {
            obj = {};
            const merged = Object.assign(tmp16);
            obj.fast = true;
            tmp6 = obj;
          }
        }
        sendModelSettings(projectId, obj.vibegrationsSettingsForTier(tmp6));
      } catch (err) {
      }
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    settings = stateFromStores.settings;
    const choices = stateFromStores.choices;
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult = intl2.string(require("module_3560")["9FRudW"]);
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult1 = intl3.string(require("module_3560")["4AsQHS"]);
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null };
    const intl4 = tmp(tmp2[6]).intl;
    obj.title = intl4.string(require("module_3560")["2NWMqY"]);
    obj.header = closure_8(tmp(tmp2[9]).BottomSheetTitleHeader, obj);
    const obj1 = { direction: "vertical", spacing: require("native").space.PX_16, children: null };
    const obj2 = {
      hasIcons: false,
      defaultValue: settings.main.model,
      onChange(model) {
          return closure_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.model = model;
            return obj;
          });
        },
      title: stringResult,
      accessibilityLabel: stringResult,
      children: null
    };
    let main = choices.main;
    obj2.children = main.map((label) => closure_1_8(projectId(settings[14]).TableRadioRow, { label: label.label, subLabel: projectId(settings[15]).PROVIDER_LABELS[label.provider], value: label.id }, label.id));
    const items3 = [closure_8(tmp(tmp2[13]).TableRadioGroup, obj2), , , ];
    const obj3 = {
      hasIcons: false,
      defaultValue: settings.main.thinking,
      onChange(thinking) {
          return closure_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.thinking = thinking;
            return obj;
          });
        },
      title: stringResult1,
      accessibilityLabel: stringResult1,
      children: null
    };
    let thinking = choices.thinking;
    obj3.children = thinking.map((value) => {
      let tmp2 = projectId(settings[15]).THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return closure_1_8(projectId(settings[14]).TableRadioRow, { label: tmp2, value }, value);
    });
    items3[1] = closure_8(tmp(tmp2[13]).TableRadioGroup, obj3);
    const main1 = choices.main;
    let found = main1.find((id) => id.id === settings.main.model);
    let supports_fast;
    if (found != null) {
      supports_fast = found.supports_fast;
    }
    let tmp9Result = null;
    if (true === supports_fast) {
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl5 = tmp(tmp2[6]).intl;
      obj5.label = intl5.string(tmp6(tmp2[7]).SYLSgx);
      const intl6 = tmp(tmp2[6]).intl;
      obj5.subLabel = intl6.string(tmp6(tmp2[7]).HITWAI);
      obj5.value = true === settings.main.fast;
      obj5.onValueChange = function onValueChange(fast) {
        return closure_1((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.fast = fast;
          return obj;
        });
      };
      obj4.children = closure_8(tmp(tmp2[17]).TableSwitchRow, obj5);
      tmp9Result = closure_8(tmp(tmp2[16]).TableRowGroup, obj4);
    }
    const obj6 = { children: null };
    items3[2] = tmp9Result;
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = tmp(tmp2[6]).intl;
    obj7.children = intl.string(require("module_3560").ICU5aW);
    items3[3] = closure_8(tmp(tmp2[18]).Text, obj7);
    obj1.children = items3;
    obj6.children = closure_9(tmp(tmp2[11]).Stack, obj1);
    obj.children = closure_8(tmp(tmp2[10]).BottomSheetScrollView, obj6);
    return closure_8(tmp(tmp2[8]).ActionSheet, obj);
  }
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";