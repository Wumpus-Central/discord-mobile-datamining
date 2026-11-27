// discord_app/modules/clips/ClipsSpeakerVolume.tsx
import apply from "../../../_runtime/00012_apply.js";
import size from "../../../_runtime/metro/00002__.js";

let c2 = 100;
const result = size.fileFinishedImporting("modules/clips/ClipsSpeakerVolume.tsx");

export const DEFAULT_VOLUME = 100;
export function normalizeSpeakerVolume(scrollLength) {
  if (Number.isFinite(scrollLength)) {
    let clampResult = apply.clamp(scrollLength, 0, 200);
  } else {
    clampResult = c2;
  }
  return clampResult;
}
export function getNonDefaultSpeakerVolumes(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return tmp !== closure_1_2;
  });
  let fromEntriesResult;
  if (found.length > 0) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(found);
  }
  return fromEntriesResult;
}
export function sanitizeSpeakerVolumes(speakerVolumes) {
  if (null != speakerVolumes) {
    if (typeof speakerVolumes === "object") {
      const _Array = Array;
      if (!Array.isArray(speakerVolumes)) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(speakerVolumes);
        const found = entries.filter((item) => {
          [tmp, tmp2] = item;
          return /^\d+$/.test(tmp) && typeof tmp2 === "number";
        });
        Object.fromEntries(
          found.map((item) => {
            [tmp, tmp2] = item;
            items = [tmp];
            if (Number.isFinite(tmp2)) {
              let clampResult = apply.clamp(tmp2, 0, 200);
            } else {
              clampResult = closure_1_2;
            }
            items[1] = clampResult;
            return items;
          }),
        );
      }
      return {};
    }
  }
}
export function getExportTrackVolumes(speakerVolumes) {
  speakerVolumes = undefined;
  if (speakerVolumes != null) {
    speakerVolumes = speakerVolumes.speakerVolumes;
  }
  if (null != speakerVolumes) {
    if (typeof speakerVolumes === "object") {
      const _Array = Array;
      if (!Array.isArray(speakerVolumes)) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(speakerVolumes);
        const found = entries.filter((item) => {
          [tmp, tmp2] = item;
          return /^\d+$/.test(tmp) && typeof tmp2 === "number";
        });
        let fromEntriesResult = Object.fromEntries(
          found.map((item) => {
            [tmp, tmp2] = item;
            items = [tmp];
            if (Number.isFinite(tmp2)) {
              let clampResult = apply.clamp(tmp2, 0, 200);
            } else {
              clampResult = closure_1_2;
            }
            items[1] = clampResult;
            return items;
          }),
        );
      }
      let obj = {};
      const merged = Object.assign(fromEntriesResult);
      let applicationVolume;
      if (speakerVolumes != null) {
        applicationVolume = speakerVolumes.applicationVolume;
      }
      if (applicationVolume == null) {
        applicationVolume = c2;
      }
      const _Number = Number;
      if (Number.isFinite(applicationVolume)) {
        let clampResult = apply.clamp(applicationVolume, 0, 200);
      } else {
        clampResult = c2;
      }
      obj.application = clampResult;
      let soundboardVolume;
      if (speakerVolumes != null) {
        soundboardVolume = speakerVolumes.soundboardVolume;
      }
      if (soundboardVolume == null) {
        soundboardVolume = c2;
      }
      const _Number2 = Number;
      if (Number.isFinite(soundboardVolume)) {
        let clampResult1 = apply.clamp(soundboardVolume, 0, 200);
      } else {
        clampResult1 = c2;
      }
      obj.soundboard = clampResult1;
      return obj;
    }
  }
  fromEntriesResult = {};
}
