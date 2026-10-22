// === Module 9480: GameProfileCommunitiesLocaleFilterStore ===

// Module 9480 (GameProfileCommunitiesLocaleFilterStore)
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const set = new Set();
let obj = module_570.create((arg0) => {
  closure_0 = arg0;
  return {
    gameId: null,
    excludedLocales: set,
    toggleLocale(dependencyMap, arg1) {
      closure_0 = dependencyMap;
      closure_1 = arg1;
      closure_0((gameId) => {
        gameId = closure_0;
        const excludedLocales = new Set(gameId.gameId === closure_0 ? gameId.excludedLocales : set);
        if (excludedLocales.has(closure_1)) {
          excludedLocales.delete(closure_1);
        } else {
          excludedLocales.add(closure_1);
        }
        return { gameId, excludedLocales };
      });
    }
  };
});
const result = size.fileFinishedImporting("modules/game_profile/GameProfileCommunitiesLocaleFilterStore.tsx");

export default obj;
export const useGameProfileCommunitiesLocaleFilterExclusions = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  _require = arg0;
  obj = require("c");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function u(gameId) {
      return gameId.gameId === closure_0 ? gameId.excludedLocales : set;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : (function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  closure_0 = arg0;
  return obj((gameId) => gameId.gameId === closure_0 ? gameId.excludedLocales : set);
});