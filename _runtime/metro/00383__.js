// _runtime/metro/00383__.js
import get_nativeEventEmitterDefault from "../00357_get_nativeEventEmitter.js";
import _modDef366 from "00366__.js";
import _modDef367 from "00367__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class AnimatedTransform {
  constructor(_nodes, _transforms, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedTransform);
    const items = [arg2];
    const obj = _getPrototypeOf(AnimatedTransform);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result._nodes = _nodes;
    tmp3Result._transforms = _transforms;
    return tmp3Result;
  }
}
_inherits(AnimatedTransform, _modDef366);
const entry = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    let num;
    const self = this;
    const _nodes = this._nodes;
    const length = _nodes.length;
    for (let num = 0; num < length; num = num + 1) {
      let obj = _nodes[num];
      let __makeNativeResult = obj.__makeNative(arg0);
    }
    let fn = _get(_getPrototypeOf(AnimatedTransform.prototype), "__makeNative", self);
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
      const f133956 = (__getValue) => __getValue.__getValue();
      return _transforms.map((item) => {
        const obj = {};
        for (const key10006 in item) {
          let arr = item[key10006];
          if (arr instanceof _modDef367) {
            obj[key10006] = f133959(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f133959(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                let obj2 = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof _modDef367) {
                    tmp3 = f133959(tmp9);
                  }
                  obj2[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj2;
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
      let closure_0 = [];
      const _transforms = this._transforms;
      const f133957 = (__getValue) => {
        closure_0.push(__getValue.__getValue());
      };
      const mapped = _transforms.map((item) => {
        const obj = {};
        for (const key10006 in item) {
          let arr = item[key10006];
          if (arr instanceof _modDef367) {
            obj[key10006] = f133959(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f133959(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                let obj2 = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof _modDef367) {
                    tmp3 = f133959(tmp9);
                  }
                  obj2[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj2;
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
      const f133958 = () => f133958.shift();
      return arr.map((item) => {
        const obj = {};
        for (const key10006 in item) {
          let arr = item[key10006];
          if (arr instanceof _modDef367) {
            obj[key10006] = f133959(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f133959(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                let obj2 = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof _modDef367) {
                    tmp3 = f133959(tmp9);
                  }
                  obj2[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj2;
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
      const f133959 = (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue();
      return _transforms.map((item) => {
        const obj = {};
        for (const key10006 in item) {
          let arr = item[key10006];
          if (arr instanceof _modDef367) {
            obj[key10006] = f133959(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((item) => {
                let tmp = item;
                if (item instanceof f133959(dependencyMap[6])) {
                  tmp = closure_1_0(item);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                let obj2 = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp9 = arr[key10013];
                  let tmp3 = tmp9;
                  if (tmp9 instanceof _modDef367) {
                    tmp3 = f133959(tmp9);
                  }
                  obj2[key10013] = tmp3;
                  continue;
                }
                obj[key10006] = obj2;
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
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      let fn = _get(_getPrototypeOf(AnimatedTransform.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      let fn = _get(_getPrototypeOf(AnimatedTransform.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let num;
      const self = this;
      const items = [];
      const _transforms = this._transforms;
      const length = _transforms.length;
      for (let num = 0; num < length; num = num + 1) {
        let tmp = _transforms[num];
        for (const key10012 in tmp) {
          let obj5 = tmp[key10012];
          let push = items.push;
          if (obj5 instanceof _modDef367) {
            let obj2 = { type: "animated", property: key10012, nodeTag: obj5.__getNativeTag() };
            let arr = push(obj2);
            continue;
          } else {
            let obj = { type: "static", property: key10012, value: tmp7Result.transformDataType(obj5) };
            let tmp7Result = get_nativeEventEmitterDefault;
            let arr2 = push(obj);
            continue;
          }
          continue;
        }
      }
      const obj3 = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj3;
    },
  },
];
const entry1 = {
  key: "from",
  value: function from(_transforms) {
    let num;
    let items = _transforms;
    if (!Array.isArray(_transforms)) {
      items = [];
    }
    const items1 = [];
    const length = items.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp = items[num];
      for (const key10017 in tmp) {
        let tmp9 = tmp[key10017];
        if (!(tmp9 instanceof _modDef367)) {
          continue;
        } else {
          let arr = items1.push(tmp9);
          continue;
        }
        continue;
      }
    }
    let tmp5 = null;
    if (0 !== items1.length) {
      let constructResult;
      const obj2 = Object.create(AnimatedTransform.prototype);
      _classCallCheck(obj2, AnimatedTransform);
      const items2 = [undefined];
      const obj = _getPrototypeOf(AnimatedTransform);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items2, _getPrototypeOf(obj2).constructor);
      } else {
        constructResult = obj.apply(obj2, items2);
      }
      const tmp17Result = c3(obj2, constructResult);
      tmp17Result._nodes = items1;
      tmp17Result._transforms = _transforms;
      tmp5 = tmp17Result;
    }
    return tmp5;
  },
};
let items1 = [entry1];

export default _createClass(AnimatedTransform, items, items1);
