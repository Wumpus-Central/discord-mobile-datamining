// discord_app/modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5, closure_2;

let obj = function _fetchGameOrganizationInvite() {
  obj = _asyncToGenerator(async function (arg0) {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c2 = 0;
            let closure_1 = tmp3;
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0) => setTimeout(arg0, 250));
            c3 = 1;
            c4 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 3;
          const obj6 = { value: obj.makeGameOrganizationInviteFixture(closure_0), done: true };
          obj = closure_130_0(closure_130_2[1]);
          return obj6;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = {
  resolveGameOrganizationInvite(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_1;
      let obj11;
      function fetchGameOrganizationInvite() {
        return closure_1_4(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let invite;
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
              invite = undefined;
              const obj14 = tmp(closure_2[2]);
              if (obj14.isDispatching()) {
                c4 = 1;
                c5 = 1;
                const obj4 = { value: Promise.resolve(), done: false };
                return obj4;
              } else {
                const obj5 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: invite };
                const obj8 = tmp(closure_2[2]);
                obj8.dispatch(obj5);
                c3 = 1;
                c4 = 3;
                c5 = 1;
                const obj6 = { value: fetchGameOrganizationInvite(invite), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c5 = 3;
              const obj9 = { value: c5.resolveGameOrganizationInvite(closure_129_0), done: true };
              return obj9;
            }
          } else if (2 === c4) {
            c3 = 0;
            const obj10 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE", code: closure_129_0, error: obj11 };
            const _Error = Error;
            let message;
            const dispatch = closure_2(closure_2[2]).dispatch;
            const tmp18 = closure_2(closure_2[2]);
            if (closure_2 instanceof Error) {
              message = tmp.message;
            }
            obj11 = { message };
            dispatch(obj10);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            invite = value;
            const obj13 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: closure_129_0, invite };
            obj = tmp(closure_2[2]);
            obj.dispatch(obj13);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp35) {
          closure_2 = tmp35;
          if (0 === c3) {
            c5 = 3;
            throw tmp35;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx");

export default obj;
