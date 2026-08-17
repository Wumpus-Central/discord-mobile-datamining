// _runtime/06630__isNativeReflectConstruct.js
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 6610 */;
import closure_2 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult1 from "_inherits" /* 98 */;

let FeFuncA = arg1;
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
class FeComponentTransferFunction {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, FeFuncA);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FeFuncA);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "UNKNOWN";
    return tmp3Result;
  }
}
FeFuncA = FeComponentTransferFunction;
importDefaultResult1(FeComponentTransferFunction, _isNativeReflectConstructDefault);
let items = [
  {
    key: "render",
    value: function render() {
      const result = FeFuncA(6587).warnUnimplementedFilter();
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(FeComponentTransferFunction, items);
importDefaultResultResult.defaultProps = { type: "identity", tableValues: [], slope: 1, intercept: 0, amplitude: 1, exponent: 1, offset: 0 };
class FeFuncR {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, FeFuncA);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FeFuncA);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "R";
    return tmp3Result;
  }
}
FeFuncA = FeFuncR;
importDefaultResult1(FeFuncR, importDefaultResultResult);
const importDefaultResultResult1 = importDefaultResult(FeFuncR);
importDefaultResultResult1.displayName = "FeFuncR";
class FeFuncG {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, FeFuncA);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FeFuncA);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "G";
    return tmp3Result;
  }
}
FeFuncA = FeFuncG;
importDefaultResult1(FeFuncG, importDefaultResultResult);
const importDefaultResultResult2 = importDefaultResult(FeFuncG);
importDefaultResultResult2.displayName = "FeFuncG";
class FeFuncB {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, FeFuncA);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FeFuncA);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "B";
    return tmp3Result;
  }
}
FeFuncA = FeFuncB;
importDefaultResult1(FeFuncB, importDefaultResultResult);
const importDefaultResultResult3 = importDefaultResult(FeFuncB);
importDefaultResultResult3.displayName = "FeFuncB";
class FeFuncA {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, FeFuncA);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(FeFuncA);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.channel = "A";
    return tmp3Result;
  }
}
importDefaultResult1(FeFuncA, importDefaultResultResult);
const importDefaultResultResult4 = importDefaultResult(FeFuncA);
importDefaultResultResult4.displayName = "FeFuncA";

export default importDefaultResultResult;
export const FeFuncR = importDefaultResultResult1;
export const FeFuncG = importDefaultResultResult2;
export const FeFuncB = importDefaultResultResult3;
export const FeFuncA = importDefaultResultResult4;