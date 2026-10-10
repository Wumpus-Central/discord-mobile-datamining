// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import useGameAutocomplete2 from "useGameAutocomplete.tsx";
import GameSearchSession from "GameSearchSession.tsx";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";
import debounce from "../../../../_runtime/00551_debounce.js";

require = fn;
let closure_3 = debounce(
  (arg0, arg1) => {
    const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
    const items = [arg0, arg1];
    const many = useGameAutocomplete.fetchMany(items);
  },
  fn(8706).GAME_AUTOCOMPLETE_DEBOUNCE_MS,
  { leading: true, maxWait: fn(8706).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS },
);
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
