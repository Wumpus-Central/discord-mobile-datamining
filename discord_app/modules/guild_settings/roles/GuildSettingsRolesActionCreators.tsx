// === Module 17624: AsyncFromSyncIterator ===

// Module 17624 (AsyncFromSyncIterator)
import dispatcherDefault from "dispatcher" /* 573 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 1074 */;

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
  let tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    closure_5 = arg5;
    c20 = 0;
    c21 = 0;
    c18 = 0;
    const iter = (function*(arg0, done) {
      if (c21 === 2) {
        c21 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = done;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp15;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp16 === 3) {
          if (arg0 === 1) {
            throw done;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = done;
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
                  throw done;
                } else if (arg0 === 2) {
                  c21 = 3;
                  obj = { value: null, done: true };
                  obj[0] = done;
                  return obj;
                } else {
                  closure_16 = tmp4;
                  closure_17 = tmp17;
                  obj1 = undefined;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = length;
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = closure_4;
                  if (obj1 === undefined) {
                    obj1 = {};
                  }
                  let sorted;
                  closure_7 = undefined;
                  closure_8 = undefined;
                  c9 = undefined;
                  c10 = undefined;
                  let value;
                  closure_12 = undefined;
                  let value2;
                  closure_14 = undefined;
                  c20 = 1;
                  c21 = 1;
                  return { value: "PX_16", done: true };
                }
              break;
              case 1:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c21 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = done;
                  return obj2;
                } else {
                  throwTypeErrorResult = closure_16;
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = length;
                  throwTypeErrorResult = callback2(length[2]).dispatch({ type: "GUILD_SETTINGS_ROLES_SUBMITTING" });
                  throwTypeErrorResult = closure_17;
                  c18 = 1;
                  throwTypeErrorResult = length;
                  throwTypeErrorResult = null != length;
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = length;
                    throwTypeErrorResult = length.length > 0;
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = closure_16;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = length;
                    let obj22 = callback2(length[3]);
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = length;
                    c20 = 3;
                    c21 = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj22.batchRoleUpdate(callback, length);
                    return obj3;
                  } else {
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = callback2;
                    if (null != callback2) {
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = callback2;
                      const items = [];
                      throwTypeErrorResult = items;
                      throwTypeErrorResult = HermesBuiltin.arraySpread(callback2, 0);
                      sorted = items.sort((name, name2) => Number("" !== name.name.trim()) - Number("" !== name2.name.trim()));
                    } else {
                      sorted = [];
                    }
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = sorted;
                    closure_8 = sorted;
                    throwTypeErrorResult = sorted;
                    closure_8 = sorted;
                    closure_7 = sorted[Symbol.iterator]();
                  }
                  const obj30 = callback2(length[2]);
                }
              break;
              case 2:
                throwTypeErrorResult = closure_17;
                throwTypeErrorResult = closure_16;
                c18 = 0;
                closure_15 = throwTypeErrorResult;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = length;
                let obj17 = callback2(length[2]);
                throwTypeErrorResult = closure_15;
                const body = closure_15.body;
                throwTypeErrorResult = undefined;
                if (body != null) {
                  throwTypeErrorResult = body.message;
                }
                sorted = throwTypeErrorResult;
                if (throwTypeErrorResult == null) {
                  throwTypeErrorResult = closure_17;
                  const _Object = Object;
                  throwTypeErrorResult = closure_15;
                  throwTypeErrorResult = Object.values(closure_15.body)[0];
                  throwTypeErrorResult = undefined;
                  if (throwTypeErrorResult != null) {
                    throwTypeErrorResult = throwTypeErrorResult[0];
                  }
                  sorted = throwTypeErrorResult;
                }
                const obj4 = { type: "GUILD_SETTINGS_ROLES_SAVE_FAIL", message: null };
                throwTypeErrorResult = closure_17;
                throwTypeErrorResult = closure_16;
                throwTypeErrorResult = sorted;
                obj4[1] = sorted;
                throwTypeErrorResult = obj17.dispatch(obj4);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = length;
                const ComponentDispatch = callback(length[5]).ComponentDispatch;
                throwTypeErrorResult = closure_4;
                throwTypeErrorResult = ComponentDispatch.dispatch(closure_4.EMPHASIZE_NOTICE);
                throwTypeErrorResult = obj1;
                if (!obj1.throwErr) {
                  c21 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = closure_15;
                  throw closure_15;
                }
              break;
              case 3:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 0;
                  c21 = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = done;
                  return obj5;
                }
              break;
              case 4:
                c18 = 1;
                throwTypeErrorResult = closure_7;
                closure_7.return();
                throw throwTypeErrorResult;
              case 5:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_7;
                  closure_7.return();
                  c18 = 0;
                  c21 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = done;
                  return obj6;
                } else {
                  c18 = 1;
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = closure_7;
                  if (closure_7 === undefined) {
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = closure_4;
                    if (null != closure_4) {
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = closure_3;
                      if (null != closure_3) {
                        throwTypeErrorResult = closure_17;
                        c9 = false;
                        c10 = false;
                        c18 = 5;
                        throwTypeErrorResult = closure_3;
                        closure_12 = (function _asyncIterator(closure_3) {
                          if (typeof Symbol !== "undefined") {
                            const _Symbol = Symbol;
                            let str2 = Symbol.asyncIterator;
                            const _Symbol2 = Symbol;
                            let str = Symbol.iterator;
                          }
                          let num = 1;
                          while (true) {
                            let tmp2 = str;
                            let tmp3 = str2;
                            let tmp = num;
                            if (str2) {
                              if (null != closure_3[str2]) {
                                break;
                              }
                            }
                            if (str) {
                              let tmp5 = closure_3[str];
                              if (null != tmp5) {
                                let call = tmp5.call;
                                let tmp10 = sorted;
                                let tmp11 = typeof call === "unknown" ? tmp5() : call(closure_3);
                                let tmp12 = new.target;
                                let tmp13 = new.target;
                                let tmp14 = tmp11;
                                tmp10 = new tmp10(tmp11);
                                let tmp16 = tmp10;
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
                              let tmp9 = typeError;
                              throw typeError;
                            }
                          }
                          const call2 = tmp4.call;
                          return typeof call2 === "unknown" ? tmp4() : call2(closure_3);
                        })(closure_3);
                        throwTypeErrorResult = closure_12;
                        c20 = 9;
                        c21 = 1;
                        const obj7 = { value: null, done: false };
                        obj7[0] = closure_12.next();
                        return obj7;
                      }
                    }
                    throwTypeErrorResult = closure_16;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = length;
                    let obj20 = callback2(length[2]);
                    throwTypeErrorResult = obj20.dispatch({ type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS" });
                    c18 = 0;
                  } else {
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = closure_16;
                    c18 = 2;
                    closure_7 = throwTypeErrorResult;
                    throwTypeErrorResult = callback2;
                    throwTypeErrorResult = length;
                    throwTypeErrorResult = closure_7;
                    const obj8 = { name: null, description: null, permissions: null, color: null, colors: null, hoist: null, mentionable: null, icon: null, unicodeEmoji: null };
                    throwTypeErrorResult = closure_7;
                    obj8[0] = closure_7.name;
                    throwTypeErrorResult = closure_7;
                    const description = closure_7.description;
                    c9 = description;
                    throwTypeErrorResult = callback;
                    if (description == null) {
                      c9 = undefined;
                    }
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = c9;
                    obj8[1] = c9;
                    throwTypeErrorResult = closure_7;
                    obj8[2] = closure_7.permissions;
                    throwTypeErrorResult = closure_7;
                    obj8[3] = closure_7.color;
                    throwTypeErrorResult = closure_7;
                    const colors = closure_7.colors;
                    c10 = colors;
                    if (colors == null) {
                      c10 = undefined;
                    }
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = c10;
                    obj8[4] = c10;
                    throwTypeErrorResult = closure_7;
                    obj8[5] = closure_7.hoist;
                    throwTypeErrorResult = closure_7;
                    obj8[6] = closure_7.mentionable;
                    throwTypeErrorResult = closure_7;
                    obj8[7] = closure_7.icon;
                    throwTypeErrorResult = closure_7;
                    obj8[8] = closure_7.unicodeEmoji;
                    c20 = 5;
                    c21 = 1;
                    let obj9 = { value: null, done: false };
                    obj9[0] = callback2(length[3]).updateRole(throwTypeErrorResult, closure_7.id, obj8);
                    return obj9;
                  }
                }
              break;
              case 6:
                closure_15 = throwTypeErrorResult;
                throwTypeErrorResult = closure_17;
                c18 = 4;
                throwTypeErrorResult = c9;
                if (c9) {
                  throwTypeErrorResult = closure_12;
                  throwTypeErrorResult = null != closure_12.return;
                }
                if (!throwTypeErrorResult) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throwTypeErrorResult = closure_8;
                    throw closure_8;
                  } else {
                    throwTypeErrorResult = closure_15;
                    throw closure_15;
                  }
                } else {
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = closure_12;
                  c20 = 20;
                  c21 = 1;
                  const obj10 = { value: null, done: false };
                  obj10[0] = closure_12.return();
                  return obj10;
                }
              break;
              case 7:
                c18 = 1;
                if (c10) {
                  throw closure_8;
                } else {
                  throw tmp95;
                }
              break;
              case 8:
                c18 = 3;
                c10 = true;
                closure_8 = throwTypeErrorResult;
                c18 = 9;
                let tmp87 = c9;
                if (c9) {
                  tmp87 = null != closure_12.return;
                }
                if (tmp87) {
                  c20 = 19;
                  c21 = 1;
                  const obj11 = { value: null, done: false };
                  obj11[0] = closure_12.return();
                  return obj11;
                } else {
                  c18 = 1;
                  if (c10) {
                    throw closure_8;
                  }
                }
              break;
              case 9:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else {
                  closure_14 = done;
                  if (arg0 === 2) {
                    c18 = 6;
                    let tmp75 = c9;
                    if (c9) {
                      tmp75 = null != closure_12.return;
                    }
                    if (tmp75) {
                      c20 = 12;
                      c21 = 1;
                      const obj12 = { value: null, done: false };
                      obj12[0] = closure_12.return();
                      return obj12;
                    } else {
                      c18 = 1;
                      if (c10) {
                        throw closure_8;
                      } else {
                        c18 = 0;
                        c21 = 3;
                        const obj13 = { value: null, done: true };
                        obj13[0] = closure_14;
                        return obj13;
                      }
                    }
                  } else {
                    throwTypeErrorResult = closure_17;
                    value = done;
                    const done2 = done.done;
                    c9 = !done2;
                    if (done2) {
                      c18 = 3;
                    } else {
                      value2 = value.value;
                      closure_14 = closure_4.get(value2);
                      obj9 = callback(length[4]);
                      value = closure_14;
                      if (closure_14 == null) {
                        value = [];
                      }
                      c20 = 15;
                      c21 = 1;
                      const obj14 = { value: null, done: false };
                      obj14[0] = obj9.putRoleConnectionsConfigurations(callback, value2, value);
                      return obj14;
                    }
                  }
                }
              break;
              case 10:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else {
                  value2 = done;
                  if (arg0 === 2) {
                    c18 = 7;
                    let tmp55 = c9;
                    if (c9) {
                      tmp55 = null != closure_12.return;
                    }
                    if (tmp55) {
                      c20 = 14;
                      c21 = 1;
                      const obj15 = { value: null, done: false };
                      obj15[0] = closure_12.return();
                      return obj15;
                    } else {
                      c18 = 1;
                      if (c10) {
                        throw closure_8;
                      } else {
                        c18 = 0;
                        c21 = 3;
                        const obj16 = { value: null, done: true };
                        obj16[0] = value2;
                        return obj16;
                      }
                    }
                  } else {
                    value = done;
                    done = done.done;
                    c9 = !done;
                  }
                }
              break;
              case 11:
                c18 = 1;
                if (c10) {
                  throw closure_8;
                } else {
                  throw tmp49;
                }
              break;
              case 12:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throw closure_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    obj17 = { value: null, done: true };
                    obj17[0] = done;
                    return obj17;
                  }
                }
              break;
              case 13:
                c18 = 1;
                if (c10) {
                  throw closure_8;
                } else {
                  throw tmp43;
                }
              break;
              case 14:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throw closure_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    const obj18 = { value: null, done: true };
                    obj18[0] = done;
                    return obj18;
                  }
                }
              break;
              case 15:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else {
                  closure_12 = done;
                  if (arg0 === 2) {
                    c18 = 8;
                    let tmp33 = c9;
                    if (c9) {
                      tmp33 = null != closure_12.return;
                    }
                    if (tmp33) {
                      c20 = 17;
                      c21 = 1;
                      const obj19 = { value: null, done: false };
                      obj19[0] = closure_12.return();
                      return obj19;
                    } else {
                      c18 = 1;
                      if (c10) {
                        throw closure_8;
                      } else {
                        c18 = 0;
                        c21 = 3;
                        obj20 = { value: null, done: true };
                        obj20[0] = closure_12;
                        return obj20;
                      }
                    }
                  } else {
                    c9 = false;
                    c20 = 10;
                    c21 = 1;
                    const obj21 = { value: null, done: false };
                    obj21[0] = closure_12.next();
                    return obj21;
                  }
                }
              break;
              case 16:
                c18 = 1;
                if (c10) {
                  throw closure_8;
                } else {
                  throw tmp26;
                }
              break;
              case 17:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throw closure_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    obj22 = { value: null, done: true };
                    obj22[0] = done;
                    return obj22;
                  }
                }
              break;
              case 18:
                c18 = 1;
                if (c10) {
                  throw closure_8;
                } else {
                  throw tmp20;
                }
              break;
              case 19:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throw closure_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    obj = { value: null, done: true };
                    obj[0] = done;
                    return obj;
                  }
                }
              break;
              default:
                if (arg0 === 1) {
                  c21 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c18 = 1;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = c10;
                  if (c10) {
                    throwTypeErrorResult = closure_8;
                    throw closure_8;
                  } else {
                    c18 = 0;
                    c21 = 3;
                    const obj23 = { value: null, done: true };
                    obj23[0] = done;
                    return obj23;
                  }
                }
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c18;
            if (tmp5 === c18) {
              throwTypeErrorResult = tmp3;
              c21 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c20 = throwTypeErrorResult;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c20 = tmp14;
            } else if (tmp3 === throwTypeErrorResult) {
              c20 = tmp13;
            } else if (tmp14 === throwTypeErrorResult) {
              c20 = tmp12;
            } else if (tmp6 === throwTypeErrorResult) {
              c20 = tmp11;
            } else if (tmp13 === throwTypeErrorResult) {
              c20 = tmp10;
            } else if (tmp12 === throwTypeErrorResult) {
              c20 = tmp9;
            } else if (tmp11 === throwTypeErrorResult) {
              c20 = tmp8;
            } else {
              c20 = tmp7;
            }
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