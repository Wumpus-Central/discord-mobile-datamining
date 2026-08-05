// discord_app/modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
function UserSettingsDebugLogsFiltersActionSheet(arg0) {
  let onRefresh;
  let onSortOrderChanged;
  let sortOrder;
  ({ sortOrder, onSortOrderChanged, onRefresh } = arg0);
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["+B9e11"]);
  obj[0] = callback(require("../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  const obj1 = { label: null, onPress: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.wzzjk9);
  obj1[1] = onRefresh;
  obj[1] = callback(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj1);
  const items = [callback(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj), , ];
  const obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.gePre2);
  obj2[1] = sortOrder;
  obj2[2] = onSortOrderChanged;
  const obj3 = { label: null, value: "newest" };
  const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[0] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.eoXe0r);
  const items1 = [callback(require("../../../../design/components/TableRow/native/TableRadioRow.native.tsx") /* TableRadioRow */.TableRadioRow, obj3), ];
  const obj4 = { label: null, value: "oldest" };
  const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[0] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.mmeWUF);
  items1[1] = callback(require("../../../../design/components/TableRow/native/TableRadioRow.native.tsx") /* TableRadioRow */.TableRadioRow, obj4);
  obj2[4] = items1;
  items[1] = callback2(require("../../../../design/components/TableRow/native/TableRadioGroup.native.tsx") /* context */.TableRadioGroup, obj2);
  items[2] = callback(require("../../../../design/void/native.tsx") /* Button */.Spacer, { size: 0 });
  obj[1] = items;
  return callback2(require("../../../../design/components/Sheet/native/ActionSheet.native.tsx") /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};