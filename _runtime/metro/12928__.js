// === Module 12928: ? ===

// Module 12928
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import "module_19";

const WithLocalSvg = fn;
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
function loadAndroidRawResource(uri) {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _loadAndroidRawResource(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp6;
          c4 = 1;
          c2 = 2;
          c5 = 1;
          const obj4 = { value: WithLocalSvg(dependencyMap[12]).default.getRawResource(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        closure_129_0 = closure_3;
        const _console = console;
        console.error("Error in RawResourceUtils while trying to natively load an Android raw resource: ", closure_129_0);
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp15) {
      closure_3 = tmp15;
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp15;
      } else {
        c2 = tmp;
      }
    }
  }
};
function loadLocalRawResourceAndroid(source) {
  const assetSource = closure_1_11.resolveAssetSource(source);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  if (uri) {
    let tmp3 = typeof uri === "string";
    if (typeof uri === "string") {
      tmp3 = uri.indexOf("/") <= -1;
    }
    if (tmp3) {
      let text = loadAndroidRawResource(uri);
    }
    return text;
  }
  text = WithLocalSvg(8023).fetchText(uri);
  const obj = WithLocalSvg(8023);
}
class LocalSvg {
  constructor(arg0) {
    asset = global.asset;
    tmp = closure_7(global, closure_2);
    tmp2 = closure_6(useState(null), 2);
    closure_1 = tmp2[1];
    items = [];
    items[0] = asset;
    tmp3 = useEffect(() => {
      if (typeof loadLocalRawResourceAndroid === "function") {
        const assetSource = closure_2_11.resolveAssetSource(tmp);
        let uri;
        if (assetSource != null) {
          uri = assetSource.uri;
        }
        if (uri) {
          let tmp6 = typeof uri === "string";
          if (typeof uri === "string") {
            tmp6 = uri.indexOf("/") <= -1;
          }
          if (tmp6) {
            let text = loadAndroidRawResource(uri);
          }
          text.then(dependencyMap);
        }
        text = WithLocalSvg(dependencyMap[11]).fetchText(uri);
        const obj = WithLocalSvg(dependencyMap[11]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, items);
    obj = { xml: tmp2[0] };
    merged = Object.assign(tmp);
    return jsx(asset(closure_1[13]).SvgCss, obj);
  }
}
let closure_2 = ["asset"];
_possibleConstructorReturnDefault;
const noop = fn(19);
({ useState: closure_9, useEffect: c10, Component } = noop);
get_ActivityIndicator = fn(17);
({ Image: closure_11, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let dependencyMap;
class WithLocalSvg {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_3(this, WithLocalSvg);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(WithLocalSvg);
    tmp3 = closure_4;
    if (closure_13()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
_inherits(WithLocalSvg, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this.load(this.props.asset);
  }
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(asset) {
      const self = this;
      asset = this.props.asset;
      if (asset !== asset.asset) {
        self.load(asset);
      }
    }
  },
,

];
const entry1 = { key: "load", value: null };
dependencyMap = asyncGeneratorStep(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  c8 = 0;
  c9 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = self;
            closure_4 = closure_1;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            let tmp7 = null;
            if (closure_1) {
              c8 = 2;
              c9 = 1;
              const obj4 = { value: loadLocalRawResourceAndroid(closure_1), done: false };
              return obj4;
            } else {
              closure_2.xml = tmp7;
              setState(closure_2);
              c6 = 0;
            }
          }
        } else if (1 === tmp6) {
          c6 = 0;
          closure_132_0 = closure_7;
          const _console = console;
          console.error(closure_132_0);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp7 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
        c9 = 3;
      } catch (tmp19) {
        closure_7 = tmp19;
        if (tmp3 === c6) {
          c9 = tmp2;
          throw tmp19;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
});
entry1.value = function load(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[2] = entry1;
items[3] = {
  key: "render",
  value: function render() {
    return jsx(WithLocalSvg(12787).SvgWithCss, { xml: this.state.xml, override: this.props });
  }
};

export default LocalSvg;
export function getUriFromSource(source) {
  const assetSource = closure_1_11.resolveAssetSource(source);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  return uri;
}
export function loadLocalRawResourceDefault(source) {
  const assetSource = closure_1_11.resolveAssetSource(source);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  return WithLocalSvg(8023).fetchText(uri);
}
export function isUriAnAndroidResourceIdentifier(str) {
  let tmp = typeof str === "string";
  if (typeof str === "string") {
    tmp = str.indexOf("/") <= -1;
  }
  return tmp;
}
export { loadAndroidRawResource };
export { loadLocalRawResourceAndroid };
export const loadLocalRawResource = loadLocalRawResourceAndroid;
export { LocalSvg };
export const WithLocalSvg = _createClass(WithLocalSvg, items);