// discord_app/modules/conjure/live_reload/useConjureLiveReloadSetting.tsx
import conjureLiveReloadConnection from "conjureLiveReloadConnection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureLiveReloadStore from "ConjureLiveReloadStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export function useConjureLiveReloadSetting(arg0) {
  _require = arg0;
  items = [ConjureLiveReloadStore];
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
  let obj2 = noop;
  let tmp = _require;
  const tmp2 = stateFromStores;
  [tmp7, tmp8] = flag(noop.useState(null), 2);
  ConjureLiveReloadStore = tmp8;
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
        flag = conjureLiveReloadConnection.sendLiveReload(closure_0, flag);
        if (flag) {
          const obj2 = { enabled: tmp7, before: stateFromStores };
          tmp8(obj2);
          closure_3(null);
          flag = true;
        }
        tmp = flag;
        tmp7 = flag;
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
      str = tmp(tmp2[5]).liveReloadDescription(stateFromStores);
      const tmpResult = tmp(tmp2[5]);
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
}
