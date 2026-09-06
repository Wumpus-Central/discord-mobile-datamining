// === Module 7120: GuildMemberActionCreators ===

// Module 7120 (GuildMemberActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 5552 */;
import ImpersonateStore from "ImpersonateStore" /* 2014 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(guildId, memberOptions) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (ImpersonateStore.isFullServerPreview(guildId)) {
    let obj = { memberOptions };
    const result = ImpersonateActionCreators.updateImpersonatedData(guildId, obj);
  } else {
    obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId, roles: null, flags: null };
    ({ roles: obj2.roles, flags: obj2.flags } = memberOptions);
    obj.dispatch(obj);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.SET_GUILD_MEMBER(guildId), body: memberOptions, oldFormErrors: flag || undefined, rejectWithError: false };
    return HTTP.patch(request);
  }
};