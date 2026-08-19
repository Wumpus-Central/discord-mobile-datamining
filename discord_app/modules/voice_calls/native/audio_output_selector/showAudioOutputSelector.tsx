// === Module 9672: showAudioOutputSelector ===

// Module 9672 (showAudioOutputSelector)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import VOICE_PANEL_SETTINGS_KEY from "VOICE_PANEL_SETTINGS_KEY" /* 9673 */;

const NativeModules = get_ActivityIndicator.NativeModules;
let closure_4 = VOICE_PANEL_SETTINGS_KEY.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = obj132.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = obj1322;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9674, dependencyMap.paths), closure_4, obj);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};