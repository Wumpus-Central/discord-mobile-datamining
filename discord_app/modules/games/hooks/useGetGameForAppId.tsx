// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import importDefaultResult1 from "useGame.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleLoadMessages from "../GameStore.tsx";
import { importDefaultResult1 } from "useGame.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

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
  const game = importDefaultResult1.useGame(canonicalGameId);
  let data = game.data;
  obj = { gameId: canonicalGameId, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj[1] = data;
  obj[2] = null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};
export const useGetGamesForAppIds = function useGetGamesForAppIds(stateFromStoresArray) {
  const tmp = memo(7145)(stateFromStoresArray);
  const _require = tmp;
  const items = [tmp];
  memo = React.useMemo(() => {
    const found = lib.filter(lib(dependencyMap[4]).isNotNullish);
    const mapped = found.map((item, index) => item.getCanonicalGameId());
    return mapped.filter(lib(dependencyMap[4]).isNotNullish);
  }, items);
  const games = require("useGame.tsx").useGames(memo);
  const obj = importDefaultResult1;
  const items1 = [closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items1, () => {
    const mapped = memo.map((item, index) => game.getGame(item));
    return mapped.filter(lib(dependencyMap[4]).isNotNullish);
  });
};