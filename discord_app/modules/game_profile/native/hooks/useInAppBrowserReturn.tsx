// === Module 8754: useInAppBrowserReturn ===

// Module 8754 (useInAppBrowserReturn)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getSimilarGames" /* 8749 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = React.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = tmp(tmp2[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              c0 = true;
              let obj = scrollOffsetRef(closure_2_2[4]);
              obj = { gameId: null, initialScrollOffset: null };
              obj[0] = c0;
              obj[1] = ref.current;
              const result = obj.setGameProfilePendingReturn(obj);
            }
          }
          if (arg1) {
            if (!arg0) {
              ref();
              c0 = false;
              const pendingReturn = closure_2_4.getPendingReturn();
              if (null != pendingReturn) {
                obj = { gameId: null, source: null, initialScrollOffset: null };
                obj[0] = pendingReturn.gameId;
                obj[1] = gameId(closure_2_2[5]).GameProfileSources.InAppBrowserReturn;
                obj[2] = pendingReturn.initialScrollOffset;
                scrollOffsetRef(closure_2_2[4]).returnToGameProfile(obj);
                const obj3 = scrollOffsetRef(closure_2_2[4]);
              }
            }
          }
        });
        return () => {
          if (!c0) {
            ref();
          }
        };
      }
      obj = gameId(closure_1_2[2]);
      tmp = gameId;
      tmp2 = closure_1_2;
    }
  }, items);
};