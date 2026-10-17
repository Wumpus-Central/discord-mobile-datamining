// === Module 11692: conjurePreviewTargets ===

// Module 11692 (conjurePreviewTargets)
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 11678 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export const previewTargets = function previewTargets(modes, frameSurfaceOptions) {
  closure_0 = frameSurfaceOptions;
  let items = stateFromStores3;
  if (stateFromStores3 === undefined) {
    items = [];
  }
  return modes.flatMap((mode) => {
    if ("frame" === mode) {
      let flatMapResult = mode.flatMap((surface) => {
        mode = surface;
        if (surface === mode(dependencyMap[0]).EmbeddedSurfaceType.APP_CHANNEL) {
          if (length.length > 1) {
            let mapped = length.map((appChannel) => ({ mode: surface, surface, appChannel }));
          }
          return mapped;
        }
        mapped = [{ mode, surface }];
        const obj = { mode, surface };
      });
    } else {
      let obj = { mode };
      flatMapResult = [obj];
    }
    return flatMapResult;
  });
};
export const previewTargetKey = function previewTargetKey(target) {
  if ("frame" !== target.mode) {
    let mode = target.mode;
  } else if (null == target.appChannel) {
    const _HermesInternal2 = HermesInternal;
    mode = "frame-" + target.surface;
  } else {
    const _HermesInternal = HermesInternal;
    mode = "frame-" + target.surface + "-" + target.appChannel;
  }
  return mode;
};
export const activePreviewTarget = function activePreviewTarget(activeMode, frameSurface) {
  let tmp = appChannel;
  if (appChannel === undefined) {
    tmp = null;
  }
  if (null == activeMode) {
    return null;
  } else if ("frame" !== activeMode) {
    const obj2 = { mode: activeMode };
  } else if (null == tmp) {
    const obj3 = { mode: activeMode, surface: frameSurface };
  } else {
    const obj = { mode: activeMode, surface: frameSurface, appChannel: tmp };
  }
};
export const getPreviewTargetLabel = function getPreviewTargetLabel(memo1) {
  const mode = memo1.mode;
  if ("frame" === mode) {
    if (null == memo1.appChannel) {
      let previewFrameSurfaceLabel = ConjurePreviewMode.getPreviewFrameSurfaceLabel(memo1.surface);
    } else {
      const intl4 = util.intl;
      const obj = { surface: ConjurePreviewMode.getPreviewFrameSurfaceLabel(memo1.surface), channel: memo1.appChannel };
      previewFrameSurfaceLabel = intl4.formatToPlainString(_modDef3883["6xVl+N"], obj);
    }
    return previewFrameSurfaceLabel;
  } else if ("widget" === mode) {
    const intl3 = util.intl;
    return intl3.string(_modDef3883.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = util.intl;
    return intl2.string(_modDef3883["2940LX"]);
  } else if ("bot" === mode) {
    const intl = util.intl;
    return intl.string(_modDef3883.tjpaGN);
  }
};
export const selectPreviewTarget = function selectPreviewTarget(mode, fn, fn2, fn3) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
  }
  fn(mode.mode);
};