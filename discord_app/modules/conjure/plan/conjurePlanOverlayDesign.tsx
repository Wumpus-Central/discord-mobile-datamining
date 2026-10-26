// === Module 12426: conjurePlanOverlayDesign ===

// Module 12426 (conjurePlanOverlayDesign)
import conjureOverlayPreview from "conjureOverlayPreview" /* 12427 */;
import size from "module_2" /* 2 */;

const combined = "" + Number(2.357563850687623.toFixed(3)) + "%";
const combined1 = "" + Number(1.25.toFixed(3)) + "%";
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanOverlayDesign.tsx");

export const CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO = 1.8860510805500983;
export const CONJURE_PLAN_OVERLAY_WIDGET_TOP = combined;
export const CONJURE_PLAN_OVERLAY_WIDGET_END = combined1;
export const conjurePlanOverlayWidgetSize = function conjurePlanOverlayWidgetSize(proposal) {
  const design_image = proposal.design_image;
  let name;
  if (design_image != null) {
    name = design_image.name;
  }
  let result = null;
  if ("overlay-design-v2.png" === name) {
    let overlay_widget = proposal.overlay_widget;
    if (overlay_widget == null) {
      overlay_widget = null;
    }
    result = conjureOverlayPreview.overlayWidgetPreviewSize(overlay_widget);
  }
  return result;
};
export const conjurePlanOverlayWidgetBox = function conjurePlanOverlayWidgetBox(size) {
  const bound = Math.min(1, 1872 / size.width, 970 / size.height);
  size = { width: null, height: null };
  const result = size.width * bound / 1920 * 100;
  size.width = "" + Number(result.toFixed(3)) + "%";
  const result1 = size.height * bound / 1018 * 100;
  size.height = "" + Number(result1.toFixed(3)) + "%";
  return size;
};