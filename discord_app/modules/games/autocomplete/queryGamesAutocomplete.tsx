// === Module 9048: queryGamesAutocomplete ===

// Module 9048 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8566 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 9049 */;
import GameSearchSession from "GameSearchSession" /* 9051 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8565 */;
import debounce from "debounce" /* 551 */;

require = fn;
let closure_3 = debounce((arg0, arg1) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0, arg1];
  const many = useGameAutocomplete.fetchMany(items);
}, fn(9049).GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: fn(9049).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query, DEFAULT, CHAT_MENTION) {
  let gameSearchSession = null;
  if (null != CHAT_MENTION) {
    gameSearchSession = GameSearchSession.getGameSearchSession(CHAT_MENTION, DEFAULT);
  }
  if (gameSearchSession != null) {
    gameSearchSession.onQuery(query);
  }
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  if (null == result) {
    return null;
  } else {
    closure_3(result, DEFAULT);
    const closestResults = GameAutocompleteStore.getClosestResults(result, DEFAULT);
    let results;
    if (closestResults != null) {
      results = closestResults.results;
    }
    if (results == null) {
      results = [];
    }
    const found = results.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    if (null != closestResults) {
      if (gameSearchSession != null) {
        gameSearchSession.onResults(closestResults.query, found);
      }
    }
    return found;
  }
};