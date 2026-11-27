// discord_app/modules/user_profile/native/UserProfileAddGameActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import getGameMediaRefURLDefault from "../../games/getGameMediaRefURL.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import UserProfileGameWidgetTypes from "../UserProfileGameWidgetTypes.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import UnknownGameIcon from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import _mod9214 from "../../../../_runtime/metro/09214__.js";
import GamePlatformBadgeRowDefault from "../../games/native/GamePlatformBadgeRow.tsx";
import openUserProfileAddGameActionSheet from "openUserProfileAddGameActionSheet.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import WidgetStore from "../WidgetStore.tsx";

require = fn;
const View = fn(17).View;
let closure_8 = fn(6137).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5043);
let obj = {
  searchBar: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 },
  list: null,
  loading: null,
  emptyState: null,
  emptyStateText: null,
  gameIcon: null,
  gameIconBackground: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12 };
obj.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.loading = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
let obj5 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center" };
obj.emptyState = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj.emptyStateText = { textAlign: "center" };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj.gameIcon = size;
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj.gameIconBackground = { backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_36 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function AddGameRow(option) {
  option = option.option;
  ({ metadata, start, end, onSelect: importDefault } = option);
  const tmp = closure_11();
  if (option.extraChromeEnabled) {
    let icon;
    if (metadata != null) {
      icon = metadata.icon;
    }
    const tmp7Result = getGameMediaRefURLDefault(option.id, icon, { size: 32 });
    const obj2 = {
      label: option.label,
      labelLineClamp: 1,
      icon: null,
      trailing: null,
      disabled: null,
      start: null,
      end: null,
      onPress: null,
    };
    if (obj3.isNullOrEmpty(tmp7Result)) {
      const obj4 = { size: "sm", style: tmp.gameIcon };
      let tmp11Result = React6(UnknownGameIcon.UnknownGameIcon, obj4);
    } else {
      const obj5 = { style: null, source: null };
      items = [,];
      ({ gameIcon: arr[0], gameIconBackground: arr[1] } = tmp);
      obj5.style = items;
      const obj6 = { uri: tmp7Result };
      obj5.source = obj6;
      tmp11Result = React6(FastImageDefault, obj5);
    }
    obj2.icon = tmp11Result;
    let platformAvailability;
    obj3 = StringUtils;
    if (metadata != null) {
      platformAvailability = metadata.platformAvailability;
    }
    const obj7 = { platforms: platformAvailability };
    obj2.trailing = React6(GamePlatformBadgeRowDefault, obj7);
    obj2.disabled = option.disabled;
    obj2.start = start;
    obj2.end = end;
    obj2.onPress = function onPress() {
      return importDefault(option.id);
    };
    return React6(TableRow.TableRow, obj2);
  } else {
    const obj = { label: null, labelLineClamp: 1, disabled: null, start: null, end: null, onPress: null };
    ({ label: obj.label, disabled: obj.disabled } = option);
    obj.start = start;
    obj.end = end;
    obj.onPress = function onPress() {
      return importDefault(option.id);
    };
    return React6(TableRow.TableRow, obj);
  }
});
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameActionSheet.tsx");

