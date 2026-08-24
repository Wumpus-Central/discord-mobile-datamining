// === Module 6938: GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH ===

// Module 6938 (GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH)
import set from "set" /* 2 */;
import GAME_WIDGET_LIMITS_BY_TYPE from "GAME_WIDGET_LIMITS_BY_TYPE" /* 5373 */;

const result = set.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

export const GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH = 100;
export const MIN_TRUSTED_EMPTY_PREFIX_LENGTH = 7;
export const shouldSuppressAutocompleteFetch = function shouldSuppressAutocompleteFetch(result, arg1) {
  let diff = result.length - 1;
  if (1 <= diff) {
    const arr = arg1(result.slice(0, diff));
    while (null == arr) {
      diff = diff - 1;
    }
    let tmp3 = arr.length <= 0;
    if (tmp3) {
      tmp3 = diff >= 7;
    }
    return tmp3;
  }
  return false;
};
export const normalizeGameAutocompleteQuery = function normalizeGameAutocompleteQuery(c0) {
  if (null == c0) {
    return null;
  } else {
    const formatted = c0.trim().toLowerCase();
    const replaced = formatted.replaceAll("_", " ");
    const substr = replaced.slice(0, 100);
    let tmp = null;
    if (substr.length > 0) {
      tmp = substr;
    }
    return tmp;
  }
};
export const isGameAutocompleteResultAllowedInGameWidgets = function isGameAutocompleteResultAllowedInGameWidgets(id) {
  const GAME_WIDGET_BANNED_APPLICATION_IDS = GAME_WIDGET_LIMITS_BY_TYPE.GAME_WIDGET_BANNED_APPLICATION_IDS;
  return !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
};