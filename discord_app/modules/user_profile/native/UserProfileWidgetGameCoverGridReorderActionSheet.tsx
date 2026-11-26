// discord_app/modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LegacyBaseButton from "../../../../_runtime/05303_LegacyBaseButton.js";
import DragHandle from "../../../design/components/DragHandle/native/DragHandle.native.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import GameCoverImageDefault from "GameCoverImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5043);
let obj = { dragHandle: { position: "absolute", top: nativeDefault.space.PX_8, start: 0 } };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo(function ReorderableGameCover(arg0) {
  ({ gameId, coverWidth, handleGesture } = arg0);
  const obj = { children: null };
  const tmp = closure_9();
  const obj2 = {};
  const tmp2 = useGameNameAndCoverImageDefault(gameId);
  const merged = Object.assign(tmp2);
  obj2.width = coverWidth;
  obj2.accessible = false;
  items = [timestampProducer(GameCoverImageDefault, obj2)];
  const obj3 = { gesture: handleGesture, children: null };
  obj3.children = timestampProducer(View, {
    style: tmp.dragHandle,
    children: timestampProducer(DragHandle.DragHandle, {
      variant: "overlay",
      size: "sm",
      borderRadius: { topStart: 0, bottomStart: 0 },
    }),
  });
  items[1] = timestampProducer(LegacyBaseButton.GestureDetector, obj3);
  obj.children = items;
  return React5(metroImportDefault, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx",
);

export default function UserProfileWidgetGameCoverGridReorderActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  importDefault = undefined;
  coverWidth = undefined;
  items = [AuthenticationStore];
  const stateFromStores = widgetType(coverWidth[10]).useStateFromStores(items, () => id.getId());
  const tmp5 = require("useUserProfileWidgets")(stateFromStores);
  importDefault = tmp5;
  const items1 = [tmp5, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_1.find((type) => {
      let isGameWidgetResult = widgetType(coverWidth[12]).isGameWidget(type);
      if (isGameWidgetResult) {
        isGameWidgetResult = type.type === closure_1_0;
      }
      return isGameWidgetResult;
    });
    if (null != found) {
      const uniqueWidgetGames = WidgetUtils.getUniqueWidgetGames(found);
      let mapped = uniqueWidgetGames.map((gameId) => gameId.gameId);
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const tmp7 = require("useGameCoverLayout")();
  ({ isMeasured, coverWidth } = tmp7);
  ({ ref, onLayout, columns } = tmp7);
  let obj = widgetType(coverWidth[10]);
  const tmp4 = importDefault;
  const animatedRef = widgetType(coverWidth[15]).useAnimatedRef();
  const items2 = [widgetType];
  const items3 = [coverWidth];
  const callback = noop.useCallback((arr) => WidgetUtils.setGameOrderInWidget(widgetType, arr), items2);
  const callback1 = noop.useCallback(
    (gameId, handleGesture) => timestampProducer(closure_10, { gameId, coverWidth, handleGesture }),
    items3,
  );
  const obj3 = { dismissAccessibilityLabel: null, returnFocusRef: null, scrollRef: null, children: null };
  const obj2 = widgetType(coverWidth[15]);
  const intl = widgetType(coverWidth[17]).intl;
  obj3.dismissAccessibilityLabel = intl.string(widgetType(coverWidth[17]).t.rnh54p);
  obj3.returnFocusRef = widgetType.returnFocusRef;
  obj3.scrollRef = animatedRef;
  const obj4 = { ref, onLayout, children: null };
  if (isMeasured) {
    const obj5 = {
      gameIds: memo,
      columns,
      itemWidth: coverWidth,
      itemHeight: coverWidth / tmp(tmp2[19]).GAME_COVER_ASPECT_RATIO,
      gap: tmp(tmp2[19]).GAME_COVER_GRID_GAP,
      scrollRef: animatedRef,
      onCommitOrder: callback,
      renderGame: callback1,
    };
    isMeasured = closure_6(tmp4(tmp2[18]), obj5);
    const tmp4Result = tmp4(tmp2[18]);
  }
  obj4.children = isMeasured;
  obj3.children = closure_6(View, obj4);
  return closure_6(require("UserProfileReorderActionSheet"), obj3);
}
