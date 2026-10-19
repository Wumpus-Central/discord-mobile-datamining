// === Module 11649: ConjureRemix ===

// Module 11649 (ConjureRemix)
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11011 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 11016 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_8 = async function _remixConjureProjectInto(arg0) {
  let user = arg0;
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
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            const obj6 = { ok: false, message: null };
            const intl2 = util.intl;
            obj6.message = intl2.string(_modDef3820.Cn8H0Y);
            closure_130_1 = obj6;
            const mintRemixTicketResult = ConjureWorkerTickets.mintRemixTicket(user.id);
            closure_130_2 = mintRemixTicketResult;
            mintRemixTicketResult.catch(() => {

            });
            c4 = 1;
            const obj7 = { name: null, guild_id: null, install_scope: null };
            const name = user.name;
            const _HermesInternal = HermesInternal;
            obj7.name = "" + name.slice(0, 120) + closure_2_7;
            obj7.guild_id = guild_id;
            obj7.install_scope = user.install_scope;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: ConjureActionCreators.createProject(obj7), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value: closure_130_1, done: true };
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
              closure_131_4(closure_130_0);
              if ("rejected" === closure_130_3) {
                const obj5 = closure_131_0(closure_131_2[5]);
                c5 = 4;
                c6 = 1;
                const obj11 = {
                  value: closure_131_0(closure_131_2[5]).deleteProject(closure_130_0).catch(() => {

                              }),
                  done: false
                };
                return obj11;
              }
            } else {
              const intl = closure_131_0(closure_131_2[2]).intl;
              closure_131_6(closure_130_0, intl.string(closure_131_1(closure_131_2[3]).jviD6Y), undefined, { remix: true });
              { ok: true, projectId: null }[1] = closure_130_0;
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
            closure_130_0 = value;
            c4 = 0;
            closure_131_5(closure_130_0);
            const obj2 = closure_131_0(closure_131_2[6]);
            c5 = 2;
            c6 = 1;
            const obj15 = { value: closure_131_0(closure_131_2[6]).acceptRemix(closure_130_2, closure_130_0).catch(() => "rejected"), done: false };
            return obj15;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp40) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp40;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const ConjureConnectionStore = fn(10990);
({ closeConnection: closure_4, ensureConnection: hasOwnProperty, sendUserMessage: metroRequire } = ConjureConnectionStore);
let c7 = " (Remix)";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export const remixConjureProjectInto = function remixConjureProjectInto() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};