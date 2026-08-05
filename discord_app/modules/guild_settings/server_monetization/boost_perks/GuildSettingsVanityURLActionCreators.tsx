// discord_app/modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx
import { Endpoints } from "ME";
import { sendRequest } from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../../../Dispatcher.tsx";

const result = require("dispatcher").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_VANITY_URL(id), oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    let code;
    let error;
    let uses;
    ({ code, uses, error } = body.body);
    callback(table[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  dispatcher.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  let obj = dispatcher;
  obj = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj);
};
export const saveCode = function saveCode(id, code) {
  const _require = arg2;
  const HTTP = _sendRequest.HTTP;
  obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { code };
  obj[3] = _sendRequest.rejectWithMigratedError();
  const obj3 = _sendRequest;
  return HTTP.patch(obj).then((body) => {
    let code;
    let uses;
    ({ code, uses } = body.body);
    callback(table[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
    obj.dispatch(obj);
    let throwErr;
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