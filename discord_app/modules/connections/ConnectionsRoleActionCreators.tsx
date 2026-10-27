// === Module 11272: ConnectionsRoleActionCreators ===

// Module 11272 (ConnectionsRoleActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = async function _putRoleConnectionsConfigurations(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          let mapped = dependencyMap.map((arr) => arr.map((connectionType) => ({ connection_type: connectionType.connectionType, connection_metadata_field: connectionType.connectionMetadataField, application_id: connectionType.applicationId, operator: connectionType.operator, value: connectionType.value })));
          const HTTP = require("HTTPUtils").HTTP;
          const request = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(closure_0, closure_1), body: null, oldFormErrors: true, rejectWithError: false };
          if (0 === mapped.length) {
            mapped = [];
          }
          request.body = mapped;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: HTTP.put(request), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_131_2 = value;
          closure_131_3 = [];
          if (closure_131_2.body.length > 0) {
            const body = closure_131_2.body;
            closure_131_3 = body.map((arr) => arr.map((connectionType) => ({ connectionType: connectionType.connection_type, connectionMetadataField: connectionType.connection_metadata_field, applicationId: connectionType.application_id, operator: connectionType.operator, value: connectionType.value })));
          }
          c5 = 2;
          c6 = 1;
          const obj8 = { value: closure_132_0(closure_132_2[4]).requestMembersForRole(closure_131_0, closure_131_1, false), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_131_4 = value;
        if (null != closure_131_4) {
          const obj10 = { type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: closure_131_0, roleId: closure_131_1, count: closure_131_4 };
          closure_132_1(closure_132_2[3]).dispatch(obj10);
          const obj = closure_132_1(closure_132_2[3]);
        }
        const obj11 = { type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId: closure_131_1, roleConnectionConfigurations: closure_131_3 };
        closure_132_1(closure_132_2[3]).dispatch(obj11);
        c6 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp29) {
      c6 = tmp;
      throw tmp29;
    }
  }
};
let closure_6 = async function _fetchUserApplicationRoleConnections() {
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: constants.APPLICATION_USER_ROLE_CONNECTIONS, rejectWithError: false });
  return value.body;
};
const Endpoints = fn(1084).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  value = HTTP.get({ url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true });
  const obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  value.then((body) => {
    if (body.body.length > 0) {
      body = body.body;
      const mapped = body.map((arr) => arr.map((connectionType) => ({ connectionType: connectionType.connection_type, connectionMetadataField: connectionType.connection_metadata_field, applicationId: connectionType.application_id, operator: connectionType.operator, value: connectionType.value })));
    }
    DispatcherDefault.dispatch({ type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId, roleConnectionConfigurations: [] });
  }).catch(() => {

  });
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