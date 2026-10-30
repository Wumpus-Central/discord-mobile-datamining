// discord_app/modules/conjure/linked_apps/conjureLinkedApps.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import conjureWorkerFetch from "../connection/conjureWorkerFetch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _fetchLinkedAppCallers() {
  closure_1 = tmp2;
  await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps");
  closure_129_0 = value;
  if (!closure_129_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Linked apps request failed: " + closure_129_0.status);
    throw error;
  }
  await closure_129_0.json();
  return value.callers;
};
let closure_5 = async function _linkConjureApp(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_131_0 = undefined;
            const obj4 = { method: "PUT", json: null };
            const obj6 = { caller_project_id, build };
            obj4.json = obj6;
            c4 = 1;
            c5 = 1;
            const obj7 = {
              value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps", obj4),
              done: false,
            };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_131_0 = value;
          if (closure_131_0.ok) {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Linking apps failed: " + closure_131_0.status);
            throw error;
          }
        }
      } catch (tmp15) {
        c5 = tmp;
        throw tmp15;
      }
    }
  })();
};
let closure_6 = async function _unlinkConjureApp(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp2;
            closure_130_0 = undefined;
            const obj5 = { method: "DELETE", json: null };
            const obj6 = { caller_project_id };
            obj5.json = obj6;
            c3 = 1;
            c4 = 1;
            const obj7 = {
              value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps", obj5),
              done: false,
            };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_0 = value;
          if (closure_130_0.ok) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Unlinking apps failed: " + closure_130_0.status);
            throw error;
          }
        }
      } catch (tmp19) {
        c4 = tmp;
        throw tmp19;
      }
    }
  })();
};
let obj = {
  auto: { label: _modDef3865["2TTprm"], description: _modDef3865["1ck6o0"] },
  preview: null,
  published: null,
};
let obj2 = { label: _modDef3865["2TTprm"], description: _modDef3865["1ck6o0"] };
obj.preview = { label: _modDef3865.bUZ6jT, description: _modDef3865.DP2NVW };
let obj3 = { label: _modDef3865.bUZ6jT, description: _modDef3865.DP2NVW };
obj.published = { label: _modDef3865.yXd0cc, description: _modDef3865["YY+UD8"] };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedApps.tsx");

export const CONJURE_LINKED_APP_BUILDS = ["auto", "preview", "published"];
export function linkedAppBuildLabel(build) {
  const intl = util.intl;
  return intl.string(obj[build].label);
}
export function linkedAppBuildDescription(value) {
  const intl = util.intl;
  return intl.string(obj[value].description);
}
export function fetchLinkedAppCallers() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function linkConjureApp() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function unlinkConjureApp() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
