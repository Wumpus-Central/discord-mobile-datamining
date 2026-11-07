// discord_app/modules/conjure/settings/conjureSettingsConnection.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjurePreviewActionCreators from "../preview/ConjurePreviewActionCreators.tsx";
import conjureWorkerFetch from "../connection/conjureWorkerFetch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConjureSettingsStore from "ConjureSettingsStore.tsx";

require = fn;
function noteSettingsWrite(arg0) {
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = map.set(arg0, num + 1);
}
function fetchProjectSettings() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _fetchProjectSettings(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp5;
          closure_5 = tmp2;
          closure_133_0 = closure_0;
          closure_133_1 = undefined;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          value = map.get(closure_0);
          c1 = value;
          if (value == null) {
            c1 = 0;
          }
          closure_133_1 = c1;
          c7 = 1;
          c8 = 1;
          const obj4 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/settings"), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_133_2 = value;
          if (closure_133_2.ok) {
            c7 = 2;
            c8 = 1;
            const obj6 = { value: closure_133_2.json(), done: false };
            return obj6;
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("settings fetch failed (" + closure_133_2.status + ")");
            throw error;
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_133_3 = value;
        value2 = closure_134_5.get(closure_133_0);
        c2 = value2;
        let tmp35 = null;
        if (value2 == null) {
          c2 = 0;
        }
        let tmp7 = c2;
        let tmp9 = c2 !== closure_133_1;
        if (tmp9) {
          tmp9 = tmp35 != closure_134_4.getSettings(closure_133_0);
        }
        if (!tmp9) {
          tmp7 = undefined;
          let schema;
          if (closure_133_3 != tmp35) {
            schema = closure_133_3.schema;
          }
          if (!Array.isArray(schema)) {
            const obj9 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: closure_133_0, state: "loaded" };
            closure_134_1(closure_134_2[2]).dispatch(obj9);
            const obj = closure_134_1(closure_134_2[2]);
          }
          tmp7 = closure_134_1(closure_134_2[2]);
          const obj10 = { type: "CONJURE_SETTINGS_SET", projectId: closure_133_0, settings: null };
          const obj11 = { schema: closure_133_3.schema, values: null, secrets: null, connections: null };
          let values = closure_133_3.values;
          if (values == tmp35) {
            values = {};
          }
          obj11.values = values;
          let secrets = closure_133_3.secrets;
          if (secrets == tmp35) {
            secrets = [];
          }
          tmp35 = secrets;
          obj11.secrets = secrets;
          obj11.connections = closure_133_3.connections;
          obj10.settings = obj11;
          tmp7.dispatch(obj10);
        }
        c8 = 3;
      }
    } catch (tmp48) {
      c8 = tmp;
      throw tmp48;
    }
  }
};
function fetchWithRetry() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchWithRetry(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_1.inFlight = true;
          const _Date = Date;
          closure_1.lastFetchAt = Date.now();
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: fetchProjectSettings(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_130_1.inFlight = false;
        if (closure_130_1.retries >= 5) {
          const obj6 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId: closure_130_0, state: "failed" };
          closure_131_1(closure_131_2[2]).dispatch(obj6);
          const obj2 = closure_131_1(closure_131_2[2]);
        } else {
          closure_130_1.retries = closure_130_1.retries + 1;
          const backoff2 = closure_130_1.backoff;
          backoff2.fail(() => closure_2_10(closure_1_0, closure_1_1));
        }
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        closure_130_1.inFlight = false;
        closure_130_1.retries = 0;
        const backoff = closure_130_1.backoff;
        backoff.succeed();
        c6 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp29) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp29;
      } else {
        c5 = tmp;
      }
    }
  }
};
function loadOverlayProjectSettings(projectId) {
  closure_0 = projectId;
  value = map1.get(projectId);
  if (null == value) {
    const obj2 = { backoff: null, inFlight: false, retries: 0, lastFetchAt: -Infinity, deferred: null };
    const tmp6 = new BackoffDefault(1000, 60000);
    obj2.backoff = tmp6;
    const result = map1.set(projectId, obj2);
    value = obj2;
  }
  importDefault = value;
  if (!value.inFlight) {
    if (!value.backoff.pending) {
      if (null == value.deferred) {
        const obj4 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId, state: "loading" };
        DispatcherDefault.dispatch(obj4);
        value.retries = 0;
        const _Date = Date;
        const sum = value.lastFetchAt + 5000;
        const diff = sum - Date.now();
        if (0 < diff) {
          const _setTimeout = setTimeout;
          value.deferred = setTimeout(() => {
            value.deferred = null;
            fetchWithRetry(closure_0, value);
          }, diff);
        } else {
          fetchWithRetry(projectId, value);
        }
      }
    }
  }
}
let closure_13 = async function _submitProjectSettings(arg0) {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_130_0 = closure_0;
    closure_130_1 = json;
    await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/settings", { method: "PUT", json });
    closure_130_2 = value;
    if (!closure_130_2.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("settings submission failed (" + closure_130_2.status + ")");
      throw error;
    }
    closure_130_3 = null;
    await closure_130_2.json();
    if (2 === tmp7) {
      c4 = 0;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_130_3 = value;
      c4 = 0;
    }
    closure_131_6(closure_130_0);
    const settings = closure_131_4.getSettings(closure_130_0);
    let tmp17 = null != settings;
    if (tmp17) {
      tmp17 = null != closure_130_1.values;
    }
    if (tmp17) {
      const obj11 = { type: "CONJURE_SETTINGS_SET", projectId: closure_130_0, settings: null };
      const obj12 = {};
      const merged = Object.assign(settings);
      obj12.values = closure_131_0(closure_131_2[6]).mergeSubmittedSettingValues(settings.values, closure_130_1.values);
      obj11.settings = obj12;
      closure_131_1(closure_131_2[2]).dispatch(obj11);
      closure_131_0(closure_131_2[6]);
      closure_131_1(closure_131_2[2]);
    }
    if (closure_130_3 != null) {
      const rebuild_required = closure_130_3.rebuild_required;
    }
    return { rebuildRequired: true === rebuild_required };
  })();
};
const map = new Map();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsConnection.tsx");

