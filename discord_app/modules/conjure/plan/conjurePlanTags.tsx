// === Module 17143: conjurePlanTags ===

// Module 17143 (conjurePlanTags)
import _modDef3849 from "module_3849" /* 3849 */;

const obj = {};
obj[fn(6946).ConjureSupportedSurface.APP_CHANNEL] = _modDef3849.zrk93C;
obj[fn(6946).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849.r5Ra0p;
obj[fn(6946).ConjureSupportedSurface.ACTIVITY] = fn(1126).t.IC5Ann;
obj[fn(6946).ConjureSupportedSurface.OVERLAY] = _modDef3849.liTNf3;
obj[fn(6946).ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3849["EswAi+"];
obj[fn(6946).ConjureSupportedSurface.AUTOMOD] = _modDef3849.DnWMLj;
obj[fn(6946).ConjureSupportedSurface.BOT] = _modDef3849.VFWfz1;
obj[fn(6946).ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3849.w7JaEP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanTags.tsx");

export const CONJURE_PLAN_SURFACE_LABELS = obj;
export const planDeclaresSurface = function planDeclaresSurface(proposal, AUTOMOD) {
  const supported_surfaces = proposal.supported_surfaces;
  let hasItem;
  if (supported_surfaces != null) {
    hasItem = supported_surfaces.includes(AUTOMOD);
  }
  return true === hasItem;
};