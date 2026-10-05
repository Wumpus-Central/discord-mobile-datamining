// === Module 18005: InappropriateConversationsManager ===

// Module 18005 (InappropriateConversationsManager)
import clampDefault from "clamp" /* 5015 */;
import SoundUtils from "SoundUtils" /* 9562 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

function fadeIn() {
  let closure_5;
  let interval;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_2.loop();
  c4 = 0.5;
  let closure_0 = 0.2 * (0.5 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * closure_0);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_2.volume = clampDefault(closure_3, 0, 0.5);
    }
    clearInterval(c5);
    const tmp9 = 0 === rounded1 && false;
    if (tmp9) {
      undefined();
    }
  }, 100);
}
function handlePauseMusic() {
  let closure_5;
  let interval;
  const pause = closure_2.pause;
  let closure_0 = pause.bind(closure_2);
  let closure_1;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  c4 = 0;
  closure_1 = 0.2 * (0 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * closure_1);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_2.volume = clampDefault(closure_3, 0, 0.5);
    }
    clearInterval(c5);
    const tmp10 = 0 === rounded1 && null != closure_0;
    if (tmp10) {
      closure_0();
    }
  }, 100);
}
function handleStopMusic() {
  let closure_5;
  let interval;
  const stop = closure_2.stop;
  let closure_0 = stop.bind(closure_2);
  let closure_1;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  c4 = 0;
  closure_1 = 0.2 * (0 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * closure_1);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_2.volume = clampDefault(closure_3, 0, 0.5);
    }
    clearInterval(c5);
    const tmp10 = 0 === rounded1 && null != closure_0;
    if (tmp10) {
      closure_0();
    }
  }, 100);
}
let closure_2 = SoundUtils.createSound("vibing_wumpus", "vibing_wumpus", 0);
let closure_3 = 0;
let c4 = 0;
let c5 = null;
class InappropriateConversationsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { VIBING_WUMPUS_PLAY_MUSIC: fadeIn, VIBING_WUMPUS_STOP_MUSIC: handleStopMusic, VIBING_WUMPUS_PAUSE_MUSIC: handlePauseMusic };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const inappropriateConversationsManager = new InappropriateConversationsManager();
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx");

export default inappropriateConversationsManager;