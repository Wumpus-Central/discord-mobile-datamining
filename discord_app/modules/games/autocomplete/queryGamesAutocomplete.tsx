// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import useGameAutocomplete2 from "useGameAutocomplete.tsx";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";
import debounce from "../../../../_runtime/00551_debounce.js";

require = fn;
let closure_3 = debounce(
  (arg0) => {
    const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
    const items = [arg0];
    const many = useGameAutocomplete.fetchMany(items);
  },
  fn(8899).GAME_AUTOCOMPLETE_DEBOUNCE_MS,
  { leading: true, maxWait: fn(8899).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
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
