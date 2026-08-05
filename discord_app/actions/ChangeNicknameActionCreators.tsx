// discord_app/actions/ChangeNicknameActionCreators.tsx
import { Endpoints } from "ME";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

let result = require("trackInvite").fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, closure_4) {
    const _require = arg1;
    let closure_1 = arg3;
    const HTTP = _sendRequest.HTTP;
    obj = { url: Endpoints.GUILD_MEMBER_NICK(guildId, closure_4), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { nick: closure_1 };
    obj[3] = _sendRequest.rejectWithMigratedError();
    const obj3 = _sendRequest;
    return HTTP.patch(obj).then((body) => {
      const nick = body.body.nick;
      callback2(outer1_2[2]);
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
        const intl2 = callback(outer1_2[3]).intl;
        callback2(outer1_2[2]).sendBotMessage(callback, intl2.formatToMarkdownString(callback(outer1_2[3]).t.Izf9jO, {}));
        const obj2 = callback2(outer1_2[2]);
      } else {
        const intl = callback(outer1_2[3]).intl;
        callback2(outer1_2[2]).sendBotMessage(callback, intl.string(callback(outer1_2[3]).t["5LO/Ss"]));
        const obj = callback2(outer1_2[2]);
      }
    });
  }
};