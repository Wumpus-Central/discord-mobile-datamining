// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const openSoundboardSoundPickerActionSheet = function openSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource, initialScrollLocation } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17060, dependencyMap.paths),
    "SoundboardSoundPickerActionSheet",
    { channel, analyticsSource, initialScrollLocation },
  );
};
export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  let obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE,
  );
  obj = { channel, analyticsSource };
  ({ channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation } = obj);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(17060, dependencyMap.paths),
    "SoundboardSoundPickerActionSheet",
    { channel: channel2, analyticsSource: analyticsSource2, initialScrollLocation },
  );
};
