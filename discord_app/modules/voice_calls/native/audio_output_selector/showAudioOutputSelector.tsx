// === Module 9114: showAudioOutputSelector ===

// Module 9114 (showAudioOutputSelector)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import VoicePanelHeaderConstants from "VoicePanelHeaderConstants" /* 9115 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    obj = { channelId, isConnectedToVoiceChannel };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9116, dependencyMap.paths), closure_4, obj);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};