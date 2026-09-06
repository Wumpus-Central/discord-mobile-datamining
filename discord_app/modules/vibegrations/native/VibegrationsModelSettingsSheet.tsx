// discord_app/modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../intl/VibegrationsUntranslated.messages.js";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../stores/VibegrationsConnectionStore.tsx";
import { sendModelSettings } from "../stores/VibegrationsConnectionStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  importDefault = undefined;
  let obj = projectId(504);
  const items = [closure_4];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getModelSettings(projectId), items1);
  const items2 = [projectId];
  importDefault = React.useCallback((arg0) => {
    const modelSettings = closure_1_4.getModelSettings(projectId);
    let settings;
    if (modelSettings != null) {
      settings = modelSettings.settings;
    }
    if (null != settings) {
      try {
        closure_1_5(projectId, projectId(closure_1_2[4]).vibegrationsSettingsForTier(arg0(settings.main)));
        const obj = projectId(closure_1_2[4]);
      } catch (err) {}
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    const intl = tmp(1114).intl;
    const stringResult = intl.string(messagesProxyDefault["9FRudW"]);
    const intl2 = tmp(1114).intl;
    const stringResult1 = intl2.string(messagesProxyDefault["4AsQHS"]);
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null };
    const intl3 = tmp(1114).intl;
    obj[0] = intl3.string(messagesProxyDefault["2NWMqY"]);
    obj[1] = callback(tmp(7149).BottomSheetTitleHeader, obj);
    obj1 = { children: null };
    const obj2 = { direction: "vertical", spacing: null, children: null };
    obj2[1] = ThemesDefault.space.PX_16;
    const obj3 = {
      hasIcons: false,
      defaultValue: null,
      onChange: null,
      title: null,
      accessibilityLabel: null,
      children: null,
    };
    obj3[1] = settings.main.model;
    obj3[2] = function onChange(arg0) {
      closure_0 = arg0;
      return callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.model = closure_0;
        return obj;
      });
    };
    obj3[3] = stringResult;
    obj3[4] = stringResult;
    const main = choices.main;
    obj3[5] = main.map((label) =>
      callback2(
        projectId(5688).TableRadioRow,
        { label: label.label, subLabel: projectId(16600).PROVIDER_LABELS[label.provider], value: label.id },
        label.id,
      ),
    );
    const items3 = [callback(tmp(5685).TableRadioGroup, obj3), ,];
    const obj4 = {
      hasIcons: false,
      defaultValue: null,
      onChange: null,
      title: null,
      accessibilityLabel: null,
      children: null,
    };
    obj4[1] = settings.main.thinking;
    obj4[2] = function onChange(arg0) {
      closure_0 = arg0;
      return callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.thinking = closure_0;
        return obj;
      });
    };
    obj4[3] = stringResult1;
    obj4[4] = stringResult1;
    const thinking = choices.thinking;
    obj4[5] = thinking.map((value) => {
      let tmp2 = projectId(16600).THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return closure_6(projectId(5688).TableRadioRow, { label: tmp2, value }, value);
    });
    items3[1] = callback(tmp(5685).TableRadioGroup, obj4);
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp(1114).intl;
    obj5[2] = intl4.string(messagesProxyDefault.ICU5aW);
    items3[2] = callback(tmp(4556).Text, obj5);
    obj2[2] = items3;
    obj1[0] = callback2(tmp(4973).Stack, obj2);
    obj[2] = callback(tmp(6627).BottomSheetScrollView, obj1);
    return callback(tmp(7198).ActionSheet, obj);
  }
}
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
