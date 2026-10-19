// === Module 18598: GameOrganizationInviteActionCreators ===

// Module 18598 (GameOrganizationInviteActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Endpoints = fn(1087).Endpoints;
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
              let body;
              closure_128_1 = undefined;
              if (obj16.isDispatching()) {
                c4 = 1;
                c5 = 1;
                const obj5 = { value: Promise.resolve(), done: false };
                return obj5;
              } else {
                const obj6 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE", code };
                tmp3(tmp44[2]).dispatch(obj6);
                c3 = 1;
                const HTTP = code(tmp44[3]).HTTP;
                const obj7 = { url: c4.GAME_ORGANIZATION_INVITE(code), rejectWithError: true };
                c4 = 3;
                c5 = 1;
                const obj8 = { value: HTTP.get(obj7), done: false };
                return obj8;
              }
              obj16 = tmp3(tmp44[2]);
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c5 = 3;
              const obj11 = { value: c5.resolveGameOrganizationInvite(closure_129_0), done: true };
              return obj11;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_128_2 = tmp44;
            const tmp24 = new tmp3(tmp44[4])(closure_128_2);
            closure_128_1 = tmp24;
            const obj12 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE", code: closure_129_0, error: null };
            const obj13 = { code: closure_128_1.code, message: closure_128_1.message };
            obj12.error = obj13;
            tmp3(tmp44[2]).dispatch(obj12);
            throw closure_128_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            body = value.body;
            const obj15 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: closure_129_0, invite: body };
            tmp3(tmp44[2]).dispatch(obj15);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp44) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp44;
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