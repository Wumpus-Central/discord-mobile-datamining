// === Module 17059: soundboard/SoundboardActionCreators ===

// Module 17059 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17060, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  let obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  obj = { channel, analyticsSource };
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = obj);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17060, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};