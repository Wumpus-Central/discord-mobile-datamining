// === Module 17882: GameOrganizationInviteActionCreators ===

// Module 17882 (GameOrganizationInviteActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _fetchGameOrganizationInvite() {
  closure_1 = tmp4;
  closure_129_0 = closure_0;
  await new Promise((arg0) => setTimeout(arg0, 250));
  return closure_130_0(closure_130_2[1]).makeGameOrganizationInviteFixture(closure_129_0);
};
const obj = {
  resolveGameOrganizationInvite(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const code = tmp7;
              closure_128_0 = undefined;
              if (obj15.isDispatching()) {
                c4 = 1;
                c5 = 1;
                const obj5 = { value: Promise.resolve(), done: false };
                return obj5;
              } else {
                const obj6 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE", code };
                tmp3(tmp37[2]).dispatch(obj6);
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj7 = {
                  value: (function fetchGameOrganizationInvite() {
                              const self = this;
                              const apply = closure_1_4.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(code),
                  done: false
                };
                return obj7;
              }
              obj15 = tmp3(tmp37[2]);
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              c5 = 3;
              const obj10 = { value: c5.resolveGameOrganizationInvite(closure_129_0), done: true };
              return obj10;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp37;
            const obj11 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE", code: closure_129_0, error: null };
            const _Error = Error;
            let message;
            if (closure_128_1 instanceof Error) {
              message = closure_128_1.message;
            }
            const obj12 = { message };
            obj11.error = obj12;
            tmp3(tmp37[2]).dispatch(obj11);
            throw closure_128_1;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_128_0 = value;
            const obj14 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: closure_129_0, invite: closure_128_0 };
            tmp3(tmp37[2]).dispatch(obj14);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp37) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp37;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx");

export default obj;