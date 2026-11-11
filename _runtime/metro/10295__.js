// _runtime/metro/10295__.js
import _mod10296 from "10296__.js";
import _mod10303 from "10303__.js";
import _mod10304 from "10304__.js";
import find from "../10305_find.js";
import combineFuncs from "../10306_combineFuncs.js";
import compareDocumentPosition from "../10307_compareDocumentPosition.js";
import _mod10308 from "10308__.js";

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
  fn(_mod10296, exports);
  fn(_mod10303, exports);
  fn(_mod10304, exports);
  fn(find, exports);
  fn(combineFuncs, exports);
  fn(compareDocumentPosition, exports);
  fn(_mod10308, exports);
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
