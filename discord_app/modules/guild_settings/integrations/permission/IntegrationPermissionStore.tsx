// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionStore.tsx
import initializeDefault from "../../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import ApplicationCommandUtils from "../../../application_commands/ApplicationCommandUtils.tsx";
import IntegrationPermissionUtils from "IntegrationPermissionUtils.tsx";

require = fn;
function handleClear() {
  applicationId = undefined;
  closure_3 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = false;
}
let c7 = false;
const Store = initializeDefault.Store;
class IntegrationPermissionStore extends Store {}
const prototype = IntegrationPermissionStore.prototype;
prototype["getApplicationPermissions"] = function getApplicationPermissions() {
  return closure_3;
};
prototype["getCommands"] = function getCommands() {
  return obj2;
};
prototype["getCommand"] = function getCommand(commandId) {
  let tmp2;
  if (obj2 != null) {
    tmp2 = tmp[commandId];
  }
  return tmp2;
};
prototype["getEditedApplication"] = function getEditedApplication() {
  return c5;
};
prototype["getEditedCommand"] = function getEditedCommand() {
  return c6;
};
prototype["isUnavailable"] = function isUnavailable() {
  return c7;
};
prototype["getApplicationId"] = function getApplicationId() {
  return applicationId;
};
IntegrationPermissionStore.displayName = "IntegrationPermissionStore";
const integrationPermissionStore = new IntegrationPermissionStore(DispatcherDefault, {
  LOGOUT: handleClear,
  INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE:
    function handleIntegrationPermissionSettingsApplicationPermissionsFetchFailure(applicationId) {
      if (applicationId.applicationId !== applicationId) {
        return false;
      } else {
        c7 = true;
      }
    },
  INTEGRATION_PERMISSION_SETTINGS_CLEAR: handleClear,
  INTEGRATION_PERMISSION_SETTINGS_INIT: function handleInit(applicationId) {
    closure_3 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = false;
    applicationId = applicationId.applicationId;
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function handleIntegrationPermissionSettingsCommandUpdate(
    applicationId,
  ) {
    ({ commandId, permissions } = applicationId);
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else if (commandId !== tmp) {
      if (null != obj2) {
        if (null != tmp5) {
          obj2 = {};
          const merged = Object.assign(tmp5);
          obj2.permissions = IntegrationPermissionUtils.keyPermissions(permissions);
          obj2[commandId] = obj2;
        }
      }
      return false;
    } else {
      closure_3 = IntegrationPermissionUtils.keyPermissions(permissions);
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_EDIT: function handleIntegrationPermissionSettingsEdit(applicationId) {
    ({ commandId, permissions } = applicationId);
    if (applicationId.applicationId !== applicationId) {
      return false;
    } else if (commandId === tmp) {
      c5 = permissions;
    } else {
      const obj = { commandId, permissions };
      c6 = obj;
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_RESET: function handleIntegrationPermissionSettingsReset(commandId) {
    if (null == commandId.commandId) {
      c5 = undefined;
    } else {
      c6 = undefined;
    }
  },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE:
    function handleIntegrationPermissionSettingsCommandsFetchFailure(applicationId) {
      if (applicationId.applicationId !== applicationId) {
        return false;
      } else {
        c7 = true;
      }
    },
  INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS:
    function handleIntegrationPermissionSettingsCommandsFetchSuccess(applicationId) {
      ({ commands, permissions } = applicationId);
      if (applicationId.applicationId !== applicationId) {
        return false;
      } else {
        const _Object = Object;
        const iter = commands[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp4 = nextResult;
          if (nextResult.application_id === applicationId) {
            let obj = ApplicationCommandUtils;
            let obj3 = { rootCommand: null, command: null, applicationId: null };
            obj3.rootCommand = tmp4;
            obj3.command = tmp4;
            obj3.applicationId = tmp4.application_id;
            let command = obj.buildCommand(obj3);
            let tmp10 = fromEntriesResult[tmp4.id];
            if (null != tmp10) {
              let tmp6Result = IntegrationPermissionUtils;
              command.permissions = tmp6Result.keyPermissions(tmp11);
            }
            obj2[tmp4.id] = command;
          }
          continue;
        }
        fromEntriesResult = Object.fromEntries(
          permissions.map((item) => {
            items = [,];
            ({ id: arr[0], permissions: arr[1] } = item);
            return items;
          }),
        );
        obj2 = {};
      }
    },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/IntegrationPermissionStore.tsx",
);

export default integrationPermissionStore;
