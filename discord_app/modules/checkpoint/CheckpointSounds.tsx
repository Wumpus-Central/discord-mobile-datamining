// === Module 14292: CheckpointSounds ===

// Module 14292 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import _modDef14293 from "module_14293" /* 14293 */;
import _modDef14294 from "module_14294" /* 14294 */;
import _modDef14295 from "module_14295" /* 14295 */;
import _modDef14296 from "module_14296" /* 14296 */;
import _modDef14297 from "module_14297" /* 14297 */;

require = fn;
let items = [_modDef14293, _modDef14294, _modDef14295, _modDef14296, _modDef14297];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointSounds.tsx");

export const CHECKPOINT_ROUTE_SOUNDS = items;
export function getCheckpointRouteSounds(arg0) {
  ({ previousRoute, route } = arg0);
  if (previousRoute === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
    if (route === CheckpointNavigation.CheckpointRoute.SIDEKICK) {
      return null;
    }
  }
  if (previousRoute === CheckpointNavigation.CheckpointRoute.FINALIZE_CHARACTER) {
    if (route === CheckpointNavigation.CheckpointRoute.SUMMARY) {
      return [];
    }
  }
  items = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const obj = { source: _modDef14293, delayMs: 0 };
    items.push(obj);
    const obj2 = { source: _modDef14294, delayMs: 2800 };
    items.push(obj2);
  } else {
    let tmp4 = previousRoute !== CheckpointNavigation.CheckpointRoute.HOME;
    if (tmp4) {
      tmp4 = null == CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
      const tmpResult = CheckpointNavigation;
    }
    if (tmp4) {
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const obj3 = { source: _modDef14295, delayMs: 0 };
        items.push(obj3);
      }
      tmpResult4 = CheckpointNavigation;
    }
    let tmp7 = null != CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
    if (tmp7) {
      let tmp8 = route !== CheckpointNavigation.CheckpointRoute.HOME;
      if (tmp8) {
        tmp8 = null == CheckpointNavigation.getCheckpointRoutePresentation(route).statsScreen;
        const tmpResult6 = CheckpointNavigation;
      }
      tmp7 = tmp8;
    }
    if (tmp7) {
      const obj4 = { source: _modDef14296, delayMs: 0 };
      items.push(obj4);
    }
    const tmpResult5 = CheckpointNavigation;
  }
  return items;
}
export function scheduleCheckpointRouteSounds(arr, arg1) {
  closure_0 = arg1;
  closure_1 = [];
  const item = arr.forEach((source) => {
    source = source.source;
    const delayMs = source.delayMs;
    if (delayMs > 0) {
      const _setTimeout = setTimeout;
      closure_1.push(setTimeout(() => source(source), delayMs));
    } else {
      source(source);
    }
  });
  return () => closure_1.forEach((item) => clearTimeout(item));
}