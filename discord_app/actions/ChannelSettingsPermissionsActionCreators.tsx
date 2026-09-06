// === Module 9739: ChannelSettingsPermissionsActionCreators ===

// Module 9739 (ChannelSettingsPermissionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import DefaultChannelThresholdUtils from "DefaultChannelThresholdUtils" /* 9740 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _updatePermission(arg0, arg1, arg2, arg3) {
  let guildId = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp5;
            closure_4 = tmp2;
            closure_132_0 = closure_1;
            closure_132_1 = closure_2;
            closure_132_2 = closure_3;
            guildId = guildId.getGuildId();
            if (null != guildId) {
              if (tmp22 === guildId) {
                c6 = 1;
                c7 = 1;
                let obj1 = { value: DefaultChannelThresholdUtils.checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp21, tmp24, tmp23), done: false };
                return obj1;
              }
            }
            tmp21 = guildId;
            tmp22 = closure_1;
            tmp23 = closure_2;
            tmp24 = closure_3;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          c7 = 3;
          return { value: false, done: true };
        }
        obj1 = closure_133_1(closure_133_2[2]);
        const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id: closure_132_0, allow: closure_132_1, deny: closure_132_2 };
        obj1.dispatch(obj2);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp16) {
        c7 = tmp;
        throw tmp16;
      }
    }
  })();
};
const size = fn(2);
let result = size.fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectPermission = function selectPermission(id) {
  const obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  const obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj);
};
export const init = function init() {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, silent) {
  closure_0 = id;
  importDefault = items;
  dependencyMap = [];
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  return new Promise((arg0) => {
    closure_0 = arg0;
    function chain() {
      let arr = length;
      if (0 === length.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = ChannelActionCreatorsDefault.updatePermissionOverwrite(closure_0, arr);
          result.then(chain, chain);
        }
      } else {
        arr = closure_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = ChannelActionCreatorsDefault.clearPermissionOverwrite(closure_0, arr);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  }).then(() => {
    const obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent };
    obj.dispatch(obj);
  });
};
export const saveAndClearPermissionUpdates = function saveAndClearPermissionUpdates(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  closure_3 = arg3;
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  return new Promise((arg0) => {
    closure_0 = arg0;
    function chain() {
      let arr = length;
      if (0 === length.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (arr.length > 0) {
        arr = arr.pop();
        if (null == arr) {
          return chain();
        } else {
          const result = ChannelActionCreatorsDefault.updatePermissionOverwrite(closure_0, arr);
          result.then(chain, chain);
        }
      } else {
        arr = closure_2.pop();
        if (null == arr) {
          return chain();
        } else {
          const result1 = ChannelActionCreatorsDefault.clearPermissionOverwrite(closure_0, arr);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  }).then(() => {
    const obj = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent };
    obj.dispatch(obj);
  });
};