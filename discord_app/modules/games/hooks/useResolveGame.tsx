// === Module 8805: useResolveGame ===

// Module 8805 (useResolveGame)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7275 */;
import useGame from "useGame" /* 7416 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp3);
  const items = [gameId, getOrFetchApplication];
  const memo = noop.useMemo(() => {
    let tmp = gameId;
    if (null == gameId) {
      let canonicalGameId = null;
      if (null != getOrFetchApplication) {
        canonicalGameId = getOrFetchApplication.getCanonicalGameId();
      }
      tmp = canonicalGameId;
    }
    return tmp;
  }, items);
  const game = useGame.useGame(memo);
  let data = game.data;
  const obj2 = { gameId: memo, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj2.gameRecord = data;
  obj2.isLoading = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj2;
};