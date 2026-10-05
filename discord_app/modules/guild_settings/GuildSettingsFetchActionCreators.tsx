// discord_app/modules/guild_settings/GuildSettingsFetchActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserRecord from "../../records/UserRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = function _fetchGuildIntegrationsApplications() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj9;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.GUILD_INTEGRATIONS(guildId),
        query: { include_applications: true, include_role_connections_metadata: true },
        oldFormErrors: true,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const get = HTTP.get;
      obj9 = HTTPUtils;
      await get(request);
      const body = value.body;
      const tmp4 = body.map(function (application) {
        let fromServer;
        let tmp5;
        obj = { application: fromServer, user: tmp5 };
        const merged = Object.assign(application);
        fromServer = undefined;
        if ("application" in application) {
          if (null != application.application) {
            fromServer = closure_1_4.createFromServer(application.application);
          }
        }
        tmp5 = undefined;
        if ("user" in application) {
          if (null != application.user) {
            const self = this;
            const self2 = this;
            tmp5 = new closure_1_5(application.user);
          }
        }
        return obj;
      });
      obj = closure_130_1(closure_130_2[5]);
      const obj6 = { type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId, integrations: tmp4 };
      obj.dispatch(obj6);
      return tmp4;
    })();
  });
  return obj(...arguments);
};
const BasicApplicationRecord = ApplicationRecord.BasicApplicationRecord;
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsFetchActionCreators.tsx");

export const fetchGuildIntegrationsApplications = function fetchGuildIntegrationsApplications() {
  return obj(...arguments);
};
export const fetchGuildEmbed = function fetchGuildEmbed(guildId) {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: Endpoints.GUILD_WIDGET(guildId), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_SET_WIDGET", enabled: body.body.enabled, channelId: body.body.channel_id };
    obj.dispatch(obj2);
  });
};
