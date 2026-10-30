// discord_app/modules/games/utils/getApplicationIdsForGame.tsx
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GameStore from "../GameStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default function getApplicationIdsForGame(arg0) {
  const set = new Set();
  if (null != arg0) {
    set.add(arg0);
    const game = GameStore.getGame(arg0);
    if (game != null) {
      const linkedApplications = game.linkedApplications;
      if (linkedApplications != null) {
        const item = linkedApplications.forEach((id) => set.add(id.id));
      }
    }
    const application = ApplicationStore.getApplication(arg0);
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
export function useApplicationIdsForGame(gameId) {
  _require = gameId;
  const items = [GameStore, ApplicationStore];
  const items1 = [gameId];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
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
    },
    items1,
  );
}
