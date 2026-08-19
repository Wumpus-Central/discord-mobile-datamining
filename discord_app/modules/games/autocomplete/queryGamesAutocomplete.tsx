// === Module 7599: queryGamesAutocomplete ===

// Module 7599 (queryGamesAutocomplete)
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH" /* 6900 */;
import fetchStore from "fetchStore" /* 7600 */;
import set from "set" /* 6899 */;
import importDefaultResult from "debounce" /* 636 */;

require = fn;
let closure_3 = importDefaultResult((arg0) => {
  const useGameAutocomplete = fetchStore.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const obj = { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let result = require("obj132").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};