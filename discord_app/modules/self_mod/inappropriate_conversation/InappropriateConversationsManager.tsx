import createSoundForPack from "createSoundForPack";
import "initialize";

function fadeIn() {
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_2.loop();
  let c4 = 0.5;
  let closure_0 = 0.2 * (0.5 - c3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * callback);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * outer1_3);
    if (rounded <= 0) {
      outer1_3 = (rounded2 + rounded) / 100;
      outer1_2.volume = callback(outer1_1[1])(outer1_3, 0, 0.5);
    }
    clearInterval(closure_5);
    if (tmp9) {
      undefined();
    }
  }, 100);
}
function handlePauseMusic() {
  const pause = closure_2.pause;
  let closure_0 = pause.bind(closure_2);
  let closure_1;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  let c4 = 0;
  closure_1 = 0.2 * (0 - c3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * table);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * outer1_3);
    if (rounded <= 0) {
      outer1_3 = (rounded2 + rounded) / 100;
      outer1_2.volume = callback(table[1])(outer1_3, 0, 0.5);
    }
    clearInterval(closure_5);
    let tmp10 = 0 === rounded1;
    if (tmp10) {
      tmp10 = null != tmp;
    }
    if (tmp10) {
      tmp();
    }
  }, 100);
}
function handleStopMusic() {
  const stop = closure_2.stop;
  let closure_0 = stop.bind(closure_2);
  let closure_1;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  let c4 = 0;
  closure_1 = 0.2 * (0 - c3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * table);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * outer1_3);
    if (rounded <= 0) {
      outer1_3 = (rounded2 + rounded) / 100;
      outer1_2.volume = callback(table[1])(outer1_3, 0, 0.5);
    }
    clearInterval(closure_5);
    let tmp10 = 0 === rounded1;
    if (tmp10) {
      tmp10 = null != tmp;
    }
    if (tmp10) {
      tmp();
    }
  }, 100);
}
let closure_2 = createSoundForPack.createSound("vibing_wumpus", "vibing_wumpus", 0);
let c3 = 0;
let c4 = 0;
let c5 = null;
let prototype = function InappropriateConversationsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { VIBING_WUMPUS_PLAY_MUSIC: fadeIn, VIBING_WUMPUS_STOP_MUSIC: handleStopMusic, VIBING_WUMPUS_PAUSE_MUSIC: handlePauseMusic };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx");

export default prototype;