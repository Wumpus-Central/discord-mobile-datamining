// === Module 14581: UserProfileWidgetGameDetailsReorderActionSheet ===

// Module 14581 (UserProfileWidgetGameDetailsReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 14575 */;
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard" /* 14582 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 14583 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let obj = { list: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = noop.memo(function CompactGameWithDetailsCard(arg0) {
  ({ userId, game } = arg0);
  const tmp3 = useGameCoverLayoutDefault();
  let isMeasured = tmp3.isMeasured;
  ({ ref, onLayout, coverWidth } = tmp3);
  const obj = { contentRef: ref, onContentLayout: onLayout, children: null };
  if (isMeasured) {
    const obj2 = { userId, game, coverWidth, compact: true, disableInteraction: true };
    isMeasured = jsx(UserProfileGameDetailsRowDefault, { userId, game, coverWidth, compact: true, disableInteraction: true });
  }
  obj.children = isMeasured;
  return jsx(UserProfileWidgetDraggableCardDefault, { contentRef: ref, onContentLayout: onLayout, children: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameDetailsReorderActionSheet.tsx");

export default function UserProfileWidgetGameDetailsReorderActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  const tmp = closure_7();
  items = [AuthenticationStore];
  const stateFromStores = widgetType(504).useStateFromStores(items, () => id.getId());
  const tmp3 = stateFromStores(14566)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [tmp3, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_2.find((type) => {
      let isGameWidgetResult = widgetType(closure_2[11]).isGameWidget(type);
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
  const intl = widgetType(1112).intl;
  obj2.dismissAccessibilityLabel = intl.string(widgetType(1112).t.rnh54p);
  obj2.returnFocusRef = widgetType.returnFocusRef;
  const tmp4 = stateFromStores(14596);
  obj2.children = <View accessibilityRole="list" style={tmp.list}>{memo.map((game) => <closure_8 key={game.gameId} userId={stateFromStores} game={game} />)}</View>;
  return <tmp4 dismissAccessibilityLabel={null} returnFocusRef={null}>{null}</tmp4>;
};