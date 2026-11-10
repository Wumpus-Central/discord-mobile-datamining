// discord_app/modules/conjure/preview/conjurePreviewTargets.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4028 from "../intl/ConjureUntranslated.messages.js";
import ConjurePreviewMode from "ConjurePreviewMode.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
export function getPreviewTargetLabel(string) {
  const mode = string.mode;
  if ("frame" === mode) {
    if (null == string.appChannel) {
      let previewFrameSurfaceLabel = ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface);
    } else {
      const intl4 = util.intl;
      const obj = {
        surface: ConjurePreviewMode.getPreviewFrameSurfaceLabel(string.surface),
        channel: string.appChannel,
      };
      previewFrameSurfaceLabel = intl4.formatToPlainString(_modDef4028["6xVl+N"], obj);
    }
    return previewFrameSurfaceLabel;
  } else if ("widget" === mode) {
    const intl3 = util.intl;
    return intl3.string(_modDef4028.y5GiL1);
  } else if ("overlay" === mode) {
    const intl2 = util.intl;
    return intl2.string(_modDef4028["2940LX"]);
  } else if ("bot" === mode) {
    const intl = util.intl;
    return intl.string(_modDef4028.tjpaGN);
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
