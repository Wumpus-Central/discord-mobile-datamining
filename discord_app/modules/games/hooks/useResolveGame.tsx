// === Module 8489: useResolveGame ===

// Module 8489 (useResolveGame)
import noop from "noop";

const require = arg1;
const result = require("importDefaultResult1").fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default function useResolveGame(arg0) {
  let applicationId;
  let gameId;
  ({ applicationId, gameId } = arg0);
  let getOrFetchApplication;
  let obj = gameId(getOrFetchApplication[1]);
  let tmp3;
  if (null == gameId) {
    tmp3 = applicationId;
  }
  getOrFetchApplication = obj.useGetOrFetchApplication(tmp3);
  const items = [gameId, getOrFetchApplication];
  const memo = React.useMemo(() => {
    let tmp = gameId;
    if (null == gameId) {
      let canonicalGameId = null;
      if (null != getOrFetchApplication) {
        canonicalGameId = obj.getCanonicalGameId();
      }
      tmp = canonicalGameId;
      obj = getOrFetchApplication;
    }
    return tmp;
  }, items);
  const game = gameId(getOrFetchApplication[2]).useGame(memo);
  let data = game.data;
  obj = { gameId: memo, gameRecord: null, isLoading: null };
  if (data == null) {
    data = null;
  }
  obj[1] = data;
  obj[2] = null == gameId && null != applicationId && null == getOrFetchApplication || game.isLoading;
  return obj;
};