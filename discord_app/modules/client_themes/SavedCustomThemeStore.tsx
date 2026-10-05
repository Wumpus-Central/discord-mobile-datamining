// === Module 4789: SavedCustomThemeStore ===

// Module 4789 (SavedCustomThemeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import size from "module_2" /* 2 */;

let closure_4;

let PROTO_THEME_MAP_WEB_REFRESH;
let c2;
function validateSavedTheme(colors) {
  try {
    return colors.colors.length > 0 && typeof colors.gradient_angle === "number" && typeof colors.base_mix === "number" && null != tmp3;
  } catch (tmp7) {
    const obj2 = { tags: { app_context: "SavedCustomThemeStore" } };
    const obj = SentryUtilsDefault;
    obj.captureMessage("Invalid saved custom theme: " + tmp7, obj2);
    return false;
  }
}
({ PROTO_THEME_MAP_MOBILE_REFRESH: c2, PROTO_THEME_MAP_WEB_REFRESH } = ThemeConstants);
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", IS_FETCHING: 1, [1]: "IS_FETCHING", HAS_FETCHED: 2, [2]: "HAS_FETCHED", ERROR: 3, [3]: "ERROR" };
const React3 = [];
let ERROR = FetchState.NOT_FETCHED;
const PersistedStore = get_initializedDefault.PersistedStore;
class SavedCustomThemeStore extends PersistedStore {
  initialize(savedCustomThemes) {
    if (null != savedCustomThemes) {
      savedCustomThemes = savedCustomThemes.savedCustomThemes;
    }
    ERROR = obj.NOT_FETCHED;
  }
  getState() {
    let savedCustomThemes = closure_4;
    if (closure_4 == null) {
      savedCustomThemes = [];
    }
    return { savedCustomThemes };
  }
  getSavedCustomTheme() {
    let length;
    if (closure_4 != null) {
      length = closure_4.length;
    }
    let first = null;
    if (length > 0) {
      first = null;
      if (closure_4[0].colors.length > 0) {
        first = closure_4[0];
      }
    }
    return first;
  }
  getFetchState() {
    return ERROR;
  }
  hasSavedCustomThemes() {
    let length;
    if (closure_4 != null) {
      length = closure_4.length;
    }
    return length > 0;
  }
  isFetching() {
    return ERROR === obj.IS_FETCHING;
  }
  hasFetched() {
    return ERROR === obj.HAS_FETCHED;
  }
  hasError() {
    return ERROR === obj.ERROR;
  }
}
const prototype = SavedCustomThemeStore.prototype;
SavedCustomThemeStore.displayName = "SavedCustomThemeStore";
SavedCustomThemeStore.persistKey = "SavedCustomThemeStore";
let obj2 = {
  SAVED_CUSTOM_THEMES_FETCH_START: function handleCustomThemesFetchStart() {
    ERROR = obj.IS_FETCHING;
  },
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function handleCustomThemesFetchSuccess(themes) {
    themes = themes.themes;
    ERROR = obj.HAS_FETCHED;
    const found = themes.filter(validateSavedTheme);
    closure_4 = found.map((colors) => ({ colors: colors.colors, gradient_angle: colors.gradient_angle, base_mix: colors.base_mix, base_theme: closure_1_2[colors.base_theme] }));
  },
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: function handleCustomThemesFetchFailure(error) {
    let obj;
    ERROR = obj.ERROR;
    error = error.error;
    obj = SentryUtilsDefault;
    obj.captureException(error, { tags: { app_context: "SavedCustomThemeStore" } });
  }
};
const savedCustomThemeStore = new SavedCustomThemeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/client_themes/SavedCustomThemeStore.tsx");

export default savedCustomThemeStore;
export { FetchState };