// === Module 1587: ? ===

// Module 1587
import CurrentRenderContext from "CurrentRenderContext" /* 1546 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useCurrentRender(arg0) {
  ({ state, navigation } = arg0);
  const context = noop.useContext(CurrentRenderContext.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
}