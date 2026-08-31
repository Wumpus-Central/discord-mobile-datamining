// === Module 8127: ? ===

// Module 8127
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
let result = set.fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, closure_4) {
    const _require = arg1;
    closure_1 = arg3;
    const HTTP = _require(530).HTTP;
    obj = { url: Endpoints.GUILD_MEMBER_NICK(guildId, closure_4), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { nick: closure_1 };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.patch(obj).then((body) => {
      const nick = body.body.nick;
      callback2(closure_1_2[2]);
      if (null != nick) {
        if ("" !== nick) {
          const intl2 = callback(tmp[3]).intl;
          const obj = { nick: null };
          obj[0] = nick;
          let result = intl2.formatToMarkdownString(callback(tmp[3]).t["gz+HRq"], obj);
        }
        tmp3(tmp4, result);
      }
      const intl = callback(tmp[3]).intl;
      result = intl.string(callback(tmp[3]).t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const intl2 = callback(closure_1_2[3]).intl;
        callback2(closure_1_2[2]).sendBotMessage(callback, intl2.formatToMarkdownString(callback(closure_1_2[3]).t.Izf9jO, {}));
        const obj2 = callback2(closure_1_2[2]);
      } else {
        const intl = callback(closure_1_2[3]).intl;
        callback2(closure_1_2[2]).sendBotMessage(callback, intl.string(callback(closure_1_2[3]).t["5LO/Ss"]));
        const obj = callback2(closure_1_2[2]);
      }
    });
  }
};