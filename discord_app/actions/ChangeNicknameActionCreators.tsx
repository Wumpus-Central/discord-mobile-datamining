// === Module 9303: ChangeNicknameActionCreators ===

// Module 9303 (ChangeNicknameActionCreators)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default {
  changeNickname(guildId, arg1, arg2, arg3) {
    _require = arg1;
    let nick = arg3;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.GUILD_MEMBER_NICK(guildId, arg2), body: { nick }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj = { nick };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      nick = body.body.nick;
      MessageActionCreatorsDefault;
      if (null != nick) {
        if ("" !== nick) {
          const intl2 = util.intl;
          const obj = { nick };
          let result = intl2.formatToMarkdownString(util.t["gz+HRq"], obj);
        }
        tmp3(tmp4, result);
      }
      const intl = util.intl;
      result = intl.string(util.t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const intl2 = util.intl;
        MessageActionCreatorsDefault.sendBotMessage(closure_0, intl2.formatToMarkdownString(util.t.Izf9jO, {}));
      } else {
        const intl = util.intl;
        MessageActionCreatorsDefault.sendBotMessage(closure_0, intl.string(util.t["5LO/Ss"]));
      }
    });
  }
};