// === Module 15703: UserSettingsDesignSystemsScreen ===

// Module 15703 (UserSettingsDesignSystemsScreen)
import SettingBuilders from "SettingBuilders" /* 11602 */;
import SettingLayoutDefault from "SettingLayout" /* 14776 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(8079).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx");

export default function SettingsDesignSystemsScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: "Components", settings: null };
    const items = [, , , , , , , , , , , , , , , ];
    ({ DESIGN_SYSTEMS_TEXT: arr[0], DESIGN_SYSTEMS_BUTTON: arr[1], DESIGN_SYSTEMS_BUTTON_GROUP: arr[2], DESIGN_SYSTEMS_ROW_BUTTON: arr[3], DESIGN_SYSTEMS_TABLE_ROW: arr[4], DESIGN_SYSTEMS_ALERT_MODAL: arr[5], DESIGN_SYSTEMS_SHADOWS: arr[6], DESIGN_SYSTEM_SEGMENTED_CONTROL: arr[7], DESIGN_SYSTEMS_TABS: arr[8], DESIGN_SYSTEM_BACKDROP: arr[9], DESIGN_SYSTEMS_TOOLTIP: arr[10], DESIGN_SYSTEMS_COACHMARK: arr[11], DESIGN_SYSTEM_FORM_PRIMITIVES: arr[12], DESIGN_SYSTEMS_TEXT_INPUT: arr[13], DESIGN_SYSTEM_PILE: arr[14], DESIGN_SYSTEM_HAPTICS: arr[15] } = constants);
    obj3.settings = items;
    const items1 = [obj3, , , ];
    const obj4 = { label: "In Progress", settings: null };
    const items2 = [, , , , ];
    ({ DESIGN_SYSTEM_SHEETS: arr3[0], DESIGN_SYSTEM_STACK: arr3[1], DESIGN_SYSTEMS_CONTEXT_MENU: arr3[2], DESIGN_SYSTEMS_TOAST: arr3[3], DESIGN_SYSTEMS_MODAL: arr3[4] } = constants);
    obj4.settings = items2;
    items1[1] = obj4;
    const obj5 = { label: "Experimental", settings: null };
    const items3 = [, ];
    ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr4[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr4[1] } = constants);
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { label: "Legacy Audit", settings: null };
    const items4 = [constants.DESIGN_SYSTEMS_LEGACY_BUTTON];
    obj6.settings = items4;
    items1[3] = obj6;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};