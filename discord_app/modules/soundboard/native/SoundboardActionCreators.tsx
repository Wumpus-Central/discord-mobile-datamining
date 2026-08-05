// discord_app/modules/soundboard/native/SoundboardActionCreators.tsx
import { ComponentActions } from "ME";

let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/soundboard/native/SoundboardActionCreators.tsx");

export const showSoundboardSoundPickerActionSheet = function showSoundboardSoundPickerActionSheet(arg0) {
  let analyticsSource;
  let channel;
  ({ channel, analyticsSource } = arg0);
  const ComponentDispatch = require("../../../utils/ComponentDispatchUtils.tsx") /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(ComponentActions.TOGGLE_CALL_CONTROL_DRAWER);
  const result = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.SOUNDBOARD_MOBILE_NEW_BADGE);
  const obj = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */;
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16007, dependencyMap.paths), "SoundboardSoundPickerActionSheet", { channel, analyticsSource });
};