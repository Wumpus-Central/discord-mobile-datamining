// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GameAutocompleteUtils.tsx";
import fetchStore from "useGameAutocomplete.tsx";
import closure_2 from "GameAutocompleteStore.tsx";
import importDefaultResult from "../../../../_runtime/00633_debounce.js";

require = arg1;
let closure_3 = importDefaultResult(
  (arg0) => {
    const useGameAutocomplete = fetchStore.useGameAutocomplete;
    const items = [arg0];
    const many = useGameAutocomplete.fetchMany(items);
  },
  require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS,
  { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS },
);
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
