// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import initialize from "initialize" /* 589 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4021 */;
import closure_7 from "updateSubmittedGuildJoinRequestTotal" /* 7428 */;
import closure_8 from "handleGatewayJoinRequestUpdate" /* 4198 */;
import { Permissions } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

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
      const requestToJoinGuilds = first(8537).fetchRequestToJoinGuilds();
      const obj = first(8537);
    }
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