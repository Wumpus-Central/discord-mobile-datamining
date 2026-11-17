// discord_app/modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import DragIcon from "../../../design/components/Icon/native/redesign/generated/DragIcon.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import useGameCoverLayoutDefault from "useGameCoverLayout.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import GameCoverImageDefault from "GameCoverImage.tsx";
import useUserProfileWidgetsDefault from "../hooks/useUserProfileWidgets.tsx";
import UserProfileReorderActionSheetDefault from "UserProfileReorderActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function PlaceholderDragHandle() {
  const obj = {
    style: closure_9().placeholderDragHandle,
    children: metroImportDefault(DragIcon.DragIcon, {
      size: "xs",
      color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
    }),
  };
  return metroImportDefault(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5310);
let obj = {
  grid: { flexDirection: "row", flexWrap: "wrap", gap: fn(10838).GAME_COVER_GRID_GAP },
  dragHandlePosition: null,
  placeholderDragHandle: null,
};
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: fn(10838).GAME_COVER_GRID_GAP };
obj.dragHandlePosition = { position: "absolute", top: nativeDefault.space.PX_8, start: 0 };
let size = {
  width: nativeDefault.space.PX_20,
  height: nativeDefault.space.PX_32,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderTopEndRadius: nativeDefault.radii.sm,
  borderBottomEndRadius: nativeDefault.radii.sm,
};
obj.placeholderDragHandle = size;
let closure_9 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function ReorderableGameCover(arg0) {
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
  items = [metroImportDefault(GameCoverImageDefault, obj2)];
  const tmp2Result = GameCoverImageDefault;
  items[1] = metroImportDefault(hasOwnProperty, {
    style: tmp.dragHandlePosition,
    children: metroImportDefault(PlaceholderDragHandle, {}),
  });
  obj.children = items;
  return React5(React4, obj);
});
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx",
);

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
  const intl = widgetType(1113).intl;
  obj2.dismissAccessibilityLabel = intl.string(widgetType(1113).t.rnh54p);
  obj2.returnFocusRef = widgetType.returnFocusRef;
  const obj3 = { ref, onLayout, accessibilityRole: "list", style: tmp.grid, children: null };
  if (isMeasured) {
    isMeasured = memo.map((game) => metroImportDefault(closure_11, { game, coverWidth }, game.gameId));
  }
  obj3.children = isMeasured;
  obj2.children = closure_7(closure_5, obj3);
  return closure_7(UserProfileReorderActionSheetDefault, obj2);
}
