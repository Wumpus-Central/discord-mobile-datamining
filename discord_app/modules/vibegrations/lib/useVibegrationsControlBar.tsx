// === Module 16498: useVibegrationsControlBar ===

// Module 16498 (useVibegrationsControlBar)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12843 */;

const require = globalThis.__r;

const require = fn;
const interruptTurn = fn(12842).interruptTurn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsControlBar.tsx");

export const VIBEGRATIONS_CONTROL_HANDOFF_MS = 2400;
export const VIBEGRATIONS_CONTROL_STOP_RETRY_MS = 5000;
export const useVibegrationsControlPhase = function useVibegrationsControlPhase(active) {
  [tmp2, tmp3] = noop.useState(active);
  [first] = noop.useState(false);
  closure_1 = tmp6;
  if (active !== tmp2) {
    tmp3(active);
    tmp6(!active);
  }
  const items = [first];
  const effect = noop.useEffect(() => {
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(false), 2400);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let str = "controlling";
  if (!active) {
    let str2 = "idle";
    if (first) {
      str2 = "handoff";
    }
    str = str2;
  }
  return str;
};
export const useVibegrationsControlStop = function useVibegrationsControlStop(projectId) {
  _require = projectId;
  const items = [VibegrationsChatStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let isThinkingResult = null != closure_0;
    if (isThinkingResult) {
      isThinkingResult = VibegrationsChatStore.isThinking(tmp);
    }
    return isThinkingResult;
  });
  [stopping] = noop.useState(false);
  _slicedToArray = tmp4;
  const tmp5 = _slicedToArray(noop.useState(stateFromStores), 2);
  if (stateFromStores !== tmp5[0]) {
    tmp5[1](stateFromStores);
    if (!stateFromStores) {
      tmp4(false);
    }
  }
  const items1 = [stopping];
  const effect = noop.useEffect(() => {
    if (stopping) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [projectId];
  let stop = null;
  if (stateFromStores) {
    stop = noop.useCallback(() => {
      if (null != closure_0) {
        closure_2(true);
        interruptTurn(tmp);
      }
    }, items2);
  }
  return { stop, stopping };
};