// discord_app/modules/quests/native/usePlayableRewardProgress.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PlayableStore from "PlayableStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/usePlayableRewardProgress.tsx");

export default function usePlayableRewardProgress(arg0) {
  _require = arg0;
  items = [PlayableStore];
  const items1 = [arg0];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => ({ timer: PlayableStore.getTimerState(closure_0), isClaimed: PlayableStore.isPlayableCompleted(closure_0) }),
    items1,
  );
  ({ timer, isClaimed } = stateFromStoresObject);
  let startedAt;
  if (timer != null) {
    startedAt = timer.startedAt;
  }
  _slicedToArray = tmp3;
  const obj = require("initialize");
  [tmp5, noop] = noop.useState(() => {
    let num = PlayableStore.getRemainingMs(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
  const items2 = [arg0, timer, null != startedAt, isClaimed];
  const effect = noop.useEffect(() => {
    let num = remainingMs.getRemainingMs(interval);
    if (num == null) {
      num = 0;
    }
    closure_3(num);
    if (closure_2) {
      if (!isClaimed) {
        if (num > 0) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            let num = PlayableStore.getRemainingMs(closure_0);
            if (num == null) {
              num = 0;
            }
            noop(num);
            if (num <= 0) {
              const _clearInterval = clearInterval;
              clearInterval(closure_0);
            }
          }, 250);
          return () => clearInterval(closure_0);
        }
      }
    }
  }, items2);
  let num = 0;
  if (!isClaimed) {
    if (!tmp3) {
      let num2;
      if (timer != null) {
        num2 = timer.remainingMs;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp5 = num2;
    }
    num = tmp5;
  }
  return { remainingSeconds: num / 1000, isClaimed };
}
