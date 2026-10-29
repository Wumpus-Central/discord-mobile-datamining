// discord_app/modules/conjure/plan/conjurePlanOverlayDesign.tsx
import conjurePlanExperienceSurfaces from "conjurePlanExperienceSurfaces.tsx";
import conjureOverlayPreview from "../preview/conjureOverlayPreview.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const combined = "" + Number((2.357563850687623).toFixed(3)) + "%";
const combined1 = "" + Number((1.25).toFixed(3)) + "%";
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanOverlayDesign.tsx");

export const CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO = 1.8860510805500983;
export const CONJURE_PLAN_OVERLAY_WIDGET_TOP = combined;
export const CONJURE_PLAN_OVERLAY_WIDGET_END = combined1;
export function conjurePlanDesignPreviews(proposal) {
  const result = conjurePlanExperienceSurfaces.conjurePlanDesignExperienceId(proposal);
  const design_image = proposal.design_image;
  let tmp4 = null;
  if (null != design_image) {
    if (null != proposal.overlay_design_image) {
      let overlay_design_image = proposal.overlay_design_image;
    } else {
      const design_image2 = proposal.design_image;
      let name;
      if (design_image2 != null) {
        name = design_image2.name;
      }
      overlay_design_image = null;
      if ("overlay-design-v2.png" === name) {
        overlay_design_image = proposal.design_image;
      }
    }
    let id;
    if (overlay_design_image != null) {
      id = overlay_design_image.id;
    }
    tmp4 = null;
    if (design_image.id !== id) {
      tmp4 = design_image;
    }
  }
  if (null != proposal.overlay_design_image) {
    let overlay_design_image1 = proposal.overlay_design_image;
  } else {
    const design_image3 = proposal.design_image;
    let name1;
    if (design_image3 != null) {
      name1 = design_image3.name;
    }
    overlay_design_image1 = null;
    if ("overlay-design-v2.png" === name1) {
      overlay_design_image1 = proposal.design_image;
    }
  }
  const experiences = proposal.experiences;
  let id1;
  if (experiences != null) {
    const found = experiences.find((kind) => "frame" === kind.kind);
    if (found != null) {
      id1 = found.id;
    }
  }
  if (id1 == null) {
    id1 = result;
  }
  const experiences1 = proposal.experiences;
  let id2;
  if (experiences1 != null) {
    const found1 = experiences1.find((kind) => "overlay_widget" === kind.kind);
    if (found1 != null) {
      id2 = found1.id;
    }
  }
  if (id2 == null) {
    id2 = result;
  }
  let tmp14 = null;
  if (null != tmp4) {
    tmp14 = null;
    if (null != id1) {
      const obj2 = { experienceId: id1, design: tmp4 };
      tmp14 = obj2;
    }
  }
  const obj3 = { ui: tmp14, overlay: null };
  let tmp15 = null;
  if (null != overlay_design_image1) {
    tmp15 = null;
    if (null != id2) {
      const obj4 = { experienceId: id2, design: overlay_design_image1, size: null };
      let overlay_widget = proposal.overlay_widget;
      if (overlay_widget == null) {
        overlay_widget = null;
      }
      obj4.size = conjureOverlayPreview.overlayWidgetPreviewSize(overlay_widget);
      tmp15 = obj4;
      const tmpResult = conjureOverlayPreview;
    }
  }
  obj3.overlay = tmp15;
  return obj3;
}
export function conjurePlanOverlayWidgetBox(size) {
  const bound = Math.min(1, 1872 / size.width, 970 / size.height);
  size = { width: null, height: null };
  const result = ((size.width * bound) / 1920) * 100;
  size.width = "" + Number(result.toFixed(3)) + "%";
  const result1 = ((size.height * bound) / 1018) * 100;
  size.height = "" + Number(result1.toFixed(3)) + "%";
  return size;
}
