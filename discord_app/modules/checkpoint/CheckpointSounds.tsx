// discord_app/modules/checkpoint/CheckpointSounds.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import _modDef12457 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-first-machine-scan.mp3.js";
import _modDef12458 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-second-scan.mp3.js";
import _modDef12459 from "../../../discord_assets/assets/checkpoint/2026/sfx/summary-reveal.mp3.js";
import _modDef12460 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-data.mp3.js";
import _modDef12461 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-lab.mp3.js";
import _modDef12462 from "../../../discord_assets/assets/checkpoint/2026/sfx/zoom-whoosh.mp3.js";

require = fn;
let items = [_modDef12457, _modDef12458, _modDef12459, _modDef12460, _modDef12461, _modDef12462];
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
      const obj = { source: _modDef12459, delayMs: 0 };
      items = [obj];
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const obj2 = { source: _modDef12457, delayMs: 0 };
    items1.push(obj2);
    const obj3 = { source: _modDef12458, delayMs: 2800 };
    items1.push(obj3);
  } else {
    let tmp4 = previousRoute !== CheckpointNavigation.CheckpointRoute.HOME;
    if (tmp4) {
      tmp4 = null == CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
      const tmpResult = CheckpointNavigation;
    }
    if (tmp4) {
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const obj4 = { source: _modDef12460, delayMs: 0 };
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
      const obj5 = { source: _modDef12461, delayMs: 0 };
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
