// === Module 1165: ? ===

// Module 1165
import astFormatter from "astFormatter" /* 1176 */;

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      const obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_2 = tmp;
let tmp3 = self && self.__exportStar || ((obj, arg1) => {
  for (const key10007 in obj) {
    let callResult = "default" === key10007;
    if (!callResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(arg1, key10007);
    }
    if (callResult) {
      continue;
    } else {
      let tmp3 = closure_2(arg1, obj, key10007);
      continue;
    }
    continue;
  }
});
tmp3(astFormatter, exports);

export const makeDataFormatters = require("DEFAULT_FORMAT_CONFIG").makeDataFormatters;
export const dataFormatterCache = require("dataFormatterCache").dataFormatterCache;
export const FormatBuilder = require("FormatBuilder").FormatBuilder;
export const bindFormatValues = require("FormatBuilder").bindFormatValues;
export const runtimeHashMessageKey = require("runtimeHashMessageKey").runtimeHashMessageKey;
export const IntlManager = require("DEFAULT_LOCALE").IntlManager;
export const DEFAULT_LOCALE = require("DEFAULT_LOCALE").DEFAULT_LOCALE;
export const InternalIntlMessage = require("InternalIntlMessage").InternalIntlMessage;
export const createLoader = require("MessageLoader").createLoader;
export const loadAllMessagesInLocale = require("MessageLoader").loadAllMessagesInLocale;
export const waitForAllDefaultIntlMessagesLoaded = require("MessageLoader").waitForAllDefaultIntlMessagesLoaded;
export const MessageLoader = require("MessageLoader").MessageLoader;
export const chainMessagesObjects = require("chainMessagesObjects").chainMessagesObjects;
export const makeMessagesProxy = require("chainMessagesObjects").makeMessagesProxy;