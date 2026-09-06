// === Module 9181: useGetGameForAppId ===

// Module 9181 (useGetGameForAppId)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7168 */;
import useGame from "useGame" /* 7309 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default function useGetGameForAppId(applicationId) {
  let obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let canonicalGameId;
  if (getOrFetchApplication != null) {
    canonicalGameId = getOrFetchApplication.getCanonicalGameId();
  }
  if (canonicalGameId == null) {
    canonicalGameId = null;
  }
  const game = useGame.useGame(canonicalGameId);
  let data = game.data;
  obj = { gameId: canonicalGameId, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj.gameRecord = data;
  obj.isLoading = null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};
export const useGetGamesForAppIds = function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(7168)(stateFromStoresArray);
  _require = tmp;
  const items = [tmp];
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
};