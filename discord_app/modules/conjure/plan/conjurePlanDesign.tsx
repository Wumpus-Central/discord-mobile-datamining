// === Module 12255: conjurePlanDesign ===

// Module 12255 (conjurePlanDesign)
import _modDef3883 from "module_3883" /* 3883 */;
import conjurePlanTags from "conjurePlanTags" /* 12253 */;

require = fn;
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.APP_CHANNEL] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.ACTIVITY] = _modDef3883["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.OVERLAY] = _modDef3883["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6294).ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [fn(6294).ConjureSupportedSurface.ACTIVITY, fn(6294).ConjureSupportedSurface.APP_CHANNEL, fn(6294).ConjureSupportedSurface.VOICE_CHANNEL, fn(6294).ConjureSupportedSurface.OVERLAY];
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
    let prop = _modDef3883["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};