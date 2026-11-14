// === Module 13973: createConjureProject ===

// Module 13973 (createConjureProject)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _createConjureProject(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          ({ guildId: closure_130_0, installScope } = closure_0);
          if (installScope === undefined) {
            installScope = "user";
          }
          closure_130_1 = installScope;
          ({ modelSettings: closure_130_2, templateId: closure_130_3 } = closure_0);
          closure_130_4 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj6 = { guild_id: closure_130_0, install_scope: closure_130_1 };
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_131_0(closure_131_1[2]).createProject(obj6), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_130_4 = value;
        const obj9 = { templateId: closure_130_3 };
        closure_131_3(closure_130_4, obj9);
        closure_1 = closure_130_2;
        if (closure_130_2 == null) {
          closure_1 = closure_131_0(closure_131_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
        }
        closure_131_4(closure_130_4, closure_1);
        c5 = 3;
        const obj = { value: closure_130_4, done: true };
        return obj;
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
const ConjureConnectionStore = fn(7365);
({ ensureConnection: c3, stageModelSettings: closure_4 } = ConjureConnectionStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/createConjureProject.tsx");

export default function createConjureProject() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};