// === Module 16552: openSoundboardSoundPickerActionSheet ===

// Module 16552 (openSoundboardSoundPickerActionSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4266 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const ComponentActions = ME.ComponentActions;
let result = set.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16553, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource, initialScrollLocation });
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  let obj = UNSAFE_isDismissibleContentDismissed;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  obj = { channel, analyticsSource };
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = obj);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16553, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation });
};