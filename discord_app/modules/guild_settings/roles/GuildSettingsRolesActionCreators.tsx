// === Module 17139: AsyncFromSyncIterator ===

// Module 17139 (AsyncFromSyncIterator)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;

const require = arg1;
function AsyncFromSyncIterator(arg0) {
  class AsyncFromSyncIterator {
    constructor(arg0) {
      return;
    }
  }
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next() {
      const n = this.n;
      const apply = n.apply;
      const s = this.s;
      if (typeof apply === "unknown") {
        let iter = HermesBuiltin.applyArguments(s);
      } else {
        iter = apply(s, arguments);
      }
      if (Object(iter) !== iter) {
        const _TypeError = TypeError;
        const typeError = new TypeError(iter + " is not an object.");
        let rejectResult = Promise.reject(typeError);
      } else {
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        rejectResult = resolved.then((value) => ({ value, done }));
      }
      return rejectResult;
    },
    return(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value: null, done: true };
        obj[0] = arg0;
        let resolved = Promise.resolve(obj);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          resolved = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved1 = Promise.resolve(iter.value);
          resolved = resolved1.then((value) => ({ value, done }));
        }
      }
      return resolved;
    },
    throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          rejectResult = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved = Promise.resolve(iter.value);
          rejectResult = resolved.then((value) => ({ value, done }));
        }
      }
      return rejectResult;
    }
  };
  return new AsyncFromSyncIterator(arg0);
}
function _saveRoleSettings() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    closure_5 = arg5;
    c20 = 0;
    c21 = 0;
    c18 = 0;
    const iter = (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c21 === 2) {
        c21 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp15 === 3) {
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
          if (arg0 === 1) {
            c21 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            while (true) {
              c18 = 1;
              let tmp17 = closure_17;
              let tmp18 = closure_10;
              if (!closure_10) {
                let tmp20 = closure_16;
                let tmp21 = callback;
                let tmp22 = table;
                let obj2 = callback(table[2]);
                let dispatchResult = obj2.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
                c18 = 0;
                let num3 = 3;
                c21 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                let tmp19 = closure_8;
                throw closure_8;
              }
            }
          } else {
            c18 = 1;
            if (closure_10) {
              throw closure_8;
            } else {
              c18 = 0;
              c21 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
        } catch (tmp24) {
          closure_19 = tmp24;
          if (tmp4 === c18) {
            c21 = tmp3;
            throw tmp24;
          } else if (tmp2 === tmp26) {
            c20 = tmp;
          } else if (tmp === tmp26) {
            c20 = tmp13;
          } else if (tmp3 === tmp26) {
            c20 = tmp12;
          } else if (tmp13 === tmp26) {
            c20 = tmp11;
          } else if (tmp5 === tmp26) {
            c20 = tmp10;
          } else if (tmp12 === tmp26) {
            c20 = tmp9;
          } else if (tmp11 === tmp26) {
            c20 = tmp8;
          } else if (tmp10 === tmp26) {
            c20 = tmp7;
          } else {
            c20 = tmp6;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ComponentActions: c4, DEFAULT_ROLE_COLOR: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx");

export const updateRoleSort = function updateRoleSort(roles) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles };
  obj.dispatch(obj);
};
export const init = function init() {
  dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
};
export const discardSectionChanges = function discardSectionChanges(id, effectiveSection) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const discardConnectionsChanges = function discardConnectionsChanges(id) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES", id };
  obj.dispatch(obj);
};
export const commitSectionChanges = function commitSectionChanges(id, effectiveSection) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const updateRolePermissions = function updateRolePermissions(id, flag, allow) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id, flag, allow };
  obj.dispatch(obj);
};
export const updateRolePermissionSet = function updateRolePermissionSet(id, permissions) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET", id, permissions };
  obj.dispatch(obj);
};
export const clearRolePermissions = function clearRolePermissions(id) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id };
  obj.dispatch(obj);
};
export const updateRoleName = function updateRoleName(id, name) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id, name };
  obj.dispatch(obj);
};
export const updateRoleDescription = function updateRoleDescription(id, description) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION", id, description };
  obj.dispatch(obj);
};
export const updateRoleColor = function updateRoleColor(closure_1, arg1) {
  let tmp = closure_1.color === arg1;
  if (!tmp) {
    let tmp3 = arg1 === closure_5;
    if (tmp3) {
      tmp3 = 0 === closure_1.color;
    }
    tmp = tmp3;
  }
  if (!tmp) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: null, color: null };
    obj[1] = closure_1.id;
    let num2 = 0;
    if (arg1 !== closure_5) {
      num2 = arg1;
    }
    obj[2] = num2;
    obj.dispatch(obj);
  }
};
export const updateRoleColors = function updateRoleColors(closure_2, colors, GRADIENT) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: closure_2, colors, currentStyle: GRADIENT };
  obj.dispatch(obj);
};
export const updateRoleStyles = function updateRoleStyles(closure_2, currentStyle) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: closure_2, currentStyle };
  obj.dispatch(obj);
};
export const toggleRoleSettings = function toggleRoleSettings(id, hoist, mentionable) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id, hoist, mentionable };
  obj.dispatch(obj);
};
export const updateRoleIcon = function updateRoleIcon(id, icon, unicodeEmoji) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id, icon, unicodeEmoji };
  obj.dispatch(obj);
};
export const updateRoleConnectionConfigurations = function updateRoleConnectionConfigurations(id, roleConnectionConfigurations) {
  let obj = dispatcherDefault;
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS", roleId: id, roleConnectionConfigurations };
  obj.dispatch(obj);
};
export const saveRoleSettings = function saveRoleSettings(id, items) {
  const self = this;
  const apply = _saveRoleSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};