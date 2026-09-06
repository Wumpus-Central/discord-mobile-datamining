// discord_app/modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
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
    return(value) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value, done: true };
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
    },
  };
  return new AsyncFromSyncIterator(arg0);
}
let closure_7 = async function _saveRoleSettings(arg0) {
  closure_0 = arg0;
  closure_1 = value;
  closure_2 = arg2;
  closure_3 = arg3;
  closure_4 = arg4;
  closure_5 = arg5;
  c20 = 0;
  c21 = 0;
  c18 = 0;
  let iter = (async (arg0, value, arg2, arg3, arg4) => {
    if (c21 === 2) {
      c21 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp16 === 3) {
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
        c21 = 2;
        switch (c20) {
          case 0:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c21 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_16 = tmp4;
              closure_17 = tmp17;
              closure_145_5 = undefined;
              closure_145_0 = closure_0;
              closure_145_1 = closure_1;
              closure_145_2 = closure_2;
              closure_145_3 = closure_3;
              closure_145_4 = closure_4;
              let obj1 = closure_5;
              if (closure_5 === undefined) {
                obj1 = {};
              }
              closure_145_5 = obj1;
              closure_145_6 = undefined;
              closure_145_7 = undefined;
              closure_145_8 = undefined;
              closure_145_9 = undefined;
              closure_145_10 = undefined;
              closure_145_11 = undefined;
              closure_145_12 = undefined;
              let value4;
              closure_145_14 = undefined;
              c20 = 1;
              c21 = 1;
              return { value: "PX_16", done: true };
            }
            break;
          case 1:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c21 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_144_1(closure_144_2[2]).dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
              c18 = 1;
              let tmp135 = null != closure_145_2;
              if (tmp135) {
                tmp135 = closure_145_2.length > 0;
              }
              if (tmp135) {
                let obj22 = closure_144_1(closure_144_2[3]);
                c20 = 3;
                c21 = 1;
                const obj3 = { value: obj22.batchRoleUpdate(closure_145_0, closure_145_2), done: false };
                return obj3;
              } else {
                if (null != closure_145_1) {
                  const items = [];
                  HermesBuiltin.arraySpread(closure_145_1, 0);
                  let sorted = items.sort(
                    (name, name2) => Number("" !== name.name.trim()) - Number("" !== name2.name.trim()),
                  );
                } else {
                  sorted = [];
                }
                closure_145_6 = sorted;
                closure_8 = closure_145_6;
                closure_8 = closure_145_6;
                closure_7 = closure_145_6[Symbol.iterator]();
              }
              const obj30 = closure_144_1(closure_144_2[2]);
            }
            break;
          case 2:
            c18 = 0;
            closure_145_15 = closure_19;
            let obj17 = closure_144_1(closure_144_2[2]);
            const body = closure_145_15.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            first1 = message;
            if (message == null) {
              const _Object = Object;
              const first = Object.values(closure_145_15.body)[0];
              first1 = undefined;
              if (first != null) {
                first1 = first[0];
              }
            }
            const obj4 = { type: "GUILD_SETTINGS_ROLES_SAVE_FAIL", message: first1 };
            obj17.dispatch(obj4);
            const ComponentDispatch = closure_144_0(closure_144_2[5]).ComponentDispatch;
            ComponentDispatch.dispatch(closure_144_4.EMPHASIZE_NOTICE);
            if (!closure_145_5.throwErr) {
              c21 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              throw closure_145_15;
            }
            break;
          case 3:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 0;
              c21 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
            break;
          case 4:
            c18 = 1;
            closure_7.return();
            throw closure_19;
          case 5:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              closure_7.return();
              c18 = 0;
              c21 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c18 = 1;
              if (closure_7 === undefined) {
                if (null != closure_145_4) {
                  if (null != closure_145_3) {
                    closure_145_9 = false;
                    closure_145_10 = false;
                    c18 = 5;
                    closure_145_12 = (function _asyncIterator(arg0) {
                      if (typeof Symbol !== "undefined") {
                        const _Symbol = Symbol;
                        let str2 = Symbol.asyncIterator;
                        const _Symbol2 = Symbol;
                        let str = Symbol.iterator;
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
                          let tmp5 = arg0[str];
                          if (null != tmp5) {
                            let call = tmp5.call;
                            let tmp10 = first1;
                            let tmp11 = typeof call === "unknown" ? tmp5() : call(arg0);
                            let tmp12 = new.target;
                            let tmp13 = new.target;
                            tmp10 = new tmp10(tmp11);
                            return tmp10;
                          }
                        }
                        num = num - 1;
                        str = "@@iterator";
                        str2 = "@@asyncIterator";
                        if (tmp) {
                          continue;
                        } else {
                          let _TypeError = TypeError;
                          let tmp6 = new.target;
                          let str3 = "Object is not async iterable";
                          let tmp7 = new.target;
                          let typeError = new TypeError("Object is not async iterable");
                          throw typeError;
                        }
                      }
                      const call2 = tmp4.call;
                      return typeof call2 === "unknown" ? tmp4() : call2(arg0);
                    })(closure_145_3);
                    c20 = 9;
                    c21 = 1;
                    const obj7 = { value: closure_145_12.next(), done: false };
                    return obj7;
                  }
                }
                let obj20 = closure_144_1(closure_144_2[2]);
                obj20.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
                c18 = 0;
              } else {
                c18 = 2;
                closure_145_7 = tmp147;
                const obj8 = {
                  name: closure_145_7.name,
                  description: null,
                  permissions: null,
                  color: null,
                  colors: null,
                  hoist: null,
                  mentionable: null,
                  icon: null,
                  unicodeEmoji: null,
                };
                description = closure_145_7.description;
                if (description == null) {
                  description = undefined;
                }
                obj8.description = description;
                obj8.permissions = closure_145_7.permissions;
                obj8.color = closure_145_7.color;
                colors = closure_145_7.colors;
                if (colors == null) {
                  colors = undefined;
                }
                obj8.colors = colors;
                obj8.hoist = closure_145_7.hoist;
                obj8.mentionable = closure_145_7.mentionable;
                obj8.icon = closure_145_7.icon;
                obj8.unicodeEmoji = closure_145_7.unicodeEmoji;
                c20 = 5;
                c21 = 1;
                let obj9 = {
                  value: closure_144_1(closure_144_2[3]).updateRole(closure_145_0, closure_145_7.id, obj8),
                  done: false,
                };
                return obj9;
              }
            }
            break;
          case 6:
            closure_15 = closure_19;
            c18 = 4;
            let tmp102 = closure_145_9;
            if (closure_145_9) {
              tmp102 = null != closure_145_12.return;
            }
            if (!tmp102) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                throw closure_15;
              }
            } else {
              c20 = 20;
              c21 = 1;
              const obj10 = { value: closure_145_12.return(), done: false };
              return obj10;
            }
            break;
          case 7:
            c18 = 1;
            if (closure_145_10) {
              throw closure_145_8;
            } else {
              throw tmp95;
            }
            break;
          case 8:
            c18 = 3;
            closure_145_10 = true;
            closure_145_8 = closure_19;
            c18 = 9;
            let tmp87 = closure_145_9;
            if (closure_145_9) {
              tmp87 = null != closure_145_12.return;
            }
            if (tmp87) {
              c20 = 19;
              c21 = 1;
              const obj11 = { value: closure_145_12.return(), done: false };
              return obj11;
            } else {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              }
            }
            break;
          case 9:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else {
              value3 = value;
              if (arg0 === 2) {
                c18 = 6;
                let tmp75 = closure_145_9;
                if (closure_145_9) {
                  tmp75 = null != closure_145_12.return;
                }
                if (tmp75) {
                  c20 = 12;
                  c21 = 1;
                  const obj12 = { value: closure_145_12.return(), done: false };
                  return obj12;
                } else {
                  c18 = 1;
                  if (closure_145_10) {
                    throw closure_145_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    const obj13 = { value: value3, done: true };
                    return obj13;
                  }
                }
              } else {
                closure_145_11 = value;
                const done2 = value.done;
                closure_145_9 = !done2;
                if (done2) {
                  c18 = 3;
                } else {
                  value4 = closure_145_11.value;
                  closure_145_14 = closure_145_4.get(value4);
                  obj9 = closure_144_0(closure_144_2[4]);
                  closure_11 = closure_145_14;
                  if (closure_145_14 == null) {
                    closure_11 = [];
                  }
                  c20 = 15;
                  c21 = 1;
                  const obj14 = {
                    value: obj9.putRoleConnectionsConfigurations(closure_145_0, value4, closure_11),
                    done: false,
                  };
                  return obj14;
                }
              }
            }
            break;
          case 10:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else {
              value2 = value;
              if (arg0 === 2) {
                c18 = 7;
                let tmp55 = closure_145_9;
                if (closure_145_9) {
                  tmp55 = null != closure_145_12.return;
                }
                if (tmp55) {
                  c20 = 14;
                  c21 = 1;
                  const obj15 = { value: closure_145_12.return(), done: false };
                  return obj15;
                } else {
                  c18 = 1;
                  if (closure_145_10) {
                    throw closure_145_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    const obj16 = { value: value2, done: true };
                    return obj16;
                  }
                }
              } else {
                closure_145_11 = value;
                const done = value.done;
                closure_145_9 = !done;
              }
            }
            break;
          case 11:
            c18 = 1;
            if (closure_145_10) {
              throw closure_145_8;
            } else {
              throw tmp49;
            }
            break;
          case 12:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                c18 = 0;
                c21 = 3;
                obj17 = { value, done: true };
                return obj17;
              }
            }
            break;
          case 13:
            c18 = 1;
            if (closure_145_10) {
              throw closure_145_8;
            } else {
              throw tmp43;
            }
            break;
          case 14:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                c18 = 0;
                c21 = 3;
                const obj18 = { value, done: true };
                return obj18;
              }
            }
            break;
          case 15:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 8;
              let tmp33 = closure_145_9;
              if (closure_145_9) {
                tmp33 = null != closure_145_12.return;
              }
              if (tmp33) {
                c20 = 17;
                c21 = 1;
                const obj19 = { value: closure_145_12.return(), done: false };
                return obj19;
              } else {
                c18 = 1;
                if (closure_145_10) {
                  throw closure_145_8;
                } else {
                  c18 = 0;
                  c21 = 3;
                  obj20 = { value, done: true };
                  return obj20;
                }
              }
            } else {
              closure_145_9 = false;
              c20 = 10;
              c21 = 1;
              const obj21 = { value: closure_145_12.next(), done: false };
              return obj21;
            }
            break;
          case 16:
            c18 = 1;
            if (closure_145_10) {
              throw closure_145_8;
            } else {
              throw tmp26;
            }
            break;
          case 17:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                c18 = 0;
                c21 = 3;
                obj22 = { value, done: true };
                return obj22;
              }
            }
            break;
          case 18:
            c18 = 1;
            if (closure_145_10) {
              throw closure_145_8;
            } else {
              throw tmp20;
            }
            break;
          case 19:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                c18 = 0;
                c21 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            break;
          default:
            if (arg0 === 1) {
              c21 = 3;
              throw value;
            } else if (arg0 === 2) {
              c18 = 1;
              if (closure_145_10) {
                throw closure_145_8;
              } else {
                c18 = 0;
                c21 = 3;
                const obj23 = { value, done: true };
                return obj23;
              }
            }
        }
      } catch (tmp183) {
        closure_19 = tmp183;
        if (tmp5 === c18) {
          c21 = tmp3;
          throw tmp183;
        } else if (tmp2 === tmp185) {
          c20 = tmp;
        } else if (tmp === tmp185) {
          c20 = tmp14;
        } else if (tmp3 === tmp185) {
          c20 = tmp13;
        } else if (tmp14 === tmp185) {
          c20 = tmp12;
        } else if (tmp6 === tmp185) {
          c20 = tmp11;
        } else if (tmp13 === tmp185) {
          c20 = tmp10;
        } else if (tmp12 === tmp185) {
          c20 = tmp9;
        } else if (tmp11 === tmp185) {
          c20 = tmp8;
        } else {
          c20 = tmp7;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
const Constants = fn(1074);
({ ComponentActions: closure_4, DEFAULT_ROLE_COLOR: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx");

export const updateRoleSort = function updateRoleSort(roles) {
  const obj = { type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles };
  obj.dispatch(obj);
};
export const init = function init() {
  DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
};
export const discardSectionChanges = function discardSectionChanges(id, effectiveSection) {
  const obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const discardConnectionsChanges = function discardConnectionsChanges(id) {
  const obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES", id };
  obj.dispatch(obj);
};
export const commitSectionChanges = function commitSectionChanges(id, effectiveSection) {
  const obj = { type: "GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const updateRolePermissions = function updateRolePermissions(id, flag, allow) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id, flag, allow };
  obj.dispatch(obj);
};
export const updateRolePermissionSet = function updateRolePermissionSet(id, permissions) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET", id, permissions };
  obj.dispatch(obj);
};
export const clearRolePermissions = function clearRolePermissions(id) {
  const obj = { type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id };
  obj.dispatch(obj);
};
export const updateRoleName = function updateRoleName(id, name) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id, name };
  obj.dispatch(obj);
};
export const updateRoleDescription = function updateRoleDescription(id, description) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION", id, description };
  obj.dispatch(obj);
};
export const updateRoleColor = function updateRoleColor(color, arg1) {
  let tmp = color.color === arg1;
  if (!tmp) {
    let tmp3 = arg1 === hasOwnProperty;
    if (tmp3) {
      tmp3 = 0 === color.color;
    }
    tmp = tmp3;
  }
  if (!tmp) {
    const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: color.id, color: null };
    let num2 = 0;
    if (arg1 !== hasOwnProperty) {
      num2 = arg1;
    }
    obj.color = num2;
    obj.dispatch(obj);
  }
};
export const updateRoleColors = function updateRoleColors(id, colors, GRADIENT) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id, colors, currentStyle: GRADIENT };
  obj.dispatch(obj);
};
export const updateRoleStyles = function updateRoleStyles(id, currentStyle) {
  const obj = { type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id, currentStyle };
  obj.dispatch(obj);
};
export const toggleRoleSettings = function toggleRoleSettings(id, hoist, mentionable) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id, hoist, mentionable };
  obj.dispatch(obj);
};
export const updateRoleIcon = function updateRoleIcon(id, icon, unicodeEmoji) {
  const obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id, icon, unicodeEmoji };
  obj.dispatch(obj);
};
export const updateRoleConnectionConfigurations = function updateRoleConnectionConfigurations(
  id,
  roleConnectionConfigurations,
) {
  const obj = {
    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
    roleId: id,
    roleConnectionConfigurations,
  };
  obj.dispatch(obj);
};
export const saveRoleSettings = function saveRoleSettings() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
