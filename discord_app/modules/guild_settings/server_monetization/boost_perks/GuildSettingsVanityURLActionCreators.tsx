// discord_app/modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import sendRequest from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../../../Constants.tsx";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import { sendRequest } from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/GuildSettingsVanityURLActionCreators.tsx");

export const fetchVanityUrl = function fetchVanityUrl(id) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_VANITY_URL(id), oldFormErrors: true, rejectWithError: true });
  return value.then((result) => {
    ({ code, uses, error } = result.body);
    callback(table[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses, error });
  });
};
export const resetCode = function resetCode() {
  dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
};
export const setCode = function setCode(code) {
  const obj = { type: "GUILD_SETTINGS_VANITY_URL_SET", code };
  obj.dispatch(obj);
};
export const saveCode = function saveCode(id, code) {
  const _require = arg2;
  const HTTP = require("../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: null };
  obj = { code };
  obj[3] = require("../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
  const obj3 = sendRequest;
  return HTTP.patch(obj).then((result) => {
    ({ code, uses } = result.body);
    callback(table[2]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
  }, (body) => {
    const obj = { type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: body.body };
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