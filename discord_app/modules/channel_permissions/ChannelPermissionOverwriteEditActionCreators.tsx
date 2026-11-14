// === Module 19698: ChannelPermissionOverwriteEditActionCreators ===

// Module 19698 (ChannelPermissionOverwriteEditActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import ChannelPermissionOverwriteEditUtils from "ChannelPermissionOverwriteEditUtils" /* 19694 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import ChannelPermissionOverwriteEditStore from "ChannelPermissionOverwriteEditStore" /* 19693 */;

require = fn;
function dispatchEditFailure(channelId, overwriteId, mutations) {
  return DispatcherDefault.dispatch({ type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_FAILURE", channelId, overwriteId, mutations });
}
function showEditFailureToast() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t.CKsXk3);
  ToastActionCreatorsDefault.open("CHANNEL_PERMISSION_OVERWRITE_UPDATE_FAILURE", obj2);
}
let closure_11 = async function _runEditValidation(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_5 = tmp4;
          closure_4 = tmp35;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          c6 = 1;
          c7 = 3;
          c8 = 1;
          const obj5 = { value: asyncGeneratorStep(), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          c6 = 2;
          items = [closure_132_2];
          closure_133_9(closure_132_0, closure_132_1, items);
          c7 = 5;
          c8 = 1;
        } else {
          if (2 === tmp8) {
            c6 = 0;
            c8 = 3;
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (!value) {
              c6 = 0;
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_133_12(closure_132_0, closure_132_1);
              c6 = 0;
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c6 = 0;
          }
          c6 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
        const obj8 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_READY", channelId: closure_132_0, overwriteId: closure_132_1, flagKey: closure_132_2.flagKey, editId: closure_132_2.editId };
        c7 = 4;
        c8 = 1;
        const obj9 = { value: closure_133_1(closure_133_2[3]).dispatch(obj8), done: false };
        return obj9;
      }
    } catch (tmp34) {
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp34;
      } else if (tmp2 === tmp35) {
        c7 = tmp2;
      } else {
        c7 = tmp;
      }
    }
  }
};
function scheduleEditDrain(channelId, overwriteId) {
  const tmp = closure_6(channelId, overwriteId);
  if (!set.has(tmp)) {
    set.add(tmp);
    (function runEditDrain() {
      const self = this;
      const apply = closure_1_13.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(channelId, overwriteId, tmp);
  }
}
let closure_13 = async function _runEditDrain(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp8;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          let readyEdits;
          closure_131_3 = false;
          c6 = 2;
          c7 = 4;
          c8 = 1;
          const obj4 = {
            value: (function drainPendingEdits() {
                      const self = this;
                      const apply = closure_1_14.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_0, closure_1),
            done: false
          };
          return obj4;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_132_8.delete(closure_131_2);
        let tmp83 = closure_131_3;
        if (closure_131_3) {
          tmp83 = closure_132_5.getReadyEdits(closure_131_0, closure_131_1).length > 0;
        }
        if (tmp83) {
          closure_132_12(closure_131_0, closure_131_1);
        }
        throw closure_5;
      } else {
        if (2 === tmp8) {
          c6 = 3;
          readyEdits = closure_132_5.getReadyEdits(closure_131_0, closure_131_1);
          if (readyEdits.length > 0) {
            c7 = 5;
            c8 = 1;
            const obj5 = { value: closure_132_9(closure_131_0, closure_131_1, readyEdits.map((editId) => ({ flagKey: String(editId.flag), editId: editId.editId }))), done: false };
            return obj5;
          } else {
            c6 = 1;
          }
        } else {
          if (3 === tmp8) {
            c6 = 1;
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_132_8.delete(closure_131_2);
              let tmp35 = closure_131_3;
              if (closure_131_3) {
                tmp35 = closure_132_5.getReadyEdits(closure_131_0, closure_131_1).length > 0;
              }
              if (tmp35) {
                closure_132_12(closure_131_0, closure_131_1);
              }
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_131_3 = true;
              c6 = 1;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_10();
          }
          c6 = 0;
          closure_132_8.delete(closure_131_2);
          let tmp58 = closure_131_3;
          if (closure_131_3) {
            tmp58 = closure_132_5.getReadyEdits(closure_131_0, closure_131_1).length > 0;
          }
          if (tmp58) {
            closure_132_12(closure_131_0, closure_131_1);
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
        c6 = 0;
        closure_132_8.delete(closure_131_2);
        let tmp17 = closure_131_3;
        if (closure_131_3) {
          tmp17 = closure_132_5.getReadyEdits(closure_131_0, closure_131_1).length > 0;
        }
        if (tmp17) {
          closure_132_12(closure_131_0, closure_131_1);
        }
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp98) {
      closure_5 = tmp98;
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp98;
      } else if (tmp2 === tmp100) {
        c7 = tmp2;
      } else if (tmp === tmp100) {
        c7 = tmp;
      } else {
        c7 = tmp3;
      }
    }
  }
};
let closure_14 = async function _drainPendingEdits(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp4;
          closure_134_0 = closure_0;
          closure_134_1 = closure_1;
          closure_134_2 = undefined;
          closure_134_3 = async function _loop() {
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
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
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_3 = tmp4;
                    dependencyMap = tmp8;
                    closure_130_0 = undefined;
                    let pendingEdits;
                    closure_130_2 = undefined;
                    const readyEdits = c5.getReadyEdits(closure_2_0, closure_2_1);
                    if (0 === readyEdits.length) {
                      c7 = 3;
                      const obj4 = { value: { v: "r" }, done: true };
                      return obj4;
                    } else {
                      const mapped = readyEdits.map((editId) => ({ flagKey: String(editId.flag), editId: editId.editId }));
                      closure_130_0 = mapped;
                      const channel = tmp50.getChannel(closure_2_0);
                      let channelPermissionOverwrite;
                      if (null != channel) {
                        channelPermissionOverwrite = closure_0(19694).getChannelPermissionOverwrite(channel, closure_2_1);
                        const obj10 = closure_0(19694);
                      }
                      if (null == channelPermissionOverwrite) {
                        c6 = 1;
                        c7 = 1;
                        const obj5 = { value: closure_1_9(closure_2_0, closure_2_1, mapped), done: false };
                        return obj5;
                      } else {
                        closure_0 = readyEdits[Symbol.iterator]();
                        while (closure_0 !== undefined) {
                          c5 = 1;
                          ({ flag, value } = nextResult);
                          let obj11 = closure_0(19694);
                          channelPermissionOverwrite = obj11.applyChannelPermissionOverwriteEdit(channelPermissionOverwrite, flag, value);
                          c5 = 0;
                          continue;
                        }
                        c5 = 2;
                        nextResult = closure_0.next();
                        c6 = 6;
                        c7 = 1;
                        const obj6 = { value: readyEdits(8134).updatePermissionOverwrite(closure_2_0, channelPermissionOverwrite), done: false };
                        return obj6;
                      }
                    }
                  }
                } else if (1 === tmp8) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    c7 = 3;
                    const obj8 = { value: { v: "r" }, done: true };
                    return obj8;
                  }
                } else if (2 === tmp8) {
                  c5 = 0;
                  closure_0.return();
                  throw tmp50;
                } else if (3 === tmp8) {
                  c5 = 0;
                  pendingEdits = c5.getPendingEdits(closure_131_0, closure_131_1);
                  closure_130_2 = closure_130_0.some((editId) => {
                    editId = undefined;
                    if (readyEdits[editId.flagKey] != null) {
                      editId = tmp.editId;
                    }
                    return editId === editId.editId;
                  });
                  c6 = 4;
                  c7 = 1;
                  const obj9 = { value: closure_1_9(closure_131_0, closure_131_1, closure_130_0), done: false };
                  return obj9;
                } else if (4 === tmp8) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj13 = { value, done: true };
                    return obj13;
                  } else {
                    if (closure_130_2) {
                      closure_1_10();
                    }
                    c7 = 3;
                    return { value: 0, done: true };
                  }
                } else if (5 === tmp8) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    const obj14 = { value, done: true };
                    return obj14;
                  } else {
                    c7 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c7 = 3;
                  const obj15 = { value, done: true };
                  return obj15;
                } else {
                  c5 = 0;
                  const obj16 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_SUCCESS", channelId: closure_131_0, overwriteId: closure_131_1, mutations: closure_130_0 };
                  c6 = 5;
                  c7 = 1;
                  const obj17 = { value: readyEdits(572).dispatch(obj16), done: false };
                  return obj17;
                }
              } catch (tmp50) {
                if (tmp5 === c5) {
                  c7 = tmp3;
                  throw tmp50;
                } else if (tmp2 === tmp52) {
                  c6 = tmp;
                } else {
                  c6 = tmp3;
                }
              }
            }
          };
          const iter3 = closure_134_3()[tmp47.iterator]();
          HermesBuiltin.ensureObject("iterator is not an object");
          const next = iter3.next;
          closure_2 = undefined;
          const tmp28 = closure_134_3();
        }
      } else {
        if (1 === tmp7) {
          c7 = 1;
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else {
            closure_2 = value;
            if (arg0 === 2) {
              closure_2 = value;
              c7 = 0;
              const method = HermesBuiltin.getMethod("return");
              if (method === undefined) {
                c10 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                const iter2 = method(closure_2);
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
                if (iter2.done) {
                  c10 = 3;
                  const obj = { value: iter2.value, done: true };
                  return obj;
                } else {
                  c9 = 1;
                  c10 = 1;
                  return iter2;
                }
              }
            } else {
              c7 = 0;
              const tmp19 = value;
            }
          }
        } else {
          c7 = 0;
          const method1 = HermesBuiltin.getMethod("throw");
          if (method1 === undefined) {
            const method2 = HermesBuiltin.getMethod("return");
            if (method2 !== undefined) {
              HermesBuiltin.ensureObject("iterator.return() did not return an object");
            }
            throw new TypeError("yield* delegate must have a .throw() method");
          } else {
            const iter = method1(tmp9);
            HermesBuiltin.ensureObject("iterator.throw() did not return an object");
            if (iter.done) {
              let iter4 = iter;
            } else {
              c9 = 1;
              c10 = 1;
              return iter;
            }
          }
          tmp9 = closure_8;
        }
        value = iter4.value;
        closure_134_2 = value;
        if (0 !== value) {
          if (closure_134_2) {
            c10 = 3;
            let obj5 = { value: closure_134_2.v, done: true };
            return obj5;
          }
        }
      }
      iter4 = next(tmp19);
      HermesBuiltin.ensureObject("iterator.next() did not return an object");
      if (!iter4.done) {
        c9 = 1;
        c10 = 1;
        return iter4;
      }
    } catch (tmp40) {
      closure_8 = tmp40;
      if (tmp3 === c7) {
        c10 = tmp2;
        throw tmp40;
      } else {
        c9 = tmp;
      }
    }
  }
};
let closure_6 = fn(19693).getChannelPermissionOverwriteResourceKey;
let closure_7 = 0;
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditActionCreators.tsx");

export function updateChannelPermissionOverwrite(value) {
  ({ channelId, overwriteId, flag, validate } = value);
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (null != obj3.getChannelPermissionOverwrite(channel, overwriteId)) {
      closure_7 = tmp14 + 1;
      const _String = String;
      const StringResult = String(flag);
      const obj2 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_START", channelId, overwriteId, flag, value: value.value, editId: +closure_7, ready: null == validate };
      DispatcherDefault.dispatch(obj2);
      if (null != validate) {
        const obj5 = { flagKey: StringResult, editId: tmp14 };
        (function runEditValidation() {
          const self = this;
          const apply = closure_1_11.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(channelId, overwriteId, obj5, validate);
      } else {
        const tmp3 = closure_6(channelId, overwriteId);
        if (!set.has(tmp3)) {
          set.add(tmp3);
          (function runEditDrain() {
            const self = this;
            const apply = closure_1_13.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(channelId, overwriteId, tmp3);
        }
      }
    }
    obj3 = ChannelPermissionOverwriteEditUtils;
  }
}