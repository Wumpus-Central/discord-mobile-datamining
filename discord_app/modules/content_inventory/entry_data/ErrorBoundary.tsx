// === Module 18850: entry_data/ErrorBoundary ===

// Module 18850 (entry_data/ErrorBoundary)
import _modAll19 from "module_19" /* 19 */;

const PureComponent = _modAll19.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.state = { error: null };
    return applyArgumentsResult;
  }
}
const prototype = ErrorBoundary.prototype;
ErrorBoundary["getDerivedStateFromError"] = function getDerivedStateFromError(error) {
  return { error };
};
prototype["componentDidCatch"] = function componentDidCatch() {

};
prototype["render"] = function render() {
  const self = this;
  if (null != this.state.error) {
    let children = self.props.fallback;
  } else {
    children = self.props.children;
  }
  return children;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/entry_data/ErrorBoundary.tsx");

export { ErrorBoundary };