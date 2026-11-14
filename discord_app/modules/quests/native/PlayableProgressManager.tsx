// === Module 20887: PlayableProgressManager ===

// Module 20887 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PlayableStore from "PlayableStore" /* 17694 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;

let require = fn;
let closure_5 = new LoggerDefault("PlayableProgressManager");
const prototype = function PlayableProgressManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.timeout = null;
  applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
    closure_0 = applyArgumentsResult;
    const playingPlayableId = PlayableStore.getPlayingPlayableId();
    const tmp3 = null != playingPlayableId && PlayableStore.isRunning(playingPlayableId);
    let remainingMs = null;
    if (null != playingPlayableId) {
      remainingMs = PlayableStore.getRemainingMs(playingPlayableId);
    }
    logger.log("PlayableStore changed", { playableId: playingPlayableId, isRunning: tmp3, hasTimeout: null != applyArgumentsResult.timeout });
    if (tmp3) {
      if (null == applyArgumentsResult.timeout) {
        if (null != remainingMs) {
          if (remainingMs > 0) {
            const _setTimeout = setTimeout;
            applyArgumentsResult.timeout = setTimeout(asyncGeneratorStep(async () => {
              closure_0.timeout = null;
              logger.log("Playable reward timer reached", { playableId: playingPlayableId });
              tmp3(tmp18[4]).dispatch({ type: "PLAYABLE_REWARD_TIMER_COMPLETE", playableId: playingPlayableId });
              tmp3(tmp18[4]);
              await closure_0(tmp18[5]).claimPlayableReward(playingPlayableId, closure_0(tmp18[6]).QuestContent.QUEST_BAR_MOBILE);
              if (1 === tmp7) {
                c3 = 0;
                closure_128_0 = tmp18;
                const obj10 = { text: null, variant: "critical" };
                obj10.text = closure_0(tmp18[8]).resolveBountyRewardClaimErrorMessage(closure_128_0);
                tmp3(tmp18[7]).open("QUESTS_PLAYABLE_REWARD_CLAIM", obj10);
                logger = 3;
                closure_0(tmp18[8]);
                tmp3(tmp18[7]);
              } else if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 !== 2) {
                c3 = 0;
              }
              return value;
            }), remainingMs);
            const obj4 = { playableId: playingPlayableId, remainingMs };
            logger.log("Playable timer started", obj4);
          }
        }
      }
    }
    if (!tmp3) {
      if (null != applyArgumentsResult.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(applyArgumentsResult.timeout);
        applyArgumentsResult.timeout = null;
        const obj5 = { playableId: playingPlayableId };
        logger.log("Playable timer cleared", obj5);
      }
    }
    const obj3 = { playableId: playingPlayableId, isRunning: tmp3, hasTimeout: null != applyArgumentsResult.timeout };
  };
  items = [PlayableStore, applyArgumentsResult.handlePlayableStoreChange];
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