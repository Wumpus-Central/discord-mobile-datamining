// === Module 11915: conjurePlanSurfaces ===

// Module 11915 (conjurePlanSurfaces)
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import conjurePlanTags from "conjurePlanTags" /* 11901 */;
import conjurePlanDesign from "conjurePlanDesign" /* 11909 */;

const require = globalThis.__r;

require = fn;
let obj = {};
obj[fn(6947).ConjureSupportedSurface.APP_CHANNEL] = _modDef3849.NBUCvF;
obj[fn(6947).ConjureSupportedSurface.VOICE_CHANNEL] = _modDef3849.vrwvp8;
obj[fn(6947).ConjureSupportedSurface.ACTIVITY] = _modDef3849.oMJF0T;
obj[fn(6947).ConjureSupportedSurface.OVERLAY] = _modDef3849.u06zRd;
obj[fn(6947).ConjureSupportedSurface.PROFILE_WIDGET] = _modDef3849.NZrNII;
obj[fn(6947).ConjureSupportedSurface.AUTOMOD] = _modDef3849["bu0/4I"];
obj[fn(6947).ConjureSupportedSurface.BOT] = _modDef3849.Crinff;
obj[fn(6947).ConjureSupportedSurface.APPLICATION_COMMANDS] = _modDef3849.M3ty0r;
let items = [fn(6947).ConjureSupportedSurface.APP_CHANNEL, fn(6947).ConjureSupportedSurface.ACTIVITY, fn(6947).ConjureSupportedSurface.OVERLAY, fn(6947).ConjureSupportedSurface.VOICE_CHANNEL, fn(6947).ConjureSupportedSurface.PROFILE_WIDGET, fn(6947).ConjureSupportedSurface.AUTOMOD, fn(6947).ConjureSupportedSurface.BOT, fn(6947).ConjureSupportedSurface.APPLICATION_COMMANDS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanSurfaces.tsx");

export const conjurePlanSurfaceRows = function conjurePlanSurfaceRows(proposal, keys) {
  _require = proposal;
  dependencyMap = require("conjurePlanTags").planDeclaresSurface(proposal, require("ConjureProjectTypes").ConjureSupportedSurface.BOT);
  const commands = proposal.commands;
  commands.filter(require("conjurePlanBot").isAppCommand).length;
  let found = items.filter((item) => {
    let planDeclaresSurfaceResult = conjurePlanTags.planDeclaresSurface(closure_0, item);
    if (planDeclaresSurfaceResult) {
      let tmp4 = closure_2;
      if (closure_2) {
        tmp4 = item === ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS;
      }
      planDeclaresSurfaceResult = !tmp4;
    }
    return planDeclaresSurfaceResult;
  });
  return found.map((surface) => {
    proposal = surface;
    if (surface === proposal(dependencyMap[0]).ConjureSupportedSurface.APP_CHANNEL) {
      let app_channel_names = proposal.app_channel_names;
      if (app_channel_names == null) {
        app_channel_names = [];
      }
      items = app_channel_names;
    } else {
      items = [];
    }
    let planDeclaresSurfaceResult = surface === tmp(dependencyMap[0]).ConjureSupportedSurface.BOT;
    if (planDeclaresSurfaceResult) {
      planDeclaresSurfaceResult = length > 0;
    }
    if (planDeclaresSurfaceResult) {
      planDeclaresSurfaceResult = tmp(dependencyMap[3]).planDeclaresSurface(proposal, tmp(dependencyMap[0]).ConjureSupportedSurface.APPLICATION_COMMANDS);
      const tmpResult = tmp(dependencyMap[3]);
    }
    const intl = tmp(dependencyMap[5]).intl;
    const stringResult = intl.string(proposal(dependencyMap[3]).CONJURE_PLAN_SURFACE_LABELS[surface]);
    const intl2 = tmp(dependencyMap[5]).intl;
    let stringResult1 = intl2.string(length[surface]);
    if (tmp5) {
      const intl4 = tmp(dependencyMap[5]).intl;
      obj = { count: items.length };
      let formatToPlainStringResult = intl4.formatToPlainString(keys(dependencyMap[1])["75EkE8"], obj);
      const intl5 = tmp(dependencyMap[5]).intl;
      stringResult1 = intl5.string(keys(dependencyMap[1]).OMNwmi);
    } else {
      formatToPlainStringResult = stringResult;
      if (planDeclaresSurfaceResult) {
        const intl3 = tmp(dependencyMap[5]).intl;
        let obj2 = { count: length };
        stringResult1 = intl3.formatToPlainString(keys(dependencyMap[1]).Xa5mPA, obj2);
        formatToPlainStringResult = stringResult;
      }
    }
    const obj3 = { surface, title: formatToPlainStringResult, description: stringResult1, channelNames: items, preview: null };
    let found = keys.find((item) => {
      if ("design" === item) {
        let AUTOMOD = conjurePlanDesign.conjurePlanDesignSurface(closure_0);
      } else if ("widget" === item) {
        AUTOMOD = ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET;
      } else if ("automod" === item) {
        AUTOMOD = ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD;
      } else if ("bot" === item) {
        const ConjureSupportedSurface = ConjureProjectTypes.ConjureSupportedSurface;
        AUTOMOD = conjurePlanTags.planDeclaresSurface(closure_0, ConjureProjectTypes.ConjureSupportedSurface.BOT) ? ConjureSupportedSurface.BOT : ConjureSupportedSurface.APPLICATION_COMMANDS;
        const planDeclaresSurfaceResult = conjurePlanTags.planDeclaresSurface(closure_0, ConjureProjectTypes.ConjureSupportedSurface.BOT);
      }
      return AUTOMOD === closure_0;
    });
    if (found == null) {
      found = null;
    }
    obj3.preview = found;
    return obj3;
  });
};