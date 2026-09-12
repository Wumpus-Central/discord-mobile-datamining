// === Module 8802: useResolveGame ===

// Module 8802 (useResolveGame)
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7271 */;
import useGame from "useGame" /* 7412 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let obj = useGetOrFetchApplications;
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
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
  obj = { gameId: memo, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj.gameRecord = data;
  obj.isLoading = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};