// === Module 4621: useMountEffect ===

// Module 4621 (useMountEffect)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(stateFromStores) {
  React = React.useRef(stateFromStores);
  const effect = React.useEffect(() => ref.current(), []);
};
export const useMountLayoutEffect = function useMountLayoutEffect(stateFromStores) {
  React = React.useRef(stateFromStores);
  const layoutEffect = React.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(stateFromStores) {
  const React = stateFromStores;
  let closure_1 = React.useRef(stateFromStores);
  const effect = React.useEffect(() => {
    closure_1.current = noop;
  });
  const effect1 = React.useEffect(() => () => {
    ref.current();
  }, []);
};