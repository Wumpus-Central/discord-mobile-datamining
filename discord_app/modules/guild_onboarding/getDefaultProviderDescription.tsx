// discord_app/modules/guild_onboarding/getDefaultProviderDescription.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.TC0upt);
  }
};