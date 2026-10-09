// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import c from "../../../../_runtime/00576_c.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "useGame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../GameStore.tsx";

const require = globalThis.__r;
const useGetOrFetchApplicationsDefault = useGetOrFetchApplications;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetGameForAppId(arg0) {
      const cResult = c.c(6);
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(arg0);
      if (cResult[0] !== getOrFetchApplication) {
        let canonicalGameId;
        if (getOrFetchApplication != null) {
          canonicalGameId = getOrFetchApplication.getCanonicalGameId();
        }
        if (canonicalGameId == null) {
          canonicalGameId = null;
        }
        cResult[0] = getOrFetchApplication;
        cResult[1] = canonicalGameId;
        let tmp4 = canonicalGameId;
      } else {
        tmp4 = cResult[1];
      }
      const game = useGame.useGame(tmp4);
      let data = game.data;
      if (data == null) {
        data = null;
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === data) {
          if (cResult[4] === tmp9) {
            let tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
      const obj3 = {
        gameId: tmp4,
        gameRecord: data,
        isLoading: (null != arg0 && null == getOrFetchApplication) || game.isLoading,
      };
      cResult[2] = tmp4;
      cResult[3] = data;
      cResult[4] = (null != arg0 && null == getOrFetchApplication) || game.isLoading;
      cResult[5] = obj3;
      tmp10 = obj3;
      const tmpResult = useGame;
    }
  : function useGetGameForAppId(arg0) {
      const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(arg0);
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
      obj2.isLoading = (null != arg0 && null == getOrFetchApplication) || game.isLoading;
      return obj2;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default tmp2;
export const useGetGamesForAppIds = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetGamesForAppIds(arg0) {
      const cResult = require("c").c(6);
      const arr = useGetOrFetchApplicationsDefault(arg0);
      if (cResult[0] !== arr) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function o(getCanonicalGameId) {
            return getCanonicalGameId.getCanonicalGameId();
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const found = arr.filter(tmp(1388).isNotNullish);
        let mapped = found.map(tmp6);
        const found1 = mapped.filter(tmp(1388).isNotNullish);
        cResult[0] = arr;
        cResult[1] = found1;
      } else {
        _require = tmp4;
        const games = tmp(7002).useGames(tmp4);
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GameStore];
          cResult[3] = items;
          let tmp11 = items;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== cResult[1]) {
          const fn2 = function p() {
            const mapped = closure_0.map((item) => game.getGame(item));
            return mapped.filter(GlobalUtils.isNotNullish);
          };
          cResult[4] = tmp4;
          cResult[5] = fn2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[5];
        }
        const tmpResult = tmp(7002);
        return tmp(504).useStateFromStoresArray(tmp11, tmp13);
      }
      const obj = require("c");
    }
  : function useGetGamesForAppIds(arg0) {
      const tmp = memo(6854)(arg0);
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
