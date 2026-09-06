// _runtime/metro/12785__.js
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const DeepLinking = fn;
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
const Linking = fn(17).Linking;
const jsx = fn(21).jsx;
const re8 = /.*?:\/\//g;
let closure_1;
class DeepLinking {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, DeepLinking);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(DeepLinking);
    tmp3 = closure_3;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleChange = (url) => {
      closure_0.push(url.url);
    };
    return tmp3Result;
  }
}
_inherits(DeepLinking, noop.Component);
const entry = {
  key: "push",
  value: function push(str) {
    const history = this.history;
    history.push(str.replace(re8, ""));
  },
};
let items = [entry, , ,];
const entry1 = { key: "componentDidMount", value: null };
closure_1 = asyncGeneratorStep(async function () {
  const self = this;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = self;
            closure_2 = self;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            c4 = 1;
            c5 = 1;
            const obj1 = { value: c5.getInitialURL(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_0 = value;
          if (closure_129_0) {
            closure_3.push(closure_129_0);
          }
          const listener = c5.addEventListener("url", closure_3.handleChange);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        c5 = tmp;
        throw tmp17;
      }
    }
  })();
});
entry1.value = function componentDidMount() {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[1] = entry1;
items[2] = {
  key: "componentWillUnmount",
  value: function componentWillUnmount() {
    const removed = Linking.removeEventListener("url", this.handleChange);
  },
};
items[3] = {
  key: "render",
  value: function render() {
    const self = this;
    return jsx(DeepLinking(closure_1[9]).__HistoryContext.Consumer, {
      children(history) {
        self.history = history;
        return self.props.children || null;
      },
    });
  },
};

export default _createClass(DeepLinking, items);
