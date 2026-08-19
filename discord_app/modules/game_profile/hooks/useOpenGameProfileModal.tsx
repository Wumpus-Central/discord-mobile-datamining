// discord_app/modules/game_profile/hooks/useOpenGameProfileModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

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