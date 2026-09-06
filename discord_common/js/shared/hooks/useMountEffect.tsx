// discord_common/js/shared/hooks/useMountEffect.tsx
import closure_0 from "../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(first) {
  React = React.useRef(first);
  const effect = React.useEffect(() => ref.current(), []);
}
export const useMountLayoutEffect = function useMountLayoutEffect(first) {
  React = React.useRef(first);
  const layoutEffect = React.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(callback) {
  const React = callback;
  closure_1 = React.useRef(callback);
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  const effect1 = React.useEffect(
    () => () => {
      ref.current();
    },
    [],
  );
};
