// discord_app/modules/conjure/plan/conjurePlanTags.tsx
import _modDef3862 from "../intl/ConjureUntranslated.messages.js";

const obj = {};
obj[fn(7166).ConjureSupportedSurface.APP_CHANNEL] = _modDef3862.zrk93C;
obj[fn(7166).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3862.r5Ra0p;
obj[fn(7166).ConjureSupportedSurface.ACTIVITY] = fn(1126).t.IC5Ann;
obj[fn(7166).ConjureSupportedSurface.OVERLAY] = _modDef3862.liTNf3;
obj[fn(7166).ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3862["EswAi+"];
obj[fn(7166).ConjureSupportedSurface.AUTOMOD] = _modDef3862.DnWMLj;
obj[fn(7166).ConjureSupportedSurface.BOT] = _modDef3862.VFWfz1;
obj[fn(7166).ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3862.w7JaEP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_SURFACE_LABELS = obj;
export const planDeclaresSurface = function planDeclaresSurface(proposal, BOT) {
  const supported_surfaces = proposal.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(BOT);
  }
  return true === hasItem;
};
