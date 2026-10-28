// === Module 8832: MediaPlaybackViewNativeComponent ===

// Module 8832 (MediaPlaybackViewNativeComponent)
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDMediaPlaybackView", directEventTypes: { topPlaybackEvent: { registrationName: "onPlaybackEvent" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPlaybackEvent: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { sourceId: true, sourceUri: true, sourceHeaders: true, resizeMode: true, disableFocus: true, httpEngine: true, bufferConfig: true, paused: true, muted: true, volume: true, rate: true, repeat: true, controls: true, audioPolicy: true, playInBackground: true, playWhenInactive: true, pictureInPicture: true, preventsDisplaySleepDuringVideoPlayback: true, automaticallyWaitsToMinimizeStalling: true, maxBitRate: true, preferredForwardBufferDuration: true };
const value = module_65.get("DCDMediaPlaybackView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MediaPlaybackViewNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  seek(arg0, arg1, arg2) {
    const items = [arg1, arg2];
    renderElement.dispatchCommand(arg0, "seek", items);
  },
  reset(arg0) {
    renderElement.dispatchCommand(arg0, "reset", []);
  }
};