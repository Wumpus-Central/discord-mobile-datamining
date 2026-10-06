// === Module 9034: getPrimaryAppCommand ===

// Module 9034 (getPrimaryAppCommand)
import react2 from "react" /* 576 */;
import Server from "Server" /* 1985 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8740 */;
import ApplicationCommandIndexActionCreators from "ApplicationCommandIndexActionCreators" /* 8831 */;
import ApplicationCommandQueryTypes from "ApplicationCommandQueryTypes" /* 8833 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ApplicationCommandIndexStore_mod from "ApplicationCommandIndexStore" /* 8827 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, botUserId, channel, closure_3;

let hasOwnProperty;
let metroRequire;
let obj = function _getPrimaryAppCommand() {
  obj = _asyncToGenerator(async (arg0, applicationId) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_0 = applicationId;
              channel = undefined;
              channel = channel.getChannel(closure_0);
              value = undefined;
              let tmp12 = null != channel;
              if (tmp12) {
                const obj4 = { channel, type: "channel" };
                const tmp11 = queryForPrimaryAppCommand(obj4, applicationId);
                value = tmp11;
                tmp12 = null == tmp11;
              }
              if (tmp12) {
                c4 = 1;
                c5 = 1;
                const obj5 = { type: "application", applicationId };
                const obj6 = { value: closure_2_5(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            obj = { channel, type: "channel" };
            value = closure_131_11(obj, closure_0);
          }
          if (null != value) {
            c5 = 3;
            return { value, done: true };
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(closure_131_8);
            throw error;
          }
        } catch (tmp23) {
          c5 = 3;
          throw tmp23;
        }
      }
    })();
  });
  return obj(...arguments);
};
function queryForPrimaryAppCommand(context, id) {
  const query = ApplicationCommandIndexStore.query;
  obj = { commandTypes: items };
  items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
  const obj2 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId: id, allowFetch: false, allowApplicationState: true };
  return query(context, obj, obj2).commands[0];
}
let ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
({ getOrFetchApplicationCommandIndexForTarget: hasOwnProperty, useQueryState: metroRequire } = ApplicationCommandIndexStore);
ApplicationCommandIndexStore = ApplicationCommandIndexStore_mod;
let c8 = "no primary app command for application";
let items = [Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, applicationId) => {
  let loading;
  _require = applicationId;
  obj = require("react");
  const cResult = obj.c(5);
  const tmp2 = closure_13(arg0, applicationId);
  loading = tmp2.loading;
  const first = tmp2.commands[0];
  let closure_2 = tmp4;
  if (cResult[0] === applicationId) {
    if (cResult[1] === null != first) {
      let tmp5;
      let tmp6;
      if (cResult[2] === loading) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const effect = react.useEffect(tmp5, tmp6);
      return first;
    }
  }
  const fn = function p() {
    const tmp = closure_2 || loading;
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      obj = ApplicationCommandIndexActionCreators;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
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
}) : ((arg0, applicationId) => {
  let tmp = closure_13(arg0, applicationId);
  const loading = tmp.loading;
  const first = tmp.commands[0];
  let closure_2 = tmp3;
  items = [applicationId, null != first, loading];
  const effect = react.useEffect(() => {
    const tmp = closure_2 || loading;
    if (!tmp) {
      const obj2 = { type: "application", applicationId };
      obj = ApplicationCommandIndexActionCreators;
      const applicationCommandIndex = obj.requestApplicationCommandIndex(obj2);
    }
  }, items);
  return first;
});
let closure_12 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((View, applicationId) => {
  let first;
  let tmp6;
  obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { commandTypes: items };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const obj3 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
    cResult[1] = applicationId;
    cResult[2] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[2];
  }
  return metroRequire(View, first, tmp6);
}) : ((View, applicationId) => {
  obj = { commandTypes: items };
  const obj2 = { placeholderCount: 1, scoreMethod: ApplicationCommandQueryTypes.ScoreMethod.COMMAND_ONLY, applicationId, allowFetch: false, allowApplicationState: true };
  return metroRequire(View, obj, obj2);
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((botUserId) => {
  obj = react2;
  const cResult = obj.c(3);
  botUserId = botUserId.botUserId;
  const tmp4 = closure_12(botUserId.context, botUserId.applicationId);
  let tmp5 = null != tmp4;
  if (tmp5) {
    if (cResult[0] === botUserId) {
      let tmp6;
      if (cResult[1] === tmp4) {
        tmp6 = cResult[2];
      }
      tmp5 = tmp6;
    }
    let tmp7 = null != botUserId;
    if (tmp7) {
      let flag = false;
      if (null != tmp4) {
        let hasItem = null != tmp4.integration_types;
        if (hasItem) {
          const integration_types = tmp4.integration_types;
          hasItem = integration_types.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
        }
        let hasItem1 = null != tmp4.contexts;
        if (hasItem1) {
          const contexts = tmp4.contexts;
          hasItem1 = contexts.includes(Server.InteractionContextType.BOT_DM);
        }
        if (hasItem) {
          hasItem = hasItem1;
        }
        flag = hasItem;
      }
      tmp7 = flag;
    }
    cResult[0] = botUserId;
    cResult[1] = tmp4;
    cResult[2] = tmp7;
    tmp6 = tmp7;
  }
  return tmp5;
}) : ((botUserId) => {
  botUserId = botUserId.botUserId;
  const tmp = closure_12(botUserId.context, botUserId.applicationId);
  let tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = null != botUserId;
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
const result = size.fileFinishedImporting("modules/application_commands/getPrimaryAppCommand.tsx");

export default function getPrimaryAppCommand() {
  return obj(...arguments);
};
export const NO_PRIMARY_APP_COMMAND_ERROR = "no primary app command for application";
export { queryForPrimaryAppCommand };
export const useGetPrimaryAppCommand = tmp3;
export const useQueryForPrimaryAppCommand = tmp4;
export const useIsPrimaryAppCommandUsableInAppDM = tmp5;
export { isPrimaryAppCommandUsableInAppDM };