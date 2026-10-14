// discord_app/modules/conjure/plan/conjurePlanDesign.tsx
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import conjurePlanTags from "conjurePlanTags.tsx";

require = fn;
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.APP_CHANNEL] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.ACTIVITY] = _modDef3849["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.OVERLAY] = _modDef3849["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6952).ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [
  fn(6952).ConjureSupportedSurface.OVERLAY,
  fn(6952).ConjureSupportedSurface.ACTIVITY,
  fn(6952).ConjureSupportedSurface.APP_CHANNEL,
  fn(6952).ConjureSupportedSurface.VOICE_CHANNEL,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(arg0) {
  closure_0 = arg0;
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
    let prop = _modDef3849["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
