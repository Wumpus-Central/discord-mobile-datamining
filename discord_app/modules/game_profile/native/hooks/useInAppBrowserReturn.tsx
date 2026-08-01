// === Module 8498: useInAppBrowserReturn ===

// Module 8498 (useInAppBrowserReturn)
import noop from "noop";
import getSimilarGames from "getSimilarGames";

const require = arg1;
let result = require("PlatformTypes").fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = React.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        let closure_1 = tmp(tmp2[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              let c0 = true;
              let obj = scrollOffsetRef(outer2_2[4]);
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
              const pendingReturn = outer2_4.getPendingReturn();
              if (null != pendingReturn) {
                obj = { gameId: null, source: null, initialScrollOffset: null };
                obj[0] = pendingReturn.gameId;
                obj[1] = gameId(outer2_2[5]).GameProfileSources.InAppBrowserReturn;
                obj[2] = pendingReturn.initialScrollOffset;
                scrollOffsetRef(outer2_2[4]).returnToGameProfile(obj);
                const obj3 = scrollOffsetRef(outer2_2[4]);
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
      obj = gameId(outer1_2[2]);
      tmp = gameId;
      tmp2 = outer1_2;
    }
  }, items);
};