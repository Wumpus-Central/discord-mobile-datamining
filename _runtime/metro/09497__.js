// === Module 9497: ? ===

// Module 9497
import _mod9498 from "module_9498" /* 9498 */;
import _mod9505 from "module_9505" /* 9505 */;
import _mod9506 from "module_9506" /* 9506 */;
import find from "find" /* 9507 */;
import combineFuncs from "combineFuncs" /* 9508 */;
import compareDocumentPosition from "compareDocumentPosition" /* 9509 */;
import _mod9510 from "module_9510" /* 9510 */;

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
  exports.isTag = undefined;
  exports.isCDATA = undefined;
  exports.isText = undefined;
  exports.isComment = undefined;
  exports.isDocument = undefined;
  exports.hasChildren = undefined;
  fn(_mod9498, exports);
  fn(_mod9505, exports);
  fn(_mod9506, exports);
  fn(find, exports);
  fn(combineFuncs, exports);
  fn(compareDocumentPosition, exports);
  fn(_mod9510, exports);
  const _Object3 = Object;
  let obj = {
    enumerable: true,
    get() {
        return require("cloneNode").isTag;
      }
  };
  Object.defineProperty(exports, "isTag", obj);
  const _Object4 = Object;
  const obj2 = {
    enumerable: true,
    get() {
        return require("cloneNode").isCDATA;
      }
  };
  Object.defineProperty(exports, "isCDATA", obj2);
  const _Object5 = Object;
  const obj3 = {
    enumerable: true,
    get() {
        return require("cloneNode").isText;
      }
  };
  Object.defineProperty(exports, "isText", obj3);
  const _Object6 = Object;
  const obj4 = {
    enumerable: true,
    get() {
        return require("cloneNode").isComment;
      }
  };
  Object.defineProperty(exports, "isComment", obj4);
  const _Object7 = Object;
  const obj5 = {
    enumerable: true,
    get() {
        return require("cloneNode").isDocument;
      }
  };
  Object.defineProperty(exports, "isDocument", obj5);
  const _Object8 = Object;
  const obj6 = {
    enumerable: true,
    get() {
        return require("cloneNode").hasChildren;
      }
  };
  Object.defineProperty(exports, "hasChildren", obj6);
} else {
  let _Object = Object;
}