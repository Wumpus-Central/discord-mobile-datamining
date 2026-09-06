// === Module 11916: useFamilyCenterActions ===

// Module 11916 (useFamilyCenterActions)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

const require = fn;
const UserLinkStatus = fn(7538).UserLinkStatus;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActions.tsx");

export const useFamilyCenterActions = function useFamilyCenterActions(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const onError = obj.onError;
  closure_0 = onError;
  let onSuccess = obj.onSuccess;
  [tmp2, dependencyMap] = _slicedToArray(noop.useState(false), 2);
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp4, asyncGeneratorStep] = _slicedToArray(noop.useState(false), 2);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  [tmp6, _slicedToArray] = _slicedToArray(noop.useState(false), 2);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, noop] = _slicedToArray(noop.useState(false), 2);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const isGetLinkCodeLoading = tmp9[0];
  closure_7 = tmp9[1];
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  const first1 = tmp11[0];
  closure_9 = tmp11[1];
  const tmp13 = _slicedToArray(noop.useState(false), 2);
  const first2 = tmp13[0];
  closure_11 = tmp13[1];
  const tmp15 = _slicedToArray(noop.useState(false), 2);
  let first3 = tmp15[0];
  closure_13 = tmp15[1];
  let tmp17 = tmp2;
  if (!tmp2) {
    tmp17 = tmp4;
  }
  if (!tmp17) {
    tmp17 = tmp6;
  }
  if (!tmp17) {
    tmp17 = tmp8;
  }
  if (!tmp17) {
    tmp17 = first1;
  }
  if (!tmp17) {
    tmp17 = first3;
  }
  first3 = tmp17;
  asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            onSuccess = tmp8;
            closure_129_0 = undefined;
            if (first3) {
              c6 = 3;
            } else {
              tmp4(true);
              c4 = 2;
              let obj1 = closure_0(7539);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.updateLinkForUserId(tmp50, constants.ACTIVE);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp4(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            c4 = 1;
          }
          c4 = 0;
          tmp4(false);
        }
        c4 = 0;
        tmp4(false);
        throw closure_3;
      } catch (tmp42) {
        closure_3 = tmp42;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp42;
        } else if (tmp2 === tmp44) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items = [tmp17, onError, onSuccess];
  const callback = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            onSuccess = tmp8;
            closure_129_0 = undefined;
            if (first3) {
              c6 = 3;
            } else {
              tmp42(true);
              c4 = 2;
              let obj1 = closure_0(7539);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.updateLinkForUserId(tmp50, constants.DECLINED);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = tmp42;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp42(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            c4 = 1;
          }
          c4 = 0;
          tmp42(false);
        }
        c4 = 0;
        tmp42(false);
        throw tmp42;
      } catch (tmp42) {
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp42;
        } else if (tmp2 === tmp44) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items1 = [tmp17, onError, onSuccess];
  const callback1 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            onSuccess = tmp8;
            closure_129_0 = undefined;
            if (first3) {
              c6 = 3;
            } else {
              v0(true);
              v0 = 2;
              let obj1 = closure_0(7539);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.updateLinkForUserId(tmp50, constants.INACTIVE);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            v0 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            v0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            v0 = 1;
          }
          v0 = 0;
          v0(false);
        }
        v0 = 0;
        v0(false);
        throw closure_3;
      } catch (tmp42) {
        closure_3 = tmp42;
        if (tmp5 === v0) {
          c6 = tmp3;
          throw tmp42;
        } else if (tmp2 === tmp44) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items2 = [tmp17, onError, onSuccess];
  const callback2 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            onSuccess = tmp8;
            closure_129_0 = undefined;
            if (first3) {
              c6 = 3;
            } else {
              v3(true);
              c4 = 2;
              let obj1 = closure_0(7539);
              v3 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.removeLinkForUserId(tmp37);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            c4 = 1;
          }
          c4 = 0;
          v3(false);
        }
        c4 = 0;
        v3(false);
        throw closure_3;
      } catch (tmp43) {
        closure_3 = tmp43;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp43;
        } else if (tmp2 === tmp45) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  });
  const items3 = [tmp17, onError, onSuccess];
  const callback3 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items3);
  const items4 = [isGetLinkCodeLoading, onError, onSuccess];
  const callback4 = obj2.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp8;
            closure_128_0 = undefined;
            if (first) {
              c5 = 3;
            } else {
              closure_7(true);
              c3 = 2;
              let obj1 = closure_0(tmp42[5]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.getLinkCodeForCurrentUser();
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_1 = tmp42;
            const aPIError = new closure_0(tmp42[6]).APIError(closure_128_1);
            closure_128_0 = aPIError;
            if (closure_129_0 != null) {
              tmp25(closure_128_0);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_7(false);
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (closure_129_1 != null) {
              closure_129_1();
            }
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
        }
        c3 = 0;
        closure_129_7(false);
        throw tmp42;
      } catch (tmp42) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp42;
        } else if (tmp2 === tmp44) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items4);
  asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            onSuccess = tmp8;
            closure_129_0 = undefined;
            if (first2) {
              c6 = 3;
            } else {
              closure_1_11(true);
              c4 = 2;
              let obj1 = onSuccess(7539);
              c5 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.fetchTeenActivity(tmp37);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_11(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            c4 = 1;
          }
          c4 = 0;
          closure_1_11(false);
        }
        c4 = 0;
        closure_1_11(false);
        throw closure_3;
      } catch (tmp43) {
        closure_3 = tmp43;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp43;
        } else if (tmp2 === tmp45) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items5 = [first2, onError, onSuccess];
  const callback5 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items5);
  asyncGeneratorStep(async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
            closure_3 = tmp4;
            closure_2 = tmp8;
            closure_130_0 = undefined;
            if (first1) {
              c7 = 3;
            } else {
              closure_1_9(true);
              c5 = 2;
              let obj1 = onSuccess(7539);
              c6 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.requestLink(tmp49, tmp50);
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_130_1 = closure_4;
            const aPIError = new closure_0(4461).APIError(closure_130_1);
            closure_130_0 = aPIError;
            if (closure_0 != null) {
              tmp25(closure_130_0);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_1_9(false);
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (onSuccess != null) {
              onSuccess();
            }
            c5 = 1;
          }
          c5 = 0;
          closure_1_9(false);
        }
        c5 = 0;
        closure_1_9(false);
        throw closure_4;
      } catch (tmp41) {
        closure_4 = tmp41;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp41;
        } else if (tmp2 === tmp43) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  });
  const items6 = [first1, onError, onSuccess];
  const callback6 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items6);
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = undefined;
            const actionsForDisplayType = first.getActionsForDisplayType(closure_0);
            const startId = first.getStartId();
            const selectedTeenId = first.getSelectedTeenId();
            if (!first3) {
              if (null != startId) {
                if (null != selectedTeenId) {
                  closure_1_13(true);
                  c4 = 2;
                  let obj1 = onSuccess(7539);
                  c5 = 3;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.fetchMoreTeenActivity(selectedTeenId, tmp51, startId, actionsForDisplayType[actionsForDisplayType.length - 1].event_id);
                  return obj1;
                }
              }
            }
            c6 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const aPIError = new closure_0(4461).APIError(closure_129_1);
            closure_129_0 = aPIError;
            if (closure_0 != null) {
              tmp23(closure_129_0);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_13(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          closure_1_13(false);
        }
        c4 = 0;
        closure_1_13(false);
        throw closure_3;
      } catch (tmp43) {
        closure_3 = tmp43;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp43;
        } else if (tmp2 === tmp45) {
          c5 = tmp2;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  const items7 = [first3, onError];
  obj = {
    acceptLinkRequest: callback,
    declineLinkRequest: callback1,
    disconnectLinkRequest: callback2,
    cancelLinkRequest: callback3,
    selectTeenUser: callback5,
    getLinkCode: callback4,
    requestLink: callback6,
    loadMore: obj2.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items7),
    isAcceptLoading: tmp2,
    isDeclineLoading: tmp4,
    isDisconnectLoading: tmp6,
    isCancelLoading: tmp8,
    isGetLinkCodeLoading,
    isSelectTeenUserLoading: first2,
    isRequestingLink: first1,
    isMoreLoading: first3
  };
  return obj;
};