// === Module 10859: getPrimaryAppCommand ===

// Module 10859 (getPrimaryAppCommand)
import c from "c" /* 576 */;
import Server from "Server" /* 1998 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9234 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 9251 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 9253 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore" /* 9247 */;

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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
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
            const obj3 = { value, done: true };
            return obj3;
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
              const obj4 = { channel, type: "channel" };
              const tmp12 = queryForPrimaryAppCommand(obj4, applicationId);
              closure_130_2 = tmp12;
              tmp13 = null == tmp12;
            }
            if (tmp13) {
              const obj5 = { type: "application", applicationId };
              c4 = 1;
              c5 = 1;
              const obj6 = { value: closure_2_5(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          const obj = { channel: closure_130_1, type: "channel" };
          closure_130_2 = closure_131_11(obj, closure_130_0);
        }
        if (null != closure_130_2) {
          c5 = 3;
          const obj8 = { value: closure_130_2, done: true };
          return obj8;
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
function queryForPrimaryAppCommand(context, id) {
  const obj = { commandTypes: null };
  items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items;
  return ApplicationCommandIndexStore.query(context, obj, { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true }).commands[0];
}
let ApplicationCommandIndexStore = fn(9247);
({ getOrFetchApplicationCommandIndexForTarget: hasOwnProperty, useQueryState: metroRequire } = ApplicationCommandIndexStore);
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
let c8 = "no primary app command for application";
let items = [fn(1998).ApplicationCommandType.PRIMARY_ENTRY_POINT];
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetPrimaryAppCommand(arg0, applicationId) {
  _require = applicationId;
  const cResult = require("c").c(5);
  const tmp2 = closure_13(arg0, applicationId);
  loading = tmp2.loading;
  const first = tmp2.commands[0];
  closure_2 = tmp4;
  if (cResult[0] === applicationId) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === loading) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      return first;
    }
  }
  const fn = function t() {
    let tmp = closure_2;
    if (!closure_2) {
      tmp = loading;
    }
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj2);
    }
  };
  items = [applicationId, null != first, loading];
  cResult[0] = applicationId;
  cResult[1] = null != first;
  cResult[2] = loading;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
  let obj = require("c");
}) : (function useGetPrimaryAppCommand(arg0, applicationId) {
  let tmp = closure_13(arg0, applicationId);
  const loading = tmp.loading;
  const first = tmp.commands[0];
  closure_2 = tmp3;
  items = [applicationId, null != first, loading];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (!closure_2) {
      tmp = loading;
    }
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      const applicationCommandIndex = ApplicationCommandIndexActionCreators.requestApplicationCommandIndex(obj2);
    }
  }, items);
  return first;
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQueryForPrimaryAppCommand(arg0, applicationId) {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { commandTypes: items };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const obj3 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
    cResult[1] = applicationId;
    cResult[2] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  return timestampProducer(arg0, first, tmp6);
}) : (function useQueryForPrimaryAppCommand(arg0, applicationId) {
  return timestampProducer(arg0, { commandTypes: items }, { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true });
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
function isPrimaryAppCommandUsableInAppDM(integration_types) {
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
}
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
export const useGetPrimaryAppCommand = tmp3;
export const useQueryForPrimaryAppCommand = tmp4;
export const useIsPrimaryAppCommandUsableInAppDM = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPrimaryAppCommandUsableInAppDM(botUserId) {
  let BOT_DM = dependencyMap;
  const cResult = c.c(3);
  botUserId = botUserId.botUserId;
  const tmp3 = closure_12(botUserId.context, botUserId.applicationId);
  if (null == tmp3) {
    return tmp4;
  } else {
    if (cResult[0] === botUserId) {
    }
    let tmp6 = null != botUserId;
    if (tmp6) {
      let flag = false;
      if (null != tmp3) {
        let hasItem = null != tmp3.integration_types;
        if (hasItem) {
          const integration_types = tmp3.integration_types;
          hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
        }
        let hasItem1 = null != tmp3.contexts;
        if (hasItem1) {
          const contexts = tmp3.contexts;
          BOT_DM = Server.InteractionContextType.BOT_DM;
          hasItem1 = contexts.includes(BOT_DM);
        }
        if (hasItem) {
          hasItem = hasItem1;
        }
        flag = hasItem;
      }
      tmp6 = flag;
    }
    cResult[0] = botUserId;
    cResult[1] = tmp3;
    cResult[2] = tmp6;
  }
}) : (function useIsPrimaryAppCommandUsableInAppDM(context) {
  const tmp = closure_12(context.context, context.applicationId);
  let tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = null != context.botUserId;
    if (tmp3) {
      let flag = false;
      if (null != tmp) {
        let hasItem = null != tmp.integration_types;
        if (hasItem) {
          const integration_types = tmp.integration_types;
          hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
        }
        let hasItem1 = null != tmp.contexts;
        if (hasItem1) {
          const contexts = tmp.contexts;
          hasItem1 = contexts.includes(Server.InteractionContextType.BOT_DM);
        }
        if (hasItem) {
          hasItem = hasItem1;
        }
        flag = hasItem;
      }
      tmp3 = flag;
    }
    tmp2 = tmp3;
  }
  return tmp2;
});
export { isPrimaryAppCommandUsableInAppDM };