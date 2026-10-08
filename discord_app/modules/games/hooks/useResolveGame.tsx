// === Module 8855: useResolveGame ===

// Module 8855 (useResolveGame)
import c from "c" /* 576 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6847 */;
import useGame from "useGame" /* 6995 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useResolveGame(arg0) {
  const cResult = c.c(6);
  ({ applicationId, gameId } = arg0);
  let tmp4;
  if (null == gameId) {
    tmp4 = applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp4);
  let tmp5 = gameId;
  if (null == gameId) {
    tmp5 = null;
    if (null != getOrFetchApplication) {
      if (cResult[0] !== getOrFetchApplication) {
        const canonicalGameId = getOrFetchApplication.getCanonicalGameId();
        cResult[0] = getOrFetchApplication;
        cResult[1] = canonicalGameId;
      }
    }
  }
  const game = useGame.useGame(tmp5);
  ({ data, isLoading } = game);
  if (data == null) {
    data = null;
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === data) {
      if (cResult[4] === tmp10) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
  }
  const obj3 = { gameId: tmp5, gameRecord: data, isLoading: null == gameId && null != applicationId && null == getOrFetchApplication || isLoading };
  cResult[2] = tmp5;
  cResult[3] = data;
  cResult[4] = null == gameId && null != applicationId && null == getOrFetchApplication || isLoading;
  cResult[5] = obj3;
  tmp11 = obj3;
  const tmpResult = useGame;
}) : (function useResolveGame(arg0) {
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
});