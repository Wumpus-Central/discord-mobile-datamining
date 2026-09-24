// discord_app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import VoicePanelHeaderConstants from "../../../voice_panel/native/header/VoicePanelHeaderConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let closure_4 = VoicePanelHeaderConstants.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting(
  "modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx",
);

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, isConnectedToVoiceChannel) {
  if (obj.isAndroid()) {
    const obj3 = { channelId, isConnectedToVoiceChannel };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10020, dependencyMap.paths), closure_4, obj3);
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
  obj = PlatformUtils;
};
