// === Module 12422: conjurePlanDesign ===

// Module 12422 (conjurePlanDesign)
import _modDef3830 from "module_3830" /* 3830 */;
import conjurePlanTags from "conjurePlanTags" /* 12420 */;

require = fn;
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.APP_CHANNEL] = _modDef3830["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3830["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.ACTIVITY] = _modDef3830["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.OVERLAY] = _modDef3830["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6772).ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [fn(6772).ConjureSupportedSurface.ACTIVITY, fn(6772).ConjureSupportedSurface.APP_CHANNEL, fn(6772).ConjureSupportedSurface.VOICE_CHANNEL, fn(6772).ConjureSupportedSurface.OVERLAY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(proposal) {
  closure_0 = proposal;
  let found = items.find((item) => conjurePlanTags.planDeclaresSurface(closure_0, item));
  if (found == null) {
    found = null;
  }
  return found;
};
export const conjurePlanDesignAlt = function conjurePlanDesignAlt(proposal) {
  closure_0 = proposal;
  let found = items.find((item) => conjurePlanTags.planDeclaresSurface(closure_0, item));
  if (found == null) {
    found = null;
  }
  if (null == found) {
    let prop = _modDef3830["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};