// _runtime/01141__isNativeReflectConstruct.js
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import noop from "00019_noop.js";

let ErrorBoundary = require;
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const unknown = "unknown";
let closure_8 = { componentStack: null, error: null, eventId: null };
class ErrorBoundary {
  constructor(arg0) {
    self = this;
    closure_0 = global;
    tmp = closure_2(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_1 = tmp3Result;
    tmp3Result.state = closure_8;
    tmp3Result._openFallbackReportDialog = true;
    obj2 = require("feedbackAsyncIntegration");
    client = obj2.getClient();
    showDialog = client;
    if (client) {
      showDialog = global.showDialog;
    }
    if (showDialog) {
      flag = false;
      tmp3Result._openFallbackReportDialog = false;
      str = "afterSendEvent";
      tmp3Result._cleanupHook = client.on("afterSendEvent", (type) => {
        type = type.type;
        let _lastEventId = !type;
        if (!type) {
          _lastEventId = closure_1._lastEventId;
        }
        if (_lastEventId) {
          _lastEventId = type.event_id === closure_1._lastEventId;
        }
        if (_lastEventId) {
          let obj = showDialog(closure_1[6]);
          obj = {};
          const merged = Object.assign(showDialog.dialogOptions);
          obj.eventId = closure_1._lastEventId;
          obj.showReportDialog(obj);
        }
      });
    }
    return tmp3Result;
  }
}
_inherits(ErrorBoundary, noop.Component);
let items = [
  {
    key: "componentDidCatch",
    value: function componentDidCatch(arg0, componentStack) {
      const self = this;
      dependencyMap = arg0;
      closure_2 = componentStack;
      componentStack = componentStack.componentStack;
      ({ beforeCapture: closure_4, onError: _isNativeReflectConstruct, showDialog: noop, dialogOptions: ErrorBoundary } = this.props);
      ErrorBoundary(1024).withScope((arg0) => {
        if (closure_4) {
          tmp(arg0, table, componentStack);
        }
        let obj = self;
        if (null != self.props.handled) {
          let handled = obj.props.handled;
        } else {
          handled = obj.props.fallback;
        }
        const result = closure_1_0(table[7]).captureReactException(table, closure_2, { mechanism: { handled, type: "auto.function.react.error_boundary" } });
        if (closure_5) {
          tmp10(tmp8, componentStack, result);
        }
        if (closure_6) {
          obj._lastEventId = result;
          if (obj._openFallbackReportDialog) {
            obj = {};
            const merged = Object.assign(closure_0);
            obj.eventId = result;
            closure_1_0(table[6]).showReportDialog(obj);
            const tmp6Result = closure_1_0(table[6]);
          }
        }
        obj = { error: tmp8, componentStack, eventId: result };
        obj.setState(obj);
      });
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const onMount = this.props.onMount;
      if (onMount) {
        onMount();
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      const onUnmount = this.props.onUnmount;
      if (onUnmount) {
        if (self.state === closure_8) {
          onUnmount(null, null, null);
        } else {
          onUnmount(tmp, tmp2, tmp3);
        }
      }
      if (self._cleanupHook) {
        self._cleanupHook();
        self._cleanupHook = undefined;
      }
    }
  },
  {
    key: "resetErrorBoundary",
    value: function resetErrorBoundary() {
      const self = this;
      const onReset = this.props.onReset;
      if (onReset) {
        onReset(tmp, tmp2, tmp3);
      }
      self.setState(closure_8);
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      ({ fallback, children } = this.props);
      const state = this.state;
      if (null === state.componentStack) {
        let childrenResult = children;
        if (typeof children === "function") {
          childrenResult = children();
        }
        return childrenResult;
      } else {
        let element = fallback;
        if (typeof fallback === "function") {
          const obj = { error: null, componentStack: null, resetError: null, eventId: null };
          ({ error: obj[0], componentStack: obj[1] } = state);
          obj[2] = function resetError() {
            return self.resetErrorBoundary();
          };
          obj[3] = state.eventId;
          element = <fallback error={null} componentStack={null} resetError={null} eventId={null} />;
        }
        if (!noop.isValidElement(element)) {
          if (fallback) {
            fallback = self(1142).DEBUG_BUILD;
          }
          element = null;
          if (fallback) {
            const debug = self(817).debug;
            debug.warn("fallback did not produce a valid ReactElement");
            element = null;
          }
        }
        return element;
      }
    }
  }
];
const _moduleResult = _createClass(ErrorBoundary, items);
let c9 = _moduleResult;

export const ErrorBoundary = _moduleResult;
export const UNKNOWN_COMPONENT = "unknown";
export const withErrorBoundary = function withErrorBoundary(displayName) {
  ErrorBoundary = displayName;
  dependencyMap = arg1;
  const memoResult = noop.memo((arg0) => {
    let obj = {};
    const merged = Object.assign(closure_1);
    obj = {};
    const merged1 = Object.assign(arg0);
    return <closure_1_9><closure_0 /></closure_1_9>;
  });
  memoResult.displayName = "errorBoundary(" + displayName.displayName || displayName.name || unknown + ")";
  ErrorBoundary(1140).hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};