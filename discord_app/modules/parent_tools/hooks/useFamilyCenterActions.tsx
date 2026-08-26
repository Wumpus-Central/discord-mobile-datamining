// === Module 11557: useFamilyCenterActions ===

// Module 11557 (useFamilyCenterActions)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "freshTeenActivityWithMap" /* 7209 */;
import { UserLinkStatus } from "items" /* 7210 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActions.tsx");

export const useFamilyCenterActions = function useFamilyCenterActions(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const onError = obj.onError;
  closure_0 = onError;
  const onSuccess = obj.onSuccess;
  [tmp2, dependencyMap] = callback2(React.useState(false), 2);
  const tmp = callback2(React.useState(false), 2);
  [tmp4, closure_3] = callback2(React.useState(false), 2);
  const tmp3 = callback2(React.useState(false), 2);
  [tmp6, closure_4] = callback2(React.useState(false), 2);
  const tmp5 = callback2(React.useState(false), 2);
  [tmp8, closure_5] = callback2(React.useState(false), 2);
  const tmp9 = callback2(React.useState(false), 2);
  const first = tmp9[0];
  closure_7 = tmp9[1];
  const tmp11 = callback2(React.useState(false), 2);
  const first1 = tmp11[0];
  closure_9 = tmp11[1];
  const tmp13 = callback2(React.useState(false), 2);
  const first2 = tmp13[0];
  closure_11 = tmp13[1];
  const tmp15 = callback2(React.useState(false), 2);
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
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              if (closure_1_14) {
                c6 = 3;
              } else {
                closure_1_2(true);
                c4 = 2;
                obj1 = callback(closure_2_2[5]);
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.updateLinkForUserId(tmp51, constants.ACTIVE);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_2(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_1 != null) {
                closure_1_1();
              }
              c4 = 1;
            }
            c4 = 0;
            closure_1_2(false);
          }
          c4 = 0;
          closure_1_2(false);
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
    })();
  });
  const items = [tmp17, onError, onSuccess];
  closure_0 = undefined;
  callback = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              if (closure_1_14) {
                c6 = 3;
              } else {
                closure_1_3(true);
                c4 = 2;
                obj1 = callback(closure_2_2[5]);
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.updateLinkForUserId(tmp51, constants.DECLINED);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_3(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_1 != null) {
                closure_1_1();
              }
              c4 = 1;
            }
            c4 = 0;
            closure_1_3(false);
          }
          c4 = 0;
          closure_1_3(false);
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
    })();
  });
  const items1 = [tmp17, onError, onSuccess];
  closure_0 = undefined;
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
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              if (closure_1_14) {
                c6 = 3;
              } else {
                v0(true);
                v0 = 2;
                obj1 = callback(closure_2_2[5]);
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.updateLinkForUserId(tmp51, constants.INACTIVE);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              v0 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              v0(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_1 != null) {
                closure_1_1();
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
    })();
  });
  const items2 = [tmp17, onError, onSuccess];
  closure_0 = undefined;
  callback2 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              if (closure_1_14) {
                c6 = 3;
              } else {
                v0(true);
                c4 = 2;
                obj1 = callback(closure_2_2[5]);
                v0 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.removeLinkForUserId(tmp37);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              v0(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_1 != null) {
                closure_1_1();
              }
              c4 = 1;
            }
            c4 = 0;
            v0(false);
          }
          c4 = 0;
          v0(false);
          throw closure_3;
        } catch (tmp43) {
          closure_3 = tmp43;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp43;
          } else if (tmp2 === tmp45) {
            v0 = tmp2;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
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
  const items4 = [first, onError, onSuccess];
  closure_0 = undefined;
  const callback4 = obj2.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp4;
            let aPIError = tmp8;
            aPIError = undefined;
            if (closure_1_6) {
              c5 = 3;
            } else {
              closure_1_7(true);
              c3 = 2;
              obj1 = closure_1_0(closure_1_2[5]);
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getLinkCodeForCurrentUser();
              return obj1;
            }
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            callback = closure_2;
            aPIError = new closure_1_0(closure_1_2[6]).APIError(callback);
            if (aPIError != null) {
              tmp25(aPIError);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback2(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (callback != null) {
              callback();
            }
            c3 = 1;
          }
          c3 = 0;
          callback2(false);
        }
        c3 = 0;
        closure_1_7(false);
        throw closure_2;
      } catch (tmp42) {
        closure_2 = tmp42;
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
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              if (closure_1_10) {
                c6 = 3;
              } else {
                closure_1_11(true);
                c4 = 2;
                obj1 = onSuccess(closure_2_2[5]);
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.fetchTeenActivity(tmp37);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_11(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_1 != null) {
                closure_1_1();
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
    })();
  });
  const items5 = [first2, onError, onSuccess];
  closure_0 = undefined;
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
  closure_0 = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              closure_3 = tmp4;
              closure_2 = tmp8;
              let aPIError;
              if (closure_1_8) {
                c7 = 3;
              } else {
                closure_1_9(true);
                c5 = 2;
                obj1 = onSuccess(closure_2_2[5]);
                c6 = 3;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.requestLink(tmp50, tmp51);
                return obj1;
              }
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c5 = 1;
              const callback2 = closure_4;
              aPIError = new callback(closure_2_2[6]).APIError(callback2);
              if (callback != null) {
                tmp25(callback);
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_1_9(false);
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (callback2 != null) {
                callback2();
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
    })();
  });
  const items6 = [first1, onError, onSuccess];
  closure_0 = undefined;
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
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              let aPIError;
              const actionsForDisplayType = first.getActionsForDisplayType(aPIError);
              const startId = first.getStartId();
              const selectedTeenId = first.getSelectedTeenId();
              if (!closure_1_12) {
                if (null != startId) {
                  if (null != selectedTeenId) {
                    closure_1_13(true);
                    c4 = 2;
                    obj1 = onSuccess(closure_2_2[5]);
                    c5 = 3;
                    c6 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.fetchMoreTeenActivity(selectedTeenId, tmp52, startId, actionsForDisplayType[actionsForDisplayType.length - 1].event_id);
                    return obj1;
                  }
                }
              }
              c6 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c4 = 1;
              closure_1 = closure_3;
              aPIError = new callback(closure_2_2[6]).APIError(closure_1);
              if (callback != null) {
                tmp23(callback);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_13(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
    })();
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
    isGetLinkCodeLoading: first,
    isSelectTeenUserLoading: first2,
    isRequestingLink: first1,
    isMoreLoading: first3
  };
  return obj;
};