// === Module 17202: soundboard/SoundboardActionCreators ===

// Module 17202 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17203, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = { channel, analyticsSource });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17203, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};