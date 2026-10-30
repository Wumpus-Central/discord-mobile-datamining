// discord_app/modules/game_profile/GameProfileCommunitiesLocaleFilterStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const set = new Set();
const obj = module_560.create((arg0) => {
  excludedLocales = arg0;
  return {
    gameId: null,
    excludedLocales,
    toggleLocale(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0((gameId) => {
        gameId = closure_0;
        excludedLocales = new Set(gameId.gameId === closure_0 ? gameId.excludedLocales : closure_0);
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
export function useGameProfileCommunitiesLocaleFilterExclusions(arg0) {
  closure_0 = arg0;
  return obj((gameId) => gameId.gameId === closure_0 ? gameId.excludedLocales : set);
}