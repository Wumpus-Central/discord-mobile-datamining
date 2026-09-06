// === Module 1006: ? ===

// Module 1006
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
const React6 = { componentStack: null, error: null, eventId: null };
class ErrorBoundary {
  constructor(arg0) {
    self = this;
    closure_0 = global;
    tmp = c2(this, ErrorBoundary);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(ErrorBoundary);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
    obj2 = closure_0(closure_1[6]);
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
          ErrorBoundary(889);
          const obj = {};
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
const entry = {
  key: "componentDidCatch",
  value: function componentDidCatch(arg0, componentStack) {
    const self = this;
    dependencyMap = arg0;
    closure_2 = componentStack;
    componentStack = componentStack.componentStack;
    ({ beforeCapture: _getPrototypeOf, onError: _isNativeReflectConstruct, showDialog: noop, dialogOptions: ErrorBoundary } = this.props);
    ErrorBoundary(889).withScope((arg0) => {
      if (_getPrototypeOf) {
        tmp(arg0, closure_1, componentStack);
      }
      let obj = self;
      if (null != self.props.handled) {
        let handled = obj.props.handled;
      } else {
        handled = obj.props.fallback;
      }
      let obj1 = ErrorBoundary(1002);
      obj = { mechanism: { handled, type: "auto.function.react.error_boundary" } };
      const result = obj1.captureReactException(closure_1, closure_2, obj);
      if (_isNativeReflectConstruct) {
        tmp10(tmp8, componentStack, result);
      }
      if (noop) {
        obj._lastEventId = result;
        if (obj._openFallbackReportDialog) {
          obj = {};
          const merged = Object.assign(closure_1_0);
          obj.eventId = result;
          ErrorBoundary(889).showReportDialog(obj);
          const tmp6Result = ErrorBoundary(889);
        }
      }
      obj1 = { error: tmp8, componentStack, eventId: result };
      obj.setState(obj1);
    });
  }
};
let items = [
  entry,
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
      state = this.state;
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
          ({ error: obj.error, componentStack: obj.componentStack } = state);
          obj.resetError = function resetError() {
            return self.resetErrorBoundary();
          };
          obj.eventId = state.eventId;
          element = <fallback error={null} componentStack={null} resetError={null} eventId={null} />;
        }
        if (!noop.isValidElement(element)) {
          if (fallback) {
            fallback = ErrorBoundary(1007).DEBUG_BUILD;
          }
          element = null;
          if (fallback) {
            const debug = ErrorBoundary(682).debug;
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

export const ErrorBoundary = _moduleResult;
export const UNKNOWN_COMPONENT = "unknown";
export const withErrorBoundary = function withErrorBoundary(displayName, arg1) {
  ErrorBoundary = displayName;
  dependencyMap = arg1;
  const memoResult = noop.memo((arg0) => {
    let obj = {};
    const merged = Object.assign(closure_1);
    obj = {};
    const merged1 = Object.assign(arg0);
    return <_moduleResult><closure_0 /></_moduleResult>;
  });
  memoResult.displayName = "errorBoundary(" + displayName.displayName || displayName.name || unknown + ")";
  ErrorBoundary(1005).hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};