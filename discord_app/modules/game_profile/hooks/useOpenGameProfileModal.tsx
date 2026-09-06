// === Module 8675: useOpenGameProfileModal ===

// Module 8675 (useOpenGameProfileModal)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  importDefault = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onOpened = obj.onOpened;
  const tmp = require("useShouldOpenGameProfileModal")(arg0);
  const gameProfileModalChecks = tmp;
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
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.gameId = gameId;
        obj.gameProfileModalChecks = gameProfileModalChecks;
        obj.openGameProfileModal(obj);
        if (onOpened != null) {
          onOpened();
        }
      };
    }
  }
  return fn;
};