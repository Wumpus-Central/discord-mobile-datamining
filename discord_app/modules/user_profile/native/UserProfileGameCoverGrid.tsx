// === Module 15181: UserProfileGameCoverGrid ===

// Module 15181 (UserProfileGameCoverGrid)
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 15180 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5141);
let obj2 = { grid: { flexDirection: "row", flexWrap: "wrap", gap: fn(15179).GAME_COVER_GAP } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameCoverGrid.tsx");

export default function UserProfileGameCoverGrid(arg0) {
  ({ games, columns, renderCover } = arg0);
  const tmp = closure_6();
  const expandableItems = UserProfileWidgetExpandableItems.useExpandableItems(games, 2 * columns);
  const visibleItems = expandableItems.visibleItems;
  const obj2 = { children: null };
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  items = [React3(View, { style: tmp.grid, children: visibleItems.map(renderCover) }), React3(UserProfileWidgetExpandableItems.WidgetViewMoreButton, { expanded, hiddenCount, onPress: toggleExpanded })];
  obj2.children = items;
  return hasOwnProperty(React4, obj2);
};