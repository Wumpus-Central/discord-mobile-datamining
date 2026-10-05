// === Module 1017: ErrorBoundary ===

// Module 1017 (ErrorBoundary)
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import captureReactException from "captureReactException" /* 1013 */;
import _mod1018 from "module_1018" /* 1018 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap;

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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const unknown = "unknown";
const metroImportAll = { componentStack: null, error: null, eventId: null };
class ErrorBoundary {
  constructor(showDialog) {
    let constructResult;
    const self = this;
    let closure_0 = showDialog;
    _classCallCheck(this, ErrorBoundary);
    const items = [showDialog];
    let obj = _getPrototypeOf(ErrorBoundary);
    if (_isNativeReflectConstruct()) {
      const tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    let closure_1 = tmp3Result;
    tmp3Result.state = state;
    tmp3Result._openFallbackReportDialog = true;
    const obj2 = feedbackAsyncIntegration;
    const client = obj2.getClient();
    const tmp7 = client && showDialog.showDialog;
    if (tmp7) {
      tmp3Result._openFallbackReportDialog = false;
      tmp3Result._cleanupHook = client.on("afterSendEvent", (type) => {
        const _lastEventId = !type.type && closure_1._lastEventId && type.event_id === closure_1._lastEventId;
        if (_lastEventId) {
          const obj = { eventId: closure_1._lastEventId };
          const showReportDialog = ErrorBoundary(closure_2_1[6]).showReportDialog;
          ErrorBoundary(closure_2_1[6]);
          const merged = Object.assign(dialogOptions.dialogOptions);
          showReportDialog(obj);
        }
      });
    }
    return tmp3Result;
  }
}
_inherits(ErrorBoundary, react.Component);
const entry = {
  key: "componentDidCatch",
  value: function componentDidCatch(error, componentStack) {
    let require;
    const self = this;
    dependencyMap = error;
    let closure_2 = componentStack;
    componentStack = componentStack.componentStack;
    ({ beforeCapture: _getPrototypeOf, onError: _isNativeReflectConstruct, showDialog: react, dialogOptions: require } = this.props);
    const obj = feedbackAsyncIntegration;
    obj.withScope((arg0) => {
      let handled;
      if (_getPrototypeOf) {
        tmp(arg0, error, componentStack);
      }
      if (null != self.props.handled) {
        handled = self.props.handled;
      } else {
        handled = self.props.fallback;
      }
      const obj2 = captureReactException;
      const obj3 = { mechanism: { handled, type: "auto.function.react.error_boundary" } };
      const result = obj2.captureReactException(error, closure_2, obj3);
      if (_isNativeReflectConstruct) {
        tmp10(error, componentStack, result);
      }
      if (react) {
        self._lastEventId = result;
        if (self._openFallbackReportDialog) {
          const obj4 = { eventId: result };
          const showReportDialog = feedbackAsyncIntegration.showReportDialog;
          feedbackAsyncIntegration;
          const merged = Object.assign(_require);
          showReportDialog(obj4);
        }
      }
      const obj5 = { error, componentStack, eventId: result };
      self.setState(obj5);
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
      let children;
      let fallback;
      function resetError() {
        return self.resetErrorBoundary();
      }
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
          const obj = { error: null, componentStack: null, resetError, eventId: state.eventId };
          ({ error: obj.error, componentStack: obj.componentStack } = state);
          element = <fallback error={null} componentStack={null} resetError={resetError} eventId={state.eventId} />;
        }
        if (!react.isValidElement(element)) {
          if (fallback) {
            fallback = _mod1018.DEBUG_BUILD;
          }
          element = null;
          if (fallback) {
            const debug = _mod693.debug;
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
const ErrorBoundary_export = _moduleResult;

export { ErrorBoundary_export as ErrorBoundary };
export const UNKNOWN_COMPONENT = "unknown";
export const withErrorBoundary = function withErrorBoundary(displayName, arg1) {
  let closure_1;
  _require = displayName;
  dependencyMap = arg1;
  const tmp = displayName.displayName || displayName.name || unknown;
  const memoResult = react.memo((arg0) => {
    const createElement = react.createElement;
    const merged = Object.assign(closure_1);
    const createElement2 = react.createElement;
    const obj2 = {};
    const merged1 = Object.assign(arg0);
    return <c9>{createElement2(displayName, obj2)}</c9>;
  });
  memoResult.displayName = "errorBoundary(" + tmp + ")";
  const obj = require("module_1016");
  obj.hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};