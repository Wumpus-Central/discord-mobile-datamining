// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import GuildJoinRequestActionCreatorsDefault from "../GuildJoinRequestActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildJoinRequestStore from "../GuildJoinRequestStore.tsx";
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx",
);

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  [tmp2, require] = _slicedToArray(joinRequest.useState(false), 2);
  const tmp3 = _slicedToArray(joinRequest.useState(false), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp = _slicedToArray(joinRequest.useState(false), 2);
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
}
