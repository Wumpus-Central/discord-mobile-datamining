// discord_app/modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx
import asyncRequire from "../../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SoundmojiRenderingExperiment from "../../SoundmojiRenderingExperiment.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11545, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
}
