// _runtime/01549_useCurrentRender.js
import noop from "noop";


export default function useCurrentRender(arg0) {
  let navigation;
  let state;
  ({ state, navigation } = arg0);
  const context = React.useContext(importDefault(1512));
  let isFocusedResult = context;
  if (context) {
    isFocusedResult = navigation.isFocused();
  }
  if (isFocusedResult) {
    context.options = arg0.descriptors[state.routes[state.index].key].options;
  }
};