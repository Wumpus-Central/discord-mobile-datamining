// === Module 18462: conjurePreviewTargets ===

// Module 18462 (conjurePreviewTargets)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import ConjurePreviewMode from "ConjurePreviewMode" /* 11468 */;
import slugConjureChannelNameDefault from "slugConjureChannelName" /* 18463 */;
import size from "module_2" /* 2 */;

function getPreviewTargetLabel(string) {
  const mode = string.mode;
  if ("frame" === mode) {
    if (null != string.view) {
      let name = string.view.name;
    } else if (null == string.appChannel) {
      name = ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface);
    } else {
      const intl4 = util.intl;
      const obj = { surface: ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface), channel: string.appChannel };
      name = intl4.formatToPlainString(_modDef4245["6xVl+N"], obj);
    }
    return name;
  } else if ("widget" === mode) {
    const intl3 = util.intl;
    return intl3.string(_modDef4245.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = util.intl;
    return intl2.string(_modDef4245["2940LX"]);
  } else if ("bot" === mode) {
    const intl = util.intl;
    return intl.string(_modDef4245.tjpaGN);
  }
}
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTargets.tsx");

export function previewTargets(modes, frameSurfaceOptions) {
  closure_0 = frameSurfaceOptions;
  items = stateFromStores3;
  if (stateFromStores3 === undefined) {
    items = [];
  }
  let items1 = stateFromStores4;
  if (stateFromStores4 === undefined) {
    items1 = [];
  }
  return modes.flatMap((mode) => {
    if ("frame" === mode) {
      if (items1.length > 0) {
        let mapped = items1.map((id) => ({ mode, surface: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, view: { id: id.id, name: id.name } }));
      }
      return mapped;
    }
    if ("frame" === mode) {
      mapped = mode.flatMap((surface) => {
        mode = surface;
        if (surface === mode(items1[0]).EmbeddedSurfaceType.APP_CHANNEL) {
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
      mapped = [obj];
    }
  });
}
export function previewTargetKey(target) {
  if ("frame" !== target.mode) {
    let mode = target.mode;
  } else if (null != target.view) {
    const _HermesInternal3 = HermesInternal;
    mode = "frame-view-" + target.view.id;
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
  let tmp2 = view;
  if (view === undefined) {
    tmp2 = null;
  }
  if (null == activeMode) {
    return null;
  } else if ("frame" !== activeMode) {
    const obj2 = { mode: activeMode };
  } else if (null != tmp2) {
    const obj3 = { mode: activeMode, surface: EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL, view: tmp2 };
  } else if (null == tmp) {
    const obj4 = { mode: activeMode, surface: frameSurface };
  } else {
    const obj = { mode: activeMode, surface: frameSurface, appChannel: tmp };
  }
}
export { getPreviewTargetLabel };
export function getPreviewTabLabel(mode, arg1) {
  if ("bot" === mode.mode) {
    const intl = util.intl;
    return intl.string(_modDef4245.gThNz6);
  } else {
    if ("frame" === mode.mode) {
      if (null != mode.view) {
        return mode.view.name;
      }
    }
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
export function selectPreviewTarget(mode, fn, fn2, fn3, fn4) {
  if ("frame" === mode.mode) {
    fn2(mode.surface);
    if (null != mode.appChannel) {
      if (fn3 != null) {
        fn3(mode.appChannel);
      }
    }
    if (null != mode.view) {
      if (fn4 != null) {
        fn4(mode.view.id);
      }
    }
  }
  fn(mode.mode);
}