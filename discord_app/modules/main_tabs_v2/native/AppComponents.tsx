// === Module 16492: jsx ===

// Module 16492 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1352 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4313 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4815 */;
import NotificationsDefault from "Notifications" /* 10081 */;
import getItemKey from "getItemKey" /* 13724 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16250 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16400 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16416 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16493 */;
import _modDef16499 from "module_16499" /* 16499 */;
import _modDef16532 from "module_16532" /* 16532 */;
import VoicePanelDefault from "VoicePanel" /* 16541 */;
import _modDef16712 from "module_16712" /* 16712 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 500 */;
import importDefaultResult from "jsx" /* 16023 */;

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
const items1 = [jsx(_modDef16499, {}), jsx(_modDef16532, {}), jsx(VoicePanelDefault, {}), jsx(_modDef16712, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });