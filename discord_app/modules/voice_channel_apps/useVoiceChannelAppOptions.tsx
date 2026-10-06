// discord_app/modules/voice_channel_apps/useVoiceChannelAppOptions.tsx
import react2 from "../../../_runtime/00576_react.js";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import useGetOrFetchApplications from "../applications/useGetOrFetchApplications.tsx";
import ConjureUtils from "../conjure/shared/ConjureUtils.tsx";
import ConjureActionCreators from "../conjure/projects/ConjureActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../_runtime/00019_react.js";
import ConjureProjectStore_mod from "../conjure/projects/ConjureProjectStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const useGetOrFetchApplicationsDefault = useGetOrFetchApplications;
let _require, importDefault, map, name, set;

const f128075 = (application_id) => application_id.application_id;
function voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, guildId) {
  map = new Map();
  const items = [...stateFromStoresArray1];
  for (const item10020 of items) {
    let obj2 = ConjureUtils;
    if (obj2.isConjureProjectInGuild(item10020, guildId)) {
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
let react = react_mod;
let ConjureProjectStore = ConjureProjectStore_mod;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guildId) {
      let closure_4;
      let closure_5;
      let ref;
      let tmp11;
      let tmp13;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      _require = guildId;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(46);
      if (cResult[0] !== guildId) {
        const fn = function l() {
          const obj = ConjureActionCreators;
          obj.listProjects(guildId);
        };
        let items = [guildId];
        cResult[0] = guildId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      let obj2 = react;
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ConjureProjectStore];
        const fn2 = function s() {
          return closure_5.getOwnedProjects();
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
        tmp8 = cResult[4];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[5] = items2;
        tmp11 = items2;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== guildId) {
        const fn3 = function v() {
          return ConjureProjectStore.getSharedProjects(guildId);
        };
        const items3 = [guildId];
        cResult[6] = guildId;
        cResult[7] = fn3;
        cResult[8] = items3;
        tmp14 = items3;
        tmp13 = fn3;
      } else {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      const tmpResult4 = tmp(504);
      const stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp11, tmp13, tmp14);
      if (cResult[9] === guildId) {
        if (cResult[10] === stateFromStoresArray) {
          let arr5;
          let tmp17;
          let tmp22;
          let tmp25;
          if (cResult[11] === stateFromStoresArray1) {
            arr5 = cResult[12];
          }
          if (cResult[13] !== arr5) {
            let tmp18;
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const fn4 = function w(application_id) {
                return application_id.application_id;
              };
              cResult[15] = fn4;
              tmp18 = fn4;
            } else {
              tmp18 = cResult[15];
            }
            const mapped = arr5.map(tmp18);
            cResult[13] = arr5;
            cResult[14] = mapped;
            tmp17 = mapped;
          } else {
            tmp17 = cResult[14];
          }
          const tmp21 = useGetOrFetchApplicationsDefault(tmp17, false);
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            cResult[16] = set;
            tmp22 = set;
          } else {
            tmp22 = cResult[16];
          }
          importDefault = obj2.useRef(tmp22);
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const _Set2 = Set;
            const self3 = this;
            const self4 = this;
            const set1 = new Set();
            cResult[17] = set1;
            tmp25 = set1;
          } else {
            tmp25 = cResult[17];
          }
          const tmp29 = _slicedToArray(obj2.useState(tmp25), 2);
          [dependencyMap, _slicedToArray] = tmp29;
          react = _slicedToArray(obj2.useState(false), 2)[1];
          _slicedToArray(obj2.useState(false), 2);
          if (cResult[18] === arr5) {
            let tmp32;
            let tmp35;
            let tmp34;
            if (cResult[19] === tmp21) {
              tmp32 = cResult[20];
            }
            ConjureProjectStore = tmp32;
            if (cResult[21] !== tmp32) {
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
                  const obj = ref(dependencyMap[11]);
                  const applications = obj.fetchApplications(found, true);
                  const catchPromise = applications.catch(() => closure_1_4(true));
                  catchPromise.finally(() => {
                    let args;
                    return _slicedToArray((arg0) => {
                      const items = [...closure_1_0];
                      set = new Set(items);
                      return set;
                    });
                  });
                }
              };
              const items4 = [tmp32];
              cResult[21] = tmp32;
              cResult[22] = fn5;
              cResult[23] = items4;
              tmp35 = items4;
              tmp34 = fn5;
            } else {
              tmp34 = cResult[22];
              tmp35 = cResult[23];
            }
            const effect1 = obj2.useEffect(tmp34, tmp35);
            if (cResult[24] === arr5) {
              let arr8;
              let tmp38;
              let tmp41;
              if (cResult[25] === tmp21) {
                arr8 = cResult[26];
              }
              const _Symbol4 = Symbol;
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                const items5 = [ConjureProjectStore];
                cResult[27] = items5;
                tmp38 = items5;
              } else {
                tmp38 = cResult[27];
              }
              if (cResult[28] !== guildId) {
                class D {
                  constructor() {
                    return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                  }
                }
                const items6 = [guildId];
                cResult[28] = guildId;
                cResult[29] = D;
                cResult[30] = items6;
                tmp41 = items6;
              } else {
                class D {
                  constructor() {
                    return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                  }
                }
                tmp41 = cResult[30];
              }
              const tmpResult5 = tmp(504);
              const stateFromStores = tmpResult5.useStateFromStores(tmp38, D, tmp41);
              let str = "unattempted";
              if ("unattempted" !== stateFromStores) {
                class D {
                  constructor() {
                    return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                  }
                }
                if ("loading" === stateFromStores) {
                  class D {
                    constructor() {
                      return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                    }
                  }
                } else {
                  class D {
                    constructor() {
                      return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                    }
                  }
                }
                str = tmp44;
              }
              if (cResult[31] === str) {
                class D {
                  constructor() {
                    return ConjureProjectStore.getGuildProjectsFetchState(guildId);
                  }
                }
              }
              let obj3 = {
                hasRows: arr8.length > 0,
                loadFailed: "error" === stateFromStores || tmp31,
                fetchPhase: str,
              };
              const tmpResult6 = tmp(17020);
              const result = tmpResult6.voiceChannelAppListState(obj3);
              cResult[31] = str;
              cResult[32] = "error" === stateFromStores || tmp31;
              cResult[33] = arr8.length > 0;
              cResult[34] = result;
            }
            _require = tmp21;
            let found = arr5.filter((item, index) => {
              const obj = closure_2_0(stateFromStoresArray1[5]);
              return obj.isEmbeddedApplication(closure_0[index]);
            });
            cResult[24] = arr5;
            cResult[25] = tmp21;
            cResult[26] = found;
            arr8 = found;
          }
          _require = tmp21;
          const found1 = arr5.filter((item, index) => {
            const obj = closure_2_0(stateFromStoresArray1[5]);
            return !obj.isEmbeddedApplication(closure_0[index]);
          });
          const mapped1 = found1.map(f128075);
          cResult[18] = arr5;
          cResult[19] = tmp21;
          cResult[20] = mapped1;
          tmp32 = mapped1;
        }
      }
      const tmp16 = voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, guildId);
      cResult[9] = guildId;
      cResult[10] = stateFromStoresArray;
      cResult[11] = stateFromStoresArray1;
      cResult[12] = tmp16;
      arr5 = tmp16;
    }
  : (arg0) => {
      let closure_4;
      let items12;
      let ref;
      let stateFromStoresArray1;
      let tmp20;
      _require = arg0;
      let obj = react;
      let items = [arg0];
      const effect = react.useEffect(() => {
        const obj = ConjureActionCreators;
        obj.listProjects(closure_0);
      }, items);
      let tmp2 = _require;
      let obj2 = require("get initialized");
      const items1 = [ref];
      const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => ref.getOwnedProjects());
      let obj3 = require("get initialized");
      const items2 = [ref];
      const items3 = [arg0];
      stateFromStoresArray1 = obj3.useStateFromStoresArray(
        items2,
        () => ConjureProjectStore.getSharedProjects(closure_0),
        items3,
      );
      const items4 = [stateFromStoresArray, stateFromStoresArray1, arg0];
      const memo = react.useMemo(
        () => voiceChannelAppCandidates(stateFromStoresArray, stateFromStoresArray1, closure_0),
        items4,
      );
      const items5 = [memo];
      const memo1 = react.useMemo(() => memo.map((application_id) => application_id.application_id), items5);
      const tmp9 = stateFromStoresArray(stateFromStoresArray1[10])(memo1, false);
      react = tmp9;
      const useRef = react.useRef;
      set = new Set();
      ref = useRef(set);
      const useState = react.useState;
      const set1 = new Set();
      [voiceChannelAppCandidates, closure_7] = memo(useState(set1), 2);
      memo(useState(set1), 2);
      const tmp13 = memo(react.useState(false), 2);
      let closure_8 = tmp13[1];
      const items6 = [memo, tmp9];
      const first = tmp13[0];
      const memo2 = react.useMemo(() => {
        closure_0 = closure_4;
        const found = memo.filter((item, index) => {
          const obj = closure_2_0(stateFromStoresArray1[5]);
          return !obj.isEmbeddedApplication(closure_0[index]);
        });
        return found.map(f128075);
      }, items6);
      const items7 = [memo2];
      const effect1 = react.useEffect(() => {
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
          const obj = stateFromStoresArray(stateFromStoresArray1[11]);
          const applications = obj.fetchApplications(found, true);
          const catchPromise = applications.catch(() => closure_1_8(true));
          catchPromise.finally(() => {
            let args;
            return closure_7((arg0) => {
              const items = [...closure_1_0];
              set = new Set(items);
              return set;
            });
          });
        }
      }, items7);
      const items8 = [memo, tmp9];
      const memo3 = react.useMemo(() => {
        closure_0 = closure_4;
        return memo.filter((item, index) => {
          const obj = closure_2_0(stateFromStoresArray1[5]);
          return obj.isEmbeddedApplication(closure_0[index]);
        });
      }, items8);
      const obj4 = require("get initialized");
      const items9 = [ref];
      const items10 = [arg0];
      const stateFromStores = obj4.useStateFromStores(
        items9,
        () => ConjureProjectStore.getGuildProjectsFetchState(closure_0),
        items10,
      );
      let str = "unattempted";
      const tmp8 = stateFromStoresArray;
      if ("unattempted" !== stateFromStores) {
        let str3;
        if ("loading" === stateFromStores) {
          str3 = "pending";
        } else {
          str3 = "settled";
        }
        str = str3;
      }
      const obj5 = { hasRows: memo3.length > 0, loadFailed: tmp20, fetchPhase: str };
      tmp20 = "error" === stateFromStores;
      const voiceChannelAppListState = tmp2(stateFromStoresArray1[12]).voiceChannelAppListState;
      tmp2(stateFromStoresArray1[12]);
      if (!tmp20) {
        tmp20 = first;
      }
      const items11 = [memo3];
      const result = voiceChannelAppListState(obj5);
      const memo4 = obj.useMemo(
        () =>
          memo3.map((preview_application_id) => {
            let application_id = preview_application_id.preview_application_id;
            if (application_id == null) {
              application_id = preview_application_id.application_id;
            }
            return application_id;
          }),
        items11,
      );
      const tmp23 = tmp8(stateFromStoresArray1[10])(memo4);
      let closure_11 = tmp23;
      let obj6 = {
        options: obj.useMemo(
          () =>
            memo3.map((application_id, index) => {
              let tmp2;
              let tmp4;
              application_id = application_id.application_id;
              const obj = {
                applicationId: application_id,
                name: application_id.name,
                iconApplication: tmp2,
                iconURL: tmp4,
              };
              tmp2 = tmp;
              if (closure_1_11[index] == null) {
                tmp2 = { id: application_id, icon: null };
                const obj2 = { id: application_id, icon: null };
              }
              let icon;
              if (closure_1_11[index] != null) {
                icon = tmp.icon;
              }
              tmp4 = null;
              if (null != icon) {
                const obj6 = { id: null, icon: null, size: 24 };
                ({ id: obj4.id, icon: obj4.icon } = closure_1_11[index]);
                const obj3 = stateFromStoresArray(stateFromStoresArray1[3]);
                let applicationIconURL = obj3.getApplicationIconURL(obj6);
                if (applicationIconURL == null) {
                  applicationIconURL = null;
                }
                tmp4 = applicationIconURL;
              }
              return obj;
            }),
          items12,
        ),
        listState: result,
      };
      items12 = [memo3, tmp23];
      return obj6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let listState;
      let options;
      let tmp10;
      let tmp12;
      let tmp8;
      let closure_0 = arg1;
      const obj = react2;
      const cResult = obj.c(11);
      ({ options, listState } = closure_7(arg0));
      let tmp6 = null;
      closure_7(arg0);
      if (null != arg1) {
        tmp6 = null;
        if (!options.some((applicationId) => applicationId.applicationId === closure_0)) {
          tmp6 = arg1;
        }
      }
      const tmp2Result = useGetOrFetchApplications;
      const getOrFetchApplication = tmp2Result.useGetOrFetchApplication(tmp6);
      if (null != tmp6) {
        if (null != getOrFetchApplication) {
          if (cResult[3] === getOrFetchApplication) {
            let tmp9;
            if (cResult[4] === tmp6) {
              tmp9 = cResult[5];
            }
            if (cResult[6] === options) {
              let tmp15;
              let tmp19;
              if (cResult[7] === tmp9) {
                tmp15 = cResult[8];
              }
              if (cResult[9] !== tmp15) {
                const obj2 = { options: tmp15, listState: "rows" };
                cResult[9] = tmp15;
                cResult[10] = obj2;
                tmp19 = obj2;
              } else {
                tmp19 = cResult[10];
              }
              tmp8 = tmp19;
            }
            const items = [tmp9];
            HermesBuiltin.arraySpread(items, options, 1);
            cResult[6] = options;
            cResult[7] = tmp9;
            cResult[8] = items;
            tmp15 = items;
          }
          const obj3 = {
            applicationId: tmp6,
            name: getOrFetchApplication.name,
            iconApplication: tmp10,
            iconURL: tmp12,
          };
          tmp10 = getOrFetchApplication;
          if (getOrFetchApplication == null) {
            tmp10 = { id: tmp6, icon: null };
            const obj4 = { id: tmp6, icon: null };
          }
          let icon;
          if (getOrFetchApplication != null) {
            icon = getOrFetchApplication.icon;
          }
          tmp12 = null;
          if (null != icon) {
            const obj5 = { id: null, icon: null, size: 24 };
            ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
            const obj6 = AvatarUtilsDefault;
            let applicationIconURL = obj6.getApplicationIconURL(obj5);
            if (applicationIconURL == null) {
              applicationIconURL = null;
            }
            tmp12 = applicationIconURL;
          }
          cResult[3] = getOrFetchApplication;
          cResult[4] = tmp6;
          cResult[5] = obj3;
          tmp9 = obj3;
        }
        return tmp8;
      }
      if (cResult[0] === listState) {
        if (cResult[1] === options) {
          tmp8 = cResult[2];
        }
      }
      const obj8 = { options, listState };
      cResult[0] = listState;
      cResult[1] = options;
      cResult[2] = obj8;
      tmp8 = obj8;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg1;
      const tmp = closure_7(arg0);
      const options = tmp.options;
      const listState = tmp.listState;
      let tmp2 = null;
      if (null != arg1) {
        tmp2 = null;
        if (!options.some((applicationId) => applicationId.applicationId === closure_0)) {
          tmp2 = arg1;
        }
      }
      let closure_3 = tmp2;
      let obj = require("useGetOrFetchApplications");
      const getOrFetchApplication = obj.useGetOrFetchApplication(tmp2);
      let items = [options, listState, tmp2, getOrFetchApplication];
      return getOrFetchApplication.useMemo(() => {
        let items;
        let tmp3;
        let tmp5;
        if (null != id) {
          let obj6;
          if (null != getOrFetchApplication) {
            const obj4 = { applicationId: id, name: getOrFetchApplication.name, iconApplication: tmp3, iconURL: tmp5 };
            tmp3 = getOrFetchApplication;
            if (getOrFetchApplication == null) {
              tmp3 = { id, icon: null };
              const obj = { id, icon: null };
            }
            let icon;
            if (getOrFetchApplication != null) {
              icon = getOrFetchApplication.icon;
            }
            tmp5 = null;
            if (null != icon) {
              const obj5 = { id: null, icon: null, size: 24 };
              ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
              const obj2 = AvatarUtilsDefault;
              let applicationIconURL = obj2.getApplicationIconURL(obj5);
              if (applicationIconURL == null) {
                applicationIconURL = null;
              }
              tmp5 = applicationIconURL;
            }
            obj6 = { options: items, listState: "rows" };
            items = [obj4];
            HermesBuiltin.arraySpread(items, options, 1);
          }
          return obj6;
        }
        obj6 = { options, listState };
      }, items);
    };
function voiceChannelAppRows(arr, arg1) {
  let closure_0 = arg1;
  return arr.filter((item, index) => {
    const obj = closure_2_0(stateFromStoresArray1[5]);
    return obj.isEmbeddedApplication(closure_0[index]);
  });
}
function voiceChannelAppIdsToFetch(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter((item, index) => {
    const obj = closure_2_0(stateFromStoresArray1[5]);
    return !obj.isEmbeddedApplication(closure_0[index]);
  });
  return found.map(f128075);
}
let result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppOptions.tsx");

export { voiceChannelAppCandidates };
export { voiceChannelAppRows };
export { voiceChannelAppIdsToFetch };
export const useVoiceChannelAppSettingOptions = tmp2;
