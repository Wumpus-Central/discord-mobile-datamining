// === Module 12942: conjureOverlayPreview ===

// Module 12942 (conjureOverlayPreview)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6903 */;
import size_mod from "module_2" /* 2 */;

let size = { width: 320, height: 240 };
let c3 = 1920;
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/preview/conjureOverlayPreview.tsx");

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
export const CONJURE_OVERLAY_SCREEN_WIDTH = 1920;
export const CONJURE_OVERLAY_SCREEN_INSET = 24;
export function overlayWidgetPlacement(arg0, width, width2) {
  ({ width, height } = arg0);
  if (null != width) {
    if (null != height) {
      if (width > 0) {
        if (height > 0) {
          if (null != width) {
            if (width.width > 0) {
              if (width.height > 0) {
                const result = width.width / width.height;
                const _Math3 = Math;
                const bound = Math.min(width, height * result);
                const result1 = bound / c3;
                const obj2 = { top: null, end: null, scale: null };
                const result2 = 24 * result1;
                obj2.top = (height - bound / result) / 2 + result2;
                obj2.end = (width - bound) / 2 + result2;
                const diff = c3 / result - 48;
                let num2 = 1;
                if (diff > 0) {
                  const _Math = Math;
                  num2 = Math.min(1, 1872 / width2.width, diff / width2.height);
                }
                obj2.scale = num2 * result1;
                return obj2;
              }
            }
          }
          const diff1 = width - 48;
          const diff2 = height - 48;
          let num5 = 1;
          if (diff1 > 0) {
            num5 = 1;
            if (diff2 > 0) {
              const _Math2 = Math;
              num5 = Math.min(1, diff1 / width2.width, diff2 / width2.height);
            }
          }
          const obj = { top: 24, end: 24, scale: num5 };
          return obj;
        }
      }
    }
  }
  return { top: 24, end: 24, scale: 1 };
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