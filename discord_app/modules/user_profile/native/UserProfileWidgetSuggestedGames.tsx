// discord_app/modules/user_profile/native/UserProfileWidgetSuggestedGames.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import useGameNameAndCoverImageDefault from "../../games/hooks/useGameNameAndCoverImage.tsx";
import GameCoverImageDefault from "GameCoverImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const AccessibilityAnnouncer2 = trackUserProfileEditAction(5315);
const UserProfileAnalyticsUtils = trackUserProfileEditAction(8546);
const WidgetUtils = trackUserProfileEditAction(12090);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(8479).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5306);
let obj = {
  container: {
    marginTop: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_16,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_NORMAL,
    gap: nativeDefault.space.PX_16,
  },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  row: { flexDirection: "row", gap: PX_12 },
};
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function SuggestedGameCover(gameId) {
  gameId = gameId.gameId;
  ({ onAdd: importDefault, registerCoverRef } = gameId);
  let tmp3 = useGameNameAndCoverImageDefault(gameId);
  const intl = util.intl;
  let isLoading = tmp3.isLoading;
  if (!isLoading) {
    isLoading = !tmp3.hasGameData;
  }
  items = [registerCoverRef, gameId, isLoading];
  const obj2 = {
    ref: noop.useCallback((arg0) => {
      let tmp3 = null;
      if (!isLoading) {
        tmp3 = arg0;
      }
      return registerCoverRef(gameId, tmp3);
    }, items),
    onPress: function handlePress() {
      importDefault(gameId);
    },
    disabled: isLoading,
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(util.t["3mb1s5"], { game: tmp3.gameName }),
    accessibilityElementsHidden: isLoading,
    importantForAccessibility: null,
    children: null,
  };
  let str = "auto";
  if (isLoading) {
    str = "no-hide-descendants";
  }
  obj2.importantForAccessibility = str;
  const obj3 = {};
  const formatToPlainStringResult = intl.formatToPlainString(util.t["3mb1s5"], { game: tmp3.gameName });
  const obj = { game: tmp3.gameName };
  const merged = Object.assign(tmp3);
  obj3.width = gameId.coverWidth;
  obj2.children = React5(GameCoverImageDefault, obj3);
  return React5(React4, obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetSuggestedGames.tsx");

export default function UserProfileWidgetSuggestedGames(widgetType) {
  widgetType = widgetType.widgetType;
  const addedGames = widgetType.addedGames;
  const containerWidth = widgetType.containerWidth;
  const onFillWidget = widgetType.onFillWidget;
  let ref2;
  let registerCoverRef;
  const tmp = registerCoverRef();
  const suggestedGames = widgetType(containerWidth[10]).useSuggestedGames(widgetType);
  const gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  let bound = Math.min(6, Math.max(4, Math.ceil((containerWidth + ref2) / (100 + ref2))));
  items = [gameIds, addedGames, bound];
  const memo = onFillWidget.useMemo(() => {
    const set = new Set(addedGames.map((gameId) => gameId.gameId));
    const found = gameIds.filter((item) => !set.has(item));
    return found.slice(0, bound);
  }, items);
  let obj = widgetType(containerWidth[10]);
  onFillWidget.useRef(new Map());
  const ref = onFillWidget.useRef(null);
  ref2 = onFillWidget.useRef(null);
  registerCoverRef = onFillWidget.useCallback((arg0, arg1) => {
    if (null != arg1) {
      const current2 = ref.current;
      const result = current2.set(arg0, arg1);
    } else {
      const current = ref.current;
      current.delete(arg0);
    }
  }, []);
  const items1 = [memo];
  const effect = onFillWidget.useEffect(() => {
    let current = ref2.current;
    if (null != current) {
      if (0 !== memo.length) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          closure_10.current = null;
          bound = Math.min(current, memo.length - 1);
          items = [...memo.slice(bound)];
          const substr = memo.slice(0, bound);
          HermesBuiltin.arraySpread(substr.reverse(), tmp2);
          const mapped = items.map((item) => {
            current = ref.current;
            return current.get(item);
          });
          const found = mapped.find((item) => null != item);
          if (null != found) {
            const obj = { current: found };
            let tmp5 = obj;
          } else {
            tmp5 = ref;
          }
          const result = setAccessibilityFocus.setAccessibilityFocus({ ref: tmp5 });
        }, widgetType(containerWidth[12]).WIDGET_FOCUS_DELAY_MS);
        return () => clearTimeout(closure_1);
      }
    }
  }, items1);
  const items2 = [onAddGame, widgetType, memo, addedGames.length, onFillWidget];
  const onAdd = onFillWidget.useCallback((gameId) => {
    let trackUserProfileEditAction = require;
    let result2 = dependencyMap;
    if (obj.addPendingGameToWidget(obj2)) {
      onAddGame(gameId);
      const sum = addedGames.length + 1;
      const result = WidgetUtils;
      if (sum >= result.widgetMaxGames(widgetType)) {
        onFillWidget(gameId);
      } else {
        closure_10.current = memo.indexOf(gameId);
      }
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.q0U3DE), "polite");
      const result1 = UserProfileAnalyticsUtils;
      trackUserProfileEditAction = result1.trackUserProfileEditAction;
      const obj3 = { userId: AuthenticationStore.getId(), action: memo.GAME_ADDED, widgetEdited: widgetType, gameId };
      result2 = trackUserProfileEditAction(obj3);
    }
    obj = WidgetUtils;
    obj2 = { widgetType, game: { gameId } };
  }, items2);
  let tmp9 = null;
  if (0 !== memo.length) {
    let obj2 = { style: tmp.container, children: null };
    let obj3 = { style: tmp.header, children: null };
    const obj4 = { variant: "body-sm/medium", color: "text-subtle", children: null };
    let intl = tmp2(tmp3[8]).intl;
    obj4.children = intl.string(tmp2(tmp3[8]).t.zMUr6Z);
    const items3 = [ref(tmp2(tmp3[16]).Heading, obj4)];
    const obj5 = { ref, size: "sm", variant: "icon-only", icon: null, accessibilityLabel: null, onPress: null };
    const obj6 = { size: "sm", color: addedGames(tmp3[5]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj5.icon = ref(tmp2(tmp3[18]).XLargeIcon, obj6);
    const intl2 = tmp2(tmp3[8]).intl;
    obj5.accessibilityLabel = intl2.string(tmp2(tmp3[8]).t["pUR+3g"]);
    obj5.onPress = widgetType.onDismiss;
    items3[1] = ref(tmp2(tmp3[17]).IconButton, obj5);
    obj3.children = items3;
    const items4 = [ref(onAddGame, obj3)];
    const obj7 = {
      style: tmp.row,
      children: memo.map((gameId) =>
        React5(
          onAdd,
          { gameId, coverWidth: (containerWidth - PX_12 * (bound - 1)) / bound, onAdd, registerCoverRef },
          gameId,
        ),
      ),
    };
    items4[1] = ref(onAddGame, obj7);
    obj2.children = items4;
    tmp9 = ref(onAddGame, obj2);
  }
  return tmp9;
}
