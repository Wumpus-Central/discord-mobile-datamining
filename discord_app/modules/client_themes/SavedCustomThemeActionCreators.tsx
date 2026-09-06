// discord_app/modules/client_themes/SavedCustomThemeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SavedCustomThemeStore from "SavedCustomThemeStore.tsx";

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!SavedCustomThemeStore.isFetching()) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" });
    const HTTP = HTTPUtils.HTTP;
    obj = { url: Endpoints.USERS_ME_CUSTOM_THEMES, oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj);
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
        DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
      })
      .catch((error) => {
        const obj = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
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
      DispatcherDefault.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    });
  }
};
