// === Module 12553: ? ===

// Module 12553
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import MemoryRouter from "MemoryRouter" /* 4710 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

let closure_2, closure_3;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Linking = react_native.Linking;
const jsx = Fragment.jsx;
const re8 = /.*?:\/\//g;
let closure_1;
class DeepLinking {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, DeepLinking);
    const items1 = [...items];
    const obj = _getPrototypeOf(DeepLinking);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleChange = (url) => {
      closure_0.push(url.url);
    };
    return tmp3Result;
  }
}
_inherits(DeepLinking, react.Component);
const entry = {
  key: "push",
  value: function push(str) {
    const history = this.history;
    history.push(str.replace(re8, ""));
  }
};
let items = [entry, , , ];
const entry1 = {
  key: "componentDidMount",
  value: function componentDidMount() {
    return closure_1(...arguments);
  }
};
closure_1 = _asyncToGenerator(async function() {
  const self = this;
  let c4 = 0;
  let c5 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_3 = self;
            closure_2 = self;
            closure_1 = tmp;
            closure_0 = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: c5.getInitialURL(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          closure_0 = value;
          const tmp6 = closure_0;
          if (tmp6) {
            closure_3.push(closure_0);
          }
          const listener = c5.addEventListener("url", closure_3.handleChange);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  })();
});
items[1] = entry1;
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
    return jsx(MemoryRouter.__HistoryContext.Consumer, {
      children(history) {
        self.history = history;
        return self.props.children || null;
      }
    });
  }
};

export default _createClass(DeepLinking, items);