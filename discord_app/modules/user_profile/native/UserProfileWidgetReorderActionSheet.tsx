// discord_app/modules/user_profile/native/UserProfileWidgetReorderActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import useGameCoverLayoutDefault from "useGameCoverLayout.tsx";
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard.tsx";
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover.tsx";
import UserProfileReorderActionSheetDefault from "UserProfileReorderActionSheet.tsx";
import UserProfileApplicationWidgetIconDefault from "UserProfileApplicationWidgetIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function CompactGameWidgetContent(userId) {
  userId = userId.userId;
  const widget = userId.widget;
  ({ columns, coverWidth } = userId);
  items = [widget];
  let memo = noop.useMemo(() => WidgetUtils.getUniqueWidgetGames(widget), items);
  if (0 === memo.length) {
    const obj2 = { widgetType: widget.type };
    let tmp10 = jsx(widget(coverWidth[8]), { widgetType: widget.type });
  } else {
    tmp10 = null;
    if (userId.isMeasured) {
      let tmp3 = widget;
      let obj = coverWidth;
      if (widgetShowsGameDetails(widget.type)) {
        tmp3 = tmp3(obj[9]);
        obj = { userId, game: null, coverWidth: null, compact: true, disableInteraction: true };
        memo = memo[0];
        obj.game = memo;
        obj.coverWidth = coverWidth;
        let tmp2Result = <tmp3 userId={userId} game={null} coverWidth={null} compact disableInteraction />;
      } else {
        const obj3 = {
          games: memo.slice(0, columns),
          columns,
          renderCover(game) {
            return jsx(
              UserProfileWidgetGameCoverDefault,
              { userId, game, coverWidth, disableInteraction: true },
              game.gameId,
            );
          },
          disableInteraction: true,
        };
        tmp2Result = jsx(tmp3(obj[10]), {
          games: memo.slice(0, columns),
          columns,
          renderCover(game) {
            return jsx(
              UserProfileWidgetGameCoverDefault,
              { userId, game, coverWidth, disableInteraction: true },
              game.gameId,
            );
          },
          disableInteraction: true,
        });
        const tmp3Result = tmp3(obj[10]);
      }
    }
  }
  return tmp10;
}
function CompactGameWidget(userId) {
  const widget = userId.widget;
  ({ ref, onLayout, isMeasured, columns, coverWidth } = useGameCoverLayoutDefault());
  const obj = { title: null, contentRef: null, onContentLayout: null, children: null };
  const tmp = useGameCoverLayoutDefault();
  obj.title = WidgetUtils.getWidgetTitle(widget);
  obj.contentRef = ref;
  obj.onContentLayout = onLayout;
  obj.children = (
    <CompactGameWidgetContent
      userId={userId.userId}
      widget={widget}
      isMeasured={isMeasured}
      columns={columns}
      coverWidth={coverWidth}
    />
  );
  return (
    <tmp2 title={null} contentRef={null} onContentLayout={null}>
      {null}
    </tmp2>
  );
}
function CompactApplicationWidget(widget) {
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(widget.widget.applicationId);
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  return (
    <tmp5
      title={name}
      titleLeadingIcon={jsx(UserProfileApplicationWidgetIconDefault, { application: getOrFetchApplication })}
    />
  );
}
const View = fn(17).View;
const widgetShowsGameDetails = fn(6172).widgetShowsGameDetails;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let obj = { list: { gap: nativeDefault.space.PX_16 } };
let closure_8 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function CompactWidgetRenderer(widget) {
  widget = widget.widget;
  if (obj.isGameWidget(widget)) {
    const obj2 = { userId: widget.userId, widget };
    let tmpResult = <CompactGameWidget userId={widget.userId} widget={widget} />;
  } else {
    const obj3 = { widget };
    tmpResult = <CompactApplicationWidget widget={widget} />;
  }
  return tmpResult;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReorderActionSheet.tsx");

export default function UserProfileWidgetReorderActionSheet(returnFocusRef) {
  let stateFromStores;
  const tmp = closure_8();
  items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => id.getId());
  const obj = stateFromStores(504);
  const boardWidgets = stateFromStores(14684).useBoardWidgets(stateFromStores);
  const obj3 = { dismissAccessibilityLabel: null, returnFocusRef: null, children: null };
  const obj2 = stateFromStores(14684);
  const intl = stateFromStores(1112).intl;
  obj3.dismissAccessibilityLabel = intl.string(stateFromStores(1112).t["+uBSeT"]);
  obj3.returnFocusRef = returnFocusRef.returnFocusRef;
  obj3.children = (
    <View accessibilityRole="list" style={tmp.list}>
      {boardWidgets.map((widget) => (
        <closure_12 key={widget.getUniqueKey()} userId={stateFromStores} widget={widget} />
      ))}
    </View>
  );
  return (
    <tmp3 dismissAccessibilityLabel={null} returnFocusRef={null}>
      {null}
    </tmp3>
  );
}
