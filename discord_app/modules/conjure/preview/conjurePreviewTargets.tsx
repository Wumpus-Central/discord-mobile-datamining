// === Module 18284: conjurePreviewTargets ===

// Module 18284 (conjurePreviewTargets)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5561 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 11312 */;
import slugConjureChannelNameDefault from "slugConjureChannelName" /* 18285 */;
import size from "module_2" /* 2 */;

function getPreviewTargetLabel(string) {
  const mode = string.mode;
  if ("frame" === mode) {
    if (null == string.appChannel) {
      let previewFrameSurfaceLabel = ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface);
    } else {
      const intl4 = util.intl;
      const obj = { surface: ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface), channel: string.appChannel };
      previewFrameSurfaceLabel = intl4.formatToPlainString(_modDef4192["6xVl+N"], obj);
    }
    return previewFrameSurfaceLabel;
  } else if ("widget" === mode) {
    const intl3 = util.intl;
    return intl3.string(_modDef4192.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = util.intl;
    return intl2.string(_modDef4192["2940LX"]);
  } else if ("bot" === mode) {
    const intl = util.intl;
    return intl.string(_modDef4192.tjpaGN);
  }
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export function previewTargets(modes, frameSurfaceOptions) {
  closure_0 = frameSurfaceOptions;
  items = stateFromStores3;
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
}
export function previewTargetKey(target) {
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
}
export function activePreviewTarget(activeMode, frameSurface) {
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
}
export { getPreviewTargetLabel };
export function getPreviewTabLabel(mode, arg1) {
  if ("bot" === mode.mode) {
    const intl = util.intl;
    return intl.string(_modDef4192.gThNz6);
  } else {
    if ("frame" === mode.mode) {
      if (mode.surface === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
        let appChannel = mode.appChannel;
        if (appChannel == null) {
          appChannel = slugConjureChannelNameDefault(arg1);
        }
        if ("" !== appChannel) {
          const _HermesInternal = HermesInternal;
          return "#" + appChannel;
        }
      }
    }
    return getPreviewTargetLabel(mode);
  }
}
export function selectPreviewTarget(mode, fn, fn2, fn3) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
  }
  fn(mode.mode);
}