// _runtime/metro/06509__.js
import Fragment from "../react/00021_Fragment.js";
import LegacyBaseButton from "../06147_LegacyBaseButton.js";
import react2 from "../06510_react.js";
import react from "../00019_react.js";

const jsx = Fragment.jsx;

export const PanGestureHandler = function PanGestureHandler(arg0) {
  const ref = react.useRef(null);
  const Provider = react2.GestureHandlerRefContext.Provider;
  LegacyBaseButton.PanGestureHandler;
  const merged = Object.assign(arg0);
  return <Provider value={ref}>{null}</Provider>;
};
export const GestureHandlerRootView = LegacyBaseButton.GestureHandlerRootView;
export const GestureState = LegacyBaseButton.State;
