// discord_app/modules/user_profile/native/UserProfileGameCoverGrid.tsx
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { grid: { flexDirection: "row", flexWrap: "wrap", gap: fn(15197).GAME_COVER_GRID_GAP } };
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
  items = [
    React3(View, { style: tmp.grid, children: visibleItems.map(renderCover) }),
    React3(UserProfileWidgetExpandableItems.WidgetViewMoreButton, { expanded, hiddenCount, onPress: toggleExpanded }),
  ];
  obj2.children = items;
  return hasOwnProperty(React4, obj2);
}
