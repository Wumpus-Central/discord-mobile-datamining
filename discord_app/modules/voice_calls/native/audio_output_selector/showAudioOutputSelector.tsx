// === Module 9389: showAudioOutputSelector ===

// Module 9389 (showAudioOutputSelector)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set2 from "set" /* 500 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import VOICE_PANEL_SETTINGS_KEY from "VOICE_PANEL_SETTINGS_KEY" /* 9390 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let closure_4 = VOICE_PANEL_SETTINGS_KEY.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = set2;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9391, dependencyMap.paths), closure_4, obj);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};