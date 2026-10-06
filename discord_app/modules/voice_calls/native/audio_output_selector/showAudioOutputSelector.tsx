// discord_app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import VoicePanelHeaderConstants from "../../../voice_panel/native/header/VoicePanelHeaderConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NativeModules = react_native.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx",
);

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(9346, dependencyMap.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};
