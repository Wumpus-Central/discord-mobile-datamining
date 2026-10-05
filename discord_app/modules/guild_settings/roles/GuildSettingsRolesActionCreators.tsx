// discord_app/modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_15, closure_16, closure_17, closure_19, closure_7, closure_8, first1, value2, value3, value4;

let closure_4;
let hasOwnProperty;
function AsyncFromSyncIterator(arg0) {
  class AsyncFromSyncIterator {
    constructor(arg0) {}
  }
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next() {
      let rejectResult;
      const n = this.n;
      const iter = n(...arguments);
      if (Object(iter) !== iter) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError(iter + " is not an object.");
        rejectResult = reject(typeError);
      } else {
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        rejectResult = resolved.then((value) => ({ value, done }));
      }
      return rejectResult;
    },
    return: function (value) {
      let resolved;
      const _return = this.s.return;
      if (undefined === _return) {
        obj = { value, done: true };
        resolved = Promise.resolve(obj);
      } else {
        const iter = _return(...arguments);
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(iter + " is not an object.");
          resolved = reject(typeError);
        } else {
          const done = iter.done;
          const resolved1 = Promise.resolve(iter.value);
          resolved = resolved1.then((value) => ({ value, done }));
        }
      }
      return resolved;
    },
    throw: function (arg0) {
      let rejectResult;
      const _return = this.s.return;
      if (undefined === _return) {
        rejectResult = Promise.reject(arg0);
      } else {
        const iter = _return(...arguments);
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError(iter + " is not an object.");
          rejectResult = reject(typeError);
        } else {
          const done = iter.done;
          const resolved = Promise.resolve(iter.value);
          rejectResult = resolved.then((value) => ({ value, done }));
        }
      }
      return rejectResult;
    },
  };
  const tmp = new AsyncFromSyncIterator(arg0);
  return tmp;
}
let obj = function _saveRoleSettings() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const length = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let closure_5 = arg5;
    let c20 = 0;
    let c21 = 0;
    let c18 = 0;
    const iter = (async (arg0, value, arg2, arg3, arg4) => {
      let obj21;
      let tmp;
      let tmp5;
      let tmp8;
      function _asyncIterator(arg0) {
        let str;
        let str2;
        if (typeof Symbol !== "undefined") {
          const _Symbol = Symbol;
          str2 = Symbol.asyncIterator;
          const _Symbol2 = Symbol;
          str = Symbol.iterator;
        }
        let num = 1;
        while (true) {
          let tmp = num;
          if (str2) {
            if (null != arg0[str2]) {
              break;
            }
          }
          if (str) {
            let obj2 = arg0[str];
            if (null != obj2) {
              let callResult = obj2.call(arg0);
              let self3 = this;
              let self4 = this;
              let tmp62 = new first1(callResult);
              return tmp62;
            }
          }
          num = num - 1;
          str = "@@iterator";
          str2 = "@@asyncIterator";
          if (tmp) {
            continue;
          } else {
            let _TypeError = TypeError;
            let self = this;
            let str3 = "Object is not async iterable";
            let self2 = this;
            let typeError = new TypeError("Object is not async iterable");
            throw typeError;
          }
        }
        return obj.call(arg0);
      }
      if (c21 === 2) {
        c21 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj4;
          let sorted;
          let c7;
          let value5;
          let closure_14;
          let num = 2;
          c21 = 2;
          switch (c20) {
            case 0: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c21 = 3;
                return { value, done: true };
              } else {
                closure_16 = tmp;
                closure_17 = tmp5;
                obj4 = closure_5;
                if (closure_5 === undefined) {
                  obj4 = {};
                }
                sorted = undefined;
                c7 = undefined;
                closure_8 = undefined;
                description = undefined;
                colors = undefined;
                value = undefined;
                value2 = undefined;
                value5 = undefined;
                closure_14 = undefined;
                c20 = 1;
                c21 = 1;
                return { value: "Set", done: true };
              }
              break;
            }
            case 1: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c21 = 3;
                return { value, done: true };
              } else {
                const obj28 = closure_144_1(closure_144_2[2]);
                obj28.dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
                c18 = 1;
                const tmp125 = null != length && length.length > 0;
                if (tmp125) {
                  c20 = 3;
                  c21 = 1;
                  const obj6 = { value: obj21.batchRoleUpdate(closure_0, length), done: false };
                  obj21 = closure_144_1(closure_144_2[3]);
                  return obj6;
                } else {
                  if (null != closure_1) {
                    const items = [];
                    HermesBuiltin.arraySpread(items, closure_1, 0);
                    sorted = items.sort((name, name2) => {
                      const str = name.name;
                      const str2 = name2.name;
                      const NumberResult = Number("" !== str.trim());
                      return NumberResult - Number("" !== str2.trim());
                    });
                  } else {
                    sorted = [];
                  }
                  closure_8 = sorted;
                  closure_7 = sorted[Symbol.iterator]();
                  if (closure_7 === undefined) {
                    if (null != closure_4) {
                      if (null != closure_3) {
                        description = false;
                        colors = false;
                        c18 = 5;
                        value2 = _asyncIterator(closure_3);
                        c20 = 9;
                        c21 = 1;
                        const obj7 = { value: value2.next(), done: false };
                        return obj7;
                      }
                    }
                    const obj19 = closure_144_1(closure_144_2[2]);
                    obj19.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
                    c18 = 0;
                    c21 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c18 = 2;
                    c7 = tmp137;
                    const obj8 = {
                      name: c7.name,
                      description,
                      permissions: c7.permissions,
                      color: c7.color,
                      colors,
                      hoist: c7.hoist,
                      mentionable: c7.mentionable,
                      icon: c7.icon,
                      unicodeEmoji: c7.unicodeEmoji,
                    };
                    description = c7.description;
                    const updateRole = closure_144_1(closure_144_2[3]).updateRole;
                    const id = c7.id;
                    closure_144_1(closure_144_2[3]);
                    if (description == null) {
                      description = undefined;
                    }
                    colors = c7.colors ?? undefined;
                    c20 = 5;
                    c21 = 1;
                    const obj9 = { value: updateRole(closure_0, id, obj8), done: false };
                    return obj9;
                  }
                }
              }
              break;
            }
            case 2: {
              c18 = 0;
              closure_15 = closure_19;
              const body = closure_15.body;
              let message;
              const dispatch = closure_144_1(closure_144_2[2]).dispatch;
              closure_144_1(closure_144_2[2]);
              if (body != null) {
                message = body.message;
              }
              first1 = message;
              if (message == null) {
                const _Object = Object;
                const first = Object.values(closure_15.body)[0];
                first1 = undefined;
                if (first != null) {
                  first1 = first[0];
                }
              }
              const obj10 = { type: "GUILD_SETTINGS_ROLES_SAVE_FAIL", message: first1 };
              dispatch(obj10);
              const ComponentDispatch = closure_144_0(closure_144_2[5]).ComponentDispatch;
              ComponentDispatch.dispatch(closure_144_4.EMPHASIZE_NOTICE);
              if (obj4.throwErr) {
                throw closure_15;
              }
              break;
            }
            case 3: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 0;
                c21 = 3;
                return { value, done: true };
              }
              break;
            }
            case 4: {
              c18 = 1;
              closure_7.return();
              throw closure_19;
            }
            case 5: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                closure_7.return();
                c18 = 0;
                c21 = 3;
                return { value, done: true };
              } else {
                c18 = 1;
              }
              break;
            }
            case 6: {
              closure_15 = closure_19;
              c18 = 4;
              const tmp91 = description && null != value2.return;
              if (!tmp91) {
                c18 = 1;
                const tmp167 = colors;
                if (tmp167) {
                  throw closure_8;
                } else {
                  throw closure_15;
                }
              } else {
                c20 = 20;
                c21 = 1;
                const obj13 = { value: value2.return(), done: false };
                return obj13;
              }
              break;
            }
            case 7: {
              c18 = 1;
              const tmp86 = colors;
              if (tmp86) {
                throw closure_8;
              } else {
                throw tmp84;
              }
              break;
            }
            case 8: {
              colors = true;
              closure_8 = closure_19;
              c18 = 9;
              const tmp76 = description && null != value2.return;
              if (tmp76) {
                c20 = 19;
                c21 = 1;
                const obj14 = { value: value2.return(), done: false };
                return obj14;
              } else {
                c18 = 1;
                const tmp79 = colors;
                if (tmp79) {
                  throw closure_8;
                }
              }
              break;
            }
            case 9: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else {
                value4 = value;
                if (arg0 === 2) {
                  c18 = 6;
                  const tmp64 = description && null != value2.return;
                  if (tmp64) {
                    c20 = 12;
                    c21 = 1;
                    const obj15 = { value: value2.return(), done: false };
                    return obj15;
                  } else {
                    c18 = 1;
                    const tmp67 = colors;
                    if (tmp67) {
                      throw closure_8;
                    } else {
                      c18 = 0;
                      c21 = 3;
                      return { value: value4, done: true };
                    }
                  }
                } else {
                  const done2 = value.done;
                  description = !done2;
                  if (done2) {
                    c18 = 3;
                  } else {
                    value5 = value.value;
                    closure_14 = closure_4.get(value5);
                    value = closure_14;
                    const putRoleConnectionsConfigurations = closure_144_0(
                      closure_144_2[4],
                    ).putRoleConnectionsConfigurations;
                    closure_144_0(closure_144_2[4]);
                    const tmp60 = value5;
                    if (closure_14 == null) {
                      value = [];
                    }
                    let tmp62 = value;
                    c20 = 15;
                    c21 = 1;
                    const obj17 = { value: putRoleConnectionsConfigurations(closure_0, tmp60, value), done: false };
                    return obj17;
                  }
                }
              }
              break;
            }
            case 10: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else {
                value3 = value;
                if (arg0 === 2) {
                  c18 = 7;
                  const tmp43 = description && null != value2.return;
                  if (tmp43) {
                    c20 = 14;
                    c21 = 1;
                    const obj18 = { value: value2.return(), done: false };
                    return obj18;
                  } else {
                    c18 = 1;
                    const tmp46 = colors;
                    if (tmp46) {
                      throw closure_8;
                    } else {
                      c18 = 0;
                      c21 = 3;
                      return { value: value3, done: true };
                    }
                  }
                } else {
                  const done = value.done;
                  description = !done;
                }
              }
              break;
            }
            case 11: {
              c18 = 1;
              const tmp39 = colors;
              if (tmp39) {
                throw closure_8;
              } else {
                throw tmp37;
              }
              break;
            }
            case 12: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 1;
                const tmp188 = colors;
                if (tmp188) {
                  throw closure_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 13: {
              c18 = 1;
              const tmp33 = colors;
              if (tmp33) {
                throw closure_8;
              } else {
                throw tmp31;
              }
              break;
            }
            case 14: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 1;
                const tmp186 = colors;
                if (tmp186) {
                  throw closure_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 15: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else {
                value2 = value;
                if (arg0 === 2) {
                  c18 = 8;
                  const tmp21 = description && null != value2.return;
                  if (tmp21) {
                    c20 = 17;
                    c21 = 1;
                    const obj24 = { value: value2.return(), done: false };
                    return obj24;
                  } else {
                    c18 = 1;
                    const tmp24 = colors;
                    if (tmp24) {
                      throw closure_8;
                    } else {
                      c18 = 0;
                      c21 = 3;
                      return { value: value2, done: true };
                    }
                  }
                } else {
                  description = false;
                  c20 = 10;
                  c21 = 1;
                  const obj26 = { value: value2.next(), done: false };
                  return obj26;
                }
              }
              break;
            }
            case 16: {
              c18 = 1;
              const tmp16 = colors;
              if (tmp16) {
                throw closure_8;
              } else {
                throw tmp14;
              }
              break;
            }
            case 17: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 1;
                const tmp184 = colors;
                if (tmp184) {
                  throw closure_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
            case 18: {
              c18 = 1;
              let tmp10 = colors;
              if (tmp10) {
                throw closure_8;
              } else {
                throw tmp8;
              }
              break;
            }
            case 19: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 1;
                const tmp182 = colors;
                if (tmp182) {
                  throw closure_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  obj = { value, done: true };
                  return obj;
                }
              }
              break;
            }
            default: {
              if (arg0 === 1) {
                c21 = 3;
                throw value;
              } else if (arg0 === 2) {
                c18 = 1;
                const tmp171 = colors;
                if (tmp171) {
                  throw closure_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  return { value, done: true };
                }
              }
              break;
            }
          }
        } catch (tmp173) {
          closure_19 = tmp173;
          if (0 === c18) {
            c21 = 3;
            throw tmp173;
          } else if (1 === c18) {
            c20 = 2;
          } else if (2 === c18) {
            c20 = 4;
          } else if (3 === c18) {
            c20 = 6;
          } else if (4 === c18) {
            c20 = 7;
          } else if (5 === c18) {
            c20 = 8;
          } else if (6 === c18) {
            c20 = 11;
          } else if (7 === c18) {
            c20 = 13;
          } else if (8 === c18) {
            c20 = 16;
          } else {
            c20 = 18;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ ComponentActions: closure_4, DEFAULT_ROLE_COLOR: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx");

export const updateRoleSort = function updateRoleSort(roles) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles };
  obj.dispatch(obj2);
};
export const init = function init() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
};
export const discardSectionChanges = function discardSectionChanges(id, effectiveSection) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj2);
};
export const discardConnectionsChanges = function discardConnectionsChanges(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES", id };
  obj.dispatch(obj2);
};
export const commitSectionChanges = function commitSectionChanges(id, effectiveSection) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj2);
};
export const updateRolePermissions = function updateRolePermissions(id, flag, allow) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id, flag, allow };
  obj.dispatch(obj2);
};
export const updateRolePermissionSet = function updateRolePermissionSet(id, permissions) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET", id, permissions };
  obj.dispatch(obj2);
};
export const clearRolePermissions = function clearRolePermissions(id) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id };
  obj.dispatch(obj2);
};
export const updateRoleName = function updateRoleName(id, name) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id, name };
  obj.dispatch(obj2);
};
export const updateRoleDescription = function updateRoleDescription(id, description) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION", id, description };
  obj.dispatch(obj2);
};
export const updateRoleColor = function updateRoleColor(color, arg1) {
  let num2;
  let tmp = color.color === arg1;
  if (!tmp) {
    tmp = arg1 === hasOwnProperty && 0 === color.color;
    const tmp3 = arg1 === hasOwnProperty && 0 === color.color;
  }
  if (!tmp) {
    obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: color.id, color: num2 };
    num2 = 0;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (arg1 !== hasOwnProperty) {
      num2 = arg1;
    }
    dispatch(obj);
  }
};
export const updateRoleColors = function updateRoleColors(id, colors, GRADIENT) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id, colors, currentStyle: GRADIENT };
  obj.dispatch(obj2);
};
export const updateRoleStyles = function updateRoleStyles(id, currentStyle) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id, currentStyle };
  obj.dispatch(obj2);
};
export const toggleRoleSettings = function toggleRoleSettings(id, hoist, mentionable) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id, hoist, mentionable };
  obj.dispatch(obj2);
};
export const updateRoleIcon = function updateRoleIcon(roleId, base64, unicodeEmoji) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id: roleId, icon: base64, unicodeEmoji };
  obj.dispatch(obj2);
};
export const updateRoleConnectionConfigurations = function updateRoleConnectionConfigurations(id, values2) {
  obj = DispatcherDefault;
  const obj2 = {
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: id,
    roleConnectionConfigurations: values2,
  };
  obj.dispatch(obj2);
};
export const saveRoleSettings = function saveRoleSettings() {
  return obj(...arguments);
};
