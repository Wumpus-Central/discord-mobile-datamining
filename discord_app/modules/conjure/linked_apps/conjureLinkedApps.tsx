// === Module 13243: conjureLinkedApps ===

// Module 13243 (conjureLinkedApps)
import conjureWorkerFetch from "conjureWorkerFetch" /* 13219 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function fetchLinkedApps() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _fetchLinkedApps() {
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
  return value;
};
let closure_5 = async function _fetchLinkedAppTargets() {
  closure_2 = tmp2;
  await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps/targets", { method: "POST", json: { project_ids: closure_1.slice(0, 200) } });
  closure_130_0 = value;
  if (!closure_130_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Linked app targets request failed: " + closure_130_0.status);
    throw error;
  }
  await closure_130_0.json();
  return value;
};
let closure_6 = async function _fetchLinkedAppStart() {
  closure_5 = tmp4;
  closure_133_0 = closure_1;
  await fetchLinkedApps(closure_0);
  closure_133_1 = value;
  const callers = closure_133_1.callers;
  const live = closure_133_1.live;
  const has_preview = closure_133_1.has_preview;
  closure_133_5 = callers.find((project_id) => project_id.project_id === closure_1_0);
  const obj6 = { live: true === live, hasPreview: false !== has_preview, build: null, purpose: null, flow: null };
  if (closure_133_5 != null) {
    const build = closure_133_5.build;
  }
  let str = build;
  if (build == null) {
    str = "auto";
    if (true === live) {
      str = "published";
    }
  }
  obj6.build = str;
  if (closure_133_5 != null) {
    let purpose = closure_133_5.purpose;
  }
  if (purpose == null) {
    purpose = null;
  }
  obj6.purpose = purpose;
  if (closure_133_5 != null) {
    let flow = closure_133_5.flow;
  }
  if (flow == null) {
    flow = null;
  }
  obj6.flow = flow;
  return obj6;
};
let closure_7 = async function _linkConjureApp() {
  await closure_132_0(closure_132_1[1]).fetchConjureWorker(closure_131_0, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: closure_131_1, build: closure_131_2, purpose: closure_131_3, flow: closure_131_4 } });
  closure_131_5 = value;
  if (!closure_131_5.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Linking apps failed: " + closure_131_5.status);
    throw error;
  }
  await "HermesInternal";
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let obj4 = closure_2;
  if (closure_2 === undefined) {
    obj4 = {};
  }
  ({ build: closure_131_2, purpose: closure_131_3, flow: closure_131_4 } = obj4);
  return "Path";
};
let closure_8 = async function _unlinkConjureApp(arg0) {
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
            const obj7 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/linked-apps", obj5), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/conjureLinkedApps.tsx");

export { fetchLinkedApps };
export function fetchLinkedAppTargets() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchLinkedAppStart() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function linkConjureApp() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function unlinkConjureApp() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}