// === Module 16428: jsx ===

// Module 16428 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4312 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4814 */;
import NotificationsDefault from "Notifications" /* 9973 */;
import getItemKey from "getItemKey" /* 13697 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16185 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16335 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16351 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16429 */;
import _modDef16435 from "module_16435" /* 16435 */;
import _modDef16468 from "module_16468" /* 16468 */;
import VoicePanelDefault from "VoicePanel" /* 16477 */;
import _modDef16646 from "module_16646" /* 16646 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import importDefaultResult from "jsx" /* 15958 */;

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
const items1 = [jsx(_modDef16435, {}), jsx(_modDef16468, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16646, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });