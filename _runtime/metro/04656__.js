// _runtime/metro/04656__.js
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let c3;
let closure_4;
let useCallback;
let useMemo;
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
({ useCallback, useEffect: c3, useState: closure_4, useMemo } = react);

export const useRiveList = function useRiveList(arg0, arg1) {
  let closure_1;
  let closure_3;
  let disposableMemo;
  let first;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(39);
  const tmp4 = _slicedToArray(disposableMemo(null), 2);
  [tmp5, _slicedToArray] = tmp4;
  [r10021, closure_3] = disposableMemo(0);
  _slicedToArray(disposableMemo(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      _slicedToArray(null);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp8;
    if (cResult[2] === arg1) {
      tmp8 = cResult[3];
    }
    closure_3(first, tmp8);
    if (cResult[4] === arg0) {
      let tmp11;
      if (cResult[5] === arg1) {
        tmp11 = cResult[6];
      }
      if (cResult[7] === arg0) {
        let tmp12;
        if (cResult[8] === arg1) {
          tmp12 = cResult[9];
        }
        const tmpResult = tmp(4650);
        disposableMemo = tmpResult.useDisposableMemo(tmp11, _temp, tmp12);
        if (cResult[10] === arg0) {
          if (cResult[11] === disposableMemo) {
            let tmp15;
            let tmp16;
            let tmp19;
            if (cResult[12] === arg1) {
              tmp15 = cResult[13];
              tmp16 = cResult[14];
            }
            closure_3(tmp15, tmp16);
            if (cResult[15] !== disposableMemo) {
              class M {
                constructor() {
                  obj = closure_4;
                  if (obj) {
                    closure_0 = obj.addListener(() => {
                      closure_1_3(_temp2);
                    });
                    return () => {
                      try {
                        closure_0();
                        disposableMemo.removeListeners();
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
              tmp19 = items;
            } else {
              class M {
                constructor() {
                  obj = closure_4;
                  if (obj) {
                    closure_0 = obj.addListener(() => {
                      closure_1_3(_temp2);
                    });
                    return () => {
                      try {
                        closure_0();
                        disposableMemo.removeListeners();
                      } catch (err) {}
                    };
                  } else {
                    return;
                  }
                }
              }
              tmp19 = cResult[17];
            }
            closure_3(M, tmp19);
            if (disposableMemo != null) {
              class M {
                constructor() {
                  obj = closure_4;
                  if (obj) {
                    closure_0 = obj.addListener(() => {
                      closure_1_3(_temp2);
                    });
                    return () => {
                      try {
                        closure_0();
                        disposableMemo.removeListeners();
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
                  if (obj) {
                    closure_0 = obj.addListener(() => {
                      closure_1_3(_temp2);
                    });
                    return () => {
                      try {
                        closure_0();
                        disposableMemo.removeListeners();
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
                  let instanceAt;
                  if (disposableMemo != null) {
                    instanceAt = disposableMemo.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
              cResult[18] = disposableMemo;
              cResult[19] = R;
            } else {
              class R {
                constructor(arg0) {
                  let instanceAt;
                  if (disposableMemo != null) {
                    instanceAt = disposableMemo.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
            }
            if (cResult[20] !== disposableMemo) {
              class R {
                constructor(arg0) {
                  let instanceAt;
                  if (disposableMemo != null) {
                    instanceAt = disposableMemo.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
              cResult[20] = disposableMemo;
              cResult[21] = tmp24;
            } else {
              class R {
                constructor(arg0) {
                  let instanceAt;
                  if (disposableMemo != null) {
                    instanceAt = disposableMemo.getInstanceAt(arg0);
                  }
                  return instanceAt;
                }
              }
            }
            if (cResult[22] !== disposableMemo) {
              class C {
                constructor(arg0, arg1) {
                  let flag;
                  if (disposableMemo != null) {
                    flag = disposableMemo.addInstanceAt(arg0, arg1);
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
                  let flag;
                  if (disposableMemo != null) {
                    flag = disposableMemo.addInstanceAt(arg0, arg1);
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
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
              cResult[24] = disposableMemo;
              cResult[25] = O;
            } else {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
            }
            if (cResult[26] !== disposableMemo) {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
              cResult[26] = disposableMemo;
              cResult[27] = tmp28;
            } else {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
            }
            if (cResult[28] !== disposableMemo) {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
              cResult[28] = disposableMemo;
              cResult[29] = tmp30;
            } else {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
            }
            if (cResult[30] === tmp24) {
              class O {
                constructor(arg0) {
                  if (disposableMemo != null) {
                    disposableMemo.removeInstance(arg0);
                  }
                }
              }
            }
            const obj2 = {
              length: undefined,
              getInstanceAt: R,
              addInstance: tmp24,
              addInstanceAt: C,
              removeInstance: O,
              removeInstanceAt: tmp28,
              swap: tmp30,
              error: tmp5,
            };
            cResult[30] = tmp24;
            cResult[31] = C;
            cResult[32] = tmp5;
            cResult[33] = R;
            cResult[34] = undefined;
            cResult[35] = O;
            cResult[36] = tmp28;
            cResult[37] = tmp30;
            cResult[38] = obj2;
          }
        }
        const fn3 = function b() {
          const tmp = closure_1 && !disposableMemo;
          if (tmp) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error('List property "' + closure_0 + '" not found in the ViewModel instance');
            _slicedToArray(error);
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
      }
      const items2 = [arg1, arg0];
      cResult[7] = arg0;
      cResult[8] = arg1;
      cResult[9] = items2;
      tmp12 = items2;
    }
    const fn2 = function v() {
      if (closure_1) {
        return closure_1.listProperty(closure_0);
      }
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
