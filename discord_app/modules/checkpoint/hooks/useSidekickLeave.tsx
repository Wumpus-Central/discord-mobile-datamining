// === Module 13634: useSidekickLeave ===

// Module 13634 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6430 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export function useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep) {
  closure_0 = route;
  closure_1 = stateFromStores3;
  noop = onNextStep;
  noop.useRef(true);
  const items = [onNextStep, onPreviousStep, stateFromStores3, route];
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