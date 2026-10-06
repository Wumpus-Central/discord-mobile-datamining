// === Module 4665: RiveErrorBoundary ===

// Module 4665 (RiveErrorBoundary)
import reactAll from "react" /* 19 */;
import ManaContext from "ManaContext" /* 4661 */;
import size from "module_2" /* 2 */;

const Component = reactAll.Component;
class RiveErrorBoundary extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { hasError: false };
    return applyArgumentsResult;
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(arg0) {
    const context = this.context;
    const captureException = context.captureException;
    if (captureException != null) {
      captureException(arg0, { rive_render_failed: "true" });
    }
  }
  render() {
    let children;
    const props = this.props;
    if (this.state.hasError) {
      let fallback = props.fallback;
      if (fallback == null) {
        fallback = null;
      }
      children = fallback;
    } else {
      children = props.children;
    }
    return children;
  }
}
const prototype = RiveErrorBoundary.prototype;
RiveErrorBoundary.contextType = ManaContext.ManaContext;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveErrorBoundary.tsx");

export { RiveErrorBoundary };