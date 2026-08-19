// _runtime/14493_U.js
import "module_0";

function U(arg0, arg1) {
  if (typeof Symbol !== "undefined") {
    const _Symbol2 = Symbol;
    if (arg1[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      let tmp = arg1[Symbol.hasInstance](arg0);
    }
    return tmp;
  }
  tmp = U(arg0, arg1);
}
function Pe(str) {
  if (str) {
    let length = arg1;
    if (typeof str === "string") {
      if (tmp10) {
        length = str.length;
      }
      const _Array3 = Array;
      let array = new Array(length);
      for (let num5 = 0; num5 < length; num5 = num5 + 1) {
        array[num5] = str[num5];
      }
      return array;
    } else {
      const _Object = Object;
      const call = toString.call;
      let name = typeof call === "unknown" ? toString() : call(str).slice(8, -1);
      if (tmp) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          let length2 = length;
          if (tmp3) {
            length2 = str.length;
          }
          const _Array = Array;
          array = new Array(length2);
          for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
            array[num3] = str[num3];
          }
          return array;
        }
      }
      const _Array2 = Array;
      return Array.from(name);
    }
  }
}
function V(iterable) {
  let tmp;
  if (Array.isArray(iterable)) {
    const _Array = Array;
    const array = new Array(length);
    let num = 0;
    tmp = array;
    if (0 < iterable.length) {
      do {
        array[num] = iterable[num];
        num = num + 1;
        tmp = array;
      } while (num < length);
    }
  }
  if (!tmp) {
    const _Symbol = Symbol;
    if (typeof Symbol === "undefined") {
      let arr;
      tmp = arr;
    } else {
      const _Symbol2 = Symbol;
    }
    const _Array2 = Array;
    arr = Array.from(iterable);
  }
  if (!tmp) {
    tmp = Pe(iterable);
  }
  if (tmp) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    throw typeError;
  }
}
function X(arg0) {
  if (Object.setPrototypeOf) {
    let _Object = Object;
    let fn = Object.getPrototypeOf;
  } else {
    fn = (arg0) => {
      let __proto__ = arg0.__proto__;
      if (!__proto__) {
        const _Object = Object;
        __proto__ = Object.getPrototypeOf(arg0);
      }
      return __proto__;
    };
  }
  return fn(arg0);
}
function De(arg0, key10009) {
  if (typeof Reflect !== "undefined") {
    const _Reflect2 = Reflect;
    if (Reflect.get) {
      const _Reflect = Reflect;
      let fn = Reflect.get;
    }
    let tmp2 = arg2;
    if (!arg2) {
      tmp2 = arg0;
    }
    return fn(arg0, key10009, tmp2);
  }
  fn = (arg0, key10009, arg2) => {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    let tmp = arg0;
    if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
      let tmp3 = callback(arg0);
      tmp = tmp3;
      if (null !== tmp3) {
        while (true) {
          let _Object = Object;
          let call2 = hasOwnProperty2.call;
          tmp = tmp3;
          if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp3, key10009)) {
            break;
          } else {
            tmp3 = callback(tmp3);
            tmp = tmp3;
            if (null === tmp3) {
              break;
            }
          }
        }
      }
    }
    if (tmp) {
      const _Object2 = Object;
      const iter = Object.getOwnPropertyDescriptor(tmp, key10009);
      if (iter.get) {
        let tmp7 = arg2;
        const get = iter.get;
        const call3 = get.call;
        if (!arg2) {
          tmp7 = arg0;
        }
        typeof call3 === "unknown" ? get() : call3(tmp7);
      } else {
        return iter.value;
      }
    }
  };
}
function Le(arg0, fn2) {
  let fn = Object.setPrototypeOf;
  if (!fn) {
    fn = (arg0, fn2) => {
      arg0.__proto__ = fn2;
      return arg0;
    };
  }
  return fn(arg0, fn2);
}
function qt(stateData, arr) {
  if (null == stateData) {
    return {};
  } else {
    if (null == stateData) {
      let obj = {};
    } else {
      obj = {};
      const _Object = Object;
      const keys = Object.keys(stateData);
      for (let num3 = 0; num3 < keys.length; num3 = num3 + 1) {
        let tmp2 = keys[num3];
        if (arr.indexOf(tmp2) < 0) {
          obj[tmp2] = stateData[tmp2];
        }
      }
    }
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object3 = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(stateData);
      let num6 = 0;
      if (0 < ownPropertySymbols.length) {
        const tmp6 = arr.indexOf(ownPropertySymbols[num6]) < 0;
        while (!tmp6) {
          if (tmp6) {
            obj[tmp5] = stateData[tmp5];
          }
          num6 = num6 + 1;
        }
        const _Object4 = Object;
        const call = propertyIsEnumerable.call;
        typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num6]) : call(stateData, ownPropertySymbols[num6]);
      }
    }
    return obj;
  }
}
function ue(arg0) {
  closure_0 = arg0;
  for (let num = 1; num < arguments.length; num = num + 1) {
    let tmp2 = null != arguments[num] ? arguments[num] : {};
    closure_1 = tmp2;
    let _Object = Object;
    let keys = Object.keys(tmp2);
    let _Object2 = Object;
    let combined = keys;
    if (typeof Object.getOwnPropertySymbols === "function") {
      let _Object3 = Object;
      let ownPropertySymbols = Object.getOwnPropertySymbols(tmp2);
      combined = keys.concat(ownPropertySymbols.filter((item, index) => Object.getOwnPropertyDescriptor(closure_1, item).enumerable));
    }
    let item = combined.forEach((item, index) => {
      if (item in closure_0) {
        const _Object = Object;
        const obj = { value: null, enumerable: true, configurable: true, writable: true };
        obj[0] = tmp2;
        Object.defineProperty(closure_0, item, obj);
      } else {
        closure_0[item] = tmp2;
      }
    });
  }
  return arg0;
}
function pt(arg0, arg1, arg2, arg3) {

}
const f94626 = () => {

};
let f94619 = (arg0, arg1) => {
  if (typeof f94627 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (!obj) {
    obj = { exports: null };
    obj[0] = {};
    f94619(obj.exports, obj);
  }
  const _exports = new obj.exports();
  arg1.exports = _exports;
};
let create;
const f94627 = () => {

};
let obj = {
  default() {
    return ne;
  }
};
for (const key10058 in obj) {
  obj = { get: null, enumerable: true };
  obj[0] = obj[key10058];
  let definePropertyResult = defineProperty(obj, key10058, obj);
  continue;
}
f94619 = obj;
if (typeof obj === "object") {
  const ownPropertyNames = getOwnPropertyNames(obj);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    do {
      let tmp3 = ownPropertyNames[num];
      let call = hasOwnProperty.call;
      let tmp5 = typeof call === "unknown" ? hasOwnProperty(tmp3) : call(definePropertyResult1, tmp3);
      let tmp6 = !tmp5;
      if (!tmp5) {
        tmp6 = tmp3 !== undefined;
      }
      if (tmp6) {
        let obj1 = { get: null, enumerable: null };
        let fn = (arg0) => table[arg0];
        obj1[0] = fn.bind(null, tmp3);
        let ownPropertyDescriptor = getOwnPropertyDescriptor(obj, tmp3);
        let enumerable = !ownPropertyDescriptor;
        if (ownPropertyDescriptor) {
          enumerable = ownPropertyDescriptor.enumerable;
        }
        obj1[1] = enumerable;
        let definePropertyResult2 = defineProperty(definePropertyResult1, tmp3, obj1);
      }
      num = num + 1;
    } while (num < length);
  }
}
class G {
  constructor(arg0, arg1, arg2) {
    if (null != global) {
      tmp = closure_1;
      tmp2 = getPrototypeOf;
      obj = closure_1(getPrototypeOf(global));
    } else {
      obj = {};
    }
    tmp3 = pt;
    if (!global) {
      tmp5 = defineProperty;
      obj = { value: null, enumerable: true };
      obj[0] = global;
      str = "default";
      tmp4 = defineProperty(obj, "default", obj);
    } else {
      tmp4 = obj;
    }
    if (typeof tmp3 !== "function") {
      str2 = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    closure_0 = global;
    if (!global) {
      return tmp4;
    }
    arr = getOwnPropertyNames(global);
    length = arr.length;
    for (let num = 0; num < length; num = num + 1) {
      tmp6 = arr[num];
      tmp7 = hasOwnProperty;
      call = hasOwnProperty.call;
      tmp8 = num;
      tmp9 = typeof call === "unknown" ? tmp7(tmp6) : call(tmp4, tmp6);
      tmp10 = !tmp9;
      if (!tmp9) {
        tmp10 = tmp6 !== undefined;
      }
      if (tmp10) {
        obj1 = { get: null, enumerable: null };
        fn = (arg0) => table[arg0];
        tmp11 = defineProperty;
        obj1[0] = fn.bind(null, tmp6);
        tmp12 = getOwnPropertyDescriptor;
        tmp13 = getOwnPropertyDescriptor(global, tmp6);
        enumerable = !tmp13;
        if (tmp13) {
          enumerable = tmp13.enumerable;
        }
        obj1[1] = enumerable;
        tmp11Result = tmp11(tmp4, tmp6, obj1);
      }
    }
    return;
  }
}
let obj2 = { exports: {} };
const GResult = G(obj2.exports);
let closure_25 = G(obj2.exports);
let closure_26 = G(obj2.exports);
let obj3 = {
  now() {
    const _performance = mod2.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    if (typeof navigationStart === "number") {
      if (typeof _performance.now === "function") {
        let sum = navigationStart + _performance.now();
      }
      const _Math = Math;
      return Math.round(sum);
    }
    sum = Date.now();
  }
};
function ee() {
  const _crypto = mod.default.crypto;
  let getRandomValues;
  if (null !== _crypto) {
    if (undefined !== _crypto) {
      getRandomValues = _crypto.getRandomValues;
    }
  }
  if (typeof getRandomValues === "function") {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(32);
    items = uint8Array;
    const _crypto2 = mod.default.crypto;
    const randomValues = _crypto2.getRandomValues(uint8Array);
    let num6 = 0;
    do {
      uint8Array[num6] = uint8Array[num6] % 16;
      num6 = num6 + 1;
    } while (num6 < 32);
  } else {
    items = [];
    let num = 0;
    do {
      let _Math = Math;
      items[num] = 16 * Math.random() | 0;
      num = num + 1;
    } while (num < 32);
  }
  c1 = 0;
  let str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
    if ("x" === arg0) {
      let str = items[closure_1];
    } else {
      str = 3 & items[closure_1] | 8;
    }
    closure_1 = closure_1 + 1;
    return str.toString(16);
  });
  const str2 = obj3.now();
  let substr;
  if (null != str2) {
    substr = str2.toString(16).substring(3);
    const str3 = str2.toString(16);
  }
  let sum = str;
  if (substr) {
    sum = str.substring(0, 28) + substr;
  }
  return sum;
}
class Oe {
  constructor() {
    random = Math.random();
    str = random * require("00036__arrayLikeToArray.js") | 0;
    text = `000000${require("00036__arrayLikeToArray.js")}`;
    return require("module_4294967290");
  }
}
function J(nodeName) {
  if (nodeName) {
    if (undefined !== nodeName.nodeName) {
      if (!nodeName.muxId) {
        nodeName.muxId = Oe();
      }
      return nodeName.muxId;
    }
  }
  try {
    const _document = document;
    const element = document.querySelector(nodeName);
    let tmp3 = element;
    if (element) {
      tmp3 = !element.muxId;
    }
    if (tmp3) {
      element.muxId = nodeName;
    }
    let muxId;
    if (null != element) {
      muxId = element.muxId;
    }
    if (!muxId) {
      muxId = nodeName;
    }
    return muxId;
  } catch (err) {
  }
}
function se(nodeName) {
  if (nodeName) {
    if (undefined !== nodeName.nodeName) {
      let tmp2 = J(nodeName);
      let element = nodeName;
    }
    let str2 = "";
    if (element) {
      str2 = "";
      if (element.nodeName) {
        str2 = element.nodeName.toLowerCase();
      }
    }
    items = [element, tmp2, str2];
    return items;
  }
  element = document.querySelector(nodeName);
  tmp2 = nodeName;
}
let c33 = 0;
let c34 = 1;
let c35 = 2;
let c36 = 3;
let c37 = 4;
let tmp11 = ((arg0) => {
  if (arguments.length > 1) {
  }
  const _console = console;
  if (arg0) {
    items = [_console, arg0];
    let items1 = items;
  } else {
    items1 = [_console];
  }
  const bind = trace.bind;
  closure_1 = bind.apply(trace, V(items1));
  const bind2 = info.bind;
  closure_2 = bind2.apply(info, V(items1));
  const bind3 = debug.bind;
  closure_3 = bind3.apply(debug, V(items1));
  const bind4 = warn.bind;
  closure_4 = bind4.apply(warn, V(items1));
  error = console.error;
  const bind5 = error.bind;
  closure_5 = bind5.apply(error, V(items1));
  const obj = {
    trace() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_1_33) {
        return callback.apply(undefined, closure_1_32(array));
      }
    },
    debug() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_1_34) {
        return callback3.apply(undefined, closure_1_32(array));
      }
    },
    info() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_1_35) {
        return callback2.apply(undefined, closure_1_32(array));
      }
    },
    warn() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_1_36) {
        return callback4.apply(undefined, closure_1_32(array));
      }
    },
    error() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (num <= closure_1_37) {
        return callback5.apply(undefined, closure_1_32(array));
      }
    }
  };
  Object.defineProperty(obj, "level", {
    get: () => num,
    set: function(arg0) {
      let tmp = arg0;
      if (arg0 !== this.level) {
        if (null == tmp) {
          tmp = num;
        }
        closure_6 = tmp;
      }
    }
  });
  return obj;
})("[mux]");
let closure_38 = tmp11;
let closure_39 = G(obj2.exports);
if (f94619) {
  f94619 = 0;
  create = require("../discord_app/index.native.tsx");
}
if (f94619) {
  f94619 = 0;
  create = require("../discord_app/index.native.tsx");
}
class N {
  constructor(arg0, arg1, arg2) {
    for (let num = 0; num < require.length; num = num + 1) {
      tmp2 = require[num];
      flag = tmp2.enumerable;
      tmp3 = num;
      if (!flag) {
        flag = false;
      }
      tmp2.enumerable = flag;
      tmp2.configurable = true;
      if ("value" in tmp2) {
        tmp2.writable = true;
      }
      _Object = Object;
      definePropertyResult = Object.defineProperty(tmp, tmp2.key, tmp2);
    }
    return global;
  }
}
class F {
  constructor(arg0) {
    if (typeof re !== "function") {
      str2 = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    if (typeof global === "string") {
      str3 = "";
      if ("" !== global) {
        tmp = global.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
        str = tmp[4];
        first = undefined;
        if (str) {
          tmp3 = str.match(/[^\.]+\.[^\.]+$/) || [];
          first = tmp3[0];
        }
        items = [, ];
        items[0] = str;
        items[1] = first;
      }
      return items[0];
    }
    items = ["localhost"];
    return;
  }
}
let closure_44 = F;
function re(str) {
  if (typeof str === "string") {
    if ("" !== str) {
      str = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
      let first;
      if (str) {
        first = str.match(/[^\.]+\.[^\.]+$/) || [][0];
        const tmp3 = str.match(/[^\.]+\.[^\.]+$/) || [];
      }
      items = [str, first];
      return items;
    }
  }
  return ["localhost"];
}
let closure_46 = G(obj2.exports);
let closure_47 = {
  exists() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    return undefined !== timing;
  },
  domContentLoadedEventEnd() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let domContentLoadedEventEnd = timing;
    if (timing) {
      domContentLoadedEventEnd = timing.domContentLoadedEventEnd;
    }
    return domContentLoadedEventEnd;
  },
  navigationStart() {
    const _performance = mod4.default.performance;
    let timing = _performance;
    if (_performance) {
      timing = _performance.timing;
    }
    let navigationStart = timing;
    if (timing) {
      navigationStart = timing.navigationStart;
    }
    return navigationStart;
  }
};
let items = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"];
let items1 = ["x-cdn", "content-type"];
let closure_50 = items1.concat(items);
function Me(arg0) {

}
function He(arg0) {

}
function Se(arg0) {

}
function Nt(requestEndDate, getMetricsFor) {
  if (requestEndDate) {
    if (requestEndDate.requestEndDate) {
      if (typeof closure_44 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof re !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof requestEndDate.url === "string") {
        if ("" !== str) {
          const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
          let first;
          if (str2) {
            first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
            const tmp5 = str2.match(/[^\.]+\.[^\.]+$/) || [];
          }
          items = [str2, first];
          const tmp3 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
        }
        const _Date = Date;
        ({ url, bytesLoaded } = requestEndDate);
        const date = new Date(requestEndDate.requestStartDate);
        const _Date2 = Date;
        const time = date.getTime();
        const date1 = new Date(requestEndDate.firstByteDate);
        const _Date3 = Date;
        const time1 = date1.getTime();
        const date2 = new Date(requestEndDate.requestEndDate);
        const _isNaN = isNaN;
        const time2 = date2.getTime();
        let num2 = 0;
        if (!isNaN(requestEndDate.duration)) {
          num2 = requestEndDate.duration;
        }
        if (typeof getMetricsFor.getMetricsFor === "function") {
          let HttpList = getMetricsFor.getMetricsFor(requestEndDate.mediaType).HttpList;
        } else {
          const dashMetrics = getMetricsFor.getDashMetrics();
          HttpList = dashMetrics.getHttpRequests(requestEndDate.mediaType);
        }
        let tmp20;
        if (HttpList.length > 0) {
          let str3 = HttpList[HttpList.length - 1]._responseHeaders || "";
          let obj = {};
          if (!str3) {
            str3 = "";
          }
          const parts = str3.trim().split(/[\r\n]+/);
          const item = parts.forEach((item, index) => {
            if (item) {
              const parts = item.split(": ");
              const str2 = parts.shift();
              let tmp = str2;
              if (str2) {
                let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                if (!tmp3) {
                  const formatted = str2.toLowerCase();
                  tmp3 = 0 === formatted.indexOf("x-litix-");
                }
                tmp = tmp3;
              }
              if (tmp) {
                obj[str2] = parts.join(": ");
              }
            }
          });
          tmp20 = obj;
          const str4 = str3.trim();
        }
        obj = { requestStart: null, requestResponseStart: null, requestResponseEnd: null, requestBytesLoaded: null, requestResponseHeaders: null, requestMediaDuration: null, requestHostname: null, requestUrl: null, requestId: null };
        obj[0] = time;
        obj[1] = time1;
        obj[2] = time2;
        obj[3] = bytesLoaded;
        obj[4] = tmp20;
        obj[5] = num2;
        obj[6] = items[0];
        obj[7] = url;
        let tmp22;
        if (tmp20) {
          obj = tmp20;
          let tmp23;
          if (tmp20) {
            const found = items.find((item, index) => undefined !== obj[item]);
            let tmp26;
            if (found) {
              tmp26 = tmp20[found];
            }
            tmp23 = tmp26;
          }
          tmp22 = tmp23;
        }
        obj[8] = tmp22;
        return obj;
      }
      items = ["localhost"];
    }
  }
  return {};
}
function pa(arg0) {

}
function Ct(arg0, arg1, arg2) {

}
let c57 = 0;
let fn2 = function r() {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (f94619[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = f94619[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_listeners" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_listeners", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._listeners = undefined;
      }
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (f94619[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = f94619[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, f94619);
};
let items2 = [
  {
    key: "on",
    value(arg0, _eventEmitterGuid, self) {
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = c57 + 1;
        c57 = sum;
        _eventEmitterGuid = sum;
      }
      self = this;
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      self._listeners = this._listeners || {};
      items = self._listeners[arg0];
      if (!items) {
        items = [];
      }
      self._listeners[arg0] = items;
      let bindResult = _eventEmitterGuid;
      if (self) {
        bindResult = _eventEmitterGuid.bind(self);
      }
      self._listeners[arg0].push(bindResult);
      return bindResult;
    }
  },
  {
    key: "off",
    value(arg0, arg1) {
      closure_0 = arg1;
      let _listeners = this._listeners;
      if (_listeners) {
        _listeners = tmp._listeners[arg0];
      }
      if (_listeners) {
        const item = _listeners.forEach((item, index) => {
          if (item._eventEmitterGuid === _eventEmitterGuid._eventEmitterGuid) {
            _listeners.splice(index, 1);
          }
        });
      }
    }
  },
  {
    key: "one",
    value(arg0, _eventEmitterGuid) {
      closure_0 = arg0;
      closure_1 = _eventEmitterGuid;
      closure_2 = arg2;
      let self = this;
      _eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      if (!_eventEmitterGuid) {
        const sum = c57 + 1;
        c57 = sum;
        _eventEmitterGuid = sum;
      }
      _eventEmitterGuid._eventEmitterGuid = _eventEmitterGuid;
      const fn = function o() {
        self.off(closure_0, fn);
        const apply = closure_1.apply;
        self = closure_2;
        if (!closure_2) {
          self = this;
        }
        if (typeof apply === "unknown") {
          HermesBuiltin.applyArguments(self);
        } else {
          apply(self, arguments);
        }
      };
      fn._eventEmitterGuid = _eventEmitterGuid._eventEmitterGuid;
      self.on(arg0, fn);
    }
  },
  {
    key: "emit",
    value(arg0, arg1) {
      const self = this;
      if (this._listeners) {
        const substr = self._listeners["before" + arg0] || [].slice();
        const item = substr.forEach((item, index) => {
          const call = item.call;
          obj = { type: obj };
          if (typeof call === "unknown") {
            item(obj, tmp2);
          } else {
            call(self, obj, tmp2);
          }
        });
        const substr1 = self._listeners["before*"] || [].slice();
        const item1 = substr1.forEach((item, index) => {
          const call = item.call;
          obj = { type: obj };
          if (typeof call === "unknown") {
            item(obj, tmp2);
          } else {
            call(self, obj, tmp2);
          }
        });
        const substr2 = self._listeners[arg0] || [].slice();
        const item2 = substr2.forEach((item, index) => {
          const call = item.call;
          obj = { type: obj };
          if (typeof call === "unknown") {
            item(obj, tmp2);
          } else {
            call(self, obj, tmp2);
          }
        });
        const substr3 = self._listeners["after" + arg0] || [].slice();
        const item3 = substr3.forEach((item, index) => {
          const call = item.call;
          obj = { type: obj };
          if (typeof call === "unknown") {
            item(obj, tmp2);
          } else {
            call(self, obj, tmp2);
          }
        });
      }
    }
  }
];
N(fn2, items2);
let closure_58 = G(obj2.exports);
let fn3 = function r(pm) {
  closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackHeartbeatInterval" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackHeartbeatInterval", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._playbackHeartbeatInterval = undefined;
      }
      if ("_playheadShouldBeProgressing" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_playheadShouldBeProgressing", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._playheadShouldBeProgressing = undefined;
      }
      if ("pm" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._playbackHeartbeatInterval = null;
      self._playheadShouldBeProgressing = false;
      pm.on("playing", () => {
        self._playheadShouldBeProgressing = true;
      });
      const _startPlaybackHeartbeatInterval = self._startPlaybackHeartbeatInterval;
      pm.on("play", _startPlaybackHeartbeatInterval.bind(self));
      const _startPlaybackHeartbeatInterval2 = self._startPlaybackHeartbeatInterval;
      pm.on("playing", _startPlaybackHeartbeatInterval2.bind(self));
      const _startPlaybackHeartbeatInterval3 = self._startPlaybackHeartbeatInterval;
      pm.on("adbreakstart", _startPlaybackHeartbeatInterval3.bind(self));
      const _startPlaybackHeartbeatInterval4 = self._startPlaybackHeartbeatInterval;
      pm.on("adplay", _startPlaybackHeartbeatInterval4.bind(self));
      const _startPlaybackHeartbeatInterval5 = self._startPlaybackHeartbeatInterval;
      pm.on("adplaying", _startPlaybackHeartbeatInterval5.bind(self));
      const _startPlaybackHeartbeatInterval6 = self._startPlaybackHeartbeatInterval;
      pm.on("devicewake", _startPlaybackHeartbeatInterval6.bind(self));
      const _startPlaybackHeartbeatInterval7 = self._startPlaybackHeartbeatInterval;
      pm.on("viewstart", _startPlaybackHeartbeatInterval7.bind(self));
      const _startPlaybackHeartbeatInterval8 = self._startPlaybackHeartbeatInterval;
      pm.on("rebufferstart", _startPlaybackHeartbeatInterval8.bind(self));
      const _stopPlaybackHeartbeatInterval = self._stopPlaybackHeartbeatInterval;
      pm.on("pause", _stopPlaybackHeartbeatInterval.bind(self));
      const _stopPlaybackHeartbeatInterval2 = self._stopPlaybackHeartbeatInterval;
      pm.on("ended", _stopPlaybackHeartbeatInterval2.bind(self));
      const _stopPlaybackHeartbeatInterval3 = self._stopPlaybackHeartbeatInterval;
      pm.on("viewend", _stopPlaybackHeartbeatInterval3.bind(self));
      const _stopPlaybackHeartbeatInterval4 = self._stopPlaybackHeartbeatInterval;
      pm.on("error", _stopPlaybackHeartbeatInterval4.bind(self));
      const _stopPlaybackHeartbeatInterval5 = self._stopPlaybackHeartbeatInterval;
      pm.on("aderror", _stopPlaybackHeartbeatInterval5.bind(self));
      const _stopPlaybackHeartbeatInterval6 = self._stopPlaybackHeartbeatInterval;
      pm.on("adpause", _stopPlaybackHeartbeatInterval6.bind(self));
      const _stopPlaybackHeartbeatInterval7 = self._stopPlaybackHeartbeatInterval;
      pm.on("adended", _stopPlaybackHeartbeatInterval7.bind(self));
      const _stopPlaybackHeartbeatInterval8 = self._stopPlaybackHeartbeatInterval;
      pm.on("adbreakend", _stopPlaybackHeartbeatInterval8.bind(self));
      pm.on("seeked", () => {
        if (pm.data.player_is_paused) {
          const result = self._stopPlaybackHeartbeatInterval();
        } else {
          const result1 = self._startPlaybackHeartbeatInterval();
        }
      });
      pm.on("timeupdate", () => {
        if (null !== self._playbackHeartbeatInterval) {
          pm.emit("playbackheartbeat");
        }
      });
      pm.on("devicesleep", (arg0, viewer_time) => {
        if (null !== self._playbackHeartbeatInterval) {
          closure_1_58.default.clearInterval(self._playbackHeartbeatInterval);
          const obj = { viewer_time: null };
          obj[0] = viewer_time.viewer_time;
          pm.emit("playbackheartbeatend", obj);
          self._playbackHeartbeatInterval = null;
          const _default = closure_1_58.default;
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
let items3 = [
  {
    key: "_startPlaybackHeartbeatInterval",
    value() {
      const self = this;
      if (null === this._playbackHeartbeatInterval) {
        let pm = self.pm;
        pm.emit("playbackheartbeat");
        self._playbackHeartbeatInterval = mod5.default.setInterval(() => {
          const pm = self.pm;
          pm.emit("playbackheartbeat");
        }, self.pm.playbackHeartbeatTime);
        const _default = mod5.default;
      }
    }
  },
  {
    key: "_stopPlaybackHeartbeatInterval",
    value() {
      const self = this;
      this._playheadShouldBeProgressing = false;
      if (null !== this._playbackHeartbeatInterval) {
        mod5.default.clearInterval(self._playbackHeartbeatInterval);
        const pm = self.pm;
        pm.emit("playbackheartbeatend");
        self._playbackHeartbeatInterval = null;
        const _default = mod5.default;
      }
    }
  }
];
N(fn3, items3);
let fn4 = function r(on) {
  closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn4[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn4[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("viewErrored" in self) {
        const _Object = Object;
        Object.defineProperty(self, "viewErrored", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.viewErrored = undefined;
      }
      on.on("viewinit", () => {
        self.viewErrored = false;
      });
      on.on("error", (arg0, player_error_code) => {
        try {
          const obj = { player_error_code: null, player_error_message: null, player_error_context: null, player_error_severity: null, player_error_business_exception: null };
          ({ player_error_code: obj[0], player_error_message: obj[1], player_error_context: obj[2], player_error_severity: obj[3], player_error_business_exception: obj[4] } = player_error_code);
          const errorTranslatorResult = on.errorTranslator(obj);
          if (errorTranslatorResult) {
            player_error_code = tmp5.player_error_code;
            if (!player_error_code) {
              player_error_code = player_error_code.player_error_code;
            }
            on.data.player_error_code = player_error_code;
            let player_error_message = tmp5.player_error_message;
            if (!player_error_message) {
              player_error_message = player_error_code.player_error_message;
            }
            on.data.player_error_message = player_error_message;
            let player_error_context = tmp5.player_error_context;
            if (!player_error_context) {
              player_error_context = player_error_code.player_error_context;
            }
            on.data.player_error_context = player_error_context;
            let player_error_severity = tmp5.player_error_severity;
            if (!player_error_severity) {
              player_error_severity = player_error_code.player_error_severity;
            }
            on.data.player_error_severity = player_error_severity;
            let player_error_business_exception = errorTranslatorResult.player_error_business_exception;
            if (!player_error_business_exception) {
              player_error_business_exception = player_error_code.player_error_business_exception;
            }
            on.data.player_error_business_exception = player_error_business_exception;
            self.viewErrored = true;
          }
        } catch (tmp16) {
          const log = on.mux.log;
          log.warn("Exception in error translator callback.", tmp16);
          self.viewErrored = true;
        }
      });
      on.on("aftererror", () => {
        const data = on.data;
        let tmp5 = null === data;
        if (!tmp5) {
          tmp5 = undefined === data;
        }
        if (!tmp5) {
          delete tmp3[tmp2];
        }
        const data2 = on.data;
        let tmp6 = null === data2;
        if (!tmp6) {
          tmp6 = undefined === data2;
        }
        if (!tmp6) {
          delete tmp3[tmp2];
        }
        const data3 = on.data;
        let tmp7 = null === data3;
        if (!tmp7) {
          tmp7 = undefined === data3;
        }
        if (!tmp7) {
          delete tmp3[tmp2];
        }
        const data4 = on.data;
        let tmp8 = null === data4;
        if (!tmp8) {
          tmp8 = undefined === data4;
        }
        if (!tmp8) {
          delete tmp3[tmp2];
        }
        const data5 = on.data;
        let tmp9 = null === data5;
        if (!tmp9) {
          tmp9 = undefined === data5;
        }
        if (!tmp9) {
          delete tmp2[tmp];
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn4[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn4[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn4);
};
let fn5 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (f94619[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = f94619[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_watchTimeTrackerLastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_watchTimeTrackerLastCheckedTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._watchTimeTrackerLastCheckedTime = undefined;
      }
      if ("pm" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._watchTimeTrackerLastCheckedTime = null;
      const _updateWatchTime = self._updateWatchTime;
      pm.on("playbackheartbeat", _updateWatchTime.bind(self));
      const _clearWatchTimeState = self._clearWatchTimeState;
      pm.on("playbackheartbeatend", _clearWatchTimeState.bind(self));
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (f94619[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = f94619[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, f94619);
};
let items4 = [
  {
    key: "_updateWatchTime",
    value(arg0, viewer_time) {
      const self = this;
      viewer_time = viewer_time.viewer_time;
      if (null === this._watchTimeTrackerLastCheckedTime) {
        self._watchTimeTrackerLastCheckedTime = viewer_time;
      }
      const data = self.pm.data;
      let num = data.view_watch_time;
      const diff = viewer_time - self._watchTimeTrackerLastCheckedTime;
      if (!num) {
        num = 0;
      }
      data.view_watch_time = data.view_watch_time + diff;
      self._watchTimeTrackerLastCheckedTime = viewer_time;
    }
  },
  {
    key: "_clearWatchTimeState",
    value(arg0, arg1) {
      this._updateWatchTime(arg0, arg1);
      this._watchTimeTrackerLastCheckedTime = null;
    }
  }
];
N(fn5, items4);
let fn6 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_playbackTimeTrackerLastPlayheadPosition" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_playbackTimeTrackerLastPlayheadPosition", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._playbackTimeTrackerLastPlayheadPosition = undefined;
      }
      if ("_lastTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastTime = undefined;
      }
      if ("_isAdPlaying" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_isAdPlaying", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._isAdPlaying = undefined;
      }
      if ("_callbackUpdatePlaybackTime" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_callbackUpdatePlaybackTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._callbackUpdatePlaybackTime = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      self._playbackTimeTrackerLastPlayheadPosition = -1;
      self._lastTime = obj3.now();
      self._isAdPlaying = false;
      self._callbackUpdatePlaybackTime = null;
      pm.on("viewinit", () => {
        self.pm.data.view_playing_time_ms_cumulative = 0;
      });
      const _startPlaybackTimeTracking = self._startPlaybackTimeTracking;
      const bindResult = _startPlaybackTimeTracking.bind(self);
      pm.on("playing", bindResult);
      pm.on("adplaying", bindResult);
      pm.on("seeked", bindResult);
      pm.on("rebufferend", bindResult);
      const _stopPlaybackTimeTracking = self._stopPlaybackTimeTracking;
      const bindResult1 = _stopPlaybackTimeTracking.bind(self);
      pm.on("playbackheartbeatend", bindResult1);
      pm.on("seeking", bindResult1);
      pm.on("rebufferstart", bindResult1);
      pm.on("adplaying", () => {
        self._isAdPlaying = true;
      });
      pm.on("adended", () => {
        self._isAdPlaying = false;
      });
      pm.on("adpause", () => {
        self._isAdPlaying = false;
      });
      pm.on("adbreakstart", () => {
        self._isAdPlaying = false;
      });
      pm.on("adbreakend", () => {
        self._isAdPlaying = false;
      });
      pm.on("adplay", () => {
        self._isAdPlaying = false;
      });
      pm.on("viewinit", () => {
        self._playbackTimeTrackerLastPlayheadPosition = -1;
        self._lastTime = obj3.now();
        self._isAdPlaying = false;
        self._callbackUpdatePlaybackTime = null;
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
const items5 = [
  {
    key: "_startPlaybackTimeTracking",
    value() {
      const self = this;
      if (null === this._callbackUpdatePlaybackTime) {
        const _updatePlaybackTime = self._updatePlaybackTime;
        self._callbackUpdatePlaybackTime = _updatePlaybackTime.bind(self);
        self._playbackTimeTrackerLastPlayheadPosition = self.pm.data.player_playhead_time;
        self._lastTime = obj3.now();
        const pm = self.pm;
        pm.on("playbackheartbeat", self._callbackUpdatePlaybackTime);
      }
    }
  },
  {
    key: "_stopPlaybackTimeTracking",
    value() {
      const self = this;
      if (this._callbackUpdatePlaybackTime) {
        self._updatePlaybackTime();
        const pm = self.pm;
        pm.off("playbackheartbeat", self._callbackUpdatePlaybackTime);
        self._callbackUpdatePlaybackTime = null;
        self._playbackTimeTrackerLastPlayheadPosition = -1;
      }
    }
  },
  {
    key: "_updatePlaybackTime",
    value() {
      const self = this;
      const nowResult = obj3.now();
      const diff = nowResult - self._lastTime;
      if (self._playbackTimeTrackerLastPlayheadPosition >= 0) {
        if (tmp > self._playbackTimeTrackerLastPlayheadPosition) {
          let num = tmp - self._playbackTimeTrackerLastPlayheadPosition;
        }
        let tmp4 = num > 0;
        if (tmp4) {
          tmp4 = num <= 1000;
        }
        if (tmp4) {
          const data = self.pm.data;
          data.view_content_playback_time = data.view_content_playback_time || 0;
          data.view_content_playback_time = data.view_content_playback_time + num;
        }
        let tmp6 = null !== self._callbackUpdatePlaybackTime && diff > 0;
        if (tmp6) {
          tmp6 = diff <= 1000;
        }
        if (tmp6) {
          if (self._isAdPlaying) {
            const data2 = self.pm.data;
            data2.ad_playing_time_ms_cumulative = data2.ad_playing_time_ms_cumulative || 0;
            data2.ad_playing_time_ms_cumulative = data2.ad_playing_time_ms_cumulative + diff;
          }
          const data3 = self.pm.data;
          data3.view_playing_time_ms_cumulative = data3.view_playing_time_ms_cumulative || 0;
          data3.view_playing_time_ms_cumulative = data3.view_playing_time_ms_cumulative + diff;
        }
        self._playbackTimeTrackerLastPlayheadPosition = tmp;
        self._lastTime = nowResult;
      }
      num = -1;
      if (self._isAdPlaying) {
        num = diff;
      }
    }
  }
];
N(fn6, items5);
let fn7 = function r(pm) {
  const self = this;
  closure_0 = pm;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const _updatePlayheadTime = self._updatePlayheadTime;
      const bindResult = _updatePlayheadTime.bind(self);
      pm.on("playbackheartbeat", bindResult);
      pm.on("playbackheartbeatend", bindResult);
      pm.on("timeupdate", bindResult);
      pm.on("destroy", () => {
        pm.off("timeupdate", closure_1);
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
const items6 = [
  {
    key: "_updateMaxPlayheadPosition",
    value() {
      const self = this;
      if (undefined === this.pm.data.view_max_playhead_position) {
        let player_playhead_time = self.pm.data.player_playhead_time;
      } else {
        const _Math = Math;
        player_playhead_time = Math.max(self.pm.data.view_max_playhead_position, self.pm.data.player_playhead_time);
      }
      this.pm.data.view_max_playhead_position = player_playhead_time;
    }
  },
  {
    key: "_updatePlayheadTime",
    value(arg0, player_playhead_time) {
      const self = this;
      if (player_playhead_time) {
        if (player_playhead_time.player_playhead_time) {
          self.pm.data.player_playhead_time = player_playhead_time.player_playhead_time;
          if (tmp4) {
            self.pm.data.player_program_time = self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result = self._updateMaxPlayheadPosition();
          tmp4 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
        }
      }
      if (self.pm.getPlayheadTime) {
        const pm = self.pm;
        const playheadTime = pm.getPlayheadTime();
        if (undefined !== playheadTime) {
          self.pm.data.player_playhead_time = playheadTime;
          if (tmp2) {
            self.pm.data.player_program_time = self.pm.currentFragmentPDT + self.pm.data.player_playhead_time - self.pm.currentFragmentStart;
          }
          const result1 = self._updateMaxPlayheadPosition();
          tmp2 = self.pm.currentFragmentPDT && self.pm.currentFragmentStart;
        }
      }
    }
  }
];
N(fn7, items6);
let c64 = 300000;
let fn8 = function r(disableRebufferTracking) {
  const self = this;
  closure_0 = disableRebufferTracking;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn8[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn8[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if (!disableRebufferTracking.disableRebufferTracking) {
        function i(arg0, arg1) {
          a(arg1);
          c1 = undefined;
        }
        function a(viewer_time) {
          if (viewer_time) {
            const data = disableRebufferTracking.data;
            let num = data.view_rebuffer_duration;
            const diff = viewer_time.viewer_time - viewer_time;
            if (!num) {
              num = 0;
            }
            data.view_rebuffer_duration = num;
            data.view_rebuffer_duration = data.view_rebuffer_duration + diff;
            viewer_time = viewer_time.viewer_time;
            if (disableRebufferTracking.data.view_rebuffer_duration > closure_1_64) {
              disableRebufferTracking.emit("viewend");
              disableRebufferTracking.send("viewend");
              const log = disableRebufferTracking.mux.log;
              const concat = "Ending view after rebuffering for longer than ".concat;
              log.warn("Ending view after rebuffering for longer than ".concat(tmp4, "ms, future events will be ignored unless a programchange or videochange occurs."));
            }
          }
          if (tmp9) {
            disableRebufferTracking.data.view_rebuffer_frequency = disableRebufferTracking.data.view_rebuffer_count / disableRebufferTracking.data.view_watch_time;
            disableRebufferTracking.data.view_rebuffer_percentage = disableRebufferTracking.data.view_rebuffer_duration / disableRebufferTracking.data.view_watch_time;
          }
          tmp9 = disableRebufferTracking.data.view_watch_time >= 0 && disableRebufferTracking.data.view_rebuffer_count > 0;
        }
        disableRebufferTracking.on("playbackheartbeat", (arg0, arg1) => {
          a(arg1);
        });
        disableRebufferTracking.on("rebufferstart", (arg0, viewer_time) => {
          if (!viewer_time) {
            const data = disableRebufferTracking.data;
            data.view_rebuffer_count = data.view_rebuffer_count || 0;
            data.view_rebuffer_count = data.view_rebuffer_count + 1;
            viewer_time = viewer_time.viewer_time;
            disableRebufferTracking.one("rebufferend", i);
          }
        });
        disableRebufferTracking.on("viewinit", () => {
          c1 = undefined;
          disableRebufferTracking.off("rebufferend", i);
        });
      }
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn8[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn8[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn8);
};
const fn9 = function r(pm) {
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastCheckedTime" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastCheckedTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastCheckedTime = undefined;
      }
      if ("_lastPlayheadTime" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayheadTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastPlayheadTime = undefined;
      }
      if ("_lastPlayheadTimeUpdatedTime" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadTimeUpdatedTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastPlayheadTimeUpdatedTime = undefined;
      }
      if ("_rebuffering" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_rebuffering", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._rebuffering = undefined;
      }
      if ("pm" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      const disableRebufferTracking = pm.disableRebufferTracking;
      let tmp13 = !disableRebufferTracking;
      if (!disableRebufferTracking) {
        tmp13 = !pm.disablePlayheadRebufferTracking;
      }
      if (tmp13) {
        self._lastCheckedTime = null;
        self._lastPlayheadTime = null;
        self._lastPlayheadTimeUpdatedTime = null;
        const _checkIfRebuffering = self._checkIfRebuffering;
        pm.on("playbackheartbeat", _checkIfRebuffering.bind(self));
        const _cleanupRebufferTracker = self._cleanupRebufferTracker;
        pm.on("playbackheartbeatend", _cleanupRebufferTracker.bind(self));
        pm.on("seeking", () => {
          const result = self._cleanupRebufferTracker(null, { viewer_time: obj3.now() });
        });
      }
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
const items7 = [
  {
    key: "_checkIfRebuffering",
    value(arg0, viewer_time) {
      const self = this;
      if (!this.pm.seekingTracker.isSeeking) {
        if (!self.pm.adTracker.isAdBreak) {
          if (self.pm.playbackHeartbeat._playheadShouldBeProgressing) {
            if (null !== self._lastCheckedTime) {
              if (self._lastPlayheadTime === self.pm.data.player_playhead_time) {
                const sustainedRebufferThreshold = self.pm.sustainedRebufferThreshold;
                let tmp5 = typeof sustainedRebufferThreshold === "number";
                if (typeof sustainedRebufferThreshold === "number") {
                  tmp5 = tmp4 >= self.pm.sustainedRebufferThreshold;
                }
                if (tmp5) {
                  if (!self._rebuffering) {
                    self._rebuffering = true;
                    const pm = self.pm;
                    const obj = { viewer_time: null };
                    obj[0] = self._lastPlayheadTimeUpdatedTime;
                    pm.emit("rebufferstart", obj);
                  }
                }
                self._lastCheckedTime = viewer_time.viewer_time;
              } else {
                const result = self._cleanupRebufferTracker(arg0, viewer_time, true);
              }
            } else {
              const result1 = self._prepareRebufferTrackerState(viewer_time.viewer_time);
            }
          }
        }
      }
      const result2 = self._cleanupRebufferTracker(arg0, viewer_time);
    }
  },
  {
    key: "_clearRebufferTrackerState",
    value() {

    }
  },
  {
    key: "_prepareRebufferTrackerState",
    value(_lastCheckedTime) {
      this._lastCheckedTime = _lastCheckedTime;
      this._lastPlayheadTime = this.pm.data.player_playhead_time;
      this._lastPlayheadTimeUpdatedTime = _lastCheckedTime;
    }
  },
  {
    key: "_cleanupRebufferTracker",
    value(arg0, viewer_time) {
      const self = this;
      if (this._rebuffering) {
        self._rebuffering = false;
        const pm3 = self.pm;
        let obj = { viewer_time: null };
        obj[0] = viewer_time.viewer_time;
        pm3.emit("rebufferend", obj);
      } else if (null !== self._lastCheckedTime) {
        const diff = self.pm.data.player_playhead_time - self._lastPlayheadTime;
        const diff1 = viewer_time.viewer_time - self._lastPlayheadTimeUpdatedTime;
        const minimumRebufferDuration = self.pm.minimumRebufferDuration;
        let tmp3 = typeof minimumRebufferDuration === "number";
        if (typeof minimumRebufferDuration === "number") {
          tmp3 = diff > 0;
        }
        if (tmp3) {
          tmp3 = diff1 - diff > self.pm.minimumRebufferDuration;
        }
        if (tmp3) {
          self._lastCheckedTime = null;
          const pm = self.pm;
          obj = { viewer_time: null };
          obj[0] = self._lastPlayheadTimeUpdatedTime;
          pm.emit("rebufferstart", obj);
          const pm2 = self.pm;
          obj = { viewer_time: null };
          obj[0] = self._lastPlayheadTimeUpdatedTime + diff1 - diff;
          pm2.emit("rebufferend", obj);
        }
      }
      if (tmp) {
        const result = self._prepareRebufferTrackerState(viewer_time.viewer_time);
      } else {
        const result1 = self._clearRebufferTrackerState();
      }
    }
  }
];
N(fn9, items7);
const fn10 = function r(pm) {
  closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("pm" in self) {
        const _Object = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      pm.on("viewinit", () => {
        const data = view_id.data;
        view_id = data.view_id;
        if (!data.view_program_changed) {
          const fn = function n(type, viewer_time) {
            viewer_time = viewer_time.viewer_time;
            let tmp = "playing" === type.type;
            if (tmp) {
              tmp = undefined === view_id.data.view_time_to_first_frame;
            }
            if (!tmp) {
              let tmp3 = "adplaying" === type.type;
              if (tmp3) {
                let _inPrerollPositionResult = undefined === view_id.data.view_time_to_first_frame;
                if (!_inPrerollPositionResult) {
                  _inPrerollPositionResult = fn._inPrerollPosition();
                }
                tmp3 = _inPrerollPositionResult;
              }
              tmp = tmp3;
            }
            if (tmp) {
              if (!viewer_time) {
                viewer_time = obj3.now();
              }
              const result = fn.calculateTimeToFirstFrame(viewer_time, view_id);
            }
          };
          obj.one("playing", fn);
          obj.one("adplaying", fn);
          obj.one("viewend", () => {
            view_id.off("playing", fn);
            view_id.off("adplaying", fn);
          });
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
const items8 = [
  {
    key: "_inPrerollPosition",
    value() {
      let tmp = undefined === this.pm.data.view_content_playback_time;
      if (!tmp) {
        tmp = this.pm.data.view_content_playback_time <= 1000;
      }
      return tmp;
    }
  },
  {
    key: "calculateTimeToFirstFrame",
    value(arg0, arg1) {
      const self = this;
      if (arg1 === this.pm.data.view_id) {
        const watchTimeTracker = self.pm.watchTimeTracker;
        const obj = { viewer_time: null };
        obj[0] = arg0;
        watchTimeTracker._updateWatchTime(null, obj);
        self.pm.data.view_time_to_first_frame = self.pm.data.view_watch_time;
        if (tmp) {
          self.pm.data.view_aggregate_startup_time = self.pm.data.view_start + self.pm.data.view_watch_time - self.pm.pageLoadInitTime;
        }
        tmp = (self.pm.data.player_autoplay_on || self.pm.data.video_is_autoplay) && self.pm.pageLoadInitTime;
      }
    }
  }
];
N(fn10, items8);
const fn11 = function r(on) {
  closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn11[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn11[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastPlayerHeight" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_lastPlayerHeight", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastPlayerHeight = undefined;
      }
      if ("_lastPlayerWidth" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_lastPlayerWidth", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastPlayerWidth = undefined;
      }
      if ("_lastPlayheadPosition" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_lastPlayheadPosition", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastPlayheadPosition = undefined;
      }
      if ("_lastSourceHeight" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_lastSourceHeight", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastSourceHeight = undefined;
      }
      if ("_lastSourceWidth" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_lastSourceWidth", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastSourceWidth = undefined;
      }
      on.on("viewinit", () => {
        self._lastPlayheadPosition = -1;
      });
      items = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb", "renditionchange", "orientationchange", "viewend", "playbackmodechange"];
      const item = items.forEach((item, index) => {
        on.on(item, () => {
          if (obj._lastPlayheadPosition >= 0) {
            if (data.data.player_playhead_time >= 0) {
              if (obj._lastPlayerWidth >= 0) {
                if (obj._lastSourceWidth > 0) {
                  if (obj._lastPlayerHeight >= 0) {
                    if (obj._lastSourceHeight > 0) {
                      const diff = tmp4.data.player_playhead_time - obj._lastPlayheadPosition;
                      if (diff < 0) {
                        obj._lastPlayheadPosition = -1;
                      } else {
                        const _Math = Math;
                        const bound = Math.min(obj._lastPlayerWidth / obj._lastSourceWidth, obj._lastPlayerHeight / obj._lastSourceHeight);
                        const _Math2 = Math;
                        const bound1 = Math.max(0, bound - 1);
                        const _Math3 = Math;
                        const bound2 = Math.max(0, 1 - bound);
                        let num = tmp4.data.view_max_upscale_percentage;
                        if (!num) {
                          num = 0;
                        }
                        tmp4.data.view_max_upscale_percentage = Math.max(num, bound1);
                        let num2 = tmp4.data.view_max_downscale_percentage;
                        if (!num2) {
                          num2 = 0;
                        }
                        tmp4.data.view_max_downscale_percentage = Math.max(num2, bound2);
                        data = tmp4.data;
                        data.view_total_content_playback_time = data.view_total_content_playback_time || 0;
                        data.view_total_content_playback_time = data.view_total_content_playback_time + diff;
                        const data2 = tmp4.data;
                        let num3 = data2.view_total_upscaling;
                        const result = bound1 * diff;
                        if (!num3) {
                          num3 = 0;
                        }
                        data2.view_total_upscaling = num3;
                        data2.view_total_upscaling = data2.view_total_upscaling + result;
                        const data3 = tmp4.data;
                        let num4 = data3.view_total_downscaling;
                        const result1 = bound2 * diff;
                        if (!num4) {
                          num4 = 0;
                        }
                        data3.view_total_downscaling = num4;
                        data3.view_total_downscaling = data3.view_total_downscaling + result1;
                      }
                    }
                  }
                }
              }
            }
          }
          obj._lastPlayheadPosition = -1;
        });
      });
      const items1 = ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"];
      const item1 = items1.forEach((item, index) => {
        on.on(item, () => {
          closure_1._lastPlayheadPosition = closure_0.data.player_playhead_time;
          closure_1._lastPlayerWidth = closure_0.data.player_width;
          closure_1._lastPlayerHeight = closure_0.data.player_height;
          closure_1._lastSourceWidth = closure_0.data.video_source_width;
          closure_1._lastSourceHeight = closure_0.data.video_source_height;
        });
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn11[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn11[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn11);
};
const fn12 = function r(on) {
  closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn12[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn12[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("isSeeking" in self) {
        const _Object = Object;
        Object.defineProperty(self, "isSeeking", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.isSeeking = undefined;
      }
      self.isSeeking = false;
      c2 = -1;
      function a() {

      }
      on.on("seeking", (arg0, viewer_time) => {
        const merged = Object.assign(on.data, viewer_time);
        if (self.isSeeking) {
          if (viewer_time.viewer_time - viewer_time <= 2000) {
            viewer_time = viewer_time.viewer_time;
          }
        }
        if (self.isSeeking) {
          if (typeof a !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const nowResult = obj3.now();
          let tmp8 = viewer_time;
          if (!viewer_time) {
            tmp8 = nowResult;
          }
          const diff = (on.data.viewer_time || nowResult) - tmp8;
          const data = on.data;
          data.view_seek_duration = data.view_seek_duration || 0;
          data.view_seek_duration = data.view_seek_duration + diff;
          let num2 = on.data.view_max_seek_time;
          if (!num2) {
            num2 = 0;
          }
          on.data.view_max_seek_time = Math.max(num2, diff);
          self.isSeeking = false;
          viewer_time = -1;
        }
        self.isSeeking = true;
        viewer_time = viewer_time.viewer_time;
        const data2 = on.data;
        data2.view_seek_count = data2.view_seek_count || 0;
        data2.view_seek_count = data2.view_seek_count + 1;
        on.send("seeking");
      });
      on.on("seeked", () => {
        if (typeof a !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const nowResult = obj3.now();
        let tmp4 = c2;
        if (!c2) {
          tmp4 = nowResult;
        }
        const diff = (on.data.viewer_time || nowResult) - tmp4;
        const data = on.data;
        data.view_seek_duration = data.view_seek_duration + diff;
        let num = on.data.view_max_seek_time;
        if (!num) {
          num = 0;
        }
        on.data.view_max_seek_time = Math.max(num, diff);
        self.isSeeking = false;
        c2 = -1;
      });
      on.on("viewend", () => {
        if (self.isSeeking) {
          if (typeof a !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const nowResult = obj3.now();
          let tmp6 = c2;
          if (!c2) {
            tmp6 = nowResult;
          }
          const diff = (on.data.viewer_time || nowResult) - tmp6;
          const data = on.data;
          data.view_seek_duration = data.view_seek_duration || 0;
          data.view_seek_duration = data.view_seek_duration + diff;
          let num = on.data.view_max_seek_time;
          if (!num) {
            num = 0;
          }
          on.data.view_max_seek_time = Math.max(num, diff);
          self.isSeeking = false;
          c2 = -1;
          on.send("seeked");
        }
        self.isSeeking = false;
        c2 = -1;
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn12[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn12[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn12);
};
function Xt(arg0, arg1) {

}
let closure_71 = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"];
const fn13 = function r(pm) {
  closure_0 = pm;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = tmp[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_adHasPlayed" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_adHasPlayed", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._adHasPlayed = undefined;
      }
      if ("_adRequests" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_adRequests", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._adRequests = undefined;
      }
      if ("_adResponses" in self) {
        const _Object3 = Object;
        Object.defineProperty(self, "_adResponses", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._adResponses = undefined;
      }
      if ("_currentAdRequestNumber" in self) {
        const _Object4 = Object;
        Object.defineProperty(self, "_currentAdRequestNumber", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._currentAdRequestNumber = undefined;
      }
      if ("_currentAdResponseNumber" in self) {
        const _Object5 = Object;
        Object.defineProperty(self, "_currentAdResponseNumber", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._currentAdResponseNumber = undefined;
      }
      if ("_prerollPlayTime" in self) {
        const _Object6 = Object;
        Object.defineProperty(self, "_prerollPlayTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._prerollPlayTime = undefined;
      }
      if ("_wouldBeNewAdPlay" in self) {
        const _Object7 = Object;
        Object.defineProperty(self, "_wouldBeNewAdPlay", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._wouldBeNewAdPlay = undefined;
      }
      if ("isAdBreak" in self) {
        const _Object8 = Object;
        Object.defineProperty(self, "isAdBreak", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.isAdBreak = undefined;
      }
      if ("pm" in self) {
        const _Object9 = Object;
        Object.defineProperty(self, "pm", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.pm = undefined;
      }
      self.pm = pm;
      pm.on("viewinit", () => {
        self.isAdBreak = false;
        self._currentAdRequestNumber = 0;
        self._currentAdResponseNumber = 0;
        self._adRequests = [];
        self._adResponses = [];
        self._adHasPlayed = false;
        self._wouldBeNewAdPlay = true;
        self._prerollPlayTime = undefined;
      });
      const item = closure_71.forEach((item, index) => {
        const _updateAdData = self._updateAdData;
        return pm.on(item, _updateAdData.bind(self));
      });
      const fn = function i() {
        self.isAdBreak = false;
      };
      pm.on("adbreakstart", () => {
        self.isAdBreak = true;
      });
      pm.on("play", fn);
      pm.on("playing", fn);
      pm.on("viewend", fn);
      pm.on("adrequest", (arg0, arg1) => {
        self._currentAdRequestNumber = +self._currentAdRequestNumber + 1;
        const _adRequests = self._adRequests;
        const merged = Object.assign({ ad_request_id: `generatedAdRequestId${tmp}` }, arg1);
        if (typeof Xt !== "function") {
          HermesBuiltin.throwTypeError();
        }
        _adRequests.push(merged);
        const sorted = _adRequests.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
        const data = pm.data;
        data.view_ad_request_count = data.view_ad_request_count || 0;
        data.view_ad_request_count = data.view_ad_request_count + 1;
        if (self.inPrerollPosition()) {
          pm.data.view_preroll_requested = true;
          if (!self._adHasPlayed) {
            const data2 = pm.data;
            data2.view_preroll_request_count = data2.view_preroll_request_count || 0;
            data2.view_preroll_request_count = data2.view_preroll_request_count + 1;
          }
        }
      });
      pm.on("adresponse", (arg0, arg1) => {
        self._currentAdResponseNumber = +self._currentAdResponseNumber + 1;
        const merged = Object.assign({ ad_request_id: `generatedAdRequestId${tmp}` }, arg1);
        const _adResponses = self._adResponses;
        if (typeof Xt !== "function") {
          HermesBuiltin.throwTypeError();
        }
        _adResponses.push(merged);
        const sorted = _adResponses.sort((viewer_time, viewer_time2) => viewer_time.viewer_time - viewer_time2.viewer_time);
        const findAdRequestResult = self.findAdRequest(merged.ad_request_id);
        if (findAdRequestResult) {
          const data = pm.data;
          const _Math = Math;
          const bound = Math.max(0, merged.viewer_time - findAdRequestResult.viewer_time);
          let num2 = 1;
          if (undefined !== bound) {
            num2 = bound;
          }
          data.view_ad_request_time = data.view_ad_request_time || 0;
          data.view_ad_request_time = data.view_ad_request_time + num2;
        }
      });
      pm.on("adplay", (arg0, viewer_time) => {
        self._adHasPlayed = true;
        if (self._wouldBeNewAdPlay) {
          self._wouldBeNewAdPlay = false;
          const data = pm.data;
          data.view_ad_played_count = data.view_ad_played_count || 0;
          data.view_ad_played_count = data.view_ad_played_count + 1;
        }
        let inPrerollPositionResult = self.inPrerollPosition();
        if (inPrerollPositionResult) {
          inPrerollPositionResult = !pm.data.view_preroll_played;
        }
        if (inPrerollPositionResult) {
          pm.data.view_preroll_played = true;
          if (self._adRequests.length > 0) {
            const _Math = Math;
            pm.data.view_preroll_request_time = Math.max(0, viewer_time.viewer_time - self._adRequests[0].viewer_time);
          }
          if (pm.data.view_start) {
            const _Math2 = Math;
            pm.data.view_startup_preroll_request_time = Math.max(0, viewer_time.viewer_time - pm.data.view_start);
          }
          self._prerollPlayTime = viewer_time.viewer_time;
        }
      });
      pm.on("adplaying", (arg0, viewer_time) => {
        let inPrerollPositionResult = self.inPrerollPosition();
        if (inPrerollPositionResult) {
          inPrerollPositionResult = undefined === pm.data.view_preroll_load_time;
        }
        if (inPrerollPositionResult) {
          inPrerollPositionResult = undefined !== self._prerollPlayTime;
        }
        if (inPrerollPositionResult) {
          pm.data.view_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
          pm.data.view_startup_preroll_load_time = viewer_time.viewer_time - self._prerollPlayTime;
        }
      });
      pm.on("adclicked", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = pm.data;
          data.view_ad_clicked_count = data.view_ad_clicked_count || 0;
          data.view_ad_clicked_count = data.view_ad_clicked_count + 1;
        }
      });
      pm.on("adskipped", (arg0, arg1) => {
        if (!self._wouldBeNewAdPlay) {
          const data = pm.data;
          data.view_ad_skipped_count = data.view_ad_skipped_count || 0;
          data.view_ad_skipped_count = data.view_ad_skipped_count + 1;
        }
      });
      pm.on("adended", () => {
        self._wouldBeNewAdPlay = true;
      });
      pm.on("aderror", () => {
        self._wouldBeNewAdPlay = true;
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (tmp[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = tmp[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, tmp);
};
const items9 = [
  {
    key: "inPrerollPosition",
    value() {
      let tmp = undefined === this.pm.data.view_content_playback_time;
      if (!tmp) {
        tmp = this.pm.data.view_content_playback_time <= 1000;
      }
      return tmp;
    }
  },
  {
    key: "findAdRequest",
    value(arg0) {
      const self = this;
      let num = 0;
      if (0 < this._adRequests.length) {
        while (self._adRequests[num].ad_request_id !== arg0) {
          num = num + 1;
        }
        return self._adRequests[num];
      }
    }
  },
  {
    key: "_updateAdData",
    value(arg0, ad_tag_url) {
      const self = this;
      if (this.inPrerollPosition()) {
        if (!self.pm.data.view_preroll_ad_tag_hostname) {
          if (ad_tag_url.ad_tag_url) {
            if (typeof re !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof ad_tag_url.ad_tag_url === "string") {
              if ("" !== str) {
                const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                let first;
                if (str2) {
                  first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                  const tmp4 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                }
                items = [str2, first];
                const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
              }
              const _Array = Array;
              let tmp7;
              if (Array.isArray(items)) {
                tmp7 = items;
              }
              if (!tmp7) {
                tmp7 = (function vt(items, arg1) {
                  let tmp6 = null;
                  if (null != items) {
                    const _Symbol = Symbol;
                    let prop = typeof Symbol !== "undefined";
                    if (typeof Symbol !== "undefined") {
                      const _Symbol2 = Symbol;
                      prop = items[Symbol.iterator];
                    }
                    if (!prop) {
                      prop = items[Symbol.iterator];
                    }
                    tmp6 = prop;
                  }
                  if (null != tmp6) {
                    let flag2 = false;
                    try {
                      items = [];
                      try {
                        const call = tmp9.call;
                        if (typeof call === "unknown") {
                          let iter = tmp9();
                        } else {
                          iter = call(items);
                        }
                        const iter3 = iter.next();
                        const done = iter3.done;
                        let tmp11 = done;
                        if (!done) {
                          items.push(iter4.value);
                          if (!arg1) {
                            const iter5 = iter2.next();
                            const done2 = iter5.done;
                            tmp11 = done2;
                            while (!done2) {
                              let arr = items.push(iter6.value);
                              if (!arg1) {
                                continue;
                              } else if (items.length === arg1) {
                                break;
                              }
                              continue;
                            }
                          }
                        }
                        try {
                          let tmp19 = !tmp11;
                          if (!tmp11) {
                            tmp19 = null != iter2.return;
                          }
                          if (tmp19) {
                            iter2.return();
                          }
                          if (flag2) {
                            throw tmp5;
                          } else {
                            return items;
                          }
                        } catch (tmp25) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp25;
                          }
                        }
                      } catch (tmp5) {
                        flag2 = true;
                      }
                    } catch (tmp28) {
                      try {
                        let tmp30 = !tmp3;
                        if (!tmp3) {
                          tmp30 = tmp4 != obj.return;
                        }
                        if (tmp30) {
                          obj.return();
                        }
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp28;
                        }
                      } catch (tmp36) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp36;
                        }
                      }
                    }
                  }
                })(items, 2);
              }
              if (!tmp7) {
                tmp7 = Pe(items, 2);
              }
              if (tmp7) {
                [self.pm.data.view_preroll_ad_tag_hostname, self.pm.data.view_preroll_ad_tag_domain] = tmp7;
              } else {
                const _TypeError = TypeError;
                const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                throw typeError;
              }
            }
            items = ["localhost"];
          }
        }
        if (!self.pm.data.view_preroll_ad_asset_hostname) {
          if (ad_tag_url.ad_asset_url) {
            if (typeof re !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof ad_tag_url.ad_asset_url === "string") {
              if ("" !== str4) {
                const str5 = str4.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                let first1;
                if (str5) {
                  first1 = str5.match(/[^\.]+\.[^\.]+$/) || [][0];
                  const tmp16 = str5.match(/[^\.]+\.[^\.]+$/) || [];
                }
                let items1 = [str5, first1];
                const tmp14 = str4.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
              }
              const _Array2 = Array;
              let tmp19;
              if (Array.isArray(items1)) {
                tmp19 = items1;
              }
              if (!tmp19) {
                tmp19 = (function vt(items, arg1) {
                  let tmp6 = null;
                  if (null != items) {
                    const _Symbol = Symbol;
                    let prop = typeof Symbol !== "undefined";
                    if (typeof Symbol !== "undefined") {
                      const _Symbol2 = Symbol;
                      prop = items[Symbol.iterator];
                    }
                    if (!prop) {
                      prop = items[Symbol.iterator];
                    }
                    tmp6 = prop;
                  }
                  if (null != tmp6) {
                    let flag2 = false;
                    try {
                      items = [];
                      try {
                        const call = tmp9.call;
                        if (typeof call === "unknown") {
                          let iter = tmp9();
                        } else {
                          iter = call(items);
                        }
                        const iter3 = iter.next();
                        const done = iter3.done;
                        let tmp11 = done;
                        if (!done) {
                          items.push(iter4.value);
                          if (!arg1) {
                            const iter5 = iter2.next();
                            const done2 = iter5.done;
                            tmp11 = done2;
                            while (!done2) {
                              let arr = items.push(iter6.value);
                              if (!arg1) {
                                continue;
                              } else if (items.length === arg1) {
                                break;
                              }
                              continue;
                            }
                          }
                        }
                        try {
                          let tmp19 = !tmp11;
                          if (!tmp11) {
                            tmp19 = null != iter2.return;
                          }
                          if (tmp19) {
                            iter2.return();
                          }
                          if (flag2) {
                            throw tmp5;
                          } else {
                            return items;
                          }
                        } catch (tmp25) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp25;
                          }
                        }
                      } catch (tmp5) {
                        flag2 = true;
                      }
                    } catch (tmp28) {
                      try {
                        let tmp30 = !tmp3;
                        if (!tmp3) {
                          tmp30 = tmp4 != obj.return;
                        }
                        if (tmp30) {
                          obj.return();
                        }
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp28;
                        }
                      } catch (tmp36) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp36;
                        }
                      }
                    }
                  }
                })(items1, 2);
              }
              if (!tmp19) {
                tmp19 = Pe(items1, 2);
              }
              if (tmp19) {
                [self.pm.data.view_preroll_ad_asset_hostname, self.pm.data.view_preroll_ad_asset_domain] = tmp19;
              } else {
                const _TypeError2 = TypeError;
                const typeError1 = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                throw typeError1;
              }
            }
            items1 = ["localhost"];
          }
        }
        self.pm.data.ad_type = "preroll";
      }
      let ad_asset_url;
      if (null != ad_tag_url) {
        ad_asset_url = ad_tag_url.ad_asset_url;
      }
      self.pm.data.ad_asset_url = ad_asset_url;
      ad_tag_url = undefined;
      if (null != ad_tag_url) {
        ad_tag_url = ad_tag_url.ad_tag_url;
      }
      self.pm.data.ad_tag_url = ad_tag_url;
      let ad_creative_id;
      if (null != ad_tag_url) {
        ad_creative_id = ad_tag_url.ad_creative_id;
      }
      self.pm.data.ad_creative_id = ad_creative_id;
      let ad_id;
      if (null != ad_tag_url) {
        ad_id = ad_tag_url.ad_id;
      }
      self.pm.data.ad_id = ad_id;
      let ad_universal_id;
      if (null != ad_tag_url) {
        ad_universal_id = ad_tag_url.ad_universal_id;
      }
      self.pm.data.ad_universal_id = ad_universal_id;
      if (tmp30) {
        let ad_type;
        if (null != ad_tag_url) {
          ad_type = ad_tag_url.ad_type;
        }
        self.pm.data.ad_type = ad_type;
      }
      tmp30 = null != ad_tag_url && ad_tag_url.ad_type;
    }
  }
];
N(fn13, items9);
const fn14 = function r(one) {
  closure_0 = one;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn14[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn14[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("lastWallClockTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "lastWallClockTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self.lastWallClockTime = undefined;
      }
      const fn = function i() {
        self.lastWallClockTime = obj3.now();
        one.on("before*", a);
      };
      function a(arg0) {
        const nowResult = obj3.now();
        const lastWallClockTime = self.lastWallClockTime;
        self.lastWallClockTime = nowResult;
        if (nowResult - lastWallClockTime > 30000) {
          let obj = { viewer_time: null };
          obj[0] = lastWallClockTime;
          one.emit("devicesleep", obj);
          const _Object = Object;
          obj = { viewer_time: null };
          obj[0] = lastWallClockTime;
          const merged = Object.assign(one.data, obj);
          one.send("devicesleep");
          obj = { viewer_time: null };
          obj[0] = nowResult;
          one.emit("devicewake", obj);
          const _Object2 = Object;
          obj1 = { viewer_time: null };
          obj1[0] = nowResult;
          const merged1 = Object.assign(one.data, obj1);
          one.send("devicewake");
        }
      }
      one.one("playbackheartbeat", fn);
      one.on("playbackheartbeatend", () => {
        one.off("before*", a);
        one.one("playbackheartbeat", fn);
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn14[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn14[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn14);
};
let closure_74 = G(obj2.exports);
const fn15 = function e(arg0) {
  closure_0 = arg0;
  const fn = function i(arg0, arg1, arg2) {
    let tmp2 = arg1;
    if (typeof document !== "undefined") {
      if (arguments.length > 1) {
        const tmp26 = lib({ path: "/" }, fn.defaults, arg2);
        if (typeof tmp26.expires === "number") {
          const _Date = Date;
          const date = new Date();
          date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
          tmp26.expires = date;
        }
        try {
          const _JSON2 = JSON;
          const json = JSON.stringify(tmp2);
          if (obj4.test(json)) {
            tmp2 = json;
          }
          if (lib.write) {
            let writeResult = lib.write(tmp2, arg0);
          } else {
            const _encodeURIComponent = encodeURIComponent;
            const _String = String;
            const _decodeURIComponent3 = decodeURIComponent;
            writeResult = encodeURIComponent(String(tmp2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            const str8 = encodeURIComponent(String(tmp2));
          }
          const _encodeURIComponent2 = encodeURIComponent;
          const _String2 = String;
          const _decodeURIComponent4 = decodeURIComponent;
          obj4 = /^[\{\[]/;
          const str9 = encodeURIComponent(String(arg0));
          const _escape = escape;
          items = [encodeURIComponent(String(arg0)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape), "=", writeResult, , , , ];
          let str13 = "";
          if (tmp26.expires) {
            const expires = tmp26.expires;
            str13 = `; expires=${expires.toUTCString()}`;
          }
          items[3] = str13;
          let str15 = "";
          if (tmp26.path) {
            str15 = `; path=${tmp26.path}`;
          }
          items[4] = str15;
          let str17 = "";
          if (tmp26.domain) {
            str17 = `; domain=${tmp26.domain}`;
          }
          items[5] = str17;
          let str19 = "";
          if (tmp26.secure) {
            str19 = "; secure";
          }
          items[6] = str19;
          const joined = items.join("");
          document.cookie = joined;
          return joined;
        } catch (err) {
        }
      } else {
        if (!arg0) {
          let obj = {};
        }
        const _document = document;
        if (document.cookie) {
          const _document2 = document;
          let parts = document.cookie.split("; ");
        } else {
          parts = [];
        }
        const tmp4 = /(%[0-9A-Z]{2})+/g;
        let num4 = 0;
        if (0 < parts.length) {
          const parts1 = parts[num4].split("=");
          const substr = parts1.slice(1);
          const str6 = substr.join("=");
          let substr1 = str6;
          if ("\"" === str6.charAt(0)) {
            substr1 = substr1.slice(1, -1);
          }
          try {
            const _decodeURIComponent = decodeURIComponent;
            const replaced = parts1[0].replace(tmp4, decodeURIComponent);
            if (lib.read) {
              let readResult = lib.read(substr1, replaced);
            } else {
              readResult = lib(substr1, replaced);
              if (!readResult) {
                const _decodeURIComponent2 = decodeURIComponent;
                readResult = substr1.replace(tmp4, decodeURIComponent);
              }
            }
            let parsed = readResult;
            if (tmp.json) {
              try {
                const _JSON = JSON;
                parsed = JSON.parse(parsed);
              } catch (err) {
              }
            }
            if (arg0 === replaced) {
              obj = parsed;
            } else {
              if (!arg0) {
                obj[replaced] = parsed;
              }
              num4 = num4 + 1;
            }
          } catch (err) {
          }
        }
        return obj;
      }
    }
  };
  fn.set = fn;
  fn.get = (closure_1_1) => {
    const call = fn.call;
    return typeof call === "unknown" ? fn(closure_1_1) : call(fn, closure_1_1);
  };
  fn.getJSON = () => {
    const slice = [].slice;
    const call = slice.call;
    if (typeof call === "unknown") {
      let substr = slice();
    } else {
      substr = call(arguments);
    }
    return fn.apply({ json: true }, substr);
  };
  fn.defaults = {};
  fn.remove = (D) => {
    fn(D, "", lib(arg1, { expires: -1 }));
  };
  fn.withConverter = fn;
  return fn;
};
f94619 = () => {

};
const fn16 = function i(arg0, arg1, arg2) {
  let tmp2 = arg1;
  if (typeof document !== "undefined") {
    if (arguments.length > 1) {
      const tmp26 = lib({ path: "/" }, fn.defaults, arg2);
      if (typeof tmp26.expires === "number") {
        const _Date = Date;
        const date = new Date();
        date.setMilliseconds(date.getMilliseconds() + 86400000 * tmp26.expires);
        tmp26.expires = date;
      }
      try {
        const _JSON2 = JSON;
        const json = JSON.stringify(tmp2);
        if (obj4.test(json)) {
          tmp2 = json;
        }
        if (lib.write) {
          let writeResult = lib.write(tmp2, arg0);
        } else {
          const _encodeURIComponent = encodeURIComponent;
          const _String = String;
          const _decodeURIComponent3 = decodeURIComponent;
          writeResult = encodeURIComponent(String(tmp2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
          const str8 = encodeURIComponent(String(tmp2));
        }
        const _encodeURIComponent2 = encodeURIComponent;
        const _String2 = String;
        const _decodeURIComponent4 = decodeURIComponent;
        obj4 = /^[\{\[]/;
        const str9 = encodeURIComponent(String(arg0));
        const _escape = escape;
        items = [encodeURIComponent(String(arg0)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape), "=", writeResult, , , , ];
        let str13 = "";
        if (tmp26.expires) {
          const expires = tmp26.expires;
          str13 = `; expires=${expires.toUTCString()}`;
        }
        items[3] = str13;
        let str15 = "";
        if (tmp26.path) {
          str15 = `; path=${tmp26.path}`;
        }
        items[4] = str15;
        let str17 = "";
        if (tmp26.domain) {
          str17 = `; domain=${tmp26.domain}`;
        }
        items[5] = str17;
        let str19 = "";
        if (tmp26.secure) {
          str19 = "; secure";
        }
        items[6] = str19;
        const joined = items.join("");
        document.cookie = joined;
        return joined;
      } catch (err) {
      }
    } else {
      if (!arg0) {
        let obj = {};
      }
      const _document = document;
      if (document.cookie) {
        const _document2 = document;
        let parts = document.cookie.split("; ");
      } else {
        parts = [];
      }
      const tmp4 = /(%[0-9A-Z]{2})+/g;
      let num4 = 0;
      if (0 < parts.length) {
        const parts1 = parts[num4].split("=");
        const substr = parts1.slice(1);
        const str6 = substr.join("=");
        let substr1 = str6;
        if ("\"" === str6.charAt(0)) {
          substr1 = substr1.slice(1, -1);
        }
        try {
          const _decodeURIComponent = decodeURIComponent;
          const replaced = parts1[0].replace(tmp4, decodeURIComponent);
          if (lib.read) {
            let readResult = lib.read(substr1, replaced);
          } else {
            readResult = lib(substr1, replaced);
            if (!readResult) {
              const _decodeURIComponent2 = decodeURIComponent;
              readResult = substr1.replace(tmp4, decodeURIComponent);
            }
          }
          let parsed = readResult;
          if (tmp.json) {
            try {
              const _JSON = JSON;
              parsed = JSON.parse(parsed);
            } catch (err) {
            }
          }
          if (arg0 === replaced) {
            obj = parsed;
          } else {
            if (!arg0) {
              obj[replaced] = parsed;
            }
            num4 = num4 + 1;
          }
        } catch (err) {
        }
      }
      return obj;
    }
  }
};
create = fn16;
fn16.set = fn16;
fn16.get = (closure_1_1) => {
  const call = fn.call;
  return typeof call === "unknown" ? fn(closure_1_1) : call(fn, closure_1_1);
};
fn16.getJSON = () => {
  const slice = [].slice;
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice();
  } else {
    substr = call(arguments);
  }
  return fn.apply({ json: true }, substr);
};
fn16.defaults = {};
fn16.remove = (D) => {
  fn(D, "", lib(arg1, { expires: -1 }));
};
fn16.withConverter = fn15;
const muxData = "muxData";
function tr() {
  try {
    let str = fn16.get(muxData);
    if (!str) {
      str = "";
    }
    let obj = ((str) => {
      let parts = str.split("&");
      return parts.reduce((acc, item, index) => {
        const parts = item.split("=");
        let tmp2;
        if (Array.isArray(parts)) {
          tmp2 = parts;
        }
        if (!tmp2) {
          tmp2 = (function vt(items, arg1) {
            let tmp6 = null;
            if (null != items) {
              const _Symbol = Symbol;
              let prop = typeof Symbol !== "undefined";
              if (typeof Symbol !== "undefined") {
                const _Symbol2 = Symbol;
                prop = items[Symbol.iterator];
              }
              if (!prop) {
                prop = items[Symbol.iterator];
              }
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
                        if (!arg1) {
                          continue;
                        } else if (items.length === arg1) {
                          break;
                        }
                        continue;
                      }
                    }
                  }
                  try {
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(parts, 2);
        }
        if (!tmp2) {
          tmp2 = callback(parts, 2);
        }
        if (tmp2) {
          let tmp10 = tmp8;
          if (tmp2[1]) {
            tmp10 = tmp8;
            if (tmp9 == tmp8) {
              tmp10 = tmp9;
            }
          }
          acc[tmp2[0]] = tmp10;
          return acc;
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          throw typeError;
        }
      }, {});
    })(str);
    return obj;
  } catch (err) {
    obj = {};
  }
}
function rr(arg0) {
  try {
    const result = fn16.set(muxData, ((arg0) => {
      const entries = Object.entries(arg0);
      const mapped = entries.map((item, index) => {
        let tmp;
        if (Array.isArray(item)) {
          tmp = item;
        }
        if (!tmp) {
          tmp = (function vt(items, arg1) {
            let tmp6 = null;
            if (null != items) {
              const _Symbol = Symbol;
              let prop = typeof Symbol !== "undefined";
              if (typeof Symbol !== "undefined") {
                const _Symbol2 = Symbol;
                prop = items[Symbol.iterator];
              }
              if (!prop) {
                prop = items[Symbol.iterator];
              }
              tmp6 = prop;
            }
            if (null != tmp6) {
              let flag2 = false;
              try {
                items = [];
                try {
                  const call = tmp9.call;
                  if (typeof call === "unknown") {
                    let iter = tmp9();
                  } else {
                    iter = call(items);
                  }
                  const iter3 = iter.next();
                  const done = iter3.done;
                  let tmp11 = done;
                  if (!done) {
                    items.push(iter4.value);
                    if (!arg1) {
                      const iter5 = iter2.next();
                      const done2 = iter5.done;
                      tmp11 = done2;
                      while (!done2) {
                        let arr = items.push(iter6.value);
                        if (!arg1) {
                          continue;
                        } else if (items.length === arg1) {
                          break;
                        }
                        continue;
                      }
                    }
                  }
                  try {
                    let tmp19 = !tmp11;
                    if (!tmp11) {
                      tmp19 = null != iter2.return;
                    }
                    if (tmp19) {
                      iter2.return();
                    }
                    if (flag2) {
                      throw tmp5;
                    } else {
                      return items;
                    }
                  } catch (tmp25) {
                    if (tmp2) {
                      throw tmp;
                    } else {
                      throw tmp25;
                    }
                  }
                } catch (tmp5) {
                  flag2 = true;
                }
              } catch (tmp28) {
                try {
                  let tmp30 = !tmp3;
                  if (!tmp3) {
                    tmp30 = tmp4 != obj.return;
                  }
                  if (tmp30) {
                    obj.return();
                  }
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp28;
                  }
                } catch (tmp36) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp36;
                  }
                }
              }
            }
          })(item, 2);
        }
        if (!tmp) {
          tmp = callback(item, 2);
        }
        if (tmp) {
          const concat = "".concat;
          const combined = "".concat(tmp[0], "=");
          return combined.concat(tmp[1]);
        } else {
          const _TypeError = TypeError;
          const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          throw typeError;
        }
      });
      return mapped.join("&");
    })(arg0), { expires: 365 });
  } catch (err) {
  }
}
let closure_79 = G(obj2.exports);
function or() {
  if (typeof sr !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const _navigator = mod7.default.navigator;
  let tmp = _navigator;
  if (_navigator) {
    tmp = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  }
  let type = tmp;
  if (tmp) {
    type = tmp.type;
  }
  let str = "cellular";
  if ("cellular" !== type) {
    str = "wired";
    if ("ethernet" !== type) {
      str = "wifi";
      if ("wifi" !== type) {
        if (undefined !== type) {
          str = "other";
        }
      }
    }
  }
  return str;
}
function sr() {
  const _navigator = mod7.default.navigator;
  let tmp = _navigator;
  if (_navigator) {
    tmp = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
  }
  let type = tmp;
  if (tmp) {
    type = tmp.type;
  }
  return type;
}
or.getConnectionFromAPI = sr;
const obj12 = { a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" };
for (const key10232 in obj12) {
  if (!obj12.hasOwnProperty(key10232)) {
    continue;
  } else {
    obj13[obj12[key10232]] = key10232;
    continue;
  }
  continue;
}
const obj14 = { ad: "ad", af: "affiliate", ag: "aggregate", ap: "api", al: "application", ao: "audio", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", bn: "brand", br: "break", bw: "browser", by: "bytes", bz: "business", ca: "cached", cb: "cancel", cc: "codec", cd: "code", cg: "category", ch: "changed", ci: "client", ck: "clicked", cl: "canceled", cm: "cmcd", cn: "config", co: "count", ce: "counter", cp: "complete", cq: "creator", cr: "creative", cs: "captions", ct: "content", cu: "current", cv: "cumulative", cx: "connection", cz: "context", da: "data", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", dr: "drm", dp: "dropped", du: "duration", dv: "device", dy: "dynamic", eb: "enabled", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", ep: "experiments", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ez: "exception", fa: "failed", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", ha: "has", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mp: "mode", ms: "ms", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", or: "origin", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pp: "pip", pr: "preload", ps: "position", pt: "part", pv: "previous", py: "property", px: "pop", pz: "plan", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rg: "range", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", sd: "skipped", se: "session", sh: "shift", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", ss: "status", st: "start", su: "startup", sv: "server", sw: "software", sy: "severity", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", un: "universal", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" };
for (const key10238 in obj14) {
  if (!obj14.hasOwnProperty(key10238)) {
    continue;
  } else {
    obj15[obj14[key10238]] = key10238;
    continue;
  }
  continue;
}
const fn17 = (arg0, arg1) => {
  if (undefined !== f94619) {
    if (typeof f94627 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!obj) {
      obj = { exports: null };
      obj[0] = {};
      f94619(obj.exports, obj);
    }
    const _exports = obj.exports;
    let _document = document;
    if (typeof document !== "undefined") {
      _document = document;
    } else {
      _document = f94619["__GLOBAL_DOCUMENT_CACHE@4"];
      if (!_document) {
        f94619["__GLOBAL_DOCUMENT_CACHE@4"] = _exports;
        _document = _exports;
      }
    }
    arg1.exports = _document;
  } else {
    const _window = window;
  }
};
let closure_84 = G(obj2.exports);
const obj16 = { exports: {} };
let closure_85 = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 10000, maxPayloadKBSize: 500 };
let closure_86 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"];
class $ {
  constructor(arg0) {
    obj = {};
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
      str = global;
      if (!global) {
        str = "https://img.litix.io";
      }
      obj._beaconUrl = str;
      obj._eventQueue = [];
      flag = false;
      obj._postInFlight = false;
      obj._resendAfterPost = false;
      num = 0;
      obj._failureCount = 0;
      obj._sendTimeout = false;
      tmp2 = globalThis;
      _Object = Object;
      tmp3 = closure_85;
      obj._options = Object.assign({}, closure_85, {});
      return;
    }
    return;
  }
  queueEvent(arg0, arg1) {
    self = this;
    tmp2 = this._eventQueue.length <= this._options.maxQueueLength;
    merged = Object.assign({}, require);
    if (!tmp2) {
      tmp3 = global;
      str = "eventrateexceeded";
      tmp2 = "eventrateexceeded" === global;
    }
    if (tmp2) {
      _eventQueue = self._eventQueue;
      arr = _eventQueue.push(merged);
      if (!self._sendTimeout) {
        _startBeaconSendingResult = self._startBeaconSending();
      }
      tmp2 = self._eventQueue.length <= self._options.maxQueueLength;
    }
    return tmp2;
  }
  flushEvents() {
    self = this;
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        if (arguments[0]) {
          num = 1;
          if (1 === self._eventQueue.length) {
            _eventQueue = self._eventQueue;
            arr = _eventQueue.pop();
          }
          return;
        }
      }
    }
    if (self._eventQueue.length) {
      _sendBeaconQueueResult = self._sendBeaconQueue();
    }
    _startBeaconSendingResult = self._startBeaconSending();
    return;
  }
  destroy() {
    tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    self = this;
    this.destroyed = true;
    if (tmp) {
      _clearBeaconQueueResult = self._clearBeaconQueue();
    } else {
      flushEventsResult = self.flushEvents();
    }
    _default = closure_84.default;
    clearTimeoutResult = _default.clearTimeout(self._sendTimeout);
    return;
  }
  _clearBeaconQueue() {
    self = this;
    num = 0;
    if (this._eventQueue.length > this._options.maxBeaconSize) {
      num = self._eventQueue.length - self._options.maxBeaconSize;
    }
    _eventQueue = self._eventQueue;
    substr = _eventQueue.slice(num);
    if (num > 0) {
      tmp = globalThis;
      _Object = Object;
      num2 = 1;
      obj = { mux_view_message: "event queue truncated" };
      closure_0 = obj;
      obj = {};
      closure_1 = obj;
      obj1 = {};
      closure_2 = obj1;
      _Object2 = Object;
      keys = Object.keys(obj);
      item = keys.forEach((item, index) => {
        c1 = false;
        if (item.hasOwnProperty(item)) {
          if (undefined !== tmp[item]) {
            const parts = item.split("_");
            const first = parts[0];
            closure_2 = tmp12;
            if (!obj13[first]) {
              closure_1_38.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
              closure_2 = `${tmp10}_`;
            }
            item = parts.splice(1).forEach((item, index) => {
              if ("url" === item) {
                c1 = true;
              }
              if (closure_1_83[item]) {
                closure_2 = closure_2 + tmp[item];
              } else {
                const _Number = Number;
                const _Number2 = Number;
                if (Number.isInteger(Number(item))) {
                  closure_2 = closure_2 + item;
                } else {
                  closure_1_38.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                  closure_2 = `${closure_2}_${item}_`;
                }
              }
            });
            if (c1) {
              closure_2[closure_2] = tmp[item];
            } else {
              c1[closure_2] = tmp[item];
            }
            const spliceResult = parts.splice(1);
          }
        }
      });
      _Object3 = Object;
      merged = Object.assign(substr[substr.length - 1], Object.assign(obj, obj1));
    }
    tmp4 = Mr(self._beaconUrl, self._createPayload(substr), true, () => {

    });
    return;
  }
  _sendBeaconQueue() {
    self = this;
    self = this;
    if (this._postInFlight) {
      flag3 = true;
      self._resendAfterPost = true;
    } else {
      _eventQueue = self._eventQueue;
      num = 0;
      substr = require("../discord_app/index.native.tsx");
      closure_1 = substr;
      _eventQueue1 = self._eventQueue;
      self._eventQueue = _eventQueue1.slice(self._options.maxBeaconSize);
      flag = true;
      self._postInFlight = true;
      tmp3 = closure_27;
      _createPayloadResult = self._createPayload(substr);
      closure_2 = closure_27.now();
      tmp4 = Mr;
      flag2 = false;
      num2 = 0;
      tmp5 = Mr(self._beaconUrl, _createPayloadResult, false, (arg0, arg1) => {
        if (arg1) {
          self._eventQueue = substr.concat(self._eventQueue);
          self._failureCount = self._failureCount + 1;
          closure_1_38.info(`Error sending beacon: ${arg1}`);
          let obj = self;
        } else {
          self._failureCount = 0;
          obj = self;
        }
        obj._roundTripTime = obj3.now() - closure_2;
        obj._postInFlight = false;
        if (obj._resendAfterPost) {
          obj._resendAfterPost = false;
          if (obj._eventQueue.length > 0) {
            obj._sendBeaconQueue();
          }
        }
      });
    }
    return;
  }
  _getNextBeaconTime() {
    self = this;
    if (this._failureCount) {
      tmp = globalThis;
      _Math = Math;
      num = 1;
      num2 = 2;
      _Math2 = Math;
      powResult = require("00002_obj132.js");
      return (1 + powResult * Math.random()) * self._options.baseTimeBetweenBeacons;
    } else {
      return self._options.baseTimeBetweenBeacons;
    }
  }
  _startBeaconSending() {
    self = this;
    self = this;
    _default = closure_84.default;
    tmp = closure_84;
    clearTimeoutResult = _default.clearTimeout(this._sendTimeout);
    if (!this.destroyed) {
      _default2 = tmp.default;
      self._sendTimeout = _default2.setTimeout(() => {
        if (self._eventQueue.length) {
          self._sendBeaconQueue();
        }
        self._startBeaconSending();
      }, self._getNextBeaconTime());
    }
    return;
  }
  _createPayload(arg0) {
    self = this;
    obj = { transmission_timestamp: Math.round(closure_27.now()) };
    if (this._roundTripTime) {
      _Math = Math;
      obj.rtt_ms = Math.round(self._roundTripTime);
    }
    obj = { metadata: obj, events: global };
    json = JSON.stringify(obj);
    result = json.length / 1024;
    result1 = result;
    if (result > self._options.maxPayloadKBSize) {
      tmp4 = closure_38;
      str = " kb). Removing unnecessary events.";
      str2 = "Payload size is too big (";
      infoResult = closure_38.info(`Payload size is too big (${tmp} kb). Removing unnecessary events.`);
      found = global.filter((item, index) => -1 === closure_86.indexOf(item.e));
      obj1 = { metadata: null, events: null };
      obj1[0] = obj;
      tmp7 = found;
      if (!found) {
        tmp7 = global;
      }
      obj1[1] = tmp7;
      json1 = JSON.stringify(obj1);
      result1 = json1.length / 1024;
      tmp3 = found;
      json = json1;
      arr2 = found;
    }
    if (result1 > self._options.maxPayloadKBSize) {
      tmp8 = closure_38;
      str3 = " kb). Cropping fields..";
      str4 = "Payload size still too big (";
      infoResult1 = closure_38.info(`Payload size still too big (${tmp2} kb). Cropping fields..`);
      item = arr2.forEach((item, index) => {
        for (const key10005 in arg0) {
          let arr = arg0[key10005];
          let tmp2 = typeof arr === "string";
          if (typeof arr === "string") {
            tmp2 = arr.length > 51200;
          }
          if (!tmp2) {
            continue;
          } else {
            arg0[key10005] = arr.substring(0, 51200);
            continue;
          }
          continue;
        }
      });
      obj2 = { metadata: null, events: null };
      obj2[0] = obj;
      if (!tmp3) {
        tmp3 = global;
      }
      obj2[1] = tmp3;
      json2 = JSON.stringify(obj2);
      result2 = json2.length / 1024;
      json = json2;
    }
    return json;
  }
}
let closure_87 = typeof G(obj16.exports).default.exitPictureInPicture === "function" ? ((arg0) => arg0.length <= 57344) : ((arg0) => false);
function Mr(_beaconUrl, _createPayloadResult, arg2, fn) {
  closure_0 = fn;
  if (arg2) {
    const _navigator = navigator;
    if (navigator) {
      const _navigator2 = navigator;
      if (navigator.sendBeacon) {
        const _navigator3 = navigator;
        if (navigator.sendBeacon(_beaconUrl, _createPayloadResult)) {
          fn();
        }
      }
    }
  }
  if (mod8.default.fetch) {
    const obj = { method: "POST", body: null, headers: null, keepalive: null };
    obj[1] = _createPayloadResult;
    obj[2] = { "Content-Type": "text/plain" };
    obj[3] = callback2(_createPayloadResult);
    const response = _default.fetch(_beaconUrl, obj);
    response.then((result) => {
      let tmp2 = "Error";
      if (result.ok) {
        tmp2 = null;
      }
      return callback(null, tmp2);
    }).catch((error) => callback(null, error));
    const nextPromise = response.then((result) => {
      let tmp2 = "Error";
      if (result.ok) {
        tmp2 = null;
      }
      return callback(null, tmp2);
    });
  } else if (_default.XMLHttpRequest) {
    const xMLHttpRequest = new tmp2.default.XMLHttpRequest();
    xMLHttpRequest.onreadystatechange = () => {
      if (4 === xMLHttpRequest.readyState) {
        let str;
        if (200 !== tmp.status) {
          str = "error";
        }
        return callback(null, str);
      }
    };
    xMLHttpRequest.open("POST", _beaconUrl);
    xMLHttpRequest.setRequestHeader("Content-Type", "text/plain");
    xMLHttpRequest.send(_createPayloadResult);
  } else {
    fn();
  }
}
let closure_89 = $;
let closure_90 = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id", "player_error_code", "player_error_message", "player_error_context", "player_error_severity", "player_error_business_exception", "view_playing_time_ms_cumulative", "ad_playing_time_ms_cumulative"];
let closure_91 = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"];
let closure_92 = ["ad_id", "ad_creative_id", "ad_universal_id"];
let closure_93 = ["viewstart", "error", "ended", "viewend"];
const fn18 = function r(mux, envKey) {
  if (arguments.length > 2) {
    const self = this;
    const _Symbol = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol5 = Symbol;
      if (f94619[Symbol.hasInstance]) {
        const _Symbol4 = Symbol;
        let tmp5 = f94619[Symbol.hasInstance](self);
      }
      if (tmp5) {
        if ("mux" in self) {
          const _Object = Object;
          Object.defineProperty(self, "mux", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.mux = undefined;
        }
        if ("envKey" in self) {
          const _Object2 = Object;
          Object.defineProperty(self, "envKey", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.envKey = undefined;
        }
        if ("options" in self) {
          const _Object3 = Object;
          Object.defineProperty(self, "options", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.options = undefined;
        }
        if ("eventQueue" in self) {
          const _Object4 = Object;
          Object.defineProperty(self, "eventQueue", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.eventQueue = undefined;
        }
        if ("sampleRate" in self) {
          const _Object5 = Object;
          Object.defineProperty(self, "sampleRate", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.sampleRate = undefined;
        }
        if ("disableCookies" in self) {
          const _Object6 = Object;
          Object.defineProperty(self, "disableCookies", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.disableCookies = undefined;
        }
        if ("respectDoNotTrack" in self) {
          const _Object7 = Object;
          Object.defineProperty(self, "respectDoNotTrack", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.respectDoNotTrack = undefined;
        }
        if ("previousBeaconData" in self) {
          const _Object8 = Object;
          Object.defineProperty(self, "previousBeaconData", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.previousBeaconData = undefined;
        }
        if ("lastEventTime" in self) {
          const _Object9 = Object;
          Object.defineProperty(self, "lastEventTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.lastEventTime = undefined;
        }
        if ("rateLimited" in self) {
          const _Object10 = Object;
          Object.defineProperty(self, "rateLimited", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.rateLimited = undefined;
        }
        if ("pageLevelData" in self) {
          const _Object11 = Object;
          Object.defineProperty(self, "pageLevelData", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.pageLevelData = undefined;
        }
        if ("viewerData" in self) {
          const _Object12 = Object;
          Object.defineProperty(self, "viewerData", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
        } else {
          self.viewerData = undefined;
        }
        self.mux = mux;
        self.envKey = envKey;
        self.options = {};
        self.previousBeaconData = null;
        self.lastEventTime = 0;
        self.rateLimited = false;
        ({ envKey, options } = self);
        ({ beaconCollectionDomain, beaconDomain } = options);
        let tmp25 = closure_89;
        if (beaconCollectionDomain) {
          let str14 = `https://${beaconCollectionDomain}`;
        } else {
          if (!beaconDomain) {
            beaconDomain = "litix.io";
          }
          if (!envKey) {
            envKey = "inferred";
          }
          str14 = "https://img.litix.io/a.gif";
          if (envKey.match(/^[a-z0-9]+$/)) {
            str14 = `https://${envKey}.${beaconDomain}`;
          }
        }
        tmp25 = new tmp25(str14);
        self.eventQueue = new.target;
        const sampleRate = self.options.sampleRate;
        let num4 = 1;
        if (null !== sampleRate) {
          num4 = 1;
          if (undefined !== sampleRate) {
            num4 = sampleRate;
          }
        }
        self.sampleRate = num4;
        const disableCookies = self.options.disableCookies;
        self.disableCookies = null !== disableCookies && undefined !== disableCookies && disableCookies;
        const respectDoNotTrack = self.options.respectDoNotTrack;
        self.respectDoNotTrack = null !== respectDoNotTrack && undefined !== respectDoNotTrack && respectDoNotTrack;
        self.previousBeaconData = null;
        self.lastEventTime = 0;
        self.rateLimited = false;
        let obj = { mux_api_version: null, mux_embed: null, mux_embed_version: null, viewer_application_name: null, viewer_application_version: null, viewer_application_engine: null, viewer_device_name: null, viewer_device_category: "", viewer_device_manufacturer: null, viewer_os_family: null, viewer_os_architecture: null, viewer_os_version: null, viewer_connection_type: null, page_url: null };
        obj[0] = self.mux.API_VERSION;
        obj[1] = self.mux.NAME;
        obj[2] = self.mux.VERSION;
        const platform = self.options.platform;
        let name;
        if (null !== platform) {
          if (undefined !== platform) {
            name = platform.name;
          }
        }
        obj[3] = name;
        const platform2 = self.options.platform;
        let version;
        if (null !== platform2) {
          if (undefined !== platform2) {
            version = platform2.version;
          }
        }
        obj[4] = version;
        const platform3 = self.options.platform;
        let layout;
        if (null !== platform3) {
          if (undefined !== platform3) {
            layout = platform3.layout;
          }
        }
        obj[5] = layout;
        const platform4 = self.options.platform;
        let product;
        if (null !== platform4) {
          if (undefined !== platform4) {
            product = platform4.product;
          }
        }
        obj[6] = product;
        const platform5 = self.options.platform;
        let manufacturer;
        if (null !== platform5) {
          if (undefined !== platform5) {
            manufacturer = platform5.manufacturer;
          }
        }
        obj[8] = manufacturer;
        const platform6 = self.options.platform;
        let family;
        if (null !== platform6) {
          if (undefined !== platform6) {
            const os = platform6.os;
            if (null !== os) {
              if (undefined !== os) {
                family = os.family;
              }
            }
          }
        }
        obj[9] = family;
        const platform7 = self.options.platform;
        let architecture;
        if (null !== platform7) {
          if (undefined !== platform7) {
            const os2 = platform7.os;
            if (null !== os2) {
              if (undefined !== os2) {
                architecture = os2.architecture;
              }
            }
          }
        }
        obj[10] = architecture;
        const platform8 = self.options.platform;
        let version1;
        if (null !== platform8) {
          if (undefined !== platform8) {
            const os3 = platform8.os;
            if (null !== os3) {
              if (undefined !== os3) {
                version1 = os3.version;
              }
            }
          }
        }
        obj[11] = version1;
        if (typeof or !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (typeof sr !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _navigator = mod7.default.navigator;
        let tmp41 = _navigator;
        if (_navigator) {
          tmp41 = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;
        }
        let type = tmp41;
        if (tmp41) {
          type = tmp41.type;
        }
        let str18 = "cellular";
        if ("cellular" !== type) {
          str18 = "wired";
          if ("ethernet" !== type) {
            str18 = "wifi";
            if ("wifi" !== type) {
              if (undefined !== type) {
                str18 = "other";
              }
            }
          }
        }
        obj[12] = str18;
        let href;
        if (null !== mod6.default) {
          if (undefined !== mod6.default) {
            const _location = mod6.default.location;
            if (null !== _location) {
              if (undefined !== _location) {
                href = _location.href;
              }
            }
          }
        }
        obj[13] = href;
        self.pageLevelData = obj;
        if (self.disableCookies) {
          obj = {};
        } else {
          const tmp46 = tr();
          let mux_viewer_id = tmp46.mux_viewer_id;
          if (!mux_viewer_id) {
            mux_viewer_id = ee();
          }
          tmp46.mux_viewer_id = mux_viewer_id;
          let msn = tmp46.msn;
          if (!msn) {
            const _Math = Math;
            msn = Math.random();
          }
          tmp46.msn = msn;
          rr(tmp46);
          obj = { mux_viewer_id: null, mux_sample_number: null };
          ({ mux_viewer_id: obj2[0], msn: obj2[1] } = tmp46);
        }
        self.viewerData = obj;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Cannot call a class as a function");
        throw typeError;
      }
    }
    const _Symbol2 = Symbol;
    if (typeof Symbol !== "undefined") {
      const _Symbol6 = Symbol;
      if (f94619[Symbol.hasInstance]) {
        const _Symbol3 = Symbol;
        tmp5 = f94619[Symbol.hasInstance](self);
      }
    }
    tmp5 = U(self, f94619);
  }
};
const items10 = [
  {
    key: "send",
    value(arg0, view_id) {
      if (arg0) {
        if (null != view_id) {
          if (view_id.view_id) {
            const self = this;
            if (this.respectDoNotTrack) {
              let doNotTrack = mod3.default.doNotTrack;
              if (!doNotTrack) {
                doNotTrack = mod3.default.navigator && mod3.default.navigator.doNotTrack;
              }
              if ("1" === doNotTrack) {
                return logger.info("Not sending `" + arg0 + "` because Do Not Track is enabled");
              }
            }
            if (view_id) {
              if (typeof view_id === "object") {
                if (self.disableCookies) {
                  let obj = {};
                } else {
                  const tmp9 = tr();
                  const nowResult = obj3.now();
                  if (tmp9.session_start) {
                    tmp9.sst = tmp9.session_start;
                    delete tmp[tmp3];
                  }
                  if (tmp9.session_id) {
                    tmp9.sid = tmp9.session_id;
                    delete tmp[tmp3];
                  }
                  if (tmp9.session_expires) {
                    tmp9.sex = tmp9.session_expires;
                    delete tmp[tmp3];
                  }
                  const sex = tmp9.sex;
                  let tmp12 = !sex;
                  if (sex) {
                    tmp12 = tmp9.sex < nowResult;
                  }
                  if (tmp12) {
                    tmp9.sid = ee();
                    tmp9.sst = nowResult;
                  }
                  tmp9.sex = nowResult + 1500000;
                  rr(tmp9);
                  obj = { session_id: null, session_start: null, session_expires: null };
                  ({ sid: obj[0], sst: obj[1], sex: obj[2] } = tmp9);
                }
                obj = {};
                ue(obj, self.pageLevelData, view_id, obj, self.viewerData);
                obj = { event: null, env_key: null };
                obj[0] = arg0;
                obj[1] = self.envKey;
                obj3 = obj;
                const _Object = Object;
                const _Object2 = Object;
                if (Object.getOwnPropertyDescriptors) {
                  const _Object6 = Object;
                  _Object2.defineProperties(obj, Object.getOwnPropertyDescriptors(obj));
                } else {
                  const _Object2Result = _Object2(obj);
                  obj = _Object2Result;
                  const _Object3 = Object;
                  const keys = Object.keys(_Object2Result);
                  const _Object4 = Object;
                  if (Object.getOwnPropertySymbols) {
                    const _Object5 = Object;
                    const push = keys.push;
                    push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                  }
                  let item = keys.forEach((item, index) => {
                    Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                  });
                }
                if (obj.user_id) {
                  obj.viewer_user_id = obj.user_id;
                  delete tmp3[tmp2];
                }
                const mux_sample_number = obj.mux_sample_number;
                let num4 = 0;
                if (null !== mux_sample_number) {
                  num4 = 0;
                  if (undefined !== mux_sample_number) {
                    num4 = mux_sample_number;
                  }
                }
                const result = self._deduplicateBeaconData(arg0, obj);
                obj = result;
                obj1 = {};
                obj3 = obj1;
                const obj2 = {};
                let obj4 = obj2;
                const _Object7 = Object;
                const keys1 = Object.keys(result);
                const item1 = keys1.forEach((item, index) => {
                  c1 = false;
                  if (item.hasOwnProperty(item)) {
                    if (undefined !== tmp[item]) {
                      const parts = item.split("_");
                      const first = parts[0];
                      closure_2 = tmp12;
                      if (!obj13[first]) {
                        closure_1_38.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                        closure_2 = `${tmp10}_`;
                      }
                      item = parts.splice(1).forEach((item, index) => {
                        if ("url" === item) {
                          c1 = true;
                        }
                        if (closure_1_83[item]) {
                          closure_2 = closure_2 + tmp[item];
                        } else {
                          const _Number = Number;
                          const _Number2 = Number;
                          if (Number.isInteger(Number(item))) {
                            closure_2 = closure_2 + item;
                          } else {
                            closure_1_38.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                            closure_2 = `${closure_2}_${item}_`;
                          }
                        }
                      });
                      if (c1) {
                        closure_2[closure_2] = tmp[item];
                      } else {
                        c1[closure_2] = tmp[item];
                      }
                      const spliceResult = parts.splice(1);
                    }
                  }
                });
                const _Object8 = Object;
                const merged = Object.assign(obj1, obj2);
                const utils = self.mux.utils;
                self.lastEventTime = utils.now();
                if (tmp26) {
                  return logger.info("Not sending event due to sample rate restriction", arg0, obj, merged);
                } else {
                  if (!self.envKey) {
                    logger.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", arg0, obj, merged);
                  }
                  if (!self.rateLimited) {
                    logger.info("Sending event", arg0, obj, merged);
                    const eventQueue = self.eventQueue;
                    self.rateLimited = !eventQueue.queueEvent(arg0, merged);
                    if (self.mux.WINDOW_UNLOADING) {
                      if ("viewend" === arg0) {
                        const eventQueue5 = self.eventQueue;
                        eventQueue5.destroy(true);
                      }
                    }
                    if (self.mux.WINDOW_HIDDEN) {
                      if ("hb" === arg0) {
                        const eventQueue3 = self.eventQueue;
                        eventQueue3.flushEvents(true);
                      }
                      if (self.rateLimited) {
                        obj.event = "eventrateexceeded";
                        obj3 = {};
                        obj4 = {};
                        const _Object9 = Object;
                        const keys2 = Object.keys(obj);
                        const item2 = keys2.forEach((item, index) => {
                          c1 = false;
                          if (item.hasOwnProperty(item)) {
                            if (undefined !== tmp[item]) {
                              const parts = item.split("_");
                              const first = parts[0];
                              closure_2 = tmp12;
                              if (!obj13[first]) {
                                closure_1_38.info(`Data key word \`${arr2[0]}\` not expected in ${item}`);
                                closure_2 = `${tmp10}_`;
                              }
                              item = parts.splice(1).forEach((item, index) => {
                                if ("url" === item) {
                                  c1 = true;
                                }
                                if (closure_1_83[item]) {
                                  closure_2 = closure_2 + tmp[item];
                                } else {
                                  const _Number = Number;
                                  const _Number2 = Number;
                                  if (Number.isInteger(Number(item))) {
                                    closure_2 = closure_2 + item;
                                  } else {
                                    closure_1_38.info(`Data key word \`${item}\` not expected in ${closure_0}`);
                                    closure_2 = `${closure_2}_${item}_`;
                                  }
                                }
                              });
                              if (c1) {
                                closure_2[closure_2] = tmp[item];
                              } else {
                                c1[closure_2] = tmp[item];
                              }
                              const spliceResult = parts.splice(1);
                            }
                          }
                        });
                        const _Object10 = Object;
                        const eventQueue4 = self.eventQueue;
                        eventQueue4.queueEvent(obj.event, Object.assign(obj3, obj4));
                        return logger.error("Beaconing disabled due to rate limit.");
                      }
                    }
                    if (closure_93.indexOf(arg0) >= 0) {
                      const eventQueue2 = self.eventQueue;
                      eventQueue2.flushEvents();
                    }
                  }
                }
                tmp26 = num4 >= self.sampleRate;
              }
            }
            return logger.error("A data object was expected in send() but was not provided");
          }
        }
      }
    }
  },
  {
    key: "destroy",
    value() {
      const eventQueue = this.eventQueue;
      eventQueue.destroy(false);
    }
  },
  {
    key: "_deduplicateBeaconData",
    value(arr, view_id) {
      closure_0 = arr;
      const self = this;
      let obj = {};
      view_id = view_id.view_id;
      if ("-1" !== view_id) {
        if ("viewstart" !== arr) {
          if ("viewend" !== arr) {
            if (self.previousBeaconData) {
              const utils = self.mux.utils;
              if (utils.now() - self.lastEventTime < 600000) {
                closure_3 = 0 === arr.indexOf("request");
                const _Object = Object;
                const entries = Object.entries(view_id);
                const item = entries.forEach((item, index) => {
                  let tmp;
                  if (Array.isArray(item)) {
                    tmp = item;
                  }
                  if (!tmp) {
                    tmp = (function vt(items, arg1) {
                      let tmp6 = null;
                      if (null != items) {
                        const _Symbol = Symbol;
                        let prop = typeof Symbol !== "undefined";
                        if (typeof Symbol !== "undefined") {
                          const _Symbol2 = Symbol;
                          prop = items[Symbol.iterator];
                        }
                        if (!prop) {
                          prop = items[Symbol.iterator];
                        }
                        tmp6 = prop;
                      }
                      if (null != tmp6) {
                        let flag2 = false;
                        try {
                          items = [];
                          try {
                            const call = tmp9.call;
                            if (typeof call === "unknown") {
                              let iter = tmp9();
                            } else {
                              iter = call(items);
                            }
                            const iter3 = iter.next();
                            const done = iter3.done;
                            let tmp11 = done;
                            if (!done) {
                              items.push(iter4.value);
                              if (!arg1) {
                                const iter5 = iter2.next();
                                const done2 = iter5.done;
                                tmp11 = done2;
                                while (!done2) {
                                  let arr = items.push(iter6.value);
                                  if (!arg1) {
                                    continue;
                                  } else if (items.length === arg1) {
                                    break;
                                  }
                                  continue;
                                }
                              }
                            }
                            try {
                              let tmp19 = !tmp11;
                              if (!tmp11) {
                                tmp19 = null != iter2.return;
                              }
                              if (tmp19) {
                                iter2.return();
                              }
                              if (flag2) {
                                throw tmp5;
                              } else {
                                return items;
                              }
                            } catch (tmp25) {
                              if (tmp2) {
                                throw tmp;
                              } else {
                                throw tmp25;
                              }
                            }
                          } catch (tmp5) {
                            flag2 = true;
                          }
                        } catch (tmp28) {
                          try {
                            let tmp30 = !tmp3;
                            if (!tmp3) {
                              tmp30 = tmp4 != obj.return;
                            }
                            if (tmp30) {
                              obj.return();
                            }
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp28;
                            }
                          } catch (tmp36) {
                            if (tmp2) {
                              throw tmp;
                            } else {
                              throw tmp36;
                            }
                          }
                        }
                      }
                    })(item, 2);
                  }
                  if (!tmp) {
                    tmp = Pe(item, 2);
                  }
                  if (tmp) {
                    [tmp7, tmp8] = tmp;
                    let previousBeaconData = self.previousBeaconData;
                    if (previousBeaconData) {
                      let eventRequiresKeyResult = tmp8 !== self.previousBeaconData[tmp7];
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = closure_1_90.indexOf(tmp7) > -1;
                      }
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = self.objectHasChanged(closure_3, tmp7, tmp8, self.previousBeaconData[tmp7]);
                      }
                      if (!eventRequiresKeyResult) {
                        eventRequiresKeyResult = self.eventRequiresKey(closure_0, tmp7);
                      }
                      previousBeaconData = eventRequiresKeyResult;
                    }
                    if (previousBeaconData) {
                      self[tmp7] = tmp8;
                      self.previousBeaconData[tmp7] = tmp8;
                    }
                  } else {
                    const _TypeError = TypeError;
                    const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    throw typeError;
                  }
                });
              }
              return obj;
            }
          }
        }
      }
      obj = {};
      ue(obj, view_id);
      if (view_id) {
        self.previousBeaconData = obj;
      }
      if (view_id) {
        view_id = "viewend" === arr;
      }
      if (view_id) {
        self.previousBeaconData = null;
      }
    }
  },
  {
    key: "objectHasChanged",
    value(arg0, arr) {
      let tmp = !arg0;
      if (arg0) {
        tmp = 0 !== arr.indexOf("request_");
      }
      let tmp2 = !tmp;
      if (!tmp) {
        let obj = arg2;
        let tmp3 = "request_response_headers" === arr || typeof obj !== "object";
        obj = arg3;
        if (!tmp3) {
          tmp3 = typeof obj !== "object";
        }
        if (!tmp3) {
          if (!obj) {
            obj = {};
          }
          if (!obj) {
            obj = {};
          }
          tmp3 = Object.keys(obj).length !== Object.keys(obj).length;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }
  },
  {
    key: "eventRequiresKey",
    value(arg0, arr) {
      let tmp = "renditionchange" === arg0;
      if (tmp) {
        tmp = 0 === arr.indexOf("video_source_");
      }
      if (!tmp) {
        let hasItem = closure_92.includes(arr);
        if (hasItem) {
          hasItem = closure_91.includes(arg0);
        }
        tmp = hasItem;
      }
      return tmp;
    }
  }
];
N(fn18, items10);
const fn19 = function r(on) {
  const self = this;
  closure_0 = on;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn19[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn19[Symbol.hasInstance](self);
    }
    if (tmp2) {
      c1 = 0;
      c2 = 0;
      c3 = 0;
      c4 = 0;
      c5 = 0;
      c6 = 0;
      c7 = 0;
      on.on("requestcompleted", (arg0, arg1) => {
        ({ request_start, request_response_start, request_response_end, request_bytes_loaded } = arg1);
        closure_4 = closure_4 + 1;
        if (request_response_start) {
          let num3 = 0;
          if (null != request_start) {
            num3 = request_start;
          }
          let num4 = 0;
          const diff = request_response_start - num3;
          if (null != request_response_end) {
            num4 = request_response_end;
          }
          let diff1 = num4 - request_response_start;
        } else {
          let num = 0;
          if (null != request_response_end) {
            num = request_response_end;
          }
          let num2 = 0;
          if (null != request_start) {
            num2 = request_start;
          }
          diff1 = num - num2;
        }
        if (diff1 > 0) {
          if (request_bytes_loaded) {
            if (request_bytes_loaded > 0) {
              closure_5 = closure_5 + 1;
              closure_2 = closure_2 + request_bytes_loaded;
              closure_3 = closure_3 + diff1;
              let num5 = on.data.view_min_request_throughput;
              const result = request_bytes_loaded / diff1 * 8000;
              if (!num5) {
                num5 = Infinity;
              }
              on.data.view_min_request_throughput = Math.min(num5, result);
              on.data.view_average_request_throughput = closure_2 / closure_3 * 8000;
              on.data.view_request_count = closure_4;
              if (tmp2 > 0) {
                closure_1 = closure_1 + tmp2;
                let num6 = on.data.view_max_request_latency;
                if (!num6) {
                  num6 = 0;
                }
                on.data.view_max_request_latency = Math.max(num6, tmp2);
                on.data.view_average_request_latency = closure_1 / closure_5;
              }
            }
          }
        }
      });
      on.on("requestfailed", (arg0, arg1) => {
        closure_4 = closure_4 + 1;
        closure_6 = closure_6 + 1;
        on.data.view_request_count = closure_4;
        on.data.view_request_failed_count = closure_6;
      });
      on.on("requestcanceled", (arg0, arg1) => {
        closure_4 = closure_4 + 1;
        closure_7 = closure_7 + 1;
        on.data.view_request_count = closure_4;
        on.data.view_request_canceled_count = closure_7;
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn19[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn19[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn19);
};
const fn20 = function r(on) {
  closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn20[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn20[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_lastEventTime" in self) {
        let _Object = Object;
        Object.defineProperty(self, "_lastEventTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
      } else {
        self._lastEventTime = undefined;
      }
      on.on("before*", (type, viewer_time) => {
        viewer_time = viewer_time.viewer_time;
        const nowResult = obj3.now();
        const _lastEventTime = self._lastEventTime;
        self._lastEventTime = nowResult;
        if (_lastEventTime) {
          if (nowResult - _lastEventTime > 3600000) {
            let _Object = Object;
            const keys = Object.keys(on.data);
            const log = on.mux.log;
            const reduced = keys.reduce((acc, item, index) => {
              if (0 !== item.indexOf("video_")) {
                return acc;
              } else {
                let definePropertyResult = globalThis;
                let obj = {};
                if (item in obj) {
                  const _Object = definePropertyResult.Object;
                  obj = { value: null, enumerable: true, configurable: true, writable: true };
                  obj[0] = tmp3;
                  definePropertyResult = _Object.defineProperty(obj, item, obj);
                } else {
                  obj[item] = tmp3;
                }
                const merged = Object.assign(acc, obj);
              }
            }, {});
            log.info("Received event after at least an hour inactivity, creating a new view");
            const _Object2 = Object;
            let obj = { viewer_time: null };
            obj[0] = viewer_time;
            on._resetView(Object.assign(obj, reduced));
            on.playbackHeartbeat._playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
            let _playheadShouldBeProgressing = on.playbackHeartbeat._playheadShouldBeProgressing;
            if (_playheadShouldBeProgressing) {
              _playheadShouldBeProgressing = "play" !== type.type;
            }
            if (_playheadShouldBeProgressing) {
              _playheadShouldBeProgressing = "adbreakstart" !== type.type;
            }
            if (_playheadShouldBeProgressing) {
              obj = { viewer_time: null };
              obj[0] = viewer_time;
              on.emit("play", obj);
              if ("playing" !== type.type) {
                obj = { viewer_time: null };
                obj[0] = viewer_time;
                on.emit("playing", obj);
              }
            }
          }
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn20[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn20[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn20);
};
const fn21 = function r(on) {
  const self = this;
  closure_0 = on;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn21[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn21[Symbol.hasInstance](self);
    }
    if (tmp2) {
      function t(arg0) {

      }
      c2 = null;
      c3 = null;
      c4 = null;
      c5 = 0;
      on.on("viewinit", () => {
        c2 = null;
        c3 = null;
        c4 = null;
        c5 = 0;
      });
      on.on("beforecdnchange", (arg0, video_cdn) => {
        video_cdn = undefined;
        if (null != video_cdn) {
          video_cdn = video_cdn.video_cdn;
        }
        let tmp2 = video_cdn;
        if (video_cdn) {
          tmp2 = undefined === video_cdn.video_previous_cdn || null === video_cdn.video_previous_cdn;
        }
        if (tmp2) {
          let formatted;
          if (null != video_cdn) {
            formatted = video_cdn.toLowerCase();
          }
          let formatted1;
          if (null != video_cdn) {
            formatted1 = str.toLowerCase();
          }
          if (formatted === formatted1) {
            let tmp10;
            if (null != closure_2) {
              tmp10 = closure_2;
            }
            video_cdn.video_previous_cdn = tmp10;
          } else {
            let tmp7;
            if (null != video_cdn) {
              tmp7 = video_cdn;
            }
            video_cdn.video_previous_cdn = tmp7;
            closure_2 = video_cdn;
          }
        }
      });
      on.on("requestcompleted", (arg0, request_type) => {
        if (typeof t !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != request_type) {
          if (request_type.request_type) {
            if ("media" === request_type.request_type) {
              const request_response_headers = request_type.request_response_headers;
              if (null !== request_response_headers) {
                if (undefined !== request_response_headers) {
                  if (request_response_headers["x-cdn"]) {
                    let prop = request_type.request_response_headers["x-cdn"];
                  }
                  if (null != request_type) {
                    if (request_type.request_start) {
                      let viewer_time = request_type.request_start;
                    }
                    if (null != prop) {
                      let formatted;
                      if (null != prop) {
                        formatted = prop.toLowerCase();
                      }
                      let formatted1;
                      if (null != prop) {
                        formatted1 = str3.toLowerCase();
                      }
                      if (formatted !== formatted1) {
                        if (viewer_time <= viewer_time) {
                          const obj = { video_cdn: null };
                          obj[0] = prop;
                          on.emit("cdnchange", obj);
                        }
                      }
                    }
                  }
                  if (null != request_type) {
                    if (request_type.viewer_time) {
                      viewer_time = request_type.viewer_time;
                    }
                  }
                  const _Date = Date;
                  viewer_time = Date.now();
                }
              }
            }
          }
        }
        prop = null;
        if (null != request_type) {
          prop = null;
          if (request_type.video_cdn) {
            prop = request_type.video_cdn;
          }
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn21[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn21[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn21);
};
const fn22 = function r(on) {
  closure_0 = on;
  const self = this;
  if (typeof Symbol !== "undefined") {
    const _Symbol3 = Symbol;
    if (fn22[Symbol.hasInstance]) {
      const _Symbol2 = Symbol;
      let tmp2 = fn22[Symbol.hasInstance](self);
    }
    if (tmp2) {
      if ("_emittingAutomaticEvent" in self) {
        const _Object = Object;
        Object.defineProperty(self, "_emittingAutomaticEvent", { value: false, enumerable: true, configurable: true, writable: true });
      } else {
        self._emittingAutomaticEvent = false;
      }
      if ("_hasInitialized" in self) {
        const _Object2 = Object;
        Object.defineProperty(self, "_hasInitialized", { value: false, enumerable: true, configurable: true, writable: true });
      } else {
        self._hasInitialized = false;
      }
      on.on("viewstart", () => {
        if (!self._hasInitialized) {
          self._hasInitialized = true;
          self._emittingAutomaticEvent = true;
          on.emit("playbackmodechange", { player_playback_mode: "standard", player_playback_mode_data: "{}" });
          self._emittingAutomaticEvent = false;
        }
      });
      on.on("viewend", () => {
        self._hasInitialized = false;
      });
      on.on("playbackmodechange", (arg0, player_playback_mode_data) => {
        if (!self._emittingAutomaticEvent) {
          player_playback_mode = player_playback_mode_data;
          if (player_playback_mode_data.player_playback_mode_data) {
            if (!((player_playback_mode_data) => {
              try {
                const _JSON = JSON;
                const parsed = JSON.parse(player_playback_mode_data);
                return true;
              } catch (err) {
                return false;
              }
            })(player_playback_mode.player_playback_mode_data)) {
              const log = on.mux.log;
              log.warn("Invalid JSON string for player_playback_mode_data");
              player_playback_mode.player_playback_mode_data = "{}";
            }
          } else {
            player_playback_mode.player_playback_mode_data = "{}";
          }
          ({ player_playback_mode_data: closure_0.data.player_playback_mode_data, player_playback_mode } = player_playback_mode);
          on.data.player_playback_mode = player_playback_mode;
        }
      });
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
  if (typeof Symbol !== "undefined") {
    const _Symbol4 = Symbol;
    if (fn22[Symbol.hasInstance]) {
      const _Symbol = Symbol;
      tmp2 = fn22[Symbol.hasInstance](self);
    }
  }
  tmp2 = U(self, fn22);
};
let closure_99 = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange", "cdnchange", "playbackmodechange"];
new Set(["requestcompleted", "requestfailed", "requestcanceled"]);
f94619 = undefined;
class t {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp3 = closure_1;
    if (typeof Symbol !== "undefined") {
      _Symbol3 = Symbol;
      if (tmp3[Symbol.hasInstance]) {
        _Symbol2 = Symbol;
        tmp4 = tmp3[Symbol.hasInstance](self);
      }
      if (tmp4) {
        tmp9 = closure_0;
        call = closure_0.call;
        obj = typeof call === "unknown" ? tmp9() : call(self);
        closure_0 = obj;
        tmp10 = undefined === obj;
        if (tmp10) {
          _ReferenceError47 = ReferenceError;
          tmp300 = new.target;
          str88 = "this hasn't been initialised - super() hasn't been called";
          tmp301 = new.target;
          referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
          tmp303 = referenceError;
          throw referenceError;
        } else {
          str2 = "pageLoadEndTime";
          if ("pageLoadEndTime" in obj) {
            _Object = Object;
            definePropertyResult = Object.defineProperty(obj, "pageLoadEndTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
          } else {
            obj.pageLoadEndTime = undefined;
          }
          if (tmp10) {
            _ReferenceError46 = ReferenceError;
            tmp296 = new.target;
            str87 = "this hasn't been initialised - super() hasn't been called";
            tmp297 = new.target;
            referenceError1 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
            tmp299 = referenceError1;
            throw referenceError1;
          } else {
            str3 = "pageLoadInitTime";
            if ("pageLoadInitTime" in obj) {
              _Object2 = Object;
              definePropertyResult1 = Object.defineProperty(obj, "pageLoadInitTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
            } else {
              obj.pageLoadInitTime = undefined;
            }
            if (tmp10) {
              _ReferenceError45 = ReferenceError;
              tmp292 = new.target;
              str86 = "this hasn't been initialised - super() hasn't been called";
              tmp293 = new.target;
              referenceError2 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
              tmp295 = referenceError2;
              throw referenceError2;
            } else {
              str4 = "_destroyed";
              if ("_destroyed" in obj) {
                _Object3 = Object;
                definePropertyResult2 = Object.defineProperty(obj, "_destroyed", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
              } else {
                obj._destroyed = undefined;
              }
              if (tmp10) {
                _ReferenceError44 = ReferenceError;
                tmp288 = new.target;
                str85 = "this hasn't been initialised - super() hasn't been called";
                tmp289 = new.target;
                referenceError3 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                tmp291 = referenceError3;
                throw referenceError3;
              } else {
                str5 = "_heartBeatTimeout";
                if ("_heartBeatTimeout" in obj) {
                  _Object4 = Object;
                  definePropertyResult3 = Object.defineProperty(obj, "_heartBeatTimeout", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                } else {
                  obj._heartBeatTimeout = undefined;
                }
                if (tmp10) {
                  _ReferenceError43 = ReferenceError;
                  tmp284 = new.target;
                  str84 = "this hasn't been initialised - super() hasn't been called";
                  tmp285 = new.target;
                  referenceError4 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  tmp287 = referenceError4;
                  throw referenceError4;
                } else {
                  str6 = "adTracker";
                  if ("adTracker" in obj) {
                    _Object5 = Object;
                    definePropertyResult4 = Object.defineProperty(obj, "adTracker", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                  } else {
                    obj.adTracker = undefined;
                  }
                  if (tmp10) {
                    _ReferenceError42 = ReferenceError;
                    tmp280 = new.target;
                    str83 = "this hasn't been initialised - super() hasn't been called";
                    tmp281 = new.target;
                    referenceError5 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    tmp283 = referenceError5;
                    throw referenceError5;
                  } else {
                    str7 = "dashjs";
                    if ("dashjs" in obj) {
                      _Object6 = Object;
                      definePropertyResult5 = Object.defineProperty(obj, "dashjs", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                    } else {
                      obj.dashjs = undefined;
                    }
                    if (tmp10) {
                      _ReferenceError41 = ReferenceError;
                      tmp276 = new.target;
                      str82 = "this hasn't been initialised - super() hasn't been called";
                      tmp277 = new.target;
                      referenceError6 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      tmp279 = referenceError6;
                      throw referenceError6;
                    } else {
                      str8 = "data";
                      if ("data" in obj) {
                        _Object7 = Object;
                        definePropertyResult6 = Object.defineProperty(obj, "data", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                      } else {
                        obj.data = undefined;
                      }
                      if (tmp10) {
                        _ReferenceError40 = ReferenceError;
                        tmp272 = new.target;
                        str81 = "this hasn't been initialised - super() hasn't been called";
                        tmp273 = new.target;
                        referenceError7 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        tmp275 = referenceError7;
                        throw referenceError7;
                      } else {
                        str9 = "disablePlayheadRebufferTracking";
                        if ("disablePlayheadRebufferTracking" in obj) {
                          _Object8 = Object;
                          definePropertyResult7 = Object.defineProperty(obj, "disablePlayheadRebufferTracking", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                        } else {
                          obj.disablePlayheadRebufferTracking = undefined;
                        }
                        if (tmp10) {
                          _ReferenceError39 = ReferenceError;
                          tmp268 = new.target;
                          str80 = "this hasn't been initialised - super() hasn't been called";
                          tmp269 = new.target;
                          referenceError8 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          tmp271 = referenceError8;
                          throw referenceError8;
                        } else {
                          str10 = "disableRebufferTracking";
                          if ("disableRebufferTracking" in obj) {
                            _Object9 = Object;
                            definePropertyResult8 = Object.defineProperty(obj, "disableRebufferTracking", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                          } else {
                            obj.disableRebufferTracking = undefined;
                          }
                          if (tmp10) {
                            _ReferenceError38 = ReferenceError;
                            tmp264 = new.target;
                            str79 = "this hasn't been initialised - super() hasn't been called";
                            tmp265 = new.target;
                            referenceError9 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            tmp267 = referenceError9;
                            throw referenceError9;
                          } else {
                            str11 = "errorTracker";
                            if ("errorTracker" in obj) {
                              _Object10 = Object;
                              definePropertyResult9 = Object.defineProperty(obj, "errorTracker", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                            } else {
                              obj.errorTracker = undefined;
                            }
                            if (tmp10) {
                              _ReferenceError37 = ReferenceError;
                              tmp260 = new.target;
                              str78 = "this hasn't been initialised - super() hasn't been called";
                              tmp261 = new.target;
                              referenceError10 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              tmp263 = referenceError10;
                              throw referenceError10;
                            } else {
                              str12 = "errorTranslator";
                              if ("errorTranslator" in obj) {
                                _Object11 = Object;
                                definePropertyResult10 = Object.defineProperty(obj, "errorTranslator", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                              } else {
                                obj.errorTranslator = undefined;
                              }
                              if (tmp10) {
                                _ReferenceError36 = ReferenceError;
                                tmp256 = new.target;
                                str77 = "this hasn't been initialised - super() hasn't been called";
                                tmp257 = new.target;
                                referenceError11 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                tmp259 = referenceError11;
                                throw referenceError11;
                              } else {
                                str13 = "emitTranslator";
                                if ("emitTranslator" in obj) {
                                  _Object12 = Object;
                                  definePropertyResult11 = Object.defineProperty(obj, "emitTranslator", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                } else {
                                  obj.emitTranslator = undefined;
                                }
                                if (tmp10) {
                                  _ReferenceError35 = ReferenceError;
                                  tmp252 = new.target;
                                  str76 = "this hasn't been initialised - super() hasn't been called";
                                  tmp253 = new.target;
                                  referenceError12 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                  tmp255 = referenceError12;
                                  throw referenceError12;
                                } else {
                                  str14 = "getAdData";
                                  if ("getAdData" in obj) {
                                    _Object13 = Object;
                                    definePropertyResult12 = Object.defineProperty(obj, "getAdData", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                  } else {
                                    obj.getAdData = undefined;
                                  }
                                  if (tmp10) {
                                    _ReferenceError34 = ReferenceError;
                                    tmp248 = new.target;
                                    str75 = "this hasn't been initialised - super() hasn't been called";
                                    tmp249 = new.target;
                                    referenceError13 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    tmp251 = referenceError13;
                                    throw referenceError13;
                                  } else {
                                    str15 = "getPlayheadTime";
                                    if ("getPlayheadTime" in obj) {
                                      _Object14 = Object;
                                      definePropertyResult13 = Object.defineProperty(obj, "getPlayheadTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                    } else {
                                      obj.getPlayheadTime = undefined;
                                    }
                                    if (tmp10) {
                                      _ReferenceError33 = ReferenceError;
                                      tmp244 = new.target;
                                      str74 = "this hasn't been initialised - super() hasn't been called";
                                      tmp245 = new.target;
                                      referenceError14 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                      tmp247 = referenceError14;
                                      throw referenceError14;
                                    } else {
                                      str16 = "getStateData";
                                      if ("getStateData" in obj) {
                                        _Object15 = Object;
                                        definePropertyResult14 = Object.defineProperty(obj, "getStateData", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                      } else {
                                        obj.getStateData = undefined;
                                      }
                                      if (tmp10) {
                                        _ReferenceError32 = ReferenceError;
                                        tmp240 = new.target;
                                        str73 = "this hasn't been initialised - super() hasn't been called";
                                        tmp241 = new.target;
                                        referenceError15 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        tmp243 = referenceError15;
                                        throw referenceError15;
                                      } else {
                                        str17 = "stateDataTranslator";
                                        if ("stateDataTranslator" in obj) {
                                          _Object16 = Object;
                                          definePropertyResult15 = Object.defineProperty(obj, "stateDataTranslator", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                        } else {
                                          obj.stateDataTranslator = undefined;
                                        }
                                        if (tmp10) {
                                          _ReferenceError31 = ReferenceError;
                                          tmp236 = new.target;
                                          str72 = "this hasn't been initialised - super() hasn't been called";
                                          tmp237 = new.target;
                                          referenceError16 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                          tmp239 = referenceError16;
                                          throw referenceError16;
                                        } else {
                                          str18 = "hlsjs";
                                          if ("hlsjs" in obj) {
                                            _Object17 = Object;
                                            definePropertyResult16 = Object.defineProperty(obj, "hlsjs", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                          } else {
                                            obj.hlsjs = undefined;
                                          }
                                          if (tmp10) {
                                            _ReferenceError30 = ReferenceError;
                                            tmp232 = new.target;
                                            str71 = "this hasn't been initialised - super() hasn't been called";
                                            tmp233 = new.target;
                                            referenceError17 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            tmp235 = referenceError17;
                                            throw referenceError17;
                                          } else {
                                            str19 = "id";
                                            if ("id" in obj) {
                                              _Object18 = Object;
                                              definePropertyResult17 = Object.defineProperty(obj, "id", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                            } else {
                                              obj.id = undefined;
                                            }
                                            if (tmp10) {
                                              _ReferenceError29 = ReferenceError;
                                              tmp228 = new.target;
                                              str70 = "this hasn't been initialised - super() hasn't been called";
                                              tmp229 = new.target;
                                              referenceError18 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                              tmp231 = referenceError18;
                                              throw referenceError18;
                                            } else {
                                              str20 = "longResumeTracker";
                                              if ("longResumeTracker" in obj) {
                                                _Object19 = Object;
                                                definePropertyResult18 = Object.defineProperty(obj, "longResumeTracker", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                              } else {
                                                obj.longResumeTracker = undefined;
                                              }
                                              if (tmp10) {
                                                _ReferenceError28 = ReferenceError;
                                                tmp224 = new.target;
                                                str69 = "this hasn't been initialised - super() hasn't been called";
                                                tmp225 = new.target;
                                                referenceError19 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                tmp227 = referenceError19;
                                                throw referenceError19;
                                              } else {
                                                str21 = "minimumRebufferDuration";
                                                if ("minimumRebufferDuration" in obj) {
                                                  _Object20 = Object;
                                                  definePropertyResult19 = Object.defineProperty(obj, "minimumRebufferDuration", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                } else {
                                                  obj.minimumRebufferDuration = undefined;
                                                }
                                                if (tmp10) {
                                                  _ReferenceError27 = ReferenceError;
                                                  tmp220 = new.target;
                                                  str68 = "this hasn't been initialised - super() hasn't been called";
                                                  tmp221 = new.target;
                                                  referenceError20 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                  tmp223 = referenceError20;
                                                  throw referenceError20;
                                                } else {
                                                  str22 = "mux";
                                                  if ("mux" in obj) {
                                                    _Object21 = Object;
                                                    definePropertyResult20 = Object.defineProperty(obj, "mux", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                  } else {
                                                    obj.mux = undefined;
                                                  }
                                                  if (tmp10) {
                                                    _ReferenceError26 = ReferenceError;
                                                    tmp216 = new.target;
                                                    str67 = "this hasn't been initialised - super() hasn't been called";
                                                    tmp217 = new.target;
                                                    referenceError21 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                    tmp219 = referenceError21;
                                                    throw referenceError21;
                                                  } else {
                                                    str23 = "playbackEventDispatcher";
                                                    if ("playbackEventDispatcher" in obj) {
                                                      _Object22 = Object;
                                                      definePropertyResult21 = Object.defineProperty(obj, "playbackEventDispatcher", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                    } else {
                                                      obj.playbackEventDispatcher = undefined;
                                                    }
                                                    if (tmp10) {
                                                      _ReferenceError25 = ReferenceError;
                                                      tmp212 = new.target;
                                                      str66 = "this hasn't been initialised - super() hasn't been called";
                                                      tmp213 = new.target;
                                                      referenceError22 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                      tmp215 = referenceError22;
                                                      throw referenceError22;
                                                    } else {
                                                      str24 = "playbackHeartbeat";
                                                      if ("playbackHeartbeat" in obj) {
                                                        _Object23 = Object;
                                                        definePropertyResult22 = Object.defineProperty(obj, "playbackHeartbeat", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                      } else {
                                                        obj.playbackHeartbeat = undefined;
                                                      }
                                                      if (tmp10) {
                                                        _ReferenceError24 = ReferenceError;
                                                        tmp208 = new.target;
                                                        str65 = "this hasn't been initialised - super() hasn't been called";
                                                        tmp209 = new.target;
                                                        referenceError23 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                        tmp211 = referenceError23;
                                                        throw referenceError23;
                                                      } else {
                                                        str25 = "playbackHeartbeatTime";
                                                        if ("playbackHeartbeatTime" in obj) {
                                                          _Object24 = Object;
                                                          definePropertyResult23 = Object.defineProperty(obj, "playbackHeartbeatTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                        } else {
                                                          obj.playbackHeartbeatTime = undefined;
                                                        }
                                                        if (tmp10) {
                                                          _ReferenceError23 = ReferenceError;
                                                          tmp204 = new.target;
                                                          str64 = "this hasn't been initialised - super() hasn't been called";
                                                          tmp205 = new.target;
                                                          referenceError24 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                          tmp207 = referenceError24;
                                                          throw referenceError24;
                                                        } else {
                                                          str26 = "playheadTime";
                                                          if ("playheadTime" in obj) {
                                                            _Object25 = Object;
                                                            definePropertyResult24 = Object.defineProperty(obj, "playheadTime", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                          } else {
                                                            obj.playheadTime = undefined;
                                                          }
                                                          if (tmp10) {
                                                            _ReferenceError22 = ReferenceError;
                                                            tmp200 = new.target;
                                                            str63 = "this hasn't been initialised - super() hasn't been called";
                                                            tmp201 = new.target;
                                                            referenceError25 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                            tmp203 = referenceError25;
                                                            throw referenceError25;
                                                          } else {
                                                            str27 = "seekingTracker";
                                                            if ("seekingTracker" in obj) {
                                                              _Object26 = Object;
                                                              definePropertyResult25 = Object.defineProperty(obj, "seekingTracker", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                            } else {
                                                              obj.seekingTracker = undefined;
                                                            }
                                                            if (tmp10) {
                                                              _ReferenceError21 = ReferenceError;
                                                              tmp196 = new.target;
                                                              str62 = "this hasn't been initialised - super() hasn't been called";
                                                              tmp197 = new.target;
                                                              referenceError26 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                              tmp199 = referenceError26;
                                                              throw referenceError26;
                                                            } else {
                                                              str28 = "sustainedRebufferThreshold";
                                                              if ("sustainedRebufferThreshold" in obj) {
                                                                _Object27 = Object;
                                                                definePropertyResult26 = Object.defineProperty(obj, "sustainedRebufferThreshold", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                              } else {
                                                                obj.sustainedRebufferThreshold = undefined;
                                                              }
                                                              if (tmp10) {
                                                                _ReferenceError20 = ReferenceError;
                                                                tmp192 = new.target;
                                                                str61 = "this hasn't been initialised - super() hasn't been called";
                                                                tmp193 = new.target;
                                                                referenceError27 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                tmp195 = referenceError27;
                                                                throw referenceError27;
                                                              } else {
                                                                str29 = "watchTimeTracker";
                                                                if ("watchTimeTracker" in obj) {
                                                                  _Object28 = Object;
                                                                  definePropertyResult27 = Object.defineProperty(obj, "watchTimeTracker", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                                } else {
                                                                  obj.watchTimeTracker = undefined;
                                                                }
                                                                if (tmp10) {
                                                                  _ReferenceError19 = ReferenceError;
                                                                  tmp188 = new.target;
                                                                  str60 = "this hasn't been initialised - super() hasn't been called";
                                                                  tmp189 = new.target;
                                                                  referenceError28 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                  tmp191 = referenceError28;
                                                                  throw referenceError28;
                                                                } else {
                                                                  str30 = "currentFragmentPDT";
                                                                  if ("currentFragmentPDT" in obj) {
                                                                    _Object29 = Object;
                                                                    definePropertyResult28 = Object.defineProperty(obj, "currentFragmentPDT", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                                  } else {
                                                                    obj.currentFragmentPDT = undefined;
                                                                  }
                                                                  if (tmp10) {
                                                                    _ReferenceError18 = ReferenceError;
                                                                    tmp184 = new.target;
                                                                    str59 = "this hasn't been initialised - super() hasn't been called";
                                                                    tmp185 = new.target;
                                                                    referenceError29 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                    tmp187 = referenceError29;
                                                                    throw referenceError29;
                                                                  } else {
                                                                    str31 = "currentFragmentStart";
                                                                    if ("currentFragmentStart" in obj) {
                                                                      _Object30 = Object;
                                                                      definePropertyResult29 = Object.defineProperty(obj, "currentFragmentStart", { value: "IconComponent", enumerable: "face_with_open_eyes_and_hand_over_mouth", configurable: -25012338760043058000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, writable: -45744.01802964844 });
                                                                    } else {
                                                                      obj.currentFragmentStart = undefined;
                                                                    }
                                                                    tmp41 = global;
                                                                    tmp42 = require;
                                                                    tmp43 = importDefault;
                                                                    tmp44 = closure_47;
                                                                    obj.pageLoadInitTime = closure_47.navigationStart();
                                                                    obj.pageLoadEndTime = closure_47.domContentLoadedEventEnd();
                                                                    obj = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1000, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false, errorTranslator: null, emitTranslator: null, stateDataTranslator: null };
                                                                    obj[10] = function errorTranslator(arg0) {
                                                                      return arg0;
                                                                    };
                                                                    obj[11] = function emitTranslator(arg0, merged) {
                                                                      const length = arguments.length;
                                                                      const array = new Array(length);
                                                                      for (let num = 0; num < length; num = num + 1) {
                                                                        array[num] = arguments[num];
                                                                      }
                                                                      return array;
                                                                    };
                                                                    obj[12] = function stateDataTranslator(stateData) {
                                                                      return stateData;
                                                                    };
                                                                    obj.mux = global;
                                                                    obj.id = require;
                                                                    tmp45 = null;
                                                                    tmp46 = null != importDefault && importDefault.beaconDomain;
                                                                    if (tmp46) {
                                                                      log = obj.mux.log;
                                                                      str32 = "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.";
                                                                      warnResult = log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.");
                                                                    }
                                                                    _Object31 = Object;
                                                                    merged = Object.assign(obj, importDefault);
                                                                    merged.data = merged.data || {};
                                                                    if (merged.data.property_key) {
                                                                      merged.data.env_key = merged.data.property_key;
                                                                      data = merged.data;
                                                                      str33 = "property_key";
                                                                      delete tmp2[tmp];
                                                                    }
                                                                    closure_38.level = merged.debug ? c34 : c36;
                                                                    obj.getPlayheadTime = merged.getPlayheadTime;
                                                                    obj.getStateData = merged.getStateData || (() => ({}));
                                                                    obj.getAdData = merged.getAdData || (() => {

                                                                    });
                                                                    ({ minimumRebufferDuration: obj.minimumRebufferDuration, sustainedRebufferThreshold: obj.sustainedRebufferThreshold, playbackHeartbeatTime: obj.playbackHeartbeatTime, disableRebufferTracking: obj.disableRebufferTracking } = merged);
                                                                    if (obj.disableRebufferTracking) {
                                                                      log2 = obj.mux.log;
                                                                      str34 = "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.";
                                                                      warnResult1 = log2.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.");
                                                                    }
                                                                    ({ disablePlayheadRebufferTracking: obj.disablePlayheadRebufferTracking, errorTranslator: obj.errorTranslator, emitTranslator: obj.emitTranslator, stateDataTranslator: obj.stateDataTranslator } = merged);
                                                                    tmp50 = r;
                                                                    tmp51 = new.target;
                                                                    tmp52 = r(global, merged.data.env_key, merged);
                                                                    obj.playbackEventDispatcher = new.target;
                                                                    obj1 = { player_instance_id: null, mux_sample_rate: null, beacon_domain: null };
                                                                    tmp53 = ee;
                                                                    obj1[0] = ee();
                                                                    obj1[1] = merged.sampleRate;
                                                                    obj1[2] = merged.beaconCollectionDomain || merged.beaconDomain;
                                                                    obj.data = obj1;
                                                                    num = 1;
                                                                    obj.data.view_sequence_number = 1;
                                                                    obj.data.player_sequence_number = 1;
                                                                    fn = function() {
                                                                      const self = this;
                                                                      if (undefined === this.data.view_start) {
                                                                        const utils = self.mux.utils;
                                                                        self.data.view_start = utils.now();
                                                                        self.emit("viewstart");
                                                                      }
                                                                    };
                                                                    if (tmp10) {
                                                                      _ReferenceError17 = ReferenceError;
                                                                      tmp180 = new.target;
                                                                      str58 = "this hasn't been initialised - super() hasn't been called";
                                                                      tmp181 = new.target;
                                                                      referenceError30 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                      tmp183 = referenceError30;
                                                                      throw referenceError30;
                                                                    } else {
                                                                      closure_1 = tmp54(obj);
                                                                      str35 = "viewinit";
                                                                      onResult = obj.on("viewinit", function(arg0, arg1) {
                                                                        this._resetVideoData();
                                                                        this._resetViewData();
                                                                        this._resetErrorData();
                                                                        this._updateStateData();
                                                                        const merged = Object.assign(this.data, arg1);
                                                                        this._initializeViewData();
                                                                        this.one("play", closure_1);
                                                                        this.one("adbreakstart", closure_1);
                                                                      });
                                                                      str36 = "videochange";
                                                                      onResult1 = obj.on("videochange", function(arg0, arg1) {
                                                                        this._resetView(arg1);
                                                                      });
                                                                      str37 = "programchange";
                                                                      onResult2 = obj.on("programchange", function(arg0, arg1) {
                                                                        const self = this;
                                                                        if (this.data.player_is_paused) {
                                                                          const log = self.mux.log;
                                                                          log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.");
                                                                        }
                                                                        self._resetView(Object.assign(arg1, { view_program_changed: true }));
                                                                        callback();
                                                                        self.emit("play");
                                                                        self.emit("playing");
                                                                      });
                                                                      str38 = "fragmentchange";
                                                                      onResult3 = obj.on("fragmentchange", (arg0, arg1) => {

                                                                      });
                                                                      str39 = "destroy";
                                                                      onResult4 = obj.on("destroy", obj.destroy);
                                                                      _window = window;
                                                                      if (typeof window !== "undefined") {
                                                                        _window2 = window;
                                                                        if (typeof window.addEventListener === "function") {
                                                                          _window3 = window;
                                                                          if (typeof window.removeEventListener === "function") {
                                                                            fn2 = function f(event) {
                                                                              let WINDOW_HIDDEN = undefined !== obj.data.view_start;
                                                                              obj.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState;
                                                                              if (WINDOW_HIDDEN) {
                                                                                WINDOW_HIDDEN = obj.mux.WINDOW_HIDDEN;
                                                                              }
                                                                              if (WINDOW_HIDDEN) {
                                                                                if (!obj.data.player_is_paused) {
                                                                                  obj.emit("hb");
                                                                                }
                                                                              }
                                                                            };
                                                                            f = fn2;
                                                                            _window4 = window;
                                                                            flag = false;
                                                                            str89 = "visibilitychange";
                                                                            listener = window.addEventListener("visibilitychange", fn2, false);
                                                                            fn3 = function g(event) {
                                                                              if (!event.persisted) {
                                                                                obj.destroy();
                                                                              }
                                                                            };
                                                                            g = fn3;
                                                                            _window5 = window;
                                                                            str90 = "pagehide";
                                                                            listener1 = window.addEventListener("pagehide", fn3, false);
                                                                            onResult5 = obj.on("destroy", () => {
                                                                              const removed = window.removeEventListener("visibilitychange", fn2);
                                                                              const removed1 = window.removeEventListener("pagehide", fn3);
                                                                            });
                                                                          }
                                                                        }
                                                                      }
                                                                      str40 = "playerready";
                                                                      onResult6 = obj.on("playerready", function(arg0, arg1) {
                                                                        const merged = Object.assign(this.data, arg1);
                                                                      });
                                                                      tmp61 = closure_99;
                                                                      item = closure_99.forEach((item, index) => {
                                                                        item.on(item, function(arg0, arg1) {
                                                                          const self = this;
                                                                          if (0 !== item.indexOf("ad")) {
                                                                            self._updateStateData();
                                                                          }
                                                                          const merged = Object.assign(self.data, arg1);
                                                                          self._sanitizeData();
                                                                        });
                                                                        item.on(`after${item}`, function() {
                                                                          const self = this;
                                                                          let viewErrored = "error" !== closure_0;
                                                                          if (!viewErrored) {
                                                                            viewErrored = self.errorTracker.viewErrored;
                                                                          }
                                                                          if (viewErrored) {
                                                                            self.send(closure_0);
                                                                          }
                                                                        });
                                                                      });
                                                                      str41 = "viewend";
                                                                      onResult7 = obj.on("viewend", (arg0, arg1) => {
                                                                        const merged = Object.assign(obj.data, arg1);
                                                                      });
                                                                      oneResult = obj.one("playerready", function(arg0) {
                                                                        const self = this;
                                                                        if (this.data.player_init_time) {
                                                                          self.data.player_startup_time = tmp4 - self.data.player_init_time;
                                                                        }
                                                                        self.pageLoadInitTime = self.data.page_load_init_time || self.pageLoadInitTime;
                                                                        self.pageLoadEndTime = self.data.page_load_end_time || self.pageLoadEndTime;
                                                                        const PLAYER_TRACKED = self.mux.PLAYER_TRACKED;
                                                                        let pageLoadInitTime = !PLAYER_TRACKED;
                                                                        if (!PLAYER_TRACKED) {
                                                                          pageLoadInitTime = self.pageLoadInitTime;
                                                                        }
                                                                        if (pageLoadInitTime) {
                                                                          self.mux.PLAYER_TRACKED = true;
                                                                          if (tmp5) {
                                                                            let num = self.data.player_init_time;
                                                                            if (!num) {
                                                                              num = Infinity;
                                                                            }
                                                                            self.data.page_load_time = Math.min(num, self.pageLoadEndTime || Infinity) - self.pageLoadInitTime;
                                                                          }
                                                                          tmp5 = self.data.player_init_time || self.pageLoadEndTime;
                                                                        }
                                                                        self.send("playerready");
                                                                        delete tmp3[tmp2];
                                                                        delete tmp2[tmp];
                                                                      });
                                                                      if (tmp10) {
                                                                        _ReferenceError16 = ReferenceError;
                                                                        tmp176 = new.target;
                                                                        str57 = "this hasn't been initialised - super() hasn't been called";
                                                                        tmp177 = new.target;
                                                                        referenceError31 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                        tmp179 = referenceError31;
                                                                        throw referenceError31;
                                                                      } else {
                                                                        tmp66 = new.target;
                                                                        tmp65Result = tmp65(obj);
                                                                        obj.longResumeTracker = new.target;
                                                                        if (tmp10) {
                                                                          _ReferenceError15 = ReferenceError;
                                                                          tmp172 = new.target;
                                                                          str56 = "this hasn't been initialised - super() hasn't been called";
                                                                          tmp173 = new.target;
                                                                          referenceError32 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                          tmp175 = referenceError32;
                                                                          throw referenceError32;
                                                                        } else {
                                                                          tmp69 = new.target;
                                                                          tmp68Result = tmp68(obj);
                                                                          obj.errorTracker = new.target;
                                                                          if (tmp10) {
                                                                            _ReferenceError14 = ReferenceError;
                                                                            tmp168 = new.target;
                                                                            str55 = "this hasn't been initialised - super() hasn't been called";
                                                                            tmp169 = new.target;
                                                                            referenceError33 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                            tmp171 = referenceError33;
                                                                            throw referenceError33;
                                                                          } else {
                                                                            tmp72 = new.target;
                                                                            tmp71Result = tmp71(obj);
                                                                            if (tmp10) {
                                                                              _ReferenceError13 = ReferenceError;
                                                                              tmp164 = new.target;
                                                                              str54 = "this hasn't been initialised - super() hasn't been called";
                                                                              tmp165 = new.target;
                                                                              referenceError34 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                              tmp167 = referenceError34;
                                                                              throw referenceError34;
                                                                            } else {
                                                                              tmp75 = new.target;
                                                                              tmp74Result = tmp74(obj);
                                                                              obj.seekingTracker = new.target;
                                                                              if (tmp10) {
                                                                                _ReferenceError12 = ReferenceError;
                                                                                tmp160 = new.target;
                                                                                str53 = "this hasn't been initialised - super() hasn't been called";
                                                                                tmp161 = new.target;
                                                                                referenceError35 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                tmp163 = referenceError35;
                                                                                throw referenceError35;
                                                                              } else {
                                                                                tmp78 = new.target;
                                                                                tmp77Result = tmp77(obj);
                                                                                obj.playheadTime = new.target;
                                                                                if (tmp10) {
                                                                                  _ReferenceError11 = ReferenceError;
                                                                                  tmp156 = new.target;
                                                                                  str52 = "this hasn't been initialised - super() hasn't been called";
                                                                                  tmp157 = new.target;
                                                                                  referenceError36 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                  tmp159 = referenceError36;
                                                                                  throw referenceError36;
                                                                                } else {
                                                                                  tmp81 = new.target;
                                                                                  tmp80Result = tmp80(obj);
                                                                                  obj.playbackHeartbeat = new.target;
                                                                                  if (tmp10) {
                                                                                    _ReferenceError10 = ReferenceError;
                                                                                    tmp152 = new.target;
                                                                                    str51 = "this hasn't been initialised - super() hasn't been called";
                                                                                    tmp153 = new.target;
                                                                                    referenceError37 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                    tmp155 = referenceError37;
                                                                                    throw referenceError37;
                                                                                  } else {
                                                                                    tmp84 = new.target;
                                                                                    tmp83Result = tmp83(obj);
                                                                                    if (tmp10) {
                                                                                      _ReferenceError9 = ReferenceError;
                                                                                      tmp148 = new.target;
                                                                                      str50 = "this hasn't been initialised - super() hasn't been called";
                                                                                      tmp149 = new.target;
                                                                                      referenceError38 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                      tmp151 = referenceError38;
                                                                                      throw referenceError38;
                                                                                    } else {
                                                                                      tmp87 = new.target;
                                                                                      tmp86Result = tmp86(obj);
                                                                                      obj.watchTimeTracker = new.target;
                                                                                      if (tmp10) {
                                                                                        _ReferenceError8 = ReferenceError;
                                                                                        tmp144 = new.target;
                                                                                        str49 = "this hasn't been initialised - super() hasn't been called";
                                                                                        tmp145 = new.target;
                                                                                        referenceError39 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                        tmp147 = referenceError39;
                                                                                        throw referenceError39;
                                                                                      } else {
                                                                                        tmp90 = new.target;
                                                                                        tmp89Result = tmp89(obj);
                                                                                        if (tmp10) {
                                                                                          _ReferenceError7 = ReferenceError;
                                                                                          tmp140 = new.target;
                                                                                          str48 = "this hasn't been initialised - super() hasn't been called";
                                                                                          tmp141 = new.target;
                                                                                          referenceError40 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                          tmp143 = referenceError40;
                                                                                          throw referenceError40;
                                                                                        } else {
                                                                                          tmp93 = new.target;
                                                                                          tmp92Result = tmp92(obj);
                                                                                          obj.adTracker = new.target;
                                                                                          if (tmp10) {
                                                                                            _ReferenceError6 = ReferenceError;
                                                                                            tmp136 = new.target;
                                                                                            str47 = "this hasn't been initialised - super() hasn't been called";
                                                                                            tmp137 = new.target;
                                                                                            referenceError41 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                            tmp139 = referenceError41;
                                                                                            throw referenceError41;
                                                                                          } else {
                                                                                            tmp96 = new.target;
                                                                                            tmp95Result = tmp95(obj);
                                                                                            if (tmp10) {
                                                                                              _ReferenceError5 = ReferenceError;
                                                                                              tmp132 = new.target;
                                                                                              str46 = "this hasn't been initialised - super() hasn't been called";
                                                                                              tmp133 = new.target;
                                                                                              referenceError42 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                              tmp135 = referenceError42;
                                                                                              throw referenceError42;
                                                                                            } else {
                                                                                              tmp99 = new.target;
                                                                                              tmp98Result = tmp98(obj);
                                                                                              if (tmp10) {
                                                                                                _ReferenceError4 = ReferenceError;
                                                                                                tmp128 = new.target;
                                                                                                str45 = "this hasn't been initialised - super() hasn't been called";
                                                                                                tmp129 = new.target;
                                                                                                referenceError43 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                tmp131 = referenceError43;
                                                                                                throw referenceError43;
                                                                                              } else {
                                                                                                tmp102 = new.target;
                                                                                                tmp101Result = tmp101(obj);
                                                                                                if (tmp10) {
                                                                                                  _ReferenceError3 = ReferenceError;
                                                                                                  tmp124 = new.target;
                                                                                                  str44 = "this hasn't been initialised - super() hasn't been called";
                                                                                                  tmp125 = new.target;
                                                                                                  referenceError44 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                  tmp127 = referenceError44;
                                                                                                  throw referenceError44;
                                                                                                } else {
                                                                                                  tmp105 = new.target;
                                                                                                  tmp104Result = tmp104(obj);
                                                                                                  if (tmp10) {
                                                                                                    _ReferenceError2 = ReferenceError;
                                                                                                    tmp120 = new.target;
                                                                                                    str43 = "this hasn't been initialised - super() hasn't been called";
                                                                                                    tmp121 = new.target;
                                                                                                    referenceError45 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                    tmp123 = referenceError45;
                                                                                                    throw referenceError45;
                                                                                                  } else {
                                                                                                    tmp108 = new.target;
                                                                                                    tmp107Result = tmp107(obj);
                                                                                                    if (tmp10) {
                                                                                                      _ReferenceError = ReferenceError;
                                                                                                      tmp116 = new.target;
                                                                                                      str42 = "this hasn't been initialised - super() hasn't been called";
                                                                                                      tmp117 = new.target;
                                                                                                      referenceError46 = new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                                                                      tmp119 = referenceError46;
                                                                                                      throw referenceError46;
                                                                                                    } else {
                                                                                                      tmp111 = new.target;
                                                                                                      tmp110Result = tmp110(obj);
                                                                                                      if (merged.hlsjs) {
                                                                                                        addHLSJSResult = obj.addHLSJS(merged);
                                                                                                      }
                                                                                                      if (merged.dashjs) {
                                                                                                        addDashJSResult = obj.addDashJS(merged);
                                                                                                      }
                                                                                                      emitResult = obj.emit("viewinit", merged.data);
                                                                                                      return obj;
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        _TypeError = TypeError;
        tmp5 = new.target;
        str = "Cannot call a class as a function";
        tmp6 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp8 = typeError;
        throw typeError;
      }
    }
    if (typeof Symbol !== "undefined") {
      _Symbol4 = Symbol;
      if (tmp3[Symbol.hasInstance]) {
        _Symbol = Symbol;
        tmp4 = tmp3[Symbol.hasInstance](self);
      }
    }
    tmp4 = U(self, tmp3);
    return;
  }
}
t.prototype = Object.create(fn2.prototype, { constructor: { value: t, writable: true, configurable: true } });
Le(t, fn2);
create = (function Rt() {
  if (typeof Reflect !== "undefined") {
    const _Reflect3 = Reflect;
    if (Reflect.construct) {
      const _Reflect = Reflect;
      if (!Reflect.construct.sham) {
        const _Proxy = Proxy;
        if (typeof Proxy === "function") {
          return true;
        } else {
          try {
            const _Boolean = Boolean;
            const call = valueOf.call;
            const _Reflect2 = Reflect;
            const _Boolean2 = Boolean;
            if (typeof call === "unknown") {
              valueOf();
            } else {
              call(constructResult);
            }
            return true;
          } catch (err) {
            return false;
          }
        }
      }
    }
  }
  return false;
})();
f94619 = function() {
  const self = this;
  const obj = X(f94619);
  if (closure_1) {
    const _Reflect = Reflect;
    let constructResult = Reflect.construct(obj, arguments, X(self).constructor);
  } else {
    constructResult = obj(...arguments);
  }
  if (!constructResult) {
    let tmp8 = self;
    if (undefined === self) {
      const _ReferenceError = ReferenceError;
      const referenceError = new ReferenceError("this hasn't been initialised - super() hasn't been called");
      throw referenceError;
    }
  } else {
    if (constructResult) {
      const _Symbol = Symbol;
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        let str = "symbol";
      }
      tmp8 = constructResult;
      if ("object" !== str) {
        tmp8 = constructResult;
      }
    }
    str = typeof constructResult;
  }
  return tmp8;
};
const items11 = [
  {
    key: "emit",
    value(arg0, arg1) {
      const self = this;
      const utils = this.mux.utils;
      const merged = Object.assign({ viewer_time: utils.now() }, arg1);
      items = [arg0, merged];
      let emitTranslatorResult = items;
      if (this.emitTranslator) {
        try {
          emitTranslatorResult = self.emitTranslator(arg0, merged);
        } catch (tmp3) {
          const log = tmp.mux.log;
          log.warn("Exception in emit translator callback.", tmp3);
        }
      }
      let length = null != emitTranslatorResult;
      if (length) {
        length = emitTranslatorResult.length;
      }
      if (length) {
        const tmp9 = De(X(lib.prototype), "emit", self);
        const call = tmp9.call;
        const items1 = [self];
        call.apply(tmp9, items1.concat(V(emitTranslatorResult)));
      }
      const obj = { viewer_time: utils.now() };
    }
  },
  {
    key: "destroy",
    value() {
      const self = this;
      if (!this._destroyed) {
        self._destroyed = true;
        if (undefined !== self.data.view_start) {
          self.emit("viewend");
          self.send("viewend");
        }
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.destroy();
        self.removeHLSJS();
        self.removeDashJS();
        const _window = window;
        window.clearTimeout(self._heartBeatTimeout);
      }
    }
  },
  {
    key: "send",
    value(arg0) {
      const self = this;
      if (this.data.view_id) {
        const _Object = Object;
        const merged = Object.assign({}, self.data);
        if (undefined === merged.video_source_is_live) {
          if (merged.player_source_duration !== Infinity) {
            if (merged.video_source_duration !== Infinity) {
              if (tmp7) {
                merged.video_source_is_live = false;
              }
              tmp7 = merged.player_source_duration > 0 || merged.video_source_duration > 0;
            }
          }
          merged.video_source_is_live = true;
        }
        if (!merged.video_source_is_live) {
          items = ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"];
          const item = items.forEach((item, index) => {
            merged[item] = undefined;
          });
        }
        merged.video_source_url = merged.video_source_url || merged.player_source_url;
        if (merged.video_source_url) {
          if (typeof re !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (typeof merged.video_source_url === "string") {
            if ("" !== str) {
              const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
              let first;
              if (str2) {
                first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                const tmp12 = str2.match(/[^\.]+\.[^\.]+$/) || [];
              }
              let items1 = [str2, first];
              const tmp10 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
            }
            const _Array = Array;
            let tmp14;
            if (Array.isArray(items1)) {
              tmp14 = items1;
            }
            if (!tmp14) {
              tmp14 = (function vt(items, arg1) {
                let tmp6 = null;
                if (null != items) {
                  const _Symbol = Symbol;
                  let prop = typeof Symbol !== "undefined";
                  if (typeof Symbol !== "undefined") {
                    const _Symbol2 = Symbol;
                    prop = items[Symbol.iterator];
                  }
                  if (!prop) {
                    prop = items[Symbol.iterator];
                  }
                  tmp6 = prop;
                }
                if (null != tmp6) {
                  let flag2 = false;
                  try {
                    items = [];
                    try {
                      const call = tmp9.call;
                      if (typeof call === "unknown") {
                        let iter = tmp9();
                      } else {
                        iter = call(items);
                      }
                      const iter3 = iter.next();
                      const done = iter3.done;
                      let tmp11 = done;
                      if (!done) {
                        items.push(iter4.value);
                        if (!arg1) {
                          const iter5 = iter2.next();
                          const done2 = iter5.done;
                          tmp11 = done2;
                          while (!done2) {
                            let arr = items.push(iter6.value);
                            if (!arg1) {
                              continue;
                            } else if (items.length === arg1) {
                              break;
                            }
                            continue;
                          }
                        }
                      }
                      try {
                        let tmp19 = !tmp11;
                        if (!tmp11) {
                          tmp19 = null != iter2.return;
                        }
                        if (tmp19) {
                          iter2.return();
                        }
                        if (flag2) {
                          throw tmp5;
                        } else {
                          return items;
                        }
                      } catch (tmp25) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp25;
                        }
                      }
                    } catch (tmp5) {
                      flag2 = true;
                    }
                  } catch (tmp28) {
                    try {
                      let tmp30 = !tmp3;
                      if (!tmp3) {
                        tmp30 = tmp4 != obj.return;
                      }
                      if (tmp30) {
                        obj.return();
                      }
                      if (tmp2) {
                        throw tmp;
                      } else {
                        throw tmp28;
                      }
                    } catch (tmp36) {
                      if (tmp2) {
                        throw tmp;
                      } else {
                        throw tmp36;
                      }
                    }
                  }
                }
              })(items1, 2);
            }
            if (!tmp14) {
              tmp14 = Pe(items1, 2);
            }
            if (tmp14) {
              [tmp6.video_source_hostname, tmp6.video_source_domain] = tmp14;
            } else {
              const _TypeError = TypeError;
              const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              throw typeError;
            }
          }
          items1 = ["localhost"];
        }
        delete tmp4[tmp3];
        const playbackEventDispatcher = self.playbackEventDispatcher;
        playbackEventDispatcher.send(arg0, merged);
        const data = self.data;
        data.view_sequence_number = data.view_sequence_number + 1;
        const data2 = self.data;
        data2.player_sequence_number = data2.player_sequence_number + 1;
        if (!set.has(arg0)) {
          self._restartHeartBeat();
        }
        if ("viewend" === arg0) {
          const data3 = self.data;
          delete tmp2[tmp];
        }
      }
    }
  },
  {
    key: "_resetView",
    value(arg0) {
      this.emit("viewend");
      this.send("viewend");
      this.emit("viewinit", arg0);
    }
  },
  {
    key: "_updateStateData",
    value() {
      const self = this;
      let stateData = this.getStateData();
      if (typeof this.stateDataTranslator === "function") {
        try {
          stateData = self.stateDataTranslator(stateData);
        } catch (tmp4) {
          const log = tmp.mux.log;
          log.warn("Exception in stateDataTranslator translator callback.", tmp4);
        }
      }
      const data = self.data;
      if (null !== data) {
        if (undefined !== data) {
          if (data.video_cdn) {
            if (null != stateData) {
              if (stateData.video_cdn) {
                const video_cdn = stateData.video_cdn;
                stateData = qt(stateData, ["video_cdn"]);
              }
            }
          }
        }
      }
      const merged = Object.assign(self.data, stateData);
      const playheadTime = self.playheadTime;
      playheadTime._updatePlayheadTime();
      self._sanitizeData();
    }
  },
  {
    key: "_sanitizeData",
    value() {
      const self = this;
      items = ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"];
      const item = items.forEach((item, index) => {
        const parsed = parseInt(self.data[item], 10);
        let tmp2;
        if (!isNaN(parsed)) {
          tmp2 = parsed;
        }
        self.data[item] = tmp2;
      });
      const items1 = ["player_source_url", "video_source_url"];
      const item1 = items1.forEach((item, index) => {
        if (self.data[item]) {
          const formatted = self.data[item].toLowerCase();
          let tmp2 = 0 === formatted.indexOf("data:");
          if (!tmp2) {
            tmp2 = 0 === formatted.indexOf("blob:");
          }
          if (tmp2) {
            self.data[item] = "MSE style URL";
          }
        }
      });
    }
  },
  {
    key: "_resetVideoData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((item, index) => {
        if (0 === item.indexOf("video_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
    }
  },
  {
    key: "_resetViewData",
    value() {
      const self = this;
      const keys = Object.keys(this.data);
      const item = keys.forEach((item, index) => {
        if (0 === item.indexOf("view_")) {
          const data = self.data;
          delete tmp[tmp2];
        }
      });
      this.data.view_sequence_number = 1;
    }
  },
  {
    key: "_resetErrorData",
    value() {
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp2[tmp];
    }
  },
  {
    key: "_initializeViewData",
    value() {
      const self = this;
      const tmp = ee();
      this.data.view_id = tmp;
      closure_1 = tmp;
      if (this.data.player_is_paused) {
        self.one("play", function o() {
          if (closure_1 === self.data.view_id) {
            const data = self.data;
            data.player_view_count = data.player_view_count || 0;
            data.player_view_count = data.player_view_count + 1;
          }
        });
      } else if (tmp === self.data.view_id) {
        let data = self.data;
        data.player_view_count = data.player_view_count || 0;
        data.player_view_count = data.player_view_count + 1;
      }
    }
  },
  {
    key: "_restartHeartBeat",
    value() {
      const self = this;
      window.clearTimeout(this._heartBeatTimeout);
      this._heartBeatTimeout = window.setTimeout(() => {
        if (!self.data.player_is_paused) {
          self.emit("hb");
        }
      }, 10000);
    }
  },
  {
    key: "addHLSJS",
    value(hlsjs) {
      const self = this;
      if (hlsjs.hlsjs) {
        if (self.hlsjs) {
          const log2 = self.mux.log;
          log2.warn("An instance of HLS.js is already being monitored for this player.");
        } else {
          self.hlsjs = hlsjs.hlsjs;
          ({ mux, id } = self);
          ({ hlsjs, Hls } = hlsjs);
          if (!Hls) {
            const _window = window;
            Hls = window.Hls;
          }
          ((mux, id, hlsjs, arg3, Hls) => {
            closure_0 = mux;
            closure_1 = id;
            closure_2 = hlsjs;
            let tmp;
            if (arguments.length > 4) {
              tmp = arguments[4];
            }
            closure_3 = tmp;
            const log = mux.log;
            const secondsToMs = mux.utils.secondsToMs;
            function s(arg0) {

            }
            if (closure_47.exists()) {
              function u(arg0, arg1) {

              }
              const fn = function f(arg0, arg1) {
                ({ levels, audioTracks, url, stats, networkDetails, sessionData } = arg1);
                let obj = {};
                let obj2 = obj;
                obj = {};
                obj3 = obj;
                const item = levels.forEach((item, index) => {
                  obj2[index] = { width: item.width, height: item.height, bitrate: item.bitrate, attrs: item.attrs };
                });
                const item1 = audioTracks.forEach((item, index) => {
                  obj3[index] = { name: item.name, language: item.lang, bitrate: item.bitrate };
                });
                if (typeof closure_1_52 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (stats) {
                  const navigationStartResult = closure_1_47.navigationStart();
                  let loading = stats.loading;
                  let round = loading ? loading.start : stats.trequest;
                  let _Math = loading ? loading.first : stats.tfirst;
                  loading = { bytesLoaded: null, requestStart: null, responseStart: null, responseEnd: null };
                  loading[0] = stats.total;
                  const _Math2 = Math;
                  loading[1] = Math.round(navigationStartResult + round);
                  const _Math3 = Math;
                  round = Math.round;
                  loading[2] = round(navigationStartResult + _Math);
                  _Math = Math;
                  stats = Math.round;
                  loading[3] = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                } else {
                  obj = {};
                  ({ bytesLoaded, requestStart, responseStart, responseEnd } = obj);
                  if (typeof closure_1_51 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  for (const key10049 in sessionData) {
                    let tmp33 = sessionData[key10049];
                    let prop = tmp33["DATA-ID"];
                    if (-1 === prop.search("io.litix.data.")) {
                      continue;
                    } else {
                      ({ DATA-ID: str3, VALUE: obj5[str3.replace(str3, "io.litix.data.", "")] } = tmp33);
                      continue;
                    }
                    continue;
                  }
                  obj2 = {};
                  closure_1_48(obj2, {});
                  obj3 = { request_event_type: null, request_bytes_loaded: null, request_start: null, request_response_start: null, request_response_end: null, request_type: "manifest", request_hostname: null, request_response_headers: null, request_rendition_lists: null };
                  obj3[0] = arg0;
                  obj3[1] = bytesLoaded;
                  obj3[2] = requestStart;
                  obj3[3] = responseStart;
                  obj3[4] = responseEnd;
                  if (typeof closure_1_44 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof closure_1_45 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof url === "string") {
                    if ("" !== url) {
                      const str4 = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                      let first;
                      if (str4) {
                        first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                        const tmp18 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                      }
                      items = [str4, first];
                      const tmp16 = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                    }
                    obj3[6] = items[0];
                    if (typeof closure_1_53 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    let tmp20;
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str5 = networkDetails.getAllResponseHeaders();
                        const obj4 = {};
                        obj2 = obj4;
                        if (!str5) {
                          str5 = "";
                        }
                        const parts = str5.trim().split(/[\r\n]+/);
                        const item2 = parts.forEach((item, index) => {
                          if (item) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp = str2;
                            if (str2) {
                              let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp3) {
                                const formatted = str2.toLowerCase();
                                tmp3 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp = tmp3;
                            }
                            if (tmp) {
                              obj[str2] = parts.join(": ");
                            }
                          }
                        });
                        tmp20 = obj4;
                        const str6 = str5.trim();
                      }
                    }
                    obj3[7] = tmp20;
                    const obj5 = { media: null, audio: null, video: null };
                    obj5[0] = obj;
                    obj5[1] = obj;
                    obj5[2] = {};
                    obj3[8] = obj5;
                    const _Object = Object;
                    const _Object2 = Object;
                    if (Object.getOwnPropertyDescriptors) {
                      const _Object6 = Object;
                      _Object2.defineProperties(obj2, Object.getOwnPropertyDescriptors(obj3));
                    } else {
                      const _Object2Result = _Object2(obj3);
                      obj2 = _Object2Result;
                      const _Object3 = Object;
                      const keys = Object.keys(_Object2Result);
                      const _Object4 = Object;
                      if (Object.getOwnPropertySymbols) {
                        const _Object5 = Object;
                        const push = keys.push;
                        push.apply(keys, Object.getOwnPropertySymbols(_Object2Result));
                      }
                      const item3 = keys.forEach((item, index) => {
                        Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                      });
                    }
                    if (typeof u !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj2.emit(obj3, "requestcompleted", obj2);
                  }
                  items = ["localhost"];
                }
              };
              hlsjs.on(tmp.Events.MANIFEST_LOADED, fn);
              const fn2 = function g(arg0, level) {
                ({ details, networkDetails, stats } = level);
                if (typeof closure_1_52 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (stats) {
                  const navigationStartResult = closure_1_47.navigationStart();
                  let loading = stats.loading;
                  let round = loading ? loading.start : stats.trequest;
                  let _Math = loading ? loading.first : stats.tfirst;
                  loading = { bytesLoaded: null, requestStart: null, responseStart: null, responseEnd: null };
                  loading[0] = stats.total;
                  const _Math2 = Math;
                  loading[1] = Math.round(navigationStartResult + round);
                  const _Math3 = Math;
                  round = Math.round;
                  loading[2] = round(navigationStartResult + _Math);
                  _Math = Math;
                  stats = Math.round;
                  loading[3] = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                } else {
                  let obj = {};
                  ({ bytesLoaded, requestStart, responseStart, responseEnd } = obj);
                  if (typeof s !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const _parseInt = parseInt;
                  const parsed = parseInt(closure_3.version);
                  let tmp11 = 1 === parsed;
                  if (tmp11) {
                    tmp11 = null !== tmp6.programDateTime;
                  }
                  let programDateTime;
                  if (tmp11) {
                    programDateTime = tmp6.programDateTime;
                  }
                  let tmp14 = 0 === parsed;
                  if (tmp14) {
                    tmp14 = null !== tmp6.pdt;
                  }
                  if (tmp14) {
                    programDateTime = tmp6.pdt;
                  }
                  const sum = programDateTime + secondsToMs(tmp6.duration);
                  obj = { request_event_type: null, request_bytes_loaded: null, request_start: null, request_response_start: null, request_response_end: null, request_current_level: null, request_type: "manifest", request_hostname: null, request_response_headers: null, video_holdback: null, video_part_holdback: null, video_part_target_duration: null, video_target_duration: null, video_source_is_live: null, player_manifest_newest_program_time: null };
                  obj[0] = arg0;
                  obj[1] = bytesLoaded;
                  obj[2] = requestStart;
                  obj[3] = responseStart;
                  obj[4] = responseEnd;
                  obj[5] = level.level;
                  if (typeof closure_1_44 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof closure_1_45 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof details.url === "string") {
                    if ("" !== str) {
                      const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                      let first;
                      if (str2) {
                        first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                        const tmp24 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                      }
                      items = [str2, first];
                      const tmp22 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                    }
                    obj[7] = items[0];
                    if (typeof closure_1_53 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    let tmp26;
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str3 = networkDetails.getAllResponseHeaders();
                        obj = {};
                        if (!str3) {
                          str3 = "";
                        }
                        const parts = str3.trim().split(/[\r\n]+/);
                        const item = parts.forEach((item, index) => {
                          if (item) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp = str2;
                            if (str2) {
                              let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp3) {
                                const formatted = str2.toLowerCase();
                                tmp3 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp = tmp3;
                            }
                            if (tmp) {
                              obj[str2] = parts.join(": ");
                            }
                          }
                        });
                        tmp26 = obj;
                        const str4 = str3.trim();
                      }
                    }
                    obj[8] = tmp26;
                    obj[9] = details.holdBack && secondsToMs(details.holdBack);
                    const tmp28 = details.holdBack && secondsToMs(details.holdBack);
                    obj[10] = details.partHoldBack && secondsToMs(details.partHoldBack);
                    const tmp29 = details.partHoldBack && secondsToMs(details.partHoldBack);
                    obj[11] = details.partTarget && secondsToMs(details.partTarget);
                    const tmp30 = details.partTarget && secondsToMs(details.partTarget);
                    obj[12] = details.targetduration && secondsToMs(details.targetduration);
                    obj[13] = details.live;
                    const _isNaN = isNaN;
                    let tmp32;
                    if (!isNaN(sum)) {
                      tmp32 = sum;
                    }
                    obj[14] = tmp32;
                    if (typeof u !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj.emit(closure_1, "requestcompleted", obj);
                    const tmp31 = details.targetduration && secondsToMs(details.targetduration);
                  }
                  items = ["localhost"];
                }
              };
              hlsjs.on(tmp.Events.LEVEL_LOADED, fn2);
              fn3 = function k(arg0, details) {
                ({ networkDetails, stats } = details);
                if (typeof closure_1_52 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (stats) {
                  const navigationStartResult = closure_1_47.navigationStart();
                  let loading = stats.loading;
                  let round = loading ? loading.start : stats.trequest;
                  let _Math = loading ? loading.first : stats.tfirst;
                  loading = { bytesLoaded: null, requestStart: null, responseStart: null, responseEnd: null };
                  loading[0] = stats.total;
                  const _Math2 = Math;
                  loading[1] = Math.round(navigationStartResult + round);
                  const _Math3 = Math;
                  round = Math.round;
                  loading[2] = round(navigationStartResult + _Math);
                  _Math = Math;
                  stats = Math.round;
                  loading[3] = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                } else {
                  let obj = { request_event_type: null, request_bytes_loaded: null, request_start: null, request_response_start: null, request_response_end: null, request_type: "manifest", request_hostname: null, request_response_headers: null };
                  obj[0] = arg0;
                  ({ bytesLoaded: obj3[1], requestStart: obj3[2], responseStart: obj3[3], responseEnd: obj3[4] } = obj);
                  if (typeof closure_1_44 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof closure_1_45 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof details.details.url === "string") {
                    if ("" !== str) {
                      const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                      let first;
                      if (str2) {
                        first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                        const tmp12 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                      }
                      items = [str2, first];
                      const tmp10 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                    }
                    obj[6] = items[0];
                    if (typeof closure_1_53 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    let tmp14;
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str3 = networkDetails.getAllResponseHeaders();
                        obj = {};
                        if (!str3) {
                          str3 = "";
                        }
                        const parts = str3.trim().split(/[\r\n]+/);
                        const item = parts.forEach((item, index) => {
                          if (item) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp = str2;
                            if (str2) {
                              let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp3) {
                                const formatted = str2.toLowerCase();
                                tmp3 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp = tmp3;
                            }
                            if (tmp) {
                              obj[str2] = parts.join(": ");
                            }
                          }
                        });
                        tmp14 = obj;
                        const str4 = str3.trim();
                      }
                    }
                    obj[7] = tmp14;
                    if (typeof u !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj.emit(closure_1, "requestcompleted", obj);
                  }
                  items = ["localhost"];
                }
              };
              hlsjs.on(tmp.Events.AUDIO_TRACK_LOADED, fn3);
              fn4 = function h(arg0, arg1) {
                ({ stats, networkDetails, frag } = arg1);
                if (!stats) {
                  stats = frag.stats;
                }
                if (typeof closure_1_52 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (stats) {
                  const navigationStartResult = closure_1_47.navigationStart();
                  let loading = stats.loading;
                  let round = loading ? loading.start : stats.trequest;
                  let _Math = loading ? loading.first : stats.tfirst;
                  loading = { bytesLoaded: null, requestStart: null, responseStart: null, responseEnd: null };
                  loading[0] = stats.total;
                  const _Math2 = Math;
                  loading[1] = Math.round(navigationStartResult + round);
                  const _Math3 = Math;
                  round = Math.round;
                  loading[2] = round(navigationStartResult + _Math);
                  _Math = Math;
                  stats = Math.round;
                  loading[3] = stats(navigationStartResult + (loading ? loading.end : stats.tload));
                } else {
                  let obj = {};
                  ({ bytesLoaded, requestStart, responseStart, responseEnd } = obj);
                  if (networkDetails) {
                    if (typeof closure_1_53 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (networkDetails) {
                      if (typeof networkDetails.getAllResponseHeaders === "function") {
                        let str = networkDetails.getAllResponseHeaders();
                        obj = {};
                        if (!str) {
                          str = "";
                        }
                        const parts = str.trim().split(/[\r\n]+/);
                        const item = parts.forEach((item, index) => {
                          if (item) {
                            const parts = item.split(": ");
                            const str2 = parts.shift();
                            let tmp = str2;
                            if (str2) {
                              let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                              if (!tmp3) {
                                const formatted = str2.toLowerCase();
                                tmp3 = 0 === formatted.indexOf("x-litix-");
                              }
                              tmp = tmp3;
                            }
                            if (tmp) {
                              obj[str2] = parts.join(": ");
                            }
                          }
                        });
                        const str2 = str.trim();
                      }
                    }
                  }
                  obj = { request_event_type: null, request_bytes_loaded: null, request_start: null, request_response_start: null, request_response_end: null, request_hostname: null, request_id: null, request_response_headers: null, request_media_duration: null, request_url: null };
                  obj[0] = arg0;
                  obj[1] = bytesLoaded;
                  obj[2] = requestStart;
                  obj[3] = responseStart;
                  obj[4] = responseEnd;
                  if (!networkDetails) {
                    obj[5] = undefined;
                    let tmp17;
                    if (tmp6) {
                      obj = tmp6;
                      let tmp18;
                      if (tmp6) {
                        const found = closure_1_49.find((item, index) => undefined !== obj[item]);
                        let tmp21;
                        if (found) {
                          tmp21 = tmp6[found];
                        }
                        tmp18 = tmp21;
                      }
                      tmp17 = tmp18;
                    }
                    obj[6] = tmp17;
                    obj[7] = tmp6;
                    obj[8] = frag.duration;
                    let responseURL;
                    if (null != networkDetails) {
                      responseURL = networkDetails.responseURL;
                    }
                    obj[9] = responseURL;
                    if ("main" === frag.type) {
                      obj.request_type = "media";
                      obj.request_current_level = frag.level;
                      obj.request_video_width = hlsjs.levels[frag.level] || {}.width;
                      obj.request_video_height = hlsjs.levels[frag.level] || {}.height;
                      obj.request_labeled_bitrate = hlsjs.levels[frag.level] || {}.bitrate;
                    } else {
                      obj.request_type = frag.type;
                    }
                    if (typeof u !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj.emit(closure_1, "requestcompleted", obj);
                  } else {
                    if (typeof closure_1_44 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (typeof closure_1_45 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    if (typeof networkDetails.responseURL === "string") {
                      if ("" !== str3) {
                        const str4 = str3.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                        let first;
                        if (str4) {
                          first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                          const tmp15 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                        }
                        items = [str4, first];
                        const tmp13 = str3.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                      }
                      const first1 = items[0];
                    }
                    items = ["localhost"];
                  }
                }
              };
              hlsjs.on(tmp.Events.FRAG_LOADED, fn4);
              fn5 = function c(arg0, frag) {
                frag = frag.frag;
                if (typeof s !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const parsed = parseInt(closure_3.version);
                let tmp2 = 1 === parsed;
                if (tmp2) {
                  tmp2 = null !== frag.programDateTime;
                }
                let programDateTime;
                if (tmp2) {
                  programDateTime = frag.programDateTime;
                }
                let tmp5 = 0 === parsed;
                if (tmp5) {
                  tmp5 = null !== frag.pdt;
                }
                if (tmp5) {
                  programDateTime = frag.pdt;
                }
                if (typeof u !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                mux.emit(closure_1, "fragmentchange", { currentFragmentPDT: programDateTime, currentFragmentStart: secondsToMs(frag.start) });
              };
              hlsjs.on(tmp.Events.FRAG_CHANGED, fn5);
              fn6 = function m(arg0, url) {
                ({ details, response, frag, networkDetails } = url);
                let str;
                ({ type, fatal } = url);
                if (null != frag) {
                  str = frag.url;
                }
                if (!str) {
                  str = url.url;
                }
                if (!str) {
                  str = "";
                }
                if (networkDetails) {
                  if (typeof closure_1_53 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (networkDetails) {
                    if (typeof networkDetails.getAllResponseHeaders === "function") {
                      let str2 = networkDetails.getAllResponseHeaders();
                      let obj = {};
                      if (!str2) {
                        str2 = "";
                      }
                      let parts = str2.trim().split(/[\r\n]+/);
                      const item = parts.forEach((item, index) => {
                        if (item) {
                          const parts = item.split(": ");
                          const str2 = parts.shift();
                          let tmp = str2;
                          if (str2) {
                            let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
                            if (!tmp3) {
                              const formatted = str2.toLowerCase();
                              tmp3 = 0 === formatted.indexOf("x-litix-");
                            }
                            tmp = tmp3;
                          }
                          if (tmp) {
                            obj[str2] = parts.join(": ");
                          }
                        }
                      });
                      const str3 = str2.trim();
                    }
                  }
                }
                if (tmp6) {
                  obj = { request_error: null, request_url: null, request_hostname: null, request_id: null, request_type: null, request_error_code: null, request_error_text: null };
                  obj[0] = details;
                  obj[1] = str;
                  if (typeof closure_1_44 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof closure_1_45 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof str === "string") {
                    if ("" !== str) {
                      const str4 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                      let first;
                      if (str4) {
                        first = str4.match(/[^\.]+\.[^\.]+$/) || [][0];
                        const tmp12 = str4.match(/[^\.]+\.[^\.]+$/) || [];
                      }
                      items = [str4, first];
                      const tmp10 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                    }
                    obj[2] = items[0];
                    let tmp13;
                    if (tmp) {
                      obj = tmp;
                      let tmp14;
                      if (tmp) {
                        const found = closure_1_49.find((item, index) => undefined !== obj[item]);
                        let tmp17;
                        if (found) {
                          tmp17 = tmp[found];
                        }
                        tmp14 = tmp17;
                      }
                      tmp13 = tmp14;
                    }
                    obj[3] = tmp13;
                    let str6 = "media";
                    if (details !== closure_3.ErrorDetails.FRAG_LOAD_ERROR) {
                      str6 = "media";
                      if (details !== closure_3.ErrorDetails.FRAG_LOAD_TIMEOUT) {
                        let str7 = "audio";
                        if (details !== closure_3.ErrorDetails.AUDIO_TRACK_LOAD_ERROR) {
                          str7 = "audio";
                          if (details !== closure_3.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT) {
                            let str9 = "subtitle";
                            if (details !== closure_3.ErrorDetails.SUBTITLE_LOAD_ERROR) {
                              str9 = "subtitle";
                              if (details !== closure_3.ErrorDetails.SUBTITLE_LOAD_TIMEOUT) {
                                if (details === closure_3.ErrorDetails.KEY_LOAD_ERROR) {
                                  let str10 = "encryption";
                                } else {
                                  str10 = "manifest";
                                }
                                str9 = str10;
                              }
                            }
                            str7 = str9;
                          }
                        }
                        str6 = str7;
                      }
                    }
                    obj[4] = str6;
                    let code;
                    if (null != response) {
                      code = response.code;
                    }
                    obj[5] = code;
                    let text;
                    if (null != response) {
                      text = response.text;
                    }
                    obj[6] = text;
                    if (typeof u !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    obj.emit(closure_1, "requestfailed", obj);
                  }
                  items = ["localhost"];
                }
                if (fatal) {
                  let str13 = "";
                  if (str) {
                    const concat = "url: ".concat;
                    str13 = "url: ".concat(str, "\n");
                  }
                  let str16 = "";
                  const combined = "".concat(str13);
                  if (response) {
                    if (response.code) {
                      const concat2 = "response: ".concat;
                      const combined1 = "response: ".concat(response.code, ", ");
                      str16 = combined1.concat(response.text, "\n");
                    } else {
                      str16 = "";
                    }
                  }
                  let str20 = "";
                  const sum = combined + "".concat(str16);
                  if (url.reason) {
                    const concat3 = "failure reason: ".concat;
                    str20 = "failure reason: ".concat(url.reason, "\n");
                  }
                  let str23 = "";
                  const sum1 = sum + "".concat(str20);
                  if (url.level) {
                    const concat4 = "level: ".concat;
                    str23 = "level: ".concat(url.level, "\n");
                  }
                  let str26 = "";
                  const sum2 = sum1 + "".concat(str23);
                  if (url.parent) {
                    const concat5 = "parent stream controller: ".concat;
                    str26 = "parent stream controller: ".concat(url.parent, "\n");
                  }
                  let str29 = "";
                  const sum3 = sum2 + "".concat(str26);
                  if (url.buffer) {
                    const concat6 = "buffer length: ".concat;
                    str29 = "buffer length: ".concat(url.buffer, "\n");
                  }
                  let str32 = "";
                  const sum4 = sum3 + "".concat(str29);
                  if (url.error) {
                    const concat7 = "error: ".concat;
                    str32 = "error: ".concat(url.error, "\n");
                  }
                  let str35 = "";
                  const sum5 = sum4 + "".concat(str32);
                  if (url.event) {
                    const concat8 = "event: ".concat;
                    str35 = "event: ".concat(url.event, "\n");
                  }
                  let str38 = "";
                  const sum6 = sum5 + "".concat(str35);
                  if (url.err) {
                    let message;
                    if (null !== url.err) {
                      if (undefined !== err) {
                        message = err.message;
                      }
                    }
                    str38 = "error message: ".concat(message, "\n");
                  }
                  obj = { player_error_code: null, player_error_message: null, player_error_context: null };
                  obj[0] = type;
                  obj[1] = details;
                  obj[2] = sum6 + "".concat(str38);
                  if (typeof u !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  obj.emit(closure_1, "error", obj);
                }
                tmp6 = details === closure_3.ErrorDetails.MANIFEST_LOAD_ERROR || details === closure_3.ErrorDetails.MANIFEST_LOAD_TIMEOUT || details === closure_3.ErrorDetails.FRAG_LOAD_ERROR || details === closure_3.ErrorDetails.FRAG_LOAD_TIMEOUT || details === closure_3.ErrorDetails.LEVEL_LOAD_ERROR || details === closure_3.ErrorDetails.LEVEL_LOAD_TIMEOUT || details === closure_3.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || details === closure_3.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || details === closure_3.ErrorDetails.SUBTITLE_LOAD_ERROR || details === closure_3.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || details === closure_3.ErrorDetails.KEY_LOAD_ERROR || details === closure_3.ErrorDetails.KEY_LOAD_TIMEOUT;
              };
              hlsjs.on(tmp.Events.ERROR, fn6);
              fn7 = function w(request_event_type, frag) {
                frag = frag.frag;
                let str = frag;
                if (frag) {
                  str = frag._url;
                }
                if (!str) {
                  str = "";
                }
                const obj = { request_event_type, request_url: str, request_type: "media", request_hostname: null };
                if (typeof closure_1_44 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof closure_1_45 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof str === "string") {
                  if ("" !== str) {
                    const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                    let first;
                    if (str2) {
                      first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                      const tmp4 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                    }
                    items = [str2, first];
                    const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                  }
                  obj[3] = items[0];
                  if (typeof u !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  mux.emit(closure_1, "requestcanceled", obj);
                }
                items = ["localhost"];
              };
              hlsjs.on(tmp.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
              fn8 = function x(arg0, arg1) {
                if (hlsjs.levels[arg1.level]) {
                  if (tmp.attrs) {
                    if (tmp.attrs.BANDWIDTH) {
                      const BANDWIDTH = tmp.attrs.BANDWIDTH;
                      const _parseFloat = parseFloat;
                      const parsed = parseFloat(tmp.attrs["FRAME-RATE"]);
                      const _isNaN = isNaN;
                      if (!isNaN(parsed)) {
                        const tmp4 = parsed;
                      }
                      if (BANDWIDTH) {
                        const obj = { video_source_fps: null, video_source_bitrate: null, video_source_width: null, video_source_height: null, video_source_rendition_name: null, video_source_codec: null };
                        obj[0] = tmp4;
                        obj[1] = BANDWIDTH;
                        ({ width: obj[2], height: obj[3], name: obj[4] } = tmp);
                        let videoCodec;
                        if (null != tmp) {
                          videoCodec = tmp.videoCodec;
                        }
                        obj[5] = videoCodec;
                        if (typeof u !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        mux.emit(closure_1, "renditionchange", obj);
                      } else {
                        log.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                      }
                    }
                  }
                }
              };
              hlsjs.on(tmp.Events.LEVEL_SWITCHED, fn8);
              hlsjs._stopMuxMonitor = () => {
                hlsjs.off(closure_3.Events.MANIFEST_LOADED, fn);
                hlsjs.off(closure_3.Events.LEVEL_LOADED, fn2);
                hlsjs.off(closure_3.Events.AUDIO_TRACK_LOADED, fn3);
                hlsjs.off(closure_3.Events.FRAG_LOADED, fn4);
                hlsjs.off(closure_3.Events.FRAG_CHANGED, fn5);
                hlsjs.off(closure_3.Events.ERROR, fn6);
                hlsjs.off(closure_3.Events.FRAG_LOAD_EMERGENCY_ABORTED, fn7);
                hlsjs.off(closure_3.Events.LEVEL_SWITCHED, fn8);
                hlsjs.off(closure_3.Events.DESTROYING, hlsjs._stopMuxMonitor);
                delete tmp2[tmp];
              };
              hlsjs.on(tmp.Events.DESTROYING, hlsjs._stopMuxMonitor);
            } else {
              log.warn("performance timing not supported. Not tracking HLS.js.");
            }
          })(mux, id, hlsjs, {}, Hls);
        }
      } else {
        let log = self.mux.log;
        log.warn("You must pass a valid hlsjs instance in order to track it.");
      }
    }
  },
  {
    key: "removeHLSJS",
    value() {
      const self = this;
      if (this.hlsjs) {
        const hlsjs = self.hlsjs;
        let tmp = hlsjs;
        if (hlsjs) {
          tmp = typeof hlsjs._stopMuxMonitor === "function";
        }
        if (tmp) {
          hlsjs._stopMuxMonitor();
        }
        self.hlsjs = undefined;
      }
    }
  },
  {
    key: "addDashJS",
    value(dashjs) {
      const self = this;
      if (dashjs.dashjs) {
        if (self.dashjs) {
          const log3 = self.mux.log;
          log3.warn("An instance of Dash.js is already being monitored for this player.");
        } else {
          self.dashjs = dashjs.dashjs;
          const mux = self.mux;
          dashjs = dashjs.dashjs;
          if (typeof Ct !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const id = self.id;
          const log2 = mux.log;
          if (dashjs) {
            if (dashjs.on) {
              let tmp4 = ((dashjs) => {
                try {
                  const getVersion = dashjs.getVersion;
                  let first;
                  if (null !== getVersion) {
                    if (undefined !== tmp2) {
                      const call = tmp2.call;
                      if (typeof call === "unknown") {
                        let callResult = tmp2();
                      } else {
                        callResult = call(dashjs);
                      }
                      if (null !== callResult) {
                        if (undefined !== str) {
                          const parts = str.split(".");
                          first = parts.map((item, index) => parseInt(item))[0];
                        }
                      }
                    }
                  }
                  return first;
                } catch (err) {
                  return false;
                }
              })(dashjs);
              function o(arg0, arg1) {

              }
              const fn = function s(arg0) {
                ({ data, type } = arg0);
                if (!data) {
                  data = {};
                }
                const obj = { request_event_type: type, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: null, request_url: null };
                if (typeof closure_1_44 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof re !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof data.url === "string") {
                  if ("" !== str) {
                    const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                    let first;
                    if (str2) {
                      first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                      const tmp4 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                    }
                    items = [str2, first];
                    const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                  }
                  obj[6] = items[0];
                  obj[7] = str;
                  if (typeof o !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  mux.emit(id, "requestcompleted", obj);
                }
                items = ["localhost"];
              };
              dashjs.on("manifestLoaded", fn);
              closure_6 = {};
              function f(arg0) {

              }
              const fn2 = function k(arg0) {
                ({ chunk, type, request } = arg0);
                if (!chunk) {
                  chunk = {};
                }
                ({ type: type2, bitrateList } = chunk.mediaInfo || {});
                let obj = {};
                if (!bitrateList) {
                  bitrateList = [];
                }
                const item = bitrateList.forEach((item, index) => {
                  obj[index] = {};
                  ({ width: obj[index].width, height: obj[index].height, bandwidth: obj[index].bitrate } = item);
                  obj[index].attrs = {};
                });
                if ("video" === type2) {
                  closure_6.video = obj;
                  let tmp2 = closure_6;
                } else if ("audio" === type2) {
                  closure_6.audio = obj;
                  tmp2 = closure_6;
                } else {
                  tmp2 = closure_6;
                  closure_6.media = obj;
                }
                const tmp5 = Nt(request, dashjs);
                obj = { request_event_type: type, request_start: tmp5.requestStart, request_response_start: tmp5.requestResponseStart, request_response_end: tmp5.requestResponseEnd, request_bytes_loaded: -1, request_type: `${type2}_init`, request_response_headers: tmp5.requestResponseHeaders, request_hostname: tmp5.requestHostname, request_id: tmp5.requestId, request_url: tmp5.requestUrl, request_media_duration: tmp5.requestMediaDuration, request_rendition_lists: tmp2 };
                if (typeof o !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                obj.emit(id, "requestcompleted", obj);
              };
              if (tmp4 >= 4) {
                dashjs.on("initFragmentLoaded", fn2);
              } else {
                dashjs.on("initFragmentLoaded", (fragmentModel) => {
                  fragmentModel = fragmentModel.fragmentModel;
                  ({ type, chunk } = fragmentModel);
                  if (typeof f !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let tmp = null;
                  if (typeof fragmentModel.getRequests === "function") {
                    const requests = fragmentModel.getRequests({ state: "executed" });
                    let tmp2 = null;
                    if (0 !== requests.length) {
                      tmp2 = requests[requests.length - 1];
                    }
                    tmp = tmp2;
                  }
                  fn2({ type, request: tmp, chunk });
                });
              }
              fn3 = function c(arg0) {
                ({ chunk, type, request } = arg0);
                if (!chunk) {
                  chunk = {};
                }
                ({ mediaInfo, start } = chunk);
                if (!mediaInfo) {
                  mediaInfo = {};
                }
                const type2 = mediaInfo.type;
                ({ requestStart, requestResponseStart, requestResponseEnd, requestBytesLoaded, requestResponseHeaders, requestMediaDuration, requestHostname, requestUrl, requestId } = Nt(request, dashjs));
                const qualityFor = dashjs.getQualityFor(type2);
                const bitrateList = dashjs.getCurrentTrackFor(type2).bitrateList;
                if (bitrateList) {
                  let obj = { currentLevel: null, renditionWidth: null, renditionHeight: null, renditionBitrate: null };
                  obj[0] = qualityFor;
                  obj[1] = bitrateList[qualityFor].width || null;
                  obj[2] = bitrateList[qualityFor].height || null;
                  obj[3] = bitrateList[qualityFor].bandwidth;
                } else {
                  obj = {};
                }
                obj = { request_event_type: type, request_start: requestStart, request_response_start: requestResponseStart, request_response_end: requestResponseEnd, request_bytes_loaded: requestBytesLoaded, request_type: type2, request_response_headers: requestResponseHeaders, request_hostname: requestHostname, request_id: requestId, request_url: requestUrl, request_media_start_time: start, request_media_duration: requestMediaDuration, request_current_level: obj.currentLevel, request_labeled_bitrate: obj.renditionBitrate, request_video_width: obj.renditionWidth, request_video_height: obj.renditionHeight };
                if (typeof o !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                mux.emit(id, "requestcompleted", obj);
              };
              if (tmp4 >= 4) {
                dashjs.on("mediaFragmentLoaded", fn3);
              } else {
                dashjs.on("mediaFragmentLoaded", (fragmentModel) => {
                  fragmentModel = fragmentModel.fragmentModel;
                  ({ type, chunk } = fragmentModel);
                  if (typeof f !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let tmp = null;
                  if (typeof fragmentModel.getRequests === "function") {
                    const requests = fragmentModel.getRequests({ state: "executed" });
                    let tmp2 = null;
                    if (0 !== requests.length) {
                      tmp2 = requests[requests.length - 1];
                    }
                    tmp = tmp2;
                  }
                  fn3({ type, request: tmp, chunk });
                });
              }
              closure_10 = { video: "Array", audio: "HermesInternal", totalBitrate: "r" };
              fn4 = function x(newQuality) {
                let obj = newQuality;
                if (typeof newQuality.newQuality === "number") {
                  const mediaType = newQuality.mediaType;
                  if ("audio" === mediaType) {
                    obj = dashjs;
                    const bitrateInfoListFor = dashjs.getBitrateInfoListFor(mediaType);
                    const found = bitrateInfoListFor.find((item, index) => item.qualityIndex === obj.newQuality);
                    if (found) {
                      if (typeof found.bitrate === "number") {
                        obj = {};
                        ue(obj, found);
                        obj = { codec: null };
                        obj[0] = obj.getCurrentTrackFor(mediaType).codec;
                        const _Object5 = Object;
                        const _Object6 = Object;
                        if (Object.getOwnPropertyDescriptors) {
                          const _Object4 = Object;
                          _Object6.defineProperties(obj, Object.getOwnPropertyDescriptors(obj));
                        } else {
                          const _Object6Result = _Object6(obj);
                          obj = _Object6Result;
                          const _Object = Object;
                          const keys = Object.keys(_Object6Result);
                          const _Object2 = Object;
                          if (Object.getOwnPropertySymbols) {
                            const _Object3 = Object;
                            const push = keys.push;
                            push.apply(keys, Object.getOwnPropertySymbols(_Object6Result));
                          }
                          const item = keys.forEach((item, index) => {
                            Object.defineProperty(obj2, item, Object.getOwnPropertyDescriptor(obj3, item));
                          });
                        }
                        closure_10[mediaType] = obj;
                        let tmp6;
                        if (closure_10.video) {
                          if (typeof closure_10.video.bitrate === "number") {
                            if (closure_10.video.width) {
                              if (closure_10.video.height) {
                                const bitrate = closure_10.video.bitrate;
                                let sum = bitrate;
                                if (tmp9) {
                                  sum = bitrate + closure_10.audio.bitrate;
                                }
                                if (sum !== closure_10.totalBitrate) {
                                  closure_10.totalBitrate = sum;
                                  obj1 = { video_source_bitrate: null, video_source_height: null, video_source_width: null, video_source_codec: null };
                                  obj1[0] = sum;
                                  obj1[1] = closure_10.video.height;
                                  obj1[2] = closure_10.video.width;
                                  if (typeof pa !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  const match = closure_10.video.codec.match(/.*codecs\*?="(.*)"/);
                                  let tmp13;
                                  if (null !== match) {
                                    if (undefined !== match) {
                                      tmp13 = match[1];
                                    }
                                  }
                                  obj1[3] = tmp13;
                                  tmp6 = obj1;
                                }
                                tmp9 = closure_10.audio && typeof closure_10.audio.bitrate === "number";
                              }
                            }
                            log2.warn("have bitrate info for video but missing width/height");
                          }
                        }
                        if (tmp6) {
                          if (typeof o !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          obj.emit(obj, "renditionchange", tmp6);
                        }
                      }
                    }
                    const concat = "missing bitrate info for ".concat;
                    log2.warn("missing bitrate info for ".concat(mediaType));
                  }
                } else {
                  log2.warn("missing evt.newQuality in qualityChangeRendered event", newQuality);
                }
              };
              dashjs.on("qualityChangeRendered", fn4);
              fn5 = function v(arg0) {
                ({ request, mediaType } = arg0);
                if (!request) {
                  request = {};
                }
                const obj = { request_event_type: `${request.type}_${request.action}`, request_url: request.url, request_type: mediaType, request_hostname: null };
                if (typeof closure_1_44 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof re !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                if (typeof request.url === "string") {
                  if ("" !== str) {
                    const str2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                    let first;
                    if (str2) {
                      first = str2.match(/[^\.]+\.[^\.]+$/) || [][0];
                      const tmp4 = str2.match(/[^\.]+\.[^\.]+$/) || [];
                    }
                    items = [str2, first];
                    const tmp2 = str.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                  }
                  obj[3] = items[0];
                  if (typeof o !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  mux.emit(id, "requestcanceled", obj);
                }
                items = ["localhost"];
              };
              dashjs.on("fragmentLoadingAbandoned", fn5);
              fn6 = function p(error) {
                error = error.error;
                let request;
                if (null != error) {
                  const data = error.data;
                  if (null !== data) {
                    if (undefined !== data) {
                      request = data.request;
                    }
                  }
                }
                if (!request) {
                  request = {};
                }
                let response;
                if (null != error) {
                  const data2 = error.data;
                  if (null !== data2) {
                    if (undefined !== data2) {
                      response = data2.response;
                    }
                  }
                }
                if (!response) {
                  response = {};
                }
                let code;
                if (null != error) {
                  code = error.code;
                }
                if (27 === code) {
                  let obj = { request_error: null, request_url: null, request_hostname: null, request_type: null, request_error_code: null, request_error_text: null };
                  obj[0] = `${obj.type}_${obj.action}`;
                  obj[1] = request.url;
                  if (typeof closure_1_44 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof re !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  if (typeof request.url === "string") {
                    if ("" !== str9) {
                      const str = str9.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [][4];
                      let first;
                      if (str) {
                        first = str.match(/[^\.]+\.[^\.]+$/) || [][0];
                        const tmp5 = str.match(/[^\.]+\.[^\.]+$/) || [];
                      }
                      items = [str, first];
                      const tmp3 = str9.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [];
                    }
                    obj[2] = items[0];
                    obj[3] = request.mediaType;
                    ({ status: obj5[4], statusText: obj5[5] } = response);
                    if (typeof o !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    mux.emit(id, "requestfailed", obj);
                  }
                  items = ["localhost"];
                }
                if (null != request) {
                  if (request.url) {
                    const concat = "url: ".concat;
                    "url: ".concat(request.url, "\n");
                  }
                }
                if (null == response) {
                  let str6 = "";
                  if (null != response) {
                    str6 = "";
                  }
                  let code1;
                  const sum = tmp9 + tmp10(str6);
                  if (null != error) {
                    code1 = error.code;
                  }
                  obj = { player_error_code: null, player_error_message: null, player_error_context: null };
                  obj[0] = code1;
                  let message;
                  if (null != error) {
                    message = error.message;
                  }
                  obj[1] = message;
                  obj[2] = sum;
                  if (typeof o !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  mux.emit(id, "error", obj);
                }
                let status;
                if (null != response) {
                  status = response.status;
                }
                const combined = "response: ".concat(status, ", ");
                let statusText;
                if (null != response) {
                  statusText = response.statusText;
                }
                str6 = combined.concat(statusText, "\n");
              };
              dashjs.on("error", fn6);
              dashjs._stopMuxMonitor = () => {
                dashjs.off("manifestLoaded", fn);
                dashjs.off("initFragmentLoaded", fn2);
                dashjs.off("mediaFragmentLoaded", fn3);
                dashjs.off("qualityChangeRendered", fn4);
                dashjs.off("error", fn6);
                dashjs.off("fragmentLoadingAbandoned", fn5);
                delete tmp2[tmp];
              };
            }
          }
          log2.warn("Invalid dash.js player reference. Monitoring blocked.");
        }
      } else {
        const log = self.mux.log;
        log.warn("You must pass a valid dashjs instance in order to track it.");
      }
    }
  },
  {
    key: "removeDashJS",
    value() {
      const self = this;
      if (this.dashjs) {
        const dashjs = self.dashjs;
        let tmp = dashjs;
        if (dashjs) {
          tmp = typeof dashjs._stopMuxMonitor === "function";
        }
        if (tmp) {
          dashjs._stopMuxMonitor();
        }
        self.dashjs = undefined;
      }
    }
  }
];
N(t, items11);
let closure_101 = t;
let closure_102 = G(obj16.exports);
let closure_103 = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"];
let closure_104 = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
const GResult1 = G(obj2.exports);
if (tmp28) {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
}
let c107 = "#EXT-X-TARGETDURATION";
let c108 = "#EXT-X-PART-INF";
let c109 = "#EXT-X-SERVER-CONTROL";
let c110 = "#EXTINF";
let c111 = "#EXT-X-PROGRAM-DATE-TIME";
let c112 = "#EXT-X-VERSION";
let c113 = "#EXT-X-SESSION-DATA";
class Ve {
  constructor(arg0) {
    obj = { buffer: "", manifest: { segments: [], serverControl: {}, sessionData: {} }, currentUri: {} };
    processResult = obj.process(global);
    return obj.manifest;
  }
  process(arg0) {
    self = this;
    this.buffer = this.buffer + global;
    buffer = this.buffer;
    index = buffer.indexOf("\n");
    if (index > -1) {
      do {
        str = self.buffer;
        processLineResult = self.processLine(require("../discord_app/index.native.tsx"));
        str2 = self.buffer;
        self.buffer = str2.substring(index + 1);
        buffer1 = self.buffer;
        index = buffer1.indexOf("\n");
      } while (index > -1);
    }
    return;
  }
  processLine(arg0) {
    index = global.indexOf(":");
    if (typeof Ii !== "function") {
      str9 = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    if (-1 === index) {
      items = [];
      items[0] = global;
      items1 = items;
    } else {
      num = 0;
      items1 = [, ];
      items1[0] = require("../discord_app/index.native.tsx");
      num2 = 1;
      items1[1] = global.substring(index + 1);
    }
    first = items1[0];
    if (2 !== items1.length) {
      self = this;
      str3 = "#";
      if ("#" !== first[0]) {
        self.currentUri.uri = first;
        segments = self.manifest.segments;
        arr = segments.push(self.currentUri);
        targetDuration = self.manifest.targetDuration;
        if (targetDuration) {
          str8 = "duration";
          targetDuration = !("duration" in self.currentUri);
        }
        if (targetDuration) {
          self.currentUri.duration = self.manifest.targetDuration;
        }
        self.currentUri = {};
      } else {
        tmp33 = c107;
        if (c107 === first) {
          tmp27 = globalThis;
          _isFinite = isFinite;
          if (isFinite(undefined)) {
            num10 = 0;
            if (undefined >= 0) {
              self.manifest.targetDuration = undefined;
              setHoldBackResult = self.setHoldBack();
            }
          }
          return;
        } else {
          tmp34 = c108;
          if (c108 === first) {
            tmp24 = ct;
            num9 = 0;
            tmp25 = ct(self.manifest, items1);
            if (self.manifest.partInf.partTarget) {
              self.manifest.partTargetDuration = self.manifest.partInf.partTarget;
            }
            setHoldBackResult1 = self.setHoldBack();
          } else {
            tmp35 = c109;
            if (c109 === first) {
              tmp21 = ct;
              num8 = 0;
              tmp22 = ct(self.manifest, items1);
              setHoldBackResult2 = self.setHoldBack();
            } else {
              tmp36 = c110;
              if (c110 === first) {
                num6 = 0;
                if (0 === undefined) {
                  num7 = 0.01;
                  self.currentUri.duration = 0.01;
                } else if (undefined > 0) {
                  self.currentUri.duration = undefined;
                }
              } else {
                tmp37 = c111;
                if (c111 === first) {
                  tmp16 = globalThis;
                  _Date = Date;
                  tmp17 = new.target;
                  tmp18 = new.target;
                  date = new Date(undefined);
                  tmp20 = date;
                  if (!self.manifest.dateTimeString) {
                    self.manifest.dateTimeString = undefined;
                    self.manifest.dateTimeObject = date;
                  }
                  self.currentUri.dateTimeString = undefined;
                  self.currentUri.dateTimeObject = date;
                } else {
                  tmp38 = c112;
                  if (c112 === first) {
                    tmp14 = ct;
                    num5 = 0;
                    tmp15 = ct(self.manifest, items1);
                  } else {
                    tmp39 = c113;
                    if (c113 === first) {
                      tmp40 = Li;
                      arr5 = items1[1];
                      if (typeof Li !== "function") {
                        str12 = "Trying to call a non-function";
                        throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
                      }
                      obj = {};
                      closure_0 = obj;
                      tmp7 = undefined;
                      if (arr5) {
                        str4 = ",";
                        searchResult = arr5.search(",");
                        num3 = 0;
                        items2 = [, ];
                        items2[0] = require("../discord_app/index.native.tsx");
                        num4 = 1;
                        items2[1] = arr5.slice(searchResult + 1);
                        item = items2.forEach((item, index) => {
                          const parts = item.replace(/['"]+/g, "").split("=");
                          for (let num = 0; num < parts.length; num = num + 1) {
                            if ("DATA-ID" === parts[num]) {
                              obj["DATA-ID"] = parts[1 - num];
                            }
                            if ("VALUE" === parts[num]) {
                              obj.VALUE = parts[1 - num];
                            }
                          }
                          const str = item.replace(/['"]+/g, "");
                        });
                        obj = { data: null };
                        obj[0] = obj;
                        tmp7 = obj;
                      }
                      tmp10 = Me;
                      if (typeof Me !== "function") {
                        str13 = "Trying to call a non-function";
                        throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
                      }
                      obj1 = {};
                      tmp11 = tmp7;
                      str5 = "";
                      str6 = "io.litix.data.";
                      for (const key10063 in tmp7) {
                        tmp43 = key10063;
                        tmp44 = tmp7[key10063];
                        prop = tmp44["DATA-ID"];
                        if (-1 === prop.search("io.litix.data.")) {
                          continue;
                        } else {
                          ({ DATA-ID: str7, VALUE: obj3[str7.replace(str7, "io.litix.data.", "")] } = tmp44);
                          continue;
                        }
                        continue;
                      }
                      tmp12 = globalThis;
                      _Object = Object;
                      merged = Object.assign(self.manifest.sessionData, obj1);
                    }
                  }
                }
              }
            }
          }
        }
      }
      return;
    } else {
      tmp31 = _t;
      str10 = items1[1];
      if (typeof _t !== "function") {
        str11 = "Trying to call a non-function";
        throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
      }
      str = "yes";
      if ("yes" !== str10.toLowerCase()) {
        str2 = "no";
        if ("no" !== str10.toLowerCase()) {
          parsed = str10;
          if (-1 === str10.indexOf(":")) {
            tmp4 = globalThis;
            _parseFloat = parseFloat;
            parsed = parseFloat(str10);
          }
          tmp5 = globalThis;
          _isNaN = isNaN;
          if (isNaN(parsed)) {
            parsed = str10;
          }
        }
        tmp6 = parsed;
      }
      parsed = "yes" === str10.toLowerCase();
    }
    return;
  }
  setHoldBack() {
    ({ serverControl, targetDuration, partTargetDuration } = this.manifest);
    if (serverControl) {
      result = targetDuration;
      if (targetDuration) {
        num = 3;
        result = 3 * targetDuration;
      }
      result1 = partTargetDuration;
      if (partTargetDuration) {
        num2 = 2;
        result1 = 2 * partTargetDuration;
      }
      if (targetDuration) {
        str = "holdBack";
        targetDuration = !serverControl.hasOwnProperty("holdBack");
      }
      if (targetDuration) {
        serverControl.holdBack = result;
      }
      tmp3 = result;
      if (result) {
        tmp3 = serverControl.holdBack < result;
      }
      if (tmp3) {
        serverControl.holdBack = result;
      }
      tmp4 = partTargetDuration;
      if (partTargetDuration) {
        str2 = "partHoldBack";
        tmp4 = !serverControl.hasOwnProperty("partHoldBack");
      }
      if (tmp4) {
        num3 = 3;
        serverControl.partHoldBack = 3 * partTargetDuration;
      }
      if (partTargetDuration) {
        partTargetDuration = serverControl.partHoldBack < result1;
      }
      if (partTargetDuration) {
        serverControl.partHoldBack = result1;
      }
    }
    return;
  }
}
function ct(arg0, arg1) {
  let parts1;
  if (typeof Jr !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const str2 = arg1[0].replace("#EXT-X-", "");
  const replaced = arg1[0].replace("#EXT-X-", "").toLowerCase().replace(/-(\w)/g, (arg0) => arg0[1].toUpperCase());
  if (typeof Oi !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (arr.indexOf("=") > -1) {
    if (typeof Pi !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const parts = arg1[1].split(",");
    let merged = {};
    let num = 0;
    let tmp7 = merged;
    if (parts.length > 0) {
      while (true) {
        let str12 = parts[num];
        if (typeof Ai !== "function") {
          let throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
        }
        let obj = {};
        parts1 = str12.split("=");
        if (parts1.length > 1) {
          break;
        } else {
          let _Object = Object;
          merged = Object.assign(obj, merged);
          num = num + 1;
          tmp7 = merged;
        }
      }
      if (typeof Jr !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const replaced1 = parts1[0].toLowerCase().replace(/-(\w)/g, (arg0) => arg0[1].toUpperCase());
      if (typeof _t !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if ("yes" !== parts1[1].toLowerCase()) {
        if ("no" !== str14.toLowerCase()) {
          let parsed = str14;
          if (-1 === str14.indexOf(":")) {
            const _parseFloat2 = parseFloat;
            parsed = parseFloat(str14);
          }
          const _isNaN2 = isNaN;
          if (isNaN(parsed)) {
            parsed = str14;
          }
        }
        obj[replaced1] = parsed;
      }
      parsed = "yes" === str14.toLowerCase();
      const str13 = parts1[0].toLowerCase();
    }
    let merged1 = Object.assign(tmp7, {});
  } else {
    if (typeof _t !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if ("yes" !== arg1[1].toLowerCase()) {
      if ("no" !== str17.toLowerCase()) {
        merged1 = str17;
        if (-1 === str17.indexOf(":")) {
          const _parseFloat = parseFloat;
          merged1 = parseFloat(str17);
        }
        const _isNaN = isNaN;
        if (isNaN(merged1)) {
          merged1 = str17;
        }
      }
    }
    merged1 = "yes" === str17.toLowerCase();
  }
  arg0[replaced] = merged1;
  arr = arg1[1];
  const str3 = arg1[0].replace("#EXT-X-", "").toLowerCase();
}
function Jr(arg0) {

}
function _t(arg0) {

}
function Ai(arg0) {

}
function Pi(arg0) {

}
function Oi(arg0) {

}
function Ii(arg0, arg1) {

}
function Li(arg0) {

}
let closure_122 = {};
function ne(key10009) {
  closure_0 = key10009;
  closure_1 = arguments;
  if (typeof key10009 === "string") {
    if (ne.hasOwnProperty(key10009)) {
      const timerId = GResult.default.setTimeout(() => {
        const call = splice.call;
        if (typeof call === "unknown") {
          let spliceResult = splice(1);
        } else {
          spliceResult = call(spliceResult, 1);
        }
        ne[closure_0].apply(null, spliceResult);
      }, 0);
      const _default2 = GResult.default;
    } else {
      logger.warn(`\`${key10009}\` is an unknown task`);
    }
  } else if (typeof key10009 === "function") {
    const timerId1 = GResult.default.setTimeout(() => {
      key10009(ne);
    }, 0);
    const _default = GResult.default;
  } else {
    logger.warn(`\`${key10009}\` is invalid.`);
  }
}
function ce() {
  let doNotTrack = mod3.default.doNotTrack;
  if (!doNotTrack) {
    doNotTrack = mod3.default.navigator && mod3.default.navigator.doNotTrack;
  }
  return "1" === doNotTrack;
}
let merged = Object.assign(ne, {
  loaded: obj3.now(),
  NAME: "mux-embed",
  VERSION: "5.13.0",
  API_VERSION: "2.1",
  PLAYER_TRACKED: false,
  monitor(videoElement, arg1) {
    let obj = ne;
    closure_0 = ne;
    let merged = arg1;
    if (typeof se !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (videoElement) {
      if (undefined !== videoElement.nodeName) {
        let tmp4 = J(videoElement);
        let element = videoElement;
      }
      let str2 = "";
      if (element) {
        str2 = "";
        if (element.nodeName) {
          str2 = element.nodeName.toLowerCase();
        }
      }
      items = [element, tmp4, str2];
      let _Array = Array;
      let tmp7;
      if (Array.isArray(items)) {
        tmp7 = items;
      }
      if (!tmp7) {
        tmp7 = (function vt(items, arg1) {
          let tmp6 = null;
          if (null != items) {
            const _Symbol = Symbol;
            let prop = typeof Symbol !== "undefined";
            if (typeof Symbol !== "undefined") {
              const _Symbol2 = Symbol;
              prop = items[Symbol.iterator];
            }
            if (!prop) {
              prop = items[Symbol.iterator];
            }
            tmp6 = prop;
          }
          if (null != tmp6) {
            let flag2 = false;
            try {
              items = [];
              try {
                const call = tmp9.call;
                if (typeof call === "unknown") {
                  let iter = tmp9();
                } else {
                  iter = call(items);
                }
                const iter3 = iter.next();
                const done = iter3.done;
                let tmp11 = done;
                if (!done) {
                  items.push(iter4.value);
                  if (!arg1) {
                    const iter5 = iter2.next();
                    const done2 = iter5.done;
                    tmp11 = done2;
                    while (!done2) {
                      let arr = items.push(iter6.value);
                      if (!arg1) {
                        continue;
                      } else if (items.length === arg1) {
                        break;
                      }
                      continue;
                    }
                  }
                }
                try {
                  let tmp19 = !tmp11;
                  if (!tmp11) {
                    tmp19 = null != iter2.return;
                  }
                  if (tmp19) {
                    iter2.return();
                  }
                  if (flag2) {
                    throw tmp5;
                  } else {
                    return items;
                  }
                } catch (tmp25) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp25;
                  }
                }
              } catch (tmp5) {
                flag2 = true;
              }
            } catch (tmp28) {
              try {
                let tmp30 = !tmp3;
                if (!tmp3) {
                  tmp30 = tmp4 != obj.return;
                }
                if (tmp30) {
                  obj.return();
                }
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp28;
                }
              } catch (tmp36) {
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp36;
                }
              }
            }
          }
        })(items, 3);
      }
      if (!tmp7) {
        tmp7 = Pe(items, 3);
      }
      if (tmp7) {
        [defineProperty, tmp13] = tmp7;
        getOwnPropertyDescriptor = tmp13;
        let log = obj.log;
        const getComputedStyle = obj.utils.getComputedStyle;
        const secondsToMs = obj.utils.secondsToMs;
        if (defineProperty) {
          if ("video" !== tmp14) {
            if ("audio" !== tmp14) {
              let errorResult = log.error(`The element of \`${tmp13}\` was not a media element.`);
            }
          }
          if (tmp15.mux) {
            let mux = defineProperty.mux;
            mux.destroy();
            delete tmp2[tmp];
            log.warn("Already monitoring this video element, replacing existing event listeners");
          }
          obj = { getPlayheadTime: null, getStateData: null };
          obj[0] = function getPlayheadTime() {
            return secondsToMs(closure_2.currentTime);
          };
          obj[1] = function getStateData() {
            const self = this;
            const getPlayheadTime = this.getPlayheadTime;
            let tmp;
            if (null !== getPlayheadTime) {
              if (undefined !== getPlayheadTime) {
                const call = getPlayheadTime.call;
                typeof call === "unknown" ? getPlayheadTime() : call(self);
              }
            }
            if (!tmp) {
              tmp = secondsToMs(closure_2.currentTime);
            }
            let currentSrc = self.hlsjs && self.hlsjs.url;
            let source = self.dashjs && typeof self.dashjs.getSource === "function";
            if (source) {
              const dashjs = self.dashjs;
              source = dashjs.getSource();
            }
            const obj = { player_is_paused: closure_2.paused, player_width: parseInt(getComputedStyle(closure_2, "width")), player_height: parseInt(getComputedStyle(closure_2, "height")), player_autoplay_on: closure_2.autoplay, player_preload_on: closure_2.preload, player_language_code: closure_2.lang, player_is_fullscreen: null, video_poster_url: null, video_source_url: null, video_source_duration: null, video_source_height: null, video_source_width: null, view_dropped_frame_count: null };
            let _default = closure_1_102.default;
            if (_default) {
              _default = closure_1_102.default.fullscreenElement || closure_1_102.default.webkitFullscreenElement || closure_1_102.default.mozFullScreenElement || closure_1_102.default.msFullscreenElement;
            }
            obj[6] = _default;
            obj[7] = closure_2.poster;
            if (!currentSrc) {
              currentSrc = source;
            }
            if (!currentSrc) {
              currentSrc = closure_2.currentSrc;
            }
            obj[8] = currentSrc;
            obj[9] = secondsToMs(closure_2.duration);
            obj[10] = closure_2.videoHeight;
            obj[11] = closure_2.videoWidth;
            if (null != closure_2) {
              const getVideoPlaybackQuality = closure_2.getVideoPlaybackQuality;
              if (null !== getVideoPlaybackQuality) {
                if (undefined !== getVideoPlaybackQuality) {
                  const call2 = getVideoPlaybackQuality.call;
                  const droppedVideoFrames = typeof call2 === "unknown" ? getVideoPlaybackQuality() : call2(closure_2).droppedVideoFrames;
                }
              }
            }
            obj[12] = undefined;
            if (closure_2.getStartDate) {
              if (tmp > 0) {
                const startDate = closure_2.getStartDate();
                if (startDate) {
                  if (typeof startDate.getTime === "function") {
                    if (startDate.getTime()) {
                      const time = startDate.getTime();
                      obj.player_program_time = time + tmp;
                      if (closure_2.seekable.length > 0) {
                        const seekable = closure_2.seekable;
                        obj.player_live_edge_program_time = time + seekable.end(closure_2.seekable.length - 1);
                      }
                    }
                  }
                }
              }
            }
            return obj;
          };
          let _Object = Object;
          merged = Object.assign({ automaticErrorTracking: true }, arg1, obj);
          let _Object2 = Object;
          obj = { player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: null };
          obj[2] = obj.VERSION;
          merged.data = Object.assign(obj, merged.data);
          mux = defineProperty.mux;
          if (!mux) {
            mux = {};
          }
          defineProperty.mux = mux;
          defineProperty.mux.deleted = false;
          defineProperty.mux.emit = (arg0, arg1) => {
            store.emit(closure_3, arg0, arg1);
          };
          defineProperty.mux.updateData = (arg0) => {
            const mux = closure_2.mux;
            mux.emit("hb", arg0);
          };
          function h() {
            log.error("The monitor for this video element has already been destroyed.");
          }
          defineProperty.mux.destroy = () => {
            const keys = Object.keys(closure_2.mux.listeners);
            const item = keys.forEach((item, index) => {
              const removed = closure_2.removeEventListener(item, closure_2.mux.listeners[item], false);
            });
            delete tmp2[tmp];
            closure_2.mux.destroy = h;
            closure_2.mux.swapElement = h;
            closure_2.mux.emit = h;
            closure_2.mux.addHLSJS = h;
            closure_2.mux.addDashJS = h;
            closure_2.mux.removeHLSJS = h;
            closure_2.mux.removeDashJS = h;
            closure_2.mux.updateData = h;
            closure_2.mux.setEmitTranslator = h;
            closure_2.mux.setStateDataTranslator = h;
            closure_2.mux.setGetPlayheadTime = h;
            closure_2.mux.deleted = true;
            store.emit(closure_3, "destroy");
          };
          defineProperty.mux.swapElement = (nodeName) => {
            if (typeof se !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (nodeName) {
              if (undefined !== nodeName.nodeName) {
                let tmp6 = closure_1_30(nodeName);
                let element = nodeName;
              }
              let str2 = "";
              if (element) {
                str2 = "";
                if (element.nodeName) {
                  str2 = element.nodeName.toLowerCase();
                }
              }
              items = [element, tmp6, str2];
              const _Array = Array;
              let tmp9;
              if (Array.isArray(items)) {
                tmp9 = items;
              }
              if (!tmp9) {
                tmp9 = (function vt(items, arg1) {
                  let tmp6 = null;
                  if (null != items) {
                    const _Symbol = Symbol;
                    let prop = typeof Symbol !== "undefined";
                    if (typeof Symbol !== "undefined") {
                      const _Symbol2 = Symbol;
                      prop = items[Symbol.iterator];
                    }
                    if (!prop) {
                      prop = items[Symbol.iterator];
                    }
                    tmp6 = prop;
                  }
                  if (null != tmp6) {
                    let flag2 = false;
                    try {
                      items = [];
                      try {
                        const call = tmp9.call;
                        if (typeof call === "unknown") {
                          let iter = tmp9();
                        } else {
                          iter = call(items);
                        }
                        const iter3 = iter.next();
                        const done = iter3.done;
                        let tmp11 = done;
                        if (!done) {
                          items.push(iter4.value);
                          if (!arg1) {
                            const iter5 = iter2.next();
                            const done2 = iter5.done;
                            tmp11 = done2;
                            while (!done2) {
                              let arr = items.push(iter6.value);
                              if (!arg1) {
                                continue;
                              } else if (items.length === arg1) {
                                break;
                              }
                              continue;
                            }
                          }
                        }
                        try {
                          let tmp19 = !tmp11;
                          if (!tmp11) {
                            tmp19 = null != iter2.return;
                          }
                          if (tmp19) {
                            iter2.return();
                          }
                          if (flag2) {
                            throw tmp5;
                          } else {
                            return items;
                          }
                        } catch (tmp25) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp25;
                          }
                        }
                      } catch (tmp5) {
                        flag2 = true;
                      }
                    } catch (tmp28) {
                      try {
                        let tmp30 = !tmp3;
                        if (!tmp3) {
                          tmp30 = tmp4 != obj.return;
                        }
                        if (tmp30) {
                          obj.return();
                        }
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp28;
                        }
                      } catch (tmp36) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp36;
                        }
                      }
                    }
                  }
                })(items, 3);
              }
              if (!tmp9) {
                tmp9 = Pe(items, 3);
              }
              if (tmp9) {
                const first = tmp9[0];
                let text = tmp9[1];
                if (first) {
                  if ("video" === tmp17) {
                    first.muxId = first.muxId;
                    delete tmp4[tmp3];
                    first.mux = first.mux || {};
                    const _Object = Object;
                    first.mux.listeners = Object.assign({}, first.mux.listeners);
                    const mux = first.mux;
                    delete tmp4[tmp3];
                    const _Object2 = Object;
                    const keys = Object.keys(first.mux.listeners);
                    const item = keys.forEach((item, index) => {
                      const removed = first.removeEventListener(item, first.mux.listeners[item], false);
                      const listener = first.addEventListener(item, first.mux.listeners[item], false);
                    });
                    first.mux.swapElement = first.mux.swapElement;
                    first.mux.destroy = first.mux.destroy;
                    delete tmp2[tmp];
                    let errorResult;
                  }
                  const log2 = first.log;
                  text = `The element of \`${tmp16}`;
                  errorResult = log2.error(`${`The element of \`${tmp16}`}\` was not a media element.`);
                } else {
                  log = first.log;
                  return log.error("No element was found with the `" + `The element of \`${tmp16}` + "` query selector.");
                }
                tmp17 = tmp9[2];
              } else {
                const _TypeError = TypeError;
                const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                throw typeError;
              }
            }
            element = document.querySelector(nodeName);
            tmp6 = nodeName;
          };
          defineProperty.mux.addHLSJS = (closure_3) => {
            store.addHLSJS(closure_3, closure_3);
          };
          defineProperty.mux.addDashJS = (closure_3) => {
            store.addDashJS(closure_3, closure_3);
          };
          defineProperty.mux.removeHLSJS = () => {
            store.removeHLSJS(closure_3);
          };
          defineProperty.mux.removeDashJS = () => {
            store.removeDashJS(closure_3);
          };
          defineProperty.mux.setEmitTranslator = (emitTranslator) => {
            store.setEmitTranslator(closure_3, emitTranslator);
          };
          defineProperty.mux.setStateDataTranslator = (stateDataTranslator) => {
            const result = store.setStateDataTranslator(closure_3, stateDataTranslator);
          };
          defineProperty.mux.setGetPlayheadTime = (getPlayheadTime) => {
            if (!getPlayheadTime) {
              getPlayheadTime = merged.getPlayheadTime;
            }
            store.setGetPlayheadTime(closure_3, getPlayheadTime);
          };
          obj.init(tmp13, merged);
          obj.emit(tmp13, "playerready");
          if (!defineProperty.paused) {
            obj.emit(tmp13, "play");
            if (defineProperty.readyState > 2) {
              obj.emit(tmp13, "playing");
            }
          }
          defineProperty.mux.listeners = {};
          let item = closure_103.forEach((item, index) => {
            closure_0 = item;
            let tmp = "error" === item;
            if (tmp) {
              tmp = !merged.automaticErrorTracking;
            }
            if (!tmp) {
              closure_2.mux.listeners[item] = () => {
                const obj = {};
                if ("error" === item) {
                  if (closure_1_2.error) {
                    if (1 !== closure_1_2.error.code) {
                      obj.player_error_code = closure_1_2.error.code;
                      let message = closure_2_104[closure_1_2.error.code];
                      if (!message) {
                        message = closure_1_2.error.message;
                      }
                      obj.player_error_message = message;
                    }
                  }
                }
                item.emit(closure_1_3, item, obj);
              };
              const listener = closure_2.addEventListener(item, closure_2.mux.listeners[item], false);
            }
          });
        } else {
          errorResult = log.error(`No element was found with the \`${tmp13}\` query selector.`);
        }
        return errorResult;
      } else {
        let _TypeError = TypeError;
        let typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    element = document.querySelector(videoElement);
    tmp4 = videoElement;
  },
  destroyMonitor(videoElement) {
    if (typeof se !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (videoElement) {
      if (undefined !== videoElement.nodeName) {
        let tmp2 = J(videoElement);
        let element = videoElement;
      }
      let str2 = "";
      if (element) {
        str2 = "";
        if (element.nodeName) {
          str2 = element.nodeName.toLowerCase();
        }
      }
      items = [element, tmp2, str2];
      const _Array = Array;
      let tmp5;
      if (Array.isArray(items)) {
        tmp5 = items;
      }
      if (!tmp5) {
        tmp5 = (function vt(items, arg1) {
          let tmp6 = null;
          if (null != items) {
            const _Symbol = Symbol;
            let prop = typeof Symbol !== "undefined";
            if (typeof Symbol !== "undefined") {
              const _Symbol2 = Symbol;
              prop = items[Symbol.iterator];
            }
            if (!prop) {
              prop = items[Symbol.iterator];
            }
            tmp6 = prop;
          }
          if (null != tmp6) {
            let flag2 = false;
            try {
              items = [];
              try {
                const call = tmp9.call;
                if (typeof call === "unknown") {
                  let iter = tmp9();
                } else {
                  iter = call(items);
                }
                const iter3 = iter.next();
                const done = iter3.done;
                let tmp11 = done;
                if (!done) {
                  items.push(iter4.value);
                  if (!arg1) {
                    const iter5 = iter2.next();
                    const done2 = iter5.done;
                    tmp11 = done2;
                    while (!done2) {
                      let arr = items.push(iter6.value);
                      if (!arg1) {
                        continue;
                      } else if (items.length === arg1) {
                        break;
                      }
                      continue;
                    }
                  }
                }
                try {
                  let tmp19 = !tmp11;
                  if (!tmp11) {
                    tmp19 = null != iter2.return;
                  }
                  if (tmp19) {
                    iter2.return();
                  }
                  if (flag2) {
                    throw tmp5;
                  } else {
                    return items;
                  }
                } catch (tmp25) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp25;
                  }
                }
              } catch (tmp5) {
                flag2 = true;
              }
            } catch (tmp28) {
              try {
                let tmp30 = !tmp3;
                if (!tmp3) {
                  tmp30 = tmp4 != obj.return;
                }
                if (tmp30) {
                  obj.return();
                }
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp28;
                }
              } catch (tmp36) {
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp36;
                }
              }
            }
          }
        })(items, 1);
      }
      if (!tmp5) {
        tmp5 = Pe(items, 1);
      }
      if (tmp5) {
        const first = tmp5[0];
        if (first) {
          if (first.mux) {
            if (typeof first.mux.destroy === "function") {
              const mux = first.mux;
              mux.destroy();
            }
          }
        }
        logger.error(`A video element monitor for \`${videoElement}\` has not been initialized via \`mux.monitor\`.`);
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    element = document.querySelector(videoElement);
    tmp2 = videoElement;
  },
  addHLSJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addHLSJS(closure_3);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  addDashJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addDashJS(closure_3);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeHLSJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeHLSJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeDashJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeDashJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    let doNotTrack = mod3.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = mod3.default.navigator && mod3.default.navigator.doNotTrack;
    }
    if (tmp3) {
      logger.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp6 = J(arg0);
    closure_122[tmp6] = t(ne, tmp6, respectDoNotTrack);
    tmp3 = "1" === doNotTrack && respectDoNotTrack && respectDoNotTrack.respectDoNotTrack;
    const tmp7 = t(ne, tmp6, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp3 = J(arg0);
    if (dependencyMap[tmp3]) {
      tmp4[tmp3].emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete tmp[tmp2];
      }
    } else {
      logger.error(`A monitor for \`${tmp3}\` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emit("hb", arg1);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setEmitTranslator(closure_3, emitTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emitTranslator = emitTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setStateDataTranslator(closure_3, stateDataTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setGetPlayheadTime(closure_3, getPlayheadTime) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  checkDoNotTrack: ce,
  log: tmp11,
  utils: {
    safeCall: function ut(arg0, arg1, arg2, arg3) {
      let applyResult = arg3;
      if (arg0) {
        if (typeof arg0[arg1] === "function") {
          try {
            applyResult = arg0[arg1].apply(arg0, arg2);
          } catch (tmp4) {
            logger.info("safeCall error", tmp4);
          }
        }
      }
      return applyResult;
    },
    safeIncrement: function P(arg0, arg1, arg2) {
      let num = 1;
      if (undefined !== arg2) {
        num = arg2;
      }
      arg0[arg1] = arg0[arg1] + num;
    },
    getComputedStyle: function dt(arg0, arg1) {
      let str = "";
      if (arg0) {
        str = "";
        if (arg1) {
          str = "";
          if (GResult1.default) {
            str = "";
            if (typeof GResult1.default.getComputedStyle === "function") {
              let hasItem = weakMap;
              if (weakMap) {
                hasItem = weakMap.has(arg0);
              }
              let value;
              if (hasItem) {
                value = weakMap.get(arg0);
              }
              if (!value) {
                const computedStyle = GResult1.default.getComputedStyle(arg0, null);
                value = computedStyle;
                if (weakMap) {
                  const result = weakMap.set(arg0, computedStyle);
                  value = computedStyle;
                }
                const _default = GResult1.default;
              }
              str = value.getPropertyValue(arg1);
            }
          }
        }
      }
      return str;
    },
    secondsToMs: function lt(arg0) {
      return Math.floor(1000 * arg0);
    },
    assign: Object.assign,
    headersStringToObject: function pe(arg0) {
      let str = arg0;
      const obj = {};
      if (!arg0) {
        str = "";
      }
      const parts = str.trim().split(/[\r\n]+/);
      const item = parts.forEach((item, index) => {
        if (item) {
          const parts = item.split(": ");
          const str2 = parts.shift();
          let tmp = str2;
          if (str2) {
            let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
            if (!tmp3) {
              const formatted = str2.toLowerCase();
              tmp3 = 0 === formatted.indexOf("x-litix-");
            }
            tmp = tmp3;
          }
          if (tmp) {
            obj[str2] = parts.join(": ");
          }
        }
      });
      return obj;
    },
    cdnHeadersToRequestId: function de(arg0) {
      closure_0 = arg0;
      if (arg0) {
        const found = items.find((item, index) => undefined !== obj[item]);
        let tmp3;
        if (found) {
          tmp3 = arg0[found];
        }
        return tmp3;
      }
    },
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Ve,
    generateShortID: Oe,
    generateUUID: ee,
    now: obj3.now,
    findMediaElement: se
  },
  events: { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false
});
if (tmp34) {
  let listener = GResult.default.addEventListener("pagehide", (event) => {
    if (!event.persisted) {
      ne.WINDOW_UNLOADING = true;
    }
  }, false);
  let _default = GResult.default;
}
const obj13 = {};
const obj15 = {};
const obj21 = {
  loaded: obj3.now(),
  NAME: "mux-embed",
  VERSION: "5.13.0",
  API_VERSION: "2.1",
  PLAYER_TRACKED: false,
  monitor(videoElement, arg1) {
    let obj = ne;
    closure_0 = ne;
    let merged = arg1;
    if (typeof se !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (videoElement) {
      if (undefined !== videoElement.nodeName) {
        let tmp4 = J(videoElement);
        let element = videoElement;
      }
      let str2 = "";
      if (element) {
        str2 = "";
        if (element.nodeName) {
          str2 = element.nodeName.toLowerCase();
        }
      }
      items = [element, tmp4, str2];
      let _Array = Array;
      let tmp7;
      if (Array.isArray(items)) {
        tmp7 = items;
      }
      if (!tmp7) {
        tmp7 = (function vt(items, arg1) {
          let tmp6 = null;
          if (null != items) {
            const _Symbol = Symbol;
            let prop = typeof Symbol !== "undefined";
            if (typeof Symbol !== "undefined") {
              const _Symbol2 = Symbol;
              prop = items[Symbol.iterator];
            }
            if (!prop) {
              prop = items[Symbol.iterator];
            }
            tmp6 = prop;
          }
          if (null != tmp6) {
            let flag2 = false;
            try {
              items = [];
              try {
                const call = tmp9.call;
                if (typeof call === "unknown") {
                  let iter = tmp9();
                } else {
                  iter = call(items);
                }
                const iter3 = iter.next();
                const done = iter3.done;
                let tmp11 = done;
                if (!done) {
                  items.push(iter4.value);
                  if (!arg1) {
                    const iter5 = iter2.next();
                    const done2 = iter5.done;
                    tmp11 = done2;
                    while (!done2) {
                      let arr = items.push(iter6.value);
                      if (!arg1) {
                        continue;
                      } else if (items.length === arg1) {
                        break;
                      }
                      continue;
                    }
                  }
                }
                try {
                  let tmp19 = !tmp11;
                  if (!tmp11) {
                    tmp19 = null != iter2.return;
                  }
                  if (tmp19) {
                    iter2.return();
                  }
                  if (flag2) {
                    throw tmp5;
                  } else {
                    return items;
                  }
                } catch (tmp25) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp25;
                  }
                }
              } catch (tmp5) {
                flag2 = true;
              }
            } catch (tmp28) {
              try {
                let tmp30 = !tmp3;
                if (!tmp3) {
                  tmp30 = tmp4 != obj.return;
                }
                if (tmp30) {
                  obj.return();
                }
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp28;
                }
              } catch (tmp36) {
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp36;
                }
              }
            }
          }
        })(items, 3);
      }
      if (!tmp7) {
        tmp7 = Pe(items, 3);
      }
      if (tmp7) {
        [defineProperty, tmp13] = tmp7;
        getOwnPropertyDescriptor = tmp13;
        let log = obj.log;
        const getComputedStyle = obj.utils.getComputedStyle;
        const secondsToMs = obj.utils.secondsToMs;
        if (defineProperty) {
          if ("video" !== tmp14) {
            if ("audio" !== tmp14) {
              let errorResult = log.error(`The element of \`${tmp13}\` was not a media element.`);
            }
          }
          if (tmp15.mux) {
            let mux = defineProperty.mux;
            mux.destroy();
            delete tmp2[tmp];
            log.warn("Already monitoring this video element, replacing existing event listeners");
          }
          obj = { getPlayheadTime: null, getStateData: null };
          obj[0] = function getPlayheadTime() {
            return secondsToMs(closure_2.currentTime);
          };
          obj[1] = function getStateData() {
            const self = this;
            const getPlayheadTime = this.getPlayheadTime;
            let tmp;
            if (null !== getPlayheadTime) {
              if (undefined !== getPlayheadTime) {
                const call = getPlayheadTime.call;
                typeof call === "unknown" ? getPlayheadTime() : call(self);
              }
            }
            if (!tmp) {
              tmp = secondsToMs(closure_2.currentTime);
            }
            let currentSrc = self.hlsjs && self.hlsjs.url;
            let source = self.dashjs && typeof self.dashjs.getSource === "function";
            if (source) {
              const dashjs = self.dashjs;
              source = dashjs.getSource();
            }
            const obj = { player_is_paused: closure_2.paused, player_width: parseInt(getComputedStyle(closure_2, "width")), player_height: parseInt(getComputedStyle(closure_2, "height")), player_autoplay_on: closure_2.autoplay, player_preload_on: closure_2.preload, player_language_code: closure_2.lang, player_is_fullscreen: null, video_poster_url: null, video_source_url: null, video_source_duration: null, video_source_height: null, video_source_width: null, view_dropped_frame_count: null };
            let _default = closure_1_102.default;
            if (_default) {
              _default = closure_1_102.default.fullscreenElement || closure_1_102.default.webkitFullscreenElement || closure_1_102.default.mozFullScreenElement || closure_1_102.default.msFullscreenElement;
            }
            obj[6] = _default;
            obj[7] = closure_2.poster;
            if (!currentSrc) {
              currentSrc = source;
            }
            if (!currentSrc) {
              currentSrc = closure_2.currentSrc;
            }
            obj[8] = currentSrc;
            obj[9] = secondsToMs(closure_2.duration);
            obj[10] = closure_2.videoHeight;
            obj[11] = closure_2.videoWidth;
            if (null != closure_2) {
              const getVideoPlaybackQuality = closure_2.getVideoPlaybackQuality;
              if (null !== getVideoPlaybackQuality) {
                if (undefined !== getVideoPlaybackQuality) {
                  const call2 = getVideoPlaybackQuality.call;
                  const droppedVideoFrames = typeof call2 === "unknown" ? getVideoPlaybackQuality() : call2(closure_2).droppedVideoFrames;
                }
              }
            }
            obj[12] = undefined;
            if (closure_2.getStartDate) {
              if (tmp > 0) {
                const startDate = closure_2.getStartDate();
                if (startDate) {
                  if (typeof startDate.getTime === "function") {
                    if (startDate.getTime()) {
                      const time = startDate.getTime();
                      obj.player_program_time = time + tmp;
                      if (closure_2.seekable.length > 0) {
                        const seekable = closure_2.seekable;
                        obj.player_live_edge_program_time = time + seekable.end(closure_2.seekable.length - 1);
                      }
                    }
                  }
                }
              }
            }
            return obj;
          };
          let _Object = Object;
          merged = Object.assign({ automaticErrorTracking: true }, arg1, obj);
          let _Object2 = Object;
          obj = { player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: null };
          obj[2] = obj.VERSION;
          merged.data = Object.assign(obj, merged.data);
          mux = defineProperty.mux;
          if (!mux) {
            mux = {};
          }
          defineProperty.mux = mux;
          defineProperty.mux.deleted = false;
          defineProperty.mux.emit = (arg0, arg1) => {
            store.emit(closure_3, arg0, arg1);
          };
          defineProperty.mux.updateData = (arg0) => {
            const mux = closure_2.mux;
            mux.emit("hb", arg0);
          };
          function h() {
            log.error("The monitor for this video element has already been destroyed.");
          }
          defineProperty.mux.destroy = () => {
            const keys = Object.keys(closure_2.mux.listeners);
            const item = keys.forEach((item, index) => {
              const removed = closure_2.removeEventListener(item, closure_2.mux.listeners[item], false);
            });
            delete tmp2[tmp];
            closure_2.mux.destroy = h;
            closure_2.mux.swapElement = h;
            closure_2.mux.emit = h;
            closure_2.mux.addHLSJS = h;
            closure_2.mux.addDashJS = h;
            closure_2.mux.removeHLSJS = h;
            closure_2.mux.removeDashJS = h;
            closure_2.mux.updateData = h;
            closure_2.mux.setEmitTranslator = h;
            closure_2.mux.setStateDataTranslator = h;
            closure_2.mux.setGetPlayheadTime = h;
            closure_2.mux.deleted = true;
            store.emit(closure_3, "destroy");
          };
          defineProperty.mux.swapElement = (nodeName) => {
            if (typeof se !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (nodeName) {
              if (undefined !== nodeName.nodeName) {
                let tmp6 = closure_1_30(nodeName);
                let element = nodeName;
              }
              let str2 = "";
              if (element) {
                str2 = "";
                if (element.nodeName) {
                  str2 = element.nodeName.toLowerCase();
                }
              }
              items = [element, tmp6, str2];
              const _Array = Array;
              let tmp9;
              if (Array.isArray(items)) {
                tmp9 = items;
              }
              if (!tmp9) {
                tmp9 = (function vt(items, arg1) {
                  let tmp6 = null;
                  if (null != items) {
                    const _Symbol = Symbol;
                    let prop = typeof Symbol !== "undefined";
                    if (typeof Symbol !== "undefined") {
                      const _Symbol2 = Symbol;
                      prop = items[Symbol.iterator];
                    }
                    if (!prop) {
                      prop = items[Symbol.iterator];
                    }
                    tmp6 = prop;
                  }
                  if (null != tmp6) {
                    let flag2 = false;
                    try {
                      items = [];
                      try {
                        const call = tmp9.call;
                        if (typeof call === "unknown") {
                          let iter = tmp9();
                        } else {
                          iter = call(items);
                        }
                        const iter3 = iter.next();
                        const done = iter3.done;
                        let tmp11 = done;
                        if (!done) {
                          items.push(iter4.value);
                          if (!arg1) {
                            const iter5 = iter2.next();
                            const done2 = iter5.done;
                            tmp11 = done2;
                            while (!done2) {
                              let arr = items.push(iter6.value);
                              if (!arg1) {
                                continue;
                              } else if (items.length === arg1) {
                                break;
                              }
                              continue;
                            }
                          }
                        }
                        try {
                          let tmp19 = !tmp11;
                          if (!tmp11) {
                            tmp19 = null != iter2.return;
                          }
                          if (tmp19) {
                            iter2.return();
                          }
                          if (flag2) {
                            throw tmp5;
                          } else {
                            return items;
                          }
                        } catch (tmp25) {
                          if (tmp2) {
                            throw tmp;
                          } else {
                            throw tmp25;
                          }
                        }
                      } catch (tmp5) {
                        flag2 = true;
                      }
                    } catch (tmp28) {
                      try {
                        let tmp30 = !tmp3;
                        if (!tmp3) {
                          tmp30 = tmp4 != obj.return;
                        }
                        if (tmp30) {
                          obj.return();
                        }
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp28;
                        }
                      } catch (tmp36) {
                        if (tmp2) {
                          throw tmp;
                        } else {
                          throw tmp36;
                        }
                      }
                    }
                  }
                })(items, 3);
              }
              if (!tmp9) {
                tmp9 = Pe(items, 3);
              }
              if (tmp9) {
                const first = tmp9[0];
                let text = tmp9[1];
                if (first) {
                  if ("video" === tmp17) {
                    first.muxId = first.muxId;
                    delete tmp4[tmp3];
                    first.mux = first.mux || {};
                    const _Object = Object;
                    first.mux.listeners = Object.assign({}, first.mux.listeners);
                    const mux = first.mux;
                    delete tmp4[tmp3];
                    const _Object2 = Object;
                    const keys = Object.keys(first.mux.listeners);
                    const item = keys.forEach((item, index) => {
                      const removed = first.removeEventListener(item, first.mux.listeners[item], false);
                      const listener = first.addEventListener(item, first.mux.listeners[item], false);
                    });
                    first.mux.swapElement = first.mux.swapElement;
                    first.mux.destroy = first.mux.destroy;
                    delete tmp2[tmp];
                    let errorResult;
                  }
                  const log2 = first.log;
                  text = `The element of \`${tmp16}`;
                  errorResult = log2.error(`${`The element of \`${tmp16}`}\` was not a media element.`);
                } else {
                  log = first.log;
                  return log.error("No element was found with the `" + `The element of \`${tmp16}` + "` query selector.");
                }
                tmp17 = tmp9[2];
              } else {
                const _TypeError = TypeError;
                const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                throw typeError;
              }
            }
            element = document.querySelector(nodeName);
            tmp6 = nodeName;
          };
          defineProperty.mux.addHLSJS = (closure_3) => {
            store.addHLSJS(closure_3, closure_3);
          };
          defineProperty.mux.addDashJS = (closure_3) => {
            store.addDashJS(closure_3, closure_3);
          };
          defineProperty.mux.removeHLSJS = () => {
            store.removeHLSJS(closure_3);
          };
          defineProperty.mux.removeDashJS = () => {
            store.removeDashJS(closure_3);
          };
          defineProperty.mux.setEmitTranslator = (emitTranslator) => {
            store.setEmitTranslator(closure_3, emitTranslator);
          };
          defineProperty.mux.setStateDataTranslator = (stateDataTranslator) => {
            const result = store.setStateDataTranslator(closure_3, stateDataTranslator);
          };
          defineProperty.mux.setGetPlayheadTime = (getPlayheadTime) => {
            if (!getPlayheadTime) {
              getPlayheadTime = merged.getPlayheadTime;
            }
            store.setGetPlayheadTime(closure_3, getPlayheadTime);
          };
          obj.init(tmp13, merged);
          obj.emit(tmp13, "playerready");
          if (!defineProperty.paused) {
            obj.emit(tmp13, "play");
            if (defineProperty.readyState > 2) {
              obj.emit(tmp13, "playing");
            }
          }
          defineProperty.mux.listeners = {};
          let item = closure_103.forEach((item, index) => {
            closure_0 = item;
            let tmp = "error" === item;
            if (tmp) {
              tmp = !merged.automaticErrorTracking;
            }
            if (!tmp) {
              closure_2.mux.listeners[item] = () => {
                const obj = {};
                if ("error" === item) {
                  if (closure_1_2.error) {
                    if (1 !== closure_1_2.error.code) {
                      obj.player_error_code = closure_1_2.error.code;
                      let message = closure_2_104[closure_1_2.error.code];
                      if (!message) {
                        message = closure_1_2.error.message;
                      }
                      obj.player_error_message = message;
                    }
                  }
                }
                item.emit(closure_1_3, item, obj);
              };
              const listener = closure_2.addEventListener(item, closure_2.mux.listeners[item], false);
            }
          });
        } else {
          errorResult = log.error(`No element was found with the \`${tmp13}\` query selector.`);
        }
        return errorResult;
      } else {
        let _TypeError = TypeError;
        let typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    element = document.querySelector(videoElement);
    tmp4 = videoElement;
  },
  destroyMonitor(videoElement) {
    if (typeof se !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (videoElement) {
      if (undefined !== videoElement.nodeName) {
        let tmp2 = J(videoElement);
        let element = videoElement;
      }
      let str2 = "";
      if (element) {
        str2 = "";
        if (element.nodeName) {
          str2 = element.nodeName.toLowerCase();
        }
      }
      items = [element, tmp2, str2];
      const _Array = Array;
      let tmp5;
      if (Array.isArray(items)) {
        tmp5 = items;
      }
      if (!tmp5) {
        tmp5 = (function vt(items, arg1) {
          let tmp6 = null;
          if (null != items) {
            const _Symbol = Symbol;
            let prop = typeof Symbol !== "undefined";
            if (typeof Symbol !== "undefined") {
              const _Symbol2 = Symbol;
              prop = items[Symbol.iterator];
            }
            if (!prop) {
              prop = items[Symbol.iterator];
            }
            tmp6 = prop;
          }
          if (null != tmp6) {
            let flag2 = false;
            try {
              items = [];
              try {
                const call = tmp9.call;
                if (typeof call === "unknown") {
                  let iter = tmp9();
                } else {
                  iter = call(items);
                }
                const iter3 = iter.next();
                const done = iter3.done;
                let tmp11 = done;
                if (!done) {
                  items.push(iter4.value);
                  if (!arg1) {
                    const iter5 = iter2.next();
                    const done2 = iter5.done;
                    tmp11 = done2;
                    while (!done2) {
                      let arr = items.push(iter6.value);
                      if (!arg1) {
                        continue;
                      } else if (items.length === arg1) {
                        break;
                      }
                      continue;
                    }
                  }
                }
                try {
                  let tmp19 = !tmp11;
                  if (!tmp11) {
                    tmp19 = null != iter2.return;
                  }
                  if (tmp19) {
                    iter2.return();
                  }
                  if (flag2) {
                    throw tmp5;
                  } else {
                    return items;
                  }
                } catch (tmp25) {
                  if (tmp2) {
                    throw tmp;
                  } else {
                    throw tmp25;
                  }
                }
              } catch (tmp5) {
                flag2 = true;
              }
            } catch (tmp28) {
              try {
                let tmp30 = !tmp3;
                if (!tmp3) {
                  tmp30 = tmp4 != obj.return;
                }
                if (tmp30) {
                  obj.return();
                }
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp28;
                }
              } catch (tmp36) {
                if (tmp2) {
                  throw tmp;
                } else {
                  throw tmp36;
                }
              }
            }
          }
        })(items, 1);
      }
      if (!tmp5) {
        tmp5 = Pe(items, 1);
      }
      if (tmp5) {
        const first = tmp5[0];
        if (first) {
          if (first.mux) {
            if (typeof first.mux.destroy === "function") {
              const mux = first.mux;
              mux.destroy();
            }
          }
        }
        logger.error(`A video element monitor for \`${videoElement}\` has not been initialized via \`mux.monitor\`.`);
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    element = document.querySelector(videoElement);
    tmp2 = videoElement;
  },
  addHLSJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addHLSJS(closure_3);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  addDashJS(closure_3, closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].addDashJS(closure_3);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeHLSJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeHLSJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  removeDashJS(closure_3) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      dependencyMap[tmp].removeDashJS();
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  init(arg0, respectDoNotTrack) {
    let doNotTrack = mod3.default.doNotTrack;
    if (!doNotTrack) {
      doNotTrack = mod3.default.navigator && mod3.default.navigator.doNotTrack;
    }
    if (tmp3) {
      logger.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
    }
    const tmp6 = J(arg0);
    closure_122[tmp6] = t(ne, tmp6, respectDoNotTrack);
    tmp3 = "1" === doNotTrack && respectDoNotTrack && respectDoNotTrack.respectDoNotTrack;
    const tmp7 = t(ne, tmp6, respectDoNotTrack);
  },
  emit(arg0, arg1, arg2) {
    const tmp3 = J(arg0);
    if (dependencyMap[tmp3]) {
      tmp4[tmp3].emit(arg1, arg2);
      if ("destroy" === arg1) {
        delete tmp[tmp2];
      }
    } else {
      logger.error(`A monitor for \`${tmp3}\` has not been initialized.`);
    }
  },
  updateData(arg0, arg1) {
    const tmp = J(arg0);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emit("hb", arg1);
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setEmitTranslator(closure_3, emitTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].emitTranslator = emitTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setStateDataTranslator(closure_3, stateDataTranslator) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].stateDataTranslator = stateDataTranslator;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  setGetPlayheadTime(closure_3, getPlayheadTime) {
    const tmp = J(closure_3);
    if (dependencyMap[tmp]) {
      tmp2[tmp].getPlayheadTime = getPlayheadTime;
    } else {
      logger.error(`A monitor for \`${tmp}\` has not been initialized.`);
    }
  },
  checkDoNotTrack: ce,
  log: tmp11,
  utils: {
    safeCall: function ut(arg0, arg1, arg2, arg3) {
      let applyResult = arg3;
      if (arg0) {
        if (typeof arg0[arg1] === "function") {
          try {
            applyResult = arg0[arg1].apply(arg0, arg2);
          } catch (tmp4) {
            logger.info("safeCall error", tmp4);
          }
        }
      }
      return applyResult;
    },
    safeIncrement: function P(arg0, arg1, arg2) {
      let num = 1;
      if (undefined !== arg2) {
        num = arg2;
      }
      arg0[arg1] = arg0[arg1] + num;
    },
    getComputedStyle: function dt(arg0, arg1) {
      let str = "";
      if (arg0) {
        str = "";
        if (arg1) {
          str = "";
          if (GResult1.default) {
            str = "";
            if (typeof GResult1.default.getComputedStyle === "function") {
              let hasItem = weakMap;
              if (weakMap) {
                hasItem = weakMap.has(arg0);
              }
              let value;
              if (hasItem) {
                value = weakMap.get(arg0);
              }
              if (!value) {
                const computedStyle = GResult1.default.getComputedStyle(arg0, null);
                value = computedStyle;
                if (weakMap) {
                  const result = weakMap.set(arg0, computedStyle);
                  value = computedStyle;
                }
                const _default = GResult1.default;
              }
              str = value.getPropertyValue(arg1);
            }
          }
        }
      }
      return str;
    },
    secondsToMs: function lt(arg0) {
      return Math.floor(1000 * arg0);
    },
    assign: Object.assign,
    headersStringToObject: function pe(arg0) {
      let str = arg0;
      const obj = {};
      if (!arg0) {
        str = "";
      }
      const parts = str.trim().split(/[\r\n]+/);
      const item = parts.forEach((item, index) => {
        if (item) {
          const parts = item.split(": ");
          const str2 = parts.shift();
          let tmp = str2;
          if (str2) {
            let tmp3 = closure_1_50.indexOf(str2.toLowerCase()) >= 0;
            if (!tmp3) {
              const formatted = str2.toLowerCase();
              tmp3 = 0 === formatted.indexOf("x-litix-");
            }
            tmp = tmp3;
          }
          if (tmp) {
            obj[str2] = parts.join(": ");
          }
        }
      });
      return obj;
    },
    cdnHeadersToRequestId: function de(arg0) {
      closure_0 = arg0;
      if (arg0) {
        const found = items.find((item, index) => undefined !== obj[item]);
        let tmp3;
        if (found) {
          tmp3 = arg0[found];
        }
        return tmp3;
      }
    },
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Ve,
    generateShortID: Oe,
    generateUUID: ee,
    now: obj3.now,
    findMediaElement: se
  },
  events: { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" },
  WINDOW_HIDDEN: false,
  WINDOW_UNLOADING: false
};
tmp28 = GResult1.default && GResult1.default.WeakMap;
tmp34 = undefined !== GResult.default && typeof GResult.default.addEventListener === "function";

export default definePropertyResult1;