// === Module 4308: validateSavedTheme ===

// Module 4308 (validateSavedTheme)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef1208 from "module_1208" /* 1208 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;

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
    obj = _modDef1208;
    obj = { tags: null };
    obj[0] = { app_context: "SavedCustomThemeStore" };
    obj.captureMessage("Invalid saved custom theme: " + tmp8, obj);
    return false;
  }
}
({ PROTO_THEME_MAP_WEB_REFRESH, PROTO_THEME_MAP_MOBILE: obj1 } = SystemThemeState);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", IS_FETCHING: 1, [1]: "IS_FETCHING", HAS_FETCHED: 2, [2]: "HAS_FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_4 = [];
let NOT_FETCHED = obj.NOT_FETCHED;
const PersistedStore = initializeDefault.PersistedStore;
class SavedCustomThemeStore extends PersistedStore {
}
const prototype = SavedCustomThemeStore.prototype;
prototype["initialize"] = function initialize(savedCustomThemes) {
  if (null != savedCustomThemes) {
    savedCustomThemes = savedCustomThemes.savedCustomThemes;
  }
  NOT_FETCHED = obj.NOT_FETCHED;
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
  return NOT_FETCHED;
};
prototype["hasSavedCustomThemes"] = function hasSavedCustomThemes() {
  let length;
  if (closure_4 != null) {
    length = closure_4.length;
  }
  return length > 0;
};
prototype["isFetching"] = function isFetching() {
  return NOT_FETCHED === obj.IS_FETCHING;
};
prototype["hasFetched"] = function hasFetched() {
  return NOT_FETCHED === obj.HAS_FETCHED;
};
prototype["hasError"] = function hasError() {
  return NOT_FETCHED === obj.ERROR;
};
SavedCustomThemeStore.displayName = "SavedCustomThemeStore";
SavedCustomThemeStore.persistKey = "SavedCustomThemeStore";
obj = {
  SAVED_CUSTOM_THEMES_FETCH_START: function handleCustomThemesFetchStart() {
    const IS_FETCHING = obj.IS_FETCHING;
  },
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function handleCustomThemesFetchSuccess(themes) {
    themes = themes.themes;
    const HAS_FETCHED = obj.HAS_FETCHED;
    const found = themes.filter(validateSavedTheme);
    closure_4 = found.map((item, index) => ({ colors: item.colors, gradient_angle: item.gradient_angle, base_mix: item.base_mix, base_theme: table[item.base_theme] }));
  },
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: function handleCustomThemesFetchFailure(error) {
    const ERROR = obj.ERROR;
    obj = _modDef1208;
    obj.captureException(error.error, { tags: { app_context: "SavedCustomThemeStore" } });
  }
};
const savedCustomThemeStore = new SavedCustomThemeStore(dispatcherDefault, obj);
const result = obj132.fileFinishedImporting("modules/client_themes/SavedCustomThemeStore.tsx");

export default savedCustomThemeStore;
export const FetchState = obj;