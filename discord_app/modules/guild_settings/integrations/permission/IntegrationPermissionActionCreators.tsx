// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionActionCreators.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import ApplicationCommandTypes from "../../../application_commands/ApplicationCommandTypes.tsx";
import ApplicationCommandUtils from "../../../application_commands/ApplicationCommandUtils.tsx";
import IntegrationPermissionUtils from "IntegrationPermissionUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

require = fn;
let closure_6 = async function _getApplicationCommandPermissions(arg0) {
  closure_4 = tmp3;
  closure_3 = tmp5;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = closure_2;
  let permissions = [];
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({
    url: Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(closure_0, closure_1, closure_2),
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  });
  if (1 === tmp8) {
    c6 = 0;
    if (404 !== tmp29.status) {
      closure_132_1(closure_132_3[2]).dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
        applicationId: closure_131_0,
        commandId: closure_131_2,
        guildId: closure_131_1,
      });
      c8 = 3;
      return { value: undefined, done: true };
    } else {
      closure_132_1(closure_132_3[2]).dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
        applicationId: closure_131_0,
        commandId: closure_131_2,
        guildId: closure_131_1,
        permissions,
      });
      c8 = 3;
      closure_132_1(closure_132_3[2]);
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    permissions = value.body.permissions;
    c6 = 0;
  }
  return value;
};
function updateApplicationCommandPermissions() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _updateApplicationCommandPermissions(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            applicationId: closure_129_0,
            commandId: closure_129_1,
            defaultEveryoneValue: closure_129_2,
            defaultEverywhereValue: closure_129_3,
            guildId: closure_129_4,
            permissions: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (closure_129_1 === closure_129_0) {
            let tmp15 = (function removeDefaultSentinels(guildId, arr, arg2, arg3) {
              if (arg2) {
                if (arg3) {
                  const obj = {};
                  obj[guildId] = arg2;
                  obj[closure_1_0(closure_1_3[8]).allChannelsSentinel(guildId)] = arg3;
                  return arr.filter((id) => {
                    if (id.id in obj) {
                      return id.permission !== tmp[id.id];
                    } else {
                      return true;
                    }
                  });
                }
              }
              return arr;
            })(closure_129_4, closure_129_5, closure_129_2, closure_129_3);
          } else {
            tmp15 = closure_129_5;
          }
          closure_129_6 = tmp15;
          const obj4 = closure_130_2(closure_130_3[4]);
          const result = obj4.updateApplicationGuildCommandPermissions(
            closure_129_0,
            closure_129_4,
            closure_129_1,
            closure_129_6,
          );
          c3 = 2;
          c4 = 1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_7 = value;
        const obj7 = {
          type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
          applicationId: closure_129_0,
          commandId: closure_129_1,
          guildId: closure_129_4,
          permissions: closure_129_7.body.permissions,
        };
        closure_130_1(closure_130_3[2]).dispatch(obj7);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp30) {
      c4 = tmp;
      throw tmp30;
    }
  }
};
const Endpoints = fn(1071).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/IntegrationPermissionActionCreators.tsx",
);

export function clearIntegrationPermissions() {
  DispatcherDefault.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR" });
}
export function editPermissions(Button, applicationId, omitResult) {
  DispatcherDefault.dispatch({
    applicationId: Button,
    commandId: applicationId,
    permissions: omitResult,
    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT",
  });
}
export function getApplicationCommands(guildId, id) {
  _require = guildId;
  const applicationId = id;
  const HTTP = require("HTTPUtils").HTTP;
  value = HTTP.get({ url: Endpoints.GUILD_COMMANDS_FOR_APPLICATION(guildId, id), rejectWithError: true });
  value.then(
    (body) => {
      DispatcherDefault.dispatch({
        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
        applicationId,
        commands: body.body.application_commands,
        guildId,
        permissions: body.body.permissions,
      });
    },
    () => {
      DispatcherDefault.dispatch({ type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE", applicationId });
    },
  );
}
export function getApplicationCommandPermissions() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function initIntegrationPermissions(id) {
  DispatcherDefault.dispatch({ applicationId: id, type: "INTEGRATION_PERMISSION_SETTINGS_INIT" });
}
export function resetPermissions(commandId) {
  DispatcherDefault.dispatch({ commandId, type: "INTEGRATION_PERMISSION_SETTINGS_RESET" });
}
export function saveApplicationPermissions(applicationId, guildId, permissions) {
  return updateApplicationCommandPermissions({
    applicationId,
    commandId: applicationId,
    defaultEveryoneValue: true,
    defaultEverywhereValue: true,
    guildId,
    permissions,
  });
}
export function saveCommandPermissions(applicationId) {
  ({ command, editedPermissions, guildId, originalApplicationPermissions } = applicationId);
  let permissions = command.permissions;
  if (permissions == null) {
    permissions = {};
  }
  const keys = Object.keys(permissions);
  const differenceResult = applyDefault.difference(keys, Object.keys(editedPermissions));
  const merged = Object.assign(editedPermissions);
  const obj2 = {};
  const tmpResult = applyDefault;
  const omitResult = applyDefault.omit({}, differenceResult);
  const toPermissionKeyResult = IntegrationPermissionUtils.toPermissionKey(
    guildId,
    ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE,
  );
  const obj6 = IntegrationPermissionUtils;
  let flag;
  const allChannelsSentinelResult = ApplicationCommandUtils.allChannelsSentinel(guildId);
  if (originalApplicationPermissions[toPermissionKeyResult] != null) {
    flag = tmp11.permission;
  }
  if (flag == null) {
    flag = true;
  }
  const obj3 = {
    defaultEveryoneValue: flag,
    defaultEverywhereValue: null,
    applicationId: null,
    commandId: null,
    guildId: null,
    permissions: null,
  };
  const tmp12 =
    originalApplicationPermissions[
      obj6.toPermissionKey(
        ApplicationCommandUtils.allChannelsSentinel(guildId),
        ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL,
      )
    ];
  let flag2;
  if (tmp12 != null) {
    flag2 = tmp12.permission;
  }
  if (flag2 == null) {
    flag2 = true;
  }
  obj3.defaultEverywhereValue = flag2;
  obj3.applicationId = applicationId.applicationId;
  obj3.commandId = command.id;
  obj3.guildId = guildId;
  const values = Object.values(omitResult);
  obj3.permissions = values.map((id) => ({ id: id.id, permission: id.permission, type: id.type }));
  return updateApplicationCommandPermissions(obj3);
}
