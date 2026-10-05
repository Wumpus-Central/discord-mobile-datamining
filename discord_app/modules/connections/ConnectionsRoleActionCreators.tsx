// discord_app/modules/connections/ConnectionsRoleActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, body, closure_4, count;

let obj = function _putRoleConnectionsConfigurations() {
  obj = _asyncToGenerator(async (guildId, roleId, roleConnectionConfigurations) => {
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj6;
      let putResult;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp2;
              roleConnectionConfigurations = undefined;
              count = undefined;
              let mapped = roleConnectionConfigurations.map((arr) =>
                arr.map((connectionType) => ({
                  connection_type: connectionType.connectionType,
                  connection_metadata_field: connectionType.connectionMetadataField,
                  application_id: connectionType.applicationId,
                  operator: connectionType.operator,
                  value: connectionType.value,
                })),
              );
              const HTTP = require("HTTPUtils").HTTP;
              const request = {
                url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, roleId),
                body: mapped,
                oldFormErrors: true,
                rejectWithError: false,
              };
              const put = HTTP.put;
              if (0 === mapped.length) {
                mapped = [];
              }
              c5 = 1;
              c6 = 1;
              const obj5 = {
                value: putResult.then((body) => {
                  if (body.body.length > 0) {
                    body = body.body;
                    const mapped = body.map((arr) =>
                      arr.map((connectionType) => ({
                        connectionType: connectionType.connection_type,
                        connectionMetadataField: connectionType.connection_metadata_field,
                        applicationId: connectionType.application_id,
                        operator: connectionType.operator,
                        value: connectionType.value,
                      })),
                    );
                  }
                  return [];
                }),
                done: false,
              };
              putResult = put(request);
              return obj5;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              roleConnectionConfigurations = value;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj6.requestMembersForRole(guildId, roleId, false), done: false };
              obj6 = closure_132_0(closure_132_2[4]);
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            count = value;
            if (null != count) {
              obj = closure_132_1(closure_132_2[3]);
              const obj10 = { type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId, roleId, count };
              obj.dispatch(obj10);
            }
            const obj11 = {
              type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
              roleId,
              roleConnectionConfigurations,
            };
            const obj3 = closure_132_1(closure_132_2[3]);
            obj3.dispatch(obj11);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          c6 = 3;
          throw tmp27;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchUserApplicationRoleConnections() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: constants.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: false };
    await HTTP.get(obj4);
    return value.body;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  let roleId;
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  const value = HTTP.get(obj);
  const nextPromise = value.then((body) => {
    if (body.body.length > 0) {
      body = body.body;
      const mapped = body.map((arr) =>
        arr.map((connectionType) => ({
          connectionType: connectionType.connection_type,
          connectionMetadataField: connectionType.connection_metadata_field,
          applicationId: connectionType.application_id,
          operator: connectionType.operator,
          value: connectionType.value,
        })),
      );
    }
    obj = DispatcherDefault;
    const obj2 = {
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId,
      roleConnectionConfigurations: [],
    };
    obj.dispatch(obj2);
  });
  nextPromise.catch(() => {});
};
export const putRoleConnectionsConfigurations = function putRoleConnectionsConfigurations() {
  return obj(...arguments);
};
export const fetchUserApplicationRoleConnections = function fetchUserApplicationRoleConnections() {
  return obj(...arguments);
};
