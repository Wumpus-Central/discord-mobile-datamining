// === Module 19359: AppComponents ===

// Module 19359 (AppComponents)
import AccessibilityAnnouncerLiveRegion from "AccessibilityAnnouncerLiveRegion" /* 5151 */;
import PortalKeyboard from "PortalKeyboard" /* 5337 */;
import AlertModal from "AlertModal" /* 6099 */;
import common_NotificationsDefault from "common/Notifications" /* 11189 */;
import PortalKeyboardRenderer from "PortalKeyboardRenderer" /* 12578 */;
import ContextMenuContainer from "ContextMenuContainer" /* 16092 */;
import MainShared from "MainShared" /* 19264 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 19283 */;
import FramePoolDefault from "FramePool" /* 19360 */;
import ExternalPipViewDefault from "ExternalPipView" /* 19368 */;
import ConjureAppPictureInPicturesDefault from "ConjureAppPictureInPictures" /* 19378 */;
import ActivityPanelContainerDefault from "ActivityPanelContainer" /* 19387 */;
import FramePanelContainerDefault from "FramePanelContainer" /* 19415 */;
import VoicePanelContainerDefault from "VoicePanelContainer" /* 19424 */;
import MediaPlaybackPanelContainerDefault from "MediaPlaybackPanelContainer" /* 19611 */;
import jsxProd from "jsxProd" /* 21 */;
import PlatformUtils_mod from "PlatformUtils" /* 1377 */;
import AppFreezer_mod from "AppFreezer" /* 18855 */;
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