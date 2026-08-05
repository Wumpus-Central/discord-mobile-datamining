import { GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH } from "GameAutocompleteUtils.tsx";
import { fetchStore } from "useGameAutocomplete.tsx";
// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import set from "set";
import importDefaultResult from "debounce";

const require = arg1;
const obj = { leading: true, maxWait: null };
obj[1] = require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS;
let closure_3 = require("debounce")((arg0) => {
  const useGameAutocomplete = fetchStore /* fetchStore */.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = require("fetchStore").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};