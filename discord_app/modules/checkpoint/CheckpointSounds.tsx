// === Module 12439: CheckpointSounds ===

// Module 12439 (CheckpointSounds)
import CheckpointNavigation from "CheckpointNavigation" /* 6217 */;
import _modDef12440 from "module_12440" /* 12440 */;
import _modDef12441 from "module_12441" /* 12441 */;
import _modDef12442 from "module_12442" /* 12442 */;
import _modDef12443 from "module_12443" /* 12443 */;
import _modDef12444 from "module_12444" /* 12444 */;
import _modDef12445 from "module_12445" /* 12445 */;

require = fn;
let items = [_modDef12440, _modDef12441, _modDef12442, _modDef12443, _modDef12444, _modDef12445];
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
      const obj = { source: _modDef12442, delayMs: 0 };
      items = [obj];
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const obj2 = { source: _modDef12440, delayMs: 0 };
    items1.push(obj2);
    const obj3 = { source: _modDef12441, delayMs: 2800 };
    items1.push(obj3);
  } else {
    let tmp4 = previousRoute !== CheckpointNavigation.CheckpointRoute.HOME;
    if (tmp4) {
      tmp4 = null == CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
      const tmpResult = CheckpointNavigation;
    }
    if (tmp4) {
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const obj4 = { source: _modDef12443, delayMs: 0 };
        items1.push(obj4);
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
      const obj5 = { source: _modDef12444, delayMs: 0 };
      items1.push(obj5);
    }
    const tmpResult5 = CheckpointNavigation;
  }
  return items1;
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