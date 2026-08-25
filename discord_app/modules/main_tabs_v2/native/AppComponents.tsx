// === Module 16347: jsx ===

// Module 16347 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4248 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4750 */;
import NotificationsDefault from "Notifications" /* 9906 */;
import getItemKey from "getItemKey" /* 13624 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16104 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16254 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16270 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16348 */;
import _modDef16354 from "module_16354" /* 16354 */;
import _modDef16387 from "module_16387" /* 16387 */;
import VoicePanelDefault from "VoicePanel" /* 16396 */;
import _modDef16561 from "module_16561" /* 16561 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import importDefaultResult from "jsx" /* 15879 */;

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
const items1 = [jsx(_modDef16354, {}), jsx(_modDef16387, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16561, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });