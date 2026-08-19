// discord_app/actions/ChangeNicknameActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import ME from "../Constants.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const Endpoints = ME.Endpoints;
let result = obj132.fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, closure_4) {
    const _require = arg1;
    closure_1 = arg3;
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    { url: Endpoints.GUILD_MEMBER_NICK(guildId, closure_4), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { nick: closure_1 };
    obj[3] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.patch(obj).then((result) => {
      const nick = result.body.nick;
      callback2(dependencyMap[2]);
      if (null != nick) {
        if ("" !== nick) {
          const intl2 = callback(dependencyMap[3]).intl;
          const obj = { nick: null };
          obj[0] = nick;
          result = intl2.formatToMarkdownString(callback(dependencyMap[3]).t["gz+HRq"], obj);
        }
        tmp3(tmp4, result);
      }
      const intl = callback(dependencyMap[3]).intl;
      result = intl.string(callback(dependencyMap[3]).t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const intl2 = callback(dependencyMap[3]).intl;
        callback2(dependencyMap[2]).sendBotMessage(callback, intl2.formatToMarkdownString(callback(dependencyMap[3]).t.Izf9jO, {}));
        const obj2 = callback2(dependencyMap[2]);
      } else {
        const intl = callback(dependencyMap[3]).intl;
        callback2(dependencyMap[2]).sendBotMessage(callback, intl.string(callback(dependencyMap[3]).t["5LO/Ss"]));
        const obj = callback2(dependencyMap[2]);
      }
    });
  }
};