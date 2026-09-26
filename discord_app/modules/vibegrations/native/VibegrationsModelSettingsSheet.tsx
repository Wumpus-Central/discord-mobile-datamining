// === Module 16268: VibegrationsModelSettingsSheet ===

// Module 16268 (VibegrationsModelSettingsSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet from "ActionSheet" /* 6618 */;
import VibegrationsEffortPickerDefault from "VibegrationsEffortPicker" /* 16248 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12624 */;

require = fn;
class VibegrationsModelSettingsContent {
  constructor(arg0) {
    projectId = global.projectId;
    tmp = projectId;
    tmp2 = closure_2;
    obj = projectId(closure_2[4]);
    items = [];
    items[0] = closure_5;
    items1 = [];
    items1[0] = projectId;
    stateFromStores = obj.useStateFromStores(items, () => VibegrationsConnectionStore.getModelSettings(projectId), items1);
    obj2 = projectId(closure_2[4]);
    items2 = [];
    items2[0] = closure_5;
    items3 = [];
    items3[0] = projectId;
    stateFromStores1 = obj2.useStateFromStores(items2, () => VibegrationsConnectionStore.getConnState(projectId), items3);
    obj3 = projectId(closure_2[4]);
    items4 = [];
    items4[0] = closure_5;
    items5 = [];
    items5[0] = projectId;
    tmp5 = "open" !== stateFromStores1 || obj3.useStateFromStores(items4, () => VibegrationsConnectionStore.isChatStopped(projectId), items5);
    items6 = [];
    items6[0] = projectId;
    tierSettings1 = undefined;
    callback = closure_3.useCallback((arg0) => {
      try {
        sendModelSettings(projectId, arg0);
      } catch (err) {
      }
    }, items6);
    if (stateFromStores != null) {
      tierSettings1 = stateFromStores.tierSettings;
    }
    if (null == tierSettings1) {
      return null;
    } else {
      ({ tierSettings, tiers, choices } = stateFromStores);
      tmp9 = jsxs;
      obj1 = { direction: "vertical", spacing: null, children: null };
      tmp10 = closure_1;
      obj1.spacing = closure_1(tmp2[6]).space.PX_16;
      tmp11 = jsx;
      obj7 = { settings: null, tiers: null, choices: null, disabled: null, onChange: null };
      obj7.settings = tierSettings;
      obj7.tiers = tiers;
      obj7.choices = choices;
      obj7.disabled = tmp5;
      obj7.onChange = callback;
      items7 = [, ];
      items7[0] = jsx(closure_1(tmp2[7]), obj7);
      intl = tmp(tmp2[9]).intl;
      string = intl.string;
      tmp12 = closure_1(tmp2[10]);
      if (tmp5) {
        stringResult = string(tmp12.t5mTfU);
      } else {
        stringResult = string(tmp12.ICU5aW);
      }
      obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
      obj8.children = stringResult;
      items7[1] = tmp11(tmp(tmp2[8]).Text, obj8);
      obj1.children = items7;
      return tmp9(tmp(tmp2[5]).Stack, obj1);
    }
  }
}
const View = fn(17).View;
const sendModelSettings = fn(12624).sendModelSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3715["2NWMqY"]);
  obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  obj.children = React5(View, { children: React5(VibegrationsModelSettingsContent, { projectId: projectId.projectId }) });
  return React5(ActionSheet.ActionSheet, obj);
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
export { VibegrationsModelSettingsContent };