// discord_app/modules/checkpoint/CheckpointSounds.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import _modDef12614 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-first-machine-scan.mp3.js";
import _modDef12615 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-second-scan.mp3.js";
import _modDef12616 from "../../../discord_assets/assets/checkpoint/2026/sfx/summary-reveal.mp3.js";
import _modDef12617 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-data.mp3.js";
import _modDef12618 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-lab.mp3.js";
import _modDef12619 from "../../../discord_assets/assets/checkpoint/2026/sfx/zoom-whoosh.mp3.js";

require = fn;
let items = [_modDef12614, _modDef12615, _modDef12616, _modDef12617, _modDef12618, _modDef12619];
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
      const obj = { source: _modDef12616, delayMs: 0 };
      items = [obj];
      return items;
    }
  }
  const items1 = [];
  if (route === CheckpointNavigation.CheckpointRoute.INTRODUCTION) {
    const obj2 = { source: _modDef12614, delayMs: 0 };
    items1.push(obj2);
    const obj3 = { source: _modDef12615, delayMs: 2800 };
    items1.push(obj3);
  } else {
    let tmp4 = previousRoute !== CheckpointNavigation.CheckpointRoute.HOME;
    if (tmp4) {
      tmp4 = null == CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
      const tmpResult = CheckpointNavigation;
    }
    if (tmp4) {
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const obj4 = { source: _modDef12617, delayMs: 0 };
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
      const obj5 = { source: _modDef12618, delayMs: 0 };
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
