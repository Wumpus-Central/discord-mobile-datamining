// === Module 7764: useCurrentChangelog ===

// Module 7764 (useCurrentChangelog)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import ChangelogConstants from "ChangelogConstants" /* 2102 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 7765 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ChangelogStore from "ChangelogStore" /* 4904 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChangelogLoadState = ChangelogConstants.ChangelogLoadState;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let changelog;
  let first;
  _require = id;
  let closure_1 = arg1;
  let tmp2 = changelog;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChangelogStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(tmp2[6]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
    changelog = stateFromStoresObject.changelog;
    const loadState = stateFromStoresObject.loadState;
    const defaultChangelog = stateFromStoresObject.defaultChangelog;
    if (cResult[5] === changelog) {
      if (cResult[6] === id) {
        if (cResult[7] === loadState) {
          let tmp10;
          let tmp11;
          if (cResult[8] === arg1) {
            tmp10 = cResult[9];
            tmp11 = cResult[10];
          }
          const effect = loadState.useEffect(tmp10, tmp11);
          if (null == id) {
            let tmp20;
            if (cResult[11] !== id) {
              const obj2 = { id, changelog: null, loaded: false };
              cResult[11] = id;
              cResult[12] = obj2;
              tmp20 = obj2;
            } else {
              tmp20 = cResult[12];
            }
            return tmp20;
          } else {
            if (null == changelog) {
              if (loadState === ChangelogLoadState.LOADED_FAILURE) {
                if (cResult[13] === defaultChangelog) {
                  if (cResult[14] === id) {
                    let tmp19;
                    if (cResult[15] === tmp9 !== ChangelogLoadState.NOT_LOADED) {
                      tmp19 = cResult[16];
                    }
                    return tmp19;
                  }
                }
                const obj3 = { id, changelog: defaultChangelog, loaded: tmp9 !== ChangelogLoadState.NOT_LOADED };
                cResult[13] = defaultChangelog;
                cResult[14] = id;
                cResult[15] = tmp9 !== ChangelogLoadState.NOT_LOADED;
                cResult[16] = obj3;
                tmp19 = obj3;
              }
            }
            if (cResult[17] === changelog) {
              if (cResult[18] === id) {
                let tmp17;
                if (cResult[19] === loadState !== ChangelogLoadState.NOT_LOADED) {
                  tmp17 = cResult[20];
                }
                return tmp17;
              }
            }
            const obj4 = { id, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
            cResult[17] = changelog;
            cResult[18] = id;
            cResult[19] = loadState !== ChangelogLoadState.NOT_LOADED;
            cResult[20] = obj4;
            tmp17 = obj4;
          }
        }
      }
    }
    const fn2 = function f() {
      const tmp2 = null != id && null == changelog && loadState === ChangelogLoadState.NOT_LOADED;
      if (tmp2) {
        const obj = ChangeLogActionCreatorsDefault;
        changelog = obj.fetchChangelog(id, closure_1);
      }
    };
    const items1 = [id, changelog, loadState, arg1];
    cResult[5] = changelog;
    cResult[6] = id;
    cResult[7] = loadState;
    cResult[8] = arg1;
    cResult[9] = fn2;
    cResult[10] = items1;
    tmp11 = items1;
    tmp10 = fn2;
  }
  const fn = function h() {
    let changelogLoadStatus1;
    changelog = null;
    if (null != id) {
      changelog = ChangelogStore.getChangelog(id, closure_1);
    }
    let changelog1 = null;
    if (null != id) {
      changelog1 = ChangelogStore.getChangelog(id, "en-US");
    }
    const changelogLoadStatus = null != id && ChangelogStore.getChangelogLoadStatus(id, "en-US");
    const obj = { changelog, loadState: changelogLoadStatus1, defaultChangelog: changelog1, defaultLoadState: changelogLoadStatus };
    changelogLoadStatus1 = null != id && ChangelogStore.getChangelogLoadStatus(id, closure_1);
    return obj;
  };
  const items2 = [id, arg1];
  cResult[1] = id;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : ((id, arg1) => {
  let changelog;
  let defaultChangelog;
  let defaultLoadState;
  let obj4;
  _require = id;
  let closure_1 = arg1;
  let obj = require("useStateFromStores");
  const items = [ChangelogStore];
  const items1 = [id, arg1];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let changelogLoadStatus1;
    changelog = null;
    if (null != id) {
      changelog = ChangelogStore.getChangelog(id, closure_1);
    }
    let changelog1 = null;
    if (null != id) {
      changelog1 = ChangelogStore.getChangelog(id, "en-US");
    }
    const changelogLoadStatus = null != id && ChangelogStore.getChangelogLoadStatus(id, "en-US");
    const obj = { changelog, loadState: changelogLoadStatus1, defaultChangelog: changelog1, defaultLoadState: changelogLoadStatus };
    changelogLoadStatus1 = null != id && ChangelogStore.getChangelogLoadStatus(id, closure_1);
    return obj;
  }, items1);
  changelog = stateFromStoresObject.changelog;
  const loadState = stateFromStoresObject.loadState;
  const items2 = [id, changelog, loadState, arg1];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = loadState.useEffect(() => {
    const tmp2 = null != id && null == changelog && loadState === ChangelogLoadState.NOT_LOADED;
    if (tmp2) {
      const obj = ChangeLogActionCreatorsDefault;
      changelog = obj.fetchChangelog(id, closure_1);
    }
  }, items2);
  if (null == id) {
    obj4 = { id, changelog: null, loaded: false };
    const obj2 = { id, changelog: null, loaded: false };
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        obj4 = { id, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
        const obj3 = { id, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
      }
    }
    obj4 = { id, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj4;
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let locale;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChangelogStore];
    const fn2 = function s() {
      return ChangelogStore.latestChangelogId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = useStateFromStores;
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChangelogStore];
    class C {
      constructor() {
        return ChangelogStore.getConfig();
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    tmp13 = C;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult5 = useStateFromStores;
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp12, tmp13);
  let tmp16 = null != stateFromStores2;
  if (tmp16) {
    const _Object = Object;
    tmp16 = 0 === Object.keys(stateFromStores2).length;
  }
  if (cResult[6] === stateFromStores2) {
    let tmp17;
    if (cResult[7] === stateFromStores1) {
      tmp17 = cResult[8];
    }
    const _Symbol = Symbol;
    class C {
      constructor() {
        return ChangelogStore.getConfig();
      }
    }
    const tmpResult6 = useStateFromStores;
    const stateFromStores3 = tmpResult6.useStateFromStores(tmp20, tmp21);
    ({ changelog, loaded } = closure_7(stateFromStores1, stateFromStores));
    closure_7(stateFromStores1, stateFromStores);
    ({ changelog: changelog2, loaded: loaded2 } = closure_7(stateFromStores3, stateFromStores));
    closure_7(stateFromStores3, stateFromStores);
    if (null != stateFromStores3) {
      if (cResult[11] === changelog2) {
        if (cResult[12] === stateFromStores3) {
          let tmp28;
          if (cResult[13] === loaded2) {
            tmp28 = cResult[14];
          }
          return tmp28;
        }
      }
      const obj2 = { id: null, changelog: changelog2, loaded: loaded2, clientTooOld: false };
      class C {
        constructor() {
          return ChangelogStore.getConfig();
        }
      }
      cResult[11] = changelog2;
      cResult[12] = stateFromStores3;
      cResult[13] = loaded2;
      cResult[14] = obj2;
      tmp28 = obj2;
    }
    if (cResult[15] === tmp17) {
      if (cResult[16] === changelog) {
        if (cResult[17] === stateFromStores1) {
          let tmp27;
          if (cResult[18] === (tmp16 || loaded)) {
            tmp27 = cResult[19];
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
}) : (() => {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let locale;
  let obj5;
  const items = [LocaleStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [ChangelogStore];
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChangelogStore.latestChangelogId());
  const items2 = [ChangelogStore];
  const obj3 = useStateFromStores;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ChangelogStore.getConfig());
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
  const tmpResult = useStateFromStores;
  const stateFromStores3 = tmpResult.useStateFromStores(items3, () => ChangelogStore.overrideId());
  ({ changelog, loaded } = closure_7(stateFromStores1, stateFromStores));
  closure_7(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = closure_7(stateFromStores3, stateFromStores));
  closure_7(stateFromStores3, stateFromStores);
  if (null == stateFromStores3) {
    obj5 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
    const obj4 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
  } else {
    obj5 = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export const useChangelog = tmp2;
export const useCurrentChangelog = tmp3;