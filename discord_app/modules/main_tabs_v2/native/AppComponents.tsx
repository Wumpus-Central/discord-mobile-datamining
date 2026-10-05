// discord_app/modules/main_tabs_v2/native/AppComponents.tsx
import AccessibilityAnnouncerLiveRegion from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx";
import NavigationRouteUtils from "../helpers/NavigationRouteUtils.native.tsx";
import PortalKeyboard from "../../keyboard/native/PortalKeyboard.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import common_NotificationsDefault from "../../../components_native/common/Notifications.tsx";
import ContextMenuContainer from "../../../design/components/ContextMenu/native/ContextMenuContainer.native.tsx";
import PortalKeyboardRenderer from "../../keyboard/native/PortalKeyboardRenderer.tsx";
import MainShared from "../../../components_native/MainShared.tsx";
import MainViewTooltipActionSheetsV2Default from "../../upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import FramePoolDefault from "../../frames/native/FramePool.tsx";
import ExternalPipViewDefault from "../../external_pip/ExternalPipView.android.tsx";
import ActivityPanelContainerDefault from "../../activities/panel/native/ActivityPanelContainer.tsx";
import FramePanelContainerDefault from "../../frames/panel/native/FramePanelContainer.tsx";
import VoicePanelContainerDefault from "../../voice_panel/native/VoicePanelContainer.tsx";
import MediaPlaybackPanelContainerDefault from "../../media_panel/native/MediaPlaybackPanelContainer.tsx";
import Fragment_mod from "../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import AppFreezer_mod from "../../panels/morphable/native/AppFreezer.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let Fragment;
let jsx;
let jsxs;
Fragment = Fragment_mod;
({ jsx, jsxs, Fragment } = Fragment);
let closure_2 = jsx(PortalKeyboardRenderer.PortalKeyboardRenderer, {});
let PlatformUtils = PlatformUtils_mod;
PlatformUtils.isIOS()
  ? () => {
      let tmp = null;
      const obj = NavigationRouteUtils;
      if (!obj.useIsModalOpen()) {
        tmp = closure_2;
      }
      return tmp;
    }
  : () => closure_2;
let AppFreezer = AppFreezer_mod;
const items = [
  jsx(MainShared.PictureInPictureGlobalContainer, {}),
  jsx(MainShared.BurstReactionAnimationContainer, {}),
  jsx(MainShared.MenuContainer, {}),
  jsx(PortalKeyboard.PortalKeyboardHost, {}),
  <tmp3 />,
  jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }),
  jsx(MainShared.Alerts, {}),
  jsx(MainShared.SoundPlayer, {}),
  jsx(MainViewTooltipActionSheetsV2Default, {}),
  jsx(common_NotificationsDefault, {}),
  jsx(ContextMenuContainer.ContextMenuContainer, {}),
  jsx(AlertModal.AlertModalContainer, {}),
  jsx(MainShared.ToastContainer, {}),
];
const items1 = [,];
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{items}</AppFreezer>;
items1[0] = jsx(FramePoolDefault, {});
PlatformUtils = PlatformUtils_mod;
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
items1[1] = jsxResult;
const jsxsResult1 = <>{items1}</>;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
AppFreezer = AppFreezer_mod;
const items2 = [
  jsx(ActivityPanelContainerDefault, {}),
  jsx(FramePanelContainerDefault, {}),
  jsx(VoicePanelContainerDefault, {}),
  jsx(MediaPlaybackPanelContainerDefault, {}),
];
const jsxsResult2 = <AppFreezer lockKeys={["external-pip"]}>{items2}</AppFreezer>;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxsResult1;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxsResult2;
