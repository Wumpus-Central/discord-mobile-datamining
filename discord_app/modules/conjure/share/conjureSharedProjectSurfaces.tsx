// discord_app/modules/conjure/share/conjureSharedProjectSurfaces.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4244 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL, _modDef4244.bHLrO8];
const items1 = [items, , , , , , ,];
const items2 = [ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY, _modDef4244["hp+8nc"]];
items1[1] = items2;
const items3 = [ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL, _modDef4244["4V2QWl"]];
items1[2] = items3;
const items4 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, _modDef4244.oJ06Po];
items1[3] = items4;
const items5 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY, _modDef4244.Qbnej2];
items1[4] = items5;
const items6 = [ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS, _modDef4244.pEwndv];
items1[5] = items6;
const items7 = [ConjureProjectTypes.ConjureSupportedSurface.BOT, _modDef4244.HWOzBW];
items1[6] = items7;
const items8 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD, _modDef4244.gsIXM9];
items1[7] = items8;
const items9 = [
  ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL,
  ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY,
  ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL,
];
const items10 = ["app", items9];
const items11 = [items10, , , ,];
const items12 = [ConjureProjectTypes.ConjureSupportedSurface.OVERLAY];
const items13 = ["overlay", items12];
items11[1] = items13;
const items14 = [ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET];
const items15 = ["profile_widget", items14];
items11[2] = items15;
const items16 = [
  ConjureProjectTypes.ConjureSupportedSurface.BOT,
  ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS,
];
const items17 = ["bot", items16];
items11[3] = items17;
const items18 = [ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD];
const items19 = ["automod", items18];
items11[4] = items19;
const obj = {
  app: _modDef4244.BM4Ymz,
  overlay: _modDef4244["0mGHfU"],
  profile_widget: _modDef4244.Jipr29,
  bot: _modDef4244.EbvC13,
  automod: _modDef4244.tiMvei,
};
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
export function conjureSharedProjectTypes(supported_surfaces) {
  closure_0 = supported_surfaces;
  const found = items11.filter((item) => {
    [, obj] = item;
    return obj.some((item) => supported_surfaces.includes(item));
  });
  return found.map((item) => {
    [tmp] = item;
    return tmp;
  });
}
export function conjureSharedProjectTypeLabel(type) {
  const intl = util.intl;
  return intl.string(obj[type]);
}
