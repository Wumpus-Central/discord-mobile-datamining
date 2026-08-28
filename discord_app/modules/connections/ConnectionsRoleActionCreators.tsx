// === Module 11106: _putRoleConnectionsConfigurations ===

// Module 11106 (_putRoleConnectionsConfigurations)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _putRoleConnectionsConfigurations() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp2;
              closure_2 = undefined;
              closure_3 = undefined;
              let mapped = closure_2.map((arr) => arr.map((connectionType) => ({ connection_type: connectionType.connectionType, connection_metadata_field: connectionType.connectionMetadataField, application_id: connectionType.applicationId, operator: connectionType.operator, value: connectionType.value })));
              const HTTP = callback(closure_2[2]).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_4.GUILD_ROLE_CONNECTIONS_CONFIGURATION(callback, callback2);
              if (0 === mapped.length) {
                mapped = [];
              }
              obj1[1] = mapped;
              c5 = 1;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.put(obj1).then((body) => {
                if (body.body.length > 0) {
                  body = body.body;
                  const mapped = body.map((arr) => arr.map(() => { ... }));
                }
                return [];
              });
              return obj2;
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_2 = arg1;
              let obj5 = callback(closure_2[4]);
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.requestMembersForRole(callback, callback2, false);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_3 = arg1;
            if (null != closure_3) {
              obj = callback2(closure_2[3]);
              const obj6 = { type: "GUILD_ROLE_MEMBER_COUNT_UPDATE", guildId: null, roleId: null, count: null };
              obj6[1] = callback;
              obj6[2] = callback2;
              obj6[3] = closure_3;
              obj.dispatch(obj6);
            }
            obj2 = callback2(closure_2[3]);
            const obj7 = { type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId: null, roleConnectionConfigurations: null };
            obj7[1] = callback2;
            obj7[2] = closure_2;
            obj2.dispatch(obj7);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          c6 = tmp;
          throw tmp28;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUserApplicationRoleConnections() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[2]).HTTP;
    obj1 = { url: null, rejectWithError: false };
    obj1[0] = closure_1_4.APPLICATION_USER_ROLE_CONNECTIONS;
    yield HTTP.get(obj1);
    return arg1.body;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/connections/ConnectionsRoleActionCreators.tsx");

export const fetchRoleConnectionsConfiguration = function fetchRoleConnectionsConfiguration(guildId, id) {
  const _require = id;
  const HTTP = _require(530).HTTP;
  const value = HTTP.get({ url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true });
  let obj = { url: Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(guildId, id), rejectWithError: true };
  value.then((body) => {
    if (body.body.length > 0) {
      body = body.body;
      const mapped = body.map((arr) => arr.map((connectionType) => ({ connectionType: connectionType.connection_type, connectionMetadataField: connectionType.connection_metadata_field, applicationId: connectionType.application_id, operator: connectionType.operator, value: connectionType.value })));
    }
    let obj = closure_1_1(closure_1_2[3]);
    obj = { type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS", roleId: closure_0, roleConnectionConfigurations: [] };
    obj.dispatch(obj);
  }).catch(() => {

  });
};
export const putRoleConnectionsConfigurations = function putRoleConnectionsConfigurations(closure_1_4, id, arg2) {
  const self = this;
  const apply = _putRoleConnectionsConfigurations.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUserApplicationRoleConnections = function fetchUserApplicationRoleConnections() {
  const self = this;
  const apply = _fetchUserApplicationRoleConnections.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};