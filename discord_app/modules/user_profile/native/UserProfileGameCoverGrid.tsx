// === Module 14550: UserProfileGameCoverGrid ===

// Module 14550 (UserProfileGameCoverGrid)
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 14549 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5012);
const obj2 = { grid: { flexDirection: "row", flexWrap: "wrap", gap: fn(14506).GAME_COVER_GRID_GAP } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameCoverGrid.tsx");

export default function UserProfileGameCoverGrid(disableInteraction) {
  disableInteraction = disableInteraction.disableInteraction;
  ({ games, columns, renderCover } = disableInteraction);
  const tmp = closure_6();
  const expandableItems = UserProfileWidgetExpandableItems.useExpandableItems(games, 2 * columns);
  const visibleItems = expandableItems.visibleItems;
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  const children = [React3(View, { style: tmp.grid, children: visibleItems.map(renderCover) }), ];
  let tmp7Result = !disableInteraction;
  if (!disableInteraction) {
    const obj3 = { expanded, hiddenCount, onPress: toggleExpanded };
    tmp7Result = React3(UserProfileWidgetExpandableItems.WidgetViewMoreButton, obj3);
  }
  children[1] = tmp7Result;
  return hasOwnProperty(React4, { children });
};