// === Module 9515: queryGamesAutocomplete ===

// Module 9515 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5901 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 8598 */;
import GameSearchSession from "GameSearchSession" /* 8600 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5899 */;
import debounce from "debounce" /* 551 */;

require = fn;
let closure_3 = debounce((arg0) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, fn(8598).GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: fn(8598).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query, CHAT_MENTION) {
  let gameSearchSession = null;
  if (null != CHAT_MENTION) {
    gameSearchSession = GameSearchSession.getGameSearchSession(CHAT_MENTION);
  }
  if (gameSearchSession != null) {
    gameSearchSession.onQuery(query);
  }
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  if (null == result) {
    return null;
  } else {
    closure_3(result);
    const closestResults = GameAutocompleteStore.getClosestResults(result);
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