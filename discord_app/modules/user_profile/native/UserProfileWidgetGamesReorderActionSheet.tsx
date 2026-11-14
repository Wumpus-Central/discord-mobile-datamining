// discord_app/modules/user_profile/native/UserProfileWidgetGamesReorderActionSheet.tsx
import WidgetUtils from "../WidgetUtils.tsx";
import useGameCoverLayoutDefault from "useGameCoverLayout.tsx";
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard.tsx";
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let closure_6 = noop.memo(function CompactGameWithDetailsCard(arg0) {
  ({ userId, game } = arg0);
  const tmp3 = useGameCoverLayoutDefault();
  let isMeasured = tmp3.isMeasured;
  ({ ref, onLayout, coverWidth } = tmp3);
  const obj = { contentRef: ref, onContentLayout: onLayout, children: null };
  if (isMeasured) {
    const obj2 = { userId, game, coverWidth, compact: true, disableInteraction: true };
    isMeasured = jsx(UserProfileGameDetailsRowDefault, {
      userId,
      game,
      coverWidth,
      compact: true,
      disableInteraction: true,
    });
  }
  obj.children = isMeasured;
  return jsx(UserProfileWidgetDraggableCardDefault, { contentRef: ref, onContentLayout: onLayout, children: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGamesReorderActionSheet.tsx");

export default function UserProfileWidgetGamesReorderActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  items = [AuthenticationStore];
  const stateFromStores = widgetType(504).useStateFromStores(items, () => id.getId());
  const tmp2 = stateFromStores(12121)(stateFromStores);
  dependencyMap = tmp2;
  const items1 = [tmp2, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_2.find((type) => {
      let isGameWidgetResult = widgetType(closure_2[8]).isGameWidget(type);
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
  const obj2 = { dismissAccessibilityLabel: null, returnFocusRef: null, children: null };
  let obj = widgetType(504);
  const intl = widgetType(1113).intl;
  obj2.dismissAccessibilityLabel = intl.string(widgetType(1113).t.rnh54p);
  obj2.returnFocusRef = widgetType.returnFocusRef;
  obj2.children = memo.map((game) => <closure_6 key={game.gameId} userId={stateFromStores} game={game} />);
  return jsx(stateFromStores(12122), { dismissAccessibilityLabel: null, returnFocusRef: null, children: null });
}
