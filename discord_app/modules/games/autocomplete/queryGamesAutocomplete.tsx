// discord_app/modules/games/autocomplete/queryGamesAutocomplete.tsx
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import useGameAutocomplete2 from "useGameAutocomplete.tsx";
import GameSearchSession from "GameSearchSession.tsx";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";
import debounce from "../../../../_runtime/00551_debounce.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { leading: true, maxWait: useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
const GAME_AUTOCOMPLETE_DEBOUNCE_MS = useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MS;
let closure_3 = debounce(
  (arg0) => {
    const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
    const items = [arg0];
    const many = useGameAutocomplete.fetchMany(items);
  },
  GAME_AUTOCOMPLETE_DEBOUNCE_MS,
  obj,
);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query, CHAT_MENTION) {
  let gameSearchSession = null;
  if (null != CHAT_MENTION) {
    const obj = GameSearchSession;
    gameSearchSession = obj.getGameSearchSession(CHAT_MENTION);
  }
  if (gameSearchSession != null) {
    gameSearchSession.onQuery(query);
  }
  const obj2 = GameAutocompleteUtils;
  const result = obj2.normalizeGameAutocompleteQuery(query);
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
