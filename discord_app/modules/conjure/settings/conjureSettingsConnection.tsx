// discord_app/modules/conjure/settings/conjureSettingsConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureWorkerFetch from "../connection/conjureWorkerFetch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _submitProjectSettings(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp2;
    await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/settings", { method: "PUT", json });
    closure_130_0 = value;
    if (!closure_130_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("settings submission failed (" + closure_130_0.status + ")");
      throw error;
    }
    const data = closure_130_0.json();
    await data.catch(() => null);
    closure_130_1 = value;
    if (closure_130_1 != null) {
      const rebuild_required = closure_130_1.rebuild_required;
    }
    return { rebuildRequired: true === rebuild_required };
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsConnection.tsx");

export const settingsFrameHandlers = {
  settings(schema, projectId) {
    DispatcherDefault.dispatch({
      type: "CONJURE_SETTINGS_SET",
      projectId: projectId.projectId,
      settings: {
        schema: schema.schema,
        values: schema.values,
        secrets: schema.secrets,
        connections: schema.connections,
      },
    });
  },
};
export const submitProjectSettings = function submitProjectSettings() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
  closure_0 = arg0;
  closure_1 = async function _kick() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            v3 = 1;
            const obj5 = {
              value: v3(dependencyMap[2]).fetchConjureWorker(require, "/agent/rebuild", { method: "POST" }),
              done: false,
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const ok = value.ok;
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        v3 = tmp;
        throw tmp8;
      }
    }
  };
  (function kick() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })().catch((error) => {});
};
