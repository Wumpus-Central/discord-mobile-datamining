// discord_app/modules/game_profile/hooks/useOpenGameProfileModal.tsx
import GameProfileActionCreatorsDefault from "../GameProfileActionCreators.native.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOpenGameProfileModal(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        let tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const onOpened = tmp3.onOpened;
      const tmp4 = onOpened(8852)(arg0);
      dependencyMap = tmp4;
      const gameId = tmp4.gameId;
      if (tmp4.shouldOpenGameProfile) {
        if (null != gameId) {
          if (cResult[2] === gameId) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === onOpened) {
                if (cResult[5] === arg0) {
                  let tmp6 = cResult[6];
                }
                return tmp6;
              }
            }
          }
          const fn = function t(stopPropagation) {
            if (stopPropagation != null) {
              stopPropagation.stopPropagation();
            }
            if (stopPropagation != null) {
              stopPropagation.preventDefault();
            }
            const obj2 = {};
            const merged = Object.assign(closure_0);
            obj2.gameId = gameId;
            obj2.gameProfileModalChecks = gameProfileModalChecks;
            GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
            if (onOpened != null) {
              onOpened();
            }
          };
          cResult[2] = gameId;
          cResult[3] = tmp4;
          cResult[4] = onOpened;
          cResult[5] = arg0;
          cResult[6] = fn;
          tmp6 = fn;
        }
      }
    }
  : function useOpenGameProfileModal(arg0) {
      closure_0 = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      const onOpened = obj.onOpened;
      const tmp = onOpened(8852)(arg0);
      dependencyMap = tmp;
      const gameId = tmp.gameId;
      let fn;
      if (tmp.shouldOpenGameProfile) {
        if (null != gameId) {
          fn = (stopPropagation) => {
            if (stopPropagation != null) {
              stopPropagation.stopPropagation();
            }
            if (stopPropagation != null) {
              stopPropagation.preventDefault();
            }
            const obj2 = {};
            const merged = Object.assign(closure_0);
            obj2.gameId = gameId;
            obj2.gameProfileModalChecks = gameProfileModalChecks;
            GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
            if (onOpened != null) {
              onOpened();
            }
          };
        }
      }
      return fn;
    };
