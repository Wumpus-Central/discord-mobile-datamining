// discord_app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import set2 from "../../../../utils/PlatformUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import VOICE_PANEL_SETTINGS_KEY from "../../../voice_panel/native/header/VoicePanelHeaderConstants.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
let closure_4 = VOICE_PANEL_SETTINGS_KEY.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = set2;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9323, dependencyMap.paths), closure_4, obj);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};