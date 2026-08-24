// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import importDefaultResult1 from "useGame.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../GameStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { importDefaultResult1 } from "useGame.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

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
    const found = lib.filter(lib(closure_1_2[4]).isNotNullish);
    const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
    return mapped.filter(lib(closure_1_2[4]).isNotNullish);
  }, items);
  const games = _importDefaultResult1.useGames(memo);
  const obj = _importDefaultResult1;
  const items1 = [closure_4];
  return _initialize.useStateFromStoresArray(items1, () => {
    const mapped = memo.map((closure_0) => game.getGame(closure_0));
    return mapped.filter(lib(closure_1_2[4]).isNotNullish);
  });
};