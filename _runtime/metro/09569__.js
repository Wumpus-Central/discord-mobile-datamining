// _runtime/metro/09569__.js
import _mod9570 from "09570__.js";
import _mod9577 from "09577__.js";
import _mod9578 from "09578__.js";
import find from "../09579_find.js";
import combineFuncs from "../09580_combineFuncs.js";
import compareDocumentPosition from "../09581_compareDocumentPosition.js";
import _mod9582 from "09582__.js";

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
  fn(_mod9570, exports);
  fn(_mod9577, exports);
  fn(_mod9578, exports);
  fn(find, exports);
  fn(combineFuncs, exports);
  fn(compareDocumentPosition, exports);
  fn(_mod9582, exports);
  const _Object3 = Object;
  let obj = {
    enumerable: true,
    get() {
      return require("cloneNode").isTag;
    },
  };
  Object.defineProperty(exports, "isTag", obj);
  const _Object4 = Object;
  const obj2 = {
    enumerable: true,
    get() {
      return require("cloneNode").isCDATA;
    },
  };
  Object.defineProperty(exports, "isCDATA", obj2);
  const _Object5 = Object;
  const obj3 = {
    enumerable: true,
    get() {
      return require("cloneNode").isText;
    },
  };
  Object.defineProperty(exports, "isText", obj3);
  const _Object6 = Object;
  const obj4 = {
    enumerable: true,
    get() {
      return require("cloneNode").isComment;
    },
  };
  Object.defineProperty(exports, "isComment", obj4);
  const _Object7 = Object;
  const obj5 = {
    enumerable: true,
    get() {
      return require("cloneNode").isDocument;
    },
  };
  Object.defineProperty(exports, "isDocument", obj5);
  const _Object8 = Object;
  const obj6 = {
    enumerable: true,
    get() {
      return require("cloneNode").hasChildren;
    },
  };
  Object.defineProperty(exports, "hasChildren", obj6);
} else {
  let _Object = Object;
}
