// === Module 8778: useInAppBrowserReturn ===

// Module 8778 (useInAppBrowserReturn)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8771 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8773 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = gameId(dependencyMap[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              c0 = true;
              let obj = { gameId, initialScrollOffset: scrollOffsetRef.current };
              const result = obj.setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              closure_1();
              c0 = false;
              const pendingReturn = GameProfileStore.getPendingReturn();
              if (null != pendingReturn) {
                obj = { gameId: pendingReturn.gameId, source: GameProfileAnalyticUtils.GameProfileSources.InAppBrowserReturn, initialScrollOffset: pendingReturn.initialScrollOffset };
                GameProfileActionCreatorsDefault.returnToGameProfile(obj);
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
      obj = gameId(dependencyMap[2]);
    }
  }, items);
};