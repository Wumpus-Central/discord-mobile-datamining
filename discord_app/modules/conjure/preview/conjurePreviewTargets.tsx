// discord_app/modules/conjure/preview/conjurePreviewTargets.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import ConjurePreviewMode from "ConjurePreviewMode.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export const previewTargets = function previewTargets(modes, frameSurfaceOptions) {
  closure_0 = frameSurfaceOptions;
  return modes.flatMap((mode) => {
    if ("frame" === mode) {
      let mapped = mode.map((surface) => ({ mode, surface }));
    } else {
      const obj = { mode };
      mapped = [obj];
    }
    return mapped;
  });
};
export const previewTargetKey = function previewTargetKey(target) {
  if ("frame" === target.mode) {
    const _HermesInternal = HermesInternal;
    let mode = "frame-" + target.surface;
  } else {
    mode = target.mode;
  }
  return mode;
};
export const activePreviewTarget = function activePreviewTarget(activeMode, frameSurface) {
  if (null == activeMode) {
    return null;
  } else if ("frame" === activeMode) {
    const obj2 = { mode: activeMode, surface: frameSurface };
  } else {
    const obj = { mode: activeMode };
  }
};
export const getPreviewTargetLabel = function getPreviewTargetLabel(memo2) {
  const mode = memo2.mode;
  if ("frame" === mode) {
    return ConjurePreviewMode.getPreviewFrameSurfaceLabel(memo2.surface);
  } else if ("widget" === mode) {
    const intl3 = util.intl;
    return intl3.string(_modDef3827.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = util.intl;
    return intl2.string(_modDef3827["2940LX"]);
  } else if ("bot" === mode) {
    const intl = util.intl;
    return intl.string(_modDef3827.tjpaGN);
  }
};
export const selectPreviewTarget = function selectPreviewTarget(mode, fn, fn2) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
  }
  fn(mode.mode);
};
