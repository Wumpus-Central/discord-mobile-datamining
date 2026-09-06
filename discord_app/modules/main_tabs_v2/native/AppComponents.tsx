// === Module 16999: jsx ===

// Module 16999 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 4273 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4431 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4910 */;
import NotificationsDefault from "Notifications" /* 10078 */;
import getItemKey from "getItemKey" /* 14167 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16756 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16908 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16924 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 17000 */;
import _modDef17006 from "module_17006" /* 17006 */;
import _modDef17039 from "module_17039" /* 17039 */;
import VoicePanelDefault from "VoicePanel" /* 17048 */;
import _modDef17221 from "module_17221" /* 17221 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;
import importDefaultResult from "jsx" /* 16522 */;

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
const items1 = [jsx(_modDef17006, {}), jsx(_modDef17039, {}), jsx(VoicePanelDefault, {}), jsx(_modDef17221, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });