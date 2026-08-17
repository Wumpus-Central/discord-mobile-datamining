// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const ComponentActions = ME.ComponentActions;
let result = set.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = UNSAFE_isDismissibleContentDismissed;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16282, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};