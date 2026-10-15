// === Module 11533: ConjureRemix ===

// Module 11533 (ConjureRemix)
import util from "util" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10907 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_7 = async function _remixConjureProjectInto(arg0) {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp23;
            closure_130_0 = closure_0;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            const obj6 = { ok: false, message: null };
            const intl2 = util.intl;
            obj6.message = intl2.string(_modDef3862.Cn8H0Y);
            closure_130_2 = obj6;
            c4 = 1;
            const obj7 = { name: null, guild_id: null, install_scope: null };
            const name = closure_0.name;
            const _HermesInternal = HermesInternal;
            obj7.name = "" + name.slice(0, 120) + closure_2_6;
            obj7.guild_id = guild_id;
            obj7.install_scope = closure_0.install_scope;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: ConjureActionCreators.createProject(obj7), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value: closure_130_2, done: true };
          return obj9;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_130_3 = value;
            if ("accepted" !== closure_130_3) {
              if ("rejected" === closure_130_3) {
                const obj5 = closure_131_0(closure_131_2[4]);
                c5 = 4;
                c6 = 1;
                const obj11 = {
                  value: closure_131_0(closure_131_2[4]).deleteProject(closure_130_1).catch(() => {

                              }),
                  done: false
                };
                return obj11;
              }
            } else {
              closure_131_4(closure_130_1);
              const intl = closure_131_0(closure_131_2[2]).intl;
              closure_131_5(closure_130_1, intl.string(closure_131_1(closure_131_2[3]).jviD6Y), undefined, { remix: true });
              { ok: true, projectId: null }[1] = closure_130_1;
            }
            c6 = 3;
          }
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_130_1 = value;
            c4 = 0;
            const obj2 = closure_131_0(closure_131_2[5]);
            c5 = 2;
            c6 = 1;
            const obj14 = { value: closure_131_0(closure_131_2[5]).acceptRemix(closure_130_0.id, closure_130_1).catch(() => "rejected"), done: false };
            return obj14;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp22) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp22;
        } else {
          c5 = tmp;
        }
        tmp23 = c4;
      }
    }
  })();
};
const ConjureConnectionStore = fn(10886);
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