// === Module 12440: conjureOverlayPreview ===

// Module 12440 (conjureOverlayPreview)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import size_mod from "module_2" /* 2 */;

let size = { width: 320, height: 240 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/preview/conjureOverlayPreview.tsx");

export const CONJURE_OVERLAY_WIDGET_FALLBACK_SIZE = size;
export const previewSupportsOverlay = function previewSupportsOverlay(preview_supported_surfaces) {
  let hasItem;
  if (preview_supported_surfaces != null) {
    preview_supported_surfaces = preview_supported_surfaces.preview_supported_surfaces;
    if (preview_supported_surfaces != null) {
      hasItem = preview_supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
    }
  }
  return true === hasItem;
};
export const latestOverlayWidgetDeclaration = function latestOverlayWidgetDeclaration(arg0) {
  let overlay_widget;
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let proposal = arg0[diff].proposal;
      overlay_widget = undefined;
      if (proposal != null) {
        overlay_widget = proposal.overlay_widget;
      }
      if (null != overlay_widget) {
        break;
      } else {
        diff = diff - 1;
      }
    }
    return overlay_widget;
  }
  return null;
};
export const overlayWidgetPreviewSize = function overlayWidgetPreviewSize(overlay_widget) {
  let default_size;
  if (overlay_widget != null) {
    default_size = overlay_widget.default_size;
  }
  let isFiniteResult = null != default_size;
  if (isFiniteResult) {
    const _Number = Number;
    isFiniteResult = Number.isFinite(default_size.width);
  }
  if (isFiniteResult) {
    const _Number2 = Number;
    isFiniteResult = Number.isFinite(default_size.height);
  }
  if (isFiniteResult) {
    isFiniteResult = default_size.width > 0;
  }
  if (isFiniteResult) {
    isFiniteResult = default_size.height > 0;
  }
  if (!isFiniteResult) {
    default_size = size;
  }
  return default_size;
};
export const overlayWidgetPreviewScale = function overlayWidgetPreviewScale(arg0, width) {
  ({ width, height } = arg0);
  let num = 1;
  if (null != width) {
    num = 1;
    if (null != height) {
      num = 1;
      if (width > 0) {
        num = 1;
        if (height > 0) {
          const _Math = Math;
          num = Math.min(1, width / width.width, height / width.height);
        }
      }
    }
  }
  return num;
};