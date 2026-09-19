// === Module 15530: SavedCustomThemeActionCreators ===

// Module 15530 (SavedCustomThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 4688 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!SavedCustomThemeStore.isFetching()) {
    DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" });
    const HTTP = HTTPUtils.HTTP;
    const obj2 = { url: Endpoints.USERS_ME_CUSTOM_THEMES, oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj2);
    value.then((body) => {
      body = body.body;
      let custom_themes;
      if (body != null) {
        custom_themes = body.custom_themes;
      }
      if (custom_themes == null) {
        custom_themes = [];
      }
      DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    }).catch((error) => {
      DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error });
    });
    const nextPromise = value.then((body) => {
      body = body.body;
      let custom_themes;
      if (body != null) {
        custom_themes = body.custom_themes;
      }
      if (custom_themes == null) {
        custom_themes = [];
      }
      DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    });
  }
};