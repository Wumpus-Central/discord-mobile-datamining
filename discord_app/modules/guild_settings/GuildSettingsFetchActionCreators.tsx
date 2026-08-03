// === Module 8315: _fetchGuildIntegrationsApplications ===

// Module 8315 (_fetchGuildIntegrationsApplications)
import dispatcher from "dispatcher";
import { BasicApplicationRecord } from "createExecutable";
import createdAt from "createdAt";
import { Endpoints } from "ME";

const require = arg1;
function _fetchGuildIntegrationsApplications() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp2;
              let callback2 = tmp5;
              callback2 = undefined;
              const HTTP = callback(outer1_2[4]).HTTP;
              const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = outer1_6.GUILD_INTEGRATIONS(callback);
              obj1[1] = { include_applications: true, include_role_connections_metadata: true };
              obj1[3] = callback(outer1_2[4]).rejectWithMigratedError();
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            callback2 = body.map((application) => {
              const obj = {};
              const merged = Object.assign(application);
              let fromServer;
              if ("application" in application) {
                if (null != application.application) {
                  fromServer = c4.createFromServer(application.application);
                }
              }
              obj.application = fromServer;
              let tmp5;
              if ("user" in application) {
                if (null != application.user) {
                  tmp5 = new createdAt(application.user);
                }
              }
              obj.user = tmp5;
              return obj;
            });
            obj = callback2(table[5]);
            const obj4 = { type: "GUILD_SETTINGS_LOADED_INTEGRATIONS", guildId: null, integrations: null };
            obj4[1] = callback;
            obj4[2] = callback2;
            obj.dispatch(obj4);
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = callback2;
            return obj5;
          }
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _fetchGuildIntegrationsApplications = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("createdAt").fileFinishedImporting("modules/guild_settings/GuildSettingsFetchActionCreators.tsx");

export const fetchGuildIntegrationsApplications = function fetchGuildIntegrationsApplications(id) {
  const self = this;
  const apply = _fetchGuildIntegrationsApplications.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGuildEmbed = function fetchGuildEmbed(arg0) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_WIDGET(arg0), oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    let obj = callback(table[5]);
    obj = { type: "GUILD_SETTINGS_SET_WIDGET", enabled: body.body.enabled, channelId: body.body.channel_id };
    obj.dispatch(obj);
  });
};