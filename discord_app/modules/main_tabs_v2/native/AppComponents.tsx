// === Module 17108: AppComponents ===

// Module 17108 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4349 */;
import PortalKeyboard from "PortalKeyboard" /* 4508 */;
import AlertModal from "AlertModal" /* 4986 */;
import common_NotificationsDefault from "common/Notifications" /* 10207 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14255 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16868 */;
import MainShared from "MainShared" /* 17021 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17037 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17109 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17115 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17148 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17157 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17330 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import AppFreezer from "AppFreezer" /* 16617 */;
import size from "module_2" /* 2 */;

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(PortalKeyboardRenderer.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const items = [
  jsx(MainShared.PictureInPictureGlobalContainer, {}),
  jsx(MainShared.BurstReactionAnimationContainer, {}),
  jsx(MainShared.MenuContainer, {}),
  jsx(PortalKeyboard.PortalKeyboardHost, {}),
  jsx(PlatformUtils.isIOS() ? (() => {
    let tmp = null;
    if (!obj.useIsModalOpen()) {
      tmp = closure_2;
    }
    return tmp;
  }) : (() => closure_2), {}),
  jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }),
  jsx(MainShared.Alerts, {}),
  jsx(MainShared.SoundPlayer, {}),
  jsx(MainViewTooltipActionSheetsV2Default, {}),
  jsx(common_NotificationsDefault, {}),
  jsx(ContextMenuContainer.ContextMenuContainer, {}),
  jsx(AlertModal.AlertModalContainer, {}),
  jsx(MainShared.ToastContainer, {})
];
obj.children = items;
const tmp3 = PlatformUtils.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;
obj = { lockKeys: ["external-pip"], children: null };
const items1 = [jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
obj.children = items1;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;