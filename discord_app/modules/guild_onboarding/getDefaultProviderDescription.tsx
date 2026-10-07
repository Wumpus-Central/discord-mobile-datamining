// discord_app/modules/guild_onboarding/getDefaultProviderDescription.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/guild_onboarding/getDefaultProviderDescription.tsx");

export default function getDefaultProviderDescription(arg0) {
  if (PlatformTypes.TWITCH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["D/wRWb"]);
  } else if (tmp.YOUTUBE === arg0) {
    const intl = util.intl;
    return intl.string(util.t.TC0upt);
  }
}
