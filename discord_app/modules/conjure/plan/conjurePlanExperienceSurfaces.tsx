// === Module 18600: conjurePlanExperienceSurfaces ===

// Module 18600 (conjurePlanExperienceSurfaces)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import slugConjureChannelNameDefault from "slugConjureChannelName" /* 18285 */;
import conjurePlanDesign from "conjurePlanDesign" /* 18601 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanExperienceSurfaces.tsx");

export function conjurePlanExperiencePlacement(proposal, experience) {
  if ("frame" !== experience.kind) {
    return null;
  } else {
    const intl = util.intl;
    closure_0 = intl.string(_modDef4192["6/3tGY"]);
    const surfaces3 = experience.surfaces;
    items = [];
    if (!surfaces3.includes(ConjureProjectTypes.ConjureSupportedSurface.APP_CHANNEL)) {
      const obj2 = { channels: items, launchableAnywhere: null, usableInVoice: null };
      const surfaces = experience.surfaces;
      obj2.launchableAnywhere = surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY);
      const surfaces2 = experience.surfaces;
      obj2.usableInVoice = surfaces2.includes(ConjureProjectTypes.ConjureSupportedSurface.VOICE_CHANNEL);
      return obj2;
    } else {
      let app_channel_names = proposal.app_channel_names;
      if (app_channel_names == null) {
        app_channel_names = [];
      }
      if (null == experience.app_channels) {
        if (app_channel_names.length > 0) {
          let mapped = app_channel_names.map((name) => ({ name }));
        } else {
          let obj = { name: slugConjureChannelNameDefault(experience.name) };
          mapped = [obj];
        }
        const mapped1 = mapped.map((description) => {
          let str2;
          if (description.description != null) {
            str2 = str.trim();
          }
          if (str2 == null) {
            str2 = "";
          }
          const obj = { name: description.name, description: null };
          if ("" === str2) {
            str2 = closure_0;
          }
          obj.description = str2;
          return obj;
        });
      }
      mapped = experience.app_channels;
    }
  }
}
export function conjurePlanDesignExperienceId(experiences) {
  const result = conjurePlanDesign.conjurePlanDesignSurface(experiences);
  require = result;
  let tmp2 = null;
  if (null != result) {
    experiences = experiences.experiences;
    let id;
    if (experiences != null) {
      const found = experiences.find((surfaces) => {
        surfaces = surfaces.surfaces;
        return surfaces.includes(result);
      });
      if (found != null) {
        id = found.id;
      }
    }
    if (id == null) {
      id = null;
    }
    tmp2 = id;
  }
  return tmp2;
}