// discord_app/modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3547 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsEffortPresets from "../lib/VibegrationsEffortPresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

require = fn;
const sendModelSettings = fn(16589).sendModelSettings;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  let obj = projectId(504);
  const items = [VibegrationsConnectionStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => VibegrationsConnectionStore.getModelSettings(projectId),
    items1,
  );
  const items2 = [projectId];
  importDefault = noop.useCallback((fn) => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let settings;
    if (modelSettings != null) {
      settings = modelSettings.settings;
    }
    if (null != settings) {
      try {
        sendModelSettings(projectId, VibegrationsEffortPresets.vibegrationsSettingsForTier(fn(settings.main)));
      } catch (err) {}
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    const intl = tmp(1114).intl;
    const stringResult = intl.string(_modDef3547["9FRudW"]);
    const intl2 = tmp(1114).intl;
    const stringResult1 = intl2.string(_modDef3547["4AsQHS"]);
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null };
    const intl3 = tmp(1114).intl;
    obj.title = intl3.string(_modDef3547["2NWMqY"]);
    obj.header = closure_6(tmp(7149).BottomSheetTitleHeader, obj);
    const obj1 = { children: null };
    const obj2 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
    const obj3 = {
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
      children: null,
    };
    const main = choices.main;
    obj3.children = main.map((label) =>
      closure_1_6(
        projectId(5688).TableRadioRow,
        { label: label.label, subLabel: projectId(16600).PROVIDER_LABELS[label.provider], value: label.id },
        label.id,
      ),
    );
    const items3 = [closure_6(tmp(5685).TableRadioGroup, obj3), ,];
    const obj4 = {
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
      children: null,
    };
    let thinking = choices.thinking;
    obj4.children = thinking.map((value) => {
      let tmp2 = projectId(16600).THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return closure_1_6(projectId(5688).TableRadioRow, { label: tmp2, value }, value);
    });
    items3[1] = closure_6(tmp(5685).TableRadioGroup, obj4);
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp(1114).intl;
    obj5.children = intl4.string(_modDef3547.ICU5aW);
    items3[2] = closure_6(tmp(4556).Text, obj5);
    obj2.children = items3;
    obj1.children = closure_7(tmp(4973).Stack, obj2);
    obj.children = closure_6(tmp(6627).BottomSheetScrollView, obj1);
    return closure_6(tmp(7198).ActionSheet, obj);
  }
}
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
