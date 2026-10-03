// === Module 17121: AppComponents ===

// Module 17121 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 4591 */;
import PortalKeyboard from "PortalKeyboard" /* 4751 */;
import AlertModal from "AlertModal" /* 5713 */;
import common_NotificationsDefault from "common/Notifications" /* 12464 */;
import ContextMenuContainer from "ContextMenuContainer" /* 14256 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 16599 */;
import MainShared from "MainShared" /* 17065 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17081 */;
import FramePoolDefault from "FramePool" /* 17122 */;
import ExternalPipViewDefault from "ExternalPipView" /* 17129 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 17135 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 17168 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 17177 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 17348 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import AppFreezer_mod from "AppFreezer" /* 16460 */;
import size from "module_2" /* 2 */;

({ jsx, jsxs, Fragment } = jsxProd);
let closure_2 = jsx(PortalKeyboardRenderer.PortalKeyboardRenderer, {});
let PlatformUtils = PlatformUtils_mod;
const obj = { lockKeys: ["external-pip"], children: null };
let AppFreezer = AppFreezer_mod;
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
const items1 = [jsx(FramePoolDefault, {}), ];
let PlatformUtils = PlatformUtils_mod;
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
items1[1] = jsxResult;
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;
const jsxsResult1 = <>{items1}</>;
const obj2 = { lockKeys: ["external-pip"], children: null };
let AppFreezer = AppFreezer_mod;
const items2 = [jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
obj2.children = items2;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;