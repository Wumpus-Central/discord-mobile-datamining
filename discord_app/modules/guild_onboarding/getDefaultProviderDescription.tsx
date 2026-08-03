// === Module 5536: getDefaultProviderDescription ===

// Module 5536 (getDefaultProviderDescription)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.TC0upt);
  }
};