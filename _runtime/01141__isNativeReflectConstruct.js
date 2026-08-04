import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import c3 from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import noop from "noop";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
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
    tmp = _isNativeReflectConstruct(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(closure_0);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.state = Symbol;
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
          _lastEventId = tmp3Result._lastEventId;
        }
        if (_lastEventId) {
          _lastEventId = type.event_id === tmp3Result._lastEventId;
        }
        if (_lastEventId) {
          let obj = showDialog(tmp3Result[6]);
          obj = {};
          const merged = Object.assign(showDialog.dialogOptions);
          obj.eventId = tmp3Result._lastEventId;
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
      let ErrorBoundary;
      let _getPrototypeOf;
      let _isNativeReflectConstruct;
      let noop;
      const self = this;
      const dependencyMap = arg0;
      let closure_2 = componentStack;
      componentStack = componentStack.componentStack;
      ({ beforeCapture: _getPrototypeOf, onError: _isNativeReflectConstruct, showDialog: noop, dialogOptions: ErrorBoundary } = this.props);
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
        const result = outer1_0(table[7]).captureReactException(table, closure_2, { mechanism: { handled, type: "auto.function.react.error_boundary" } });
        if (closure_5) {
          tmp10(tmp8, componentStack, result);
        }
        if (closure_6) {
          obj._lastEventId = result;
          if (obj._openFallbackReportDialog) {
            obj = {};
            const merged = Object.assign(closure_0);
            obj.eventId = result;
            outer1_0(table[6]).showReportDialog(obj);
            const tmp6Result = outer1_0(table[6]);
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
      let children;
      let fallback;
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
  const ErrorBoundary = displayName;
  const dependencyMap = arg1;
  const memoResult = noop.memo((arg0) => {
    let obj = {};
    const merged = Object.assign(closure_1);
    obj = {};
    const merged1 = Object.assign(arg0);
    return <outer1_9><closure_0 /></outer1_9>;
  });
  memoResult.displayName = "errorBoundary(" + displayName.displayName || displayName.name || unknown + ")";
  ErrorBoundary(1140).hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};