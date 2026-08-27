// === Module 4898: useMountEffect ===

// Module 4898 (useMountEffect)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(stateFromStores) {
  React = React.useRef(stateFromStores);
  const effect = React.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(stateFromStores) {
  React = React.useRef(stateFromStores);
  const layoutEffect = React.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(callback) {
  const React = callback;
  closure_1 = React.useRef(callback);
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  const effect1 = React.useEffect(() => () => {
    ref.current();
  }, []);
};