// === Module 9519: useOpenGameProfileModal ===

// Module 9519 (useOpenGameProfileModal)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/game_profile/hooks/useOpenGameProfileModal.tsx");

export default function useOpenGameProfileModal(arg0) {
  importDefault = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onOpened = obj.onOpened;
  const tmp = importDefault(onOpened[0])(arg0);
  closure_2 = tmp;
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
        callback(onOpened[1]);
        const obj = {};
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