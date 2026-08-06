// _runtime/01570_useCurrentRender.js
import noop from "noop";
import { CurrentRenderContext } from "01529_CurrentRenderContext.js";

const require = arg1;

export const useCurrentRender = function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(CurrentRenderContext.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};