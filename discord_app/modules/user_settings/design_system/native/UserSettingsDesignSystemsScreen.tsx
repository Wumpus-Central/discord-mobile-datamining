// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getDesignSystemsSettings() {
  const obj = { label: "Components", settings: null };
  const items = [, , , , , , , , , , , , , , , ,];
  ({
    DESIGN_SYSTEMS_TEXT: arr[0],
    DESIGN_SYSTEMS_BUTTON: arr[1],
    DESIGN_SYSTEMS_BUTTON_GROUP: arr[2],
    DESIGN_SYSTEMS_ROW_BUTTON: arr[3],
    DESIGN_SYSTEMS_TABLE_ROW: arr[4],
    DESIGN_SYSTEMS_ALERT_MODAL: arr[5],
    DESIGN_SYSTEMS_SHADOWS: arr[6],
    DESIGN_SYSTEM_SEGMENTED_CONTROL: arr[7],
    DESIGN_SYSTEMS_TABS: arr[8],
    DESIGN_SYSTEM_BACKDROP: arr[9],
    DESIGN_SYSTEMS_TOOLTIP: arr[10],
    DESIGN_SYSTEMS_COACHMARK: arr[11],
    DESIGN_SYSTEM_FORM_PRIMITIVES: arr[12],
    DESIGN_SYSTEMS_TEXT_INPUT: arr[13],
    DESIGN_SYSTEM_PILE: arr[14],
    DESIGN_SYSTEM_TAG_GROUP: arr[15],
    DESIGN_SYSTEM_HAPTICS: arr[16],
  } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , ,];
  const obj2 = { label: "AI Visual Identity", settings: null };
  const items2 = [,];
  ({ DESIGN_SYSTEM_AI_LOADER: arr3[0], DESIGN_SYSTEM_AI_SHIMMER: arr3[1] } = MobileUserSettings);
  obj2.settings = items2;
  items1[1] = obj2;
  const obj3 = { label: "In Progress", settings: null };
  const items3 = [, , , ,];
  ({
    DESIGN_SYSTEM_SHEETS: arr4[0],
    DESIGN_SYSTEM_STACK: arr4[1],
    DESIGN_SYSTEMS_CONTEXT_MENU: arr4[2],
    DESIGN_SYSTEMS_TOAST: arr4[3],
    DESIGN_SYSTEMS_MODAL: arr4[4],
  } = MobileUserSettings);
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { label: "Experimental", settings: null };
  const items4 = [,];
  ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr5[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr5[1] } = MobileUserSettings);
  obj4.settings = items4;
  items1[3] = obj4;
  const obj5 = { label: "Legacy Audit", settings: null };
  const items5 = [MobileUserSettings.DESIGN_SYSTEMS_LEGACY_BUTTON];
  obj5.settings = items5;
  items1[4] = obj5;
  return items1;
}
const MobileUserSettings = fn(7992).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SettingsDesignSystemsScreen() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { sections: getDesignSystemsSettings() };
        const list = SettingBuilders.createList(obj2);
        cResult[0] = list;
        let first = list;
        const tmpResult = SettingBuilders;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { node: first };
        const tmp10 = jsx(SettingLayoutDefault, { node: first });
        cResult[1] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : function SettingsDesignSystemsScreen() {
      const node = noop.useMemo(() => {
        const obj = SettingBuilders;
        return obj.createList({ sections: getDesignSystemsSettings() });
      }, []);
      return jsx(SettingLayoutDefault, { node });
    };
