// === Module 1552: useNavigationState ===

// Module 1552 (useNavigationState)
import _slicedToArray from "_slicedToArray";
import noop from "noop";


export default function useNavigationState(stateFromStores) {
  const importDefault = stateFromStores;
  obj = importDefault(obj[2])();
  callback = callback(React.useState(() => stateFromStores(obj.getState())), 2)[1];
  React = React.useRef(stateFromStores);
  const effect = React.useEffect(() => {
    noop.current = closure_0;
  });
  const items = [obj];
  const effect1 = React.useEffect(() => obj.addListener("state", (data) => {
    callback(ref.current(data.data.state));
  }), items);
  return stateFromStores(obj.getState());
};