export default function UserProfileAddGameActionSheet(widgetType) {
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  let extraChromeEnabled;
  let str;
  noop = undefined;
  let stateFromStores;
  let isLoading;
  let trackEditAction;
  let callback1;
  closure_21 = undefined;
  let callback3;
  let tmp = isLoading();
  const tmp4 = returnFocusRef(extraChromeEnabled[16])();
  extraChromeEnabled = returnFocusRef(extraChromeEnabled[17]).useConfig({
    location: "add_game_action_sheet_native",
  }).extraChromeEnabled;
  const tmp6 = str(noop.useState(""), 2);
  str = tmp6[0];
  noop = tmp6[1];
  const tmp7 = str.trim().length > 0;
  closure_5 = tmp7;
  let obj = returnFocusRef(extraChromeEnabled[17]);
  let tmp5 = str;
  items = [stateFromStores];
  stateFromStores = widgetType(extraChromeEnabled[18]).useStateFromStores(items, () => stateFromStores.getId());
  const tmp10 = returnFocusRef(extraChromeEnabled[19])(stateFromStores);
  closure_7 = tmp10;
  const items1 = [tmp10, widgetType];
  const memo = noop.useMemo(() => {
    const found = closure_7.filter(UserProfileGameWidgetTypes.isGameWidget);
    const found1 = found.find((type) => type.type === widgetType);
    let mapped;
    if (found1 != null) {
      const games = found1.games;
      mapped = games.map((gameId) => gameId.gameId);
    }
    return new Set(mapped);
  }, items1);
  let obj3 = widgetType(extraChromeEnabled[18]);
  let obj4 = widgetType(extraChromeEnabled[21]);
  const profileSortedGames = obj4.useProfileSortedGames({
    surface: widgetType(extraChromeEnabled[22]).GameSearchSurface.PROFILE_WIDGET,
    query: str,
  });
  const options = profileSortedGames.options;
  const metadataByGameId = profileSortedGames.metadataByGameId;
  isLoading = profileSortedGames.isLoading;
  const onSelect = profileSortedGames.onSelect;
  let obj5 = { surface: widgetType(extraChromeEnabled[22]).GameSearchSurface.PROFILE_WIDGET, query: str };
  const suggestedGames = widgetType(extraChromeEnabled[23]).useSuggestedGames(widgetType);
  const gameIds = suggestedGames.gameIds;
  const onAddGame = suggestedGames.onAddGame;
  const tmp14 = returnFocusRef(extraChromeEnabled[24])(gameIds);
  closure_15 = tmp14;
  const items2 = [options, memo, tmp14, tmp7];
  const obj6 = widgetType(extraChromeEnabled[23]);
  const memo1 = noop.useMemo(() => {
    const mapped = options.map((id) => ({ id: id.value, label: id.label, disabled: set.has(id.value) }));
    if (closure_5) {
      return mapped;
    } else {
      const found = closure_15.filter((id) => {
        const hasItem = set.has(id.id);
        let result = !hasItem;
        if (!hasItem) {
          result = widgetType(extraChromeEnabled[26]).isGameAllowedInGameWidgets(id);
          const obj = widgetType(extraChromeEnabled[26]);
        }
        return result;
      });
      const mapped1 = found.map((id) => ({ id: id.id, label: id.name, disabled: false }));
      const _Set = Set;
      items = [];
      set = new Set(mapped1.map((id) => id.id));
      HermesBuiltin.arraySpread(
        mapped.filter((id) => !set.has(id.id)),
        HermesBuiltin.arraySpread(mapped1, 0),
      );
      return items;
    }
  }, items2);
  const items3 = [metadataByGameId, tmp14];
  const memo2 = noop.useMemo(() => {
    const map = new Map(metadataByGameId);
    const iter = closure_15[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let media = nextResult.media;
      let icon;
      let tmp3 = nextResult;
      if (media != null) {
        icon = media.icon;
      }
      let obj = { icon, platformAvailability: null };
      obj.platformAvailability = tmp3.platformAvailability;
      let result = map.set(nextResult.id, obj);
      continue;
    }
    return map;
  }, items3);
  let tmp17 = tmp7;
  if (tmp7) {
    tmp17 = !isLoading;
  }
  if (tmp17) {
    tmp17 = 0 === memo1.length;
  }
  const tmp15 = returnFocusRef(extraChromeEnabled[25])(gameIds);
  const items4 = [closure_7];
  const items5 = [gameIds.length];
  let stateFromStores1 = isLoading;
  if (!isLoading) {
    stateFromStores1 = tmp8Result.useStateFromStores(
      items4,
      () => {
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
      },
      items5,
    );
  }
  if (!stateFromStores1) {
    stateFromStores1 = tmp15;
  }
  const tmp5Result = tmp5(noop.useState(false), 2);
  const first = tmp5Result[0];
  let tmp21 = first;
  if (!first) {
    tmp21 = tmp7;
  }
  if (!tmp21) {
    tmp21 = stateFromStores1;
  }
  if (!tmp21) {
    tmp5Result[1](true);
  }
  if (tmp7) {
    let tmp24 = isLoading;
    if (isLoading) {
      tmp24 = 0 === memo1.length;
    }
    let tmp23 = tmp24;
  } else {
    tmp23 = !first;
    if (!first) {
      tmp23 = stateFromStores1;
    }
  }
  noop.useRef(false);
  const items6 = [tmp7, isLoading, memo1.length];
  const effect = obj2.useEffect(() => {
    let current = !closure_5;
    if (closure_5) {
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
  }, items6);
  const items7 = [returnFocusRef];
  const effect1 = obj2.useEffect(
    () => () => widgetType(extraChromeEnabled[29]).setAccessibilityFocus({ ref, delay: 100 }),
    items7,
  );
  const items8 = [stateFromStores, widgetType];
  trackEditAction = obj2.useCallback((arg0) => {
    const merged = Object.assign(arg0);
    return UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: stateFromStores, widgetEdited: widgetType });
  }, items8);
  const items9 = [tmp7, memo1];
  callback1 = obj2.useCallback((query) => {
    if (!closure_5) {
      if ("" !== query.trim()) {
        const obj2 = { keys: ["label"] };
        length = _mod9214.matchSorter(memo1, query, obj2).length;
      }
      return length;
    }
    length = memo1.length;
  }, items9);
  closure_21 = obj2.useRef({ query: "", getResultCount: callback1, trackEditAction });
  const items10 = [str, callback1, trackEditAction];
  const effect2 = obj2.useEffect(() => {
    closure_21.current = { query: str, getResultCount: callback1, trackEditAction };
  }, items10);
  const effect3 = obj2.useEffect(() => {
    callback({ action: memo.PRESS_ADD_GAME });
    return () => {
      const current = ref.current;
      ({ query, trackEditAction } = current);
      trackEditAction({
        action: memo.GAME_SEARCH_SESSION_ENDED,
        numCharacters: query.trim().length,
        numResults: current.getResultCount(current.query),
      });
    };
  }, []);
  const items11 = [tmp7, trackEditAction, callback1];
  const items12 = [widgetType, onSelect, gameIds, onAddGame, trackEditAction];
  const callback2 = obj2.useCallback((str) => {
    let tmp = closure_5;
    if (!closure_5) {
      tmp = "" === str.trim();
    }
    if (!tmp) {
      const obj = {
        action: memo.GAME_SEARCH_SESSION_STARTED,
        numCharacters: str.trim().length,
        numResults: callback1(str),
      };
      callback(obj);
    }
    closure_4(str);
  }, items11);
  callback3 = obj2.useCallback((gameId) => {
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
      const obj4 = { action: memo.GAME_ADDED, gameId };
      callback(obj4);
      ActionSheetActionCreatorsDefault.hideActionSheet(
        openUserProfileAddGameActionSheet.USER_PROFILE_ADD_GAME_ACTION_SHEET_KEY,
      );
    }
  }, items12);
  const items13 = [memo1, memo2, extraChromeEnabled, callback3];
  const callback4 = obj2.useCallback(
    (arg0, arg1) =>
      React6(closure_12, {
        option: memo1[arg1],
        metadata: memo2.get(memo1[arg1].id),
        extraChromeEnabled,
        start: 0 === arg1,
        end: arg1 === memo1.length - 1,
        onSelect: callback3,
      }),
    items13,
  );
  const obj7 = { scrollable: true, header: null, children: null };
  const obj8 = { title: null };
  let intl = tmp8(tmp3[28]).intl;
  obj8.title = intl.string(widgetType(extraChromeEnabled[28]).t.PYyENc);
  obj7.header = options(widgetType(extraChromeEnabled[35]).BottomSheetTitleHeader, obj8);
  const obj9 = { style: tmp.searchBar, children: null };
  const obj10 = { size: "md", accessibilityLabel: null, onChange: null };
  const intl2 = tmp8(tmp3[28]).intl;
  obj10.accessibilityLabel = intl2.string(widgetType(extraChromeEnabled[28]).t.uqw8wK);
  obj10.onChange = callback2;
  obj9.children = options(widgetType(extraChromeEnabled[36]).SearchBar, obj10);
  const items14 = [options(closure_5, obj9)];
  if (tmp23) {
    const obj11 = { style: tmp.loading, children: tmp35(tmp8(tmp3[37]).ActivityIndicator, { size: "large" }) };
    let tmp35Result = tmp35(tmp36, obj11);
  } else if (tmp17) {
    const obj12 = { style: tmp.emptyState, children: null };
    const obj13 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
    const intl3 = tmp8(tmp3[28]).intl;
    obj13.children = intl3.string(tmp8(tmp3[28]).t.jkk7t9);
    obj12.children = tmp35(tmp8(tmp3[38]).Text, obj13);
    tmp35Result = tmp35(tmp36, obj12);
  } else {
    const obj14 = {
      style: tmp.list,
      inActionSheet: true,
      keyboardShouldPersistTaps: "handled",
      sections: null,
      itemSize: null,
      estimatedListSize: "windowSize",
      renderItem: null,
      insetEnd: null,
    };
    const items15 = [memo1.length];
    obj14.sections = items15;
    obj14.itemSize = tmp4;
    obj14.renderItem = callback4;
    obj14.insetEnd = tmp2(tmp3[8]).space.PX_16 + returnFocusRef(extraChromeEnabled[15])().insets.bottom;
    tmp35Result = tmp35(tmp2(tmp3[39]), obj14);
    const tmp2Result = tmp2(tmp3[39]);
  }
  items14[1] = tmp35Result;
  obj7.children = items14;
  return metadataByGameId(widgetType(extraChromeEnabled[34]).BottomSheet, obj7);
}
