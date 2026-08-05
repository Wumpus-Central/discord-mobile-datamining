// discord_app/modules/guild_onboarding/getDefaultProviderDescription.tsx
import { PlatformTypes } from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";

const result = require("set").fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.TC0upt);
  }
};