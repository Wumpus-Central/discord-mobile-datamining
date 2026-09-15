// === Module 1154: ? ===

// Module 1154
import astFormatter from "astFormatter" /* 1165 */;

const require = globalThis.__r;

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
          hasOwnProperty = Object.prototype.hasOwnProperty;
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
  let obj = {
    enumerable: true,
    get() {
        return require("DEFAULT_FORMAT_CONFIG").makeDataFormatters;
      }
  };
  Object.defineProperty(exports, "makeDataFormatters", obj);
  const _Object4 = Object;
  const obj2 = {
    enumerable: true,
    get() {
        return require("dataFormatterCache").dataFormatterCache;
      }
  };
  Object.defineProperty(exports, "dataFormatterCache", obj2);
  const _Object5 = Object;
  const obj3 = {
    enumerable: true,
    get() {
        return require("module_1158").FormatBuilder;
      }
  };
  Object.defineProperty(exports, "FormatBuilder", obj3);
  const _Object6 = Object;
  const obj4 = {
    enumerable: true,
    get() {
        return require("module_1158").bindFormatValues;
      }
  };
  Object.defineProperty(exports, "bindFormatValues", obj4);
  fn(astFormatter, exports);
  const _Object7 = Object;
  const obj5 = {
    enumerable: true,
    get() {
        return require("runtimeHashMessageKey").runtimeHashMessageKey;
      }
  };
  Object.defineProperty(exports, "runtimeHashMessageKey", obj5);
  const _Object8 = Object;
  const obj6 = {
    enumerable: true,
    get() {
        return require("DEFAULT_LOCALE").IntlManager;
      }
  };
  Object.defineProperty(exports, "IntlManager", obj6);
  const _Object9 = Object;
  const obj7 = {
    enumerable: true,
    get() {
        return require("DEFAULT_LOCALE").DEFAULT_LOCALE;
      }
  };
  Object.defineProperty(exports, "DEFAULT_LOCALE", obj7);
  const _Object10 = Object;
  const obj8 = {
    enumerable: true,
    get() {
        return require("serializeAst").InternalIntlMessage;
      }
  };
  Object.defineProperty(exports, "InternalIntlMessage", obj8);
  const _Object11 = Object;
  const obj9 = {
    enumerable: true,
    get() {
        return require("MessageLoader").createLoader;
      }
  };
  Object.defineProperty(exports, "createLoader", obj9);
  const _Object12 = Object;
  const obj10 = {
    enumerable: true,
    get() {
        return require("MessageLoader").loadAllMessagesInLocale;
      }
  };
  Object.defineProperty(exports, "loadAllMessagesInLocale", obj10);
  const _Object13 = Object;
  const obj11 = {
    enumerable: true,
    get() {
        return require("MessageLoader").waitForAllDefaultIntlMessagesLoaded;
      }
  };
  Object.defineProperty(exports, "waitForAllDefaultIntlMessagesLoaded", obj11);
  const _Object14 = Object;
  const obj12 = {
    enumerable: true,
    get() {
        return require("MessageLoader").MessageLoader;
      }
  };
  Object.defineProperty(exports, "MessageLoader", obj12);
  const _Object15 = Object;
  const obj13 = {
    enumerable: true,
    get() {
        return require("chainMessagesObjects").chainMessagesObjects;
      }
  };
  Object.defineProperty(exports, "chainMessagesObjects", obj13);
  const _Object16 = Object;
  const obj14 = {
    enumerable: true,
    get() {
        return require("chainMessagesObjects").makeMessagesProxy;
      }
  };
  Object.defineProperty(exports, "makeMessagesProxy", obj14);
} else {
  let _Object = Object;
}