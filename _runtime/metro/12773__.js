// _runtime/metro/12773__.js
import SelectorType from "../12774_SelectorType.js";

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
  exports.isTraversal = undefined;
  exports.parse = undefined;
  exports.stringify = undefined;
  fn(SelectorType, exports);
  const _Object3 = Object;
  let obj = {
    enumerable: true,
    get() {
      return require("funescape").isTraversal;
    },
  };
  Object.defineProperty(exports, "isTraversal", obj);
  const _Object4 = Object;
  const obj2 = {
    enumerable: true,
    get() {
      return require("funescape").parse;
    },
  };
  Object.defineProperty(exports, "parse", obj2);
  const _Object5 = Object;
  const obj3 = {
    enumerable: true,
    get() {
      return require("stringifyToken").stringify;
    },
  };
  Object.defineProperty(exports, "stringify", obj3);
} else {
  let _Object = Object;
}
