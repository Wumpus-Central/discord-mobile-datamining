// === Module 12942: conjurePlanDesign ===

// Module 12942 (conjurePlanDesign)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import conjurePlanTags from "conjurePlanTags" /* 12943 */;

require = fn;
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.APP_CHANNEL] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.ACTIVITY] = _modDef3995["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.OVERLAY] = _modDef3995["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6980).ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [fn(6980).ConjureSupportedSurface.ACTIVITY, fn(6980).ConjureSupportedSurface.APP_CHANNEL, fn(6980).ConjureSupportedSurface.VOICE_CHANNEL, fn(6980).ConjureSupportedSurface.OVERLAY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export function conjurePlanDesignSurface(experiences) {
  closure_0 = experiences;
  let found = items.find((item) => conjurePlanTags.planDeclaresSurface(closure_0, item));
  if (found == null) {
    found = null;
  }
  return found;
}
export function conjurePlanDesignAlt(proposal) {
  closure_0 = proposal;
  let found = items.find((item) => conjurePlanTags.planDeclaresSurface(closure_0, item));
  if (found == null) {
    found = null;
  }
  if (null == found) {
    let prop = _modDef3995["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
}
export function conjurePlanReferenceImages(proposal) {
  let reference_images = proposal.reference_images;
  if (reference_images == null) {
    reference_images = [];
  }
  return reference_images.map((id, index) => {
    const obj = { id: id.id, alt: null };
    const intl = util.intl;
    obj.alt = intl.formatToPlainString(_modDef3995.xFgQ8L, { number: index + 1 });
    return obj;
  });
}