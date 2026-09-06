// discord_app/modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ Endpoints: c3, ME: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default {
  startEditingRoles(id, id2) {
    const obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj);
  },
  stopEditingRoles() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    const obj = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj);
  },
  updateMemberRoles(guildId, userId, roles) {
    function onEnd() {
      return DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: React3.GUILD_MEMBER(guildId, userId),
      body: null,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj = { roles };
    request.body = obj;
    HTTP.patch(request).then(onEnd, onEnd);
  },
  startEditingNickname() {
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, userId, nick) {
    _require = userId;
    if (null == userId) {
      let GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, userId);
    }
    DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: GUILD_MEMBER_NICKResult, body: { nick }, oldFormErrors: true, rejectWithError: null };
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    const obj3 = require("HTTPUtils");
    HTTP.patch(request).then(
      () => {
        DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
      },
      (status) => {
        const intl = util.intl;
        let stringResult = intl.string(util.t["5LO/Ss"]);
        if (null != closure_0) {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t.rJfW6S);
        }
        if (403 === status.status) {
          const intl3 = util.intl;
          stringResult = intl3.formatToMarkdownString(util.t.Izf9jO, {});
        }
        DispatcherDefault.dispatch({
          type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE",
          error: stringResult,
        });
      },
    );
    const patchResult = HTTP.patch(request);
  },
};
