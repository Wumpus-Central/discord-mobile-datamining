// discord_app/modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx
import ME from "ME";

let c3;
let c4;
({ Endpoints: c3, ME: c4 } = ME);
const result = require("sendRequest").fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    let obj = importDefault(709);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj);
  },
  stopEditingRoles() {
    importDefault(709).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    let obj = importDefault(709);
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj);
  },
  updateMemberRoles(guildId, outer1_1, roles) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = importDefault(709);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: closure_3.GUILD_MEMBER(guildId, outer1_1), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { roles };
    HTTP.patch(obj).then(onEnd, onEnd);
  },
  startEditingNickname() {
    importDefault(709).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, outer1_1, nick) {
    const _require = outer1_1;
    if (null == outer1_1) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, outer1_1);
    }
    let obj = importDefault(709);
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = _require(530).HTTP;
    obj = { url: GUILD_MEMBER_NICKResult, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { nick };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj4 = _require(530);
    HTTP.patch(obj).then(() => {
      callback(table[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
    }, (status) => {
      const intl = outer1_1(outer1_2[3]).intl;
      let stringResult = intl.string(outer1_1(outer1_2[3]).t["5LO/Ss"]);
      if (null != outer1_1) {
        const intl2 = tmp(tmp2[3]).intl;
        stringResult = intl2.string(tmp(tmp2[3]).t.rJfW6S);
      }
      if (403 === status.status) {
        const intl3 = tmp(tmp2[3]).intl;
        stringResult = intl3.formatToMarkdownString(tmp(tmp2[3]).t.Izf9jO, {});
      }
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE", error: stringResult });
    });
  }
};