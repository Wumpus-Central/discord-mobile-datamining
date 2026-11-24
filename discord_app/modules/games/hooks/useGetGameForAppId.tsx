// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "useGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
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
  _require = arg0;
  let tmp = require("useGetOrFetchApplications")(arg0);
  importDefault = tmp;
  items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () =>
      closure_0.map((item) => {
        const isHydratedResult = hydrated.isHydrated(item);
        let tmp2 = !isHydratedResult;
        if (!isHydratedResult) {
          tmp2 = !hydrated.didFetchingApplicationFail(item);
        }
        return tmp2;
      }),
    items1,
  );
  const items2 = [tmp];
  memo = memo.useMemo(
    () =>
      closure_1.map((getCanonicalGameId) => {
        let canonicalGameId;
        if (getCanonicalGameId != null) {
          canonicalGameId = getCanonicalGameId.getCanonicalGameId();
        }
        if (canonicalGameId == null) {
          canonicalGameId = null;
        }
        return canonicalGameId;
      }),
    items2,
  );
  const items3 = [memo];
  const memo1 = memo.useMemo(() => memo.filter(GlobalUtils.isNotNullish), items3);
  let obj = require("initialize");
  const games = require("useGame").useGames(memo1);
  const obj2 = require("useGame");
  const items4 = [stateFromStoresArray2];
  const items5 = [memo];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
    items4,
    () =>
      memo.map((item) => {
        game = game.getGame(item);
        if (game == null) {
          game = null;
        }
        return game;
      }),
    items5,
  );
  const obj3 = require("initialize");
  const items6 = [stateFromStoresArray2];
  const items7 = [memo];
  stateFromStoresArray2 = require("initialize").useStateFromStoresArray(
    items6,
    () =>
      memo.map((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = null == stateFromStoresArray2.getGame(item);
        }
        if (tmp) {
          tmp = !stateFromStoresArray2.hasNoData(item);
        }
        if (tmp) {
          tmp = !stateFromStoresArray2.didFetchingFail(item);
        }
        return tmp;
      }),
    items7,
  );
  const items8 = [memo, stateFromStoresArray1, stateFromStoresArray, stateFromStoresArray2];
  return memo.useMemo(
    () =>
      memo.map((gameId, index) => {
        const obj = { gameId, gameRecord: stateFromStoresArray1[index], isLoading: null };
        let tmp = stateFromStoresArray[index];
        if (!tmp) {
          tmp = stateFromStoresArray2[index];
        }
        obj.isLoading = tmp;
        return obj;
      }),
    items8,
  );
}
export function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(7389)(stateFromStoresArray);
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
