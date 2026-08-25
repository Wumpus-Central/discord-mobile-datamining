// _runtime/11051__isNativeReflectConstruct.js
import noopDefault from "00019_noop.js";
import closure_2 from "metro/00041__classCallCheck.js";
import importDefaultResult from "00005_asyncGeneratorStep.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult1 from "metro/00042__createClass.js";
import importDefaultResult2 from "00098__inherits.js";
import { Linking } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const DeepLinking = arg1;
let closure_1 = dependencyMap;
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
const re8 = /.*?:\/\//g;
closure_1 = undefined;
class DeepLinking {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_2(this, closure_0);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleChange = (url) => {

    };
    return tmp3Result;
  }
}
importDefaultResult2(DeepLinking, noopDefault.Component);
let obj = {
  key: "push",
  value: function push(str) {
    const history = this.history;
    history.push(str.replace(closure_8, ""));
  }
};
let items = [obj, , , ];
obj = { key: "componentDidMount", value: null };
closure_1 = importDefaultResult(function() {
  const self = this;
  c4 = 0;
  c5 = 0;
  return (function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let arr = closure_0;
            closure_2 = closure_0;
            closure_1 = tmp2;
            closure_0 = undefined;
            c4 = 1;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = c5.getInitialURL();
            return obj1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          if (closure_0) {
            arr = arr.push(closure_0);
          }
          const listener = c5.addEventListener("url", arr.handleChange);
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
});
obj[1] = function componentDidMount() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[1] = obj;
items[2] = {
  key: "componentWillUnmount",
  value: function componentWillUnmount() {
    const removed = Linking.removeEventListener("url", this.handleChange);
  }
};
items[3] = {
  key: "render",
  value: function render() {
    const self = this;
    return jsx(self(table[9]).__HistoryContext.Consumer, {
      children(history) {
        self.history = history;
        return self.props.children || null;
      }
    });
  }
};

export default importDefaultResult1(DeepLinking, items);