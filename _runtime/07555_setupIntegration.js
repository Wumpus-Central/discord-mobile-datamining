// _runtime/07555_setupIntegration.js
import _slicedToArray from "_slicedToArray";
import { getClient } from "07526_getClient.js";
import { __SENTRY_DEBUG__ } from "metro/07527___SENTRY_DEBUG__.js";

function setupIntegration(on, name) {
  const _require = on;
  if (arg2[name.name]) {
    if (___SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger2 = tmp10(7499).logger;
      const _HermesInternal2 = HermesInternal;
      logger2.log("Integration skipped because it was already installed: " + name.name);
    }
    tmp10 = _require;
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
      const dependencyMap = preprocessEvent.bind(name);
      on.on("preprocessEvent", (arg0, arg1) => callback(arg0, arg1, closure_0));
    }
    if (typeof name.processEvent === "function") {
      const processEvent = name.processEvent;
      let closure_2 = processEvent.bind(name);
      const _Object = Object;
      const obj = { id: null };
      obj[0] = name.name;
      on.addEventProcessor(Object.assign((arg0, arg1) => callback2(arg0, arg1, closure_0), obj));
    }
    if (___SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = tmp6(7499).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Integration installed: " + name.name);
    }
    tmp = -1 === items.indexOf(name.name) && typeof name.setupOnce === "function";
    tmp4 = name.setup && typeof name.setup === "function";
    tmp6 = _require;
  }
}
let items = [];

export const addIntegration = function addIntegration(name) {
  const client = getClient.getClient();
  if (client) {
    client.addIntegration(name);
  } else if (tmp(7527).DEBUG_BUILD) {
    const logger = tmp(7499).logger;
    const _HermesInternal = HermesInternal;
    logger.warn("Cannot add integration \"" + name.name + "\" because no SDK Client is available.");
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
      let tmp2 = obj;
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
  const item = arr.forEach((arg0) => {
    arg0.isDefaultInstance = true;
  });
  if (Array.isArray(integrations)) {
    const items = [];
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
  const values = Object.values(obj);
  const findIndexResult = values.findIndex((name) => "Debug" === name.name);
  if (findIndexResult > -1) {
    arr = values.push(_slicedToArray(values.splice(findIndexResult, 1), 1)[0]);
  }
  return values;
};
export const installedIntegrations = items;
export { setupIntegration };
export const setupIntegrations = function setupIntegrations(arg0, arr) {
  let closure_0 = arg0;
  const obj = {};
  const item = arr.forEach((arg0) => {
    if (arg0) {
      outer1_4(closure_0, arg0, obj);
    }
  });
  return obj;
};