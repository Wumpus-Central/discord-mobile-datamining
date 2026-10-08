// === Module 10609: getApplicationIdsForGame ===

// Module 10609 (getApplicationIdsForGame)
import ApplicationStore from "ApplicationStore" /* 5436 */;
import GameStore from "GameStore" /* 2019 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function getApplicationIdsForGame(gameId) {
  const set = new Set();
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default getApplicationIdsForGame;
export const useApplicationIdsForGame = ReactCompilerGating.isReactCompilerEnabled() ? (function useApplicationIdsForGame(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore, ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const set = new Set();
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
      return Array.from(set);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useApplicationIdsForGame(arg0) {
  _require = arg0;
  const items = [GameStore, ApplicationStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const set = new Set();
    if (null != closure_0) {
      set.add(closure_0);
      game = GameStore.getGame(closure_0);
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
    return Array.from(set);
  }, items1);
});