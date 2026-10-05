// _runtime/01580_react.js
import react2 from "01539_react.js";
import react from "00019_react.js";

export const useCurrentRender = function useCurrentRender(descriptors) {
  let state;
  ({ state, navigation } = descriptors);
  descriptors = descriptors.descriptors;
  const context = react.useContext(react2.CurrentRenderContext);
  const tmp2 = context && navigation.isFocused();
  if (tmp2) {
    context.options = descriptors[state.routes[state.index].key].options;
  }
};
