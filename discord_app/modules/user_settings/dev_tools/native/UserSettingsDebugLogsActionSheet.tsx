// === Module 14545: UserSettingsDebugLogsFiltersActionSheet ===

// Module 14545 (UserSettingsDebugLogsFiltersActionSheet)
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
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["+B9e11"]);
  obj[0] = callback(require(5246) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: false, children: null };
  const obj1 = { label: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl2.string(require(1236) /* getSystemLocale */.t.wzzjk9);
  obj1[1] = onRefresh;
  obj[1] = callback(require(5224) /* TableRowInner */.TableRow, obj1);
  const items = [callback(require(5558) /* TableRowGroupTitle */.TableRowGroup, obj), , ];
  const obj2 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl3.string(require(1236) /* getSystemLocale */.t.gePre2);
  obj2[1] = sortOrder;
  obj2[2] = onSortOrderChanged;
  const obj3 = { label: null, value: "newest" };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl4.string(require(1236) /* getSystemLocale */.t.eoXe0r);
  const items1 = [callback(require(7659) /* TableRadioRow */.TableRadioRow, obj3), ];
  const obj4 = { label: null, value: "oldest" };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl5.string(require(1236) /* getSystemLocale */.t.mmeWUF);
  items1[1] = callback(require(7659) /* TableRadioRow */.TableRadioRow, obj4);
  obj2[4] = items1;
  items[1] = callback2(require(7660) /* context */.TableRadioGroup, obj2);
  items[2] = callback(require(1297) /* Button */.Spacer, { size: 0 });
  obj[1] = items;
  return callback2(require(5555) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("modules/user_settings/dev_tools/native/UserSettingsDebugLogsActionSheet.tsx");

export const openUserSettingsDebugLogsFiltersActionSheet = function openUserSettingsDebugLogsFiltersActionSheet(arg0) {
  let obj = importDefault(4161);
  obj = { default: UserSettingsDebugLogsFiltersActionSheet };
  obj.openLazy(Promise.resolve(obj), "UserSettingsDebugLogsFiltersActionSheet", arg0);
};