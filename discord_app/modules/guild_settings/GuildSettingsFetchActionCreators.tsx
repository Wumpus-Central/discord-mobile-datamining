// discord_app/modules/guild_settings/GuildSettingsFetchActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserRecord from "../../records/UserRecord.tsx";

require = fn;
let closure_7 = async function _fetchGuildIntegrationsApplications() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.GUILD_INTEGRATIONS(closure_0),
    query: { include_applications: true, include_role_connections_metadata: true },
    oldFormErrors: true,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  await HTTP.get(request);
  const body = value.body;
  closure_129_1 = body.map((application) => {
    const obj = {};
    const merged = Object.assign(application);
    let fromServer;
    if ("application" in application) {
      if (null != application.application) {
        fromServer = closure_1_4.createFromServer(application.application);
      }
    }
    obj.application = fromServer;
    let tmp5;
    if ("user" in application) {
      if (null != application.user) {
        tmp5 = new closure_1_5(application.user);
      }
    }
    obj.user = tmp5;
    return obj;
  });
  closure_130_1(closure_130_2[5]).dispatch({
    type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
    guildId: closure_129_0,
    integrations: closure_129_1,
  });
  return closure_129_1;
};
const BasicApplicationRecord = fn(1918).BasicApplicationRecord;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsFetchActionCreators.tsx");

export const fetchGuildIntegrationsApplications = function fetchGuildIntegrationsApplications() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildEmbed = function fetchGuildEmbed(guildId) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.GUILD_WIDGET(guildId), oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    const obj = { type: "GUILD_SETTINGS_SET_WIDGET", enabled: body.body.enabled, channelId: body.body.channel_id };
    obj.dispatch(obj);
  });
};
