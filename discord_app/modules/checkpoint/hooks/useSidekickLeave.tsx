// === Module 12856: useSidekickLeave ===

// Module 12856 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6736 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export function useSidekickLeave(route, stateFromStores2, onNextStep, onPreviousStep) {
  closure_0 = route;
  closure_1 = stateFromStores2;
  noop = onNextStep;
  noop.useRef(true);
  items = [onNextStep, onPreviousStep, stateFromStores2, route];
  const effect = noop.useEffect(() => {
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        onPreviousStep();
      } else if (closure_1) {
        onNextStep();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(onNextStep, 1000);
        return () => clearTimeout(closure_0);
      }
    } else {
      ref.current = false;
    }
  }, items);
}