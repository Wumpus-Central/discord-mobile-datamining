// === Module 9252: GuildSettingsVanityURLActionCreators ===

// Module 9252 (GuildSettingsVanityURLActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, throwErr;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.GUILD_VANITY_URL(id), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let code;
    let error;
    let uses;
    ({ code, uses, error } = body.body);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj2);
};
export const saveCode = function saveCode(id, code, arg2) {
  let obj;
  let obj3;
  _require = arg2;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj = { code };
  obj3 = require("HTTPUtils");
  const patchResult = patch(request);
  return patchResult.then((body) => {
    let code;
    let uses;
    ({ code, uses } = body.body);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
    obj.dispatch(obj2);
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