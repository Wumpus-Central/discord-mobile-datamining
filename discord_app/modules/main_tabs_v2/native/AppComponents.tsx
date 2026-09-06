// discord_app/modules/main_tabs_v2/native/AppComponents.tsx
import AccessibilityAnnouncerLiveRegion from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncerLiveRegion.native.tsx";
import PortalKeyboard from "../../keyboard/native/PortalKeyboard.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import common_NotificationsDefault from "../../../components_native/common/Notifications.tsx";
import ContextMenuContainer from "../../../design/components/ContextMenu/native/ContextMenuContainer.native.tsx";
import PortalKeyboardRenderer from "../../keyboard/native/PortalKeyboardRenderer.tsx";
import MainShared from "../../../components_native/MainShared.tsx";
import MainViewTooltipActionSheetsV2Default from "../../upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx";
import ExternalPipViewDefault from "../../external_pip/ExternalPipView.android.tsx";
import ActivityPanelContainerDefault from "../../activities/panel/native/ActivityPanelContainer.tsx";
import FramePanelContainerDefault from "../../frames/panel/native/FramePanelContainer.tsx";
import VoicePanelContainerDefault from "../../voice_panel/native/VoicePanelContainer.tsx";
import MediaPlaybackPanelContainerDefault from "../../media_panel/native/MediaPlaybackPanelContainer.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AppFreezer from "../../panels/morphable/native/AppFreezer.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(PortalKeyboardRenderer.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const items = [
  jsx(MainShared.PictureInPictureGlobalContainer, {}),
  jsx(MainShared.BurstReactionAnimationContainer, {}),
  jsx(MainShared.MenuContainer, {}),
  jsx(PortalKeyboard.PortalKeyboardHost, {}),
  jsx(
    PlatformUtils.isIOS()
      ? () => {
          let tmp = null;
          if (!obj.useIsModalOpen()) {
            tmp = closure_2;
          }
          return tmp;
        }
      : () => closure_2,
    {},
  ),
  jsx(MainShared.ActionSheetContainer, { appEntryKey: "main" }),
  jsx(MainShared.Alerts, {}),
  jsx(MainShared.SoundPlayer, {}),
  jsx(MainViewTooltipActionSheetsV2Default, {}),
  jsx(common_NotificationsDefault, {}),
  jsx(ContextMenuContainer.ContextMenuContainer, {}),
  jsx(AlertModal.AlertModalContainer, {}),
  jsx(MainShared.ToastContainer, {}),
];
obj.children = items;
const tmp3 = PlatformUtils.isIOS()
  ? () => {
      let tmp = null;
      if (!obj.useIsModalOpen()) {
        tmp = closure_2;
      }
      return tmp;
    }
  : () => closure_2;
let jsxResult = null;
if (PlatformUtils.isAndroid()) {
  jsxResult = jsx(AccessibilityAnnouncerLiveRegion.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;
obj = { lockKeys: ["external-pip"], children: null };
const items1 = [
  jsx(ActivityPanelContainerDefault, {}),
  jsx(FramePanelContainerDefault, {}),
  jsx(VoicePanelContainerDefault, {}),
  jsx(MediaPlaybackPanelContainerDefault, {}),
];
obj.children = items1;
const jsxResult1 = jsx(ExternalPipViewDefault, {});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = <AppFreezer lockKeys={["external-pip"]}>{null}</AppFreezer>;
