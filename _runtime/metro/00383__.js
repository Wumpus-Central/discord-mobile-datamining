// _runtime/metro/00383__.js
import _modDef366 from "00366__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const AnimatedTransform = importDefault;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class AnimatedTransform {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = c2(this, AnimatedTransform);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedTransform);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._nodes = global;
    tmp3Result._transforms = arg1;
    return tmp3Result;
  }
}
_inherits(AnimatedTransform, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const self = this;
    const _nodes = this._nodes;
    for (let num = 0; num < length; num = num + 1) {
      let obj = _nodes[num];
      let __makeNativeResult = obj.__makeNative(arg0);
    }
    let fn = hasOwnProperty(_getPrototypeOf(AnimatedTransform.prototype), "__makeNative", self);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  },
};
let items = [
  entry,
  {
    key: "__getValue",
    value: function __getValue() {
      const _transforms = this._transforms;
      const f107474 = (__getValue) => __getValue.__getValue();
      return _transforms.map((item) => {
        let obj = {};
        for (const key10006 in arg0) {
          let arr = arg0[key10006];
          if (arr instanceof AnimatedTransform(367)) {
            obj[key10006] = f107477(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f107477(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof AnimatedTransform(367)) {
                    tmp3 = f107477(tmp9);
                  }
                  obj[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj;
                continue;
              } else {
                obj[key10006] = arr;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      });
    },
  },
  {
    key: "__getValueWithStaticTransforms",
    value: function __getValueWithStaticTransforms(arr) {
      let f107475 = [];
      const _transforms = this._transforms;
      f107475 = (__getValue) => {
        f107475.push(__getValue.__getValue());
      };
      const mapped = _transforms.map((item) => {
        let obj = {};
        for (const key10006 in arg0) {
          let arr = arg0[key10006];
          if (arr instanceof AnimatedTransform(367)) {
            obj[key10006] = f107477(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f107477(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof AnimatedTransform(367)) {
                    tmp3 = f107477(tmp9);
                  }
                  obj[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj;
                continue;
              } else {
                obj[key10006] = arr;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      });
      closure_129_0 = () => f107475.shift();
      return arr.map((item) => {
        let obj = {};
        for (const key10006 in arg0) {
          let arr = arg0[key10006];
          if (arr instanceof AnimatedTransform(367)) {
            obj[key10006] = f107477(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f107477(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof AnimatedTransform(367)) {
                    tmp3 = f107477(tmp9);
                  }
                  obj[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj;
                continue;
              } else {
                obj[key10006] = arr;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      });
    },
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const _transforms = this._transforms;
      const f107477 = (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue();
      return _transforms.map((item) => {
        let obj = {};
        for (const key10006 in arg0) {
          let arr = arg0[key10006];
          if (arr instanceof AnimatedTransform(367)) {
            obj[key10006] = f107477(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f107477(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof AnimatedTransform(367)) {
                    tmp3 = f107477(tmp9);
                  }
                  obj[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj;
                continue;
              } else {
                obj[key10006] = arr;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        return obj;
      });
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedTransform.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      const self = this;
      const _nodes = this._nodes;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      let fn = hasOwnProperty(_getPrototypeOf(AnimatedTransform.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const items = [];
      const _transforms = this._transforms;
      for (let num = 0; num < length; num = num + 1) {
        let tmp = _transforms[num];
        for (const key10012 in tmp) {
          let obj5 = tmp[key10012];
          let tmp7 = AnimatedTransform;
          let push = items.push;
          if (obj5 instanceof AnimatedTransform(367)) {
            let obj = { type: "animated", property: key10012, nodeTag: obj5.__getNativeTag() };
            let arr = push(obj);
            continue;
          } else {
            obj = { type: "static", property: key10012, value: null };
            let tmp7Result = tmp7(357);
            obj.value = tmp7Result.transformDataType(obj5);
            arr = push(obj);
            continue;
          }
          continue;
        }
      }
      obj = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj;
    },
  },
];
const entry1 = {
  key: "from",
  value: function from(_transforms) {
    let construct = globalThis;
    let items = _transforms;
    if (!Array.isArray(_transforms)) {
      items = [];
    }
    const items1 = [];
    for (let num = 0; num < length; num = num + 1) {
      let tmp = items[num];
      for (const key10017 in tmp) {
        let tmp15 = tmp[key10017];
        if (!(tmp15 instanceof AnimatedTransform(367))) {
          continue;
        } else {
          let arr = items1.push(tmp15);
          continue;
        }
        continue;
      }
    }
    if (0 === items1.length) {
      return null;
    } else {
      let obj = Object.create(AnimatedTransform.prototype);
      _classCallCheck(obj, AnimatedTransform);
      const items2 = [undefined];
      let constructor = _getPrototypeOf;
      obj = _getPrototypeOf(AnimatedTransform);
      if (metroRequire()) {
        const _Reflect = construct.Reflect;
        construct = _Reflect.construct;
        constructor = constructor(obj).constructor;
        let constructResult = construct(obj, items2, constructor);
      } else {
        constructResult = obj.apply(obj, items2);
      }
      const tmp9Result = _possibleConstructorReturn(obj, constructResult);
      tmp9Result._nodes = items1;
      tmp9Result._transforms = _transforms;
    }
  },
};
let items1 = [entry1];

export default _createClass(AnimatedTransform, items, items1);
