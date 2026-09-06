// === Module 9069: GuildSettingsVanityURLActionCreators ===

// Module 9069 (GuildSettingsVanityURLActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.GUILD_VANITY_URL(id), oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    ({ code, uses, error } = body.body);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  const obj = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj);
};
export const saveCode = function saveCode(id, code, arg2) {
  _require = arg2;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_VANITY_URL(id), body: { code }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  let obj = { code };
  const obj3 = require("HTTPUtils");
  return HTTP.patch(request).then((body) => {
    ({ code, uses } = body.body);
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    const obj = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
    obj.dispatch(obj);
    throwErr = undefined;
    if (throwErr != null) {
      throwErr = throwErr.throwErr;
    }
    if (throwErr) {
      throw body;
    } else {
      return body;
    }
  });
};