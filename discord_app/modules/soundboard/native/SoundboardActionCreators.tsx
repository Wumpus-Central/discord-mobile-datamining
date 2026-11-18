// === Module 18069: soundboard/SoundboardActionCreators ===

// Module 18069 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18070, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18070, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}