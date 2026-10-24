// === Module 11802: useConjureLiveReloadSetting ===

// Module 11802 (useConjureLiveReloadSetting)
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10737 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10711 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export const useConjureLiveReloadSetting = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLiveReloadSetting(arg0) {
  _require = arg0;
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_5];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ConjureLiveReloadStore.getLiveReload(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  [flag] = noop.useState(null);
  _slicedToArray = tmp11;
  const tmp9 = stateFromStores(flag[6])(arg0);
  [tmp13, tmp14] = noop.useState(null);
  noop = tmp14;
  if (tmp15) {
    tmp14(null);
  }
  if (null != tmp13) {
    if (stateFromStores === tmp13.before) {
      let enabled = tmp13.enabled;
    }
    if (tmp17) {
      tmp11(null);
    }
    closure_5 = tmp19;
    if (cResult[4] === (null != stateFromStores && null != flag && flag !== enabled)) {
      if (cResult[5] === flag) {
        if (cResult[6] === stateFromStores) {
          if (cResult[7] === arg0) {
            let tmp20 = cResult[8];
          }
          if (flag == null) {
            flag = enabled;
          }
          if (flag == null) {
            flag = false;
          }
          if (cResult[9] !== stateFromStores) {
            let str = "";
            if (null != stateFromStores) {
              str = tmp(tmp2[8]).liveReloadDescription(stateFromStores);
              const tmpResult2 = tmp(tmp2[8]);
            }
            cResult[9] = stateFromStores;
            cResult[10] = str;
            class F {
              constructor() {
                tmp = !closure_5;
                if (closure_5) {
                  tmp2 = closure_2;
                  tmp3 = null;
                  tmp = null == closure_2;
                }
                if (!tmp) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[7]);
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  flag = obj.sendLiveReload(closure_0, closure_2);
                  if (flag) {
                    tmp8 = closure_4;
                    obj1 = { enabled: null, before: null };
                    obj1.enabled = tmp7;
                    tmp9 = closure_1;
                    obj1.before = closure_1;
                    tmp10 = closure_4(obj1);
                    tmp11 = closure_3;
                    tmp12 = null;
                    tmp13 = closure_3(null);
                    flag = true;
                  }
                  tmp = flag;
                }
                return tmp;
              }
            }
          }
          if (cResult[11] === tmp19) {
            if (cResult[12] === tmp20) {
              if (cResult[13] === tmp21) {
                if (cResult[14] === flag) {
                  if (cResult[15] === tmp22) {
                    let tmp23 = cResult[16];
                  }
                  return tmp23;
                }
              }
            }
          }
          class F {
            constructor() {
              tmp = !closure_5;
              if (closure_5) {
                tmp2 = closure_2;
                tmp3 = null;
                tmp = null == closure_2;
              }
              if (!tmp) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[7]);
                tmp6 = closure_0;
                tmp7 = closure_2;
                flag = obj.sendLiveReload(closure_0, closure_2);
                if (flag) {
                  tmp8 = closure_4;
                  obj1 = { enabled: null, before: null };
                  obj1.enabled = tmp7;
                  tmp9 = closure_1;
                  obj1.before = closure_1;
                  tmp10 = closure_4(obj1);
                  tmp11 = closure_3;
                  tmp12 = null;
                  tmp13 = closure_3(null);
                  flag = true;
                }
                tmp = flag;
              }
              return tmp;
            }
          }
          tmp24[0] = null != stateFromStores && !tmp9;
          tmp24[1] = flag;
          tmp24[2] = tmp22;
          tmp24[3] = tmp19;
          tmp24[4] = tmp11;
          tmp24[5] = tmp20;
          cResult[11] = tmp19;
          cResult[12] = tmp20;
          cResult[13] = null != stateFromStores && !tmp9;
          cResult[14] = flag;
          cResult[15] = tmp22;
          cResult[16] = tmp24;
          tmp23 = tmp24;
        }
      }
    }
    class F {
      constructor() {
        tmp = !closure_5;
        if (closure_5) {
          tmp2 = closure_2;
          tmp3 = null;
          tmp = null == closure_2;
        }
        if (!tmp) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[7]);
          tmp6 = closure_0;
          tmp7 = closure_2;
          flag = obj.sendLiveReload(closure_0, closure_2);
          if (flag) {
            tmp8 = closure_4;
            obj1 = { enabled: null, before: null };
            obj1.enabled = tmp7;
            tmp9 = closure_1;
            obj1.before = closure_1;
            tmp10 = closure_4(obj1);
            tmp11 = closure_3;
            tmp12 = null;
            tmp13 = closure_3(null);
            flag = true;
          }
          tmp = flag;
        }
        return tmp;
      }
    }
    cResult[4] = null != stateFromStores && null != flag && flag !== enabled;
    cResult[5] = flag;
    cResult[6] = stateFromStores;
    cResult[7] = arg0;
    cResult[8] = F;
    tmp20 = F;
    tmp17 = null != flag && flag === enabled;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
}) : (function useConjureLiveReloadSetting(arg0) {
  _require = arg0;
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureLiveReloadStore.getLiveReload(closure_0), items1);
  let obj = require("initialize");
  let obj2 = noop;
  let tmp = _require;
  const tmp2 = flag;
  [flag] = noop.useState(null);
  _slicedToArray = tmp6;
  const tmp4 = stateFromStores(flag[6])(arg0);
  [tmp8, tmp9] = noop.useState(null);
  noop = tmp9;
  if (tmp10) {
    tmp9(null);
  }
  if (null != tmp8) {
    if (stateFromStores === tmp8.before) {
      let enabled = tmp8.enabled;
    }
    if (tmp12) {
      tmp6(null);
    }
    closure_5 = tmp14;
    const items2 = [null != stateFromStores && null != flag && flag !== enabled, flag, stateFromStores, arg0];
    let tmp16 = null != stateFromStores;
    const callback = obj2.useCallback(() => {
      let tmp = !closure_5;
      if (closure_5) {
        tmp = null == flag;
      }
      if (!tmp) {
        flag = conjureLiveReloadConnection.sendLiveReload(closure_0, flag);
        if (flag) {
          const obj2 = { enabled: tmp7, before: stateFromStores };
          stateFromStores(obj2);
          closure_3(null);
          flag = true;
        }
        tmp = flag;
        tmp7 = flag;
      }
      return tmp;
    }, items2);
    if (tmp16) {
      tmp16 = !tmp4;
    }
    const obj3 = { available: tmp16, checked: null, description: null, changed: null, setChecked: null, save: null };
    if (flag == null) {
      flag = enabled;
    }
    if (flag == null) {
      flag = false;
    }
    obj3.checked = flag;
    let str = "";
    if (null != stateFromStores) {
      str = tmp(tmp2[8]).liveReloadDescription(stateFromStores);
      const tmpResult = tmp(tmp2[8]);
    }
    obj3.description = str;
    obj3.changed = null != stateFromStores && null != flag && flag !== enabled;
    obj3.setChecked = tmp6;
    obj3.save = callback;
    return obj3;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
});