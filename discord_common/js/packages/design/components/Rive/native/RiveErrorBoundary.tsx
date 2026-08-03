import { Component } from "noop";

class RiveErrorBoundary extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.state = { hasError: false };
    return applyArgumentsResult;
  }
}
const prototype = RiveErrorBoundary.prototype;
RiveErrorBoundary["getDerivedStateFromError"] = function getDerivedStateFromError(closure_4) {
  return { hasError: true };
};
prototype["componentDidCatch"] = function componentDidCatch(arg0) {
  const context = this.context;
  const captureException = context.captureException;
  if (captureException != null) {
    captureException(arg0, { rive_render_failed: "true" });
  }
};
prototype["render"] = function render() {
  const props = this.props;
  if (this.state.hasError) {
    let fallback = props.fallback;
    if (fallback == null) {
      fallback = null;
    }
    let children = fallback;
  } else {
    children = props.children;
  }
  return children;
};
RiveErrorBoundary.contextType = require("context").ManaContext;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveErrorBoundary.tsx");

export { RiveErrorBoundary };