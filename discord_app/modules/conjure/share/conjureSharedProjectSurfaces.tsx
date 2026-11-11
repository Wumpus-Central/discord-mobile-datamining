// === Module 13686: conjureSharedProjectSurfaces ===

// Module 13686 (conjureSharedProjectSurfaces)
import _modDef4079 from "module_4079" /* 4079 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6955 */;
import size from "module_2" /* 2 */;

const items = [ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, _modDef4079.bHLrO8];
const items1 = [items, , , , , , , ];
const items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4079["hp+8nc"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4079["4V2QWl"]];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4079.oJ06Po];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4079.Qbnej2];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS, _modDef4079.pEwndv];
items1[5] = items6;
const items7 = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4079.HWOzBW];
items1[6] = items7;
const items8 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4079.gsIXM9];
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