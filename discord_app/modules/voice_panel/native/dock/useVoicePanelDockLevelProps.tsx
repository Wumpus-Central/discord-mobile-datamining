// === Module 14262: useVoicePanelDockLevelProps ===

// Module 14262 (useVoicePanelDockLevelProps)
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import SpeakingStore from "SpeakingStore" /* 6814 */;

const require = fn;
const DEFAULT_VAD_THRESHOLD = fn(2130).DEFAULT_VAD_THRESHOLD;
const InputModes = fn(1072).InputModes;
let closure_10 = { tween: true, riseDurationMs: 90, fallDurationMs: 180, tweenFrameRate: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockLevelProps.tsx");

export function useVoicePanelDockGlowLevelProps() {
  let tmp;
  const shouldAnimateSpeakerLevels = num(13985).useShouldAnimateSpeakerLevels("VoicePanelDock");
  let obj = num(13985);
  items = [SelectedChannelStore, ChannelStore];
  const stateFromStores = num(504).useStateFromStores(items, () => channel.getChannel(voiceChannelId.getVoiceChannelId()));
  const obj2 = num(504);
  const obj3 = num(12145);
  const items1 = [MediaEngineStore, SpeakingStore];
  const stateFromStoresObject = num(504).useStateFromStoresObject(items1, () => {
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
  if (!shouldAnimateSpeakerLevels) {
    num = 0;
    if (!obj3.createMuteHandler(floorDb(7601)(stateFromStores)).mute) {
      num = 0;
      if (tmp8) {
        num = 1;
      }
    }
    tmp = num;
    tmp8 = tmp5 === InputModes.VOICE_ACTIVITY || tmp6;
  }
  const items2 = [floorDb, tmp];
  return noop.useMemo(() => {
    const merged = Object.assign(closure_10);
    return { staticLevel: num, minLevel: Math.max((floorDb - -55) / 45, 0), maxLevel: (floorDb + 25 - -55) / 45 };
  }, items2);
}
export function useVoicePanelDockSpeakerLevelProps() {
  shouldAnimateSpeakerLevels = shouldAnimateSpeakerLevels(13985).useShouldAnimateSpeakerLevels("VoicePanelDock");
  items = [shouldAnimateSpeakerLevels];
  return noop.useMemo(() => {
    const merged = Object.assign(closure_10);
    return { staticLevel: 0 };
  }, items);
}