// === Module 9251: ChannelSettingsPermissionsActionCreators ===

// Module 9251 (ChannelSettingsPermissionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import DefaultChannelThresholdUtils from "DefaultChannelThresholdUtils" /* 9252 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, dependencyMap, importDefault;

let obj = function _updatePermission() {
  obj = _asyncToGenerator(async (id, allow, deny, arg3) => {
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj4;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              id = allow;
              allow = deny;
              deny = closure_3;
              const guildId = id.getGuildId();
              const tmp19 = id;
              const tmp20 = allow;
              const tmp21 = deny;
              if (null != guildId) {
                if (tmp20 === guildId) {
                  c6 = 1;
                  c7 = 1;
                  const obj6 = { value: obj4.checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp19, closure_3, tmp21), done: false };
                  obj4 = DefaultChannelThresholdUtils;
                  return obj6;
                }
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else if (!value) {
            c7 = 3;
            return { value: false, done: true };
          }
          const obj7 = { type: "CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION", id, allow, deny };
          const obj2 = closure_133_1(closure_133_2[2]);
          obj2.dispatch(obj7);
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c7 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("actions/ChannelSettingsPermissionsActionCreators.tsx");

export const updatePermission = function updatePermission() {
  return obj(...arguments);
};
export const selectPermission = function selectPermission(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION", id };
  obj.dispatch(obj2);
};
export const setAdvancedMode = function setAdvancedMode(advancedMode) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE", advancedMode };
  obj.dispatch(obj2);
};
export const init = function init() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_INIT" });
};
export const savePermissionUpdates = function savePermissionUpdates(id, items, silent) {
  let closure_2;
  let closure_0 = id;
  importDefault = items;
  dependencyMap = [];
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    function chain() {
      if (0 === chain.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (chain.length > 0) {
        const arr3 = chain.pop();
        if (null == arr3) {
          return chain();
        } else {
          const obj2 = ChannelActionCreatorsDefault;
          const result = obj2.updatePermissionOverwrite(closure_0, arr3);
          result.then(chain, chain);
        }
      } else {
        const arr4 = closure_2.pop();
        if (null == arr4) {
          return chain();
        } else {
          obj = ChannelActionCreatorsDefault;
          const result1 = obj.clearPermissionOverwrite(closure_0, arr4);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  });
  return promise.then(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent };
    obj.dispatch(obj2);
  });
};
export const saveAndClearPermissionUpdates = function saveAndClearPermissionUpdates(arg0, arg1, arg2, arg3) {
  let closure_1;
  let closure_2;
  let closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let closure_3 = arg3;
  obj = DispatcherDefault;
  obj.dispatch({ type: "CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING" });
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    function chain() {
      if (0 === chain.length) {
        if (0 === closure_2.length) {
          return closure_0();
        }
      }
      if (chain.length > 0) {
        const arr3 = chain.pop();
        if (null == arr3) {
          return chain();
        } else {
          const obj2 = ChannelActionCreatorsDefault;
          const result = obj2.updatePermissionOverwrite(closure_0, arr3);
          result.then(chain, chain);
        }
      } else {
        const arr4 = closure_2.pop();
        if (null == arr4) {
          return chain();
        } else {
          obj = ChannelActionCreatorsDefault;
          const result1 = obj.clearPermissionOverwrite(closure_0, arr4);
          result1.then(chain, chain);
        }
      }
    }
    !chain();
  });
  return promise.then(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS", silent };
    obj.dispatch(obj2);
  });
};