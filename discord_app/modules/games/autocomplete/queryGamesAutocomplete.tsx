// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import useGameAutocomplete2 from "useGameAutocomplete.tsx";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";
import debounce from "../../../../_runtime/00551_debounce.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { leading: true, maxWait: useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
const GAME_AUTOCOMPLETE_DEBOUNCE_MS = useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MS;
let closure_3 = debounce(
  (arg0) => {
    const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
    const items = [arg0];
    const many = useGameAutocomplete.fetchMany(items);
  },
  GAME_AUTOCOMPLETE_DEBOUNCE_MS,
  obj,
);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    closure_3(result);
    let closestResults = GameAutocompleteStore.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