export const settingsFrameHandlers = {
  settings(schema, projectId) {
    projectId = projectId.projectId;
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    const result = map.set(projectId, num + 1);
    DispatcherDefault.dispatch({
      type: "CONJURE_SETTINGS_SET",
      projectId,
      settings: {
        schema: schema.schema,
        values: schema.values,
        secrets: schema.secrets,
        connections: schema.connections,
      },
    });
    if (true === schema.values_changed) {
      const result1 = ConjurePreviewActionCreators.reloadConjureProjectFrames(projectId);
    }
    const obj2 = {
      type: "CONJURE_SETTINGS_SET",
      projectId,
      settings: {
        schema: schema.schema,
        values: schema.values,
        secrets: schema.secrets,
        connections: schema.connections,
      },
    };
  },
};
export { fetchProjectSettings };
export const CONJURE_SETTINGS_MAX_RETRIES = 5;
export const CONJURE_SETTINGS_MIN_RELOAD_INTERVAL_MS = 5000;
export { loadOverlayProjectSettings };
export function retryFailedOverlayProjectSettings(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("failed" === ConjureSettingsStore.getLoadState(nextResult)) {
      let tmp6 = loadOverlayProjectSettings(tmp2);
    }
    continue;
  }
}
export function submitProjectSettings() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function requestProjectRebuild(arg0) {
  closure_0 = arg0;
  closure_1 = async function _kick() {
    await v3(tmp11[4]).fetchConjureWorker(closure_2_0, "/agent/rebuild", { method: "POST" });
    if (1 === tmp6) {
      c3 = 0;
      v3 = 3;
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const ok = value.ok;
      c3 = 0;
    }
    return value;
  };
  !(function kick() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
}
