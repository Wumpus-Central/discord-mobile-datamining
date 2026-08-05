// _runtime/10834__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_inherits";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_createClass";
import importDefaultResult2 from "_inherits";
import { Linking } from "get ActivityIndicator";
import { jsx } from "jsxProd";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
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
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.handleChange = (url) => {
      _undefined.push(url.url);
    };
    return tmp3Result;
  }
}
importDefaultResult2(DeepLinking, require("noop").Component);
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
  let c4 = 0;
  let c5 = 0;
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
        return { value: "T", done: null };
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
            let _classCallCheck = closure_0;
            let closure_1 = tmp2;
            closure_0 = undefined;
            c4 = 1;
            c5 = 1;
            const obj1 = { value: null, done: false };
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
          return { value: "T", done: null };
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