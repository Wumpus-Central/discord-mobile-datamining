// discord_app/modules/guild_onboarding/getDefaultProviderDescription.tsx
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.TC0upt);
  }
};