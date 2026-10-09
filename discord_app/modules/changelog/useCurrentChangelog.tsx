// === Module 8104: useCurrentChangelog ===

// Module 8104 (useCurrentChangelog)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 8105 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import ChangelogStore from "ChangelogStore" /* 7009 */;

require = fn;
const ChangelogLoadState = fn(2114).ChangelogLoadState;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChangelog(id, arg1) {
  _require = id;
  importDefault = arg1;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChangelogStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStoresObject = tmp(tmp2[6]).useStateFromStoresObject(first, tmp6, tmp7);
    changelog = stateFromStoresObject.changelog;
    const loadState = stateFromStoresObject.loadState;
    const defaultChangelog = stateFromStoresObject.defaultChangelog;
    if (cResult[5] === changelog) {
      if (cResult[6] === id) {
        if (cResult[7] === loadState) {
          if (cResult[8] === arg1) {
            let tmp10 = cResult[9];
            let tmp11 = cResult[10];
          }
          const effect = loadState.useEffect(tmp10, tmp11);
          if (null == id) {
            if (cResult[11] !== id) {
              const obj2 = { id, changelog: null, loaded: false };
              cResult[11] = id;
              cResult[12] = obj2;
              let tmp20 = obj2;
            } else {
              tmp20 = cResult[12];
            }
            return tmp20;
          } else {
            if (null == changelog) {
              if (loadState === ChangelogLoadState.LOADED_FAILURE) {
                if (cResult[13] === defaultChangelog) {
                  if (cResult[14] === id) {
                    if (cResult[15] === tmp18) {
                      let tmp19 = cResult[16];
                    }
                    return tmp19;
                  }
                }
                const obj3 = { id, changelog: defaultChangelog, loaded: tmp9 !== ChangelogLoadState.NOT_LOADED };
                cResult[13] = defaultChangelog;
                class C {
                  constructor() {
                    tmp2 = null != closure_0;
                    tmp = closure_0;
                    if (tmp2) {
                      tmp3 = changelog;
                      tmp2 = null == changelog;
                    }
                    if (tmp2) {
                      tmp4 = loadState;
                      tmp5 = ChangelogLoadState;
                      tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
                    }
                    if (tmp2) {
                      tmp6 = closure_1;
                      tmp7 = closure_2;
                      obj = closure_1(closure_2[7]);
                      tmp8 = closure_1;
                      changelog = obj.fetchChangelog(tmp, closure_1);
                    }
                    return;
                  }
                }
                cResult[15] = tmp9 !== ChangelogLoadState.NOT_LOADED;
                cResult[16] = obj3;
                tmp19 = obj3;
              }
            }
            if (cResult[17] === changelog) {
              if (cResult[18] === id) {
                if (cResult[19] === tmp16) {
                  let tmp17 = cResult[20];
                }
                return tmp17;
              }
            }
            const obj4 = { id, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
            class C {
              constructor() {
                tmp2 = null != closure_0;
                tmp = closure_0;
                if (tmp2) {
                  tmp3 = changelog;
                  tmp2 = null == changelog;
                }
                if (tmp2) {
                  tmp4 = loadState;
                  tmp5 = ChangelogLoadState;
                  tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
                }
                if (tmp2) {
                  tmp6 = closure_1;
                  tmp7 = closure_2;
                  obj = closure_1(closure_2[7]);
                  tmp8 = closure_1;
                  changelog = obj.fetchChangelog(tmp, closure_1);
                }
                return;
              }
            }
            cResult[18] = id;
            cResult[19] = loadState !== ChangelogLoadState.NOT_LOADED;
            cResult[20] = obj4;
            tmp17 = obj4;
          }
        }
      }
    }
    class C {
      constructor() {
        tmp2 = null != closure_0;
        tmp = closure_0;
        if (tmp2) {
          tmp3 = changelog;
          tmp2 = null == changelog;
        }
        if (tmp2) {
          tmp4 = loadState;
          tmp5 = ChangelogLoadState;
          tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
        }
        if (tmp2) {
          tmp6 = closure_1;
          tmp7 = closure_2;
          obj = closure_1(closure_2[7]);
          tmp8 = closure_1;
          changelog = obj.fetchChangelog(tmp, closure_1);
        }
        return;
      }
    }
    const items1 = [id, changelog, loadState, arg1];
    cResult[5] = changelog;
    cResult[6] = id;
    cResult[7] = loadState;
    cResult[8] = arg1;
    cResult[9] = C;
    cResult[10] = items1;
    tmp11 = items1;
    tmp10 = C;
    const tmpResult = tmp(tmp2[6]);
  }
  const fn = function h() {
    changelog = null;
    if (null != closure_0) {
      changelog = ChangelogStore.getChangelog(closure_0, closure_1);
    }
    let changelog1 = null;
    if (null != closure_0) {
      changelog1 = ChangelogStore.getChangelog(closure_0, "en-US");
    }
    let changelogLoadStatus = null != closure_0;
    if (changelogLoadStatus) {
      changelogLoadStatus = ChangelogStore.getChangelogLoadStatus(closure_0, "en-US");
    }
    const obj = { changelog, loadState: null, defaultChangelog: null, defaultLoadState: null };
    let changelogLoadStatus1 = null != closure_0;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = ChangelogStore.getChangelogLoadStatus(closure_0, closure_1);
    }
    obj.loadState = changelogLoadStatus1;
    obj.defaultChangelog = changelog1;
    obj.defaultLoadState = changelogLoadStatus;
    return obj;
  };
  const items2 = [id, arg1];
  cResult[1] = id;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
  tmp2 = changelog;
}) : (function useChangelog(id, arg1) {
  _require = id;
  closure_1 = arg1;
  const items = [ChangelogStore];
  const items1 = [id, arg1];
  const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items, () => {
    changelog = null;
    if (null != closure_0) {
      changelog = ChangelogStore.getChangelog(closure_0, closure_1);
    }
    let changelog1 = null;
    if (null != closure_0) {
      changelog1 = ChangelogStore.getChangelog(closure_0, "en-US");
    }
    let changelogLoadStatus = null != closure_0;
    if (changelogLoadStatus) {
      changelogLoadStatus = ChangelogStore.getChangelogLoadStatus(closure_0, "en-US");
    }
    const obj = { changelog, loadState: null, defaultChangelog: null, defaultLoadState: null };
    let changelogLoadStatus1 = null != closure_0;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = ChangelogStore.getChangelogLoadStatus(closure_0, closure_1);
    }
    obj.loadState = changelogLoadStatus1;
    obj.defaultChangelog = changelog1;
    obj.defaultLoadState = changelogLoadStatus;
    return obj;
  }, items1);
  changelog = stateFromStoresObject.changelog;
  const loadState = stateFromStoresObject.loadState;
  const items2 = [id, changelog, loadState, arg1];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = loadState.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == changelog;
    }
    if (tmp2) {
      tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
    }
    if (tmp2) {
      changelog = ChangeLogActionCreatorsDefault.fetchChangelog(closure_0, closure_1);
    }
  }, items2);
  if (null == id) {
    const obj2 = { id, changelog: null, loaded: false };
    let obj4 = obj2;
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        const obj3 = { id, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
        obj4 = obj3;
      }
    }
    obj4 = { id, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj4;
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export const useChangelog = tmp2;
export const useCurrentChangelog = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentChangelog() {
  const cResult = c.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function n() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChangelogStore];
    const fn2 = function s() {
      return ChangelogStore.latestChangelogId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores1 = useStateFromStores.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChangelogStore];
    const fn3 = function f() {
      return ChangelogStore.getConfig();
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp13 = fn3;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = useStateFromStores;
  const stateFromStores2 = useStateFromStores.useStateFromStores(tmp12, tmp13);
  let tmp16 = null != stateFromStores2;
  if (tmp16) {
    const _Object = Object;
    tmp16 = 0 === Object.keys(stateFromStores2).length;
  }
  if (cResult[6] === stateFromStores2) {
    if (cResult[7] === stateFromStores1) {
      let tmp17 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [ChangelogStore];
      const fn4 = function b() {
        return ChangelogStore.overrideId();
      };
      cResult[9] = items3;
      cResult[10] = fn4;
      let tmp20 = fn4;
      let tmp19 = items3;
    } else {
      tmp19 = cResult[9];
      tmp20 = cResult[10];
    }
    const stateFromStores3 = useStateFromStores.useStateFromStores(tmp19, tmp20);
    const tmpResult6 = useStateFromStores;
    ({ changelog, loaded } = closure_7(stateFromStores1, stateFromStores));
    const tmp24 = closure_7(stateFromStores1, stateFromStores);
    ({ changelog: changelog2, loaded: loaded2 } = closure_7(stateFromStores3, stateFromStores));
    if (null != stateFromStores3) {
      if (cResult[11] === changelog2) {
        if (cResult[12] === stateFromStores3) {
          if (cResult[13] === loaded2) {
            let tmp28 = cResult[14];
          }
          return tmp28;
        }
      }
      const obj2 = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
      cResult[11] = changelog2;
      cResult[12] = stateFromStores3;
      cResult[13] = loaded2;
      cResult[14] = obj2;
      tmp28 = obj2;
    }
    if (cResult[15] === tmp17) {
      if (cResult[16] === changelog) {
        if (cResult[17] === stateFromStores1) {
          if (cResult[18] === tmp26) {
            let tmp27 = cResult[19];
          }
          return tmp27;
        }
      }
    }
    const obj3 = { id: stateFromStores1, changelog, loaded: tmp16 || loaded, clientTooOld: tmp17 };
    cResult[15] = tmp17;
    cResult[16] = changelog;
    cResult[17] = stateFromStores1;
    cResult[18] = tmp16 || loaded;
    cResult[19] = obj3;
    tmp27 = obj3;
    const tmp25 = closure_7(stateFromStores3, stateFromStores);
  }
  let tmp18 = null != stateFromStores2;
  if (tmp18) {
    const _Object2 = Object;
    tmp18 = Object.keys(stateFromStores2).length > 0;
  }
  if (tmp18) {
    tmp18 = null == stateFromStores1;
  }
  cResult[6] = stateFromStores2;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp18;
  tmp17 = tmp18;
  const tmpResult5 = useStateFromStores;
}) : (function useCurrentChangelog() {
  const items = [LocaleStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => locale.locale);
  const items1 = [ChangelogStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => ChangelogStore.latestChangelogId());
  const items2 = [ChangelogStore];
  const stateFromStores2 = useStateFromStores.useStateFromStores(items2, () => ChangelogStore.getConfig());
  let tmp7 = null != stateFromStores2;
  if (tmp7) {
    const _Object = Object;
    tmp7 = 0 === Object.keys(stateFromStores2).length;
  }
  let tmp9 = null != stateFromStores2;
  if (tmp9) {
    const _Object2 = Object;
    tmp9 = Object.keys(stateFromStores2).length > 0;
  }
  if (tmp9) {
    tmp9 = null == stateFromStores1;
  }
  const items3 = [ChangelogStore];
  const stateFromStores3 = useStateFromStores.useStateFromStores(items3, () => ChangelogStore.overrideId());
  const tmpResult = useStateFromStores;
  ({ changelog, loaded } = closure_7(stateFromStores1, stateFromStores));
  const tmp12 = closure_7(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = closure_7(stateFromStores3, stateFromStores));
  if (null == stateFromStores3) {
    const obj4 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
    let obj5 = obj4;
  } else {
    obj5 = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj5;
});