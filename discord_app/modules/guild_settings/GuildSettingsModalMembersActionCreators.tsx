// discord_app/modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import intl4 from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Endpoints: c3, ME: closure_4 } = Constants);
let obj = {
  startEditingRoles(id, id2) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING", guildId: id, userId: id2 };
    obj.dispatch(obj2);
  },
  stopEditingRoles() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING" });
  },
  toggleRole(roleId, state) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE", roleId, state };
    obj.dispatch(obj2);
  },
  updateMemberRoles(guildId, userId, roles) {
    let obj2;
    function onEnd() {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE" });
    }
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE" });
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: _false.GUILD_MEMBER(guildId, userId),
      body: obj2,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj2 = { roles };
    const patchResult = HTTP.patch(request);
    patchResult.then(onEnd, onEnd);
  },
  startEditingNickname() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME" });
  },
  changeNickname(guildId, userId, nick) {
    let GUILD_MEMBER_NICKResult;
    let obj3;
    _require = userId;
    if (null == userId) {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER_NICK(guildId, closure_4);
    } else {
      GUILD_MEMBER_NICKResult = closure_3.GUILD_MEMBER(guildId, userId);
    }
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME" });
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: GUILD_MEMBER_NICKResult,
      body: { nick },
      oldFormErrors: true,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const patch = HTTP.patch;
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    patchResult.then(
      () => {
        const obj = DispatcherDefault;
        obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS" });
      },
      (status) => {
        const intl = intl4.intl;
        let stringResult = intl.string(intl4.t["5LO/Ss"]);
        if (null != userId) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t.rJfW6S);
        }
        if (403 === status.status) {
          const intl3 = intl4.intl;
          stringResult = intl3.formatToMarkdownString(intl4.t.Izf9jO, {});
        }
        const obj = DispatcherDefault;
        obj.dispatch({ type: "GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE", error: stringResult });
      },
    );
  },
};
const result = size.fileFinishedImporting("modules/guild_settings/GuildSettingsModalMembersActionCreators.tsx");

export default obj;
