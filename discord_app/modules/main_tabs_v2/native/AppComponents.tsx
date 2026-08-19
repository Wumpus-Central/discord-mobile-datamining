// === Module 16218: jsx ===

// Module 16218 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4243 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import NotificationsDefault from "Notifications" /* 10012 */;
import getItemKey from "getItemKey" /* 13531 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 15975 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16124 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16141 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16219 */;
import _modDef16225 from "module_16225" /* 16225 */;
import _modDef16258 from "module_16258" /* 16258 */;
import VoicePanelDefault from "VoicePanel" /* 16270 */;
import _modDef16434 from "module_16434" /* 16434 */;
import jsxProd from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;
import importDefaultResult from "jsx" /* 15778 */;

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(transitionGroupGetItemKey.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = obj132.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(BurstReactionAnimationContainer.PictureInPictureGlobalContainer, {}), jsx(BurstReactionAnimationContainer.BurstReactionAnimationContainer, {}), jsx(BurstReactionAnimationContainer.MenuContainer, {}), jsx(PortalKeyboardState.PortalKeyboardHost, {}), <tmp3 />, jsx(BurstReactionAnimationContainer.ActionSheetContainer, { appEntryKey: "main" }), jsx(BurstReactionAnimationContainer.Alerts, {}), jsx(BurstReactionAnimationContainer.SoundPlayer, {}), jsx(trackActionSheetImpressionDefault, {}), jsx(NotificationsDefault, {}), jsx(getItemKey.ContextMenuContainer, {}), jsx(getAlertModalItemKey.AlertModalContainer, {}), jsx(BurstReactionAnimationContainer.ToastContainer, {})];
obj[1] = items;
let jsxResult = null;
if (obj132.isAndroid()) {
  jsxResult = jsx(updateAccessibilityAnnouncerLiveRegionMessage.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
obj = { lockKeys: ["external-pip"], children: null };
const jsxResult1 = jsx(FreezeAfterLayoutPipViewDefault, {});
const items1 = [jsx(_modDef16225, {}), jsx(_modDef16258, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16434, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });