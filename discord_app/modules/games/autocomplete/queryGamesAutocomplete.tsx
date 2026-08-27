// === Module 9850: queryGamesAutocomplete ===

// Module 9850 (queryGamesAutocomplete)
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH" /* 5007 */;
import fetchStore from "fetchStore" /* 9851 */;
import closure_2 from "set" /* 5006 */;
import importDefaultResult from "debounce" /* 636 */;

require = arg1;
let closure_3 = importDefaultResult((arg0) => {
  const useGameAutocomplete = fetchStore.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const obj = { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let result = require("set").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

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