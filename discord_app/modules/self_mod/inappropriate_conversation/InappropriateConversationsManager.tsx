// === Module 17030: fadeIn ===

// Module 17030 (fadeIn)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 5038 */;
import createSoundForPack from "createSoundForPack" /* 10040 */;

function fadeIn() {
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_2.loop();
  c4 = 0.5;
  closure_0 = 0.2 * (0.5 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * callback);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_1_2.volume = callback(dependencyMap[1])(closure_3, 0, 0.5);
    }
    clearInterval(closure_5);
    if (tmp9) {
      undefined();
    }
    tmp9 = 0 === rounded1 && false;
  }, 100);
}
function handlePauseMusic() {
  const pause = closure_2.pause;
  closure_0 = pause.bind(closure_2);
  closure_1 = undefined;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  c4 = 0;
  closure_1 = 0.2 * (0 - c3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * table);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_1_2.volume = callback(table[1])(closure_3, 0, 0.5);
    }
    clearInterval(closure_5);
    let tmp10 = 0 === rounded1;
    if (tmp10) {
      tmp10 = null != callback;
    }
    if (tmp10) {
      callback();
    }
  }, 100);
}
function handleStopMusic() {
  const stop = closure_2.stop;
  closure_0 = stop.bind(closure_2);
  closure_1 = undefined;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  c4 = 0;
  closure_1 = 0.2 * (0 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * table);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_1_2.volume = callback(table[1])(closure_3, 0, 0.5);
    }
    clearInterval(closure_5);
    let tmp10 = 0 === rounded1;
    if (tmp10) {
      tmp10 = null != callback;
    }
    if (tmp10) {
      callback();
    }
  }, 100);
}
let closure_2 = createSoundForPack.createSound("vibing_wumpus", "vibing_wumpus", 0);
let c3 = 0;
let c4 = 0;
let c5 = null;
initializeDefault;
let prototype = function InappropriateConversationsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { VIBING_WUMPUS_PLAY_MUSIC: fadeIn, VIBING_WUMPUS_STOP_MUSIC: handleStopMusic, VIBING_WUMPUS_PAUSE_MUSIC: handlePauseMusic };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx");

export default prototype;