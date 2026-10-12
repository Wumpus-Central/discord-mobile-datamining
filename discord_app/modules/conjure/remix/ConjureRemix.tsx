// === Module 17073: ConjureRemix ===

// Module 17073 (ConjureRemix)
import ConjureActionCreators from "ConjureActionCreators" /* 11413 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_7 = async function _remixConjureProjectInto(arg0) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = closure_0;
            let Cn8H0Y;
            closure_130_1 = null;
            c5 = 1;
            const obj5 = { name: null, guild_id: null, install_scope: null };
            const name = closure_0.name;
            const _HermesInternal = HermesInternal;
            obj5.name = "" + name.slice(0, 120) + closure_2_6;
            obj5.guild_id = guild_id;
            obj5.install_scope = closure_0.install_scope;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: ConjureActionCreators.createProject(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_3 = closure_4;
            if (null != closure_130_1) {
              const obj8 = closure_131_0(closure_131_2[2]);
              c6 = 4;
              c7 = 1;
              const obj7 = {
                value: closure_131_0(closure_131_2[2]).deleteProject(closure_130_1).catch(() => {

                          }),
                done: false
              };
              return obj7;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_130_1 = value;
              c6 = 3;
              c7 = 1;
              const obj10 = { value: closure_131_0(closure_131_2[3]).remixProjectWorkspace(closure_130_0.id, closure_130_1), done: false };
              return obj10;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              c5 = 0;
              closure_131_4(closure_130_1);
              const intl2 = closure_131_0(closure_131_2[5]).intl;
              closure_131_5(closure_130_1, intl2.string(closure_131_1(closure_131_2[4]).jviD6Y), undefined, { remix: true });
              const obj12 = { ok: true, projectId: closure_130_1 };
              c7 = 3;
              const obj13 = { value: obj12, done: true };
              return obj13;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (!(closure_130_3 instanceof closure_131_0(closure_131_2[3]).ConjureRemixError)) {
            Cn8H0Y = closure_131_1(closure_131_2[4]).Cn8H0Y;
            const intl = closure_131_0(closure_131_2[5]).intl;
            { ok: false, message: null }.message = intl.string(Cn8H0Y);
            c7 = 3;
            const obj15 = { ok: false, message: null };
          }
          const kQerlZ = closure_131_1(closure_131_2[4]).kQerlZ;
        }
      } catch (tmp41) {
        closure_4 = tmp41;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp41;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const ConjureConnectionStore = fn(13218);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
let c6 = " (Remix)";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export const remixConjureProjectInto = function remixConjureProjectInto() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};