// === Module 17037: VibegrationsTemplateWizard ===

// Module 17037 (VibegrationsTemplateWizard)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTemplateWizard.tsx");

export const vibegrationsTemplateWizardSteps = function vibegrationsTemplateWizardSteps(result2) {
  const items = ["about", "server"];
  HermesBuiltin.arraySpread(Array.from({ length: Math.max(1, result2.length) }, (arg0, index) => ({ kind: "question", index })), 2);
  return items;
};
export const canLeaveVibegrationsWizardQuestion = function canLeaveVibegrationsWizardQuestion(result2, arg1) {
  let tmp = null != result2;
  if (tmp) {
    let tmp2 = true === result2.optional;
    if (!tmp2) {
      let str = arg1;
      if (arg1 == null) {
        str = "";
      }
      tmp2 = "" !== str.trim();
    }
    tmp = tmp2;
  }
  return tmp;
};
export const vibegrationsTemplateStartMessage = function vibegrationsTemplateStartMessage(name) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3714["4lZNuo"], { templateName: name, locale: util.intl.currentLocale });
};
export const vibegrationsTemplateWizardGuilds = function vibegrationsTemplateWizardGuilds(guildsArray, VibegrationsTemplateWizardSheet) {
  closure_0 = VibegrationsTemplateWizardSheet;
  const found = guildsArray.filter((item) => VibegrationsUtils.canStartVibegrationsProject(item, closure_0));
  return found.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
};
export const latestVibegrationsIntake = function latestVibegrationsIntake(messages) {
  let tmp2;
  let diff = messages.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = messages[diff];
      if ("assistant" === tmp2.role) {
        if (null != tmp2.intake) {
          break;
        }
      }
      diff = diff - 1;
    }
    return tmp2.intake;
  }
  return null;
};
export const vibegrationsWizardIntro = function vibegrationsWizardIntro(stateFromStores1) {
  let tmp = null;
  if (null != stateFromStores1) {
    let obj = { lead: stateFromStores1.intro.lead, points: null };
    const points = stateFromStores1.intro.points;
    obj.points = points.map((title) => {
      const obj = { title: title.title };
      if (null != title.subtext) {
        const obj2 = { subtext: title.subtext };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      let str = title.icon;
      if (str == null) {
        str = "shield";
      }
      obj.icon = str;
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};
export const vibegrationsWizardServerCopy = function vibegrationsWizardServerCopy(stateFromStores1) {
  let server;
  if (stateFromStores1 != null) {
    server = stateFromStores1.server;
  }
  if (server == null) {
    const obj = { title: null, hint: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3714.WQCnSf);
    const intl2 = util.intl;
    obj.hint = intl2.string(_modDef3714.KLTQfQ);
    server = obj;
  }
  return server;
};
export const vibegrationsWizardQuestions = function vibegrationsWizardQuestions(stateFromStores1) {
  let questions;
  if (stateFromStores1 != null) {
    questions = stateFromStores1.questions;
  }
  if (questions == null) {
    questions = [];
  }
  return questions;
};
export const isVibegrationsWizardComplete = function isVibegrationsWizardComplete(result2, first2) {
  closure_0 = first2;
  return result2.length > 0 && result2.every((optional, index) => {
    let tmp = true === optional.optional;
    if (!tmp) {
      let str = closure_0[index];
      if (str == null) {
        str = "";
      }
      tmp = "" !== str.trim();
    }
    return tmp;
  });
};
export const formatVibegrationsWizardAnswers = function formatVibegrationsWizardAnswers(arr, arg1) {
  closure_0 = arg1;
  const items = [];
  const item = arr.forEach((optional, index) => {
    let str = closure_0[index];
    if (str == null) {
      str = "";
    }
    const trimmed = str.trim();
    let tmp = "" === trimmed;
    if (tmp) {
      tmp = true === optional.optional;
    }
    if (!tmp) {
      const push = items.push;
      const sum = index + 1;
      const title = optional.title;
      const _HermesInternal = HermesInternal;
      if (trimmed.includes("\n")) {
        push(concat(sum, ". ", title, " \u2192"), "\"\"\"", trimmed, "\"\"\"");
      } else {
        push(concat(sum, ". ", title, " \u2192 ", trimmed));
      }
    }
  });
  return items.join("\n");
};