// === Module 18319: useConjureSharingMode ===

// Module 18319 (useConjureSharingMode)
import util from "util" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;

const require = globalThis.__r;

require = fn;
let isProjectOwner = fn(6500).isProjectOwner;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharingMode.tsx");

export default function useConjureSharingMode(arg0) {
  _require = arg0;
  items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  const tmp4 = stateFromStores(shareLinksEnabled[7])(arg0);
  shareLinksEnabled = tmp4.shareLinksEnabled;
  const loadFailed = tmp4.loadFailed;
  const setShareLinksEnabled = tmp4.setShareLinksEnabled;
  const reload = tmp4.reload;
  let obj = require("initialize");
  [tmp6, ConjureProjectStore] = setShareLinksEnabled(reload.useState(null), 2);
  const tmp7 = setShareLinksEnabled(reload.useState(false), 2);
  isProjectOwner = tmp7[1];
  _require = loadFailed(function*(arg0) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp34;
            closure_129_0 = undefined;
            let conjureSharingChangeResult = null;
            if (null != closure_1) {
              if (null != closure_2) {
                conjureSharingChangeResult = closure_0(shareLinksEnabled[8]).conjureSharingChange(tmp42, tmp22, closure_0);
                const obj4 = closure_0(shareLinksEnabled[8]);
              } else {
                conjureSharingChangeResult = null;
              }
            }
            closure_129_0 = conjureSharingChangeResult;
            if (null != closure_1) {
              if (null != conjureSharingChangeResult) {
                const _Object = Object;
                if (0 !== Object.keys(conjureSharingChangeResult).length) {
                  ConjureProjectStore(closure_0);
                  closure_1_7(false);
                  c3 = 1;
                  v2 = 3;
                  v3 = 1;
                  const obj6 = { value: closure_0(shareLinksEnabled[9]).updateProjectSettings(tmp42.id, conjureSharingChangeResult), done: false };
                  return obj6;
                }
              }
            }
            v3 = 3;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_1_7(true);
          v2 = 2;
          v3 = 1;
          const obj7 = { value: v3(), done: false };
          return obj7;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (null != closure_129_0.share_links_enabled) {
              v2(closure_129_0.share_links_enabled);
            }
            c3 = 0;
          }
          ConjureProjectStore(null);
        }
        v3 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } catch (tmp33) {
        if (tmp4 === c3) {
          v3 = tmp2;
          throw tmp33;
        } else {
          v2 = tmp;
        }
        tmp34 = c3;
      }
    }
  });
  const items2 = [stateFromStores, shareLinksEnabled, loadFailed, setShareLinksEnabled, reload];
  const callback = reload.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let tmp10 = null != stateFromStores;
  const memo = reload.useMemo(() => {
    const obj = { value: "collaborators", label: null };
    const intl = closure_0(shareLinksEnabled[4]).intl;
    obj.label = intl.string(stateFromStores(shareLinksEnabled[5])["a/Tlqf"]);
    items = [obj, , ];
    const obj2 = { value: "link", label: null };
    const intl2 = closure_0(shareLinksEnabled[4]).intl;
    obj2.label = intl2.string(stateFromStores(shareLinksEnabled[5]).e0VakN);
    items[1] = obj2;
    const obj3 = { value: "public", label: null };
    const intl3 = closure_0(shareLinksEnabled[4]).intl;
    obj3.label = intl3.string(stateFromStores(shareLinksEnabled[5])["98MAcX"]);
    items[2] = obj3;
    return items;
  }, []);
  if (tmp10) {
    tmp10 = isProjectOwner(stateFromStores);
  }
  let obj2 = { project: stateFromStores, isOwner: tmp10, options: memo, mode: null, canChange: null, changing: null, loadFailed: null, saveFailed: null, reload: null, changeMode: null };
  let tmp12 = tmp6;
  if (tmp6 == null) {
    let conjureSharingModeResult = null;
    if (null != stateFromStores) {
      conjureSharingModeResult = tmp(tmp2[8]).conjureSharingMode(stateFromStores, shareLinksEnabled);
      const tmpResult = tmp(tmp2[8]);
    }
    tmp12 = conjureSharingModeResult;
  }
  obj2.mode = tmp12;
  let result = null != stateFromStores && tmp10;
  if (result) {
    result = tmp(tmp2[10]).projectSupportsVisibility(stateFromStores);
    const tmpResult2 = tmp(tmp2[10]);
  }
  if (result) {
    result = null != shareLinksEnabled || loadFailed;
    const tmp15 = null != shareLinksEnabled || loadFailed;
  }
  obj2.canChange = result;
  obj2.changing = null != tmp6;
  obj2.loadFailed = loadFailed;
  obj2.saveFailed = tmp7[0];
  obj2.reload = reload;
  obj2.changeMode = callback;
  return obj2;
};
export function conjureSharingOptions() {
  const obj = { value: "collaborators", label: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef4089["a/Tlqf"]);
  items = [obj, , ];
  const obj2 = { value: "link", label: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(_modDef4089.e0VakN);
  items[1] = obj2;
  const obj3 = { value: "public", label: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(_modDef4089["98MAcX"]);
  items[2] = obj3;
  return items;
}