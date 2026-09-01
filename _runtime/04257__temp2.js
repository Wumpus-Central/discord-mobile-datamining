// _runtime/04257__temp2.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { c } from "04237_c.js";

const require = arg1;
function _temp2(arg0) {
  return arg0 + 1;
}
function _temp(dispose) {
  let disposeResult;
  if (dispose != null) {
    disposeResult = dispose.dispose();
  }
  return disposeResult;
}
({ useCallback, useEffect: c3, useState: c4, useMemo } = noop);

export const useRiveList = function useRiveList(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let obj = c;
  const cResult = obj.c(39);
  [tmp5, closure_2] = callback(disposableMemo(null), 2);
  let tmp = _require;
  const tmp4 = callback(disposableMemo(null), 2);
  [r10021, closure_3] = callback(disposableMemo(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      callback(null);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp8 = cResult[3];
    }
    callback2(first, tmp8);
    if (cResult[4] === arg0) {
      if (cResult[5] === arg1) {
        let tmp11 = cResult[6];
      }
      if (cResult[7] === arg0) {
        if (cResult[8] === arg1) {
          let tmp12 = cResult[9];
        }
        disposableMemo = tmp(4251).useDisposableMemo(tmp11, _temp, tmp12);
        if (cResult[10] === arg0) {
          if (cResult[11] === disposableMemo) {
            if (cResult[12] === arg1) {
              let tmp15 = cResult[13];
              let tmp16 = cResult[14];
            }
            tmp9(tmp15, tmp16);
            if (cResult[15] !== disposableMemo) {
              class M {
                constructor() {
                  obj = closure_4;
                  if (closure_4) {
                    closure_0 = obj.addListener(() => {
                      callback2(closure_1_5);
                    });
                    return () => {
                      try {
                        callback();
                        closure_1_4.removeListeners();
                      } catch (err) {}
                    };
                  } else {
                    return;
                  }
                }
              }
              const items = [disposableMemo];
              cResult[15] = disposableMemo;
              cResult[16] = M;
              cResult[17] = items;
              let tmp19 = items;
              const tmp18 = M;
            } else {
              class M {
                constructor() {
                  obj = closure_4;
                  if (closure_4) {
                    closure_0 = obj.addListener(() => {
                      callback2(closure_1_5);
                    });
                    return () => {
                      try {
                        callback();
                        closure_1_4.removeListeners();
                      } catch (err) {}
                    };
                  } else {
                    return;
                  }
                }
              }
              tmp19 = cResult[17];
            }
            tmp9(tmp18, tmp19);
            if (disposableMemo != null) {
              class M {
                constructor() {
                  obj = closure_4;
                  if (closure_4) {
                    closure_0 = obj.addListener(() => {
                      callback2(closure_1_5);
                    });
                    return () => {
                      try {
                        callback();
                        closure_1_4.removeListeners();
                      } catch (err) {}
                    };
                  } else {
                    return;
                  }
                }
              }
            }
            if (undefined == null) {
              class M {
                constructor() {
                  obj = closure_4;
                  if (closure_4) {
                    closure_0 = obj.addListener(() => {
                      callback2(closure_1_5);
                    });
                    return () => {
                      try {
                        callback();
                        closure_1_4.removeListeners();
                      } catch (err) {}
                    };
                  } else {
                    return;
                  }
                }
              }
            }
            if (cResult[18] !== disposableMemo) {
              class R {
                constructor(arg0) {
                  obj = closure_4;
                  instanceAt = undefined;
                  if (closure_4 != null) {
                    tmp2 = arg0;
                    instanceAt = obj.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
              cResult[18] = disposableMemo;
              cResult[19] = R;
            } else {
              class R {
                constructor(arg0) {
                  obj = closure_4;
                  instanceAt = undefined;
                  if (closure_4 != null) {
                    tmp2 = arg0;
                    instanceAt = obj.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
            }
            if (cResult[20] !== disposableMemo) {
              class R {
                constructor(arg0) {
                  obj = closure_4;
                  instanceAt = undefined;
                  if (closure_4 != null) {
                    tmp2 = arg0;
                    instanceAt = obj.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
              cResult[20] = disposableMemo;
              cResult[21] = tmp24;
            } else {
              class R {
                constructor(arg0) {
                  obj = closure_4;
                  instanceAt = undefined;
                  if (closure_4 != null) {
                    tmp2 = arg0;
                    instanceAt = obj.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
            }
            if (cResult[22] !== disposableMemo) {
              class C {
                constructor(arg0, arg1) {
                  obj = closure_4;
                  flag = undefined;
                  if (closure_4 != null) {
                    tmp = arg0;
                    tmp2 = arg1;
                    flag = obj.addInstanceAt(arg0, arg1);
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                }
              }
              cResult[22] = disposableMemo;
              cResult[23] = C;
            } else {
              class C {
                constructor(arg0, arg1) {
                  obj = closure_4;
                  flag = undefined;
                  if (closure_4 != null) {
                    tmp = arg0;
                    tmp2 = arg1;
                    flag = obj.addInstanceAt(arg0, arg1);
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return flag;
                }
              }
            }
            if (cResult[24] !== disposableMemo) {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
              cResult[24] = disposableMemo;
              cResult[25] = O;
            } else {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
            }
            if (cResult[26] !== disposableMemo) {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
              cResult[26] = disposableMemo;
              cResult[27] = tmp28;
            } else {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
            }
            if (cResult[28] !== disposableMemo) {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
              cResult[28] = disposableMemo;
              cResult[29] = tmp30;
            } else {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
            }
            if (cResult[30] === tmp23) {
              class O {
                constructor(arg0) {
                  obj = closure_4;
                  if (closure_4 != null) {
                    tmp = arg0;
                    removeInstanceResult = obj.removeInstance(arg0);
                  }
                  return;
                }
              }
            }
            obj = {
              length: null,
              getInstanceAt: null,
              addInstance: null,
              addInstanceAt: null,
              removeInstance: null,
              removeInstanceAt: null,
              swap: null,
              error: null,
            };
            obj[0] = undefined;
            obj[1] = tmp22;
            obj[2] = tmp23;
            obj[3] = tmp25;
            obj[4] = tmp26;
            obj[5] = tmp27;
            obj[6] = tmp29;
            obj[7] = tmp5;
            cResult[30] = tmp23;
            cResult[31] = tmp25;
            cResult[32] = tmp5;
            cResult[33] = tmp22;
            cResult[34] = undefined;
            cResult[35] = tmp26;
            cResult[36] = tmp27;
            cResult[37] = tmp29;
            cResult[38] = obj;
          }
        }
        const fn3 = function b() {
          let tmp = closure_1;
          if (closure_1) {
            tmp = !disposableMemo;
          }
          if (tmp) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error('List property "' + closure_0 + '" not found in the ViewModel instance');
            callback(error);
          }
        };
        const items1 = [arg1, disposableMemo, arg0];
        cResult[10] = arg0;
        cResult[11] = disposableMemo;
        cResult[12] = arg1;
        cResult[13] = fn3;
        cResult[14] = items1;
        tmp16 = items1;
        tmp15 = fn3;
        const tmpResult = tmp(4251);
      }
      const items2 = [arg1, arg0];
      cResult[7] = arg0;
      cResult[8] = arg1;
      cResult[9] = items2;
      tmp12 = items2;
    }
    const fn2 = function v() {
      if (closure_1) {
        return obj.listProperty(closure_0);
      }
      obj = closure_1;
    };
    cResult[4] = arg0;
    cResult[5] = arg1;
    cResult[6] = fn2;
    tmp11 = fn2;
  }
  const items3 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = items3;
  tmp8 = items3;
};
