// discord_app/actions/ChannelSettingsPermissionsActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function _updatePermission() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function* (arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp5;
              closure_4 = tmp2;
              let guildId = callback;
              callback = dependencyMap;
              dependencyMap = closure_3;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                if (tmp23 === guildId) {
                  c6 = 1;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = guildId(9727).checkChattableChannelThresholdMetAfterChannelPermissionDeny(
                    tmp22,
                    tmp25,
                    tmp24,
                  );
                  return obj1;
                }
              }
              tmp22 = guildId;
              tmp23 = callback;
              tmp24 = dependencyMap;
              tmp25 = closure_3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (!arg1) {
            c7 = 3;
            return { value: false, done: true };
          }
          obj1 = callback(706);
          const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id: null, allow: null, deny: null };
          obj2[1] = guildId;
          obj2[2] = callback;
          obj2[3] = dependencyMap;
          obj1.dispatch(obj2);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp16) {
          c7 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission(closure_1_0, id, addResult, deny) {
  const self = this;
  const apply = _updatePermission.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectPermission = function selectPermission(id) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  let obj = dispatcherDefault;
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj);
};
export const init = function init() {
  dispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, arg2) {
  closure_0 = id;
  importDefault = items;
  dependencyMap = [];
  closure_3 = arg2;
  dispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  let obj = dispatcherDefault;
  return new Promise((arg0) => {
    closure_0 = arg0;
    function chain() {
      let arr = chain;
      if (0 === chain.length) {
        if (0 === closure_1_2.length) {
          return callback();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(4491).updatePermissionOverwrite(callback, arr);
          result.then(chain, chain);
          const obj2 = chain(4491);
        }
      } else {
        arr = closure_1_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(4491).clearPermissionOverwrite(callback, arr);
          result1.then(chain, chain);
          const obj = chain(4491);
        }
      }
    }
    !chain();
  }).then(() => {
    let obj = items(table[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: closure_3 };
    obj.dispatch(obj);
  });
};
export const saveAndClearPermissionUpdates = function saveAndClearPermissionUpdates(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  dispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  const obj = dispatcherDefault;
  return new Promise((arg0) => {
    closure_0 = arg0;
    function chain() {
      let arr = chain;
      if (0 === chain.length) {
        if (0 === closure_1_2.length) {
          return callback();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(4491).updatePermissionOverwrite(callback, arr);
          result.then(chain, chain);
          const obj2 = chain(4491);
        }
      } else {
        arr = closure_1_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(4491).clearPermissionOverwrite(callback, arr);
          result1.then(chain, chain);
          const obj = chain(4491);
        }
      }
    }
    !chain();
  }).then(() => {
    let obj = items(table[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: closure_3 };
    obj.dispatch(obj);
  });
};
