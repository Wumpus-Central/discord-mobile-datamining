// discord_app/actions/ChannelSettingsPermissionsActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function _updatePermission() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let asyncGeneratorStep = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
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
              let closure_5 = tmp5;
              let closure_4 = tmp2;
              let guildId = callback;
              callback = dependencyMap;
              dependencyMap = asyncGeneratorStep;
              guildId = guildId.getGuildId();
              if (null != guildId) {
                if (tmp23 === guildId) {
                  c6 = 1;
                  c7 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = guildId(8921).checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp22, tmp25, tmp24);
                  return obj1;
                }
              }
              tmp22 = guildId;
              tmp23 = callback;
              tmp24 = dependencyMap;
              tmp25 = asyncGeneratorStep;
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
          obj1 = callback(709);
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
  const _updatePermission = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("dispatcher").fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission(outer1_0, id, addResult, deny) {
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
  let obj = importDefault(709);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  let obj = importDefault(709);
  obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj);
};
export const init = function init() {
  importDefault(709).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, arg2) {
  let closure_0 = id;
  const importDefault = items;
  const dependencyMap = [];
  let asyncGeneratorStep = arg2;
  importDefault(709).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  let obj = importDefault(709);
  return new Promise((arg0) => {
    let closure_0 = arg0;
    function chain() {
      let arr = chain;
      if (0 === chain.length) {
        if (0 === outer1_2.length) {
          return callback();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(4295).updatePermissionOverwrite(callback, arr);
          result.then(chain, chain);
          const obj2 = chain(4295);
        }
      } else {
        arr = outer1_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(4295).clearPermissionOverwrite(callback, arr);
          result1.then(chain, chain);
          const obj = chain(4295);
        }
      }
    }
    !chain();
  }).then(() => {
    let obj = items(table[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: asyncGeneratorStep };
    obj.dispatch(obj);
  });
};
export const saveAndClearPermissionUpdates = function saveAndClearPermissionUpdates(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let asyncGeneratorStep = arg3;
  importDefault(709).dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  const obj = importDefault(709);
  return new Promise((arg0) => {
    let closure_0 = arg0;
    function chain() {
      let arr = chain;
      if (0 === chain.length) {
        if (0 === outer1_2.length) {
          return callback();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = chain(4295).updatePermissionOverwrite(callback, arr);
          result.then(chain, chain);
          const obj2 = chain(4295);
        }
      } else {
        arr = outer1_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = chain(4295).clearPermissionOverwrite(callback, arr);
          result1.then(chain, chain);
          const obj = chain(4295);
        }
      }
    }
    !chain();
  }).then(() => {
    let obj = items(table[2]);
    obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent: asyncGeneratorStep };
    obj.dispatch(obj);
  });
};