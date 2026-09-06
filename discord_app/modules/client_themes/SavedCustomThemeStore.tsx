// discord_app/modules/client_themes/SavedCustomThemeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import ThemeConstants from "../user_settings/ThemeConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function validateSavedTheme(colors) {
  try {
    let tmp5 = colors.colors.length > 0;
    if (tmp5) {
      tmp5 = typeof colors.gradient_angle === "number";
    }
    if (tmp5) {
      tmp5 = typeof colors.base_mix === "number";
    }
    if (tmp5) {
      tmp5 = null != tmp4;
    }
    return tmp5;
  } catch (tmp8) {
    let obj = SentryUtilsDefault;
    obj = { tags: { app_context: "SavedCustomThemeStore" } };
    obj.captureMessage("Invalid saved custom theme: " + tmp8, obj);
    return false;
  }
}
({ PROTO_THEME_MAP_WEB_REFRESH, PROTO_THEME_MAP_MOBILE: c2 } = ThemeConstants);
let FetchState = {
  NOT_FETCHED: 0,
  [0]: "NOT_FETCHED",
  IS_FETCHING: 1,
  [1]: "IS_FETCHING",
  HAS_FETCHED: 2,
  [2]: "HAS_FETCHED",
  ERROR: 3,
  [3]: "ERROR",
};
let closure_4 = [];
let ERROR = FetchState.NOT_FETCHED;
const PersistedStore = initializeDefault.PersistedStore;
class SavedCustomThemeStore extends PersistedStore {}
const prototype = SavedCustomThemeStore.prototype;
prototype["initialize"] = function initialize(savedCustomThemes) {
  if (null != savedCustomThemes) {
    savedCustomThemes = savedCustomThemes.savedCustomThemes;
  }
  ERROR = obj.NOT_FETCHED;
};
prototype["getState"] = function getState() {
  let savedCustomThemes = closure_4;
  if (closure_4 == null) {
    savedCustomThemes = [];
  }
  return { savedCustomThemes };
};
prototype["getSavedCustomTheme"] = function getSavedCustomTheme() {
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
};
prototype["getFetchState"] = function getFetchState() {
  return ERROR;
};
prototype["hasSavedCustomThemes"] = function hasSavedCustomThemes() {
  let length;
  if (closure_4 != null) {
    length = closure_4.length;
  }
  return length > 0;
};
prototype["isFetching"] = function isFetching() {
  return ERROR === obj.IS_FETCHING;
};
prototype["hasFetched"] = function hasFetched() {
  return ERROR === obj.HAS_FETCHED;
};
prototype["hasError"] = function hasError() {
  return ERROR === obj.ERROR;
};
SavedCustomThemeStore.displayName = "SavedCustomThemeStore";
SavedCustomThemeStore.persistKey = "SavedCustomThemeStore";
FetchState = {
  SAVED_CUSTOM_THEMES_FETCH_START: function handleCustomThemesFetchStart() {
    ERROR = obj.IS_FETCHING;
  },
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function handleCustomThemesFetchSuccess(themes) {
    themes = themes.themes;
    ERROR = obj.HAS_FETCHED;
    const found = themes.filter(validateSavedTheme);
    closure_4 = found.map((colors) => ({
      colors: colors.colors,
      gradient_angle: colors.gradient_angle,
      base_mix: colors.base_mix,
      base_theme: closure_1_2[colors.base_theme],
    }));
  },
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: function handleCustomThemesFetchFailure(error) {
    ERROR = obj.ERROR;
    obj = SentryUtilsDefault;
    obj.captureException(error.error, { tags: { app_context: "SavedCustomThemeStore" } });
  },
};
const savedCustomThemeStore = new SavedCustomThemeStore(DispatcherDefault, FetchState);
const result = size.fileFinishedImporting("modules/client_themes/SavedCustomThemeStore.tsx");

export default savedCustomThemeStore;
export { FetchState };
