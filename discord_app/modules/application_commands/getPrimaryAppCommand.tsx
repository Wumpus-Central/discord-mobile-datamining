// === Module 9571: getPrimaryAppCommand ===

// Module 9571 (getPrimaryAppCommand)
import Server from "Server" /* 1894 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9245 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 9294 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9298 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9290 */;

require = fn;
let closure_10 = async function _getPrimaryAppCommand(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = applicationId;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            channel = channel.getChannel(closure_0);
            closure_130_1 = channel;
            closure_130_2 = undefined;
            let tmp13 = null != channel;
            if (tmp13) {
              const obj1 = { channel, type: "channel" };
              const tmp12 = queryForPrimaryAppCommand(obj1, applicationId);
              closure_130_2 = tmp12;
              tmp13 = null == tmp12;
            }
            if (tmp13) {
              const obj2 = { type: "application", applicationId };
              c4 = 1;
              c5 = 1;
              const obj3 = { value: closure_2_5(obj2), done: false };
              return obj3;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          obj = { channel: closure_130_1, type: "channel" };
          closure_130_2 = closure_131_11(obj, closure_130_0);
        }
        if (null != closure_130_2) {
          c5 = 3;
          const obj5 = { value: closure_130_2, done: true };
          return obj5;
        } else {
          const _Error = Error;
          const error = new Error(closure_131_8);
          throw error;
        }
      } catch (tmp26) {
        c5 = tmp;
        throw tmp26;
      }
    }
  })();
};
function queryForPrimaryAppCommand(withAffinitySuggestions, id) {
  let obj = { commandTypes: null };
  items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items;
  obj = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  return ApplicationCommandIndexStore.query(withAffinitySuggestions, obj, obj).commands[0];
}
let ApplicationCommandIndexStore = fn(9290);
({ getOrFetchApplicationCommandIndexForTarget: hasOwnProperty, useQueryState: metroRequire } = ApplicationCommandIndexStore);
let c8 = "no primary app command for application";
let items = [fn(1894).ApplicationCommandType.PRIMARY_ENTRY_POINT];
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

export default function getPrimaryAppCommand() {
  const self = this;
  const apply = closure_10.apply;
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
  _require = id;
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: require("ApplicationCommandQueryTypes").ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  const tmp = closure_6(context, obj, obj);
  loading = tmp.loading;
  const first = tmp.commands[0];
  closure_2 = tmp3;
  items = [id, null != first, loading];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (!closure_2) {
      tmp = loading;
    }
    if (!tmp) {
      const obj = { type: "application", applicationId };
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj);
    }
  }, items);
  return first;
};
export const useQueryForPrimaryAppCommand = function useQueryForPrimaryAppCommand(arg0, applicationId) {
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  return timestampProducer(arg0, obj, obj);
};
export const useIsPrimaryAppCommandUsableInAppDM = function useIsPrimaryAppCommandUsableInAppDM(applicationId) {
  applicationId = applicationId.applicationId;
  let loading;
  let obj = { commandTypes: items };
  obj = { placeholderCount: 1, scoreMethod: applicationId(loading[5]).ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  ({ context, botUserId } = applicationId);
  const tmp3 = closure_6(context, obj, obj);
  loading = tmp3.loading;
  const first = tmp3.commands[0];
  closure_2 = tmp5;
  items = [applicationId, null != first, loading];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (!closure_2) {
      tmp = loading;
    }
    if (!tmp) {
      const obj = { type: "application", applicationId };
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
      hasItem1 = contexts.includes(Server.InteractionContextType.BOT_DM);
    }
    if (hasItem) {
      hasItem = hasItem1;
    }
    return hasItem;
  }
};