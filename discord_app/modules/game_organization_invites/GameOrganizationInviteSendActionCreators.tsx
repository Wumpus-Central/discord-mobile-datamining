// === Module 14169: GameOrganizationInviteSendActionCreators ===

// Module 14169 (GameOrganizationInviteSendActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Endpoints = fn(1085).Endpoints;
const MessageSendLocation = fn(5085).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteSendActionCreators.tsx");

export default {
  createInvite(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
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
          return { value: "IconComponent", done: "+51" };
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
              closure_0 = tmp7;
              c3 = 1;
              const HTTP = closure_0(target_user_id[3]).HTTP;
              const request = { url: c4.GAME_ORGANIZATION_INVITES(closure_0, tmp3), body: null, rejectWithError: true };
              const obj4 = { target_user_id };
              request.body = obj4;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = target_user_id;
            const tmp17 = new tmp3(target_user_id[4])(closure_128_0);
            throw tmp17;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value: value.body.code, done: true };
            return obj;
          }
        } catch (tmp19) {
          target_user_id = tmp19;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp19;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  sendInvite(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
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
          return { value: "IconComponent", done: "+51" };
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: closure_1(7014).getOrEnsurePrivateChannel(closure_0), done: false };
              return obj5;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              const obj8 = closure_1(7178);
              const obj7 = { content: closure_1(14170)(closure_129_1), tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const obj9 = { location: constants.GAME_ORGANIZATION_INVITE };
              dependencyMap = 2;
              c3 = 1;
              const obj10 = { value: obj8.sendMessage(closure_128_0, obj7, false, obj9), done: false };
              return obj10;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp9) {
          c3 = tmp;
          throw tmp9;
        }
      }
    })();
  }
};