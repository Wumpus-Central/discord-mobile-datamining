// === Module 15460: UserSettingsDesignSystemsScreen ===

// Module 15460 (UserSettingsDesignSystemsScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import SettingLayoutDefault from "SettingLayout" /* 14515 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getDesignSystemsSettings() {
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  const obj = { label: "Components", settings: items };
  items = [, , , , , , , , , , , , , , , , ];
  ({ DESIGN_SYSTEMS_TEXT: arr[0], DESIGN_SYSTEMS_BUTTON: arr[1], DESIGN_SYSTEMS_BUTTON_GROUP: arr[2], DESIGN_SYSTEMS_ROW_BUTTON: arr[3], DESIGN_SYSTEMS_TABLE_ROW: arr[4], DESIGN_SYSTEMS_ALERT_MODAL: arr[5], DESIGN_SYSTEMS_SHADOWS: arr[6], DESIGN_SYSTEM_SEGMENTED_CONTROL: arr[7], DESIGN_SYSTEMS_TABS: arr[8], DESIGN_SYSTEM_BACKDROP: arr[9], DESIGN_SYSTEMS_TOOLTIP: arr[10], DESIGN_SYSTEMS_COACHMARK: arr[11], DESIGN_SYSTEM_FORM_PRIMITIVES: arr[12], DESIGN_SYSTEMS_TEXT_INPUT: arr[13], DESIGN_SYSTEM_PILE: arr[14], DESIGN_SYSTEM_TAG_GROUP: arr[15], DESIGN_SYSTEM_HAPTICS: arr[16] } = MobileUserSettings);
  const items1 = [obj, , , , ];
  const obj2 = { label: "AI Visual Identity", settings: items2 };
  items2 = [, ];
  ({ DESIGN_SYSTEM_AI_LOADER: arr3[0], DESIGN_SYSTEM_AI_SHIMMER: arr3[1] } = MobileUserSettings);
  items1[1] = obj2;
  const obj3 = { label: "In Progress", settings: items3 };
  items3 = [, , , , ];
  ({ DESIGN_SYSTEM_SHEETS: arr4[0], DESIGN_SYSTEM_STACK: arr4[1], DESIGN_SYSTEMS_CONTEXT_MENU: arr4[2], DESIGN_SYSTEMS_TOAST: arr4[3], DESIGN_SYSTEMS_MODAL: arr4[4] } = MobileUserSettings);
  items1[2] = obj3;
  const obj4 = { label: "Experimental", settings: items4 };
  items4 = [, ];
  ({ DESIGN_SYSTEMS_BACKGROUND_BLUR_VIEW: arr5[0], DESIGN_SYSTEMS_EXPERIMENTAL_BUTTONS: arr5[1] } = MobileUserSettings);
  items1[3] = obj4;
  const obj5 = { label: "Legacy Audit", settings: items5 };
  items5 = [MobileUserSettings.DESIGN_SYSTEMS_LEGACY_BUTTON];
  items1[4] = obj5;
  return items1;
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { sections: getDesignSystemsSettings() };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    const list = createList(obj2);
    cResult[0] = list;
    first = list;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = jsx(SettingLayoutDefault, { node: first });
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  return tmp8;
}) : (() => {
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: getDesignSystemsSettings() };
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemsScreen.tsx");

export default tmp2;