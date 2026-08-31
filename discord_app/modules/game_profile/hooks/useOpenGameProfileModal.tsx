// === Module 8764: useOpenGameProfileModal ===

// Module 8764 (useOpenGameProfileModal)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  importDefault = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onOpened = obj.onOpened;
  closure_2 = undefined;
  let gameId;
  const tmp = importDefault(onOpened[0])(arg0);
  closure_2 = tmp;
  gameId = tmp.gameId;
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
        let obj = callback(onOpened[1]);
        obj = {};
        const merged = Object.assign(callback);
        obj.gameId = gameId;
        obj.gameProfileModalChecks = closure_2;
        obj.openGameProfileModal(obj);
        if (onOpened != null) {
          onOpened();
        }
      };
    }
  }
  return fn;
};