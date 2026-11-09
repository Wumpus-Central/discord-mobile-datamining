// === Module 15216: SuggestedGameHooks ===

// Module 15216 (SuggestedGameHooks)
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12552 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import WidgetStore from "WidgetStore" /* 12550 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/SuggestedGameHooks.tsx");

export function useSuggestedGames(widgetType) {
  _require = widgetType;
  const suggestedGameIdStack = require("suggestedGameIdStack").useSuggestedGameIdStack();
  const bump = suggestedGameIdStack.bump;
  bumpMultiple = suggestedGameIdStack.bumpMultiple;
  const gameIds = suggestedGameIdStack.gameIds;
  closure_129_0 = widgetType;
  const obj = require("suggestedGameIdStack");
  const suggestedGameIdStack1 = require("suggestedGameIdStack").useSuggestedGameIdStack();
  const remove = suggestedGameIdStack1.remove;
  closure_129_1 = remove;
  const peekedGameIds = suggestedGameIdStack1.peekedGameIds;
  closure_129_2 = peekedGameIds;
  items = [peekedGameIds, widgetType];
  const memo = memo1.useMemo(() => {
    items = bumpMultiple[closure_0];
    if (items == null) {
      items = [];
    }
    return items;
  }, items);
  closure_129_3 = memo;
  const obj2 = require("suggestedGameIdStack");
  const games = require("useGame").useGames(memo);
  const obj3 = require("useGame");
  const items1 = [GameStore];
  const items2 = [memo, remove, widgetType, require("initialize").useStateFromStoresArray(items1, () => gameIds.map((item) => fetching.isFetching(item)))];
  const effect = memo1.useEffect(() => {
    const iter = gameIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let didFetchingFailResult = GameStore.didFetchingFail(nextResult);
      let _Boolean = Boolean;
      let hasNoDataResult = GameStore.hasNoData(nextResult);
      let BooleanResult = Boolean(GameStore.getGame(nextResult));
      let tmp8 = null != GameStore.getCoverImageUrl(nextResult);
      if (!didFetchingFailResult) {
        didFetchingFailResult = hasNoDataResult;
      }
      if (!didFetchingFailResult) {
        let tmp9 = BooleanResult;
        if (BooleanResult) {
          tmp9 = !tmp8;
        }
        didFetchingFailResult = tmp9;
      }
      if (didFetchingFailResult) {
        let tmp14 = bump(tmp3, closure_0);
      }
      continue;
    }
  }, items2);
  const items3 = [gameIds, widgetType];
  memo1 = memo1.useMemo(() => {
    items = gameIds[closure_0];
    if (items == null) {
      items = [];
    }
    return items;
  }, items3);
  const items4 = [bump, widgetType];
  const callback = memo1.useCallback((arg0) => {
    bump(arg0, closure_0);
  }, items4);
  const obj4 = require("initialize");
  const items5 = [GameStore];
  const items6 = [memo1, widgetType, bumpMultiple, require("initialize").useStateFromStoresArray(items5, () => memo1.map((item) => fetching.isFetching(item)))];
  const effect1 = memo1.useEffect(() => {
    const found = memo1.filter((item) => {
      let didFetchingFailResult = closure_1_5.didFetchingFail(item);
      let BooleanResult = Boolean(closure_1_5.getGame(item));
      const hasNoDataResult = closure_1_5.hasNoData(item);
      if (!didFetchingFailResult) {
        didFetchingFailResult = hasNoDataResult;
      }
      if (!didFetchingFailResult) {
        if (BooleanResult) {
          BooleanResult = !tmp4;
        }
        didFetchingFailResult = BooleanResult;
      }
      return didFetchingFailResult;
    });
    if (found.length > 0) {
      bumpMultiple(found, closure_0);
    }
  }, items6);
  const items7 = [memo1];
  const obj5 = require("initialize");
  return { gameIds: memo1, games: memo1.useMemo(() => memo1.map((gameId) => ({ gameId })), items7), onAddGame: callback };
}
export function useFetchSuggestedGames(arg0, memo) {
  _require = arg0;
  items = [first];
  let tmp = _slicedToArray(require("initialize").useStateFromStoresArray(items, () => {
    items = [, , , ];
    ({ suggestedFetchAttempted: arr[0], suggestedFetchError: arr[1], suggestedGameIds: arr[2], suggestedFetchIsLoading: arr[3] } = first);
    return items;
  }), 4);
  first = tmp[0];
  _slicedToArray = tmp[1];
  noop = tmp[2];
  let obj = require("initialize");
  const onLoad = require("suggestedGameIdStack").useSuggestedGameIdStack().onLoad;
  const items1 = [first, arg0];
  const effect = noop.useEffect(() => {
    let tmp = !first;
    if (!first) {
      tmp = closure_0;
    }
    if (tmp) {
      const suggestedGames = WidgetActionCreatorsDefault.fetchSuggestedGames();
    }
  }, items1);
  if (first) {
    first = !tmp[3];
  }
  const items2 = [first];
  const effect1 = noop.useEffect(() => {
    if (first) {
      const mapped = memo.map((games) => games.games);
      if (!closure_3) {
        suggestedGamesIds = suggestedGamesIds.suggestedGamesIds;
        if (suggestedGamesIds == null) {
          suggestedGamesIds = [];
        }
        let prop = suggestedGamesIds.suggestedWishlistGamesIds;
        if (prop == null) {
          prop = [];
        }
        onLoad(suggestedGamesIds, prop, tmp3);
      }
    }
  }, items2);
}