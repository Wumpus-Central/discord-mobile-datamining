// === Module 7425: GuildMemberActionCreators ===

// Module 7425 (GuildMemberActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 7062 */;
import ImpersonateStore from "ImpersonateStore" /* 5046 */;

require = fn;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export function updateGuildSelfMember(guildId, memberOptions) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (ImpersonateStore.isFullServerPreview(guildId)) {
    const obj3 = { memberOptions };
    const result = ImpersonateActionCreators.updateImpersonatedData(guildId, obj3);
  } else {
    const obj5 = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId, roles: null, flags: null };
    ({ roles: obj2.roles, flags: obj2.flags } = memberOptions);
    DispatcherDefault.dispatch(obj5);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.SET_GUILD_MEMBER(guildId), body: memberOptions, oldFormErrors: flag || undefined, rejectWithError: false };
    return HTTP.patch(request);
  }
}