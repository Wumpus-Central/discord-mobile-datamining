// discord_app/modules/conjure/create/createConjureProject.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _createConjureProject(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          ({
            guildId: closure_131_0,
            installScope: closure_131_1,
            prompt: closure_131_2,
            modelSettings: closure_131_3,
            templateId: closure_131_4,
          } = closure_0);
          closure_131_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (null != closure_131_1) {
            const obj5 = { guild_id: closure_131_0, install_scope: closure_131_1 };
            let obj6 = obj5;
          } else {
            obj6 = { guild_id: closure_131_0, auto_install_scope: true, prompt: null };
            dependencyMap = closure_131_2;
            if (closure_131_2 == null) {
              dependencyMap = "";
            }
            obj6.prompt = dependencyMap.slice(0, 4000);
          }
          const project = closure_132_0(closure_132_1[2]).createProject(obj6);
          c5 = 2;
          c6 = 1;
          const obj9 = closure_132_0(closure_132_1[2]);
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_5 = value;
        const obj8 = { templateId: closure_131_4 };
        closure_132_3(closure_131_5, obj8);
        closure_2 = closure_131_3;
        if (closure_131_3 == null) {
          closure_2 = closure_132_0(closure_132_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
        }
        closure_132_4(closure_131_5, closure_2);
        c6 = 3;
        const obj = { value: closure_131_5, done: true };
        return obj;
      }
    } catch (tmp21) {
      c6 = tmp;
      throw tmp21;
    }
  }
};
const ConjureConnectionStore = fn(10698);
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
}
