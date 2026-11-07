// === Module 19529: soundboard/SoundboardActionCreators ===

// Module 19529 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation, startExpanded } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19530, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation, startExpanded });
}
export function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, startExpanded } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation, startExpanded: startExpanded2 } = { channel, analyticsSource, startExpanded });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19530, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation, startExpanded: startExpanded2 });
}