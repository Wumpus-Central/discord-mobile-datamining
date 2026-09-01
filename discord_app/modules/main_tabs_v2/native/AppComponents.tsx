// discord_app/modules/main_tabs_v2/native/AppComponents.tsx
import updateAccessibilityAnnouncerLiveRegionMessage from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx";
import PortalKeyboardState from "../../keyboard/native/PortalKeyboard.tsx";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import NotificationsDefault from "../../../components_native/common/Notifications.tsx";
import getItemKey from "../../../design/components/ContextMenu/native/ContextMenuContainer.native.tsx";
import transitionGroupGetItemKey from "../../keyboard/native/PortalKeyboardRenderer.tsx";
import BurstReactionAnimationContainer from "../../../components_native/MainShared.tsx";
import trackActionSheetImpressionDefault from "../../upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import FreezeAfterLayoutPipViewDefault from "../../external_pip/ExternalPipView.android.tsx";
import _modDef16587 from "../../activities/panel/native/ActivityPanelContainer.tsx";
import _modDef16620 from "../../frames/panel/native/FramePanelContainer.tsx";
import VoicePanelDefault from "../../voice_panel/native/VoicePanelContainer.tsx";
import _modDef16799 from "../../media_panel/native/MediaPlaybackPanelContainer.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../utils/PlatformUtils.tsx";
import importDefaultResult from "../../panels/morphable/native/AppFreezer.tsx";

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(transitionGroupGetItemKey.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = set.isIOS()
  ? () => {
      let tmp = null;
      if (!obj.useIsModalOpen()) {
        tmp = closure_2;
      }
      return tmp;
    }
  : () => closure_2;
const items = [
  jsx(BurstReactionAnimationContainer.PictureInPictureGlobalContainer, {}),
  jsx(BurstReactionAnimationContainer.BurstReactionAnimationContainer, {}),
  jsx(BurstReactionAnimationContainer.MenuContainer, {}),
  jsx(PortalKeyboardState.PortalKeyboardHost, {}),
  <tmp3 />,
  jsx(BurstReactionAnimationContainer.ActionSheetContainer, { appEntryKey: "main" }),
  jsx(BurstReactionAnimationContainer.Alerts, {}),
  jsx(BurstReactionAnimationContainer.SoundPlayer, {}),
  jsx(trackActionSheetImpressionDefault, {}),
  jsx(NotificationsDefault, {}),
  jsx(getItemKey.ContextMenuContainer, {}),
  jsx(getAlertModalItemKey.AlertModalContainer, {}),
  jsx(BurstReactionAnimationContainer.ToastContainer, {}),
];
obj[1] = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(updateAccessibilityAnnouncerLiveRegionMessage.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
obj = { lockKeys: ["external-pip"], children: null };
const jsxResult1 = jsx(FreezeAfterLayoutPipViewDefault, {});
const items1 = [jsx(_modDef16587, {}), jsx(_modDef16620, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16799, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, {
  lockKeys: ["external-pip"],
  children: null,
});
