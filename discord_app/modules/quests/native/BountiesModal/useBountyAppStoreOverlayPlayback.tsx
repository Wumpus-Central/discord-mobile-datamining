// === Module 14527: useBountyAppStoreOverlayPlayback ===

// Module 14527 (useBountyAppStoreOverlayPlayback)
import useBountyVideoEndAppStoreOverlay from "useBountyVideoEndAppStoreOverlay" /* 14528 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 14530 */;
import useBountyPauseAppStoreSheet from "useBountyPauseAppStoreSheet" /* 14531 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyAppStoreOverlayPlayback.tsx");

export const getBountyVideoEndMode = function getBountyVideoEndMode(bounty) {
  const result = useBountyVideoEndAppStoreOverlay.canUseBountyVideoEndAppStoreOverlay(bounty);
  const BountyVideoEndMode = useBountiesModalTiming.BountyVideoEndMode;
  return result ? BountyVideoEndMode.APP_STORE_LOOP : BountyVideoEndMode.END_CARD;
};
export const useBountyAppStoreOverlayPlayback = function useBountyAppStoreOverlayPlayback(handleVideoPaused) {
  ({ bounty, sourceQuestContent, isActive, endMode, handleVideoEnd } = handleVideoPaused);
  handleVideoPaused = handleVideoPaused.handleVideoPaused;
  const handleVideoResumed = handleVideoPaused.handleVideoResumed;
  const onPaused = handleVideoPaused.onPaused;
  let handleVideoPausedForAppStore;
  ({ playerRef, showEndCard } = handleVideoPaused);
  const onVideoEndForAppStore = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreOverlay({ bounty, sourceQuestContent, isActive, endMode, onOverlayUnavailable: showEndCard }).onVideoEndForAppStore;
  const bountyVideoEndAppStoreContext = useBountyVideoEndAppStoreOverlay.useBountyVideoEndAppStoreContext();
  let flag;
  if (bountyVideoEndAppStoreContext != null) {
    flag = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
  }
  if (flag == null) {
    flag = false;
  }
  handleVideoPausedForAppStore = useBountyPauseAppStoreSheet.useBountyPauseAppStoreSheet({ bounty, sourceQuestContent, isActive, playerRef }).handleVideoPausedForAppStore;
  const items = [handleVideoPaused, handleVideoPausedForAppStore, onPaused];
  const items1 = [handleVideoResumed];
  const callback = noop.useCallback((arg0) => {
    handleVideoPaused(arg0);
    if (onPaused != null) {
      onPaused();
    }
    handleVideoPausedForAppStore(arg0);
  }, items);
  const items2 = [handleVideoEnd, onVideoEndForAppStore];
  const callback1 = noop.useCallback((arg0) => {
    handleVideoResumed(arg0);
  }, items1);
  const obj3 = { isVideoEndAppStoreOverlayVisible: flag, shouldRepeatVideo: null, handlePaused: null, handleResumed: null, handleVideoEndWithAppStore: null };
  const callback2 = noop.useCallback(() => {
    handleVideoEnd();
    onVideoEndForAppStore();
  }, items2);
  obj3.shouldRepeatVideo = endMode === useBountiesModalTiming.BountyVideoEndMode.APP_STORE_LOOP;
  obj3.handlePaused = callback;
  obj3.handleResumed = callback1;
  obj3.handleVideoEndWithAppStore = callback2;
  return obj3;
};