// discord_app/modules/game_profile/hooks/useOpenGameProfileModal.tsx
import GameProfileActionCreatorsDefault from "../GameProfileActionCreators.native.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let gameProfileModalChecks;
      let tmp3;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp3 = obj2;
      } else {
        tmp3 = cResult[1];
      }
      const onOpened = tmp3.onOpened;
      const tmp4 = onOpened(8321)(arg0);
      dependencyMap = tmp4;
      const gameId = tmp4.gameId;
      if (tmp4.shouldOpenGameProfile) {
        if (null != gameId) {
          if (cResult[2] === gameId) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === onOpened) {
                let tmp6;
                if (cResult[5] === arg0) {
                  tmp6 = cResult[6];
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
            const obj = { gameId, gameProfileModalChecks };
            const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
            GameProfileActionCreatorsDefault;
            const merged = Object.assign(closure_0);
            openGameProfileModal(obj);
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
  : (arg0) => {
      let gameProfileModalChecks;
      let closure_0 = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      const onOpened = obj.onOpened;
      const tmp = onOpened(8321)(arg0);
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
            const obj = { gameId, gameProfileModalChecks };
            const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
            GameProfileActionCreatorsDefault;
            const merged = Object.assign(closure_0);
            openGameProfileModal(obj);
            if (onOpened != null) {
              onOpened();
            }
          };
        }
      }
      return fn;
    };
const result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default tmp2;
