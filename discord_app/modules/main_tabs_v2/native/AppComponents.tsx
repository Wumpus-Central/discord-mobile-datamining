import jsxProd from "jsxProd";
import set from "set";
import importDefaultResult from "jsx";
import set from "set";
import jsxsResult from "jsx";
import jsxResult1 from "FreezeAfterLayoutPipView";
import importDefaultResult1 from "jsx";
import set from "set";

let jsx;
let jsxs;
({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(require("transitionGroupGetItemKey").PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = set.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(require("BurstReactionAnimationContainer").PictureInPictureGlobalContainer, {}), jsx(require("BurstReactionAnimationContainer").BurstReactionAnimationContainer, {}), jsx(require("BurstReactionAnimationContainer").MenuContainer, {}), jsx(require("PortalKeyboardState").PortalKeyboardHost, {}), <tmp3 />, jsx(require("BurstReactionAnimationContainer").ActionSheetContainer, { appEntryKey: "main" }), jsx(require("BurstReactionAnimationContainer").Alerts, {}), jsx(require("BurstReactionAnimationContainer").SoundPlayer, {}), jsx(require("trackActionSheetImpression"), {}), jsx(require("Notifications"), {}), jsx(require("getItemKey").ContextMenuContainer, {}), jsx(require("getAlertModalItemKey").AlertModalContainer, {}), jsx(require("BurstReactionAnimationContainer").ToastContainer, {})];
obj[1] = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(require("updateAccessibilityAnnouncerLiveRegionMessage").AccessibilityAnnouncerLiveRegion, {});
}
obj = { lockKeys: ["external-pip"], children: null };
const items1 = [jsx(require("module_15950"), {}), jsx(require("module_15983"), {}), jsx(require("VoicePanel"), {}), jsx(require("module_16158"), {})];
obj[1] = items1;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(require("jsx"), { lockKeys: ["external-pip"], children: null });