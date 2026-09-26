// === Module 9017: ChannelSettingsPermissionsActionCreators ===

// Module 9017 (ChannelSettingsPermissionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import DefaultChannelThresholdUtils from "DefaultChannelThresholdUtils" /* 9018 */;
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_5 = tmp5;
            closure_4 = tmp2;
            closure_132_0 = closure_1;
            closure_132_1 = closure_2;
            closure_132_2 = closure_3;
            guildId = guildId.getGuildId();
            if (null != guildId) {
              if (closure_1 === guildId) {
                c6 = 1;
                c7 = 1;
                const obj6 = { value: DefaultChannelThresholdUtils.checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp21, closure_3, closure_2), done: false };
                return obj6;
              }
            }
            tmp21 = guildId;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else if (!value) {
          c7 = 3;
          return { value: false, done: true };
        }
        const obj7 = { type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id: closure_132_0, allow: closure_132_1, deny: closure_132_2 };
        closure_133_1(closure_133_2[2]).dispatch(obj7);
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
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id });
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode });
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
      if (0 === length.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (length.length > 0) {
        const arr3 = length.pop();
        if (null == arr3) {
          return chain();
        } else {
          const result = ChannelActionCreatorsDefault.updatePermissionOverwrite(closure_0, arr3);
          result.then(chain, chain);
        }
      } else {
        const arr4 = closure_2.pop();
        if (null == arr4) {
          return chain();
        } else {
          const result1 = ChannelActionCreatorsDefault.clearPermissionOverwrite(closure_0, arr4);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  }).then(() => {
    DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent });
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
      if (0 === length.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (length.length > 0) {
        const arr3 = length.pop();
        if (null == arr3) {
          return chain();
        } else {
          const result = ChannelActionCreatorsDefault.updatePermissionOverwrite(closure_0, arr3);
          result.then(chain, chain);
        }
      } else {
        const arr4 = closure_2.pop();
        if (null == arr4) {
          return chain();
        } else {
          const result1 = ChannelActionCreatorsDefault.clearPermissionOverwrite(closure_0, arr4);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  }).then(() => {
    DispatcherDefault.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent });
  });
};