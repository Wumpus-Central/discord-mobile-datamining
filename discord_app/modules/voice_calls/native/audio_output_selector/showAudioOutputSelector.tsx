// === Module 8766: showAudioOutputSelector ===

// Module 8766 (showAudioOutputSelector)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 8767 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8768, dependencyMap.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
  obj = PlatformUtils;
};