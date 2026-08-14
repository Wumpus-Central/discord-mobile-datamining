// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import { ComponentActions } from "ME";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { ComponentDispatcher } from "../../../utils/ComponentDispatchUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = UNSAFE_isDismissibleContentDismissed;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(16232, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};