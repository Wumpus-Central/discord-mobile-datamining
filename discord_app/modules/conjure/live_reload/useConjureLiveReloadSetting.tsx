// discord_app/modules/conjure/live_reload/useConjureLiveReloadSetting.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureLiveReloadStore from "ConjureLiveReloadStore.tsx";

const require = globalThis.__r;

const require = fn;
let sendLiveReload = fn(13072).sendLiveReload;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export const useConjureLiveReloadSetting = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureLiveReloadSetting(arg0) {
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
        const fn = function c() {
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
      stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      const tmp9 = flag(noop.useState(null), 2);
      flag = tmp9[0];
      noop = tmp10;
      const tmpResult = require("initialize");
      [tmp12, tmp13] = flag(noop.useState(null), 2);
      sendLiveReload = tmp13;
      if (tmp14) {
        tmp13(null);
      }
      if (null != tmp12) {
        if (stateFromStores === tmp12.before) {
          let enabled = tmp12.enabled;
        }
        if (tmp16) {
          tmp10(null);
        }
        closure_5 = tmp18;
        if (cResult[4] === (null != stateFromStores && null != flag && flag !== enabled)) {
          if (cResult[5] === flag) {
            if (cResult[6] === stateFromStores) {
              if (cResult[7] === arg0) {
                let tmp19 = cResult[8];
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
                  str = tmp(tmp2[7]).liveReloadDescription(stateFromStores);
                  const tmpResult2 = tmp(tmp2[7]);
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
                      tmp4 = sendLiveReload;
                      tmp5 = closure_0;
                      tmp6 = closure_2;
                      flag = sendLiveReload(closure_0, closure_2);
                      if (flag) {
                        tmp7 = closure_4;
                        obj = { enabled: null, before: null };
                        obj.enabled = tmp6;
                        tmp8 = closure_1;
                        obj.before = closure_1;
                        tmp9 = closure_4(obj);
                        tmp10 = closure_3;
                        tmp11 = null;
                        tmp12 = closure_3(null);
                        flag = true;
                      }
                      tmp = flag;
                    }
                    return tmp;
                  }
                }
              }
              if (cResult[11] === tmp18) {
                if (cResult[12] === tmp19) {
                  if (cResult[13] === tmp20) {
                    if (cResult[14] === flag) {
                      if (cResult[15] === tmp21) {
                        let tmp22 = cResult[16];
                      }
                      return tmp22;
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
                    tmp4 = sendLiveReload;
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    flag = sendLiveReload(closure_0, closure_2);
                    if (flag) {
                      tmp7 = closure_4;
                      obj = { enabled: null, before: null };
                      obj.enabled = tmp6;
                      tmp8 = closure_1;
                      obj.before = closure_1;
                      tmp9 = closure_4(obj);
                      tmp10 = closure_3;
                      tmp11 = null;
                      tmp12 = closure_3(null);
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
              tmp23[3] = tmp18;
              tmp23[4] = tmp10;
              tmp23[5] = tmp19;
              cResult[11] = tmp18;
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
            tmp = !closure_5;
            if (closure_5) {
              tmp2 = closure_2;
              tmp3 = null;
              tmp = null == closure_2;
            }
            if (!tmp) {
              tmp4 = sendLiveReload;
              tmp5 = closure_0;
              tmp6 = closure_2;
              flag = sendLiveReload(closure_0, closure_2);
              if (flag) {
                tmp7 = closure_4;
                obj = { enabled: null, before: null };
                obj.enabled = tmp6;
                tmp8 = closure_1;
                obj.before = closure_1;
                tmp9 = closure_4(obj);
                tmp10 = closure_3;
                tmp11 = null;
                tmp12 = closure_3(null);
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
        tmp16 = null != flag && flag === enabled;
      }
      if (stateFromStores != null) {
        enabled = stateFromStores.enabled;
      }
    }
  : function useConjureLiveReloadSetting(arg0) {
      _require = arg0;
      const items = [closure_5];
      const items1 = [arg0];
      stateFromStores = require("initialize").useStateFromStores(
        items,
        () => ConjureLiveReloadStore.getLiveReload(closure_0),
        items1,
      );
      const tmp4 = flag(noop.useState(null), 2);
      flag = tmp4[0];
      noop = tmp5;
      let obj = require("initialize");
      const obj2 = noop;
      let tmp = _require;
      const tmp2 = stateFromStores;
      [tmp7, tmp8] = flag(noop.useState(null), 2);
      sendLiveReload = tmp8;
      if (tmp9) {
        tmp8(null);
      }
      if (null != tmp7) {
        if (stateFromStores === tmp7.before) {
          let enabled = tmp7.enabled;
        }
        if (tmp11) {
          tmp5(null);
        }
        closure_5 = tmp13;
        const items2 = [null != stateFromStores && null != flag && flag !== enabled, flag, stateFromStores, arg0];
        const obj3 = {
          available: null != stateFromStores,
          checked: null,
          description: null,
          changed: null,
          setChecked: null,
          save: null,
        };
        const callback = obj2.useCallback(() => {
          let tmp = !closure_5;
          if (closure_5) {
            tmp = null == flag;
          }
          if (!tmp) {
            flag = sendLiveReload(closure_0, flag);
            if (flag) {
              const obj = { enabled: tmp6, before: stateFromStores };
              stateFromStores(obj);
              closure_3(null);
              flag = true;
            }
            tmp = flag;
            tmp6 = flag;
          }
          return tmp;
        }, items2);
        if (flag == null) {
          flag = enabled;
        }
        if (flag == null) {
          flag = false;
        }
        obj3.checked = flag;
        let str = "";
        if (null != stateFromStores) {
          str = tmp(tmp2[7]).liveReloadDescription(stateFromStores);
          const tmpResult = tmp(tmp2[7]);
        }
        obj3.description = str;
        obj3.changed = null != stateFromStores && null != flag && flag !== enabled;
        obj3.setChecked = tmp5;
        obj3.save = callback;
        return obj3;
      }
      if (stateFromStores != null) {
        enabled = stateFromStores.enabled;
      }
    };
