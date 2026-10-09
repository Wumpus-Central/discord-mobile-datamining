// === Module 12329: useGetJoinRequestAndGuildForInterviewChannel ===

// Module 12329 (useGetJoinRequestAndGuildForInterviewChannel)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6123 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6124 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4901 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGetJoinRequestAndGuildForInterviewChannel(id) {
  const cResult = c.c(17);
  [tmp5, require] = joinRequest.useState(false);
  [first, dependencyMap] = joinRequest.useState(false);
  if (cResult[0] !== id) {
    const castResult = first(11).cast(id);
    cResult[0] = id;
    cResult[1] = castResult;
    let tmp8 = castResult;
    const obj3 = first(11);
  } else {
    tmp8 = cResult[1];
  }
  _slicedToArray = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, guild, PermissionStore];
    cResult[2] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp8) {
    class M {
      constructor() {
        request = closure_7.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          tmp2 = closure_5;
          guild = closure_5.getGuild(request.guildId);
          if (guild == null) {
            tmp4 = closure_8;
            guild = closure_8.getJoinRequestGuild(request.guildId);
          }
          obj = { joinRequest: null, isModmin: null, guild: null };
          obj.joinRequest = request;
          canResult = null != guild;
          if (canResult) {
            tmp6 = closure_6;
            tmp7 = Permissions;
            canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
          }
          obj.isModmin = canResult;
          obj.guild = guild;
          return obj;
        }
      }
    }
    cResult[3] = tmp8;
    cResult[4] = M;
  } else {
    class M {
      constructor() {
        request = closure_7.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          tmp2 = closure_5;
          guild = closure_5.getGuild(request.guildId);
          if (guild == null) {
            tmp4 = closure_8;
            guild = closure_8.getJoinRequestGuild(request.guildId);
          }
          obj = { joinRequest: null, isModmin: null, guild: null };
          obj.joinRequest = request;
          canResult = null != guild;
          if (canResult) {
            tmp6 = closure_6;
            tmp7 = Permissions;
            canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
          }
          obj.isModmin = canResult;
          obj.guild = guild;
          return obj;
        }
      }
    }
  }
  const tmp4 = _slicedToArray(joinRequest.useState(false), 2);
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp11, M);
  joinRequest = stateFromStoresObject.joinRequest;
  guild = stateFromStoresObject.guild;
  if (cResult[5] === first) {
    class M {
      constructor() {
        request = closure_7.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          tmp2 = closure_5;
          guild = closure_5.getGuild(request.guildId);
          if (guild == null) {
            tmp4 = closure_8;
            guild = closure_8.getJoinRequestGuild(request.guildId);
          }
          obj = { joinRequest: null, isModmin: null, guild: null };
          obj.joinRequest = request;
          canResult = null != guild;
          if (canResult) {
            tmp6 = closure_6;
            tmp7 = Permissions;
            canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
          }
          obj.isModmin = canResult;
          obj.guild = guild;
          return obj;
        }
      }
    }
    const effect = obj2.useEffect(fn, items2);
    if (cResult[9] === tmp8) {
      class M {
        constructor() {
          request = closure_7.getRequest(closure_3);
          if (null == request) {
            return { joinRequest: null, isModmin: false, guild: null };
          } else {
            tmp2 = closure_5;
            guild = closure_5.getGuild(request.guildId);
            if (guild == null) {
              tmp4 = closure_8;
              guild = closure_8.getJoinRequestGuild(request.guildId);
            }
            obj = { joinRequest: null, isModmin: null, guild: null };
            obj.joinRequest = request;
            canResult = null != guild;
            if (canResult) {
              tmp6 = closure_6;
              tmp7 = Permissions;
              canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
            }
            obj.isModmin = canResult;
            obj.guild = guild;
            return obj;
          }
        }
      }
      const effect1 = obj2.useEffect(tmp19, tmp20);
      if (cResult[13] === guild) {
        class M {
          constructor() {
            request = closure_7.getRequest(closure_3);
            if (null == request) {
              return { joinRequest: null, isModmin: false, guild: null };
            } else {
              tmp2 = closure_5;
              guild = closure_5.getGuild(request.guildId);
              if (guild == null) {
                tmp4 = closure_8;
                guild = closure_8.getJoinRequestGuild(request.guildId);
              }
              obj = { joinRequest: null, isModmin: null, guild: null };
              obj.joinRequest = request;
              canResult = null != guild;
              if (canResult) {
                tmp6 = closure_6;
                tmp7 = Permissions;
                canResult = closure_6.can(Permissions.KICK_MEMBERS, guild);
              }
              obj.isModmin = canResult;
              obj.guild = guild;
              return obj;
            }
          }
        }
      }
      const obj4 = { loading: tmp5, joinRequest, joinRequestGuild: guild };
      cResult[13] = guild;
      cResult[14] = joinRequest;
      cResult[15] = tmp5;
      cResult[16] = obj4;
    }
    const fn2 = function w() {
      if (null == joinRequest) {
        require(true);
        const joinRequestForInterview = GuildJoinRequestActionCreatorsDefault.fetchJoinRequestForInterview(closure_3);
        joinRequestForInterview.finally(() => {
          closure_1_0(false);
        });
      }
    };
    const items1 = [joinRequest, tmp8];
    cResult[9] = tmp8;
    cResult[10] = joinRequest;
    cResult[11] = fn2;
    cResult[12] = items1;
    tmp19 = fn2;
    tmp20 = items1;
  }
  fn = function b() {
    if (!tmp) {
      closure_2(true);
      const requestToJoinGuilds = GuildJoinRequestActionCreatorsDefault.fetchRequestToJoinGuilds();
    }
    tmp = null != guild || first;
  };
  items2 = [guild, first];
  cResult[5] = first;
  cResult[6] = guild;
  cResult[7] = fn;
  cResult[8] = items2;
  const tmpResult = initialize;
}) : (function useGetJoinRequestAndGuildForInterviewChannel(id) {
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
      guild = GuildStore.getGuild(request.guildId);
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
});