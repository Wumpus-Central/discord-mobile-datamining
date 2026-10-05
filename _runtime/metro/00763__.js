// === Module 763: ? ===

// Module 763
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _mod724 from "module_724" /* 724 */;

function setupIntegration(on, name, arg2) {
  let closure_0 = on;
  if (arg2[name.name]) {
    if (_mod699.DEBUG_BUILD) {
      const debug2 = CONSOLE_LEVELS.debug;
      const _HermesInternal2 = HermesInternal;
      debug2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    const tmp = items.includes(name.name) || typeof name.setupOnce !== "function";
    if (!tmp) {
      name.setupOnce();
      items.push(name.name);
    }
    const tmp4 = name.setup && typeof name.setup === "function";
    if (tmp4) {
      name.setup(on);
    }
    if (typeof name.preprocessEvent === "function") {
      const preprocessEvent = name.preprocessEvent;
      let closure_1 = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => closure_1(arg0, arg1, closure_0));
    }
    if (typeof name.processEvent === "function") {
      const processEvent = name.processEvent;
      let closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: name.name };
      on.addEventProcessor(Object.assign((arg0, arg1) => closure_2(arg0, arg1, closure_0), obj));
    }
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      const _HermesInternal = HermesInternal;
      debug.log("Integration installed: " + name.name);
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [];

export const addIntegration = function addIntegration(name) {
  const obj = _mod724;
  const client = obj.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, integrations) {
  const iter = integrations[Symbol.iterator]();
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
  let arr2;
  const arr = defaultIntegrations.defaultIntegrations || [];
  integrations = defaultIntegrations.integrations;
  const item = arr.forEach((item) => {
    item.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    items = [];
    HermesBuiltin.arraySpread(items, integrations, HermesBuiltin.arraySpread(items, arr, 0));
    arr2 = items;
  } else {
    arr2 = arr;
    if (typeof integrations === "function") {
      const integrationsResult = integrations(arr);
      const _Array = Array;
      let tmp3 = integrationsResult;
      if (!Array.isArray(integrationsResult)) {
        const items1 = [integrationsResult];
        tmp3 = items1;
      }
      arr2 = tmp3;
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
  let closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((item) => {
    const tmp = item;
    if (tmp) {
      setupIntegration(closure_0, item, obj);
    }
  });
  return obj;
};