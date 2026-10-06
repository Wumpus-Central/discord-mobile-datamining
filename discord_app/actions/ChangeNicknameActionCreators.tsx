// === Module 8838: ChangeNicknameActionCreators ===

// Module 8838 (ChangeNicknameActionCreators)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Endpoints = Constants.Endpoints;
let obj = {
  changeNickname(guildId, arg1, arg2, arg3) {
    let closure_0;
    let obj;
    let obj3;
    _require = arg1;
    let nick = arg3;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.GUILD_MEMBER_NICK(guildId, arg2), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { nick };
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      nick = body.body.nick;
      MessageActionCreatorsDefault;
      if (null != nick) {
        let result;
        if ("" !== nick) {
          const intl2 = intl3.intl;
          const obj = { nick };
          result = intl2.formatToMarkdownString(intl3.t["gz+HRq"], obj);
        }
        tmp3(tmp4, result);
      }
      const intl = intl3.intl;
      result = intl.string(intl3.t.Vhpd9A);
    }, (status) => {
      if (403 === status.status) {
        const sendBotMessage2 = MessageActionCreatorsDefault.sendBotMessage;
        MessageActionCreatorsDefault;
        const intl2 = intl3.intl;
        sendBotMessage2(closure_0, intl2.formatToMarkdownString(intl3.t.Izf9jO, {}));
      } else {
        const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
        MessageActionCreatorsDefault;
        const intl = intl3.intl;
        sendBotMessage(closure_0, intl.string(intl3.t["5LO/Ss"]));
      }
    });
  }
};
let result = size.fileFinishedImporting("actions/ChangeNicknameActionCreators.tsx");

export default obj;