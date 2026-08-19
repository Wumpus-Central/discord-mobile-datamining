// _runtime/metro/01274__.js
import makeDataFormatters from "../01275_makeDataFormatters.js";
import dataFormatterCache from "../01277_dataFormatterCache.js";
import _isNativeReflectConstruct from "../01278__isNativeReflectConstruct.js";
import _mod1285 from "01285__.js";
import runtimeHashMessageKey from "../01290_runtimeHashMessageKey.js";
import DEFAULT_LOCALE from "../01292_DEFAULT_LOCALE.js";
import serializeAst from "../01293_serializeAst.js";
import MessageLoader from "../01294_MessageLoader.js";
import chainMessagesObjects from "../01295_chainMessagesObjects.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
        }
      }
    };
  }
  const _Object2 = Object;
  exports.makeDataFormatters = undefined;
  exports.dataFormatterCache = undefined;
  exports.FormatBuilder = undefined;
  exports.bindFormatValues = undefined;
  exports.runtimeHashMessageKey = undefined;
  exports.IntlManager = undefined;
  exports.DEFAULT_LOCALE = undefined;
  exports.InternalIntlMessage = undefined;
  exports.createLoader = undefined;
  exports.loadAllMessagesInLocale = undefined;
  exports.waitForAllDefaultIntlMessagesLoaded = undefined;
  exports.MessageLoader = undefined;
  exports.chainMessagesObjects = undefined;
  exports.makeMessagesProxy = undefined;
  const _Object3 = Object;
  let obj = { enumerable: true, get: null };
  obj[1] = function get() {
    return makeDataFormatters.makeDataFormatters;
  };
  Object.defineProperty(exports, "makeDataFormatters", obj);
  const _Object4 = Object;
  obj = { enumerable: true, get: null };
  obj[1] = function get() {
    return dataFormatterCache.dataFormatterCache;
  };
  Object.defineProperty(exports, "dataFormatterCache", obj);
  const _Object5 = Object;
  obj = { enumerable: true, get: null };
  obj[1] = function get() {
    return _isNativeReflectConstruct.FormatBuilder;
  };
  Object.defineProperty(exports, "FormatBuilder", obj);
  const _Object6 = Object;
  const obj1 = { enumerable: true, get: null };
  obj1[1] = function get() {
    return _isNativeReflectConstruct.bindFormatValues;
  };
  Object.defineProperty(exports, "bindFormatValues", obj1);
  fn(_mod1285, exports);
  const _Object7 = Object;
  const obj2 = { enumerable: true, get: null };
  obj2[1] = function get() {
    return runtimeHashMessageKey.runtimeHashMessageKey;
  };
  Object.defineProperty(exports, "runtimeHashMessageKey", obj2);
  const _Object8 = Object;
  const obj3 = { enumerable: true, get: null };
  obj3[1] = function get() {
    return DEFAULT_LOCALE.IntlManager;
  };
  Object.defineProperty(exports, "IntlManager", obj3);
  const _Object9 = Object;
  const obj4 = { enumerable: true, get: null };
  obj4[1] = function get() {
    return DEFAULT_LOCALE.DEFAULT_LOCALE;
  };
  Object.defineProperty(exports, "DEFAULT_LOCALE", obj4);
  const _Object10 = Object;
  const obj5 = { enumerable: true, get: null };
  obj5[1] = function get() {
    return serializeAst.InternalIntlMessage;
  };
  Object.defineProperty(exports, "InternalIntlMessage", obj5);
  const _Object11 = Object;
  const obj6 = { enumerable: true, get: null };
  obj6[1] = function get() {
    return MessageLoader.createLoader;
  };
  Object.defineProperty(exports, "createLoader", obj6);
  const _Object12 = Object;
  const obj7 = { enumerable: true, get: null };
  obj7[1] = function get() {
    return MessageLoader.loadAllMessagesInLocale;
  };
  Object.defineProperty(exports, "loadAllMessagesInLocale", obj7);
  const _Object13 = Object;
  const obj8 = { enumerable: true, get: null };
  obj8[1] = function get() {
    return MessageLoader.waitForAllDefaultIntlMessagesLoaded;
  };
  Object.defineProperty(exports, "waitForAllDefaultIntlMessagesLoaded", obj8);
  const _Object14 = Object;
  const obj9 = { enumerable: true, get: null };
  obj9[1] = function get() {
    return MessageLoader.MessageLoader;
  };
  Object.defineProperty(exports, "MessageLoader", obj9);
  const _Object15 = Object;
  const obj10 = { enumerable: true, get: null };
  obj10[1] = function get() {
    return chainMessagesObjects.chainMessagesObjects;
  };
  Object.defineProperty(exports, "chainMessagesObjects", obj10);
  const _Object16 = Object;
  const obj11 = { enumerable: true, get: null };
  obj11[1] = function get() {
    return chainMessagesObjects.makeMessagesProxy;
  };
  Object.defineProperty(exports, "makeMessagesProxy", obj11);
} else {
  let _Object = Object;
}