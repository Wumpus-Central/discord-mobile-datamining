// discord_app/modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx
import { NativeModules } from "get ActivityIndicator";
import { VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY as closure_4 } from "VOICE_PANEL_SETTINGS_KEY";
import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("set").fileFinishedImporting("modules/voice_calls/native/audio_output_selector/showAudioOutputSelector.tsx");

export const showAudioOutputSelector = function showAudioOutputSelector(channelId, closure_1) {
  let obj = set;
  if (obj.isAndroid()) {
    obj = { channelId: null, isConnectedToVoiceChannel: null };
    obj[0] = channelId;
    obj[1] = closure_1;
    ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(9097, dependencyMap.paths), closure_4, obj);
    const obj2 = ACTION_SHEET_HEIGHT_HALF;
  } else {
    const AudioRoutePicker = NativeModules.AudioRoutePicker;
    if (AudioRoutePicker != null) {
      AudioRoutePicker.showAudioPicker();
    }
  }
};