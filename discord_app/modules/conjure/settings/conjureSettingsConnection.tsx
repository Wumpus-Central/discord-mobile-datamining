// discord_app/modules/conjure/settings/conjureSettingsConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureWorkerTickets from "../connection/ConjureWorkerTickets.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _submitProjectSettings() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await ConjureWorkerTickets.mintWorkerTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_130_4 = uRLSearchParams;
  const _fetch = fetch;
  const _HermesInternal2 = HermesInternal;
  const request = { method: "PUT", headers: { "content-type": "application/json" }, body: null };
  const _JSON = JSON;
  const combined = "" + baseUrl + "/agent/settings?" + closure_130_4;
  request.body = JSON.stringify(closure_130_0);
  await fetch(combined, request);
  closure_130_5 = value;
  if (!closure_130_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("settings submission failed (" + closure_130_5.status + ")");
    throw error;
  }
  const data = closure_130_5.json();
  await data.catch(() => null);
  closure_130_6 = value;
  if (closure_130_6 != null) {
    const rebuild_required = closure_130_6.rebuild_required;
  }
  return { rebuildRequired: true === rebuild_required };
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
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            let ticket;
            let baseUrl;
            closure_128_3 = undefined;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: tmp2(c2[2]).mintWorkerTicket(require), done: false };
            return obj5;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            ticket = closure_128_0.ticket;
            baseUrl = closure_128_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj7 = { ticket };
            const uRLSearchParams = new URLSearchParams(obj7);
            closure_128_3 = uRLSearchParams;
            const _fetch = fetch;
            const _HermesInternal = HermesInternal;
            c1 = 2;
            c2 = 1;
            const obj8 = {
              value: fetch("" + baseUrl + "/agent/rebuild?" + closure_128_3, { method: "POST" }),
              done: false,
            };
            return obj8;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const ok = value.ok;
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
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
