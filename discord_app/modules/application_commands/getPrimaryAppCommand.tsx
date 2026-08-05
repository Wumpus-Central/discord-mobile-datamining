// discord_app/modules/application_commands/getPrimaryAppCommand.tsx
import ScoreMethod from "ScoreMethod";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import getIndexKey from "getIndexKey";
import closure_7 from "getIndexKey";
import { ApplicationIntegrationType } from "../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import { PermissionOverwriteType } from "../../flow/Server.tsx";
import { ScoreMethod } from "ApplicationCommandQueryTypes.tsx";

let c5;
let closure_6;
const require = arg1;
function _getPrimaryAppCommand() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          v0 = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let noop = tmp5;
              let ScoreMethod = tmp2;
              let closure_0 = channel;
              channel = undefined;
              ScoreMethod = undefined;
              channel = channel.getChannel(closure_0);
              ScoreMethod = undefined;
              let tmp13 = null != channel;
              if (tmp13) {
                const obj1 = { channel: null, type: "channel" };
                obj1[0] = channel;
                const tmp12 = outer1_11(obj1, tmp33);
                ScoreMethod = tmp12;
                tmp13 = null == tmp12;
              }
              if (tmp13) {
                const obj2 = { type: "application", applicationId: null };
                obj2[1] = tmp33;
                channel = 1;
                v0 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = v0(obj2);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = { channel: null, type: "channel" };
            obj[0] = channel;
            ScoreMethod = callback(obj, closure_0);
          }
          if (null != ScoreMethod) {
            v0 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = ScoreMethod;
            return obj5;
          } else {
            const _Error = Error;
            const error = new Error(closure_8);
            throw error;
          }
        } catch (tmp26) {
          v0 = tmp;
          throw tmp26;
        }
      }
    })();
  });
  const _getPrimaryAppCommand = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function queryForPrimaryAppCommand(closure_0, id) {
  let obj = { commandTypes: null };
  const items = [PermissionOverwriteType.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj[0] = items;
  obj = { placeholderCount: 1, scoreMethod: ScoreMethod.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  return closure_7.query(closure_0, obj, obj).commands[0];
}
({ getOrFetchApplicationCommandIndexForTarget: c5, useQueryState: closure_6 } = getIndexKey);
let c8 = "no primary app command for application";
let items = [require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

export default function getPrimaryAppCommand() {
  const self = this;
  const apply = _getPrimaryAppCommand.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const NO_PRIMARY_APP_COMMAND_ERROR = "no primary app command for application";
export { queryForPrimaryAppCommand };
export const useGetPrimaryAppCommand = function useGetPrimaryAppCommand(context, id) {
  const _require = id;
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: _require(loading[5]).ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  const tmp = callback2(context, obj, obj);
  loading = tmp.loading;
  const first = tmp.commands[0];
  let ScoreMethod = tmp3;
  items = [id, null != first, loading];
  const effect = React.useEffect(() => {
    let tmp = c2;
    if (!c2) {
      tmp = loading;
    }
    if (!tmp) {
      let obj = applicationId(loading[6]);
      obj = { type: "application", applicationId: null };
      obj[1] = applicationId;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
    }
  }, items);
  return first;
};
export const useQueryForPrimaryAppCommand = function useQueryForPrimaryAppCommand(arg0, applicationId) {
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: ScoreMethod.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  return callback2(arg0, obj, obj);
};
export const useIsPrimaryAppCommandUsableInAppDM = function useIsPrimaryAppCommandUsableInAppDM(applicationId) {
  let botUserId;
  let context;
  applicationId = applicationId.applicationId;
  let loading;
  let c2;
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: applicationId(loading[5]).ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  ({ context, botUserId } = applicationId);
  const tmp3 = callback2(context, obj, obj);
  loading = tmp3.loading;
  const first = tmp3.commands[0];
  c2 = tmp5;
  items = [applicationId, null != first, loading];
  const effect = React.useEffect(() => {
    let tmp = c2;
    if (!c2) {
      tmp = loading;
    }
    if (!tmp) {
      let obj = applicationId(loading[6]);
      obj = { type: "application", applicationId: null };
      obj[1] = applicationId;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
    }
  }, items);
  let tmp7 = null != first;
  if (tmp7) {
    let tmp8 = null != botUserId;
    if (tmp8) {
      let flag = false;
      if (null != first) {
        let hasItem = null != first.integration_types;
        if (hasItem) {
          const integration_types = first.integration_types;
          hasItem = integration_types.includes(tmp(tmp2[7]).ApplicationIntegrationType.USER_INSTALL);
        }
        let hasItem1 = null != first.contexts;
        if (hasItem1) {
          const contexts = first.contexts;
          hasItem1 = contexts.includes(tmp(tmp2[4]).InteractionContextType.BOT_DM);
        }
        if (hasItem) {
          hasItem = hasItem1;
        }
        flag = hasItem;
      }
      tmp8 = flag;
    }
    tmp7 = tmp8;
  }
  return tmp7;
};
export const isPrimaryAppCommandUsableInAppDM = function isPrimaryAppCommandUsableInAppDM(integration_types) {
  if (null == integration_types) {
    return false;
  } else {
    let hasItem = null != integration_types.integration_types;
    if (hasItem) {
      integration_types = integration_types.integration_types;
      hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
    }
    let hasItem1 = null != integration_types.contexts;
    if (hasItem1) {
      const contexts = integration_types.contexts;
      hasItem1 = contexts.includes(PermissionOverwriteType.InteractionContextType.BOT_DM);
    }
    if (hasItem) {
      hasItem = hasItem1;
    }
    return hasItem;
  }
};