// discord_app/modules/games/utils/getApplicationIdsForGame.tsx
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GameStore from "../GameStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/games/utils/getApplicationIdsForGame.tsx");

export default function getApplicationIdsForGame(gameId) {
  const set = new Set();
  if (null != gameId) {
    set.add(gameId);
    let game = GameStore.getGame(gameId);
    if (game != null) {
      let linkedApplications = game.linkedApplications;
      if (linkedApplications != null) {
        let item = linkedApplications.forEach((id) => set.add(id.id));
      }
    }
    const application = set.getApplication(gameId);
    if (application != null) {
      const linkedGames = application.linkedGames;
      if (linkedGames != null) {
        const item1 = linkedGames.forEach((id) => {
          set.add(id.id);
          const game = GameStore.getGame(id.id);
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
