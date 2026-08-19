// === Module 14610: fetchUserCustomThemes ===

// Module 14610 (fetchUserCustomThemes)
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import validateSavedTheme from "validateSavedTheme" /* 4308 */;
import { Endpoints } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!fetching.isFetching()) {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" });
    const HTTP = sendRequest.HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.USERS_ME_CUSTOM_THEMES;
    const value = HTTP.get(obj);
    value.then((result) => {
      const body = result.body;
      let custom_themes;
      if (body != null) {
        custom_themes = body.custom_themes;
      }
      if (custom_themes == null) {
        custom_themes = [];
      }
      callback(709).dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    }).catch((error) => {
      callback(709);
      const obj = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
      obj.dispatch(obj);
    });
    const nextPromise = value.then((result) => {
      const body = result.body;
      let custom_themes;
      if (body != null) {
        custom_themes = body.custom_themes;
      }
      if (custom_themes == null) {
        custom_themes = [];
      }
      callback(709).dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    });
  }
};