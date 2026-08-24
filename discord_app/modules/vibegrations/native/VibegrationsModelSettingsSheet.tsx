// discord_app/modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../intl/VibegrationsUntranslated.messages.js";
import Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import context from "../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../stores/VibegrationsConnectionStore.tsx";
import { sendModelSettings } from "../stores/VibegrationsConnectionStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function TierSection(arg0) {
  ({ title, modelChoices, thinkingChoices, value } = arg0);
  ({ onPickModel, onPickThinking } = arg0);
  let obj = { direction: "vertical", spacing: ThemesDefault.space.PX_8, children: null };
  const items = [callback(Text.Text, { variant: "text-sm/semibold", color: "text-muted", children: title }), , ];
  obj = { hasIcons: false, defaultValue: value.model, onChange: onPickModel, title: null, accessibilityLabel: null, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(messagesProxyDefault["9FRudW"]);
  const intl2 = getSystemLocale.intl;
  obj[4] = "" + title + " \u2014 " + intl2.string(messagesProxyDefault["9FRudW"]);
  obj[5] = modelChoices.map((label) => callback2(callback(8139).TableRadioRow, { label: label.label, subLabel: callback(15922).PROVIDER_LABELS[label.provider], value: label.id }, label.id));
  items[1] = callback(context.TableRadioGroup, obj);
  obj = { hasIcons: false, defaultValue: value.thinking, onChange: onPickThinking, title: null, accessibilityLabel: null, children: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(messagesProxyDefault["4AsQHS"]);
  const intl4 = getSystemLocale.intl;
  obj[4] = "" + title + " \u2014 " + intl4.string(messagesProxyDefault["4AsQHS"]);
  obj[5] = thinkingChoices.map((value) => {
    let tmp2 = callback(15922).THINKING_LABELS[value];
    if (tmp2 == null) {
      tmp2 = value;
    }
    return closure_6(callback(8139).TableRadioRow, { label: tmp2, value }, value);
  });
  items[2] = callback(context.TableRadioGroup, obj);
  obj[2] = items;
  return callback2(Stack.Stack, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  importDefault = undefined;
  let obj = projectId(589);
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
        closure_1_5(projectId, arg0(settings));
      } catch (err) {
      }
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(messagesProxyDefault["2NWMqY"]);
    obj[1] = callback(tmp(6987).BottomSheetTitleHeader, obj);
    obj1 = { children: null };
    const obj2 = { direction: "vertical", spacing: null, children: null };
    obj2[1] = ThemesDefault.space.PX_16;
    const obj3 = { title: null, modelChoices: null, thinkingChoices: null, value: null, onPickModel: null, onPickThinking: null };
    const intl2 = tmp(1236).intl;
    obj3[0] = intl2.string(messagesProxyDefault.ISmynF);
    ({ main: obj6[1], thinking: obj6[2] } = choices);
    obj3[3] = settings.main;
    obj3[4] = function onPickModel(arg0) {
      closure_0 = arg0;
      return callback((main) => {
        let obj = {};
        const merged = Object.assign(main);
        obj = {};
        const merged1 = Object.assign(main.main);
        obj.model = closure_0;
        obj.main = obj;
        return obj;
      });
    };
    obj3[5] = function onPickThinking(arg0) {
      closure_0 = arg0;
      return callback((main) => {
        let obj = {};
        const merged = Object.assign(main);
        obj = {};
        const merged1 = Object.assign(main.main);
        obj.thinking = closure_0;
        obj.main = obj;
        return obj;
      });
    };
    const items3 = [callback(TierSection, obj3), , ];
    const obj4 = { title: null, modelChoices: null, thinkingChoices: null, value: null, onPickModel: null, onPickThinking: null };
    const intl3 = tmp(1236).intl;
    obj4[0] = intl3.string(messagesProxyDefault.hdt1ph);
    ({ subagent: obj7[1], thinking: obj7[2] } = choices);
    obj4[3] = settings.subagent;
    obj4[4] = function onPickModel(arg0) {
      closure_0 = arg0;
      return callback((subagent) => {
        let obj = {};
        const merged = Object.assign(subagent);
        obj = {};
        const merged1 = Object.assign(subagent.subagent);
        obj.model = closure_0;
        obj.subagent = obj;
        return obj;
      });
    };
    obj4[5] = function onPickThinking(arg0) {
      closure_0 = arg0;
      return callback((subagent) => {
        let obj = {};
        const merged = Object.assign(subagent);
        obj = {};
        const merged1 = Object.assign(subagent.subagent);
        obj.thinking = closure_0;
        obj.subagent = obj;
        return obj;
      });
    };
    items3[1] = callback(TierSection, obj4);
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp(1236).intl;
    obj5[2] = intl4.string(messagesProxyDefault.ICU5aW);
    items3[2] = callback(tmp(4739).Text, obj5);
    obj2[2] = items3;
    obj1[0] = callback2(tmp(4738).Stack, obj2);
    obj[2] = callback(tmp(6990).BottomSheetScrollView, obj1);
    return callback(tmp(7213).ActionSheet, obj);
  }
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";