// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(19209, dependencyMap.paths),
    "SoundboardSoundPickerActionSheet",
    { channel, analyticsSource, startExpanded },
  );
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(19209, dependencyMap.paths),
    "SoundboardSoundPickerActionSheet",
    { channel, analyticsSource, startExpanded },
  );
}
