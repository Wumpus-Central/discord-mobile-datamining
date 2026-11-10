// discord_app/modules/conjure/share/conjureSharedProjectSurfaces.tsx
import _modDef4028 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, _modDef4028.bHLrO8];
const items1 = [items, , , , , , ,];
const items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4028["hp+8nc"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4028["4V2QWl"]];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4028.oJ06Po];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4028.Qbnej2];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS, _modDef4028.pEwndv];
items1[5] = items6;
const items7 = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4028.HWOzBW];
items1[6] = items7;
const items8 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4028.gsIXM9];
items1[7] = items8;
const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectSurfaces.tsx");

export function conjureSharedProjectSurfaceLabels(supported_surfaces) {
  const found = items1.filter((item) => {
    [tmp] = item;
    return supported_surfaces.includes(tmp);
  });
  return found.map((item) => {
    [, tmp] = item;
    const intl = supported_surfaces(dependencyMap[2]).intl;
    return intl.string(tmp);
  });
}
