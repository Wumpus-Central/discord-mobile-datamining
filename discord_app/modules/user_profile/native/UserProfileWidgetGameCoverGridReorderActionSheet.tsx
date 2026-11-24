// === Module 14422: UserProfileWidgetGameCoverGridReorderActionSheet ===

// Module 14422 (UserProfileWidgetGameCoverGridReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import DragHandle from "DragHandle" /* 6021 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 14391 */;
import WidgetUtils from "WidgetUtils" /* 14395 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 14400 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14409 */;
import GameCoverImageDefault from "GameCoverImage" /* 14411 */;
import UserProfileReorderActionSheetDefault from "UserProfileReorderActionSheet" /* 14421 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4917);
let obj = { grid: { flexDirection: "row", flexWrap: "wrap", gap: fn(14383).GAME_COVER_GRID_GAP }, dragHandle: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: fn(14383).GAME_COVER_GRID_GAP };
obj.dragHandle = { position: "absolute", top: nativeDefault.space.PX_8, start: 0 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo(function ReorderableGameCover(arg0) {
  ({ game, coverWidth } = arg0);
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  if (tmp4.isLoading) {
    const intl = util.intl;
    let gameName = intl.string(util.t.ZTNur7);
  } else {
    gameName = tmp4.gameName;
  }
  const obj = { accessibilityLabel: gameName, children: null };
  const obj2 = {};
  const tmp = closure_9();
  const merged = Object.assign(tmp4);
  obj2.width = coverWidth;
  obj2.accessible = false;
  items = [metroImportDefault(GameCoverImageDefault, obj2), metroImportDefault(DragHandle.DragHandle, { style: tmp.dragHandle, variant: "overlay", size: "sm", borderRadius: { topStart: 0, bottomStart: 0 } })];
  obj.children = items;
  return React5(React4, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx");

export default function UserProfileWidgetGameCoverGridReorderActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  dependencyMap = undefined;
  const tmp = closure_9();
  items = [AuthenticationStore];
  const stateFromStores = widgetType(504).useStateFromStores(items, () => id.getId());
  const tmp3 = useUserProfileWidgetsDefault(stateFromStores);
  importDefault = tmp3;
  const items1 = [tmp3, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_1.find((type) => {
      let isGameWidgetResult = widgetType(c2[13]).isGameWidget(type);
      if (isGameWidgetResult) {
        isGameWidgetResult = type.type === closure_1_0;
      }
      return isGameWidgetResult;
    });
    if (null != found) {
      let uniqueWidgetGames = WidgetUtils.getUniqueWidgetGames(found);
    } else {
      uniqueWidgetGames = [];
    }
    return uniqueWidgetGames;
  }, items1);
  const tmp4 = useGameCoverLayoutDefault();
  ({ isMeasured, coverWidth: c2 } = tmp4);
  ({ ref, onLayout } = tmp4);
  const obj2 = { dismissAccessibilityLabel: null, returnFocusRef: null, children: null };
  let obj = widgetType(504);
  const intl = widgetType(1112).intl;
  obj2.dismissAccessibilityLabel = intl.string(widgetType(1112).t.rnh54p);
  obj2.returnFocusRef = widgetType.returnFocusRef;
  const obj3 = { ref, onLayout, accessibilityRole: "list", style: tmp.grid, children: null };
  if (isMeasured) {
    isMeasured = memo.map((game) => metroImportDefault(closure_10, { game, coverWidth }, game.gameId));
  }
  obj3.children = isMeasured;
  obj2.children = closure_7(closure_5, obj3);
  return closure_7(UserProfileReorderActionSheetDefault, obj2);
};