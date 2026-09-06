// discord_app/modules/connections/ConnectionsRoleActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _putRoleConnectionsConfigurations(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let mapped = dependencyMap.map((arr) =>
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
            url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(closure_0, closure_1),
            body: null,
            oldFormErrors: true,
            rejectWithError: false,
          };
          if (0 === mapped.length) {
            mapped = [];
          }
          request.body = mapped;
          c5 = 1;
          c6 = 1;
          const obj1 = {
            value: HTTP.put(request).then((body) => {
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
          return obj1;
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_131_2 = value;
          let obj5 = closure_132_0(closure_132_2[4]);
          c5 = 2;
          c6 = 1;
          const obj3 = { value: obj5.requestMembersForRole(closure_131_0, closure_131_1, false), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_131_3 = value;
        if (null != closure_131_3) {
          obj = closure_132_1(closure_132_2[3]);
          obj5 = {
            type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
            guildId: closure_131_0,
            roleId: closure_131_1,
            count: closure_131_3,
          };
          obj.dispatch(obj5);
        }
        obj2 = closure_132_1(closure_132_2[3]);
        const obj6 = {
          type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
          roleId: closure_131_1,
          roleConnectionConfigurations: closure_131_2,
        };
        obj2.dispatch(obj6);
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp28) {
      c6 = tmp;
      throw tmp28;
    }
  }
};
let closure_6 = async function _fetchUserApplicationRoleConnections() {
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: constants.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: false });
  return arg1.body;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  value = HTTP.get({ url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true });
  let obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  value
    .then((body) => {
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
      const obj = {
        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
        roleId,
        roleConnectionConfigurations: [],
      };
      obj.dispatch(obj);
    })
    .catch(() => {});
};
export const putRoleConnectionsConfigurations = function putRoleConnectionsConfigurations() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUserApplicationRoleConnections = function fetchUserApplicationRoleConnections() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
