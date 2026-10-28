// === Module 5864: DesktopGamePerfExperiment ===

// Module 5864 (DesktopGamePerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-10-desktop-game-perf", kind: "user", defaultConfig: { nativeSystemCpuTimes: false, overlayOnlyAnimatesItself: false, fullscreenPopupOcclusion: false, overlayHiddenWavePaused: false, renderOverlayWhileMinimized: false, notificationIconCpuCanvas: false }, variations: { 0: { nativeSystemCpuTimes: false, overlayOnlyAnimatesItself: false, fullscreenPopupOcclusion: false, overlayHiddenWavePaused: false, renderOverlayWhileMinimized: false, notificationIconCpuCanvas: false }, 1: { nativeSystemCpuTimes: true, overlayOnlyAnimatesItself: true, fullscreenPopupOcclusion: true, overlayHiddenWavePaused: true, renderOverlayWhileMinimized: true, notificationIconCpuCanvas: true } } });
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGamePerfExperiment.tsx");

export const getDesktopGamePerfExperimentConfig = function getDesktopGamePerfExperimentConfig(location) {
  return closure_2.getConfig({ location });
};
export const getIsFullscreenPopupOcclusionEnabled = function getIsFullscreenPopupOcclusionEnabled(window_visibility_video_manager) {
  let fullscreenPopupOcclusion = PlatformUtils.isDesktop();
  if (fullscreenPopupOcclusion) {
    fullscreenPopupOcclusion = PlatformUtils.isWindows();
    const tmpResult = PlatformUtils;
  }
  if (fullscreenPopupOcclusion) {
    const obj2 = { location: window_visibility_video_manager };
    fullscreenPopupOcclusion = closure_2.getConfig(obj2).fullscreenPopupOcclusion;
  }
  return fullscreenPopupOcclusion;
};
export const getIsNativeSystemCpuTimesEnabled = function getIsNativeSystemCpuTimesEnabled() {
  let nativeSystemCpuTimes = PlatformUtils.isDesktop();
  if (nativeSystemCpuTimes) {
    nativeSystemCpuTimes = PlatformUtils.isWindows();
    const tmpResult = PlatformUtils;
  }
  if (nativeSystemCpuTimes) {
    nativeSystemCpuTimes = closure_2.getConfig({ location: "system_metrics_sample" }).nativeSystemCpuTimes;
  }
  return nativeSystemCpuTimes;
};
export const getIsOverlayOnlyAnimatesItselfEnabled = function getIsOverlayOnlyAnimatesItselfEnabled() {
  let overlayOnlyAnimatesItself = PlatformUtils.isDesktop();
  if (overlayOnlyAnimatesItself) {
    overlayOnlyAnimatesItself = PlatformUtils.isWindows();
    const tmpResult = PlatformUtils;
  }
  if (overlayOnlyAnimatesItself) {
    overlayOnlyAnimatesItself = closure_2.getConfig({ location: "avatar_speaking_styles" }).overlayOnlyAnimatesItself;
  }
  return overlayOnlyAnimatesItself;
};
export const getIsOverlayHiddenWavePausedEnabled = function getIsOverlayHiddenWavePausedEnabled() {
  let overlayHiddenWavePaused = PlatformUtils.isDesktop();
  if (overlayHiddenWavePaused) {
    overlayHiddenWavePaused = closure_2.getConfig({ location: "overlay_voice_user" }).overlayHiddenWavePaused;
  }
  return overlayHiddenWavePaused;
};
export const getIsRenderOverlayWhileMinimizedEnabled = function getIsRenderOverlayWhileMinimizedEnabled(location) {
  let renderOverlayWhileMinimized = PlatformUtils.isDesktop();
  if (renderOverlayWhileMinimized) {
    renderOverlayWhileMinimized = PlatformUtils.isWindows();
    const tmpResult = PlatformUtils;
  }
  if (renderOverlayWhileMinimized) {
    const obj2 = { location };
    renderOverlayWhileMinimized = closure_2.getConfig(obj2).renderOverlayWhileMinimized;
  }
  return renderOverlayWhileMinimized;
};
export const getIsNotificationIconCpuCanvasEnabled = function getIsNotificationIconCpuCanvasEnabled() {
  let notificationIconCpuCanvas = PlatformUtils.isDesktop();
  if (notificationIconCpuCanvas) {
    notificationIconCpuCanvas = closure_2.getConfig({ location: "icon_cropping_utils" }).notificationIconCpuCanvas;
  }
  return notificationIconCpuCanvas;
};