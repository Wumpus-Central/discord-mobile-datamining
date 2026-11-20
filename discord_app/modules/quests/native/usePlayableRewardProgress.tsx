// discord_app/modules/quests/native/usePlayableRewardProgress.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PlayableStore from "PlayableStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/usePlayableRewardProgress.tsx");

export default function usePlayableRewardProgress(playingPlayableId) {
  _require = playingPlayableId;
  items = [PlayableStore];
  const items1 = [playingPlayableId];
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
  noop = _slicedToArray(noop.useState(0), 2)[1];
  const items2 = [playingPlayableId, timer, null != startedAt, isClaimed];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      if (!isClaimed) {
        let num = rewardRemainingMs.getRewardRemainingMs(interval);
        if (num == null) {
          num = 0;
        }
        if (num > 0) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            let num = PlayableStore.getRewardRemainingMs(closure_0);
            if (num == null) {
              num = 0;
            }
            if (num <= 0) {
              const _clearInterval = clearInterval;
              clearInterval(closure_0);
            }
            closure_3((arg0) => arg0 + 1);
          }, 250);
          return () => clearInterval(closure_0);
        }
      }
    }
  }, items2);
  let num = 0;
  if (!isClaimed) {
    let num2 = PlayableStore.getRewardRemainingMs(playingPlayableId);
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  return { remainingSeconds: num / 1000, isClaimed };
}
