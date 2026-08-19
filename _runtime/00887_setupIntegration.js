// === Module 887: setupIntegration ===

// Module 887 (setupIntegration)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import getClient from "getClient" /* 848 */;

require = arg1;
let dependencyMap = arg6;
function setupIntegration(on, name) {
  const _require = on;
  if (arg2[name.name]) {
    if (_require(823).DEBUG_BUILD) {
      const debug2 = tmp10(824).debug;
      const _HermesInternal2 = HermesInternal;
      debug2.log("Integration skipped because it was already installed: " + name.name);
    }
    tmp10 = _require;
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
      dependencyMap = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => callback(arg0, arg1, closure_0));
    }
    if (typeof name.processEvent === "function") {
      const processEvent = name.processEvent;
      items = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: null };
      obj[0] = name.name;
      on.addEventProcessor(Object.assign((arg0, arg1) => callback2(arg0, arg1, closure_0), obj));
    }
    if (_require(823).DEBUG_BUILD) {
      const debug = tmp6(824).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Integration installed: " + name.name);
    }
    tmp = items.includes(name.name) || typeof name.setupOnce !== "function";
    tmp4 = name.setup && typeof name.setup === "function";
    tmp6 = _require;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [];
arg5.addIntegration = function addIntegration(name) {
  const client = getClient.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    const _HermesInternal = HermesInternal;
    debug.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
  }
};
arg5.afterSetupIntegrations = function afterSetupIntegrations(arg0, arg1) {
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
arg5.defineIntegration = function defineIntegration(arg0) {
  return arg0;
};
arg5.getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  const arr = defaultIntegrations.defaultIntegrations || [];
  const integrations = defaultIntegrations.integrations;
  const item = arr.forEach((item, index) => {
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
  const item1 = arr2.forEach((item, index) => {
    const name = item.name;
    let isDefaultInstance = tmp2;
    if (obj[name]) {
      isDefaultInstance = !tmp2.isDefaultInstance;
    }
    if (isDefaultInstance) {
      isDefaultInstance = item.isDefaultInstance;
    }
    if (!isDefaultInstance) {
      obj[name] = item;
    }
  });
  return Object.values(obj);
};
arg5.installedIntegrations = items;
arg5.setupIntegration = setupIntegration;
arg5.setupIntegrations = function setupIntegrations(arg0, arr) {
  closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((item, index) => {
    if (item) {
      setupIntegration(closure_0, item, obj);
    }
  });
  return obj;
};