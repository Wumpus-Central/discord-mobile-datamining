// === Module 9043: getApplicationIdsForGame ===

// Module 9043 (getApplicationIdsForGame)
import ApplicationStore from "ApplicationStore" /* 5118 */;
import GameStore from "GameStore" /* 2007 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function getApplicationIdsForGame(gameId) {
  set = new Set();
  if (null != gameId) {
    set.add(gameId);
    const game = GameStore.getGame(gameId);
    if (game != null) {
      const linkedApplications = game.linkedApplications;
      if (linkedApplications != null) {
        const item = linkedApplications.forEach((id) => set.add(id.id));
      }
    }
    const application = ApplicationStore.getApplication(gameId);
    if (application != null) {
      const linkedGames = application.linkedGames;
      if (linkedGames != null) {
        const item1 = linkedGames.forEach((id) => {
          set.add(id.id);
          game = game.getGame(id.id);
          if (game != null) {
            const linkedApplications = game.linkedApplications;
            if (linkedApplications != null) {
              const item = linkedApplications.forEach((id) => set.add(id.id));
            }
          }
        });
      }
    }
  }
  return set;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore, ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const _Array = Array;
      set = new Set();
      if (null != closure_0) {
        set.add(closure_0);
        const game = GameStore.getGame(closure_0);
        if (game != null) {
          const linkedApplications = game.linkedApplications;
          if (linkedApplications != null) {
            const item = linkedApplications.forEach((id) => set.add(id.id));
          }
        }
        const application = ApplicationStore.getApplication(closure_0);
        if (application != null) {
          const linkedGames = application.linkedGames;
          if (linkedGames != null) {
            const item1 = linkedGames.forEach((id) => {
              set.add(id.id);
              game = game.getGame(id.id);
              if (game != null) {
                const linkedApplications = game.linkedApplications;
                if (linkedApplications != null) {
                  const item = linkedApplications.forEach((id) => set.add(id.id));
                }
              }
            });
          }
        }
      }
      return from(set);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GameStore, ApplicationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const _Array = Array;
    set = new Set();
    if (null != closure_0) {
      set.add(closure_0);
      let game = GameStore.getGame(closure_0);
      if (game != null) {
        let linkedApplications = game.linkedApplications;
        if (linkedApplications != null) {
          let item = linkedApplications.forEach((id) => set.add(id.id));
        }
      }
      const application = ApplicationStore.getApplication(closure_0);
      if (application != null) {
        const linkedGames = application.linkedGames;
        if (linkedGames != null) {
          const item1 = linkedGames.forEach((id) => {
            set.add(id.id);
            game = game.getGame(id.id);
            if (game != null) {
              const linkedApplications = game.linkedApplications;
              if (linkedApplications != null) {
                const item = linkedApplications.forEach((id) => set.add(id.id));
              }
            }
          });
        }
      }
    }
    return from(set);
  }, items1);
});
const result = size.fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default getApplicationIdsForGame;
export const useApplicationIdsForGame = tmp2;