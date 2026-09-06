// discord_app/modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx
import _modDef4684 from "../../../../_runtime/metro/04684__.js";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function fadeIn() {
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_2.loop();
  c4 = 0.5;
  closure_0 = 0.2 * (0.5 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * closure_0);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_2.volume = _modDef4684(closure_3, 0, 0.5);
    }
    clearInterval(c5);
    if (tmp9) {
      undefined();
    }
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
  closure_1 = 0.2 * (0 - closure_3);
  interval = setInterval(() => {
    const rounded = Math.round(100 * closure_1);
    const rounded1 = Math.round(100 * c4);
    const rounded2 = Math.round(100 * closure_3);
    if (rounded <= 0) {
      closure_3 = (rounded2 + rounded) / 100;
      closure_2.volume = _modDef4684(closure_3, 0, 0.5);
    }
    clearInterval(c5);
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
  closure_0 = stop.bind(closure_2);
  closure_1 = undefined;
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
      closure_2.volume = _modDef4684(closure_3, 0, 0.5);
    }
    clearInterval(c5);
    let tmp10 = 0 === rounded1;
    if (tmp10) {
      tmp10 = null != tmp;
    }
    if (tmp10) {
      tmp();
    }
  }, 100);
}
let closure_2 = SoundUtils.createSound("vibing_wumpus", "vibing_wumpus", 0);
let closure_3 = 0;
let c4 = 0;
let c5 = null;
let prototype = function InappropriateConversationsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    VIBING_WUMPUS_PLAY_MUSIC: fadeIn,
    VIBING_WUMPUS_STOP_MUSIC: handleStopMusic,
    VIBING_WUMPUS_PAUSE_MUSIC: handlePauseMusic,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx",
);

export default prototype;
