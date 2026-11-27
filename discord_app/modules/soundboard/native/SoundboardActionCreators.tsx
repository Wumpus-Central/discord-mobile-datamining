// === Module 18234: soundboard/SoundboardActionCreators ===

// Module 18234 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1071 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18235, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18235, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, startExpanded });
}