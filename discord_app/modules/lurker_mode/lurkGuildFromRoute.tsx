// discord_app/modules/lurker_mode/lurkGuildFromRoute.tsx
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
let closure_7 = async function _lurk(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp4;
          closure_2 = tmp6;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          c5 = 2;
          c6 = 3;
          c7 = 1;
          const obj5 = {
            value: GuildActionCreatorsDefault.joinGuild(closure_0, { lurker: true, autoNavigate: false }),
            done: false,
          };
          return obj5;
        }
      } else if (1 === tmp9) {
        c5 = 0;
        closure_131_6.delete(closure_130_1);
        throw closure_4;
      } else if (2 === tmp9) {
        c5 = 0;
        closure_131_6.delete(closure_130_1);
        c7 = 3;
        return { value: false, done: true };
      } else {
        if (3 === tmp9) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_6.delete(closure_130_1);
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let flag = true !== value.body.show_verification_form;
            if (flag) {
              c6 = 4;
              c7 = 1;
              const obj8 = { value: closure_131_0(closure_131_2[3]).waitForGuild(closure_130_0), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else {
          flag = true;
          if (arg0 === 2) {
            c5 = 0;
            closure_131_6.delete(closure_130_1);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
        c5 = 0;
        closure_131_6.delete(closure_130_1);
        c7 = 3;
        const obj9 = { value: flag, done: true };
        return obj9;
      }
    } catch (tmp46) {
      closure_4 = tmp46;
      if (tmp5 === c5) {
        c7 = tmp3;
        throw tmp46;
      } else if (tmp2 === tmp48) {
        c6 = tmp2;
      } else {
        c6 = tmp;
      }
    }
  }
};
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/lurker_mode/lurkGuildFromRoute.tsx");

export default function lurkGuildFromRoute(guildId) {
  if (null != GuildStore.getGuild(guildId)) {
    return Promise.resolve(true);
  } else {
    const sessionId = AuthenticationStore.getSessionId();
    if (obj2.isValidGuildId(guildId)) {
      if (null != sessionId) {
        const _HermesInternal = HermesInternal;
        const combined = "" + sessionId + ":" + guildId;
        value = map.get(combined);
        if (null == value) {
          const tmp4 = (function lurk() {
            const self = this;
            const apply = closure_1_7.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(guildId, combined);
          const result = map.set(combined, tmp4);
          value = tmp4;
        }
        return value;
      }
    }
    return Promise.resolve(false);
  }
}
