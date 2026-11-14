// === Module 14854: useVoicePanelDockLevelProps ===

// Module 14854 (useVoicePanelDockLevelProps)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SpeakingStore from "SpeakingStore" /* 6941 */;

const require = globalThis.__r;

const require = fn;
const DEFAULT_VAD_THRESHOLD = fn(2133).DEFAULT_VAD_THRESHOLD;
let closure_9 = fn(14855).VoicePanelDockHiddenContext;
const InputModes = fn(1072).InputModes;
let closure_11 = { tween: true, riseDurationMs: 90, fallDurationMs: 180, tweenFrameRate: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockLevelProps.tsx");

export function useVoicePanelDockGlowLevelProps() {
  const context = noop.useContext(closure_9);
  const shouldAnimateSpeakerLevels = num2(14573).useShouldAnimateSpeakerLevels("VoicePanelDock");
  const obj2 = num2(14573);
  items = [SelectedChannelStore, ChannelStore];
  const stateFromStores = num2(504).useStateFromStores(items, () => channel.getChannel(voiceChannelId.getVoiceChannelId()));
  const obj3 = num2(504);
  const obj4 = num2(13046);
  const items1 = [MediaEngineStore, SpeakingStore];
  const stateFromStoresObject = num2(504).useStateFromStoresObject(items1, () => {
    const mode = MediaEngineStore.getMode();
    const modeOptions = MediaEngineStore.getModeOptions();
    let threshold = modeOptions.threshold;
    if (mode === constants.VOICE_ACTIVITY) {
      const obj = { floorDb: threshold, mode, isPTTActive: currentUserPTTActive.isCurrentUserPTTActive() };
      return obj;
    }
    threshold = DEFAULT_VAD_THRESHOLD;
  });
  const floorDb = stateFromStoresObject.floorDb;
  if (context) {
    num2 = 0;
    let num = 0;
  } else if (!shouldAnimateSpeakerLevels) {
    num2 = 0;
    if (!obj4.createMuteHandler(floorDb(13022)(stateFromStores)).mute) {
      num2 = 0;
      if (tmp8) {
        num2 = 1;
      }
    }
    num = num2;
    tmp8 = tmp5 === InputModes.VOICE_ACTIVITY || tmp6;
  }
  const items2 = [floorDb, num];
  return noop.useMemo(() => {
    const merged = Object.assign(closure_11);
    return { staticLevel: num2, minLevel: Math.max((floorDb - -55) / 45, 0), maxLevel: (floorDb + 25 - -55) / 45 };
  }, items2);
}
export function useVoicePanelDockSpeakerLevelProps() {
  const context = noop.useContext(closure_9);
  const tmp2 = require("MobileRTCV2Experiment").useShouldAnimateSpeakerLevels("VoicePanelDock") && !context;
  _require = tmp2;
  items = [tmp2];
  return noop.useMemo(() => {
    const merged = Object.assign(closure_11);
    return { staticLevel: 0 };
  }, items);
}