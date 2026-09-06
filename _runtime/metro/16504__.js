// _runtime/metro/16504__.js
import _modDef16505 from "16505__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const ViewShot = importDefault;
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
function validateOptions(options) {
  options = {};
  const merged = Object.assign(closure_12);
  const merged1 = Object.assign(options);
  let tmp6 = "width" in options;
  if (tmp6) {
    const width = options.width;
    let tmp7 = typeof width !== "number";
    if (typeof width === "number") {
      tmp7 = options.width <= 0;
    }
    tmp6 = tmp7;
  }
  const errors = [];
  if (tmp6) {
    errors.push("option width should be a positive number");
    delete tmp[tmp2];
  }
  let tmp9 = "height" in options;
  if (tmp9) {
    const height = options.height;
    let tmp10 = typeof height !== "number";
    if (typeof height === "number") {
      tmp10 = options.height <= 0;
    }
    tmp9 = tmp10;
  }
  if (tmp9) {
    errors.push("option height should be a positive number");
    delete tmp[tmp2];
  }
  const quality = options.quality;
  let tmp12 = typeof quality !== "number";
  if (typeof quality === "number") {
    tmp12 = options.quality < 0;
  }
  if (!tmp12) {
    tmp12 = options.quality > 1;
  }
  if (tmp12) {
    errors.push("option quality should be a number between 0.0 and 1.0");
    options.quality = tmp3.quality;
  }
  if (typeof options.snapshotContentContainer !== "boolean") {
    errors.push("option snapshotContentContainer should be a boolean");
  }
  if (typeof options.handleGLSurfaceViewOnAndroid !== "boolean") {
    errors.push("option handleGLSurfaceViewOnAndroid should be a boolean");
  }
  if (-1 === closure_10.indexOf(options.format)) {
    options.format = tmp3.format;
    const text = `option format '${size.format}`;
    errors.push(`${`option format '${size.format}`}' is not in valid formats: ${obj.join(" | ")}`);
  }
  if (-1 === closure_11.indexOf(options.result)) {
    options.result = tmp3.result;
    const text1 = `option result '${size.result}`;
    errors.push(`${`option result '${size.result}`}' is not in valid formats: ${obj2.join(" | ")}`);
  }
  return { options, errors };
}
function captureRef(current, options) {
  if (ViewShot(16505)) {
    let tmp9 = current;
    if (current) {
      tmp9 = current;
      if (typeof current === "object") {
        tmp9 = current;
        if ("current" in current) {
          tmp9 = current;
          if (current.current) {
            if (!current.current) {
              const _Error2 = Error;
              const error = new Error("ref.current is null");
              return Promise.reject(error);
            }
          }
        }
      }
    }
    let tmp15 = tmp9;
    if (typeof tmp9 !== "number") {
      tmp15 = timestampProducer(tmp9);
      if (!tmp15) {
        const _Error3 = Error;
        const _String = String;
        const error1 = new Error("findNodeHandle failed to resolve view=" + String(tmp9));
        return Promise.reject(error1);
      }
    }
    ({ errors, options } = validateOptions(options));
    const tmp23 = validateOptions(options);
    return tmp(16505).captureRef(tmp15, options);
  } else {
    const _Error = Error;
    const error2 = new Error(
      "react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.",
    );
    throw error2;
  }
  tmp = ViewShot;
}
function releaseCapture(str) {
  if (typeof str === "string") {
    ViewShot(16505).releaseCapture(str);
    const obj = ViewShot(16505);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform, findNodeHandle: metroRequire, StyleProp } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const promise = new Promise(() => {});
if (!_modDef16505) {
  const _console = console;
  console.warn(
    "react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.",
  );
}
let items = ["png", "jpg"];
function ensureModuleIsLoaded() {
  if (!ViewShot(16505)) {
    const _Error = Error;
    const error = new Error(
      "react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.",
    );
    throw error;
  }
}
let closure_10 = items.concat(["webm", "raw"]);
let items1 = ["tmpfile", "base64", "data-uri"];
let closure_11 = items1.concat(["zip-base64"]);
let closure_12 = {
  format: "png",
  quality: 1,
  result: "tmpfile",
  snapshotContentContainer: false,
  handleGLSurfaceViewOnAndroid: false,
};
class ViewShot {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, ViewShot);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(ViewShot);
    tmp3 = closure_3;
    if (closure_8()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    promise = new Promise((resolveFirstLayout) => {
      closure_0.resolveFirstLayout = resolveFirstLayout;
    });
    tmp3Result.firstLayoutPromise = promise;
    tmp3Result.capture = () =>
      closure_0.firstLayoutPromise
        .then(() => {
          const root = closure_1_0.root;
          if (root) {
            let tmp2 = captureRef(root, tmp.props.options);
          } else {
            tmp2 = promise;
          }
          return tmp2;
        })
        .then(
          (result) => {
            closure_1_0.onCapture(result);
            return result;
          },
          (arg0) => {
            closure_1_0.onCaptureFailure(arg0);
            throw arg0;
          },
        );
    tmp3Result.onCapture = (lastCapturedURI) => {
      if (closure_0.root) {
        if (tmp.lastCapturedURI) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(releaseCapture, 500, tmp.lastCapturedURI);
        }
        tmp.lastCapturedURI = lastCapturedURI;
        const onCapture = tmp.props.onCapture;
        if (onCapture) {
          onCapture(lastCapturedURI);
        }
      }
    };
    tmp3Result.onCaptureFailure = (arg0) => {
      if (closure_0.root) {
        const onCaptureFailure = closure_0.props.onCaptureFailure;
        if (onCaptureFailure) {
          onCaptureFailure(arg0);
        }
      }
    };
    tmp3Result.syncCaptureLoop = (arg0) => {
      cancelAnimationFrame(lastCapturedURI._raf);
      if ("continuous" === arg0) {
        lastCapturedURI = "-";
        function loop() {
          lastCapturedURI._raf = requestAnimationFrame(loop);
          if (lastCapturedURI !== lastCapturedURI.lastCapturedURI) {
            lastCapturedURI = obj.lastCapturedURI;
            obj.capture();
          }
        }
        const _requestAnimationFrame = requestAnimationFrame;
        lastCapturedURI._raf = requestAnimationFrame(loop);
      }
    };
    tmp3Result.onRef = (root) => {
      closure_0.root = root;
    };
    tmp3Result.onLayout = (nativeEvent) => {
      const onLayout = closure_0.props.onLayout;
      const firstLayout = closure_0.resolveFirstLayout(nativeEvent.nativeEvent.layout);
      if (onLayout) {
        onLayout(nativeEvent);
      }
    };
    return tmp3Result;
  }
}
_inherits(ViewShot, fn(19).Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    if ("mount" === this.props.captureMode) {
      self.capture();
    } else {
      self.syncCaptureLoop(self.props.captureMode);
    }
  },
};
const items2 = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(captureMode) {
      const self = this;
      let tmp = undefined !== this.props.captureMode;
      if (tmp) {
        tmp = self.props.captureMode !== captureMode.captureMode;
      }
      if (tmp) {
        self.syncCaptureLoop(self.props.captureMode);
      }
      if ("update" === self.props.captureMode) {
        self.capture();
      }
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.syncCaptureLoop(null);
    },
  },
  {
    key: "render",
    value: function render() {
      return (
        <hasOwnProperty ref={this.onRef} collapsable={false} onLayout={this.onLayout} style={this.props.style}>
          {this.props.children}
        </hasOwnProperty>
      );
    },
  },
];
const importDefaultResultResult = _createClass(ViewShot, items2);
importDefaultResultResult.captureRef = captureRef;
importDefaultResultResult.releaseCapture = releaseCapture;

export default importDefaultResultResult;
export { ensureModuleIsLoaded };
export { captureRef };
export { releaseCapture };
export const captureScreen = function captureScreen(options) {
  if (ViewShot(16505)) {
    ({ errors, options } = validateOptions(options));
    const tmp10 = validateOptions(options);
    return tmp(16505).captureScreen(options);
  } else {
    const _Error = Error;
    const error = new Error(
      "react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.",
    );
    throw error;
  }
  tmp = ViewShot;
};
