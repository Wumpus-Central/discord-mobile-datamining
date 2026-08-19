// discord_app/modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getSoundmojiRenderingExperiment from "../../SoundmojiRenderingExperiment.tsx";

const result = obj132.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11120, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
  obj = getSoundmojiRenderingExperiment;
};