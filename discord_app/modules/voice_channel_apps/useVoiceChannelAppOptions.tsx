// === Module 17019: useVoiceChannelAppOptions ===

// Module 17019 (useVoiceChannelAppOptions)
import c from "c" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 6670 */;
import ConjureUtils from "ConjureUtils" /* 6756 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8735 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;

const require = globalThis.__r;
const useGetOrFetchApplicationsDefault = useGetOrFetchApplications;

require = fn;
function voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, guildId) {
  const map = new Map();
  const items = [...stateFromStoresArray1];
  for (const item10020 of items) {
    let obj2 = ConjureUtils;
    if (obj2.isConjureProjectInGuild(item10020, arg2)) {
      let result = map.set(item10020.application_id, item10020);
    }
    continue;
  }
  const items1 = [...map.values()];
  return items1.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
}
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(46);
  if (cResult[0] !== guildId) {
    const fn = function l() {
      ConjureActionCreators.listProjects(closure_0);
    };
    let items = [guildId];
    cResult[0] = guildId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    const fn2 = function s() {
      return closure_5.getOwnedProjects();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp8);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureProjectStore];
    cResult[5] = items2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== guildId) {
    const fn3 = function v() {
      return ConjureProjectStore.getSharedProjects(closure_0);
    };
    const items3 = [guildId];
    cResult[6] = guildId;
    cResult[7] = fn3;
    cResult[8] = items3;
    let tmp14 = items3;
    let tmp13 = fn3;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp11, tmp13, tmp14);
  if (cResult[9] === guildId) {
    if (cResult[10] === stateFromStoresArray) {
      if (cResult[11] === stateFromStoresArray1) {
        let arr5 = cResult[12];
      }
      if (cResult[13] !== arr5) {
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const fn4 = function w(application_id) {
            return application_id.application_id;
          };
          cResult[15] = fn4;
          let tmp17 = fn4;
        } else {
          tmp17 = cResult[15];
        }
        const mapped = arr5.map(tmp17);
        cResult[13] = arr5;
        cResult[14] = mapped;
      } else {
        const tmp21 = useGetOrFetchApplicationsDefault(cResult[14], false);
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const _Set = Set;
          const set = new Set();
          cResult[16] = set;
          let tmp22 = set;
        } else {
          tmp22 = cResult[16];
        }
        importDefault = obj2.useRef(tmp22);
        const _Symbol3 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const _Set2 = Set;
          const set1 = new Set();
          cResult[17] = set1;
          let tmp27 = set1;
        } else {
          tmp27 = cResult[17];
        }
        [dependencyMap, _slicedToArray] = obj2.useState(tmp27);
        const tmp33 = _slicedToArray(obj2.useState(tmp27), 2);
        noop = _slicedToArray(obj2.useState(false), 2)[1];
        if (cResult[18] === arr5) {
          if (cResult[19] === tmp21) {
            let tmp36 = cResult[20];
          }
          ConjureProjectStore = tmp36;
          if (cResult[21] !== tmp36) {
            const fn5 = function x() {
              const found = closure_5.filter((item) => {
                const current = ref.current;
                return !current.has(item);
              });
              if (0 !== found.length) {
                for (const item10010 of found) {
                  let current = ref.current;
                  let addResult = current.add(item10010);
                  continue;
                }
                const applications = ref(set[11]).fetchApplications(found, true);
                const obj = ref(set[11]);
                applications.catch(() => closure_1_4(true)).finally(() => _slicedToArray((arg0) => {
                  const items = [...closure_1_0];
                  return new Set(items);
                }));
                const catchPromise = applications.catch(() => closure_1_4(true));
              }
            };
            const items4 = [tmp36];
            cResult[21] = tmp36;
            cResult[22] = fn5;
            cResult[23] = items4;
            let tmp39 = items4;
            let tmp38 = fn5;
          } else {
            tmp38 = cResult[22];
            tmp39 = cResult[23];
          }
          const effect1 = obj2.useEffect(tmp38, tmp39);
          if (cResult[24] === arr5) {
            if (cResult[25] === tmp21) {
              let arr8 = cResult[26];
            }
            const _Symbol4 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              const items5 = [ConjureProjectStore];
              cResult[27] = items5;
              let tmp42 = items5;
            } else {
              tmp42 = cResult[27];
            }
            if (cResult[28] !== guildId) {
              class D {
                constructor() {
                  return closure_5.getGuildProjectsFetchState(closure_0);
                }
              }
              const items6 = [guildId];
              cResult[28] = guildId;
              cResult[29] = D;
              cResult[30] = items6;
              let tmp45 = items6;
            } else {
              class D {
                constructor() {
                  return closure_5.getGuildProjectsFetchState(closure_0);
                }
              }
              tmp45 = cResult[30];
            }
            const stateFromStores = tmp(504).useStateFromStores(tmp42, D, tmp45);
            let str = "unattempted";
            if ("unattempted" !== stateFromStores) {
              class D {
                constructor() {
                  return closure_5.getGuildProjectsFetchState(closure_0);
                }
              }
              if ("loading" === stateFromStores) {
                class D {
                  constructor() {
                    return closure_5.getGuildProjectsFetchState(closure_0);
                  }
                }
              } else {
                class D {
                  constructor() {
                    return closure_5.getGuildProjectsFetchState(closure_0);
                  }
                }
              }
              str = tmp48;
            }
            if (cResult[31] === str) {
              class D {
                constructor() {
                  return closure_5.getGuildProjectsFetchState(closure_0);
                }
              }
            }
            const tmpResult5 = tmp(504);
            let obj3 = { hasRows: arr8.length > 0, loadFailed: "error" === stateFromStores || tmp35, fetchPhase: str };
            const result = tmp(17020).voiceChannelAppListState(obj3);
            cResult[31] = str;
            cResult[32] = "error" === stateFromStores || tmp35;
            cResult[33] = arr8.length > 0;
            cResult[34] = result;
            const tmpResult6 = tmp(17020);
          }
          closure_130_0 = tmp21;
          let found = arr5.filter((item, index) => dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
          cResult[24] = arr5;
          cResult[25] = tmp21;
          cResult[26] = found;
          arr8 = found;
        }
        closure_129_0 = tmp21;
        const found1 = arr5.filter((item, index) => !dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
        const mapped1 = found1.map((application_id) => application_id.application_id);
        cResult[18] = arr5;
        cResult[19] = tmp21;
        cResult[20] = mapped1;
        tmp36 = mapped1;
        const tmp34 = _slicedToArray(obj2.useState(false), 2);
      }
    }
  }
  const tmp16 = voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, guildId);
  cResult[9] = guildId;
  cResult[10] = stateFromStoresArray;
  cResult[11] = stateFromStoresArray1;
  cResult[12] = tmp16;
  arr5 = tmp16;
  const tmpResult4 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  let items = [arg0];
  const effect = noop.useEffect(() => {
    ConjureActionCreators.listProjects(closure_0);
  }, items);
  const items1 = [ref];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => ref.getOwnedProjects());
  let obj2 = require("initialize");
  let tmp2 = _require;
  const items2 = [ref];
  const items3 = [arg0];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items2, () => ConjureProjectStore.getSharedProjects(closure_0), items3);
  const items4 = [stateFromStoresArray, stateFromStoresArray1, arg0];
  const memo = noop.useMemo(() => voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, closure_0), items4);
  const items5 = [memo];
  const memo1 = noop.useMemo(() => memo.map((application_id) => application_id.application_id), items5);
  const tmp9 = stateFromStoresArray(stateFromStoresArray1[10])(memo1, false);
  noop = tmp9;
  let obj3 = require("initialize");
  const tmp8 = stateFromStoresArray;
  ref = noop.useRef(new Set());
  const set = new Set();
  const set1 = new Set();
  [voiceChannelAppCandidates, closure_7] = memo(noop.useState(new Set()), 2);
  const tmp13 = memo(noop.useState(false), 2);
  closure_8 = tmp13[1];
  const items6 = [memo, tmp9];
  const memo2 = noop.useMemo(() => {
    dependencyMap = closure_4;
    const found = memo.filter((item, index) => !dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
    return found.map((application_id) => application_id.application_id);
  }, items6);
  const items7 = [memo2];
  const effect1 = noop.useEffect(() => {
    const found = memo2.filter((item) => {
      const current = ref.current;
      return !current.has(item);
    });
    if (0 !== found.length) {
      for (const item10010 of found) {
        let current = ref.current;
        let addResult = current.add(item10010);
        continue;
      }
      const applications = stateFromStoresArray(stateFromStoresArray1[11]).fetchApplications(found, true);
      const obj = stateFromStoresArray(stateFromStoresArray1[11]);
      applications.catch(() => closure_1_8(true)).finally(() => closure_2_7((arg0) => {
        const items = [...closure_1_0];
        return new Set(items);
      }));
      const catchPromise = applications.catch(() => closure_1_8(true));
    }
  }, items7);
  const items8 = [memo, tmp9];
  const memo3 = noop.useMemo(() => {
    dependencyMap = closure_4;
    return memo.filter((item, index) => dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
  }, items8);
  const tmp12 = memo(noop.useState(new Set()), 2);
  const items9 = [ref];
  const items10 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items9, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items10);
  let str = "unattempted";
  if ("unattempted" !== stateFromStores) {
    if ("loading" === stateFromStores) {
      let str3 = "pending";
    } else {
      str3 = "settled";
    }
    str = str3;
  }
  const obj4 = require("initialize");
  const obj5 = { hasRows: memo3.length > 0, loadFailed: null, fetchPhase: null };
  let first = "error" === stateFromStores;
  if (!first) {
    first = tmp13[0];
  }
  obj5.loadFailed = first;
  obj5.fetchPhase = str;
  const items11 = [memo3];
  const result = tmp2(stateFromStoresArray1[12]).voiceChannelAppListState(obj5);
  const memo4 = obj.useMemo(() => memo3.map((preview_application_id) => {
    let application_id = preview_application_id.preview_application_id;
    if (application_id == null) {
      application_id = preview_application_id.application_id;
    }
    return application_id;
  }), items11);
  const tmp21 = tmp8(stateFromStoresArray1[10])(memo4);
  closure_11 = tmp21;
  let obj6 = { options: null, listState: result };
  const items12 = [memo3, tmp21];
  obj6.options = noop.useMemo(() => memo3.map((application_id, index) => {
    application_id = application_id.application_id;
    const obj = { applicationId: application_id, name: application_id.name, iconApplication: null, iconURL: null };
    let tmp2 = tmp;
    if (dependencyMap[index] == null) {
      const obj2 = { id: application_id, icon: null };
      tmp2 = obj2;
    }
    obj.iconApplication = tmp2;
    let icon;
    if (dependencyMap[index] != null) {
      icon = tmp.icon;
    }
    let tmp4 = null;
    if (null != icon) {
      ({ id: obj4.id, icon: obj4.icon } = tmp);
      let applicationIconURL = stateFromStoresArray(stateFromStoresArray1[3]).getApplicationIconURL({ id: null, icon: null, size: 24 });
      if (applicationIconURL == null) {
        applicationIconURL = null;
      }
      tmp4 = applicationIconURL;
      const obj3 = stateFromStoresArray(stateFromStoresArray1[3]);
      const obj6 = { id: null, icon: null, size: 24 };
    }
    obj.iconURL = tmp4;
    return obj;
  }), items12);
  return obj6;
});
ReactCompilerGating = fn(558);
function voiceChannelAppRows(arr, arg1) {
  closure_0 = arg1;
  return arr.filter((item, index) => dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
}
function voiceChannelAppIdsToFetch(arr, arg1) {
  closure_0 = arg1;
  const found = arr.filter((item, index) => !dependencyMap(stateFromStoresArray1[5]).isEmbeddedApplication(dependencyMap[index]));
  return found.map((application_id) => application_id.application_id);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppOptions.tsx");

export { voiceChannelAppCandidates };
export { voiceChannelAppRows };
export { voiceChannelAppIdsToFetch };
export const useVoiceChannelAppSettingOptions = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg1;
  const cResult = c.c(11);
  ({ options, listState } = closure_7(arg0));
  let tmp5 = null;
  if (null != arg1) {
    tmp5 = null;
    if (!options.some((applicationId) => applicationId.applicationId === closure_0)) {
      tmp5 = arg1;
    }
  }
  const tmp4 = closure_7(arg0);
  const getOrFetchApplication = useGetOrFetchApplications.useGetOrFetchApplication(tmp5);
  if (null != tmp5) {
    if (null != getOrFetchApplication) {
      if (cResult[3] === getOrFetchApplication) {
        if (cResult[4] === tmp5) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] === options) {
          if (cResult[7] === tmp8) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] !== tmp14) {
            const obj2 = { options: tmp14, listState: "rows" };
            cResult[9] = tmp14;
            cResult[10] = obj2;
          }
        }
        const items = [tmp8];
        HermesBuiltin.arraySpread(options, 1);
        cResult[6] = options;
        cResult[7] = tmp8;
        cResult[8] = items;
        tmp14 = items;
      }
      const obj3 = { applicationId: tmp5, name: getOrFetchApplication.name, iconApplication: null, iconURL: null };
      let tmp9 = getOrFetchApplication;
      if (getOrFetchApplication == null) {
        const obj4 = { id: tmp5, icon: null };
        tmp9 = obj4;
      }
      obj3.iconApplication = tmp9;
      let icon;
      if (getOrFetchApplication != null) {
        icon = getOrFetchApplication.icon;
      }
      let tmp11 = null;
      if (null != icon) {
        ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
        let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, size: 24 });
        if (applicationIconURL == null) {
          applicationIconURL = null;
        }
        tmp11 = applicationIconURL;
        const obj5 = { id: null, icon: null, size: 24 };
      }
      obj3.iconURL = tmp11;
      cResult[3] = getOrFetchApplication;
      cResult[4] = tmp5;
      cResult[5] = obj3;
      tmp8 = obj3;
    }
  }
  if (cResult[0] === listState) {
    if (cResult[1] === options) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const obj8 = { options, listState };
  cResult[0] = listState;
  cResult[1] = options;
  cResult[2] = obj8;
  tmp7 = obj8;
  const tmpResult = useGetOrFetchApplications;
}) : ((arg0, arg1) => {
  _require = arg1;
  const tmp = closure_7(arg0);
  options = tmp.options;
  const listState = tmp.listState;
  let tmp2 = null;
  if (null != arg1) {
    tmp2 = null;
    if (!options.some((applicationId) => applicationId.applicationId === closure_0)) {
      tmp2 = arg1;
    }
  }
  closure_3 = tmp2;
  const getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp2);
  let items = [options, listState, tmp2, getOrFetchApplication];
  return getOrFetchApplication.useMemo(() => {
    if (null != id) {
      if (null != getOrFetchApplication) {
        const obj4 = { applicationId: id, name: getOrFetchApplication.name, iconApplication: null, iconURL: null };
        let tmp2 = getOrFetchApplication;
        if (getOrFetchApplication == null) {
          const obj = { id, icon: null };
          tmp2 = obj;
        }
        obj4.iconApplication = tmp2;
        let icon;
        if (getOrFetchApplication != null) {
          icon = getOrFetchApplication.icon;
        }
        let tmp4 = null;
        if (null != icon) {
          ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
          let applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, size: 24 });
          if (applicationIconURL == null) {
            applicationIconURL = null;
          }
          tmp4 = applicationIconURL;
          const obj5 = { id: null, icon: null, size: 24 };
        }
        let obj6 = { options: null, listState: "rows" };
        obj4.iconURL = tmp4;
        const items = [obj4];
        HermesBuiltin.arraySpread(options, 1);
        obj6.options = items;
      }
      return obj6;
    }
    obj6 = { options, listState };
    const obj10 = { options, listState };
  }, items);
});