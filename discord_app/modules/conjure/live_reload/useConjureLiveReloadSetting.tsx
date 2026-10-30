// === Module 12436: useConjureLiveReloadSetting ===

// Module 12436 (useConjureLiveReloadSetting)
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10872 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10844 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export function useConjureLiveReloadSetting(arg0) {
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
  const tmp4 = stateFromStores(flag[4])(arg0);
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
      str = tmp(tmp2[6]).liveReloadDescription(stateFromStores);
      const tmpResult = tmp(tmp2[6]);
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
}