// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "useGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../GameStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const game = useGame.useGame(canonicalGameId);
  let data = game.data;
  const obj2 = { gameId: canonicalGameId, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj2.gameRecord = data;
  obj2.isLoading = (null != applicationId && null == getOrFetchApplication) || game.isLoading;
  return obj2;
}
export function useGetGameResultsForAppIds(arg0) {
  let tmp = memo(stateFromStoresArray[2])(arg0);
  _require = tmp;
  items = [tmp];
  memo = stateFromStoresArray1.useMemo(
    () =>
      closure_0.map((getCanonicalGameId) => {
        let canonicalGameId;
        if (getCanonicalGameId != null) {
          canonicalGameId = getCanonicalGameId.getCanonicalGameId();
        }
        if (canonicalGameId == null) {
          canonicalGameId = null;
        }
        return canonicalGameId;
      }),
    items,
  );
  const items1 = [memo];
  const memo1 = stateFromStoresArray1.useMemo(() => memo.filter(GlobalUtils.isNotNullish), items1);
  const games = require("useGame").useGames(memo1);
  let obj = require("useGame");
  const items2 = [GameStore];
  const items3 = [memo];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items2,
    () =>
      memo.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = null;
        }
        return game;
      }),
    items3,
  );
  const obj2 = require("initialize");
  const items4 = [GameStore];
  const items5 = [memo];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
    items4,
    () =>
      memo.map((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = null == closure_1_4.getGame(item);
        }
        if (tmp) {
          tmp = !closure_1_4.hasNoData(item);
        }
        if (tmp) {
          tmp = !closure_1_4.didFetchingFail(item);
        }
        return tmp;
      }),
    items5,
  );
  const items6 = [tmp, memo, stateFromStoresArray, stateFromStoresArray1];
  return stateFromStoresArray1.useMemo(
    () =>
      closure_0.map((item, index) => {
        const obj = { gameId: memo[index], gameRecord: stateFromStoresArray[index], isLoading: null };
        let tmp = null == item;
        if (!tmp) {
          tmp = stateFromStoresArray1[index];
        }
        obj.isLoading = tmp;
        return obj;
      }),
    items6,
  );
}
export function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(7450)(stateFromStoresArray);
  _require = tmp;
  items = [tmp];
  memo = noop.useMemo(() => {
    const found = closure_0.filter(GlobalUtils.isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const games = require("useGame").useGames(memo);
  const obj = require("useGame");
  const items1 = [GameStore];
  return require("initialize").useStateFromStoresArray(items1, () => {
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
}
