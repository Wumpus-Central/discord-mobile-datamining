// === Module 16815: jsx ===

// Module 16815 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 1351 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4346 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4863 */;
import NotificationsDefault from "Notifications" /* 10183 */;
import getItemKey from "getItemKey" /* 14033 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16570 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16723 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16739 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 16816 */;
import _modDef16822 from "module_16822" /* 16822 */;
import _modDef16855 from "module_16855" /* 16855 */;
import VoicePanelDefault from "VoicePanel" /* 16864 */;
import _modDef17035 from "module_17035" /* 17035 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 1234 */;
import importDefaultResult from "jsx" /* 16341 */;

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
const items1 = [jsx(_modDef16822, {}), jsx(_modDef16855, {}), jsx(VoicePanelDefault, {}), jsx(_modDef17035, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });