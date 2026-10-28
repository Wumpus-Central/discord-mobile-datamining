// discord_app/modules/conjure/plan/conjurePlanDesign.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import conjurePlanTags from "conjurePlanTags.tsx";

require = fn;
const CONJURE_PLAN_DESIGN_ALTS = {};
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.APP_CHANNEL] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.ACTIVITY] = _modDef3863["3/aHX6"];
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.OVERLAY] = _modDef3863["rPpf5/"];
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.PROFILE_WIDGET] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.AUTOMOD] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.BOT] = null;
CONJURE_PLAN_DESIGN_ALTS[fn(6809).ConjureSupportedSurface.APPLICATION_COMMANDS] = null;
const items = [
  fn(6809).ConjureSupportedSurface.ACTIVITY,
  fn(6809).ConjureSupportedSurface.APP_CHANNEL,
  fn(6809).ConjureSupportedSurface.VOICE_CHANNEL,
  fn(6809).ConjureSupportedSurface.OVERLAY,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanDesign.tsx");

export { CONJURE_PLAN_DESIGN_ALTS };
export const conjurePlanDesignSurface = function conjurePlanDesignSurface(experiences) {
  closure_0 = experiences;
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
    let prop = _modDef3863["3/aHX6"];
  } else {
    prop = obj[found];
  }
  return prop;
};
export const conjurePlanReferenceImages = function conjurePlanReferenceImages(proposal) {
  let reference_images = proposal.reference_images;
  if (reference_images == null) {
    reference_images = [];
  }
  return reference_images.map((id, index) => {
    const obj = { id: id.id, alt: null };
    const intl = util.intl;
    obj.alt = intl.formatToPlainString(_modDef3863.xFgQ8L, { number: index + 1 });
    return obj;
  });
};
