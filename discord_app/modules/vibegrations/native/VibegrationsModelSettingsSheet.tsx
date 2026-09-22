// discord_app/modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3678 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsEffortPickerDefault from "VibegrationsEffortPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

const require = fn;
const View = fn(17).View;
const sendModelSettings = fn(13366).sendModelSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  const items = [VibegrationsConnectionStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => VibegrationsConnectionStore.getModelSettings(projectId),
    items1,
  );
  const obj = projectId(504);
  const items2 = [VibegrationsConnectionStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(504).useStateFromStores(
    items2,
    () => VibegrationsConnectionStore.getConnState(projectId),
    items3,
  );
  const obj2 = projectId(504);
  const items4 = [VibegrationsConnectionStore];
  const items5 = [projectId];
  const tmp5 =
    "open" !== stateFromStores1 ||
    projectId(504).useStateFromStores(items4, () => VibegrationsConnectionStore.isChatStopped(projectId), items5);
  [][0] = projectId;
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    const obj4 = { header: null, children: null };
    const obj5 = { title: null };
    const intl = tmp(1115).intl;
    obj5.title = intl.string(_modDef3678["2NWMqY"]);
    obj4.header = closure_7(tmp(7396).BottomSheetTitleHeader, obj5);
    const obj6 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
    const obj7 = { settings, choices, disabled: tmp5, onChange: tmp6 };
    const items6 = [closure_7(VibegrationsEffortPickerDefault, obj7)];
    const intl2 = tmp(1115).intl;
    const string = intl2.string;
    const tmp12 = _modDef3678;
    if (tmp5) {
      let stringResult = string(tmp12.t5mTfU);
    } else {
      stringResult = string(tmp12.ICU5aW);
    }
    const obj8 = { children: null };
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: stringResult };
    items6[1] = closure_7(tmp(4753).Text, obj9);
    obj6.children = items6;
    obj8.children = closure_8(tmp(5185).Stack, obj6);
    obj4.children = closure_7(View, obj8);
    return closure_7(tmp(7444).ActionSheet, obj4);
  }
  const obj3 = projectId(504);
}
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
