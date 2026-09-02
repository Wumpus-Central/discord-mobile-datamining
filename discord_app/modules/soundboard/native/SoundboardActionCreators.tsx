// === Module 16875: openSoundboardSoundPickerActionSheet ===

// Module 16875 (openSoundboardSoundPickerActionSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4298 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const ComponentActions = ME.ComponentActions;
let result = set.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16876, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  let obj = UNSAFE_isDismissibleContentDismissed;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  obj = { channel, analyticsSource };
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = obj);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16876, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};