// discord_app/modules/games/hooks/useGetGameForAppId.tsx
import react2 from "../../../../_runtime/00576_react.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "useGame.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../GameStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useGetOrFetchApplicationsDefault = useGetOrFetchApplications;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(6);
      const obj2 = useGetOrFetchApplications;
      const getOrFetchApplication = obj2.useGetOrFetchApplication(arg0);
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
        tmp4 = canonicalGameId;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useGame;
      const game = tmpResult.useGame(tmp4);
      let data = game.data;
      const isLoading = game.isLoading;
      if (data == null) {
        data = null;
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === data) {
          let tmp10;
          if (cResult[4] === ((null != arg0 && null == getOrFetchApplication) || isLoading)) {
            tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
      const obj3 = {
        gameId: tmp4,
        gameRecord: data,
        isLoading: (null != arg0 && null == getOrFetchApplication) || isLoading,
      };
      cResult[2] = tmp4;
      cResult[3] = data;
      cResult[4] = (null != arg0 && null == getOrFetchApplication) || isLoading;
      cResult[5] = obj3;
      tmp10 = obj3;
    }
  : (arg0) => {
      let isLoading;
      const obj = useGetOrFetchApplications;
      const getOrFetchApplication = obj.useGetOrFetchApplication(arg0);
      let canonicalGameId;
      if (getOrFetchApplication != null) {
        canonicalGameId = getOrFetchApplication.getCanonicalGameId();
      }
      if (canonicalGameId == null) {
        canonicalGameId = null;
      }
      const tmpResult = useGame;
      const game = tmpResult.useGame(canonicalGameId);
      let data = game.data;
      const obj2 = {
        gameId: canonicalGameId,
        gameRecord: data,
        isLoading: (null != arg0 && null == getOrFetchApplication) || isLoading,
      };
      isLoading = game.isLoading;
      if (data == null) {
        data = null;
      }
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp11;
      let tmp4;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(6);
      const arr = useGetOrFetchApplicationsDefault(arg0);
      if (cResult[0] !== arr) {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(getCanonicalGameId) {
            return getCanonicalGameId.getCanonicalGameId();
          };
          cResult[2] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const found = arr.filter(tmp(1375).isNotNullish);
        let mapped = found.map(tmp6);
        const found1 = mapped.filter(tmp(1375).isNotNullish);
        cResult[0] = arr;
        cResult[1] = found1;
        tmp4 = found1;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      const tmpResult = require("useGame");
      const games = tmpResult.useGames(tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameStore];
        cResult[3] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp4) {
        const fn2 = function f() {
          let game;
          const mapped = closure_0.map((item) => game.getGame(item));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        cResult[4] = tmp4;
        cResult[5] = fn2;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult2 = require("get initialized");
      return tmpResult2.useStateFromStoresArray(tmp9, tmp11);
    }
  : (arg0) => {
      let closure_0;
      let memo;
      const tmp = memo(6663)(arg0);
      _require = tmp;
      const items = [tmp];
      memo = react.useMemo(() => {
        const found = closure_0.filter(GlobalUtils.isNotNullish);
        const mapped = found.map((getCanonicalGameId) => getCanonicalGameId.getCanonicalGameId());
        return mapped.filter(GlobalUtils.isNotNullish);
      }, items);
      const obj = require("useGame");
      const games = obj.useGames(memo);
      const items1 = [GameStore];
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(items1, () => {
        let game;
        const mapped = memo.map((item) => game.getGame(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      });
    };
const result = size.fileFinishedImporting("modules/games/hooks/useGetGameForAppId.tsx");

export default tmp2;
export const useGetGamesForAppIds = tmp3;
