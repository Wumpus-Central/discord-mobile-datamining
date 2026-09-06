// discord_app/modules/games/autocomplete/GameAutocompleteUtils.tsx
import GameWidgetLimits from "../../../../discord_common/js/shared/shared-constants/GameWidgetLimits.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

export const GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH = 100;
export const MIN_TRUSTED_EMPTY_PREFIX_LENGTH = 7;
export const shouldSuppressAutocompleteFetch = function shouldSuppressAutocompleteFetch(arr, fn) {
  let diff = arr.length - 1;
  if (1 <= diff) {
    arr = fn(arr.slice(0, diff));
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
export const normalizeGameAutocompleteQuery = function normalizeGameAutocompleteQuery(query) {
  if (null == query) {
    return null;
  } else {
    const formatted = query.trim().toLowerCase();
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
  const GAME_WIDGET_BANNED_APPLICATION_IDS = GameWidgetLimits.GAME_WIDGET_BANNED_APPLICATION_IDS;
  return !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
};
