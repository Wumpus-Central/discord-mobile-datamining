// === Module 9491: queryGamesAutocomplete ===

// Module 9491 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5606 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 8558 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5604 */;
import debounce from "debounce" /* 551 */;

require = fn;
let closure_3 = debounce((arg0) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, fn(8558).GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: fn(8558).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
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