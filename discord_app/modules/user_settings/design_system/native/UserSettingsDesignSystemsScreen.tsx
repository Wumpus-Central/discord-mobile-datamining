// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx",
);

export default function SettingsDesignSystemsScreen() {
  const node = noop.useMemo(() => {
    let obj = { sections: null };
    obj = { label: "Components", settings: null };
    const items = [, , , , , , , , , , , , , , ,];
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
      DESIGN_SYSTEM_HAPTICS: arr[15],
    } = constants);
    obj.settings = items;
    const items1 = [obj, , ,];
    const obj1 = { label: "In Progress", settings: null };
    const items2 = [, , , ,];
    ({
      DESIGN_SYSTEM_SHEETS: arr3[0],
      DESIGN_SYSTEM_STACK: arr3[1],
      DESIGN_SYSTEMS_CONTEXT_MENU: arr3[2],
      DESIGN_SYSTEMS_TOAST: arr3[3],
      DESIGN_SYSTEMS_MODAL: arr3[4],
    } = constants);
    obj1.settings = items2;
    items1[1] = obj1;
    const obj2 = { label: "Experimental", settings: null };
    const items3 = [,];
    ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr4[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr4[1] } = constants);
    obj2.settings = items3;
    items1[2] = obj2;
    const obj3 = { label: "Legacy Audit", settings: null };
    const items4 = [constants.DESIGN_SYSTEMS_LEGACY_BUTTON];
    obj3.settings = items4;
    items1[3] = obj3;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}
