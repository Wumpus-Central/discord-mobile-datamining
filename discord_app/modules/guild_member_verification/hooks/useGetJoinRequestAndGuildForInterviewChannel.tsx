// === Module 12783: useGetJoinRequestAndGuildForInterviewChannel ===

// Module 12783 (useGetJoinRequestAndGuildForInterviewChannel)
import initialize from "initialize" /* 504 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5629 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 5630 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4462 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  [tmp2, require] = joinRequest.useState(false);
  [first, dependencyMap] = joinRequest.useState(false);
  let tmp = _slicedToArray(joinRequest.useState(false), 2);
  const castResult = first(11).cast(id);
  _slicedToArray = castResult;
  let obj = first(11);
  const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, joinRequestGuild, PermissionStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const request = GuildJoinRequestStore.getRequest(castResult);
    if (null == request) {
      return { joinRequest: null, isModmin: false, guild: null };
    } else {
      let guild = GuildStore.getGuild(request.guildId);
      if (guild == null) {
        guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: request, isModmin: null, guild: null };
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.KICK_MEMBERS, guild);
      }
      obj.isModmin = canResult;
      obj.guild = guild;
      return obj;
    }
  });
  joinRequest = stateFromStoresObject.joinRequest;
  joinRequestGuild = stateFromStoresObject.guild;
  const items1 = [joinRequestGuild, first];
  const effect = joinRequest.useEffect(() => {
    if (!tmp) {
      closure_2(true);
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
    tmp = null != joinRequestGuild || first;
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      require(true);
      const joinRequestForInterview = GuildJoinRequestActionCreatorsDefault.fetchJoinRequestForInterview(castResult);
      joinRequestForInterview.finally(() => {
        closure_1_0(false);
      });
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
};