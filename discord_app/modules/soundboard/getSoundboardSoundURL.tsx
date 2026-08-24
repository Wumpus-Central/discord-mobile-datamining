// === Module 13906: getSoundboardSoundURL ===

// Module 13906 (getSoundboardSoundURL)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/soundboard/getSoundboardSoundURL.tsx");

export default function getSoundboardSoundURL(arg0) {
  if ("development" !== window.GLOBAL_ENV.PROJECT_ENV) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + tmp + Endpoints.SOUNDBOARD_SOUND(arg0);
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + Endpoints.SOUNDBOARD_SOUND(arg0);
  }
  return combined;
};