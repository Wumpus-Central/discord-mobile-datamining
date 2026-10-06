// _runtime/metro/12636__.js
import _mod12580 from "12580__.js";
import _mod12607 from "12607__.js";
import _mod12608 from "12608__.js";
import _slicedToArray from "00032__slicedToArray.js";

function setupIntegration(on, name, arg2) {
  let closure_0 = on;
  if (arg2[name.name]) {
    if (_mod12608.DEBUG_BUILD) {
      const logger2 = _mod12580.logger;
      const _HermesInternal2 = HermesInternal;
      logger2.log("Integration skipped because it was already installed: " + name.name);
    }
  } else {
    arg2[name.name] = name;
    const tmp = -1 === items.indexOf(name.name) && typeof name.setupOnce === "function";
    if (tmp) {
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
    if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      const _HermesInternal = HermesInternal;
      logger.log("Integration installed: " + name.name);
    }
  }
}
let items = [];

export const addIntegration = function addIntegration(name) {
  const obj = _mod12607;
  const client = obj.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (_mod12608.DEBUG_BUILD) {
    const logger = _mod12580.logger;
    const _HermesInternal = HermesInternal;
    logger.warn('Cannot add integration "' + name.name + '" because no SDK Client is available.');
  }
};
export const afterSetupIntegrations = function afterSetupIntegrations(arg0, integrations) {
  const iter = integrations[Symbol.iterator]();
  let afterAllSetup = iter.next();
  while (iter !== undefined) {
    let obj = afterAllSetup;
    if (obj) {
      afterAllSetup = obj.afterAllSetup;
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
  const values = Object.values(obj);
  const findIndexResult = values.findIndex((name) => "Debug" === name.name);
  if (findIndexResult > -1) {
    values.push(_slicedToArray(values.splice(findIndexResult, 1), 1)[0]);
  }
  return values;
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
