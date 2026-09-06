// _runtime/metro/01573__.js
import CurrentRenderContext from "../01532_CurrentRenderContext.js";
import noop from "00019__.js";

require = arg1;

export const useCurrentRender = function useCurrentRender(arg0) {
  ({ state, navigation } = arg0);
  const context = noop.useContext(CurrentRenderContext.CurrentRenderContext);
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};
