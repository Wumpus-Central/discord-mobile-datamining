// === Module 12056: UserProfileGameDetailsList ===

// Module 12056 (UserProfileGameDetailsList)
import nativeDefault from "native" /* 575 */;
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 12057 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = { list: { gap: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsList.tsx");

export default function UserProfileGameDetailsList(arg0) {
  ({ games, renderRow } = arg0);
  const tmp = closure_6();
  const expandableItems = UserProfileWidgetExpandableItems.useExpandableItems(games, 2);
  const visibleItems = expandableItems.visibleItems;
  const obj2 = { children: null };
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  items = [React3(View, { style: tmp.list, children: visibleItems.map(renderRow) }), React3(UserProfileWidgetExpandableItems.WidgetViewMoreButton, { expanded, hiddenCount, onPress: toggleExpanded })];
  obj2.children = items;
  return hasOwnProperty(React4, obj2);
};