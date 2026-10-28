// === Module 19758: PlayableProgressManager ===

// Module 19758 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import PlayableStore from "PlayableStore" /* 19759 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;

let closure_1 = new LoggerDefault("PlayableProgressManager");
const prototype = function PlayableProgressManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  PlayableStore = applyArgumentsResult;
  applyArgumentsResult.timeout = null;
  applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
    const playingPlayableId = applyArgumentsResult.getPlayingPlayableId();
    let tmp2 = null != playingPlayableId && applyArgumentsResult.isRunning(playingPlayableId);
    logger.log("PlayableStore changed", { playableId: playingPlayableId, isRunning: tmp2, hasTimeout: null != playingPlayableId.timeout });
    if (tmp2) {
      if (null == tmp3.timeout) {
        const remainingMs = applyArgumentsResult.getRemainingMs(playingPlayableId);
        if (null != remainingMs) {
          const _setTimeout = setTimeout;
          tmp3.timeout = setTimeout(() => {
            applyArgumentsResult.timeout = null;
            logger.log("Playable reward timer reached", { playableId: playingPlayableId });
          }, remainingMs);
          const obj4 = { playableId: playingPlayableId, remainingMs };
          logger.log("Playable timer started", obj4);
        }
      }
    }
    if (!tmp2) {
      tmp2 = null == tmp3.timeout;
    }
    if (!tmp2) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp3.timeout);
      tmp3.timeout = null;
      const obj5 = { playableId: playingPlayableId };
      logger.log("Playable timer cleared", obj5);
    }
    const obj3 = { playableId: playingPlayableId, isRunning: tmp2, hasTimeout: null != playingPlayableId.timeout };
  };
  const items = [PlayableStore, applyArgumentsResult.handlePlayableStoreChange];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.actions = {};
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/PlayableProgressManager.tsx");

export default prototype1;