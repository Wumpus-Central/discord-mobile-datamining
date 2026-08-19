// discord_app/modules/game_profile/native/hooks/useInAppBrowserReturn.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import getSimilarGames from "../../GameProfileStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/game_profile/native/hooks/useInAppBrowserReturn.tsx");

export default function useInAppBrowserReturn(gameId) {
  gameId = gameId.gameId;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const items = [gameId, scrollOffsetRef];
  const effect = React.useEffect(() => {
    if (null != c0) {
      if (obj.isIOS()) {
        c0 = false;
        closure_1 = gameId(dependencyMap[3]).subscribeToIsInAppBrowserOpen((arg0, arg1) => {
          if (!arg1) {
            if (arg0) {
              c0 = true;
              scrollOffsetRef(dependencyMap[4]);
              let obj = { gameId: null, initialScrollOffset: null };
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
                obj[1] = gameId(dependencyMap[5]).GameProfileSources.InAppBrowserReturn;
                obj[2] = pendingReturn.initialScrollOffset;
                scrollOffsetRef(dependencyMap[4]).returnToGameProfile(obj);
                const obj3 = scrollOffsetRef(dependencyMap[4]);
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
      obj = gameId(dependencyMap[2]);
    }
  }, items);
};