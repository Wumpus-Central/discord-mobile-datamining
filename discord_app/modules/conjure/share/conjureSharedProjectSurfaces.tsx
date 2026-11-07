// === Module 13006: conjureSharedProjectSurfaces ===

// Module 13006 (conjureSharedProjectSurfaces)
import _modDef4026 from "module_4026" /* 4026 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6900 */;
import size from "module_2" /* 2 */;

const items = [ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, _modDef4026.bHLrO8];
const items1 = [items, , , , , , , ];
const items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4026["hp+8nc"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4026["4V2QWl"]];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4026.oJ06Po];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4026.Qbnej2];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS, _modDef4026.pEwndv];
items1[5] = items6;
const items7 = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4026.HWOzBW];
items1[6] = items7;
const items8 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4026.gsIXM9];
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