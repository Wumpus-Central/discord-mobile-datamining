// discord_app/modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = fn(11327).GameOrganizationInviteAcceptStatus;
const Endpoints = fn(1072).Endpoints;
let obj = {
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
                tmp3(tmp44[3]).dispatch(obj6);
                c3 = 1;
                const HTTP = code(tmp44[4]).HTTP;
                const obj7 = { url: c5.GAME_ORGANIZATION_INVITE(code), rejectWithError: true };
                c4 = 3;
                c5 = 1;
                const obj8 = { value: HTTP.get(obj7), done: false };
                return obj8;
              }
              obj16 = tmp3(tmp44[3]);
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
              const obj11 = { value: obj.resolveGameOrganizationInvite(closure_129_0), done: true };
              return obj11;
            }
          } else if (2 === tmp7) {
            c3 = 0;
            closure_128_2 = tmp44;
            const tmp24 = new tmp3(tmp44[5])(closure_128_2);
            closure_128_1 = tmp24;
            const obj12 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE", code: closure_129_0, error: null };
            const obj13 = { code: closure_128_1.code, message: closure_128_1.message };
            obj12.error = obj13;
            tmp3(tmp44[3]).dispatch(obj12);
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
            tmp3(tmp44[3]).dispatch(obj15);
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
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
  },
  fetchInvitableGameOrganizations(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const guild_ids = tmp5;
              let body;
              const HTTP = guild_ids(1283).HTTP;
              const request = { url: constants.GAME_ORGANIZATIONS_INVITABLE, query: null, rejectWithError: true };
              const obj4 = { guild_ids };
              request.query = obj4;
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            const obj7 = {
              type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS",
              guildIds: closure_129_0,
              gameOrganizations: body,
            };
            tmp2(572).dispatch(obj7);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    })();
  },
  fetchCharacterEligibility(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let body;
              const HTTP = tmp5(1283).HTTP;
              const obj4 = { url: Endpoints.GAME_ORGANIZATION_INVITE_CHARACTERS(tmp5), rejectWithError: true };
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: HTTP.get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            const obj7 = {
              type: "GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS",
              code: closure_129_0,
              characters: body.characters,
            };
            tmp2(572).dispatch(obj7);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  },
  acceptGameOrganizationInvite(code, id) {
    closure_1 = id;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const character_id = tmp3;
              code = tmp7;
              let body;
              c3 = 1;
              const HTTP = code(tmp25[4]).HTTP;
              const request = { url: c5.GAME_ORGANIZATION_INVITE_JOIN(code), body: null, rejectWithError: true };
              const obj4 = { character_id };
              request.body = obj4;
              constants = 2;
              c5 = 1;
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp25;
            const tmp23 = new character_id(tmp25[5])(closure_128_1);
            throw tmp23;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            if (body.game_organization_join_status === constants.JOINED) {
              const obj7 = { type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: closure_129_0 };
              character_id(tmp25[3]).dispatch(obj7);
              obj = character_id(tmp25[3]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value: body, done: true };
            return obj8;
          }
        } catch (tmp25) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp25;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx");

export default obj;
