// discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";
import importAllResult from "setTimeout";

function _initLibdiscore() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "T", done: null };
        }
      } catch (tmp4) {
        c0 = tmp;
        throw tmp4;
      }
    }
  });
  const _initLibdiscore = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("setTimeout").registerTimerPolyfills();
const result1 = require("setTimeout").fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx");

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  const self = this;
  const apply = _initLibdiscore.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};