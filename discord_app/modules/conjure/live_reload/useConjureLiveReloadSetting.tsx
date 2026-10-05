// discord_app/modules/conjure/live_reload/useConjureLiveReloadSetting.tsx
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ConjureLiveReloadStore from "ConjureLiveReloadStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_5;

let react = react_mod;
let sendLiveReload = ConjureConnectionStore.sendLiveReload;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_3;
      let closure_4;
      let enabled;
      let first;
      let flag;
      let stateFromStores;
      let tmp12;
      let tmp13;
      let tmp6;
      let tmp7;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_5];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return ConjureLiveReloadStore.getLiveReload(closure_0);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(stateFromStores[6]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmp9 = flag(react.useState(null), 2);
      flag = tmp9[0];
      react = tmp10;
      [tmp12, tmp13] = flag(react.useState(null), 2);
      sendLiveReload = tmp13;
      const tmp11 = flag(react.useState(null), 2);
      const tmp14 = null != tmp12 && stateFromStores !== tmp12.before;
      if (tmp14) {
        tmp13(null);
      }
      if (null != tmp12) {
        if (stateFromStores === tmp12.before) {
          enabled = tmp12.enabled;
        }
        const tmp16 = null != flag && flag === enabled;
        if (tmp16) {
          tmp9[1](null);
        }
        closure_5 = tmp18;
        if (cResult[4] === (null != stateFromStores && null != flag && flag !== enabled)) {
          if (cResult[5] === flag) {
            if (cResult[6] === stateFromStores) {
              let tmp19;
              if (cResult[7] === arg0) {
                tmp19 = cResult[8];
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
                  const tmpResult2 = tmp(stateFromStores[7]);
                  str = tmpResult2.liveReloadDescription(stateFromStores);
                }
                cResult[9] = stateFromStores;
                cResult[10] = str;
                class F {
                  constructor() {
                    let tmp = !closure_5;
                    if (closure_5) {
                      tmp = null == flag;
                    }
                    if (!tmp) {
                      const tmp6 = flag;
                      flag = sendLiveReload(closure_0, flag);
                      if (flag) {
                        const obj = { enabled: tmp6, before: stateFromStores };
                        tmp13(obj);
                        closure_3(null);
                        flag = true;
                      }
                      tmp = flag;
                    }
                    return tmp;
                  }
                }
              }
              if (cResult[11] === (null != stateFromStores && null != flag && flag !== enabled)) {
                if (cResult[12] === tmp19) {
                  if ((cResult[13] === null) != stateFromStores) {
                    if (cResult[14] === flag) {
                      let tmp22;
                      if (cResult[15] === tmp21) {
                        tmp22 = cResult[16];
                      }
                      return tmp22;
                    }
                  }
                }
              }
              class F {
                constructor() {
                  let tmp = !closure_5;
                  if (closure_5) {
                    tmp = null == flag;
                  }
                  if (!tmp) {
                    const tmp6 = flag;
                    flag = sendLiveReload(closure_0, flag);
                    if (flag) {
                      const obj = { enabled: tmp6, before: stateFromStores };
                      tmp13(obj);
                      closure_3(null);
                      flag = true;
                    }
                    tmp = flag;
                  }
                  return tmp;
                }
              }
              tmp23[0] = null != stateFromStores;
              tmp23[1] = flag;
              tmp23[2] = tmp21;
              tmp23[3] = null != stateFromStores && null != flag && flag !== enabled;
              tmp23[4] = tmp9[1];
              tmp23[5] = tmp19;
              cResult[11] = null != stateFromStores && null != flag && flag !== enabled;
              cResult[12] = tmp19;
              cResult[13] = null != stateFromStores;
              cResult[14] = flag;
              cResult[15] = tmp21;
              cResult[16] = tmp23;
              tmp22 = tmp23;
            }
          }
        }
        class F {
          constructor() {
            let tmp = !closure_5;
            if (closure_5) {
              tmp = null == flag;
            }
            if (!tmp) {
              const tmp6 = flag;
              flag = sendLiveReload(closure_0, flag);
              if (flag) {
                const obj = { enabled: tmp6, before: stateFromStores };
                tmp13(obj);
                closure_3(null);
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
        tmp19 = F;
      }
      if (stateFromStores != null) {
        enabled = stateFromStores.enabled;
      }
    }
  : (arg0) => {
      let callback;
      let closure_0;
      let closure_3;
      let closure_4;
      let enabled;
      let flag;
      let stateFromStores;
      let str;
      let tmp7;
      let tmp8;
      _require = arg0;
      let tmp = _require;
      let obj = require("get initialized");
      const items = [closure_5];
      const items1 = [arg0];
      const tmp2 = stateFromStores;
      stateFromStores = obj.useStateFromStores(items, () => ConjureLiveReloadStore.getLiveReload(closure_0), items1);
      const tmp4 = flag(react.useState(null), 2);
      flag = tmp4[0];
      const obj2 = react;
      react = tmp5;
      let tmp6 = flag(react.useState(null), 2);
      [tmp7, tmp8] = tmp6;
      sendLiveReload = tmp8;
      const tmp9 = null != tmp7 && stateFromStores !== tmp7.before;
      if (tmp9) {
        tmp8(null);
      }
      if (null != tmp7) {
        if (stateFromStores === tmp7.before) {
          enabled = tmp7.enabled;
        }
        const tmp11 = null != flag && flag === enabled;
        if (tmp11) {
          tmp4[1](null);
        }
        closure_5 = tmp13;
        const items2 = [null != stateFromStores && null != flag && flag !== enabled, flag, stateFromStores, arg0];
        const obj3 = {
          available: null != stateFromStores,
          checked: flag,
          description: str,
          changed: null != stateFromStores && null != flag && flag !== enabled,
          setChecked: tmp4[1],
          save: callback,
        };
        callback = obj2.useCallback(() => {
          let tmp = !closure_5;
          if (closure_5) {
            tmp = null == flag;
          }
          if (!tmp) {
            const tmp6 = flag;
            flag = sendLiveReload(closure_0, flag);
            if (flag) {
              const obj = { enabled: tmp6, before: stateFromStores };
              stateFromStores(obj);
              closure_3(null);
              flag = true;
            }
            tmp = flag;
          }
          return tmp;
        }, items2);
        if (flag == null) {
          flag = enabled;
        }
        if (flag == null) {
          flag = false;
        }
        str = "";
        if (null != stateFromStores) {
          const tmpResult = tmp(tmp2[7]);
          str = tmpResult.liveReloadDescription(stateFromStores);
        }
        return obj3;
      }
      if (stateFromStores != null) {
        enabled = stateFromStores.enabled;
      }
    };
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export const useConjureLiveReloadSetting = tmp2;
