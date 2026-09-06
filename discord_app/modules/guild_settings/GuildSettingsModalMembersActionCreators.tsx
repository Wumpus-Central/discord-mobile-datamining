// discord_app/modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

({ Endpoints: c3, ME: c4 } = ME);
const result = set.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj);
  },
  stopEditingRoles() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj);
  },
  updateMemberRoles(guildId, closure_1_1, roles) {
    function onEnd() {
      return callback(table[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = dispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_3.GUILD_MEMBER(guildId, closure_1_1), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { roles };
    HTTP.patch(obj).then(onEnd, onEnd);
  },
  startEditingNickname() {
    dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, closure_1_1, nick) {
    const _require = closure_1_1;
    if (null == closure_1_1) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, closure_1_1);
    }
    let obj = dispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: GUILD_MEMBER_NICKResult, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { nick };
    obj[3] = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj4 = sendRequest;
    HTTP.patch(obj).then(
      () => {
        callback2(table[1]).dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
      },
      (status) => {
        const intl = callback(closure_1_2[3]).intl;
        let stringResult = intl.string(callback(closure_1_2[3]).t["5LO/Ss"]);
        if (null != callback) {
          const intl2 = tmp(tmp2[3]).intl;
          stringResult = intl2.string(tmp(tmp2[3]).t.rJfW6S);
        }
        if (403 === status.status) {
          const intl3 = tmp(tmp2[3]).intl;
          stringResult = intl3.formatToMarkdownString(tmp(tmp2[3]).t.Izf9jO, {});
        }
        closure_1_1(closure_1_2[1]).dispatch({
          type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE",
          error: stringResult,
        });
      },
    );
  },
};
