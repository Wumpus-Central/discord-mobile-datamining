// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../../../stores/PermissionStore.tsx";
import closure_7 from "../GuildJoinRequestStore.tsx";
import closure_8 from "../UserGuildJoinRequestStore.tsx";
import { Permissions } from "../../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx",
);

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  [tmp2, require] = callback(joinRequest.useState(false), 2);
  const tmp3 = callback(joinRequest.useState(false), 2);
  const first = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp = callback(joinRequest.useState(false), 2);
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
        canResult = closure_1_6.can(closure_1_9.KICK_MEMBERS, guild);
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
      const requestToJoinGuilds = first(5541).fetchRequestToJoinGuilds();
      const obj = first(5541);
    }
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      callback(true);
      const joinRequestForInterview = first(5541).fetchJoinRequestForInterview(closure_3);
      joinRequestForInterview.finally(() => {
        callback(false);
      });
      const obj = first(5541);
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
}
