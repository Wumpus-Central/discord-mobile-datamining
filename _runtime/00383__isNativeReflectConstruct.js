// === Module 383: _isNativeReflectConstruct ===

// Module 383 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 366 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import closure_5 from "_get" /* 96 */;
import importDefaultResult from "_createClass" /* 42 */;

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
  } catch (err) {
  }
}
class AnimatedTransform {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = closure_2(this, AnimatedTransform);
    items = [];
    items[0] = importDefault;
    tmp2 = closure_4;
    obj = closure_4(AnimatedTransform);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
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
_inheritsDefault(AnimatedTransform, _isNativeReflectConstructDefault);
let obj = {
  key: "__makeNative",
  value: function __makeNative(arg0) {
    const self = this;
    const _nodes = this._nodes;
    for (let num = 0; num < length; num = num + 1) {
      let obj = _nodes[num];
      let __makeNativeResult = obj.__makeNative(arg0);
    }
    let fn = callback3(callback2(self.prototype), "__makeNative", self);
    if (typeof fn === "function") {
      fn = (items) => fn.apply(self, items);
    }
    const items = [arg0];
    fn(items);
  }
};
let items = [
  obj,
  {
    key: "__getValue",
    value: function __getValue() {
      const _transforms = this._transforms;
      const f104872 = (__getValue) => __getValue.__getValue();
      return _transforms.map((obj) => {
        obj = {};
        for (const key10006 in arg0) {
          let tmp5 = key10006;
          let arr = arg0[key10006];
          let tmp6 = f104875;
          let tmp7 = closure_1_1;
          if (arr instanceof f104875(closure_1_1[6])) {
            let tmp4 = f104875;
            obj[key10006] = f104875(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((arg0) => {
                let tmp = arg0;
                if (arg0 instanceof closure_1_0(closure_1_1[6])) {
                  tmp = callback(arg0);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp8 = key10013;
                  let tmp9 = arr[key10013];
                  let tmp10 = f104875;
                  let tmp11 = closure_1_1;
                  let tmp3 = tmp9;
                  if (tmp9 instanceof f104875(closure_1_1[6])) {
                    let tmp2 = f104875;
                    tmp3 = f104875(tmp9);
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
    }
  },
  {
    key: "__getValueWithStaticTransforms",
    value: function __getValueWithStaticTransforms(arr) {
      let f104874 = [];
      const _transforms = this._transforms;
      f104874 = (__getValue) => {
        f104874.push(__getValue.__getValue());
      };
      const mapped = _transforms.map((obj) => {
        obj = {};
        for (const key10006 in arg0) {
          let tmp5 = key10006;
          let arr = arg0[key10006];
          let tmp6 = f104875;
          let tmp7 = closure_1_1;
          if (arr instanceof f104875(closure_1_1[6])) {
            let tmp4 = f104875;
            obj[key10006] = f104875(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((arg0) => {
                let tmp = arg0;
                if (arg0 instanceof closure_1_0(closure_1_1[6])) {
                  tmp = callback(arg0);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp8 = key10013;
                  let tmp9 = arr[key10013];
                  let tmp10 = f104875;
                  let tmp11 = closure_1_1;
                  let tmp3 = tmp9;
                  if (tmp9 instanceof f104875(closure_1_1[6])) {
                    let tmp2 = f104875;
                    tmp3 = f104875(tmp9);
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
      f104874 = () => f104874.shift();
      return arr.map((obj) => {
        obj = {};
        for (const key10006 in arg0) {
          let tmp5 = key10006;
          let arr = arg0[key10006];
          let tmp6 = f104875;
          let tmp7 = closure_1_1;
          if (arr instanceof f104875(closure_1_1[6])) {
            let tmp4 = f104875;
            obj[key10006] = f104875(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((arg0) => {
                let tmp = arg0;
                if (arg0 instanceof closure_1_0(closure_1_1[6])) {
                  tmp = callback(arg0);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp8 = key10013;
                  let tmp9 = arr[key10013];
                  let tmp10 = f104875;
                  let tmp11 = closure_1_1;
                  let tmp3 = tmp9;
                  if (tmp9 instanceof f104875(closure_1_1[6])) {
                    let tmp2 = f104875;
                    tmp3 = f104875(tmp9);
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
    }
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      const _transforms = this._transforms;
      const f104875 = (__getAnimatedValue) => __getAnimatedValue.__getAnimatedValue();
      return _transforms.map((obj) => {
        obj = {};
        for (const key10006 in arg0) {
          let tmp5 = key10006;
          let arr = arg0[key10006];
          let tmp6 = f104875;
          let tmp7 = closure_1_1;
          if (arr instanceof f104875(closure_1_1[6])) {
            let tmp4 = f104875;
            obj[key10006] = f104875(arr);
            continue;
          } else {
            let _Array = Array;
            if (Array.isArray(arr)) {
              obj[key10006] = arr.map((arg0) => {
                let tmp = arg0;
                if (arg0 instanceof closure_1_0(closure_1_1[6])) {
                  tmp = callback(arg0);
                }
                return tmp;
              });
              continue;
            } else {
              if (typeof arr === "object") {
                obj = {};
                let tmp = arr;
                for (const key10013 in arr) {
                  let tmp8 = key10013;
                  let tmp9 = arr[key10013];
                  let tmp10 = f104875;
                  let tmp11 = closure_1_1;
                  let tmp3 = tmp9;
                  if (tmp9 instanceof f104875(closure_1_1[6])) {
                    let tmp2 = f104875;
                    tmp3 = f104875(tmp9);
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
    }
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
      let fn = callback3(callback2(self.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
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
      let fn = callback3(callback2(self.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    }
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const self = this;
      const items = [];
      const _transforms = this._transforms;
      for (let num = 0; num < length; num = num + 1) {
        let tmp = _transforms[num];
        let tmp2 = tmp;
        let tmp3 = num;
        for (const key10012 in tmp) {
          let tmp6 = key10012;
          let obj5 = tmp[key10012];
          let tmp7 = AnimatedTransform;
          let tmp8 = dependencyMap;
          let push = items.push;
          if (obj5 instanceof AnimatedTransform(367)) {
            let obj = { type: "animated", property: null, nodeTag: null };
            obj[1] = key10012;
            obj[2] = obj5.__getNativeTag();
            let arr = push(obj);
            continue;
          } else {
            obj = { type: "static", property: null, value: null };
            obj[1] = key10012;
            let tmp7Result = tmp7(357);
            obj[2] = tmp7Result.transformDataType(obj5);
            arr = push(obj);
            continue;
          }
          continue;
        }
      }
      obj = { type: "transform", transforms: items, debugID: self.__getDebugID() };
      return obj;
    }
  }
];
obj = {
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
      let tmp2 = tmp;
      let tmp3 = num;
      for (const key10017 in tmp) {
        let tmp8 = key10017;
        let tmp9 = tmp[key10017];
        let tmp10 = AnimatedTransform;
        let tmp11 = dependencyMap;
        if (!(tmp9 instanceof AnimatedTransform(367))) {
          continue;
        } else {
          let arr = items1.push(tmp9);
          continue;
        }
        continue;
      }
    }
    if (0 === items1.length) {
      return null;
    } else {
      let obj = Object.create(AnimatedTransform.prototype);
      callback(obj, AnimatedTransform);
      const items2 = [undefined];
      let constructor = callback2;
      obj = callback2(AnimatedTransform);
      if (_isNativeReflectConstruct()) {
        const _Reflect = construct.Reflect;
        construct = _Reflect.construct;
        constructor = constructor(obj).constructor;
        let constructResult = construct(obj, items2, constructor);
      } else {
        constructResult = obj.apply(obj, items2);
      }
      const tmp16Result = closure_3(obj, constructResult);
      tmp16Result._nodes = items1;
      tmp16Result._transforms = _transforms;
      const tmp16 = closure_3;
    }
  }
};
let items1 = [obj];

export default importDefaultResult(AnimatedTransform, items, items1);