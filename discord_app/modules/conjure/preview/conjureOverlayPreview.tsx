// === Module 12724: conjureOverlayPreview ===

// Module 12724 (conjureOverlayPreview)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6845 */;
import size_mod from "module_2" /* 2 */;

let size = { width: 320, height: 240 };
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/preview/conjureOverlayPreview.tsx");

export const CONJURE_OVERLAY_WIDGET_FALLBACK_SIZE = size;
export function previewSupportsOverlay(preview_supported_surfaces) {
  let hasItem;
  if (preview_supported_surfaces != null) {
    preview_supported_surfaces = preview_supported_surfaces.preview_supported_surfaces;
    if (preview_supported_surfaces != null) {
      hasItem = preview_supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.OVERLAY);
    }
  }
  return true === hasItem;
}
export function overlayWidgetPreviewSize(overlay_widget) {
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
}
export function overlayWidgetPreviewScale(arg0, width) {
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
}
export function previewOverlayWidgetSize(preview_overlay_widget) {
  let prop;
  if (preview_overlay_widget != null) {
    prop = preview_overlay_widget.preview_overlay_widget;
  }
  if (prop == null) {
    prop = null;
  }
  let default_size;
  if (prop != null) {
    default_size = prop.default_size;
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
}