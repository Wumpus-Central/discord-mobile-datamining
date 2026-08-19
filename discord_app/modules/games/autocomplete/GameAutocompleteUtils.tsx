// === Module 6900: GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH ===

// Module 6900 (GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH)
import obj132 from "obj132" /* 2 */;
import GAME_WIDGET_LIMITS_BY_TYPE from "GAME_WIDGET_LIMITS_BY_TYPE" /* 5368 */;

const result = obj132.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

export const GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH = 100;
export const MIN_TRUSTED_EMPTY_PREFIX_LENGTH = 7;
export const shouldSuppressAutocompleteFetch = function shouldSuppressAutocompleteFetch(result, fn) {
  let diff = result.length - 1;
  if (1 <= diff) {
    const arr = fn(result.slice(0, diff));
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
  if (null == _require) {
    return null;
  } else {
    const formatted = _require.trim().toLowerCase();
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