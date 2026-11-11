// === Module 10185: queryGamesAutocomplete ===

// Module 10185 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9313 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 10186 */;
import GameSearchSession from "GameSearchSession" /* 10188 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 9312 */;
import debounce from "debounce" /* 551 */;

require = fn;
let closure_3 = debounce((arg0, arg1) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  items = [arg0, arg1];
  const many = useGameAutocomplete.fetchMany(items);
}, fn(10186).GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: fn(10186).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export function queryGamesAutocomplete(query, DEFAULT, CHAT_MENTION) {
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
}