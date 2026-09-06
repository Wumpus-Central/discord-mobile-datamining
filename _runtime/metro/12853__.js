// _runtime/metro/12853__.js
import _mod12797 from "12797__.js";
import _mod12824 from "12824__.js";
import _mod12825 from "12825__.js";
import _slicedToArray from "00032__.js";

function setupIntegration(on, name, arg2) {
  closure_0 = on;
  if (arg2[name.name]) {
    if (_mod12825.DEBUG_BUILD) {
      const logger2 = _mod12797.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    let arr = items;
    if (tmp) {
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
    if (_mod12825.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Integration installed: " + name.name);
    }
    tmp = -1 === items.indexOf(name.name) && typeof name.setupOnce === "function";
    tmp4 = name.setup && typeof name.setup === "function";
  }
}
let items = [];

export const addIntegration = function addIntegration(name) {
  const client = _mod12824.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (_mod12825.DEBUG_BUILD) {
    const logger = _mod12797.logger;
    const _HermesInternal = HermesInternal;
    logger.warn('Cannot add integration "' + name.name + '" because no SDK Client is available.');
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, arg1) {
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = nextResult;
    if (nextResult) {
      let afterAllSetup = obj.afterAllSetup;
    }
    if (nextResult) {
      let afterAllSetupResult = obj.afterAllSetup(arg0);
    }
    continue;
  }
};
export function defineIntegration(arg0) {
  return arg0;
}
export const getIntegrationsToSetup = function getIntegrationsToSetup(defaultIntegrations) {
  let arr = defaultIntegrations.defaultIntegrations || [];
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
  const values = Object.values({});
  const findIndexResult = values.findIndex((name) => "Debug" === name.name);
  if (findIndexResult > -1) {
    arr = values.push(_slicedToArray(values.splice(findIndexResult, 1), 1)[0]);
  }
  return values;
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
