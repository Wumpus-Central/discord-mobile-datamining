// discord_app/modules/game_profile/native/hooks/useInAppBrowserReturn.tsx
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../GameProfileActionCreators.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GameProfileStore from "../../GameProfileStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, gameId;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (gameId) => {
      let obj = gameId(576);
      const cResult = obj.c(4);
      gameId = gameId.gameId;
      const scrollY = gameId.scrollY;
      if (cResult[0] === gameId) {
        let tmp2;
        let tmp3;
        if (cResult[1] === scrollY) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
      const fn = function s() {
        if (null != c0) {
          let obj = gameId(dependencyMap[4]);
          if (obj.isIOS()) {
            c0 = false;
            const tmpResult = gameId(dependencyMap[5]);
            let closure_1 = tmpResult.subscribeToIsInAppBrowserOpen((arg0, arg1) => {
              const tmp = arg1;
              if (!tmp) {
                if (arg0) {
                  c0 = true;
                  const obj = { gameId, initialScrollOffset: scrollY.get() };
                  const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                  const result = setGameProfilePendingReturn(obj);
                }
              }
              if (arg1) {
                if (!arg0) {
                  closure_1();
                  c0 = false;
                  const pendingReturn = GameProfileStore.getPendingReturn();
                  if (null != pendingReturn) {
                    const obj2 = {
                      gameId: pendingReturn.gameId,
                      source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn,
                      initialScrollOffset: pendingReturn.initialScrollOffset,
                    };
                    const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
                    GameProfileActionCreatorsDefault;
                    returnToGameProfile(obj2);
                  }
                }
              }
            });
            return () => {
              if (!c0) {
                closure_1();
              }
            };
          }
        }
      };
      const items = [gameId, scrollY];
      cResult[0] = gameId;
      cResult[1] = scrollY;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (gameId) => {
      gameId = gameId.gameId;
      const scrollY = gameId.scrollY;
      const items = [gameId, scrollY];
      const effect = react.useEffect(() => {
        if (null != c0) {
          let obj = gameId(dependencyMap[4]);
          if (obj.isIOS()) {
            c0 = false;
            const tmpResult = gameId(dependencyMap[5]);
            let closure_1 = tmpResult.subscribeToIsInAppBrowserOpen((arg0, arg1) => {
              const tmp = arg1;
              if (!tmp) {
                if (arg0) {
                  c0 = true;
                  const obj = { gameId, initialScrollOffset: scrollY.get() };
                  const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
                  const result = setGameProfilePendingReturn(obj);
                }
              }
              if (arg1) {
                if (!arg0) {
                  closure_1();
                  c0 = false;
                  const pendingReturn = GameProfileStore.getPendingReturn();
                  if (null != pendingReturn) {
                    const obj2 = {
                      gameId: pendingReturn.gameId,
                      source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn,
                      initialScrollOffset: pendingReturn.initialScrollOffset,
                    };
                    const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
                    GameProfileActionCreatorsDefault;
                    returnToGameProfile(obj2);
                  }
                }
              }
            });
            return () => {
              if (!c0) {
                closure_1();
              }
            };
          }
        }
      }, items);
    };
let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default tmp2;
