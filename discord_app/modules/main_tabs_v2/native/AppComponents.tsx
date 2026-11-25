// === Module 19302: AppComponents ===

// Module 19302 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5022 */;
import PortalKeyboard from "PortalKeyboard" /* 5203 */;
import AlertModal from "AlertModal" /* 6021 */;
import common_NotificationsDefault from "common/Notifications" /* 10548 */;
import ContextMenuContainer from "ContextMenuContainer" /* 15413 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 18560 */;
import MainShared from "MainShared" /* 19192 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19211 */;
import FramePoolDefault from "FramePool" /* 19303 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19311 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19321 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19330 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19357 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19371 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19541 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1378 */;
import AppFreezer_mod from "AppFreezer" /* 18313 */;
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
const items2 = [jsx(ConjureAppPictureInPicturesDefault, {}), jsx(ActivityPanelContainerDefault, {}), jsx(FramePanelContainerDefault, {}), jsx(VoicePanelContainerDefault, {}), jsx(MediaPlaybackPanelContainerDefault, {})];
obj2.children = items2;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;