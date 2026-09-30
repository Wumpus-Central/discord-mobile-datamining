// discord_app/modules/vibegrations/lib/useDelayedReveal.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useDelayedReveal.tsx");

export default function useDelayedReveal(arg0, IDEAS_OFFER_REVEAL_DELAY_MS) {
  let tmp = arg0;
  closure_0 = arg0;
  closure_1 = IDEAS_OFFER_REVEAL_DELAY_MS;
  [first] = noop.useState(arg0);
  closure_3 = tmp4;
  let tmp5 = !arg0;
  if (!arg0) {
    tmp5 = first;
  }
  if (tmp5) {
    tmp4(false);
  }
  const items = [tmp, first, IDEAS_OFFER_REVEAL_DELAY_MS];
  const effect = noop.useEffect(() => {
    if (timeout) {
      if (!first) {
        const _window = window;
        timeout = window.setTimeout(() => closure_1_3(true), closure_1);
        return () => window.clearTimeout(closure_0);
      }
    }
  }, items);
  if (tmp) {
    tmp = first;
  }
  return tmp;
}
