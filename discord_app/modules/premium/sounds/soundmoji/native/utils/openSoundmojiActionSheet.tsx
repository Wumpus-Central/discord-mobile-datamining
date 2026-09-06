// discord_app/modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx
import asyncRequireImpl from "../../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SoundmojiRenderingExperiment from "../../SoundmojiRenderingExperiment.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(11934, dependencyMap.paths),
      "soundmoji_actionsheet_key",
      arg0,
    );
  }
  obj = SoundmojiRenderingExperiment;
}
