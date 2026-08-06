// discord_app/modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateSubmittedGuildJoinRequestTotal from "updateSubmittedGuildJoinRequestTotal";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import { Permissions } from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  let require;
  let tmp2;
  [tmp2, require] = callback(joinRequest.useState(false), 2);
  const tmp3 = callback(joinRequest.useState(false), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp = callback(joinRequest.useState(false), 2);
  const castResult = first(11).cast(id);
  callback = castResult;
  let obj = first(11);
  const items = [updateSubmittedGuildJoinRequestTotal, handleGatewayJoinRequestUpdate, joinRequestGuild, getUncachedChannelPermissions];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    const request = outer1_7.getRequest(_slicedToArray);
    if (null == request) {
      return { joinRequest: null, isModmin: false, guild: null };
    } else {
      let guild = joinRequestGuild.getGuild(request.guildId);
      if (guild == null) {
        guild = outer1_8.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: null, isModmin: null, guild: null };
      obj[0] = request;
      let canResult = null != guild;
      if (canResult) {
        canResult = outer1_6.can(outer1_9.KICK_MEMBERS, guild);
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
      const requestToJoinGuilds = first(8350).fetchRequestToJoinGuilds();
      const obj = first(8350);
    }
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      callback(true);
      const joinRequestForInterview = first(8350).fetchJoinRequestForInterview(_slicedToArray);
      joinRequestForInterview.finally(() => {
        callback(false);
      });
      const obj = first(8350);
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
};