// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MobileUserSettings = fn(7417).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx",
);

export default function SettingsDesignSystemsScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: "Components", settings: null };
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
    } = constants);
    obj3.settings = items;
    const items1 = [obj3, , , ,];
    const obj4 = { label: "AI Visual Identity", settings: null };
    const items2 = [,];
    ({ DESIGN_SYSTEM_AI_LOADER: arr3[0], DESIGN_SYSTEM_AI_SHIMMER: arr3[1] } = constants);
    obj4.settings = items2;
    items1[1] = obj4;
    const obj5 = { label: "In Progress", settings: null };
    const items3 = [, , , ,];
    ({
      DESIGN_SYSTEM_SHEETS: arr4[0],
      DESIGN_SYSTEM_STACK: arr4[1],
      DESIGN_SYSTEMS_CONTEXT_MENU: arr4[2],
      DESIGN_SYSTEMS_TOAST: arr4[3],
      DESIGN_SYSTEMS_MODAL: arr4[4],
    } = constants);
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { label: "Experimental", settings: null };
    const items4 = [,];
    ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr5[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr5[1] } = constants);
    obj6.settings = items4;
    items1[3] = obj6;
    const obj7 = { label: "Legacy Audit", settings: null };
    const items5 = [constants.DESIGN_SYSTEMS_LEGACY_BUTTON];
    obj7.settings = items5;
    items1[4] = obj7;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
}
