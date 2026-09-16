// discord_app/modules/vibegrations/lib/VibegrationsRemix.tsx
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_9 = async function _remixVibegrationsProjectInto(arg0) {
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
        return { value: "HermesInternal", done: null };
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
            let ekrwGo;
            closure_130_1 = null;
            c5 = 1;
            const obj4 = { name: null, guild_id: null, install_scope: null };
            const name = closure_0.name;
            const _HermesInternal = HermesInternal;
            obj4.name = "" + name.slice(0, 120) + closure_2_8;
            obj4.guild_id = guild_id;
            obj4.install_scope = closure_0.install_scope;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: VibegrationsActionCreators.createProject(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_3 = closure_4;
            if (null != closure_130_1) {
              const obj7 = closure_131_0(closure_131_2[2]);
              c6 = 4;
              c7 = 1;
              const obj6 = {
                value: closure_131_0(closure_131_2[2]).deleteProject(closure_130_1).catch(() => {

                          }),
                done: false
              };
              return obj6;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_130_1 = value;
              c6 = 3;
              c7 = 1;
              const obj9 = { value: closure_131_6(closure_130_0.id, closure_130_1), done: false };
              return obj9;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c5 = 0;
              closure_131_5(closure_130_1);
              const intl2 = closure_131_0(closure_131_2[4]).intl;
              closure_131_7(closure_130_1, intl2.string(closure_131_1(closure_131_2[3]).so1WC7));
              const obj11 = { ok: true, projectId: closure_130_1 };
              c7 = 3;
              const obj12 = { value: obj11, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          if (!(closure_130_3 instanceof closure_131_4)) {
            ekrwGo = closure_131_1(closure_131_2[3]).ekrwGo;
            const intl = closure_131_0(closure_131_2[4]).intl;
            { ok: false, message: null }.message = intl.string(ekrwGo);
            c7 = 3;
            const obj14 = { ok: false, message: null };
          }
          const bTAItn = closure_131_1(closure_131_2[3]).bTAItn;
        }
      } catch (tmp39) {
        closure_4 = tmp39;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp39;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const VibegrationsConnectionStore = fn(16725);
({ VibegrationsRemixError: closure_4, ensureConnection: hasOwnProperty, remixProjectWorkspace: metroRequire, sendUserMessage: closure_7 } = VibegrationsConnectionStore);
let c8 = " (Remix)";
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRemix.tsx");

export const remixVibegrationsProjectInto = function remixVibegrationsProjectInto() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};