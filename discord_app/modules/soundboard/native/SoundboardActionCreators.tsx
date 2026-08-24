// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ComponentDispatcher from "../../../utils/ComponentDispatchUtils.tsx";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

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