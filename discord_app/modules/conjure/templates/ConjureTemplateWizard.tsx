// discord_app/modules/conjure/templates/ConjureTemplateWizard.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import conjureTemplateIntakeRequests from "conjureTemplateIntakeRequests.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function conjureTemplateStartMessage(templateName) {
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3830["/qSx7+"], { templateName, locale: util.intl.currentLocale });
}
let closure_7 = async function _startConjureTemplateWizard(arg0, arg1) {
  closure_0 = arg0;
  let id = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp3;
            closure_130_0 = closure_0;
            closure_130_1 = id;
            closure_130_2 = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = {
              value: conjureTemplateIntakeRequests.fetchStoredConjureIntake(closure_0, id.id),
              done: false,
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_2 = value;
          if (null != closure_130_2) {
            closure_131_4(closure_130_0, closure_130_1.id);
          } else {
            closure_131_5(closure_130_0, closure_131_6(closure_130_1.name));
          }
          c5 = 3;
        }
      } catch (tmp26) {
        c5 = tmp;
        throw tmp26;
      }
    }
  })();
};
const ConjureConnectionStore = fn(10668);
({ prepareTemplate: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/templates/ConjureTemplateWizard.tsx");

export const conjureWizardServerStep = function conjureWizardServerStep(guildId, stateFromStores) {
  closure_0 = guildId;
  let str = "none";
  if (0 !== stateFromStores.length) {
    let str2 = "pick";
    if (stateFromStores.some((id) => id.id === closure_0)) {
      str2 = "skip";
    }
    str = str2;
  }
  return str;
};
export const conjureTemplateWizardSteps = function conjureTemplateWizardSteps(result1, first1) {
  if ("none" === first1) {
    return ["server"];
  } else {
    const _Array = Array;
    const obj = { length: null };
    const _Math = Math;
    obj.length = Math.max(1, result1.length);
    const arr = Array.from(obj, (arg0, index) => ({ kind: "question", index }));
    if ("pick" === first1) {
      const items = ["about", "server"];
      HermesBuiltin.arraySpread(arr, 2);
      let items1 = items;
    } else {
      items1 = ["about"];
      HermesBuiltin.arraySpread(arr, 1);
    }
    return items1;
  }
};
export const canLeaveConjureWizardQuestion = function canLeaveConjureWizardQuestion(result1, arg1) {
  let tmp = null != result1;
  if (tmp) {
    let tmp2 = true === result1.optional;
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
export { conjureTemplateStartMessage };
export const startConjureTemplateWizard = function startConjureTemplateWizard() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const conjureTemplateWizardGuilds = function conjureTemplateWizardGuilds(
  guildsArray,
  ConjureTemplateWizardSheet,
) {
  closure_0 = ConjureTemplateWizardSheet;
  const found = guildsArray.filter((item) => ConjureUtils.canStartConjureProject(item, closure_0));
  return found.sort((name, name2) => {
    name = name.name;
    return name.localeCompare(name2.name);
  });
};
export const latestConjureIntake = function latestConjureIntake(messages) {
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
export const conjureWizardIntro = function conjureWizardIntro(stateFromStores1) {
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
export const conjureWizardServerCopy = function conjureWizardServerCopy(stateFromStores1) {
  let server;
  if (stateFromStores1 != null) {
    server = stateFromStores1.server;
  }
  if (server == null) {
    const obj = { title: null, hint: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3830.vcxYIA);
    const intl2 = util.intl;
    obj.hint = intl2.string(_modDef3830.auUHPZ);
    server = obj;
  }
  return server;
};
export const conjureWizardQuestions = function conjureWizardQuestions(stateFromStores1) {
  let questions;
  if (stateFromStores1 != null) {
    questions = stateFromStores1.questions;
  }
  if (questions == null) {
    questions = [];
  }
  return questions;
};
export const isConjureWizardComplete = function isConjureWizardComplete(result1, first3) {
  closure_0 = first3;
  return (
    result1.length > 0 &&
    result1.every((optional, index) => {
      let tmp = true === optional.optional;
      if (!tmp) {
        let str = closure_0[index];
        if (str == null) {
          str = "";
        }
        tmp = "" !== str.trim();
      }
      return tmp;
    })
  );
};
export const formatConjureWizardAnswers = function formatConjureWizardAnswers(arr, arg1) {
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
        push(concat(sum, ". ", title, " \u2192"), '"""', trimmed, '"""');
      } else {
        push(concat(sum, ". ", title, " \u2192 ", trimmed));
      }
    }
  });
  return items.join("\n");
};
