// discord_app/modules/checkpoint/CheckpointSounds.tsx
import CheckpointNavigation from "CheckpointNavigation.tsx";
import _modDef14190 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-first-machine-scan.mp3.js";
import _modDef14191 from "../../../discord_assets/assets/checkpoint/2026/sfx/character-second-scan.mp3.js";
import _modDef14192 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-data.mp3.js";
import _modDef14193 from "../../../discord_assets/assets/checkpoint/2026/sfx/transition-lab.mp3.js";
import _modDef14194 from "../../../discord_assets/assets/checkpoint/2026/sfx/zoom-whoosh.mp3.js";

require = fn;
let items = [_modDef14190, _modDef14191, _modDef14192, _modDef14193, _modDef14194];
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
    const obj = { source: _modDef14190, delayMs: 0 };
    items.push(obj);
    const obj2 = { source: _modDef14191, delayMs: 2800 };
    items.push(obj2);
  } else {
    let tmp4 = previousRoute !== CheckpointNavigation.CheckpointRoute.HOME;
    if (tmp4) {
      tmp4 = null == CheckpointNavigation.getCheckpointRoutePresentation(previousRoute).statsScreen;
      const tmpResult = CheckpointNavigation;
    }
    if (tmp4) {
      if (null != tmpResult4.getCheckpointRoutePresentation(route).statsScreen) {
        const obj3 = { source: _modDef14192, delayMs: 0 };
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
      const obj4 = { source: _modDef14193, delayMs: 0 };
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
