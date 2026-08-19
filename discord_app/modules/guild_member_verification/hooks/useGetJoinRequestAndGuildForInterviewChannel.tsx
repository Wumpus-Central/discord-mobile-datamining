// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import updateSubmittedGuildJoinRequestTotal from "../GuildJoinRequestStore.tsx";
import handleGatewayJoinRequestUpdate from "../UserGuildJoinRequestStore.tsx";
import { Permissions } from "../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  [tmp2, require] = callback(joinRequest.useState(false), 2);
  const tmp3 = callback(joinRequest.useState(false), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  let tmp = callback(joinRequest.useState(false), 2);
  const castResult = first(11).cast(id);
  callback = castResult;
  let obj = first(11);
  const items = [closure_7, closure_8, joinRequestGuild, closure_6];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const request = closure_1_7.getRequest(closure_3);
    if (null == request) {
      return { joinRequest: null, isModmin: false, guild: null };
    } else {
      let guild = joinRequestGuild.getGuild(request.guildId);
      if (guild == null) {
        guild = closure_1_8.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: null, isModmin: null, guild: null };
      obj[0] = request;
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_1_6.can(Permissions.KICK_MEMBERS, guild);
      }
      obj[1] = canResult;
      obj[2] = guild;
      return obj;
    }
  });
  joinRequest = stateFromStoresObject.joinRequest;
  joinRequestGuild = stateFromStoresObject.guild;
  const items1 = [joinRequestGuild, first];
  const effect = joinRequest.useEffect(() => {
    if (!tmp) {
      dependencyMap(true);
      const requestToJoinGuilds = first(8537).fetchRequestToJoinGuilds();
      const obj = first(8537);
    }
    tmp = null != joinRequestGuild || first;
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      callback(true);
      const joinRequestForInterview = first(8537).fetchJoinRequestForInterview(closure_3);
      joinRequestForInterview.finally(() => {
        callback(false);
      });
      const obj = first(8537);
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
};