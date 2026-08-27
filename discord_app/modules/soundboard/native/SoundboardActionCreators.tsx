// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ComponentDispatcher from "../../../utils/ComponentDispatchUtils.tsx";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

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