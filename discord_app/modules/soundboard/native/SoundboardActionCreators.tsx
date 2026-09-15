// === Module 17208: soundboard/SoundboardActionCreators ===

// Module 17208 (soundboard/SoundboardActionCreators)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4460 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17209, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = { channel, analyticsSource });
  const obj2 = { channel, analyticsSource };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17209, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};