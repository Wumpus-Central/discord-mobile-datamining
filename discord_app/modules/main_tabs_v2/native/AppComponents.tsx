// === Module 16510: jsx ===

// Module 16510 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4314 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4828 */;
import NotificationsDefault from "Notifications" /* 10099 */;
import getItemKey from "getItemKey" /* 13743 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16268 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16418 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16434 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16511 */;
import _modDef16517 from "module_16517" /* 16517 */;
import _modDef16550 from "module_16550" /* 16550 */;
import VoicePanelDefault from "VoicePanel" /* 16559 */;
import _modDef16730 from "module_16730" /* 16730 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import importDefaultResult from "jsx" /* 16041 */;

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(transitionGroupGetItemKey.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = set.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(BurstReactionAnimationContainer.PictureInPictureGlobalContainer, {}), jsx(BurstReactionAnimationContainer.BurstReactionAnimationContainer, {}), jsx(BurstReactionAnimationContainer.MenuContainer, {}), jsx(PortalKeyboardState.PortalKeyboardHost, {}), <tmp3 />, jsx(BurstReactionAnimationContainer.ActionSheetContainer, { appEntryKey: "main" }), jsx(BurstReactionAnimationContainer.Alerts, {}), jsx(BurstReactionAnimationContainer.SoundPlayer, {}), jsx(trackActionSheetImpressionDefault, {}), jsx(NotificationsDefault, {}), jsx(getItemKey.ContextMenuContainer, {}), jsx(getAlertModalItemKey.AlertModalContainer, {}), jsx(BurstReactionAnimationContainer.ToastContainer, {})];
obj[1] = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(updateAccessibilityAnnouncerLiveRegionMessage.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
obj = { lockKeys: ["external-pip"], children: null };
const jsxResult1 = jsx(FreezeAfterLayoutPipViewDefault, {});
const items1 = [jsx(_modDef16517, {}), jsx(_modDef16550, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16730, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });