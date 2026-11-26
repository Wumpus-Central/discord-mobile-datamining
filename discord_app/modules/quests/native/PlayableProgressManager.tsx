// === Module 20379: PlayableProgressManager ===

// Module 20379 (PlayableProgressManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PlayableStore from "PlayableStore" /* 16675 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;

let require = fn;
let closure_5 = new LoggerDefault("PlayableProgressManager");
const prototype = function PlayableProgressManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.lastTimerState = null;
  applyArgumentsResult.timeout = null;
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    await closure_0(tmp3[4]).claimPlayableReward(closure_0, closure_0(tmp3[5]).QuestContent.QUEST_BAR_MOBILE);
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      const obj8 = { text: null, variant: "critical" };
      obj8.text = applyArgumentsResult(tmp3[7]).resolveBountyRewardClaimErrorMessage(closure_129_0);
      closure_1(tmp3[6]).open("QUESTS_PLAYABLE_REWARD_CLAIM", obj8);
      c6 = 3;
      applyArgumentsResult(tmp3[7]);
      closure_1(tmp3[6]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c4 = 0;
    }
    return value;
  });
  applyArgumentsResult.claimReward = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  applyArgumentsResult.handlePlayableStoreChange = function handlePlayableStoreChange() {
    playingPlayableId = playingPlayableId.getPlayingPlayableId();
    let timerState = null;
    if (null != playingPlayableId) {
      timerState = obj.getTimerState(playingPlayableId);
    }
    if (timerState !== playingPlayableId.lastTimerState) {
      tmp3.lastTimerState = timerState;
      if (null != tmp3.timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp3.timeout);
      }
      tmp3.timeout = null;
      if (null != playingPlayableId) {
        if (null != timerState) {
          let rewardRemainingMs = null;
          if (!timerState.rewardReached) {
            rewardRemainingMs = obj.getRewardRemainingMs(playingPlayableId);
          }
          let completionRemainingMs = null;
          if (!timerState.completionReached) {
            completionRemainingMs = obj.getCompletionRemainingMs(playingPlayableId);
          }
          let tmp8 = null != rewardRemainingMs;
          if (tmp8) {
            tmp8 = null == completionRemainingMs || rewardRemainingMs <= completionRemainingMs;
            const tmp9 = null == completionRemainingMs || rewardRemainingMs <= completionRemainingMs;
          }
          closure_1 = tmp8;
          if (tmp8) {
            completionRemainingMs = rewardRemainingMs;
          }
          if (null != completionRemainingMs) {
            let num = obj.getPlayedMs(playingPlayableId);
            if (num == null) {
              num = 0;
            }
            let isRunningResult = obj.isRunning(playingPlayableId);
            if (!isRunningResult) {
              isRunningResult = 0 === completionRemainingMs && tmp10;
              const tmp12 = 0 === completionRemainingMs && tmp10;
            }
            if (isRunningResult) {
              const _setTimeout = setTimeout;
              tmp3.timeout = setTimeout(() => {
                applyArgumentsResult.timeout = null;
                if (closure_1) {
                  const obj3 = { playableId: playingPlayableId };
                  logger.log("Playable reward timer reached", obj3);
                  const obj4 = { type: "PLAYABLE_REWARD_TIMER_COMPLETE", playableId: playingPlayableId };
                  DispatcherDefault.dispatch(obj4);
                  applyArgumentsResult.claimReward(playingPlayableId);
                } else {
                  const obj6 = { type: "PLAYABLE_COMPLETION_REACHED", playableId: playingPlayableId };
                  DispatcherDefault.dispatch(obj6);
                }
              }, completionRemainingMs);
            }
            tmp10 = num > 0;
          }
        }
      }
    }
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