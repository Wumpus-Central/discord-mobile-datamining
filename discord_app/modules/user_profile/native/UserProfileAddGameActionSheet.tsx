// === Module 12053: UserProfileAddGameActionSheet ===

// Module 12053 (UserProfileAddGameActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import _mod7013 from "module_7013" /* 7013 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7290 */;
import TableRow from "TableRow" /* 7379 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import WidgetUtils from "WidgetUtils" /* 12029 */;
import openUserProfileAddGameActionSheet from "openUserProfileAddGameActionSheet" /* 12052 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import WidgetStore from "WidgetStore" /* 12030 */;

require = fn;
const View = fn(17).View;
let closure_8 = fn(8413).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let obj = { searchBar: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 }, list: null, loading: null, emptyState: null, emptyStateText: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
obj.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.loading = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
let obj5 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
obj.emptyState = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj.emptyStateText = { textAlign: "center" };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function AddGameRow(option) {
  option = option.option;
  const onSelect = option.onSelect;
  ({ start, end } = option);
  return React6(TableRow.TableRow, {
    label: option.label,
    labelLineClamp: 1,
    disabled: option.disabled,
    start,
    end,
    onPress() {
      return onSelect(option.id);
    }
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameActionSheet.tsx");

export default function UserProfileAddGameActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  str = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_6 = undefined;
  let gameIds;
  let trackEditAction;
  let callback1;
  closure_18 = undefined;
  let callback3;
  let tmp = gameIds();
  [str, _slicedToArray] = noop.useState("");
  const tmp7 = str.trim().length > 0;
  noop = tmp7;
  const tmp4 = returnFocusRef(str[11])();
  const tmp5 = _slicedToArray;
  items = [closure_6];
  const stateFromStores = widgetType(str[12]).useStateFromStores(items, () => closure_6.getId());
  const tmp10 = returnFocusRef(str[13])(stateFromStores);
  closure_6 = tmp10;
  const items1 = [tmp10, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_6.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetType);
    let mapped;
    if (found1 != null) {
      const games = found1.games;
      mapped = games.map((gameId) => gameId.gameId);
    }
    return new Set(mapped);
  }, items1);
  let obj2 = widgetType(str[12]);
  let obj3 = widgetType(str[15]);
  const profileSortedGames = obj3.useProfileSortedGames({ surface: widgetType(str[16]).GameSearchSurface.PROFILE_WIDGET, query: str });
  const options = profileSortedGames.options;
  const isLoading = profileSortedGames.isLoading;
  const onSelect = profileSortedGames.onSelect;
  let obj4 = { surface: widgetType(str[16]).GameSearchSurface.PROFILE_WIDGET, query: str };
  const suggestedGames = widgetType(str[17]).useSuggestedGames(widgetType);
  gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  const tmp14 = returnFocusRef(str[18])(gameIds);
  closure_13 = tmp14;
  const items2 = [options, memo, tmp14, tmp7];
  let obj5 = widgetType(str[17]);
  const memo1 = noop.useMemo(() => {
    const mapped = options.map((id) => ({ id: id.value, label: id.label, disabled: set.has(id.value) }));
    if (closure_4) {
      return mapped;
    } else {
      const found = closure_13.filter((id) => {
        const hasItem = set.has(id.id);
        let result = !hasItem;
        if (!hasItem) {
          result = widgetType(str[20]).isGameAllowedInGameWidgets(id);
          const obj = widgetType(str[20]);
        }
        return result;
      });
      const mapped1 = found.map((id) => ({ id: id.id, label: id.name, disabled: false }));
      const _Set = Set;
      items = [];
      const set = new Set(mapped1.map((id) => id.id));
      HermesBuiltin.arraySpread(mapped.filter((id) => !set.has(id.id)), HermesBuiltin.arraySpread(mapped1, 0));
      return items;
    }
  }, items2);
  let tmp16 = tmp7;
  if (tmp7) {
    tmp16 = !isLoading;
  }
  if (tmp16) {
    tmp16 = 0 === memo1.length;
  }
  const tmp15 = returnFocusRef(str[19])(gameIds);
  const items3 = [memo];
  const items4 = [gameIds.length];
  let stateFromStores1 = isLoading;
  if (!isLoading) {
    stateFromStores1 = tmp8Result.useStateFromStores(items3, () => {
      const suggestedFetchAttempted = WidgetStore.suggestedFetchAttempted;
      let suggestedFetchIsLoading = !suggestedFetchAttempted;
      if (suggestedFetchAttempted) {
        suggestedFetchIsLoading = WidgetStore.suggestedFetchIsLoading;
      }
      if (!suggestedFetchIsLoading) {
        const suggestedFetchError = WidgetStore.suggestedFetchError;
        let tmp2 = !suggestedFetchError;
        if (!suggestedFetchError) {
          tmp2 = 0 === gameIds.length;
        }
        suggestedFetchIsLoading = tmp2;
      }
      return suggestedFetchIsLoading;
    }, items4);
  }
  if (!stateFromStores1) {
    stateFromStores1 = tmp15;
  }
  const tmp5Result = tmp5(noop.useState(false), 2);
  const first = tmp5Result[0];
  let tmp20 = first;
  if (!first) {
    tmp20 = tmp7;
  }
  if (!tmp20) {
    tmp20 = stateFromStores1;
  }
  if (!tmp20) {
    tmp5Result[1](true);
  }
  if (tmp7) {
    let tmp23 = isLoading;
    if (isLoading) {
      tmp23 = 0 === memo1.length;
    }
    let tmp22 = tmp23;
  } else {
    tmp22 = !first;
    if (!first) {
      tmp22 = stateFromStores1;
    }
  }
  noop.useRef(false);
  const items5 = [tmp7, isLoading, memo1.length];
  const effect = obj.useEffect(() => {
    let current = !closure_4;
    if (closure_4) {
      current = isLoading;
    }
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: memo1.length };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items5);
  const items6 = [returnFocusRef];
  const effect1 = obj.useEffect(() => () => widgetType(str[23]).setAccessibilityFocus({ ref, delay: 100 }), items6);
  const items7 = [stateFromStores, widgetType];
  trackEditAction = obj.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: stateFromStores, widgetEdited: widgetType });
  }, items7);
  const items8 = [tmp7, memo1];
  callback1 = obj.useCallback((query) => {
    if (!closure_4) {
      if ("" !== query.trim()) {
        const obj2 = { keys: ["label"] };
        length = _mod7013.matchSorter(memo1, query, obj2).length;
      }
      return length;
    }
    length = memo1.length;
  }, items8);
  closure_18 = obj.useRef({ query: "", getResultCount: callback1, trackEditAction });
  const items9 = [str, callback1, trackEditAction];
  const effect2 = obj.useEffect(() => {
    closure_18.current = { query: str, getResultCount: callback1, trackEditAction };
  }, items9);
  const effect3 = obj.useEffect(() => {
    callback({ action: options.PRESS_ADD_GAME });
    return () => {
      const current = ref.current;
      ({ query, trackEditAction } = current);
      trackEditAction({ action: options.GAME_SEARCH_SESSION_ENDED, numCharacters: query.trim().length, numResults: current.getResultCount(current.query) });
    };
  }, []);
  const items10 = [tmp7, trackEditAction, callback1];
  const items11 = [widgetType, onSelect, gameIds, onAddGame, trackEditAction];
  const callback2 = obj.useCallback((str) => {
    let tmp = closure_4;
    if (!closure_4) {
      tmp = "" === str.trim();
    }
    if (!tmp) {
      const obj = { action: options.GAME_SEARCH_SESSION_STARTED, numCharacters: str.trim().length, numResults: callback1(str) };
      callback(obj);
    }
    closure_3(str);
  }, items10);
  callback3 = obj.useCallback((gameId) => {
    if (!ref.current) {
      tmp.current = true;
      onSelect(gameId);
      const obj2 = { widgetType, game: null };
      const obj3 = { gameId };
      obj2.game = obj3;
      const result = WidgetUtils.addPendingGameToWidget(obj2);
      if (gameIds.includes(gameId)) {
        onAddGame(gameId);
      }
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.q0U3DE));
      const obj4 = { action: options.GAME_ADDED, gameId };
      callback(obj4);
      ActionSheetActionCreatorsDefault.hideActionSheet(openUserProfileAddGameActionSheet.USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY);
    }
  }, items11);
  const items12 = [memo1, callback3];
  const callback4 = obj.useCallback((arg0, arg1) => React6(closure_12, { option: memo1[arg1], start: 0 === arg1, end: arg1 === memo1.length - 1, onSelect: callback3 }), items12);
  const obj6 = { scrollable: true, header: null, children: null };
  const obj7 = { title: null };
  let intl = tmp8(tmp3[22]).intl;
  obj7.title = intl.string(widgetType(str[22]).t.PYyENc);
  obj6.header = isLoading(widgetType(str[29]).BottomSheetTitleHeader, obj7);
  const obj8 = { style: tmp.searchBar, children: null };
  const obj9 = { size: "md", accessibilityLabel: null, onChange: null };
  const intl2 = tmp8(tmp3[22]).intl;
  obj9.accessibilityLabel = intl2.string(widgetType(str[22]).t.uqw8wK);
  obj9.onChange = callback2;
  obj8.children = isLoading(widgetType(str[30]).SearchBar, obj9);
  const items13 = [isLoading(stateFromStores, obj8), ];
  if (tmp22) {
    const obj10 = { style: tmp.loading, children: tmp34(tmp8(tmp3[31]).ActivityIndicator, { size: "large" }) };
    let tmp34Result = tmp34(tmp35, obj10);
  } else if (tmp16) {
    const obj11 = { style: tmp.emptyState, children: null };
    const obj12 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
    const intl3 = tmp8(tmp3[22]).intl;
    obj12.children = intl3.string(tmp8(tmp3[22]).t.jkk7t9);
    obj11.children = tmp34(tmp8(tmp3[32]).Text, obj12);
    tmp34Result = tmp34(tmp35, obj11);
  } else {
    const obj13 = { style: tmp.list, inActionSheet: true, keyboardShouldPersistTaps: "handled", sections: null, itemSize: null, estimatedListSize: "windowSize", renderItem: null, insetEnd: null };
    const items14 = [memo1.length];
    obj13.sections = items14;
    obj13.itemSize = tmp4;
    obj13.renderItem = callback4;
    obj13.insetEnd = tmp2(tmp3[8]).space.PX_16 + returnFocusRef(str[10])().insets.bottom;
    tmp34Result = tmp34(tmp2(tmp3[33]), obj13);
    const tmp2Result = tmp2(tmp3[33]);
  }
  items13[1] = tmp34Result;
  obj6.children = items13;
  return onSelect(widgetType(str[28]).BottomSheet, obj6);
};