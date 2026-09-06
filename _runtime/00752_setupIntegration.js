// === Module 752: setupIntegration ===

// Module 752 (setupIntegration)
import _mod688 from "module_688" /* 688 */;
import _mod713 from "module_713" /* 713 */;

require = arg1;
const dependencyMap = arg6;
function setupIntegration(on, name, arg2) {
  closure_0 = on;
  if (arg2[name.name]) {
    if (_mod688.DEBUG_BUILD) {
      const debug2 = tmp10(689).debug;
      const _HermesInternal2 = HermesInternal;
      debug2.log("Integration skipped because it was already installed: " + name.name);
    }
    tmp10 = require;
  } else {
    arg2[name.name] = name;
    let arr = items;
    if (!tmp) {
      name.setupOnce();
      arr = arr.push(name.name);
    }
    if (tmp4) {
      name.setup(on);
    }
    if (typeof name.preprocessEvent === "function") {
      const preprocessEvent = name.preprocessEvent;
      closure_1 = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => closure_1(arg0, arg1, closure_0));
    }
    if (typeof name.processEvent === "function") {
      const processEvent = name.processEvent;
      closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: name.name };
      on.addEventProcessor(Object.assign((arg0, arg1) => closure_2(arg0, arg1, closure_0), obj));
    }
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp6(689).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Integration installed: " + name.name);
    }
    tmp = items.includes(name.name) || typeof name.setupOnce !== "function";
    tmp4 = name.setup && typeof name.setup === "function";
    tmp6 = require;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [];

export const addIntegration = function addIntegration(name) {
  const client = _mod713.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (tmp(688).DEBUG_BUILD) {
    const debug = tmp(689).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, arg1) {
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    let afterAllSetup;
    if (nextResult != null) {
      afterAllSetup = nextResult.afterAllSetup;
    }
    if (afterAllSetup) {
      let afterAllSetupResult = obj.afterAllSetup(arg0);
    }
    continue;
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  const arr = defaultIntegrations.defaultIntegrations || [];
  const integrations = defaultIntegrations.integrations;
  const item = arr.forEach((item) => {
    item.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    items = [];
    HermesBuiltin.arraySpread(integrations, HermesBuiltin.arraySpread(arr, 0));
    let arr2 = items;
  } else {
    arr2 = arr;
    if (typeof integrations === "function") {
      const integrationsResult = integrations(arr);
      const _Array = Array;
      let tmp2 = integrationsResult;
      if (!Array.isArray(integrationsResult)) {
        const items1 = [integrationsResult];
        tmp2 = items1;
      }
      arr2 = tmp2;
    }
  }
  const obj = {};
  const item1 = arr2.forEach((name) => {
    name = name.name;
    let isDefaultInstance = tmp2;
    if (obj[name]) {
      isDefaultInstance = !tmp2.isDefaultInstance;
    }
    if (isDefaultInstance) {
      isDefaultInstance = name.isDefaultInstance;
    }
    if (!isDefaultInstance) {
      obj[name] = name;
    }
  });
  return Object.values(obj);
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((item) => {
    if (item) {
      setupIntegration(closure_0, item, obj);
    }
  });
  return obj;
};