// discord_app/modules/client_themes/SavedCustomThemeActionCreators.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "SavedCustomThemeStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!fetching.isFetching()) {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" });
    const HTTP = sendRequest.HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: true };
    obj[0] = Endpoints.USERS_ME_CUSTOM_THEMES;
    const value = HTTP.get(obj);
    value
      .then((body) => {
        body = body.body;
        let custom_themes;
        if (body != null) {
          custom_themes = body.custom_themes;
        }
        if (custom_themes == null) {
          custom_themes = [];
        }
        callback(706).dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
      })
      .catch((error) => {
        let obj = callback(706);
        obj = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
        obj.dispatch(obj);
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
      callback(706).dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    });
  }
};
