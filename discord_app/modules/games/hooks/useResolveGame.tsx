// discord_app/modules/games/hooks/useResolveGame.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useGetOrFetchApplications from "../../applications/useGetOrFetchApplications.tsx";
import useGame from "useGame.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationId;
      let data;
      let gameId;
      let isLoading;
      const obj = react2;
      const cResult = obj.c(6);
      ({ applicationId, gameId } = arg0);
      let tmp5;
      const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
      useGetOrFetchApplications;
      if (null == gameId) {
        tmp5 = applicationId;
      }
      const getOrFetchApplication = useGetOrFetchApplication(tmp5);
      let tmp6 = gameId;
      if (null == gameId) {
        tmp6 = null;
        if (null != getOrFetchApplication) {
          let tmp7;
          if (cResult[0] !== getOrFetchApplication) {
            const canonicalGameId = getOrFetchApplication.getCanonicalGameId();
            cResult[0] = getOrFetchApplication;
            cResult[1] = canonicalGameId;
            tmp7 = canonicalGameId;
          } else {
            tmp7 = cResult[1];
          }
          tmp6 = tmp7;
        }
      }
      const tmpResult = useGame;
      const game = tmpResult.useGame(tmp6);
      ({ data, isLoading } = game);
      if (data == null) {
        data = null;
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === data) {
          let tmp11;
          if (
            cResult[4] === ((null == gameId && null != applicationId && null == getOrFetchApplication) || isLoading)
          ) {
            tmp11 = cResult[5];
          }
          return tmp11;
        }
      }
      const obj2 = {
        gameId: tmp6,
        gameRecord: data,
        isLoading: (null == gameId && null != applicationId && null == getOrFetchApplication) || isLoading,
      };
      cResult[2] = tmp6;
      cResult[3] = data;
      cResult[4] = (null == gameId && null != applicationId && null == getOrFetchApplication) || isLoading;
      cResult[5] = obj2;
      tmp11 = obj2;
    }
  : (arg0) => {
      let applicationId;
      let gameId;
      let isLoading;
      ({ applicationId, gameId } = arg0);
      let getOrFetchApplication;
      let tmp4;
      const useGetOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication;
      useGetOrFetchApplications;
      if (null == gameId) {
        tmp4 = applicationId;
      }
      getOrFetchApplication = useGetOrFetchApplication(tmp4);
      const items = [gameId, getOrFetchApplication];
      const memo = react.useMemo(() => {
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
      const tmpResult = useGame;
      const game = tmpResult.useGame(memo);
      let data = game.data;
      const obj = {
        gameId: memo,
        gameRecord: data,
        isLoading: (null == gameId && null != applicationId && null == getOrFetchApplication) || isLoading,
      };
      isLoading = game.isLoading;
      if (data == null) {
        data = null;
      }
      return obj;
    };
const result = size.fileFinishedImporting("modules/games/hooks/useResolveGame.tsx");

export default tmp2;
